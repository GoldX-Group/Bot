require('dotenv').config();

const {
  ActivityType,
  ChannelType,
  Client,
  Events,
  GatewayIntentBits,
  EmbedBuilder,
  PermissionFlagsBits,
  SlashCommandBuilder,
} = require('discord.js');
const {
  AudioPlayerStatus,
  NoSubscriberBehavior,
  VoiceConnectionDisconnectReason,
  VoiceConnectionStatus,
  createAudioPlayer,
  createAudioResource,
  entersState,
  joinVoiceChannel,
} = require('@discordjs/voice');
const { Readable } = require('node:stream');
const fs = require('fs');
const path = require('path');
const { PrismaClient } = require('@prisma/client');

if (!process.env.DATABASE_URL || !process.env.DATABASE_URL.trim()) {
  process.env.DATABASE_URL = 'file:./prisma/dev.db';
}

const prisma = new PrismaClient();
const IS_PRODUCTION = process.env.NODE_ENV === 'production' || process.env.RAILWAY_STATIC_URL;

const FALLBACK_VOICE_CHANNEL_ID = 'REPLACE_WITH_VOICE_CHANNEL_ID';
const FALLBACK_GENERAL_CHANNEL_ID = 'REPLACE_WITH_GENERAL_CHANNEL_ID';

const DISCORD_TOKEN = process.env.DISCORD_TOKEN?.trim();
const GUILD_ID = process.env.GUILD_ID?.trim();
const VOICE_CHANNEL_ID = process.env.VOICE_CHANNEL_ID?.trim() || FALLBACK_VOICE_CHANNEL_ID;
const TICKET_CATEGORY_ID = process.env.TICKET_CATEGORY_ID?.trim() || null;
const ADMIN_ROLE_ID = process.env.ADMIN_ROLE_ID?.trim() || null;
const GENERAL_CHANNEL_ID = process.env.GENERAL_CHANNEL_ID?.trim() || FALLBACK_GENERAL_CHANNEL_ID;
const PROMO_IMAGE_URL = process.env.PROMO_IMAGE_URL?.trim() || null;
const PROMO_MESSAGE_INTERVAL_MINUTES = process.env.PROMO_MESSAGE_INTERVAL_MINUTES?.trim();

if (!DISCORD_TOKEN || !GUILD_ID || !VOICE_CHANNEL_ID || VOICE_CHANNEL_ID === FALLBACK_VOICE_CHANNEL_ID) {
  throw new Error(
    'Missing Discord configuration. Define DISCORD_TOKEN, GUILD_ID y VOICE_CHANNEL_ID en variables de entorno o reemplaza los valores FALLBACK en bot.js.'
  );
}

class SilenceStream extends Readable {
  _read() {
    this.push(Buffer.from([0xf8, 0xff, 0xfe]));
  }
}

function parseColor(input) {
  if (!input) return null;
  const normalized = input.trim().replace(/^0x/i, '#');
  if (!normalized.startsWith('#')) return null;
  const hex = normalized.slice(1);
  if (![3, 6].includes(hex.length) || !/^[0-9a-f]+$/i.test(hex)) {
    return null;
  }
  return `#${hex.length === 3 ? hex.split('').map((c) => c + c).join('') : hex}`;
}

const slashCommands = [
  new SlashCommandBuilder()
    .setName('ticket')
    .setDescription('Crea un ticket privado para soporte.')
    .setDMPermission(false),
  new SlashCommandBuilder()
    .setName('close')
    .setDescription('Cierra el ticket actual. Solo staff o creador.')
    .setDMPermission(false),
  new SlashCommandBuilder()
    .setName('embed')
    .setDescription('Publica un embed personalizado.')
    .addStringOption((option) =>
      option
        .setName('titulo')
        .setDescription('Título del embed')
        .setRequired(true)
    )
    .addStringOption((option) =>
      option.setName('descripcion').setDescription('Descripción del embed').setRequired(false)
    )
    .addStringOption((option) =>
      option
        .setName('color')
        .setDescription('Color en formato hex (ejemplo: #5865F2)')
        .setRequired(false)
    )
    .addChannelOption((option) =>
      option
        .setName('canal')
        .setDescription('Canal donde publicar el embed')
        .addChannelTypes(ChannelType.GuildText)
        .setRequired(false)
    )
    .setDMPermission(false),
  new SlashCommandBuilder()
    .setName('ticketpanel')
    .setDescription('Publica el panel informativo de tickets en un canal.')
    .addChannelOption((option) =>
      option
        .setName('canal')
        .setDescription('Canal donde publicar el panel')
        .addChannelTypes(ChannelType.GuildText)
        .setRequired(false)
    )
    .setDMPermission(false),
  new SlashCommandBuilder()
    .setName('play')
    .setDescription('Reproduce un sonido en el canal configurado.')
    .addStringOption((option) =>
      option.setName('nombre').setDescription('Nombre del sonido (archivo .mp3 en sounds/)').setRequired(true)
    )
    .setDMPermission(false),
  new SlashCommandBuilder()
    .setName('stop')
    .setDescription('Detiene la reproducción de audio y vuelve al modo silencioso.')
    .setDMPermission(false),
  new SlashCommandBuilder()
    .setName('help')
    .setDescription('Muestra todos los comandos disponibles del bot.')
    .setDMPermission(false),
];

const DEFAULT_PROMO_INTERVAL_MS = 30 * 60 * 1000;
const promoIntervalMinutes = Number(PROMO_MESSAGE_INTERVAL_MINUTES ?? DEFAULT_PROMO_INTERVAL_MS / 60_000);
const PROMO_INTERVAL_MS = Number.isFinite(promoIntervalMinutes) && promoIntervalMinutes > 0
  ? promoIntervalMinutes * 60_000
  : DEFAULT_PROMO_INTERVAL_MS;
let promoInterval;

function buildHourlyPromoEmbed() {
  const embed = new EmbedBuilder()
    .setColor('#FF0000')
    .setAuthor({
      name: '🔴 GOLD X - GROUP  - Tienda Oficial',
      iconURL:
        'https://media.discordapp.net/attachments/1461000295814267124/1464234088394260644/Logo_5.png?ex=697aa882&is=69795702&hm=7d9dc3457656985ca445c35950db77a2f3cbad2cc3aab7a0e9fbeb68d54070e6&=&format=webp&quality=lossless&width=263&height=263',
    })
    .setDescription('🎟️ **¡Realiza tus compras únicamente en el canal de tickets!**\n🛎️ Usa **/ticket** para abrir uno con el staff.')
    .addFields(
      {
        name: '🛡️ Garantía',
        value: '- Productos verificados\n- Soporte 24/7\n- Entrega inmediata',
        inline: true,
      },
      {
        name: '💳 Métodos de pago',
        value: '• PayPal\n• Transferencia',
        inline: true,
      },
      {
        name: '🕒 Horario',
        value: '• Disponible 24/7\n• Respuesta rápida\n• Atención personalizada',
      }
    )
    .setImage('https://media.discordapp.net/attachments/1464150603524608092/1465931866703134809/Banner.png?ex=697ae6f0&is=69799570&hm=120b784d241efc13edb36d94beee859a6a214fc9bc364aa3fe480e8e81c7e2c1&=&format=webp&quality=lossless&width=1020&height=588')
    .setFooter({
      text: 'Gold X - Group  Bot · Compras seguras y confiables',
      iconURL:
        'https://media.discordapp.net/attachments/1461000295814267124/1464234088394260644/Logo_5.png?ex=697aa882&is=69795702&hm=7d9dc3457656985ca445c35950db77a2f3cbad2cc3aab7a0e9fbeb68d54070e6&=&format=webp&quality=lossless&width=263&height=263',
    })
    .setTimestamp();

  if (PROMO_IMAGE_URL) {
    embed.setImage(PROMO_IMAGE_URL);
  }

  return embed;
}

async function sendHourlyPromoMessage(channel) {
  try {
    const embed = buildHourlyPromoEmbed();
    await channel.send({ content: '||@everyone|| ||@here||', embeds: [embed] });
  } catch (error) {
    console.error('Error enviando mensaje promocional:', error);
  }
}

async function scheduleHourlyPromo(client) {
  if (!GENERAL_CHANNEL_ID || GENERAL_CHANNEL_ID === FALLBACK_GENERAL_CHANNEL_ID) {
    console.warn('GENERAL_CHANNEL_ID no está configurado; se omiten los mensajes promocionales.');
    return;
  }

  try {
    const channel = await client.channels.fetch(GENERAL_CHANNEL_ID);

    if (!channel || channel.type !== ChannelType.GuildText) {
      console.warn('GENERAL_CHANNEL_ID no apunta a un canal de texto válido; se omiten los mensajes promocionales.');
      return;
    }

    // Enviar el primer mensaje inmediatamente al iniciar
    await sendHourlyPromoMessage(channel);

    if (promoInterval) {
      clearInterval(promoInterval);
    }

    // Programar envíos repetidos cada intervalo
    promoInterval = setInterval(() => {
      sendHourlyPromoMessage(channel);
    }, PROMO_INTERVAL_MS);

    console.log(`Mensajes promocionales programados cada ${PROMO_INTERVAL_MS / 60_000} minutos en ${channel.id}.`);
  } catch (error) {
    console.error('No se pudo programar el mensaje promocional:', error);
  }
}

// Función para crear embeds personalizados (slash command)
async function createCustomEmbed(interaction) {
  await interaction.deferReply({ ephemeral: true });

  try {
    const titleRaw = interaction.options.getString('titulo', true);
    const descriptionRaw = interaction.options.getString('descripcion');
    const colorRaw = interaction.options.getString('color');
    const targetChannel = interaction.options.getChannel('canal') ?? interaction.channel;

    if (!targetChannel || targetChannel.type !== ChannelType.GuildText) {
      await interaction.editReply('El canal objetivo debe ser un canal de texto.');
      return;
    }

    const me = interaction.guild.members.me;
    if (!me || !targetChannel.permissionsFor(me).has(PermissionFlagsBits.SendMessages)) {
      await interaction.editReply('No tengo permisos para enviar mensajes en ese canal.');
      return;
    }

    const embed = new EmbedBuilder().setTitle(titleRaw).setTimestamp();

    if (descriptionRaw) {
      embed.setDescription(descriptionRaw);
    }

    if (colorRaw) {
      const colorValue = parseColor(colorRaw);
      if (!colorValue) {
        await interaction.editReply('El color debe ser un valor hex válido (por ejemplo, #5865F2).');
        return;
      }
      embed.setColor(colorValue);
    } else {
      embed.setColor('#5865f2');
    }

    await targetChannel.send({ embeds: [embed] });
    await interaction.editReply(`Embed publicado en ${targetChannel}.`);
  } catch (error) {
    console.error('Error creating custom embed:', error);
    await interaction.editReply('No se pudo crear el embed. Inténtalo de nuevo más tarde.');
  }
}

// Función para publicar panel de tickets (slash command)
async function sendTicketPanelEmbed(interaction) {
  await interaction.deferReply({ ephemeral: true });

  try {
    const targetChannel = interaction.options.getChannel('canal') ?? interaction.channel;

    if (!targetChannel || targetChannel.type !== ChannelType.GuildText) {
      await interaction.editReply('El canal objetivo debe ser un canal de texto.');
      return;
    }

    const me = interaction.guild.members.me;
    if (!me || !targetChannel.permissionsFor(me).has(PermissionFlagsBits.SendMessages)) {
      await interaction.editReply('No tengo permisos para enviar mensajes en ese canal.');
      return;
    }

    const ticketInstructions = TICKET_CATEGORY_ID
      ? `Usa **/ticket** para crear un ticket. Los tickets se organizarán en la categoría <#${TICKET_CATEGORY_ID}>.`
      : 'Usa **/ticket** para crear un ticket privado con el staff.';

    const embed = new EmbedBuilder()
      .setColor('#f1c40f')
      .setTitle('🎫 Centro de Tickets')
      .setDescription(ticketInstructions)
      .addFields(
        {
          name: 'Cómo cerrar un ticket',
          value: 'Dentro del canal del ticket escribe **/close** cuando quieras finalizar la conversación.',
        },
        {
          name: 'Embeds personalizados',
          value: 'Los moderadores pueden usar **/embed** para dar avisos importantes.',
        },
        {
          name: 'Sonidos',
          value: 'Usa **/play nombre** para audio y **/stop** para detenerlo.',
        }
      )
      .setFooter({ text: `Solicitado por ${interaction.user.tag}` })
      .setTimestamp();

    await targetChannel.send({ embeds: [embed] });

    const responseContent =
      targetChannel.id === interaction.channel?.id
        ? 'Panel de tickets publicado.'
        : `Panel de tickets publicado en ${targetChannel}.`;

    await interaction.editReply(responseContent);
  } catch (error) {
    console.error('Error sending ticket panel embed:', error);
    await interaction.editReply('No se pudo enviar el panel de tickets. Inténtalo de nuevo más tarde.');
  }
}

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildVoiceStates,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMembers,
  ],
});

let voiceConnection;
let audioPlayer;
let silenceResource;

/**
 * Joins the configured voice channel and starts a silent audio stream to avoid disconnects.
 */
async function connectToVoiceChannel() {
  const channel = await fetchVoiceChannel();

  const connection = joinVoiceChannel({
    channelId: channel.id,
    guildId: channel.guild.id,
    adapterCreator: channel.guild.voiceAdapterCreator,
    selfDeaf: false,
    selfMute: false,
  });

  voiceConnection = connection;

  connection.on('stateChange', (oldState, newState) => {
    console.log(`Voice connection state changed ${oldState.status} -> ${newState.status}`);
  });

  connection.on('error', (error) => {
    console.error('Voice connection error:', error);
  });

  audioPlayer = createAudioPlayer({
    behaviors: {
      noSubscriber: NoSubscriberBehavior.Play,
    },
  });

  audioPlayer.on('stateChange', (oldState, newState) => {
    console.log(`Audio player state changed ${oldState.status} -> ${newState.status}`);
  });

  audioPlayer.on('error', (error) => {
    console.error('Audio player error:', error);
  });

  silenceResource = createAudioResource(new SilenceStream());
  audioPlayer.play(silenceResource);

  connection.subscribe(audioPlayer);

  await entersState(connection, VoiceConnectionStatus.Ready, 20_000);
  console.log('Connected to voice channel and streaming silence.');

  connection.on('stateChange', async (oldState, newState) => {
    if (
      newState.status === VoiceConnectionStatus.Disconnected &&
      newState.reason === VoiceConnectionDisconnectReason.WebSocketClose &&
      newState.closeCode === 4014
    ) {
      try {
        await entersState(connection, VoiceConnectionStatus.Connecting, 5_000);
      } catch (error) {
        console.warn('Reconnecting to voice channel after disconnect.');
        connectToVoiceChannel().catch((err) => {
          console.error('Failed to reconnect to voice channel:', err);
        });
      }
    } else if (newState.status === VoiceConnectionStatus.Destroyed) {
      console.warn('Voice connection destroyed, reconnecting...');
      connectToVoiceChannel().catch((err) => {
        console.error('Failed to reconnect to voice channel:', err);
      });
    }
  });
}

async function fetchVoiceChannel() {
  const guild = await client.guilds.fetch(GUILD_ID);
  const channel = await guild.channels.fetch(VOICE_CHANNEL_ID);

  if (!channel || !channel.isVoiceBased()) {
    throw new Error(
      'VOICE_CHANNEL_ID must point to a voice channel the bot has permission to join.'
    );
  }

  return channel;
}

// Función para crear tickets
async function createTicket(interaction) {
  await interaction.deferReply({ ephemeral: true });

  try {
    const guild = interaction.guild;
    if (!guild) {
      await interaction.editReply('Este comando solo puede usarse dentro de un servidor.');
      return;
    }

    // Verificar si ya existe un ticket abierto para este usuario
    const existingTicket = await prisma.ticket.findFirst({
      where: {
        guildId: GUILD_ID,
        userId: interaction.user.id,
        status: 'OPEN',
      },
    });

    if (existingTicket) {
      await interaction.editReply(`Ya tienes un ticket abierto: <#${existingTicket.channelId}>`);
      return;
    }

    const currentChannel = interaction.channel;
    if (TICKET_CATEGORY_ID && currentChannel?.parentId !== TICKET_CATEGORY_ID) {
      await interaction.editReply(
        `Este comando solo se puede usar en la categoría configurada <#${TICKET_CATEGORY_ID}>.`
      );
      return;
    }

    const ticketBaseName = interaction.user.username.toLowerCase().replace(/[^a-z0-9_-]/gi, '-');
    const ticketName = `ticket-${ticketBaseName}-${Date.now().toString(36)}`;

    const permissionOverwrites = [
      {
        id: guild.roles.everyone.id,
        deny: [PermissionFlagsBits.ViewChannel],
      },
      {
        id: interaction.user.id,
        allow: [
          PermissionFlagsBits.ViewChannel,
          PermissionFlagsBits.SendMessages,
          PermissionFlagsBits.ReadMessageHistory,
        ],
      },
    ];

    if (ADMIN_ROLE_ID) {
      permissionOverwrites.push({
        id: ADMIN_ROLE_ID,
        allow: [
          PermissionFlagsBits.ViewChannel,
          PermissionFlagsBits.SendMessages,
          PermissionFlagsBits.ReadMessageHistory,
          PermissionFlagsBits.ManageMessages,
        ],
      });
    }

    const ticketChannel = await guild.channels.create({
      name: ticketName,
      type: ChannelType.GuildText,
      parent: TICKET_CATEGORY_ID || undefined,
      topic: `Ticket owner:${interaction.user.id}`,
      permissionOverwrites,
    });

    const embed = new EmbedBuilder()
      .setColor('#00ff00')
      .setTitle('🎫 Ticket Creado')
      .setDescription(`Hola ${interaction.user}, tu ticket ha sido creado. El staff te responderá pronto.`)
      .addFields(
        { name: 'Usuario', value: interaction.user.tag, inline: true },
        { name: 'ID', value: interaction.user.id, inline: true }
      )
      .setTimestamp();

    await ticketChannel.send({ embeds: [embed] });

    // Guardar ticket en la base de datos
    const ticket = await prisma.ticket.create({
      data: {
        guildId: GUILD_ID,
        userId: interaction.user.id,
        channelId: ticketChannel.id,
        status: 'OPEN',
        priority: 'MEDIUM',
      },
    });

    // Guardar mensaje inicial del ticket
    await prisma.ticketMessage.create({
      data: {
        ticketId: ticket.id,
        authorId: interaction.user.id,
        content: embed.toJSON().description || 'Ticket creado',
      },
    });

    // Registrar actividad
    await logActivity(interaction.user.id, 'TICKET_CREATED', {
      ticketId: ticket.id,
      channelId: ticketChannel.id,
    });

    await interaction.editReply(`Tu ticket ha sido creado en ${ticketChannel}.`);
  } catch (error) {
    console.error('Error creating ticket:', error);
    await interaction.editReply('No se pudo crear el ticket. Por favor, contacta a un administrador.');
  }
}

// Función para cerrar tickets
async function closeTicket(interaction) {
  await interaction.deferReply({ ephemeral: true });

  try {
    const channel = interaction.channel;
    if (!channel || channel.type !== ChannelType.GuildText) {
      await interaction.editReply('Este comando solo se puede usar dentro de un canal de ticket.');
      return;
    }

    if (!channel.name.startsWith('ticket-')) {
      await interaction.editReply('Este comando solo se puede usar en canales de tickets.');
      return;
    }

    const member = await interaction.guild.members.fetch(interaction.user.id);
    const isAdmin = ADMIN_ROLE_ID
      ? member.roles.cache.has(ADMIN_ROLE_ID)
      : member.permissions.has(PermissionFlagsBits.ManageGuild);
    const channelTopic = channel.topic || '';
    const ownerIdMatch = channelTopic.match(/Ticket owner:(\d+)/);
    const ownerId = ownerIdMatch ? ownerIdMatch[1] : null;
    const isTicketCreator = ownerId ? ownerId === interaction.user.id : channel.permissionOverwrites.cache.has(interaction.user.id);

    if (!isAdmin && !isTicketCreator) {
      await interaction.editReply('No tienes permisos para cerrar este ticket.');
      return;
    }

    const messages = await channel.messages.fetch({ limit: 100 });
    let transcript = `Transcript del ticket: ${channel.name}\n`;
    transcript += `Creado por: ${ownerId || 'desconocido'}\n`;
    transcript += `Cerrado por: ${interaction.user.tag}\n`;
    transcript += `Fecha: ${new Date().toLocaleString()}\n\n`;

    messages
      .sort((a, b) => a.createdTimestamp - b.createdTimestamp)
      .forEach((msg) => {
        const content = msg.content || (msg.attachments.size > 0 ? '[Adjunto]' : '');
        transcript += `[${msg.createdAt.toLocaleString()}] ${msg.author.tag}: ${content}\n`;
      });

    const embed = new EmbedBuilder()
      .setColor('#ff9900')
      .setTitle('🔒 Ticket Cerrado')
      .setDescription('Este ticket será cerrado en 5 segundos...')
      .addFields(
        { name: 'Cerrado por', value: interaction.user.tag, inline: true },
        { name: 'Canal', value: channel.name, inline: true }
      )
      .setTimestamp();

    await channel.send({ embeds: [embed] });

    const transcriptsDir = path.join(__dirname, 'transcripts');
    try {
      if (!fs.existsSync(transcriptsDir)) {
        fs.mkdirSync(transcriptsDir, { recursive: true });
      }
      fs.writeFileSync(path.join(transcriptsDir, `${channel.name}.txt`), transcript, 'utf8');
    } catch (writeError) {
      console.warn('No se pudo guardar el transcript:', writeError);
    }

    setTimeout(async () => {
      try {
        // Actualizar ticket en base de datos antes de eliminar
        await prisma.ticket.updateMany({
          where: {
            guildId: GUILD_ID,
            channelId: channel.id,
          },
          data: {
            status: 'CLOSED',
          },
        });

        await channel.delete('Ticket cerrado');
      } catch (error) {
        console.error('Error deleting ticket channel:', error);
      }
    }, 5000);

    // Registrar actividad
    await logActivity(interaction.user.id, 'TICKET_CLOSED', {
      channelId: channel.id,
    });

    await interaction.editReply('Ticket cerrado. El canal se eliminará en 5 segundos.');
  } catch (error) {
    console.error('Error closing ticket:', error);
    await interaction.editReply('No se pudo cerrar el ticket. Por favor, contacta a un administrador.');
  }
}

// Función para reproducir sonido
async function playSound(interaction) {
  await interaction.deferReply({ ephemeral: true });

  try {
    const soundName = interaction.options.getString('nombre', true).trim();
    const voiceChannel = interaction.member?.voice?.channel;
    if (!voiceChannel) {
      await interaction.editReply('Debes estar en un canal de voz para usar este comando.');
      return;
    }

    if (!voiceConnection || voiceConnection.state.status === VoiceConnectionStatus.Destroyed) {
      await connectToVoiceChannel();
    }

    if (!voiceConnection || voiceConnection.joinConfig.guildId !== voiceChannel.guild.id) {
      await interaction.editReply('No hay ninguna reproducción activa en este servidor.');
      return;
    }

    if (voiceConnection.joinConfig.channelId !== VOICE_CHANNEL_ID || voiceChannel.id !== VOICE_CHANNEL_ID) {
      await interaction.editReply(`Debes estar en el canal de voz configurado (<#${VOICE_CHANNEL_ID}>) para reproducir sonidos.`);
      return;
    }

    if (!audioPlayer) {
      throw new Error('Audio player no inicializado.');
    }

    const soundPath = path.join(__dirname, 'sounds', `${soundName}.mp3`);
    if (!fs.existsSync(soundPath)) {
      await interaction.editReply(`No se encontró el sonido "${soundName}".`);
      return;
    }

    const resource = createAudioResource(soundPath);
    audioPlayer.removeAllListeners(AudioPlayerStatus.Idle);
    audioPlayer.play(resource);

    audioPlayer.once(AudioPlayerStatus.Idle, () => {
      if (silenceResource && audioPlayer.state.status !== AudioPlayerStatus.Playing) {
        audioPlayer.play(silenceResource);
      }
    });

    await interaction.editReply(`Reproduciendo: ${soundName}`);
  } catch (error) {
    console.error('Error playing sound:', error);
    await interaction.editReply('No se pudo reproducir el sonido.');
  }
}

// Función para detener sonido
async function stopSound(interaction) {
  await interaction.deferReply({ ephemeral: true });

  try {
    const voiceChannel = interaction.member?.voice?.channel;
    if (!voiceChannel) {
      await interaction.editReply('Debes estar en un canal de voz para usar este comando.');
      return;
    }

    if (!voiceConnection || voiceConnection.joinConfig.guildId !== voiceChannel.guild.id) {
      await interaction.editReply('No hay ninguna reproducción activa.');
      return;
    }

    if (voiceConnection.joinConfig.channelId !== VOICE_CHANNEL_ID || voiceChannel.id !== VOICE_CHANNEL_ID) {
      await interaction.editReply(`Debes estar en el canal de voz configurado (<#${VOICE_CHANNEL_ID}>) para controlar la reproducción.`);
      return;
    }

    if (!audioPlayer || !silenceResource) {
      throw new Error('Audio player no inicializado.');
    }

    audioPlayer.stop();
    if (silenceResource) {
      audioPlayer.play(silenceResource);
    }

    await interaction.editReply('La reproducción ha sido detenida.');
  } catch (error) {
    console.error('Error stopping sound:', error);
    await interaction.editReply('No se pudo detener el sonido.');
  }
}

async function showHelp(interaction) {
  const embed = new EmbedBuilder()
    .setColor('#5865f2')
    .setTitle('📋 Comandos disponibles')
    .setDescription(
      slashCommands
        .map((command) => `**/${command.name}** - ${command.description}`)
        .join('\n')
    )
    .setTimestamp();

  await interaction.reply({ embeds: [embed], ephemeral: true });
}

// Inicialización de Prisma y datos base
async function initializeDatabase() {
  try {
    // Asegurar que existe configuración para el guild
    const guildSetting = await prisma.guildSetting.upsert({
      where: { guildId: GUILD_ID },
      update: {},
      create: {
        guildId: GUILD_ID,
        locale: 'es',
      },
    });

    console.log('Base de datos inicializada para el guild:', GUILD_ID);
    return guildSetting;
  } catch (error) {
    console.error('Error inicializando base de datos:', error);
    throw error;
  }
}

// Registrar actividad en audit logs
async function logActivity(actorId, action, metadata = null) {
  try {
    await prisma.auditLog.create({
      data: {
        guildId: GUILD_ID,
        actorId,
        action,
        metadata: metadata ? JSON.stringify(metadata) : null,
      },
    });
  } catch (error) {
    console.error('Error registrando actividad:', error);
  }
}

// Manejador de interacciones de slash commands
client.on(Events.InteractionCreate, async (interaction) => {
  if (!interaction.guild) return;
  if (!interaction.isChatInputCommand()) return;

  try {
    switch (interaction.commandName) {
      case 'ticket':
        await createTicket(interaction);
        break;
      case 'close':
        await closeTicket(interaction);
        break;
      case 'embed':
        await createCustomEmbed(interaction);
        break;
      case 'ticketpanel':
        await sendTicketPanelEmbed(interaction);
        break;
      case 'play':
        await playSound(interaction);
        break;
      case 'stop':
        await stopSound(interaction);
        break;
      case 'help':
        await showHelp(interaction);
        break;
      default:
        await interaction.reply({ content: 'Comando no reconocido.', ephemeral: true });
    }
  } catch (error) {
    console.error('Error handling interaction:', error);
    if (!interaction.replied) {
      try {
        await interaction.reply({
          content: 'Hubo un error al procesar tu comando. Por favor, intenta de nuevo.',
          ephemeral: true,
        });
      } catch (replyError) {
        console.error('No se pudo notificar el error al usuario:', replyError);
      }
    }
  }
});

client.once(Events.ClientReady, async (readyClient) => {
  console.log(`Logged in as ${readyClient.user.tag}`);

  // Inicializar base de datos
  try {
    await initializeDatabase();
  } catch (error) {
    console.error('No se pudo inicializar la base de datos. Continuando sin persistencia.');
  }

  readyClient.user.setPresence({
    activities: [
      {
        name: 'Jugando Gold X - Group',
        type: ActivityType.Playing,
      },
    ],
    status: 'online',
  });

  try {
    const commandsJson = slashCommands.map((command) => command.toJSON());
    const guild = readyClient.guilds.cache.get(GUILD_ID) ?? (await readyClient.guilds.fetch(GUILD_ID));
    if (guild) {
      await guild.commands.set(commandsJson);
      console.log('Slash commands registered for guild.');
    } else {
      console.warn('No se pudo registrar los comandos porque el bot no está en el guild configurado.');
    }
  } catch (error) {
    console.error('Failed to register slash commands:', error);
  }

  try {
    await connectToVoiceChannel();
  } catch (error) {
    console.error('Failed to connect to voice channel on startup:', error);
  }

  // Programar mensajes promocionales
  await scheduleHourlyPromo(readyClient);
});

client.on('error', (error) => {
  console.error('Discord client error:', error);
});

client.on('shardError', (error) => {
  console.error('Shard error:', error);
});

client.login(DISCORD_TOKEN).catch((error) => {
  console.error('Failed to login, verify your bot token.', error);
  process.exit(1);
});

process.on('unhandledRejection', (reason) => {
  console.error('Unhandled promise rejection:', reason);
});

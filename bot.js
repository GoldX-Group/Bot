require('dotenv').config();

const {
  ActivityType,
  ChannelType,
  Client,
  Events,
  GatewayIntentBits,
  EmbedBuilder,
  PermissionFlagsBits,
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

const {
  DISCORD_TOKEN,
  GUILD_ID,
  VOICE_CHANNEL_ID,
  TICKET_CATEGORY_ID,
  ADMIN_ROLE_ID,
} = process.env;

const COMMAND_KEYWORD = 'bot';

if (!DISCORD_TOKEN || !GUILD_ID || !VOICE_CHANNEL_ID) {
  throw new Error(
    'Missing environment variables. Ensure DISCORD_TOKEN, GUILD_ID and VOICE_CHANNEL_ID are set.'
  );
}

class SilenceStream extends Readable {
  _read() {
    this.push(Buffer.from([0xf8, 0xff, 0xfe]));
  }
}

// Función para crear embeds personalizados
async function createCustomEmbed(message, args) {
  try {
    if (args.length === 0) {
      await message.reply(
        'Uso: !embed Título | Descripción | #colorOpcional (por ejemplo: !embed Aviso | Bienvenidos al servidor | #5865F2)'
      );
      return;
    }

    const raw = args.join(' ');
    const [titleRaw, descriptionRaw, colorRaw] = raw.split('|').map((part) => part?.trim());

    if (!titleRaw) {
      await message.reply('Debes indicar un título para el embed.');
      return;
    }

    const embed = new EmbedBuilder().setTitle(titleRaw).setTimestamp();

    if (descriptionRaw) {
      embed.setDescription(descriptionRaw);
    }

    if (colorRaw) {
      const colorValue = parseColor(colorRaw);
      if (!colorValue) {
        await message.reply('El color debe ser un valor hex válido (por ejemplo, #5865F2).');
        return;
      }
      embed.setColor(colorValue);
    } else {
      embed.setColor('#5865f2');
    }

    await message.channel.send({ embeds: [embed] });

    if (message.channel.permissionsFor(message.guild.members.me).has(PermissionFlagsBits.ManageMessages)) {
      await message.delete().catch(() => {});
    }
  } catch (error) {
    console.error('Error creating custom embed:', error);
    await message.reply('No se pudo crear el embed. Inténtalo de nuevo más tarde.');
  }
}

// Función para publicar panel de tickets
async function sendTicketPanelEmbed(message, args) {
  try {
    let targetChannel = message.channel;

    if (args.length > 0) {
      const mentionMatch = args[0].match(/<#(\d+)>/);
      if (mentionMatch) {
        const channelId = mentionMatch[1];
        const fetchedChannel = message.guild.channels.cache.get(channelId) ?? (await message.guild.channels.fetch(channelId).catch(() => null));
        if (fetchedChannel && fetchedChannel.type === ChannelType.GuildText) {
          targetChannel = fetchedChannel;
        } else {
          await message.reply('No pude encontrar el canal mencionado o no es un canal de texto.');
          return;
        }
      }
    }

    if (targetChannel.type !== ChannelType.GuildText) {
      await message.reply('El canal objetivo debe ser un canal de texto.');
      return;
    }

    const ticketInstructions = TICKET_CATEGORY_ID
      ? `Usa **!ticket** para crear un ticket. Los tickets se organizarán en la categoría <#${TICKET_CATEGORY_ID}>.`
      : 'Usa **!ticket** para crear un ticket privado con el staff.';

    const embed = new EmbedBuilder()
      .setColor('#f1c40f')
      .setTitle('🎫 Centro de Tickets')
      .setDescription(ticketInstructions)
      .addFields(
        {
          name: 'Cómo cerrar un ticket',
          value: 'Dentro del canal del ticket escribe **!close** cuando quieras finalizar la conversación.',
        },
        {
          name: 'Embeds personalizados',
          value: 'Los moderadores pueden usar **!embed Título | Descripción | #color** para dar avisos importantes.',
        },
        {
          name: 'Sonidos',
          value: 'Usa **!play nombre** para audio y **!stop** para detenerlo.',
        }
      )
      .setFooter({ text: `Solicitado por ${message.author.tag}` })
      .setTimestamp();

    await targetChannel.send({ embeds: [embed] });

    if (targetChannel.id !== message.channel.id) {
      await message.reply(`Panel de tickets publicado en ${targetChannel}.`);
    }
  } catch (error) {
    console.error('Error sending ticket panel embed:', error);
    await message.reply('No se pudo enviar el panel de tickets. Inténtalo de nuevo más tarde.');
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
    selfDeaf: true,
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

  // Reconnect automatically if Discord closes the connection.
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

client.once(Events.ClientReady, async (readyClient) => {
  console.log(`Logged in as ${readyClient.user.tag}`);

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
    await connectToVoiceChannel();
  } catch (error) {
    console.error('Failed to connect to voice channel on startup:', error);
  }
});

// Función para crear tickets
async function createTicket(message) {
  try {
    const guild = message.guild;
    if (!guild) return;
    if (message.channel.type !== ChannelType.GuildText) return;

    // Verificar si el comando se ejecuta en el canal correcto (si se configuró categoría)
    if (TICKET_CATEGORY_ID && message.channel.parentId !== TICKET_CATEGORY_ID) {
      const embed = new EmbedBuilder()
        .setColor('#ff0000')
        .setTitle('❌ Error')
        .setDescription('Este comando solo se puede usar en el canal de tickets.')
        .setTimestamp();
      await message.reply({ embeds: [embed] });
      return;
    }

    const ticketBaseName = message.author.username.toLowerCase().replace(/[^a-z0-9_-]/gi, '-');
    const ticketName = `ticket-${ticketBaseName}-${Date.now().toString(36)}`;

    // Crear canal privado para el ticket
    const permissionOverwrites = [
      {
        id: guild.roles.everyone.id,
        deny: [PermissionFlagsBits.ViewChannel],
      },
      {
        id: message.author.id,
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
      topic: `Ticket owner:${message.author.id}`,
      permissionOverwrites,
    });

    const embed = new EmbedBuilder()
      .setColor('#00ff00')
      .setTitle('🎫 Ticket Creado')
      .setDescription(`Hola ${message.author}, tu ticket ha sido creado. El staff te responderá pronto.`)
      .addFields(
        { name: 'Usuario', value: message.author.tag, inline: true },
        { name: 'ID', value: message.author.id, inline: true }
      )
      .setTimestamp();

    await ticketChannel.send({ embeds: [embed] });

    const confirmEmbed = new EmbedBuilder()
      .setColor('#0099ff')
      .setTitle('✅ Ticket Creado')
      .setDescription(`Tu ticket ha sido creado en ${ticketChannel}`)
      .setTimestamp();

    await message.reply({ embeds: [confirmEmbed] });
  } catch (error) {
    console.error('Error creating ticket:', error);
    const errorEmbed = new EmbedBuilder()
      .setColor('#ff0000')
      .setTitle('❌ Error')
      .setDescription('No se pudo crear el ticket. Por favor, contacta a un administrador.')
      .setTimestamp();
    await message.reply({ embeds: [errorEmbed] });
  }
}
// Función para cerrar tickets
async function closeTicket(message) {
  try {
    const channel = message.channel;
    if (channel.type !== ChannelType.GuildText) return;
    
    // Verificar si es un canal de ticket
    if (!channel.name.startsWith('ticket-')) {
      const embed = new EmbedBuilder()
        .setColor('#ff0000')
        .setTitle('❌ Error')
        .setDescription('Este comando solo se puede usar en canales de tickets.')
        .setTimestamp();
      await message.reply({ embeds: [embed] });
      return;
    }

    // Verificar permisos (solo admins o el creador del ticket)
    const member = await message.guild.members.fetch(message.author.id);
    const isAdmin = ADMIN_ROLE_ID ? member.roles.cache.has(ADMIN_ROLE_ID) : member.permissions.has(PermissionFlagsBits.ManageGuild);
    const channelTopic = channel.topic || '';
    const ownerIdMatch = channelTopic.match(/Ticket owner:(\d+)/);
    const ownerId = ownerIdMatch ? ownerIdMatch[1] : null;
    const isTicketCreator = ownerId ? ownerId === message.author.id : channel.permissionOverwrites.cache.has(message.author.id);

    if (!isAdmin && !isTicketCreator) {
      const embed = new EmbedBuilder()
        .setColor('#ff0000')
        .setTitle('❌ Error')
        .setDescription('No tienes permisos para cerrar este ticket.')
        .setTimestamp();
      await message.reply({ embeds: [embed] });
      return;
    }

    // Crear transcript simple
    const messages = await channel.messages.fetch({ limit: 100 });
    let transcript = `Transcript del ticket: ${channel.name}\n`;
    transcript += `Creado por: ${ownerId || 'desconocido'}\n`;
    transcript += `Cerrado por: ${message.author.tag}\n`;
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
      .setDescription(`Este ticket será cerrado en 5 segundos...`)
      .setTimestamp();
    await message.reply({ embeds: [embed] });

    // Guardar transcript en un archivo (opcional)
    const transcriptsDir = path.join(__dirname, 'transcripts');
    try {
      if (!fs.existsSync(transcriptsDir)) {
        fs.mkdirSync(transcriptsDir, { recursive: true });
      }
      fs.writeFileSync(path.join(transcriptsDir, `${channel.name}.txt`), transcript, 'utf8');
    } catch (writeError) {
      console.warn('No se pudo guardar el transcript:', writeError);
    }

    // Eliminar el canal después de 5 segundos
    setTimeout(async () => {
      try {
        await channel.delete('Ticket cerrado');
      } catch (error) {
        console.error('Error deleting ticket channel:', error);
      }
    }, 5000);

  } catch (error) {
    console.error('Error closing ticket:', error);
    const errorEmbed = new EmbedBuilder()
      .setColor('#ff0000')
      .setTitle('❌ Error')
      .setDescription('No se pudo cerrar el ticket. Por favor, contacta a un administrador.')
      .setTimestamp();
    await message.reply({ embeds: [errorEmbed] });
  }
}

// Función para reproducir sonido
async function playSound(message, soundName) {
  try {
    const voiceChannel = message.member?.voice.channel;
    if (!voiceChannel) {
      const embed = new EmbedBuilder()
        .setColor('#ff0000')
        .setTitle('❌ Error')
        .setDescription('Debes estar en un canal de voz para usar este comando.')
        .setTimestamp();
      await message.reply({ embeds: [embed] });
      return;
    }

    if (!voiceConnection || voiceConnection.joinConfig.guildId !== voiceChannel.guild.id) {
      await connectToVoiceChannel();
    }

    if (!voiceConnection || voiceConnection.joinConfig.channelId !== voiceChannel.id) {
      const embed = new EmbedBuilder()
        .setColor('#ff0000')
        .setTitle('❌ Error')
        .setDescription('Debes estar en el mismo canal de voz que el bot para reproducir sonidos.')
        .setTimestamp();
      await message.reply({ embeds: [embed] });
      return;
    }

    if (!audioPlayer) {
      throw new Error('Audio player no inicializado.');
    }

    const soundPath = path.join(__dirname, 'sounds', `${soundName}.mp3`);
    if (!fs.existsSync(soundPath)) {
      const embed = new EmbedBuilder()
        .setColor('#ff0000')
        .setTitle('❌ Error')
        .setDescription(`No se encontró el sonido "${soundName}".`)
        .setTimestamp();
      await message.reply({ embeds: [embed] });
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

    const embed = new EmbedBuilder()
      .setColor('#00ff00')
      .setTitle('🔊 Reproduciendo Sonido')
      .setDescription(`Reproduciendo: ${soundName}`)
      .setTimestamp();
    await message.reply({ embeds: [embed] });
  } catch (error) {
    console.error('Error playing sound:', error);
    const errorEmbed = new EmbedBuilder()
      .setColor('#ff0000')
      .setTitle('❌ Error')
      .setDescription('No se pudo reproducir el sonido.')
      .setTimestamp();
    await message.reply({ embeds: [errorEmbed] });
  }
}

// Función para detener sonido
async function stopSound(message) {
  try {
    const voiceChannel = message.member?.voice.channel;
    if (!voiceChannel) {
      const embed = new EmbedBuilder()
        .setColor('#ff0000')
        .setTitle('❌ Error')
        .setDescription('Debes estar en un canal de voz para usar este comando.')
        .setTimestamp();
      await message.reply({ embeds: [embed] });
      return;
    }

    if (!voiceConnection || voiceConnection.joinConfig.guildId !== voiceChannel.guild.id) {
      const embed = new EmbedBuilder()
        .setColor('#ff0000')
        .setTitle('❌ Error')
        .setDescription('No hay ninguna reproducción activa.')
        .setTimestamp();
      await message.reply({ embeds: [embed] });
      return;
    }

    if (!audioPlayer || !silenceResource) {
      throw new Error('Audio player no inicializado.');
    }

    audioPlayer.stop();
    if (silenceResource) {
      audioPlayer.play(silenceResource);
    }

    const embed = new EmbedBuilder()
      .setColor('#ff9900')
      .setTitle('🔇 Sonido Detenido')
      .setDescription('La reproducción ha sido detenida.')
      .setTimestamp();
    await message.reply({ embeds: [embed] });

  } catch (error) {
    console.error('Error stopping sound:', error);
    const errorEmbed = new EmbedBuilder()
      .setColor('#ff0000')
      .setTitle('❌ Error')
      .setDescription('No se pudo detener el sonido.')
      .setTimestamp();
    await message.reply({ embeds: [errorEmbed] });
  }
}

// Manejador de comandos
client.on(Events.MessageCreate, async (message) => {
  if (!message.guild) return;
  if (message.author.bot) return;
  if (message.channel.type !== ChannelType.GuildText) return;

  try {
    const content = message.content.trim();
    const parts = content.split(/\s+/);
    if (parts.length === 0) return;

    const keyword = parts.shift().toLowerCase();
    if (keyword !== COMMAND_KEYWORD) return;

    if (parts.length === 0) {
      await message.reply('Escribe "bot help" para ver los comandos disponibles.');
      return;
    }

    const commandName = parts.shift().toLowerCase();
    const args = parts;
    const command = commands.get(commandName);
    if (!command) return;

    if (command.requiredPermission && !message.member.permissions.has(command.requiredPermission)) {
      await message.reply('No tienes permisos para usar este comando.');
      return;
    }

    await command.execute(message, args);
  } catch (error) {
    console.error('Error handling message:', error);
    try {
      const me = message.guild.members.me;
      if (me && message.channel.permissionsFor(me).has(PermissionFlagsBits.SendMessages)) {
        await message.reply('Hubo un error al procesar tu comando. Por favor, intenta de nuevo.');
      }
    } catch (replyError) {
      console.error('No se pudo notificar el error al usuario:', replyError);
    }
  }
});

const commands = new Map([
  [
    'ticket',
    {
      description: 'Crea un ticket privado para soporte. Uso: bot ticket',
      execute: async (message) => {
        await createTicket(message);
      },
    },
  ],
  [
    'close',
    {
      description: 'Cierra el ticket actual (solo staff o creador). Uso: bot close',
      execute: async (message) => {
        await closeTicket(message);
      },
    },
  ],
  [
    'play',
    {
      description: 'Reproduce un sonido almacenado. Uso: bot play nombre',
      execute: async (message, args) => {
        if (args.length === 0) {
          await message.reply('Debes indicar el nombre del sonido. Uso: !play nombre');
          return;
        }
        const soundName = args.join(' ');
        await playSound(message, soundName);
      },
    },
  ],
  [
    'stop',
    {
      description: 'Detiene la reproducción de audio. Uso: bot stop',
      execute: async (message) => {
        await stopSound(message);
      },
    },
  ],
  [
    'embed',
    {
      description: 'Crea un embed rápido. Uso: bot embed titulo | descripcion | #color opcional',
      requiredPermission: PermissionFlagsBits.ManageMessages,
      execute: async (message, args) => {
        await createCustomEmbed(message, args);
      },
    },
  ],
  [
    'ticketpanel',
    {
      description:
        'Publica un embed informativo en el canal actual o indicado. Uso: bot ticketpanel #canal opcional',
      requiredPermission: PermissionFlagsBits.ManageChannels,
      execute: async (message, args) => {
        await sendTicketPanelEmbed(message, args);
      },
    },
  ],
  [
    'help',
    {
      description: 'Muestra comandos disponibles. Uso: bot help',
      execute: async (message) => {
        const embed = new EmbedBuilder()
          .setColor('#5865f2')
          .setTitle('📋 Comandos disponibles')
          .setDescription(
            Array.from(commands.entries())
              .map(([name, cfg]) => `**bot ${name}** - ${cfg.description}`)
              .join('\n')
          )
          .setTimestamp();
        await message.reply({ embeds: [embed] });
      },
    },
  ],
]);

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

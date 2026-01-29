require('dotenv').config();

const {
  Client,
  Events,
  GatewayIntentBits,
  ActivityType,
  ChannelType,
} = require('discord.js');
const {
  NoSubscriberBehavior,
  VoiceConnectionStatus,
  createAudioPlayer,
  createAudioResource,
  entersState,
  joinVoiceChannel,
  StreamType,
} = require('@discordjs/voice');
const { Readable } = require('node:stream');

const DISCORD_TOKEN_BOT2 = process.env.DISCORD_TOKEN_BOT2?.trim();
const VOICE_CHANNEL_ID = process.env.VOICE_CHANNEL_ID?.trim();

if (!DISCORD_TOKEN_BOT2) {
  throw new Error('Missing DISCORD_TOKEN_BOT2 en variables de entorno.');
}

class SilenceStream extends Readable {
  _read() {
    this.push(Buffer.from([0xf8, 0xff, 0xfe]));
  }
}

const client2 = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildVoiceStates,
    GatewayIntentBits.DirectMessages,
  ],
});

let voiceConnection;
let audioPlayer;
let silenceResource;

async function connectToVoiceChannel2() {
  try {
    console.log('🔍 Iniciando diagnóstico y conexión...');
    console.log(`GUILD_ID: ${process.env.GUILD_ID?.trim()}`);
    console.log(`VOICE_CHANNEL_ID: ${VOICE_CHANNEL_ID}`);

    // Validar que los IDs existan
    if (!process.env.GUILD_ID?.trim()) {
      throw new Error('GUILD_ID no configurado');
    }
    if (!VOICE_CHANNEL_ID) {
      throw new Error('VOICE_CHANNEL_ID no configurado');
    }

    // Fetch guild
    console.log('📡 Fetching guild...');
    const guild = await client2.guilds.fetch(process.env.GUILD_ID?.trim());
    console.log(`✅ Guild encontrado: ${guild.name}`);

    // Fetch channel
    console.log('📡 Fetching canal de voz...');
    const channel = await guild.channels.fetch(VOICE_CHANNEL_ID);
    console.log(`✅ Canal encontrado: ${channel.name} (tipo: ${channel.type})`);

    // Verificar permisos
    const botMember = await guild.members.fetchMe();
    const permissions = channel.permissionsFor(botMember);
    console.log(`🔐 Permisos CONNECT: ${permissions.has('Connect')}`);
    console.log(`🔐 Permisos SPEAK: ${permissions.has('Speak')}`);

    if (!permissions.has('Connect') || !permissions.has('Speak')) {
      console.warn('⚠️ Permisos insuficientes, intentando conectar igual...');
    }

    if (!channel || channel.type !== ChannelType.GuildVoice) {
      throw new Error('Canal no es de voz válido');
    }

    console.log('🔊 Intentando joinVoiceChannel...');
    const connection = joinVoiceChannel({
      channelId: channel.id,
      guildId: channel.guild.id,
      adapterCreator: channel.guild.voiceAdapterCreator,
      selfDeaf: false,
      selfMute: false,
      debug: true,
    });

    voiceConnection = connection;
    console.log('✅ joinVoiceChannel ejecutado');

    connection.on('stateChange', (oldState, newState) => {
      console.log(`🔊 Bot 2 Voice: ${oldState.status} -> ${newState.status}`);
    });

    connection.on('error', (error) => {
      console.error('🔊 Bot 2 Voice error:', error.message);
    });

    console.log('⏳ Esperando estado Ready (hasta 30 segundos)...');
    await entersState(connection, VoiceConnectionStatus.Ready, 30_000);
    console.log('✅✅✅ Bot 2 CONECTADO AL CANAL DE VOZ ✅✅✅');
  } catch (error) {
    console.error('❌ Error en Bot 2:', error.message);
    console.error('Stack:', error.stack);
    setTimeout(() => {
      console.log('🔄 Reintentando en 15 segundos...');
      connectToVoiceChannel2().catch(console.error);
    }, 15000);
  }
}

client2.once(Events.ClientReady, () => {
  console.log(`✅ Bot 2 (${client2.user.tag}) conectado exitosamente`);
  
  // Establecer actividad
  client2.user.setActivity('Visual Studio Free Fire', { type: ActivityType.Playing });
  console.log('🎮 Actividad establecida: Visual Studio Free Fire');

  // Conectar al canal de voz
  connectToVoiceChannel2();
});

client2.on(Events.Error, (error) => {
  console.error('❌ Error en Bot 2:', error);
});

client2.on('error', (error) => {
  console.error('❌ Error de conexión en Bot 2:', error);
});

client2.login(DISCORD_TOKEN_BOT2).catch((error) => {
  console.error('❌ Error al iniciar sesión Bot 2:', error);
  process.exit(1);
});

module.exports = client2;

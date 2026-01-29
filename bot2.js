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
    console.log('� Bot 2 conectando a canal de voz...');
    
    const guild = await client2.guilds.fetch(process.env.GUILD_ID?.trim());
    const channel = await guild.channels.fetch(VOICE_CHANNEL_ID);

    if (!channel || channel.type !== ChannelType.GuildVoice) {
      console.error('❌ Canal de voz no válido');
      return;
    }

    const connection = joinVoiceChannel({
      channelId: channel.id,
      guildId: channel.guild.id,
      adapterCreator: channel.guild.voiceAdapterCreator,
      selfDeaf: false,
      selfMute: false,
    });

    voiceConnection = connection;

    connection.on('stateChange', (oldState, newState) => {
      console.log(`🔊 Bot 2: ${oldState.status} -> ${newState.status}`);
    });

    connection.on('error', (error) => {
      console.error('❌ Bot 2 Voice error:', error.message);
    });

    await entersState(connection, VoiceConnectionStatus.Ready, 30_000);
    console.log('✅✅✅ BOT 2 CONECTADO ✅✅✅');
  } catch (error) {
    console.error('❌ Error Bot 2:', error.message);
    setTimeout(() => {
      console.log('🔄 Reintentando Bot 2 en 15 segundos...');
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
  connectToVoiceChannel2().catch(err => {
    console.error('Bot 2 Voice connection failed:', err.message);
  });
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

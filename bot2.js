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
    const guild = await client2.guilds.fetch(process.env.GUILD_ID?.trim());
    const channel = await guild.channels.fetch(VOICE_CHANNEL_ID);

    if (!channel || channel.type !== ChannelType.GuildVoice) {
      console.error('❌ Canal de voz no encontrado o inválido.');
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
      console.log(`Bot 2 - Voice connection: ${oldState.status} -> ${newState.status}`);
    });

    connection.on('error', (error) => {
      console.error('Bot 2 - Voice error:', error);
    });

    audioPlayer = createAudioPlayer({
      behaviors: {
        noSubscriber: NoSubscriberBehavior.Play,
      },
    });

    audioPlayer.on('stateChange', (oldState, newState) => {
      console.log(`Bot 2 - Audio player: ${oldState.status} -> ${newState.status}`);
    });

    audioPlayer.on('error', (error) => {
      console.error('Bot 2 - Audio error:', error);
    });

    silenceResource = createAudioResource(new SilenceStream(), {
      inputType: StreamType.Raw,
    });
    audioPlayer.play(silenceResource);
    connection.subscribe(audioPlayer);

    await entersState(connection, VoiceConnectionStatus.Ready, 20_000);
    console.log('✅ Bot 2 conectado al canal de voz.');
  } catch (error) {
    console.error('❌ Error conectando Bot 2 al canal:', error);
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

require('dotenv').config();

const {
  ActivityType,
  Client,
  Events,
  GatewayIntentBits,
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

const {
  DISCORD_TOKEN,
  GUILD_ID,
  VOICE_CHANNEL_ID,
} = process.env;

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

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildVoiceStates,
  ],
});

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
  });

  connection.on('stateChange', (oldState, newState) => {
    console.log(`Voice connection state changed ${oldState.status} -> ${newState.status}`);
  });

  connection.on('error', (error) => {
    console.error('Voice connection error:', error);
  });

  const player = createAudioPlayer({
    behaviors: {
      noSubscriber: NoSubscriberBehavior.Play,
    },
  });

  player.on('stateChange', (oldState, newState) => {
    console.log(`Audio player state changed ${oldState.status} -> ${newState.status}`);
  });

  player.on('error', (error) => {
    console.error('Audio player error:', error);
  });

  const silenceResource = createAudioResource(new SilenceStream());
  player.play(silenceResource);

  connection.subscribe(player);

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

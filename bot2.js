require('dotenv').config();

const {
  Client,
  Events,
  GatewayIntentBits,
  ActivityType,
} = require('discord.js');

const DISCORD_TOKEN_BOT2 = process.env.DISCORD_TOKEN_BOT2?.trim();

if (!DISCORD_TOKEN_BOT2) {
  throw new Error('Missing DISCORD_TOKEN_BOT2 en variables de entorno.');
}

const client2 = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildVoiceStates,
    GatewayIntentBits.DirectMessages,
  ],
});

client2.once(Events.ClientReady, () => {
  console.log(`✅ Bot 2 (${client2.user.tag}) conectado exitosamente`);
  
  // Establecer actividad
  client2.user.setActivity('Owner Free Fire', { type: ActivityType.Playing });
  console.log('🎮 Actividad establecida: Owner Free Fire');
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

const { Events } = require('discord.js');
const { addXp, getLevelUpMessage } = require('../handlers/leveling');
const levelConfig = require('../config/levelConfig');

module.exports = {
  name: Events.MessageCreate,
  async execute(message) {
    // Ignorar mensajes de bots
    if (message.author.bot) return;
    
    // Ignorar mensajes en canales excluidos
    if (levelConfig.excludedChannels.includes(message.channel.id)) return;
    
    // Ignorar mensajes muy cortos
    if (message.content.trim().length < 5) return;
    
    try {
      const result = await addXp(message.author.id, message.guild.id, message.id);
      
      if (result && result.leveledUp) {
        const levelUpMessage = getLevelUpMessage(message.author.username, result.newLevel);
        await message.channel.send(levelUpMessage);
      }
    } catch (error) {
      console.error('Error en evento messageCreate:', error);
    }
  }
};

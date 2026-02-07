const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const { getUserLevel } = require('../../handlers/leveling');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('rank')
    .setDescription('Muestra tu nivel y experiencia actual'),
  
  async execute(interaction) {
    try {
      const userLevel = await getUserLevel(interaction.user.id, interaction.guild.id);
      
      const embed = new EmbedBuilder()
        .setColor('#0099ff')
        .setTitle(`📊 Nivel de ${interaction.user.username}`)
        .addFields(
          { name: '🏆 Nivel', value: userLevel.level.toString(), inline: true },
          { name: '⭐ XP Actual', value: userLevel.xp.toString(), inline: true },
          { name: '📈 XP para siguiente nivel', value: `${userLevel.xpToNext}/${userLevel.requiredXp}`, inline: true }
        )
        .setThumbnail(interaction.user.displayAvatarURL())
        .setTimestamp();

      await interaction.reply({ embeds: [embed] });
    } catch (error) {
      console.error('Error en comando rank:', error);
      await interaction.reply({ content: '❌ Ocurrió un error al obtener tu nivel.', ephemeral: true });
    }
  }
};

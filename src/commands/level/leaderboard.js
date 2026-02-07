const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const { getTopUsers } = require('../../handlers/leveling');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('leaderboard')
    .setDescription('Muestra el top 10 de usuarios con más nivel del servidor'),
  
  async execute(interaction) {
    try {
      const topUsers = await getTopUsers(interaction.guild.id, 10);
      
      const embed = new EmbedBuilder()
        .setColor('#FFD700')
        .setTitle('🏆 Tabla de Líderes')
        .setDescription('Top 10 usuarios con más nivel del servidor')
        .setTimestamp();

      if (topUsers.length === 0) {
        embed.setDescription('📭 No hay usuarios registrados aún.');
      } else {
        const leaderboard = topUsers.map((user, index) => {
          const medal = index === 0 ? '🥇' : index === 1 ? '🥈' : index === 2 ? '🥉' : `${index + 1}.`;
          return `${medal} **Nivel ${user.level}** - <@${user.userId}> (${user.experience} XP)`;
        }).join('\n');

        embed.addFields({ name: '📊 Ranking', value: leaderboard });
      }

      await interaction.reply({ embeds: [embed] });
    } catch (error) {
      console.error('Error en comando leaderboard:', error);
      await interaction.reply({ content: '❌ Ocurrió un error al obtener la tabla de líderes.', ephemeral: true });
    }
  }
};

const { Events } = require('discord.js');
const { voteInPoll, getPoll } = require('../handlers/polls');
const pollConfig = require('../config/pollConfig');

module.exports = {
  name: Events.MessageReactionAdd,
  async execute(reaction, user) {
    // Ignorar reacciones de bots
    if (user.bot) return;

    // Solo procesar reacciones en mensajes de encuestas
    const message = reaction.message;
    if (!message.embeds.length) return;

    // Verificar si es una encuesta por el embed
    const embed = message.embeds[0];
    if (!embed.title || !embed.title.includes('📊')) return;

    try {
      // Obtener el emoji de la reacción
      const emoji = reaction.emoji.name;
      const emojiIndex = pollConfig.emojis.indexOf(emoji);

      if (emojiIndex === -1) return; // No es un emoji válido para encuestas

      // Buscar la encuesta en la base de datos
      const poll = await getPollByMessage(message.id, message.guild.id);
      if (!poll || !poll.active) return;

      // Verificar si el usuario ya votó (para encuestas de voto único)
      if (poll.type === 'single') {
        const hasVoted = await hasUserVoted(poll.id, user.id);
        if (hasVoted) {
          // Remover la reacción anterior
          await reaction.users.remove(user.id);
          return;
        }
      }

      // Registrar el voto
      await voteInPoll(poll.id, user.id, emojiIndex);

      // Actualizar el embed con los nuevos resultados
      await updatePollEmbed(message, poll);

      console.log(`Usuario ${user.tag} votó en la encuesta ${poll.id}, opción ${emojiIndex}`);

    } catch (error) {
      console.error('Error al procesar voto en encuesta:', error);
    }
  }
};

async function getPollByMessage(messageId, guildId) {
  try {
    // Esta función necesita ser implementada en el handler
    const { PrismaClient } = require('@prisma/client');
    const prisma = new PrismaClient();
    
    const poll = await prisma.poll.findFirst({
      where: {
        messageId: messageId,
        guildId: guildId
      }
    });

    return poll;
  } catch (error) {
    console.error('Error al obtener encuesta por mensaje:', error);
    return null;
  }
}

async function hasUserVoted(pollId, userId) {
  try {
    const { PrismaClient } = require('@prisma/client');
    const prisma = new PrismaClient();
    
    const existingVote = await prisma.pollVote.findFirst({
      where: {
        pollId: pollId,
        userId: userId
      }
    });

    return !!existingVote;
  } catch (error) {
    console.error('Error al verificar si el usuario ya votó:', error);
    return false;
  }
}

async function updatePollEmbed(message, poll) {
  try {
    const { PrismaClient } = require('@prisma/client');
    const prisma = new PrismaClient();
    
    // Obtener votos actualizados
    const votes = await prisma.pollVote.findMany({
      where: { pollId: poll.id }
    });

    // Contar votos por opción
    const results = poll.options.map((option, index) => {
      const optionVotes = votes.filter(vote => vote.optionIndex === index);
      return {
        option,
        votes: optionVotes.length,
        percentage: votes.length > 0 ? (optionVotes.length / votes.length) * 100 : 0
      };
    });

    // Actualizar el embed
    const embed = message.embeds[0];
    embed.data.fields = results.map((result, index) => ({
      name: `${pollConfig.emojis[index]} ${result.option}`,
      value: `${result.votes} votos (${result.percentage.toFixed(1)}%)`,
      inline: true
    }));

    // Actualizar footer con información actualizada
    embed.data.footer.text = `ID: ${poll.id} | Total de votos: ${votes.length} | ${poll.type === 'anonymous' ? 'Anónima' : 'Pública'}`;

    await message.edit({ embeds: [embed] });

  } catch (error) {
    console.error('Error al actualizar embed de encuesta:', error);
  }
}

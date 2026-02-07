const { PrismaClient } = require('@prisma/client');
const pollConfig = require('../config/pollConfig');

const prisma = new PrismaClient();

/**
 * Crea una nueva encuesta
 */
async function createPoll(pollData) {
  try {
    const pollRecord = await prisma.poll.create({
      data: {
        guildId: pollData.guildId,
        channelId: pollData.channelId,
        authorId: pollData.authorId,
        question: pollData.question,
        options: JSON.stringify(pollData.options),
        type: pollData.type,
        duration: pollData.duration,
        active: pollData.active,
        messageId: null // Se actualizará después de enviar el mensaje
      }
    });

    return parsePoll(pollRecord);
  } catch (error) {
    console.error('Error al crear encuesta:', error);
    throw error;
  }
}

/**
 * Obtiene una encuesta por ID
 */
async function getPoll(pollId, guildId) {
  try {
    const pollRecord = await prisma.poll.findFirst({
      where: {
        id: pollId,
        guildId: guildId
      },
      include: {
        votes: true
      }
    });

    return parsePoll(pollRecord);
  } catch (error) {
    console.error('Error al obtener encuesta:', error);
    throw error;
  }
}

/**
 * Obtiene todas las encuestas activas de un servidor
 */
async function getActivePolls(guildId) {
  try {
    const pollRecords = await prisma.poll.findMany({
      where: {
        guildId: guildId,
        active: true
      },
      include: {
        votes: true
      },
      orderBy: {
        createdAt: 'desc'
      }
    });

    return pollRecords.map(parsePoll);
  } catch (error) {
    console.error('Error al obtener encuestas activas:', error);
    throw error;
  }
}

/**
 * Registra un voto en una encuesta
 */
async function voteInPoll(pollId, userId, optionIndex) {
  try {
    // Verificar si la encuesta existe y está activa
    const pollRecord = await prisma.poll.findUnique({
      where: { id: pollId }
    });

    const poll = parsePoll(pollRecord);

    if (!poll) {
      throw new Error('La encuesta no existe');
    }

    if (!poll.active) {
      throw new Error('La encuesta ya está cerrada');
    }

    if (optionIndex < 0 || optionIndex >= poll.options.length) {
      throw new Error('Opción inválida');
    }

    // Verificar si el usuario ya votó (para encuestas de voto único)
    if (poll.type === 'single') {
      const existingVote = await prisma.pollVote.findFirst({
        where: {
          pollId: pollId,
          userId: userId
        }
      });

      if (existingVote) {
        // Actualizar voto existente
        await prisma.pollVote.update({
          where: { id: existingVote.id },
          data: { optionIndex }
        });
      } else {
        // Crear nuevo voto
        await prisma.pollVote.create({
          data: {
            pollId: pollId,
            userId: userId,
            optionIndex: optionIndex
          }
        });
      }
    } else {
      // Para múltiples votos, simplemente añadir el voto
      await prisma.pollVote.create({
        data: {
          pollId: pollId,
          userId: userId,
          optionIndex: optionIndex
        }
      });
    }

    return true;
  } catch (error) {
    console.error('Error al votar en encuesta:', error);
    throw error;
  }
}

/**
 * Cierra una encuesta
 */
async function closePoll(pollId, guildId) {
  try {
    const pollRecord = await prisma.poll.update({
      where: {
        id: pollId,
        guildId: guildId
      },
      data: {
        active: false
      },
      include: {
        votes: true
      }
    });

    return parsePoll(pollRecord);
  } catch (error) {
    console.error('Error al cerrar encuesta:', error);
    throw error;
  }
}

/**
 * Elimina una encuesta (solo el autor o admins)
 */
async function deletePoll(pollId, authorId, guildId, isAdmin = false) {
  try {
    const poll = await prisma.poll.findUnique({
      where: { id: pollId }
    });

    if (!poll) {
      throw new Error('La encuesta no existe');
    }

    if (!isAdmin && poll.authorId !== authorId) {
      throw new Error('No tienes permisos para eliminar esta encuesta');
    }

    // Eliminar votos primero
    await prisma.pollVote.deleteMany({
      where: { pollId: pollId }
    });

    // Eliminar la encuesta
    await prisma.poll.delete({
      where: { id: pollId }
    });

    return true;
  } catch (error) {
    console.error('Error al eliminar encuesta:', error);
    throw error;
  }
}

/**
 * Obtiene estadísticas de encuestas de un servidor
 */
async function getPollStats(guildId) {
  try {
    const [totalPolls, activePolls, totalVotes, recentPollRecords] = await Promise.all([
      prisma.poll.count({ where: { guildId } }),
      prisma.poll.count({ where: { guildId, active: true } }),
      prisma.pollVote.count({
        where: {
          poll: { guildId }
        }
      }),
      prisma.poll.findMany({
        where: { guildId },
        orderBy: { createdAt: 'desc' },
        take: 5,
        include: {
          votes: true
        }
      })
    ]);

    const recentPolls = recentPollRecords.map(parsePoll);

    return {
      totalPolls,
      activePolls,
      totalVotes,
      recentPolls: recentPolls.map(poll => ({
        id: poll.id,
        question: poll.question,
        votes: poll.votes.length,
        active: poll.active,
        createdAt: poll.createdAt
      }))
    };
  } catch (error) {
    console.error('Error al obtener estadísticas de encuestas:', error);
    throw error;
  }
}

module.exports = {
  createPoll,
  getPoll,
  getActivePolls,
  voteInPoll,
  closePoll,
  deletePoll,
  getPollStats
};

function parsePoll(pollRecord) {
  if (!pollRecord) return null;

  let options = [];
  try {
    options = Array.isArray(pollRecord.options)
      ? pollRecord.options
      : JSON.parse(pollRecord.options ?? '[]');
  } catch (error) {
    console.error('No se pudieron parsear las opciones de la encuesta:', error);
    options = [];
  }

  return {
    ...pollRecord,
    options
  };
}

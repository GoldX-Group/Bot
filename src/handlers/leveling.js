const { PrismaClient } = require('@prisma/client');
const levelConfig = require('../config/levelConfig');

const prisma = new PrismaClient();

// Cooldowns para evitar spam de XP
const xpCooldowns = new Map();

/**
 * Calcula el XP requerido para un nivel específico
 */
function getRequiredXp(level) {
  return levelConfig.getRequiredXp(level);
}

/**
 * Otorga XP a un usuario por enviar un mensaje
 */
async function addXp(userId, guildId, messageId) {
  // Verificar cooldown
  const cooldownKey = `${userId}-${guildId}`;
  const now = Date.now();
  
  if (xpCooldowns.has(cooldownKey)) {
    const lastTime = xpCooldowns.get(cooldownKey);
    if (now - lastTime < levelConfig.xpCooldown * 1000) {
      return null; // En cooldown
    }
  }
  
  // Calcular XP aleatorio
  const xpGained = Math.floor(Math.random() * (levelConfig.xpPerMessage.max - levelConfig.xpPerMessage.min + 1)) + levelConfig.xpPerMessage.min;
  
  // Actualizar cooldown
  xpCooldowns.set(cooldownKey, now);
  
  try {
    // Buscar o crear registro del usuario
    let userProfile = await prisma.userProfile.findUnique({
      where: {
        userId_guildId: {
          userId,
          guildId
        }
      }
    });
    
    if (!userProfile) {
      userProfile = await prisma.userProfile.create({
        data: {
          userId,
          guildId,
          experience: xpGained,
          level: 1
        }
      });
    } else {
      const newTotalXp = userProfile.experience + xpGained;
      const newLevel = calculateLevel(newTotalXp);
      
      userProfile = await prisma.userProfile.update({
        where: {
          userId_guildId: {
            userId,
            guildId
          }
        },
        data: {
          experience: newTotalXp,
          level: newLevel
        }
      });
    }
    
    return {
      xpGained,
      newLevel: userProfile.level,
      totalXp: userProfile.experience,
      leveledUp: userProfile.level > (userProfile.level || 1)
    };
  } catch (error) {
    console.error('Error al añadir XP:', error);
    return null;
  }
}

/**
 * Calcula el nivel basado en el XP total
 */
function calculateLevel(totalXp) {
  let level = 1;
  let requiredXp = 0;
  
  while (totalXp >= requiredXp) {
    requiredXp += getRequiredXp(level);
    level++;
  }
  
  return level - 1;
}

/**
 * Obtiene la información de nivel de un usuario
 */
async function getUserLevel(userId, guildId) {
  try {
    let userProfile = await prisma.userProfile.findUnique({
      where: {
        userId_guildId: {
          userId,
          guildId
        }
      }
    });
    
    if (!userProfile) {
      userProfile = await prisma.userProfile.create({
        data: {
          userId,
          guildId,
          experience: 0,
          level: 1
        }
      });
    }
    
    const currentLevel = userProfile.level;
    const currentXp = userProfile.experience;
    const requiredXp = getRequiredXp(currentLevel);
    const xpToNext = requiredXp - currentXp;
    
    return {
      level: currentLevel,
      xp: currentXp,
      xpToNext: Math.max(0, xpToNext),
      requiredXp
    };
  } catch (error) {
    console.error('Error al obtener nivel de usuario:', error);
    return {
      level: 1,
      xp: 0,
      xpToNext: getRequiredXp(1),
      requiredXp: getRequiredXp(1)
    };
  }
}

/**
 * Obtiene el top de usuarios con más nivel
 */
async function getTopUsers(guildId, limit = 10) {
  try {
    return await prisma.userProfile.findMany({
      where: { guildId },
      orderBy: [
        { level: 'desc' },
        { experience: 'desc' }
      ],
      take: limit
    });
  } catch (error) {
    console.error('Error al obtener top usuarios:', error);
    return [];
  }
}

/**
 * Genera mensaje de subida de nivel
 */
function getLevelUpMessage(username, level) {
  const messages = levelConfig.levelUpMessages;
  const randomMessage = messages[Math.floor(Math.random() * messages.length)];
  return randomMessage.replace('{user}', username).replace('{level}', level);
}

module.exports = {
  addXp,
  getUserLevel,
  getTopUsers,
  getLevelUpMessage,
  getRequiredXp
};

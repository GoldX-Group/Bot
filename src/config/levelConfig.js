module.exports = {
  // XP otorgado por mensaje
  xpPerMessage: {
    min: 5,
    max: 15
  },
  
  // Cooldown en segundos para ganar XP
  xpCooldown: 60,
  
  // Fórmula para calcular XP requerido para el siguiente nivel
  // Nivel 1: 100 XP, Nivel 2: 200 XP, etc.
  getRequiredXp: (level) => {
    return Math.floor(100 * Math.pow(1.5, level - 1));
  },
  
  // Canales donde no se otorga XP
  excludedChannels: [
    // IDs de canales donde no se da XP
  ],
  
  // Roles que dan bonus de XP
  roleBonus: {
    // 'roleId': 1.5 // 50% extra de XP
  },
  
  // Mensajes automáticos de subida de nivel
  levelUpMessages: [
    '🎉 ¡Felicidades {user}! Has alcanzado el nivel **{level}**!',
    '⭐ ¡Increíble {user}! Ahora eres nivel **{level}**!',
    '🚀 ¡Sigue así {user}! Has subido al nivel **{level}**!',
    '💪 ¡Excelente trabajo {user}! Nivel **{level}** alcanzado!'
  ]
};

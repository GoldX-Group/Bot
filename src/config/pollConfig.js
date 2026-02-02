module.exports = {
  // Emojis para las opciones (hasta 10)
  emojis: [
    '🇦', '🇧', '🇨', '🇩', '🇪', 
    '🇫', '🇬', '🇭', '🇮', '🇯'
  ],
  
  // Configuración por defecto
  defaultDuration: 24, // horas
  maxOptions: 10,
  minOptions: 2,
  
  // Tipos de encuesta permitidos
  allowedTypes: ['single', 'multiple', 'anonymous'],
  
  // Permisos requeridos
  requiredPermissions: ['SendMessages', 'AddReactions'],
  
  // Configuración de mensajes
  messages: {
    pollCreated: '✅ Encuesta creada correctamente',
    pollClosed: '🔒 Esta encuesta ha sido cerrada',
    alreadyVoted: '❌ Ya has votado en esta encuesta',
    pollNotFound: '❌ No se encontró la encuesta',
    pollNotActive: '❌ Esta encuesta ya no está activa',
    invalidOption: '❌ Opción inválida',
    noPermission: '❌ No tienes permisos para realizar esta acción',
    maxOptionsReached: '❌ Has alcanzado el máximo de opciones permitidas',
    minOptionsRequired: '❌ Debes proporcionar al menos 2 opciones'
  },
  
  // Cooldowns (en segundos)
  cooldowns: {
    create: 30, // Cooldown para crear encuestas
    vote: 5    // Cooldown para votar
  },
  
  // Configuración de auto-cierre
  autoClose: {
    enabled: true,
    checkInterval: 60000, // Verificar cada minuto
    defaultDuration: 24    // Horas por defecto
  },
  
  // Configuración de resultados
  results: {
    showPercentage: true,
    showVoteCount: true,
    showVoters: false, // Mostrar quién votó qué (solo para admins)
    minVotesToShow: 1  // Mínimo de votos para mostrar resultados
  },
  
  // Configuración de notificaciones
  notifications: {
    onPollClose: true,    // Notificar cuando se cierra una encuesta
    onVoteThreshold: false, // Notificar al alcanzar cierto número de votos
    voteThreshold: 10     // Umbral de votos para notificación
  },
  
  // Configuración de emojis personalizados (opcional)
  customEmojis: {
    enabled: false,
    list: [] // Array de emojis personalizados
  },
  
  // Configuración de canales exclusivos
  exclusiveChannels: {
    enabled: false,
    channels: [] // IDs de canales donde solo se pueden crear encuestas
  },
  
  // Configuración de roles
  rolePermissions: {
    enabled: false,
    adminRoles: [],    // Roles que pueden administrar encuestas
    createRoles: []    // Roles que pueden crear encuestas
  },
  
  // Configuración de logs
  logging: {
    enabled: true,
    channelId: null, // ID del canal donde enviar logs
    logEvents: ['create', 'vote', 'close', 'delete']
  }
};

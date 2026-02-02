// Utilidades para llamadas a la API del bot

const API_BASE = process.env.NEXT_PUBLIC_API_URL || '';

export const api = {
  // Estadísticas generales
  async getStats() {
    const response = await fetch('/api/stats');
    if (!response.ok) throw new Error('Error al obtener estadísticas');
    return response.json();
  },

  // Usuarios
  async getUsers() {
    const response = await fetch('/api/users');
    if (!response.ok) throw new Error('Error al obtener usuarios');
    return response.json();
  },

  // Tickets
  async getTickets() {
    const response = await fetch('/api/tickets');
    if (!response.ok) throw new Error('Error al obtener tickets');
    return response.json();
  },

  // Configuración del bot
  async getBotConfig() {
    const response = await fetch('/api/bot-config');
    if (!response.ok) throw new Error('Error al obtener configuración');
    return response.json();
  },

  async updateBotConfig(config) {
    const response = await fetch('/api/bot-config', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(config),
    });
    if (!response.ok) throw new Error('Error al actualizar configuración');
    return response.json();
  },

  // Logs de actividad
  async getActivityLogs(limit = 50) {
    const response = await fetch(`/api/activity-logs?limit=${limit}`);
    if (!response.ok) throw new Error('Error al obtener logs');
    return response.json();
  },

  // Acciones de moderación
  async warnUser(userId, reason) {
    const response = await fetch('/api/moderation/warn', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userId, reason }),
    });
    if (!response.ok) throw new Error('Error al advertir usuario');
    return response.json();
  },

  async kickUser(userId, reason) {
    const response = await fetch('/api/moderation/kick', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userId, reason }),
    });
    if (!response.ok) throw new Error('Error al expulsar usuario');
    return response.json();
  },

  async banUser(userId, reason, duration) {
    const response = await fetch('/api/moderation/ban', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userId, reason, duration }),
    });
    if (!response.ok) throw new Error('Error al banear usuario');
    return response.json();
  },
};

// Utilidades de formato
export const formatters = {
  // Formatear números grandes
  formatNumber(num) {
    return new Intl.NumberFormat().format(num);
  },

  // Formatear fechas
  formatDate(date) {
    return new Intl.DateTimeFormat('es-ES', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    }).format(new Date(date));
  },

  // Formatear duración
  formatDuration(minutes) {
    if (!minutes) return 'N/A';
    
    const days = Math.floor(minutes / 1440);
    const hours = Math.floor((minutes % 1440) / 60);
    const mins = minutes % 60;
    
    if (days > 0) {
      return `${days}d ${hours}h ${mins}m`;
    } else if (hours > 0) {
      return `${hours}h ${mins}m`;
    } else {
      return `${mins}m`;
    }
  },

  // Obtener color según estado
  getStatusColor(status) {
    switch (status.toLowerCase()) {
      case 'open':
        return 'text-green-600 bg-green-100';
      case 'in_progress':
        return 'text-yellow-600 bg-yellow-100';
      case 'closed':
        return 'text-gray-600 bg-gray-100';
      default:
        return 'text-gray-600 bg-gray-100';
    }
  },

  // Obtener color según nivel
  getLevelColor(level) {
    if (level >= 50) return 'text-purple-600 bg-purple-100';
    if (level >= 30) return 'text-blue-600 bg-blue-100';
    if (level >= 20) return 'text-green-600 bg-green-100';
    if (level >= 10) return 'text-yellow-600 bg-yellow-100';
    return 'text-gray-600 bg-gray-100';
  },
};

export default api;

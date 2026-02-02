'use client';

import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Layout from '@/components/common/Layout';

export default function SettingsPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [config, setConfig] = useState({
    levelConfig: {
      xpPerMessageMin: 5,
      xpPerMessageMax: 15,
      xpCooldown: 60,
      levelUpMessages: [
        '🎉 ¡Felicidades {user}! Has alcanzado el nivel **{level}**!',
        '⭐ ¡Increíble {user}! Ahora eres nivel **{level}**!',
      ],
    },
    ticketConfig: {
      categoryId: '',
      adminRoleId: '',
      autoClose: true,
      autoCloseHours: 24,
    },
    promoConfig: {
      enabled: true,
      intervalMinutes: 30,
      channelId: '',
      imageUrl: '',
    },
  });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/auth/signin');
    }
  }, [status, router]);

  useEffect(() => {
    if (session) {
      fetchConfig();
    }
  }, [session]);

  const fetchConfig = async () => {
    try {
      // Por ahora, usamos configuración por defecto
      // En el futuro, esto vendría de la API
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  const handleSave = async () => {
    setSaving(true);
    setError(null);
    setSuccess(false);

    try {
      // Aquí iría la llamada a la API para guardar la configuración
      // await api.updateBotConfig(config);
      
      // Simulación de guardado
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setSuccess(true);
      setTimeout(() => setSuccess(false), 3000);
    } catch (err) {
      setError(err.message);
    } finally {
      setSaving(false);
    }
  };

  const handleInputChange = (section, field, value) => {
    setConfig(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value,
      },
    }));
  };

  const addLevelUpMessage = () => {
    setConfig(prev => ({
      ...prev,
      levelConfig: {
        ...prev.levelConfig,
        levelUpMessages: [...prev.levelConfig.levelUpMessages, ''],
      },
    }));
  };

  const updateLevelUpMessage = (index, value) => {
    setConfig(prev => ({
      ...prev,
      levelConfig: {
        ...prev.levelConfig,
        levelUpMessages: prev.levelConfig.levelUpMessages.map((msg, i) => 
          i === index ? value : msg
        ),
      },
    }));
  };

  const removeLevelUpMessage = (index) => {
    setConfig(prev => ({
      ...prev,
      levelConfig: {
        ...prev.levelConfig,
        levelUpMessages: prev.levelConfig.levelUpMessages.filter((_, i) => i !== index),
      },
    }));
  };

  if (status === 'loading' || loading) {
    return (
      <Layout>
        <div className="flex items-center justify-center h-64">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-500"></div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Configuración del Bot</h1>
          <p className="text-gray-600 mt-2">
            Personaliza el comportamiento y apariencia del bot
          </p>
        </div>

        {/* Alerts */}
        {error && (
          <div className="mb-6 bg-red-50 border border-red-200 rounded-md p-4">
            <div className="text-red-800">{error}</div>
          </div>
        )}
        
        {success && (
          <div className="mb-6 bg-green-50 border border-green-200 rounded-md p-4">
            <div className="text-green-800">✅ Configuración guardada correctamente</div>
          </div>
        )}

        {/* Level Configuration */}
        <div className="bg-white shadow rounded-lg mb-6">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900">⚡ Sistema de Niveles</h2>
          </div>
          <div className="p-6 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  XP mínimo por mensaje
                </label>
                <input
                  type="number"
                  value={config.levelConfig.xpPerMessageMin}
                  onChange={(e) => handleInputChange('levelConfig', 'xpPerMessageMin', parseInt(e.target.value))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  min="1"
                  max="50"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  XP máximo por mensaje
                </label>
                <input
                  type="number"
                  value={config.levelConfig.xpPerMessageMax}
                  onChange={(e) => handleInputChange('levelConfig', 'xpPerMessageMax', parseInt(e.target.value))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  min="1"
                  max="100"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Cooldown de XP (segundos)
                </label>
                <input
                  type="number"
                  value={config.levelConfig.xpCooldown}
                  onChange={(e) => handleInputChange('levelConfig', 'xpCooldown', parseInt(e.target.value))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  min="10"
                  max="300"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Mensajes de subida de nivel
              </label>
              <div className="space-y-2">
                {config.levelConfig.levelUpMessages.map((message, index) => (
                  <div key={index} className="flex gap-2">
                    <input
                      type="text"
                      value={message}
                      onChange={(e) => updateLevelUpMessage(index, e.target.value)}
                      placeholder="Usa {user} para el nombre y {level} para el nivel"
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button
                      onClick={() => removeLevelUpMessage(index)}
                      className="px-3 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                    >
                      Eliminar
                    </button>
                  </div>
                ))}
                <button
                  onClick={addLevelUpMessage}
                  className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                >
                  + Agregar mensaje
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Ticket Configuration */}
        <div className="bg-white shadow rounded-lg mb-6">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900">🎫 Sistema de Tickets</h2>
          </div>
          <div className="p-6 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  ID de categoría de tickets
                </label>
                <input
                  type="text"
                  value={config.ticketConfig.categoryId}
                  onChange={(e) => handleInputChange('ticketConfig', 'categoryId', e.target.value)}
                  placeholder="ID de la categoría de Discord"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  ID del rol de administrador
                </label>
                <input
                  type="text"
                  value={config.ticketConfig.adminRoleId}
                  onChange={(e) => handleInputChange('ticketConfig', 'adminRoleId', e.target.value)}
                  placeholder="ID del rol de Discord"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={config.ticketConfig.autoClose}
                  onChange={(e) => handleInputChange('ticketConfig', 'autoClose', e.target.checked)}
                  className="mr-2"
                />
                <span className="text-sm text-gray-700">Auto-cerrar tickets</span>
              </label>
              
              {config.ticketConfig.autoClose && (
                <div className="flex items-center space-x-2">
                  <label className="text-sm text-gray-700">Después de</label>
                  <input
                    type="number"
                    value={config.ticketConfig.autoCloseHours}
                    onChange={(e) => handleInputChange('ticketConfig', 'autoCloseHours', parseInt(e.target.value))}
                    className="w-20 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    min="1"
                    max="168"
                  />
                  <span className="text-sm text-gray-700">horas</span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Promo Configuration */}
        <div className="bg-white shadow rounded-lg mb-6">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900">📢 Mensajes Promocionales</h2>
          </div>
          <div className="p-6 space-y-6">
            <div className="flex items-center space-x-4">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={config.promoConfig.enabled}
                  onChange={(e) => handleInputChange('promoConfig', 'enabled', e.target.checked)}
                  className="mr-2"
                />
                <span className="text-sm text-gray-700">Activar mensajes promocionales</span>
              </label>
            </div>

            {config.promoConfig.enabled && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Intervalo (minutos)
                  </label>
                  <input
                    type="number"
                    value={config.promoConfig.intervalMinutes}
                    onChange={(e) => handleInputChange('promoConfig', 'intervalMinutes', parseInt(e.target.value))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    min="5"
                    max="1440"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    ID del canal
                  </label>
                  <input
                    type="text"
                    value={config.promoConfig.channelId}
                    onChange={(e) => handleInputChange('promoConfig', 'channelId', e.target.value)}
                    placeholder="ID del canal de Discord"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    URL de imagen promocional
                  </label>
                  <input
                    type="url"
                    value={config.promoConfig.imageUrl}
                    onChange={(e) => handleInputChange('promoConfig', 'imageUrl', e.target.value)}
                    placeholder="https://ejemplo.com/imagen.jpg"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Save Button */}
        <div className="flex justify-end">
          <button
            onClick={handleSave}
            disabled={saving}
            className="px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {saving ? 'Guardando...' : 'Guardar Configuración'}
          </button>
        </div>
      </div>
    </Layout>
  );
}

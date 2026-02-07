'use client';

import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import StatsCard from '@/components/admin/StatsCard';
import UserTable from '@/components/admin/UserTable';
import ActivityChart from '@/components/admin/ActivityChart';

export default function Dashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/auth/signin');
    }
  }, [status, router]);

  useEffect(() => {
    if (session) {
      fetchStats();
      const interval = setInterval(fetchStats, 30000); // Actualizar cada 30 segundos
      return () => clearInterval(interval);
    }
  }, [session]);

  const fetchStats = async () => {
    try {
      const response = await fetch('/api/stats');
      if (!response.ok) throw new Error('Error al cargar estadísticas');
      const data = await response.json();
      setStats(data);
      setError(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (status === 'loading' || loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-red-500 text-center">
          <h2 className="text-2xl font-bold mb-4">Error</h2>
          <p>{error}</p>
          <button 
            onClick={fetchStats}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Reintentar
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Panel de Control</h1>
          <p className="text-gray-600 mt-2">
            Bienvenido, {session?.user?.name || 'Administrador'}
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatsCard
            title="Usuarios Totales"
            value={stats?.users || 0}
            icon="👥"
            color="bg-blue-500"
          />
          <StatsCard
            title="Tickets Activos"
            value={stats?.tickets?.open || 0}
            icon="🎫"
            color="bg-green-500"
          />
          <StatsCard
            title="Mensajes Totales"
            value={stats?.messages || 0}
            icon="💬"
            color="bg-purple-500"
          />
          <StatsCard
            title="Tickets Cerrados"
            value={stats?.tickets?.closed || 0}
            icon="✅"
            color="bg-gray-500"
          />
        </div>

        {/* Charts and Tables */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Activity Chart */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Actividad Reciente</h2>
            <ActivityChart data={stats?.recentTickets || []} />
          </div>

          {/* Top Users Table */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Usuarios Más Activos</h2>
            <UserTable 
              users={stats?.recentTickets?.slice(0, 5).map(ticket => ({
                id: ticket.id,
                name: `Usuario ${ticket.id}`,
                level: Math.floor(Math.random() * 50) + 1, // Placeholder
                xp: Math.floor(Math.random() * 10000) + 1000, // Placeholder
                lastActivity: ticket.createdAt
              })) || []}
            />
          </div>
        </div>

        {/* Additional Stats */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-2">Tickets en Progreso</h3>
            <p className="text-3xl font-bold text-yellow-500">
              {stats?.tickets?.inProgress || 0}
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-2">Última Actividad</h3>
            <p className="text-sm text-gray-600">
              {stats?.lastActivityAt 
                ? new Date(stats.lastActivityAt).toLocaleString()
                : 'Sin actividad reciente'
              }
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-2">Estado del Bot</h3>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
              <span className="text-green-600">En línea</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

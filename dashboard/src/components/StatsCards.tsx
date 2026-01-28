"use client";

import { useEffect, useState } from "react";

interface Stats {
  tickets: {
    total: number;
    open: number;
  };
  users: number;
  messages: number;
  recentTickets: Array<{
    id: number;
    category: string | null;
    status: string;
    createdAt: string;
    lastMessage: string | null;
  }>;
}

export function StatsCards() {
  const [stats, setStats] = useState<Stats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchStats() {
      try {
        const res = await fetch("/api/stats");
        if (!res.ok) throw new Error("No se pudieron cargar las estadísticas");
        const data = await res.json();
        setStats(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Error desconocido");
      } finally {
        setLoading(false);
      }
    }

    fetchStats();
  }, []);

  if (loading) {
    return (
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="bg-white p-6 rounded-lg shadow dark:bg-zinc-800 animate-pulse">
            <div className="h-4 bg-zinc-200 rounded w-1/2 mb-4 dark:bg-zinc-700"></div>
            <div className="h-8 bg-zinc-200 rounded w-3/4 dark:bg-zinc-700"></div>
          </div>
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg dark:bg-red-900/20 dark:border-red-800 dark:text-red-200">
        Error: {error}
      </div>
    );
  }

  if (!stats) return null;

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      <div className="bg-white p-6 rounded-lg shadow dark:bg-zinc-800">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <div className="h-8 w-8 rounded-md bg-indigo-600 flex items-center justify-center">
              <span className="text-white font-semibold">T</span>
            </div>
          </div>
          <div className="ml-5 w-0 flex-1">
            <dl>
              <dt className="text-sm font-medium text-zinc-600 dark:text-zinc-400 truncate">
                Tickets
              </dt>
              <dd className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
                {stats.tickets.total} ({stats.tickets.open} abiertos)
              </dd>
            </dl>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow dark:bg-zinc-800">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <div className="h-8 w-8 rounded-md bg-green-600 flex items-center justify-center">
              <span className="text-white font-semibold">U</span>
            </div>
          </div>
          <div className="ml-5 w-0 flex-1">
            <dl>
              <dt className="text-sm font-medium text-zinc-600 dark:text-zinc-400 truncate">
                Usuarios
              </dt>
              <dd className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
                {stats.users}
              </dd>
            </dl>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow dark:bg-zinc-800">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <div className="h-8 w-8 rounded-md bg-yellow-600 flex items-center justify-center">
              <span className="text-white font-semibold">M</span>
            </div>
          </div>
          <div className="ml-5 w-0 flex-1">
            <dl>
              <dt className="text-sm font-medium text-zinc-600 dark:text-zinc-400 truncate">
                Mensajes
              </dt>
              <dd className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
                {stats.messages}
              </dd>
            </dl>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow dark:bg-zinc-800">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <div className="h-8 w-8 rounded-md bg-purple-600 flex items-center justify-center">
              <span className="text-white font-semibold">⏱</span>
            </div>
          </div>
          <div className="ml-5 w-0 flex-1">
            <dl>
              <dt className="text-sm font-medium text-zinc-600 dark:text-zinc-400 truncate">
                Uptime
              </dt>
              <dd className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
                En línea
              </dd>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}

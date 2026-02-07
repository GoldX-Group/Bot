"use client";

import { useEffect, useState } from "react";

interface Stats {
  tickets: {
    total: number;
    open: number;
    inProgress: number;
    closed: number;
  };
  users: number;
  messages: number;
  lastActivityAt: string | null;
  recentTickets: Array<{
    id: number;
    category: string | null;
    status: string;
    createdAt: string;
    lastMessage: string | null;
    lastMessageAt: string | null;
  }>;
}

function formatNumber(value: number) {
  return new Intl.NumberFormat("es-ES").format(value);
}

function formatRelativeDate(value: string | null) {
  if (!value) return "Sin actividad";
  const date = new Date(value);
  const diff = Date.now() - date.getTime();

  const minutes = Math.floor(diff / 60000);
  if (minutes < 1) return "Hace instantes";
  if (minutes < 60) return `Hace ${minutes} min`;

  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `Hace ${hours} h`;

  const days = Math.floor(hours / 24);
  return `Hace ${days} d`;
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
      <div className="bg-white p-6 rounded-2xl shadow dark:bg-zinc-800">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-amber-500 to-yellow-500 flex items-center justify-center text-white text-lg font-semibold">
              TX
            </div>
          </div>
          <div className="ml-5 w-0 flex-1">
            <dl>
              <dt className="text-xs font-medium uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                Tickets totales
              </dt>
              <dd className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100">
                {formatNumber(stats.tickets.total)}
              </dd>
              <dd className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
                {formatNumber(stats.tickets.open)} abiertos · {formatNumber(stats.tickets.inProgress)} en curso · {formatNumber(stats.tickets.closed)} cerrados
              </dd>
            </dl>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-2xl shadow dark:bg-zinc-800">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center text-white text-lg font-semibold">
              US
            </div>
          </div>
          <div className="ml-5 w-0 flex-1">
            <dl>
              <dt className="text-xs font-medium uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                Usuarios
              </dt>
              <dd className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100">
                {formatNumber(stats.users)}
              </dd>
            </dl>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-2xl shadow dark:bg-zinc-800">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-sky-500 to-cyan-500 flex items-center justify-center text-white text-lg font-semibold">
              MS
            </div>
          </div>
          <div className="ml-5 w-0 flex-1">
            <dl>
              <dt className="text-xs font-medium uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                Mensajes
              </dt>
              <dd className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100">
                {formatNumber(stats.messages)}
              </dd>
            </dl>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-2xl shadow dark:bg-zinc-800">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-fuchsia-500 to-purple-500 flex items-center justify-center text-white text-lg font-semibold">
              ⚡
            </div>
          </div>
          <div className="ml-5 w-0 flex-1">
            <dl>
              <dt className="text-xs font-medium uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                Última actividad
              </dt>
              <dd className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                {formatRelativeDate(stats.lastActivityAt)}
              </dd>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}

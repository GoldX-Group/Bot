"use client";

import { useEffect, useState } from "react";

interface Ticket {
  id: number;
  category: string | null;
  status: string;
  createdAt: string;
  lastMessage: string | null;
}

export function RecentTickets() {
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchTickets() {
      try {
        const res = await fetch("/api/stats");
        if (!res.ok) throw new Error("No se pudieron cargar los tickets");
        const data = await res.json();
        setTickets(data.recentTickets || []);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Error desconocido");
      } finally {
        setLoading(false);
      }
    }

    fetchTickets();
  }, []);

  if (loading) {
    return (
      <div className="bg-white p-6 rounded-lg shadow dark:bg-zinc-800">
        <h2 className="text-lg font-medium text-zinc-900 dark:text-zinc-100 mb-4">
          Tickets recientes
        </h2>
        <div className="space-y-3">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="animate-pulse">
              <div className="h-4 bg-zinc-200 rounded w-1/4 mb-2 dark:bg-zinc-700"></div>
              <div className="h-3 bg-zinc-200 rounded w-3/4 dark:bg-zinc-700"></div>
            </div>
          ))}
        </div>
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

  return (
    <div className="bg-white p-6 rounded-lg shadow dark:bg-zinc-800">
      <h2 className="text-lg font-medium text-zinc-900 dark:text-zinc-100 mb-4">
        Tickets recientes
      </h2>
      {tickets.length === 0 ? (
        <p className="text-sm text-zinc-600 dark:text-zinc-400">
          No hay tickets recientes
        </p>
      ) : (
        <div className="space-y-3">
          {tickets.map((ticket) => (
            <div
              key={ticket.id}
              className="border-l-4 border-indigo-500 pl-4 py-2"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                    #{ticket.id}
                  </span>
                  {ticket.category && (
                    <span className="text-xs bg-zinc-100 text-zinc-800 px-2 py-1 rounded dark:bg-zinc-700 dark:text-zinc-200">
                      {ticket.category}
                    </span>
                  )}
                  <span
                    className={`text-xs px-2 py-1 rounded ${
                      ticket.status === "OPEN"
                        ? "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-200"
                        : ticket.status === "IN_PROGRESS"
                        ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-200"
                        : "bg-zinc-100 text-zinc-800 dark:bg-zinc-700 dark:text-zinc-200"
                    }`}
                  >
                    {ticket.status === "OPEN"
                      ? "Abierto"
                      : ticket.status === "IN_PROGRESS"
                      ? "En curso"
                      : "Cerrado"}
                  </span>
                </div>
                <span className="text-xs text-zinc-500 dark:text-zinc-400">
                  {new Date(ticket.createdAt).toLocaleDateString("es")}
                </span>
              </div>
              {ticket.lastMessage && (
                <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1 truncate">
                  {ticket.lastMessage}
                </p>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

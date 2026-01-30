import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { StatsCards } from "@/components/StatsCards";
import { RecentTickets } from "@/components/RecentTickets";

export default async function DashboardPage() {
  const session = await getServerSession();
  if (!session) redirect("/auth/signin");

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-900">
      <header className="bg-white shadow-sm dark:bg-zinc-800">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
              AURA HAX Bot Dashboard
            </h1>
            <div className="flex items-center gap-4">
              <span className="text-sm text-zinc-600 dark:text-zinc-400">
                {session.user?.name}
              </span>
              {session.user?.image && (
                <img
                  src={session.user.image}
                  alt="Avatar"
                  className="h-8 w-8 rounded-full"
                />
              )}
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="space-y-8">
          <StatsCards />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <RecentTickets />
            
            <div className="bg-white p-6 rounded-lg shadow dark:bg-zinc-800">
              <h2 className="text-lg font-medium text-zinc-900 dark:text-zinc-100 mb-4">
                Próximas características
              </h2>
              <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
                <li>• Sistema de tickets avanzado</li>
                <li>• Niveles y economía</li>
                <li>• Música con colas</li>
                <li>• Automoderación</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import Link from "next/link";
import { authOptions } from "@/lib/auth";

export default async function SignInPage() {
  const session = await getServerSession(authOptions);
  if (session) redirect("/dashboard");

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 dark:bg-zinc-900">
      <div className="w-full max-w-md space-y-6 rounded-2xl border border-zinc-200/60 bg-white p-8 shadow-xl dark:border-zinc-700/60 dark:bg-zinc-900">
        <div className="space-y-2 text-center">
          <p className="text-xs font-semibold tracking-[0.3em] uppercase text-amber-500">
            AURA HAX
          </p>
          <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
            Panel administrativo
          </h1>
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            Accede con tu cuenta de Discord autorizada para gestionar el bot y sus tickets.
          </p>
        </div>

        <Link
          href="/api/auth/signin/discord"
          className="group flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/30 transition hover:scale-[1.02] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-500"
        >
          <svg
            className="h-5 w-5 transition group-hover:scale-110"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M20.317 4.369a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.211.375-.444.864-.608 1.249-1.845-.276-3.68-.276-5.486 0-.164-.402-.415-.874-.626-1.249a.077.077 0 0 0-.079-.037 19.736 19.736 0 0 0-4.885 1.515.07.07 0 0 0-.032.028C2.22 9.045 1.672 13.58 2.007 18.068a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.02.08.08 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.105 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128c.126-.094.252-.192.372-.291a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.009c.12.099.246.198.372.292a.077.077 0 0 1-.006.128 12.299 12.299 0 0 1-1.872.891.076.076 0 0 0-.041.106c.36.698.772 1.362 1.226 1.993a.08.08 0 0 0 .084.028 19.87 19.87 0 0 0 6.002-3.02.077.077 0 0 0 .03-.056c.5-6.227-.838-10.722-3.549-13.671a.061.061 0 0 0-.031-.03ZM8.02 15.331c-1.18 0-2.157-1.085-2.157-2.419 0-1.333.955-2.418 2.157-2.418 1.213 0 2.18 1.095 2.157 2.418 0 1.334-.955 2.419-2.157 2.419Zm7.974 0c-1.18 0-2.157-1.085-2.157-2.419 0-1.333.955-2.418 2.157-2.418 1.213 0 2.18 1.095 2.157 2.418 0 1.334-.944 2.419-2.157 2.419Z" />
          </svg>
          Continuar con Discord
        </Link>

        <p className="text-center text-xs text-zinc-500 dark:text-zinc-500">
          ¿Problemas para entrar? Asegúrate de que tu ID de Discord esté en <code>DASHBOARD_ALLOWED_DISCORD_IDS</code>.
        </p>
      </div>
    </div>
  );
}

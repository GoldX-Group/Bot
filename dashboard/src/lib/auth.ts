import type { AuthOptions } from "next-auth";
import DiscordProvider from "next-auth/providers/discord";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "@/lib/prisma";

const allowedDiscordIds = (process.env.DASHBOARD_ALLOWED_DISCORD_IDS ?? "")
  .split(",")
  .map((value) => value.trim())
  .filter(Boolean);

if (!process.env.DISCORD_CLIENT_ID || !process.env.DISCORD_CLIENT_SECRET) {
  throw new Error("Se requieren DISCORD_CLIENT_ID y DISCORD_CLIENT_SECRET para la autenticación.");
}

if (process.env.NODE_ENV !== "development" && !process.env.NEXTAUTH_SECRET) {
  console.warn("NEXTAUTH_SECRET no está definido. Establécelo en producción para asegurar las sesiones.");
}

export const authOptions: AuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    DiscordProvider({
      clientId: process.env.DISCORD_CLIENT_ID,
      clientSecret: process.env.DISCORD_CLIENT_SECRET,
      authorization: {
        params: {
          scope: "identify email guilds",
        },
      },
    }),
  ],
  session: {
    strategy: "database",
  },
  pages: {
    signIn: "/auth/signin",
  },
  callbacks: {
    async signIn({ account, profile }) {
      if (!allowedDiscordIds.length) {
        return true;
      }

      const discordId = (profile as { id?: string } | null)?.id ?? account?.providerAccountId;

      if (discordId && allowedDiscordIds.includes(discordId)) {
        return true;
      }

      console.warn(`Inicio de sesión bloqueado para el usuario Discord ${discordId}`);
      return "/auth/unauthorized";
    },
    async jwt({ user, token, account, profile }) {
      if (user) {
        token.uid = user.id;
      }

      if (account && profile) {
        token.discordId = account.providerAccountId;
        token.discordName =
          (profile as { global_name?: string | null } | null)?.global_name ??
          (profile as { username?: string | null } | null)?.username ??
          token.discordName;
      }

      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user = {
          ...session.user,
          id: (token.uid as string) ?? session.user.id ?? "",
          discordId: (token.discordId as string) ?? null,
          discordName:
            (token.discordName as string) ??
            session.user.discordName ??
            session.user.name ??
            null,
        };
      }

      return session;
    },
  },
};

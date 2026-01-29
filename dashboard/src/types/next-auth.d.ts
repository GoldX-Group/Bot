import type { DefaultSession } from "next-auth";
import type { JWT as DefaultJWT } from "next-auth/jwt";

declare module "next-auth" {
  interface Session {
    user: (DefaultSession["user"] & {
      id: string;
      discordId: string | null;
      discordName: string | null;
    }) | null;
  }

  interface User {
    discordId?: string | null;
    discordName?: string | null;
  }
}

declare module "next-auth/jwt" {
  interface JWT extends DefaultJWT {
    uid?: string;
    discordId?: string;
    discordName?: string;
  }
}

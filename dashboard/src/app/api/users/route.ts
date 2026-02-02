import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const session = await getServerSession();
  if (!session) {
    return NextResponse.json({ error: "No autorizado" }, { status: 401 });
  }

  const guildId = process.env.GUILD_ID ?? process.env.NEXT_PUBLIC_GUILD_ID ?? null;

  if (!guildId) {
    return NextResponse.json(
      { error: "Falta configurar GUILD_ID para filtrar los usuarios" },
      { status: 500 }
    );
  }

  try {
    const users = await prisma.userProfile.findMany({
      where: { guildId },
      orderBy: [
        { level: 'desc' },
        { experience: 'desc' }
      ],
      take: 100, // Limitar a 100 usuarios para mejor rendimiento
    });

    // Transformar los datos para el frontend
    const transformedUsers = users.map((user: any) => ({
      id: user.id,
      userId: user.userId,
      name: `Usuario ${user.userId.slice(-4)}`, // Mostrar últimos 4 caracteres del ID
      level: user.level,
      xp: user.experience,
      balance: user.balance,
      lastActivity: user.updatedAt,
      createdAt: user.createdAt,
    }));

    return NextResponse.json(transformedUsers);
  } catch (error) {
    console.error("Error fetching users:", error);
    return NextResponse.json(
      { error: "Error interno del servidor" },
      { status: 500 }
    );
  }
}

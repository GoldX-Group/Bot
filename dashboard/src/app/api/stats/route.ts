import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const session = await getServerSession();
  if (!session) {
    return NextResponse.json({ error: "No autorizado" }, { status: 401 });
  }

  try {
    const [
      totalTickets,
      openTickets,
      totalUsers,
      totalMessages,
      recentTickets,
    ] = await Promise.all([
      prisma.ticket.count(),
      prisma.ticket.count({ where: { status: "OPEN" } }),
      prisma.userProfile.count(),
      prisma.auditLog.count({ where: { action: "MESSAGE_SENT" } }),
      prisma.ticket.findMany({
        take: 5,
        orderBy: { createdAt: "desc" },
        include: {
          messages: {
            take: 1,
            orderBy: { createdAt: "desc" },
          },
        },
      }),
    ]);

    const stats = {
      tickets: {
        total: totalTickets,
        open: openTickets,
      },
      users: totalUsers,
      messages: totalMessages,
      recentTickets: recentTickets.map((t: any) => ({
        id: t.id,
        category: t.category,
        status: t.status,
        createdAt: t.createdAt,
        lastMessage: t.messages[0]?.content ?? null,
      })),
    };

    return NextResponse.json(stats);
  } catch (error) {
    console.error("Error fetching stats:", error);
    return NextResponse.json(
      { error: "Error interno del servidor" },
      { status: 500 }
    );
  }
}

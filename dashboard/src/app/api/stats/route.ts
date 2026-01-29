import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { prisma } from "@/lib/prisma";

type TicketWithLastMessage = {
  id: number;
  category: string | null;
  status: string;
  createdAt: Date;
  messages: Array<{
    content: string | null;
    createdAt: Date | null;
  }>;
};

function resolveGuildId() {
  return process.env.GUILD_ID ?? process.env.NEXT_PUBLIC_GUILD_ID ?? null;
}

export async function GET() {
  const session = await getServerSession();
  if (!session) {
    return NextResponse.json({ error: "No autorizado" }, { status: 401 });
  }

  const guildId = resolveGuildId();

  if (!guildId) {
    return NextResponse.json(
      { error: "Falta configurar GUILD_ID para filtrar las métricas" },
      { status: 500 }
    );
  }

  try {
    const [
      totalTickets,
      openTickets,
      inProgressTickets,
      closedTickets,
      totalUsers,
      totalMessages,
      recentTickets,
      lastAudit,
    ] = await Promise.all([
      prisma.ticket.count({ where: { guildId } }),
      prisma.ticket.count({ where: { guildId, status: "OPEN" } }),
      prisma.ticket.count({ where: { guildId, status: "IN_PROGRESS" } }),
      prisma.ticket.count({ where: { guildId, status: "CLOSED" } }),
      prisma.userProfile.count({ where: { guildId } }),
      prisma.ticketMessage.count({ where: { ticket: { guildId } } }),
      prisma.ticket.findMany({
        where: { guildId },
        take: 5,
        orderBy: { createdAt: "desc" },
        include: {
          messages: {
            take: 1,
            orderBy: { createdAt: "desc" },
            select: {
              content: true,
              createdAt: true,
            },
          },
        },
      }),
      prisma.auditLog.findFirst({
        where: { guildId },
        orderBy: { createdAt: "desc" },
      }),
    ]);

    return NextResponse.json({
      tickets: {
        total: totalTickets,
        open: openTickets,
        inProgress: inProgressTickets,
        closed: closedTickets,
      },
      users: totalUsers,
      messages: totalMessages,
      lastActivityAt: lastAudit?.createdAt ?? null,
      recentTickets: recentTickets.map((ticket: TicketWithLastMessage) => ({
        id: ticket.id,
        category: ticket.category,
        status: ticket.status,
        createdAt: ticket.createdAt,
        lastMessage: ticket.messages[0]?.content ?? null,
        lastMessageAt: ticket.messages[0]?.createdAt ?? null,
      })),
    });
  } catch (error) {
    console.error("Error fetching stats:", error);
    return NextResponse.json(
      { error: "Error interno del servidor" },
      { status: 500 }
    );
  }
}

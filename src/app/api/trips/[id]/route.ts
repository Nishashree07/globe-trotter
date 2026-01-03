import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";

export async function GET(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const trip = await prisma.trip.findUnique({
    where: { id },
    include: {
      stops: {
        include: {
          activities: true,
        },
        orderBy: { order: "asc" },
      },
    },
  });

  if (!trip) {
    return NextResponse.json({ error: "Trip not found" }, { status: 404 });
  }

  return NextResponse.json(trip);
}

export async function DELETE(
  _req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  await prisma.trip.delete({ where: { id } });
  return NextResponse.json({ ok: true });
}

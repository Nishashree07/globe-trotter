import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";

export async function GET() {
  const trips = await prisma.trip.findMany({
    include: {
      stops: true,
      _count: { select: { stops: true } },
    },
    orderBy: { createdAt: "desc" },
  });
  const mapped = trips.map((t: any) => ({
    id: t.id,
    name: t.name,
    startDate: t.startDate.toISOString().split("T")[0],
    endDate: t.endDate.toISOString().split("T")[0],
    destinationCount: t._count.stops,
    status: new Date(t.endDate) >= new Date() ? "upcoming" : "past",
    coverUrl: null,
  }));
  return NextResponse.json(mapped);
}

export async function POST(req: Request) {
  const body = (await req.json().catch(() => null)) as
    | {
        name?: string;
        startDate?: string;
        endDate?: string;
        description?: string | null;
        coverUrl?: string | null;
      }
    | null;

  const name = body?.name?.trim();
  const startDate = body?.startDate;
  const endDate = body?.endDate;

  if (!name || !startDate || !endDate) {
    return NextResponse.json(
      { error: "Name, start date, and end date are required" },
      { status: 400 },
    );
  }

  const trip = await prisma.trip.create({
    data: {
      name,
      startDate: new Date(startDate),
      endDate: new Date(endDate),
      description: body.description,
      userId: "demo-user", // TODO: real auth
    },
  });

  return NextResponse.json(trip, { status: 201 });
}

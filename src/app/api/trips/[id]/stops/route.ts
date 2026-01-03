import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";

export async function PUT(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const body = (await req.json().catch(() => null)) as { stops?: any[] } | null;
  const stops = body?.stops;
  if (!Array.isArray(stops)) {
    return NextResponse.json({ error: "Invalid stops" }, { status: 400 });
  }

  // Delete existing stops/activities
  await prisma.stopActivity.deleteMany({
    where: { stop: { tripId: id } },
  });
  await prisma.tripStop.deleteMany({ where: { tripId: id } });

  // Create new stops and activities
  for (const s of stops) {
    // Find or create city
    const city = await prisma.city.upsert({
      where: { name_country: { name: s.city, country: s.country } },
      update: {},
      create: { name: s.city, country: s.country },
    });

    const stop = await prisma.tripStop.create({
      data: {
        tripId: id,
        cityId: city.id,
        order: s.order,
        startDate: new Date(s.startDate),
        endDate: new Date(s.endDate),
      },
    });

    if (Array.isArray(s.activities)) {
      for (const a of s.activities) {
        await prisma.stopActivity.create({
          data: {
            stopId: stop.id,
            activityId: a.id,
            date: a.date ? new Date(a.date) : new Date(),
            time: a.time,
            cost: a.cost,
          },
        });
      }
    }
  }

  return NextResponse.json({ ok: true });
}

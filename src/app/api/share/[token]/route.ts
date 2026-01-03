import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";

export async function GET(
  req: Request,
  { params }: { params: Promise<{ token: string }> }
) {
  const { token } = await params;
  const shared = await prisma.sharedTrip.findUnique({
    where: { token },
    include: {
      trip: {
        include: {
          stops: {
            include: { activities: true },
            orderBy: { order: "asc" },
          },
        },
      },
    },
  });

  if (!shared) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  // Return a public-safe shape
  return NextResponse.json({
    id: shared.trip.id,
    name: shared.trip.name,
    startDate: shared.trip.startDate.toISOString().split("T")[0],
    endDate: shared.trip.endDate.toISOString().split("T")[0],
    description: shared.trip.description,
    stops: shared.trip.stops.map((s: any) => ({
      id: s.id,
      city: s.city,
      country: s.country,
      startDate: s.startDate.toISOString().split("T")[0],
      endDate: s.endDate.toISOString().split("T")[0],
      order: s.order,
      activities: s.activities.map((a: any) => ({
        id: a.id,
        name: a.name,
        category: a.category,
        cost: a.cost,
        date: a.date?.toISOString().split("T")[0],
        time: a.time,
      })),
    })),
    budget: {
      total: 1500, // TODO: compute from expenses
      spent: shared.trip.stops.flatMap((s: any) => s.activities).reduce((sum: number, a: any) => sum + (a.cost ?? 0), 0),
      remaining: 1500 - shared.trip.stops.flatMap((s: any) => s.activities).reduce((sum: number, a: any) => sum + (a.cost ?? 0), 0),
      perDay: 136, // TODO: compute
    },
  });
}

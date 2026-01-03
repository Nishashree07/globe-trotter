import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";

export async function POST(
  _req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const token = crypto.randomUUID();
  await prisma.sharedTrip.upsert({
    where: { tripId: id },
    update: { token },
    create: { tripId: id, token },
  });
  return NextResponse.json({ token });
}

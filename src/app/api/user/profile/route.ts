import { NextResponse } from "next/server";

export async function PUT(req: Request) {
  const body = (await req.json().catch(() => null)) as
    | { name?: string; photoUrl?: string | null; language?: string }
    | null;

  const name = body?.name?.trim();
  if (!name) {
    return NextResponse.json({ error: "Name is required" }, { status: 400 });
  }

  // TODO: persist to DB
  return NextResponse.json({ ok: true });
}

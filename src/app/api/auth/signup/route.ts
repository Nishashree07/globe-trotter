import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = (await req.json().catch(() => null)) as
    | { name?: string | null; email?: string; password?: string }
    | null;

  const email = body?.email?.trim();
  const password = body?.password;

  if (!email || !password) {
    return NextResponse.json(
      { error: "Email and password are required" },
      { status: 400 },
    );
  }

  const res = NextResponse.json({ ok: true });
  res.cookies.set({
    name: "gt_session",
    value: crypto.randomUUID(),
    httpOnly: true,
    sameSite: "lax",
    path: "/",
  });
  return res;
}

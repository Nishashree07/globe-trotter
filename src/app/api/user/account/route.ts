import { NextResponse } from "next/server";

export async function DELETE() {
  // TODO: delete user from DB
  return NextResponse.json({ ok: true });
}

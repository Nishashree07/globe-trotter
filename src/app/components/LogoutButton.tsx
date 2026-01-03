"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LogoutButton() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function logout() {
    if (isSubmitting) return;

    setIsSubmitting(true);
    try {
      await fetch("/api/auth/logout", { method: "POST" });
    } finally {
      router.push("/login");
      router.refresh();
      setIsSubmitting(false);
    }
  }

  return (
    <button
      type="button"
      onClick={logout}
      disabled={isSubmitting}
      className="rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm font-medium text-zinc-900 disabled:opacity-60"
    >
      {isSubmitting ? "Logging out…" : "Logout"}
    </button>
  );
}

"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [sent, setSent] = useState(false);

  const emailError = useMemo(() => {
    if (!email) return "Email is required";
    if (!isValidEmail(email)) return "Enter a valid email";
    return null;
  }, [email]);

  const canSubmit = !emailError && !isSubmitting;

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    if (!canSubmit) return;

    setIsSubmitting(true);
    try {
      const res = await fetch("/api/auth/forgot-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (!res.ok) {
        const data = (await res.json().catch(() => null)) as
          | { error?: string }
          | null;
        setError(data?.error ?? "Request failed");
        return;
      }

      setSent(true);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="min-h-screen bg-zinc-50 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-md rounded-xl border border-zinc-200 bg-white p-6 shadow-sm">
        <div className="mb-6">
          <h1 className="text-2xl font-semibold text-zinc-900">
            Forgot password
          </h1>
          <p className="mt-1 text-sm text-zinc-600">
            We’ll send a reset link if the account exists.
          </p>
        </div>

        {error ? (
          <div className="mb-4 rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">
            {error}
          </div>
        ) : null}

        {sent ? (
          <div className="rounded-lg border border-emerald-200 bg-emerald-50 px-3 py-2 text-sm text-emerald-800">
            If an account exists for {email}, a reset link has been sent.
          </div>
        ) : (
          <form onSubmit={onSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-zinc-800">
                Email
              </label>
              <input
                className="mt-1 w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-900 outline-none focus:ring-2 focus:ring-zinc-900/10"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                autoComplete="email"
                required
              />
              {emailError ? (
                <p className="mt-1 text-xs text-red-600">{emailError}</p>
              ) : null}
            </div>

            <button
              type="submit"
              disabled={!canSubmit}
              className="w-full rounded-lg bg-zinc-900 px-4 py-2.5 text-sm font-semibold text-white disabled:opacity-60"
            >
              {isSubmitting ? "Sending…" : "Send reset link"}
            </button>
          </form>
        )}

        <div className="mt-4 text-sm">
          <Link href="/login" className="text-zinc-900 underline">
            Back to login
          </Link>
        </div>
      </div>
    </div>
  );
}

"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";

export default function CreateTripPage() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [description, setDescription] = useState("");
  const [coverUrl, setCoverUrl] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const nameError = useMemo(() => {
    if (!name.trim()) return "Trip name is required";
    if (name.trim().length < 3) return "Trip name must be at least 3 characters";
    return null;
  }, [name]);

  const datesError = useMemo(() => {
    if (!startDate || !endDate) return "Start and end dates are required";
    if (new Date(startDate) > new Date(endDate))
      return "End date must be on or after start date";
    return null;
  }, [startDate, endDate]);

  const canSubmit = !nameError && !datesError && !isSubmitting;

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    if (!canSubmit) return;

    setIsSubmitting(true);
    try {
      const res = await fetch("/api/trips", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          startDate,
          endDate,
          description: description.trim() || null,
          coverUrl: coverUrl.trim() || null,
        }),
      });

      if (!res.ok) {
        const data = (await res.json().catch(() => null)) as
          | { error?: string }
          | null;
        setError(data?.error ?? "Failed to create trip");
        return;
      }

      router.push("/");
      router.refresh();
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  function handleCoverChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setCoverUrl(reader.result as string);
      reader.readAsDataURL(file);
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-50 via-white to-zinc-50">
      <div className="min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-100/20 via-transparent to-transparent">
        <div className="px-4 py-10">
          <div className="mx-auto w-full max-w-2xl">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-zinc-900">Create a new trip</h1>
              <p className="mt-2 text-base text-zinc-600">
                Start planning your multi-city adventure.
              </p>
            </div>

            {error ? (
              <div className="mb-6 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                {error}
              </div>
            ) : null}

            <form onSubmit={onSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-zinc-800 mb-2">
                  Trip name
                </label>
                <input
                  className="w-full rounded-lg border border-zinc-300 bg-white px-4 py-3 text-sm text-zinc-900 outline-none transition-colors focus:ring-2 focus:ring-zinc-900/10"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g., Summer in Europe"
                  required
                />
                {nameError ? (
                  <p className="mt-1 text-xs text-red-600">{nameError}</p>
                ) : null}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-zinc-800 mb-2">
                    Start date
                  </label>
                  <input
                    className="w-full rounded-lg border border-zinc-300 bg-white px-4 py-3 text-sm text-zinc-900 outline-none transition-colors focus:ring-2 focus:ring-zinc-900/10"
                    type="date"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-zinc-800 mb-2">
                    End date
                  </label>
                  <input
                    className="w-full rounded-lg border border-zinc-300 bg-white px-4 py-3 text-sm text-zinc-900 outline-none transition-colors focus:ring-2 focus:ring-zinc-900/10"
                    type="date"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                    required
                  />
                </div>
              </div>
              {datesError ? (
                <p className="text-xs text-red-600">{datesError}</p>
              ) : null}

              <div>
                <label className="block text-sm font-medium text-zinc-800 mb-2">
                  Description (optional)
                </label>
                <textarea
                  className="w-full rounded-lg border border-zinc-300 bg-white px-4 py-3 text-sm text-zinc-900 outline-none transition-colors focus:ring-2 focus:ring-zinc-900/10 resize-none"
                  rows={4}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Tell us about your trip..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-zinc-800 mb-2">
                  Cover photo (optional)
                </label>
                {coverUrl ? (
                  <div className="space-y-3">
                    <div className="relative rounded-xl overflow-hidden border border-zinc-200">
                      <Image
                        src={coverUrl}
                        alt="Cover preview"
                        width={800}
                        height={320}
                        className="w-full h-48 object-cover"
                      />
                      <button
                        type="button"
                        onClick={() => setCoverUrl("")}
                        className="absolute top-2 right-2 rounded-lg bg-white/90 px-2 py-1 text-xs font-medium text-zinc-700 hover:bg-white transition-colors"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ) : (
                  <label className="block">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleCoverChange}
                      className="sr-only"
                    />
                    <div className="rounded-xl border-2 border-dashed border-zinc-300 bg-white px-6 py-8 text-center transition-colors hover:border-zinc-400 cursor-pointer">
                      <div className="flex flex-col items-center">
                        <div className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center mb-3">
                          <span className="text-zinc-600 text-lg">+</span>
                        </div>
                        <p className="text-sm text-zinc-700 font-medium">
                          Upload a cover photo
                        </p>
                        <p className="text-xs text-zinc-500 mt-1">
                          JPG, PNG up to 5MB
                        </p>
                      </div>
                    </div>
                  </label>
                )}
              </div>

              <div className="flex gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => router.back()}
                  className="flex-1 rounded-lg border border-zinc-300 bg-white px-4 py-3 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={!canSubmit}
                  className="flex-1 rounded-lg bg-zinc-900 px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-zinc-800 disabled:opacity-60"
                >
                  {isSubmitting ? "Saving…" : "Save trip"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

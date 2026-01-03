"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState, useEffect } from "react";

interface Trip {
  id: string;
  name: string;
  startDate: string;
  endDate: string;
  destinationCount: number;
  status: "upcoming" | "past";
  coverUrl: string | null;
}

export default function TripsPage() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<"all" | "upcoming" | "past">("all");
  const [trips, setTrips] = useState<Trip[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch("/api/trips");
        const data = (await res.json()) as Trip[];
        setTrips(data);
      } catch {
        setTrips([]);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  const filteredTrips = useMemo(() => {
    let filtered = trips;

    if (search.trim()) {
      const q = search.toLowerCase();
      filtered = filtered.filter((t) => t.name.toLowerCase().includes(q));
    }

    if (filter !== "all") {
      filtered = filtered.filter((t) => t.status === filter);
    }

    return filtered;
  }, [search, filter, trips]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-zinc-50 via-white to-zinc-50 flex items-center justify-center">
        <p className="text-sm text-zinc-600">Loading trips...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-50 via-white to-zinc-50">
      <div className="min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-100/20 via-transparent to-transparent">
        <div className="px-4 py-10">
          <div className="mx-auto w-full max-w-5xl">
            <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <h1 className="text-3xl font-bold text-zinc-900">All trips</h1>
                <p className="mt-2 text-base text-zinc-600">
                  Manage and explore your travel plans.
                </p>
              </div>
              <Link
                href="/trips/new"
                className="inline-flex items-center justify-center rounded-xl bg-zinc-900 px-6 py-3 text-base font-semibold text-white transition-all hover:bg-zinc-800 hover:shadow-lg"
              >
                + New trip
              </Link>
            </div>

            <div className="mb-6 flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <input
                  className="w-full rounded-lg border border-zinc-300 bg-white px-4 py-2.5 text-sm text-zinc-900 outline-none transition-colors focus:ring-2 focus:ring-zinc-900/10"
                  type="text"
                  placeholder="Search trips..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
              <div className="flex gap-2">
                {(["all", "upcoming", "past"] as const).map((f) => (
                  <button
                    key={f}
                    onClick={() => setFilter(f)}
                    className={`rounded-lg px-4 py-2.5 text-sm font-medium transition-colors ${
                      filter === f
                        ? "bg-zinc-900 text-white"
                        : "bg-white text-zinc-700 border border-zinc-300 hover:bg-zinc-50"
                    }`}
                  >
                    {f === "all" ? "All" : f === "upcoming" ? "Upcoming" : "Past"}
                  </button>
                ))}
              </div>
            </div>

            {filteredTrips.length === 0 ? (
              <div className="rounded-xl border border-zinc-200 bg-white p-12 text-center">
                <p className="text-sm text-zinc-600">
                  {search || filter !== "all"
                    ? "No trips match your filters."
                    : "No trips yet. Create your first trip!"}
                </p>
                {!search && filter === "all" && (
                  <Link
                    href="/trips/new"
                    className="mt-4 inline-flex items-center justify-center rounded-lg bg-zinc-900 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-zinc-800"
                  >
                    Create trip
                  </Link>
                )}
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {filteredTrips.map((trip) => (
                  <Link
                    key={trip.id}
                    href={`/trips/${trip.id}`}
                    className="group block rounded-xl border border-zinc-200 bg-white overflow-hidden transition-all hover:border-zinc-300 hover:shadow-md"
                  >
                    {trip.coverUrl ? (
                      <div className="aspect-video bg-zinc-100">
                        <Image
                          src={trip.coverUrl}
                          alt={trip.name}
                          width={400}
                          height={256}
                          className="w-full h-48 object-cover"
                        />
                      </div>
                    ) : (
                      <div className="aspect-video bg-gradient-to-br from-zinc-100 to-zinc-200" />
                    )}
                    <div className="p-5">
                      <h3 className="text-base font-semibold text-zinc-900 group-hover:text-zinc-700 transition-colors">
                        {trip.name}
                      </h3>
                      <p className="mt-1 text-sm text-zinc-600">
                        {new Date(trip.startDate).toLocaleDateString()} –{" "}
                        {new Date(trip.endDate).toLocaleDateString()}
                      </p>
                      <div className="mt-3 flex items-center justify-between">
                        <span className="text-xs text-zinc-500">
                          {trip.destinationCount} destination
                          {trip.destinationCount > 1 ? "s" : ""}
                        </span>
                        <span
                          className={`rounded-full px-2.5 py-1 text-xs font-medium ${
                            trip.status === "upcoming"
                              ? "bg-emerald-100 text-emerald-800"
                              : "bg-zinc-100 text-zinc-600"
                          }`}
                        >
                          {trip.status}
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";

import { useEffect, useState } from "react";

interface Activity {
  id: string;
  name: string;
  category: string;
  cost: number | null;
  date: string;
  time?: string;
}

interface Stop {
  id: string;
  city: string;
  country: string;
  startDate: string;
  endDate: string;
  order: number;
  activities: Activity[];
}

interface Trip {
  id: string;
  name: string;
  startDate: string;
  endDate: string;
  description: string | null;
  coverUrl: string | null;
  createdAt: string;
  updatedAt: string;
  stops: Stop[];
  budget: {
    total: number;
    spent: number;
    remaining: number;
    perDay: number;
  };
}

export default function SharePage({ params }: { params: { token: string } }) {
  const [trip, setTrip] = useState<Trip | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch(`/api/share/${params.token}`);
        if (!res.ok) {
          if (res.status === 404) setError("Trip not found or link expired");
          else setError("Failed to load trip");
          return;
        }
        const data = await res.json();
        setTrip(data);
      } catch {
        setError("Something went wrong");
      } finally {
        setLoading(false);
      }
    }
    load();
  }, [params.token]);

  if (loading) {
    return (
      <div className="min-h-screen bg-zinc-50 flex items-center justify-center">
        <p className="text-sm text-zinc-600">Loading...</p>
      </div>
    );
  }

  if (error || !trip) {
    return (
      <div className="min-h-screen bg-zinc-50 flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-2xl font-semibold text-zinc-900 mb-2">Trip not found</h1>
          <p className="text-sm text-zinc-600">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-50 via-white to-zinc-50">
      <div className="min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-100/20 via-transparent to-transparent">
        <div className="px-4 py-10">
          <div className="mx-auto w-full max-w-4xl">
            <div className="mb-8 text-center">
              <h1 className="text-3xl font-bold text-zinc-900">{trip.name}</h1>
              <p className="mt-2 text-base text-zinc-600">
                {new Date(trip.startDate).toLocaleDateString()} –{" "}
                {new Date(trip.endDate).toLocaleDateString()}
              </p>
              {trip.description && (
                <p className="mt-3 text-sm text-zinc-700 max-w-2xl mx-auto">{trip.description}</p>
              )}
            </div>

            <div className="space-y-8">
              <section>
                <h2 className="text-lg font-semibold text-zinc-900 mb-4">Itinerary</h2>
                <div className="space-y-6">
                  {trip.stops.map((stop) => (
                    <div key={stop.id} className="rounded-xl border border-zinc-200 bg-white p-5">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="text-base font-semibold text-zinc-900">
                            {stop.city}, {stop.country}
                          </h3>
                          <p className="text-sm text-zinc-600">
                            {new Date(stop.startDate).toLocaleDateString()} –{" "}
                            {new Date(stop.endDate).toLocaleDateString()}
                          </p>
                        </div>
                        <span className="rounded-full bg-zinc-100 px-2.5 py-1 text-xs font-medium text-zinc-600">
                          Day {stop.order}
                        </span>
                      </div>
                      <ul className="space-y-2">
                        {stop.activities.map((act) => (
                          <li key={act.id} className="flex items-start justify-between text-sm">
                            <div>
                              <span className="font-medium text-zinc-900">{act.name}</span>
                              <span className="ml-2 text-zinc-500">({act.category})</span>
                              {act.time && (
                                <span className="ml-2 text-zinc-500">{act.time}</span>
                              )}
                            </div>
                            {act.cost != null && (
                              <span className="text-zinc-700 font-medium">
                                ${act.cost}
                              </span>
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-zinc-900 mb-4">Budget</h2>
                <div className="rounded-xl border border-zinc-200 bg-white p-5 space-y-4">
                  <div>
                    <p className="text-xs text-zinc-600">Total budget</p>
                    <p className="text-xl font-bold text-zinc-900">${trip.budget.total}</p>
                  </div>
                  <div>
                    <p className="text-xs text-zinc-600">Spent so far</p>
                    <p className="text-xl font-bold text-zinc-900">${trip.budget.spent}</p>
                  </div>
                  <div>
                    <p className="text-xs text-zinc-600">Remaining</p>
                    <p className="text-xl font-bold text-zinc-900">${trip.budget.remaining}</p>
                  </div>
                  <div>
                    <p className="text-xs text-zinc-600">Average per day</p>
                    <p className="text-xl font-bold text-zinc-900">${trip.budget.perDay}</p>
                  </div>
                </div>
              </section>
            </div>

            <div className="mt-12 text-center">
              <p className="text-xs text-zinc-500">
                Shared via GlobeTrotter • View-only link
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import ItineraryVisualization from "../../components/ItineraryVisualization";
import BudgetBreakdown from "../../components/BudgetBreakdown";

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
}

export default function TripDetailPage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const [trip, setTrip] = useState<Trip | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [shareModalOpen, setShareModalOpen] = useState(false);
  const [shareUrl, setShareUrl] = useState("");

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch(`/api/trips/${params.id}`);
        if (!res.ok) {
          if (res.status === 404) setError("Trip not found");
          else setError("Failed to load trip");
          return;
        }
        const data = (await res.json()) as Trip;
        setTrip(data);
      } catch {
        setError("Something went wrong");
      } finally {
        setLoading(false);
      }
    }
    load();
  }, [params.id]);

  async function handleShare() {
    const res = await fetch(`/api/trips/${trip!.id}/share`, { method: "POST" });
    const data = (await res.json()) as { token: string };
    const url = `${window.location.origin}/share/${data.token}`;
    setShareUrl(url);
    setShareModalOpen(true);
  }

  async function handleDelete() {
    if (!confirm("Are you sure you want to delete this trip?")) return;
    await fetch(`/api/trips/${trip!.id}`, { method: "DELETE" });
    router.push("/trips");
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-zinc-50 via-white to-zinc-50 flex items-center justify-center">
        <p className="text-sm text-zinc-600">Loading trip...</p>
      </div>
    );
  }

  if (error || !trip) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-zinc-50 via-white to-zinc-50 flex items-center justify-center">
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
            <div className="mb-6">
              <Link
                href="/trips"
                className="inline-flex items-center text-sm text-zinc-600 hover:text-zinc-900 transition-colors"
              >
                ← Back to trips
              </Link>
            </div>

            {trip.coverUrl ? (
              <div className="mb-6 rounded-xl overflow-hidden border border-zinc-200">
                <Image
                  src={trip.coverUrl}
                  alt={trip.name}
                  width={800}
                  height={320}
                  className="w-full h-64 object-cover"
                />
              </div>
            ) : (
              <div className="mb-6 rounded-xl bg-gradient-to-br from-zinc-100 to-zinc-200 h-64" />
            )}

            <div className="mb-8">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                <div>
                  <h1 className="text-3xl font-bold text-zinc-900">{trip.name}</h1>
                  <p className="mt-2 text-base text-zinc-600">
                    {new Date(trip.startDate).toLocaleDateString()} –{" "}
                    {new Date(trip.endDate).toLocaleDateString()}
                  </p>
                  {trip.description && (
                    <p className="mt-3 text-sm text-zinc-700">{trip.description}</p>
                  )}
                </div>
                <div className="flex gap-2">
                  <Link
                    href={`/trips/${trip.id}/build`}
                    className="rounded-lg border border-zinc-300 bg-white px-4 py-2 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-50"
                  >
                    Build itinerary
                  </Link>
                  <button
                    onClick={handleShare}
                    className="rounded-lg border border-zinc-300 bg-white px-4 py-2 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-50"
                  >
                    Share
                  </button>
                  <Link
                    href={`/trips/${trip.id}/edit`}
                    className="rounded-lg border border-zinc-300 bg-white px-4 py-2 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-50"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={handleDelete}
                    className="rounded-lg border border-red-300 bg-white px-4 py-2 text-sm font-medium text-red-700 transition-colors hover:bg-red-50"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-8">
                <section>
                  <h2 className="text-lg font-semibold text-zinc-900 mb-4">Itinerary</h2>
                  <ItineraryVisualization stops={trip.stops} />
                </section>
              </div>

              <div className="lg:col-span-1">
                <section>
                  <h2 className="text-lg font-semibold text-zinc-900 mb-4">Budget</h2>
                  <BudgetBreakdown stops={trip.stops} />
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>

      {shareModalOpen && (
        <div className="fixed inset-0 bg-zinc-900/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl p-6 max-w-md w-full">
            <h3 className="text-lg font-semibold text-zinc-900 mb-2">Share this trip</h3>
            <p className="text-sm text-zinc-600 mb-4">
              Anyone with this link can view a read-only version of your itinerary.
            </p>
            <input
              readOnly
              value={shareUrl}
              className="w-full rounded-lg border border-zinc-300 bg-zinc-50 px-3 py-2 text-sm text-zinc-900"
              onClick={(e) => e.currentTarget.select()}
            />
            <div className="mt-4 flex gap-2">
              <button
                onClick={() => {
                  navigator.clipboard.writeText(shareUrl);
                  alert("Link copied!");
                }}
                className="flex-1 rounded-lg bg-zinc-900 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-zinc-800"
              >
                Copy link
              </button>
              <button
                onClick={() => setShareModalOpen(false)}
                className="flex-1 rounded-lg border border-zinc-300 bg-white px-4 py-2 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-50"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

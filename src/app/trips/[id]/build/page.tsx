"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useMemo, useState, useEffect } from "react";
import ActivitySelector from "../../../components/ActivitySelector";

interface Stop {
  id: string;
  city: string;
  country: string;
  startDate: string;
  endDate: string;
  order: number;
  activities: Activity[];
}

interface Activity {
  id: string;
  name: string;
  category: "Sightseeing" | "Food" | "Adventure" | "Culture" | "Relaxation";
  description: string;
  cost: number | null;
  durationMinutes: number | null;
  imageUrl?: string;
  date?: string;
  time?: string;
}

interface City {
  id: string;
  name: string;
  country: string;
  costIndex: "Low" | "Medium" | "High";
  popularity: number;
}

interface Trip {
  id: string;
  name: string;
  startDate: string;
  endDate: string;
  description: string | null;
  coverUrl: string | null;
  stops?: Stop[];
}

export default function ItineraryBuilderPage({ params }: { params: { id: string } }) {
  const router = useRouter();

  const [trip, setTrip] = useState<Trip | null>(null);
  const [stops, setStops] = useState<Stop[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [showAddStop, setShowAddStop] = useState(false);
  const [cityQuery, setCityQuery] = useState("");
  const [countryFilter, setCountryFilter] = useState("");
  const [selectedCity, setSelectedCity] = useState<City | null>(null);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const [draggedIndex, setDraggedIndex] = useState<number | null>(null);

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch(`/api/trips/${params.id}`);
        if (!res.ok) throw new Error();
        const data = await res.json();
        setTrip(data);
        setStops(data.stops || []);
      } catch {
        setError("Failed to load trip");
      } finally {
        setLoading(false);
      }
    }
    load();
  }, [params.id]);

  const cities: City[] = useMemo(() => {
    const all: City[] = [
      { id: "1", name: "Barcelona", country: "Spain", costIndex: "Medium", popularity: 92 },
      { id: "2", name: "Lisbon", country: "Portugal", costIndex: "Low", popularity: 88 },
      { id: "3", name: "Seoul", country: "South Korea", costIndex: "Medium", popularity: 85 },
      { id: "4", name: "Cape Town", country: "South Africa", costIndex: "Low", popularity: 81 },
      { id: "5", name: "Dubai", country: "UAE", costIndex: "High", popularity: 79 },
      { id: "6", name: "Tokyo", country: "Japan", costIndex: "High", popularity: 95 },
      { id: "7", name: "Kyoto", country: "Japan", costIndex: "Medium", popularity: 90 },
      { id: "8", name: "Paris", country: "France", costIndex: "High", popularity: 93 },
      { id: "9", name: "Rome", country: "Italy", costIndex: "Medium", popularity: 87 },
      { id: "10", name: "Bali", country: "Indonesia", costIndex: "Low", popularity: 84 },
    ];

    return all.filter((c) => {
      const matchesName = c.name.toLowerCase().includes(cityQuery.toLowerCase());
      const matchesCountry = !countryFilter || c.country === countryFilter;
      const notAlreadyAdded = !stops.some((s) => s.city === c.name);
      return matchesName && matchesCountry && notAlreadyAdded;
    });
  }, [cityQuery, countryFilter, stops]);

  async function handleAddStop() {
    if (!selectedCity || !startDate || !endDate) return;
    const newStop: Stop = {
      id: crypto.randomUUID(),
      city: selectedCity.name,
      country: selectedCity.country,
      startDate,
      endDate,
      order: stops.length + 1,
      activities: [],
    };
    setStops([...stops, newStop]);
    setShowAddStop(false);
    setSelectedCity(null);
    setStartDate("");
    setEndDate("");
  }

  function handleDragStart(index: number) {
    setDraggedIndex(index);
  }

  function handleDragOver(e: React.DragEvent) {
    e.preventDefault();
  }

  function handleDrop(e: React.DragEvent, dropIndex: number) {
    e.preventDefault();
    if (draggedIndex === null || draggedIndex === dropIndex) return;
    const reordered = [...stops];
    const [removed] = reordered.splice(draggedIndex, 1);
    reordered.splice(dropIndex, 0, removed);
    setStops(reordered.map((s, i) => ({ ...s, order: i + 1 })));
    setDraggedIndex(null);
  }

  async function handleSave() {
    await fetch(`/api/trips/${params.id}/stops`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ stops }),
    });
    router.push(`/trips/${params.id}`);
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-zinc-50 flex items-center justify-center">
        <p className="text-sm text-zinc-600">Loading trip...</p>
      </div>
    );
  }

  if (error || !trip) {
    return (
      <div className="min-h-screen bg-zinc-50 flex items-center justify-center">
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
            <div className="mb-6 flex items-center justify-between">
              <div>
                <Link
                  href={`/trips/${params.id}`}
                  className="inline-flex items-center text-sm text-zinc-600 hover:text-zinc-900 transition-colors"
                >
                  ← Back to trip
                </Link>
                <h1 className="text-2xl font-bold text-zinc-900 mt-2">Build itinerary</h1>
                <p className="text-sm text-zinc-600 mt-1">{trip.name}</p>
              </div>
              <button
                onClick={handleSave}
                className="rounded-lg bg-zinc-900 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-zinc-800"
              >
                Save
              </button>
            </div>

            <div className="space-y-4">
              {stops.map((stop, i) => (
                <div
                  key={stop.id}
                  draggable
                  onDragStart={() => handleDragStart(i)}
                  onDragOver={handleDragOver}
                  onDrop={(e) => handleDrop(e, i)}
                  className="group rounded-xl border border-zinc-200 bg-white p-5 cursor-move transition-all hover:border-zinc-300 hover:shadow-sm"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-base font-semibold text-zinc-900">
                        {stop.city}, {stop.country}
                      </h3>
                      <p className="text-sm text-zinc-600">
                        {new Date(stop.startDate).toLocaleDateString()} –{" "}
                        {new Date(stop.endDate).toLocaleDateString()}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="rounded-full bg-zinc-100 px-2.5 py-1 text-xs font-medium text-zinc-600">
                        Day {stop.order}
                      </span>
                      <button
                        onClick={() => setStops(stops.filter((s) => s.id !== stop.id))}
                        className="opacity-0 group-hover:opacity-100 transition-opacity rounded-lg border border-red-300 bg-white px-2 py-1 text-xs font-medium text-red-700 hover:bg-red-50"
                      >
                        Remove
                      </button>
                    </div>
                  </div>

                  <ActivitySelector
                    city={stop.city}
                    selected={stop.activities}
                    onChange={(activities) => {
                      const updated = stops.map((s) =>
                        s.id === stop.id ? { ...s, activities } : s
                      );
                      setStops(updated);
                    }}
                  />
                </div>
              ))}

              <button
                onClick={() => setShowAddStop(true)}
                className="w-full rounded-xl border-2 border-dashed border-zinc-300 bg-white p-6 text-center transition-colors hover:border-zinc-400"
              >
                <span className="text-lg font-medium text-zinc-700">+ Add Stop</span>
                <p className="text-sm text-zinc-500 mt-1">Add a city to your trip</p>
              </button>
            </div>
          </div>
        </div>
      </div>

      {showAddStop && (
        <div className="fixed inset-0 bg-zinc-900/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <h3 className="text-lg font-semibold text-zinc-900 mb-4">Add a city</h3>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-zinc-800 mb-2">Search cities</label>
                <input
                  className="w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-900 outline-none transition-colors focus:ring-2 focus:ring-zinc-900/10"
                  type="text"
                  placeholder="e.g., Tokyo"
                  value={cityQuery}
                  onChange={(e) => setCityQuery(e.target.value)}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-zinc-800 mb-2">Filter by country</label>
                <select
                  className="w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-900 outline-none transition-colors focus:ring-2 focus:ring-zinc-900/10"
                  value={countryFilter}
                  onChange={(e) => setCountryFilter(e.target.value)}
                >
                  <option value="">All countries</option>
                  {Array.from(new Set(cities.map((c) => c.country))).map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-1 gap-3 max-h-64 overflow-y-auto">
                {cities.map((city) => (
                  <button
                    key={city.id}
                    onClick={() => setSelectedCity(city)}
                    className={`text-left rounded-lg border p-3 transition-colors ${
                      selectedCity?.id === city.id
                        ? "border-zinc-900 bg-zinc-50"
                        : "border-zinc-200 bg-white hover:border-zinc-300"
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="text-sm font-medium text-zinc-900">{city.name}</h4>
                        <p className="text-xs text-zinc-600">{city.country}</p>
                      </div>
                      <div className="text-right">
                        <span
                          className={`rounded-full px-2 py-0.5 text-xs font-medium ${
                            city.costIndex === "Low"
                              ? "bg-emerald-100 text-emerald-800"
                              : city.costIndex === "Medium"
                              ? "bg-amber-100 text-amber-800"
                              : "bg-rose-100 text-rose-800"
                          }`}
                        >
                          {city.costIndex}
                        </span>
                        <p className="text-xs text-zinc-500 mt-1">{city.popularity}%</p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>

              {selectedCity && (
                <>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-zinc-800 mb-1">Arrival</label>
                      <input
                        className="w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-900 outline-none transition-colors focus:ring-2 focus:ring-zinc-900/10"
                        type="date"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-zinc-800 mb-1">Departure</label>
                      <input
                        className="w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-900 outline-none transition-colors focus:ring-2 focus:ring-zinc-900/10"
                        type="date"
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <button
                      onClick={() => setShowAddStop(false)}
                      className="flex-1 rounded-lg border border-zinc-300 bg-white px-4 py-2 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-50"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={handleAddStop}
                      disabled={!startDate || !endDate}
                      className="flex-1 rounded-lg bg-zinc-900 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-zinc-800 disabled:opacity-60"
                    >
                      Add stop
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

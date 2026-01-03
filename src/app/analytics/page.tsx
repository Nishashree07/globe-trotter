"use client";

import Link from "next/link";
import { useMemo } from "react";

export default function AnalyticsPage() {
  const bookingsData = useMemo(() => [
    { month: "Jan", bookings: 45, revenue: 54000 },
    { month: "Feb", bookings: 52, revenue: 62400 },
    { month: "Mar", bookings: 61, revenue: 73200 },
    { month: "Apr", bookings: 58, revenue: 69600 },
    { month: "May", bookings: 73, revenue: 87600 },
    { month: "Jun", bookings: 69, revenue: 82800 },
  ], []);

  const destinationsData = useMemo(() => [
    { name: "Paris", bookings: 124, percentage: 28 },
    { name: "Bali", bookings: 98, percentage: 22 },
    { name: "Tokyo", bookings: 87, percentage: 20 },
    { name: "New York", bookings: 65, percentage: 15 },
    { name: "Barcelona", bookings: 42, percentage: 10 },
    { name: "Dubai", bookings: 24, percentage: 5 },
  ], []);

  const maxBookings = Math.max(...bookingsData.map((d) => d.bookings));
  const maxRevenue = Math.max(...bookingsData.map((d) => d.revenue));

  return (
    <div className="min-h-screen bg-zinc-50">
      <nav className="sticky top-0 z-50 bg-white border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold text-zinc-900">
              GlobeTrotter
            </Link>
            <div className="flex items-center gap-6 text-sm">
              <Link href="/destinations" className="text-zinc-600 hover:text-zinc-900">Destinations</Link>
              <Link href="/bookings" className="text-zinc-600 hover:text-zinc-900">Bookings</Link>
              <Link href="/hotels" className="text-zinc-600 hover:text-zinc-900">Hotels</Link>
              <Link href="/flights" className="text-zinc-600 hover:text-zinc-900">Flights</Link>
              <Link href="/analytics" className="text-emerald-600 hover:text-emerald-700">Analytics</Link>
              <Link href="/profile" className="text-zinc-600 hover:text-zinc-900">Profile</Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-zinc-900 mb-2">Analytics Dashboard</h1>
          <p className="text-lg text-zinc-600">Track bookings, revenue, and destination performance</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="rounded-xl border border-zinc-200 bg-white p-6">
            <p className="text-sm text-zinc-600 mb-1">Total bookings</p>
            <p className="text-3xl font-bold text-zinc-900">358</p>
            <p className="text-xs text-emerald-600">+12% from last month</p>
          </div>
          <div className="rounded-xl border border-zinc-200 bg-white p-6">
            <p className="text-sm text-zinc-600 mb-1">Total revenue</p>
            <p className="text-3xl font-bold text-zinc-900">$429,600</p>
            <p className="text-xs text-emerald-600">+8% from last month</p>
          </div>
          <div className="rounded-xl border border-zinc-200 bg-white p-6">
            <p className="text-sm text-zinc-600 mb-1">Avg booking value</p>
            <p className="text-3xl font-bold text-zinc-900">$1,200</p>
            <p className="text-xs text-zinc-600">Stable</p>
          </div>
          <div className="rounded-xl border border-zinc-200 bg-white p-6">
            <p className="text-sm text-zinc-600 mb-1">Conversion rate</p>
            <p className="text-3xl font-bold text-zinc-900">3.2%</p>
            <p className="text-xs text-emerald-600">+0.4% from last month</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <section className="rounded-xl border border-zinc-200 bg-white p-6">
            <h2 className="text-lg font-semibold text-zinc-900 mb-4">Bookings over time</h2>
            <div className="space-y-4">
              {bookingsData.map((data) => (
                <div key={data.month} className="flex items-center gap-4">
                  <div className="w-12 text-sm text-zinc-600">{data.month}</div>
                  <div className="flex-1">
                    <div className="relative h-6 bg-zinc-200 rounded-full overflow-hidden">
                      <div
                        className="absolute inset-y-0 left-0 bg-emerald-600 rounded-full transition-all"
                        style={{ width: `${(data.bookings / maxBookings) * 100}%` }}
                      />
                    </div>
                  </div>
                  <div className="w-16 text-right text-sm font-medium text-zinc-900">
                    {data.bookings}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-xl border border-zinc-200 bg-white p-6">
            <h2 className="text-lg font-semibold text-zinc-900 mb-4">Revenue over time</h2>
            <div className="space-y-4">
              {bookingsData.map((data) => (
                <div key={data.month} className="flex items-center gap-4">
                  <div className="w-12 text-sm text-zinc-600">{data.month}</div>
                  <div className="flex-1">
                    <div className="relative h-6 bg-zinc-200 rounded-full overflow-hidden">
                      <div
                        className="absolute inset-y-0 left-0 bg-blue-600 rounded-full transition-all"
                        style={{ width: `${(data.revenue / maxRevenue) * 100}%` }}
                      />
                    </div>
                  </div>
                  <div className="w-16 text-right text-sm font-medium text-zinc-900">
                    ${(data.revenue / 1000).toFixed(1)}k
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-xl border border-zinc-200 bg-white p-6">
            <h2 className="text-lg font-semibold text-zinc-900 mb-4">Destination popularity</h2>
            <div className="space-y-4">
              {destinationsData.map((dest) => (
                <div key={dest.name} className="flex items-center gap-4">
                  <div className="w-24 text-sm text-zinc-900 font-medium">{dest.name}</div>
                  <div className="flex-1">
                    <div className="relative h-6 bg-zinc-200 rounded-full overflow-hidden">
                      <div
                        className="absolute inset-y-0 left-0 bg-purple-600 rounded-full transition-all"
                        style={{ width: `${dest.percentage}%` }}
                      />
                    </div>
                  </div>
                  <div className="w-16 text-right text-sm font-medium text-zinc-900">
                    {dest.bookings}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-xl border border-zinc-200 bg-white p-6">
            <h2 className="text-lg font-semibold text-zinc-900 mb-4">Top performers</h2>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-zinc-600">Most booked destination</span>
                <span className="text-sm font-medium text-zinc-900">Paris (124 bookings)</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-zinc-600">Highest revenue month</span>
                <span className="text-sm font-medium text-zinc-900">May ($87,600)</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-zinc-600">Best conversion rate</span>
                <span className="text-sm font-medium text-zinc-900">Bali (4.1%)</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-zinc-600">Avg trip duration</span>
                <span className="text-sm font-medium text-zinc-900">5.8 days</span>
              </div>
            </div>
          </section>
        </div>

        <div className="mt-8 flex justify-end">
          <button className="rounded-lg border border-zinc-300 bg-white px-4 py-2 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-50">
            Export Report
          </button>
        </div>
      </div>
    </div>
  );
}

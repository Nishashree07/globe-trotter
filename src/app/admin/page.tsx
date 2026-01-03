"use client";

import { useMemo, useState } from "react";

interface User {
  id: string;
  name: string;
  email: string;
  createdAt: string;
  status: "active" | "suspended";
}

interface Trip {
  id: string;
  name: string;
  userId: string;
  createdAt: string;
}

export default function AdminPage() {
  const [users] = useState<User[]>([
    { id: "1", name: "Monika", email: "monika@example.com", createdAt: "2025-01-02", status: "active" },
    { id: "2", name: "Alex", email: "alex@example.com", createdAt: "2025-01-03", status: "active" },
  ]);
  const [trips] = useState<Trip[]>([
    { id: "1", name: "Tokyo & Kyoto Adventure", userId: "1", createdAt: "2025-01-05" },
    { id: "2", name: "Bali Beach Week", userId: "1", createdAt: "2025-01-06" },
    { id: "3", name: "Paris City Break", userId: "2", createdAt: "2025-01-07" },
  ]);
  const [loading] = useState(false);

  const stats = useMemo(() => {
    const totalUsers = users.length;
    const activeUsers = users.filter((u: User) => u.status === "active").length;
    const totalTrips = trips.length;
    const now = new Date();
    const weekAgo = now.getTime() - 7 * 24 * 60 * 60 * 1000;
    const recentTrips = trips.filter((t: Trip) => new Date(t.createdAt).getTime() > weekAgo).length;
    return { totalUsers, activeUsers, totalTrips, recentTrips };
  }, [users, trips]);

  const topCities = useMemo(() => {
    const counts = new Map<string, number>();
    trips.forEach((_t) => {
      // Mock: assume each trip has 2 cities
      counts.set("Tokyo", (counts.get("Tokyo") || 0) + 1);
      counts.set("Barcelona", (counts.get("Barcelona") || 0) + 1);
      counts.set("Bali", (counts.get("Bali") || 0) + 1);
    });
    return Array.from(counts.entries()).sort((a, b) => b[1] - a[1]);
  }, [trips]);

  if (loading) {
    return (
      <div className="min-h-screen bg-zinc-50 flex items-center justify-center">
        <p className="text-sm text-zinc-600">Loading admin dashboard...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-50 via-white to-zinc-50">
      <div className="min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-100/20 via-transparent to-transparent">
        <div className="px-4 py-10">
          <div className="mx-auto w-full max-w-6xl">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-zinc-900">Admin Dashboard</h1>
              <p className="mt-2 text-base text-zinc-600">Platform analytics and user management.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              <div className="rounded-xl border border-zinc-200 bg-white p-5">
                <p className="text-xs text-zinc-600 mb-1">Total users</p>
                <p className="text-2xl font-bold text-zinc-900">{stats.totalUsers}</p>
              </div>
              <div className="rounded-xl border border-zinc-200 bg-white p-5">
                <p className="text-xs text-zinc-600 mb-1">Active users</p>
                <p className="text-2xl font-bold text-zinc-900">{stats.activeUsers}</p>
              </div>
              <div className="rounded-xl border border-zinc-200 bg-white p-5">
                <p className="text-xs text-zinc-600 mb-1">Total trips</p>
                <p className="text-2xl font-bold text-zinc-900">{stats.totalTrips}</p>
              </div>
              <div className="rounded-xl border border-zinc-200 bg-white p-5">
                <p className="text-xs text-zinc-600 mb-1">Trips this week</p>
                <p className="text-2xl font-bold text-zinc-900">{stats.recentTrips}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <section>
                <h2 className="text-lg font-semibold text-zinc-900 mb-4">Top Cities</h2>
                <div className="rounded-xl border border-zinc-200 bg-white p-5">
                  <ul className="space-y-2">
                    {topCities.map(([city, count]) => (
                      <li key={city} className="flex items-center justify-between text-sm">
                        <span className="text-zinc-700">{city}</span>
                        <span className="font-medium text-zinc-900">{count} trips</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-zinc-900 mb-4">User Management</h2>
                <div className="rounded-xl border border-zinc-200 bg-white overflow-hidden">
                  <table className="w-full text-sm">
                    <thead className="bg-zinc-50">
                      <tr>
                        <th className="text-left px-4 py-2 font-medium text-zinc-900">Name</th>
                        <th className="text-left px-4 py-2 font-medium text-zinc-900">Email</th>
                        <th className="text-left px-4 py-2 font-medium text-zinc-900">Joined</th>
                        <th className="text-left px-4 py-2 font-medium text-zinc-900">Status</th>
                        <th className="text-left px-4 py-2 font-medium text-zinc-900">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {users.map((user: User) => (
                        <tr key={user.id} className="border-t border-zinc-100">
                          <td className="px-4 py-2 text-zinc-900">{user.name}</td>
                          <td className="px-4 py-2 text-zinc-600">{user.email}</td>
                          <td className="px-4 py-2 text-zinc-600">{user.createdAt}</td>
                          <td className="px-4 py-2">
                            <span
                              className={`rounded-full px-2 py-0.5 text-xs font-medium ${
                                user.status === "active"
                                  ? "bg-emerald-100 text-emerald-800"
                                  : "bg-zinc-100 text-zinc-600"
                              }`}
                            >
                              {user.status}
                            </span>
                          </td>
                          <td className="px-4 py-2">
                            <button
                              className="text-xs text-red-600 hover:text-red-800"
                              onClick={() => alert("Suspend/Reactivate not implemented")}
                            >
                              {user.status === "active" ? "Suspend" : "Reactivate"}
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

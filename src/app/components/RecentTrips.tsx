import Link from "next/link";

export default function RecentTrips() {
  const trips = [
    {
      id: "1",
      name: "Tokyo & Kyoto Adventure",
      dateRange: "Apr 12–Apr 22, 2025",
      destinationCount: 2,
      status: "upcoming",
    },
    {
      id: "2",
      name: "Bali Beach Week",
      dateRange: "Jun 3–Jun 10, 2025",
      destinationCount: 1,
      status: "upcoming",
    },
    {
      id: "3",
      name: "Paris City Break",
      dateRange: "Dec 1–Dec 5, 2024",
      destinationCount: 1,
      status: "past",
    },
  ];

  return (
    <section>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-zinc-900">Recent trips</h2>
        <Link
          href="/trips"
          className="text-sm text-zinc-600 hover:text-zinc-900 transition-colors"
        >
          View all
        </Link>
      </div>
      <ul className="space-y-3">
        {trips.map((trip) => (
          <li key={trip.id}>
            <Link
              href={`/trips/${trip.id}`}
              className="group block rounded-xl border border-zinc-200 bg-white p-5 transition-all hover:border-zinc-300 hover:shadow-md"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="text-base font-semibold text-zinc-900 group-hover:text-zinc-700 transition-colors">
                    {trip.name}
                  </h3>
                  <p className="mt-1 text-sm text-zinc-600">{trip.dateRange}</p>
                  <div className="mt-2 flex items-center gap-4 text-xs text-zinc-500">
                    <span className="flex items-center gap-1">
                      <span className="inline-block w-1 h-1 bg-zinc-400 rounded-full" />
                      {trip.destinationCount} destination
                      {trip.destinationCount > 1 ? "s" : ""}
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="inline-block w-1 h-1 bg-zinc-400 rounded-full" />
                      {trip.status === "upcoming" ? "Upcoming" : "Completed"}
                    </span>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-2">
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-medium ${
                      trip.status === "upcoming"
                        ? "bg-emerald-100 text-emerald-800"
                        : "bg-zinc-100 text-zinc-600"
                    }`}
                  >
                    {trip.status}
                  </span>
                  <span className="text-zinc-400 group-hover:text-zinc-600 transition-colors">
                    →
                  </span>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

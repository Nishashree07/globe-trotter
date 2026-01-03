export default function RecommendedDestinations() {
  const destinations = [
    { city: "Barcelona", country: "Spain", costIndex: "Medium", popularity: 92 },
    { city: "Lisbon", country: "Portugal", costIndex: "Low", popularity: 88 },
    { city: "Seoul", country: "South Korea", costIndex: "Medium", popularity: 85 },
    { city: "Cape Town", country: "South Africa", costIndex: "Low", popularity: 81 },
    { city: "Dubai", country: "UAE", costIndex: "High", popularity: 79 },
  ];

  const costColor = (cost: string) => {
    switch (cost) {
      case "Low":
        return "bg-emerald-100 text-emerald-800";
      case "Medium":
        return "bg-amber-100 text-amber-800";
      case "High":
        return "bg-rose-100 text-rose-800";
      default:
        return "bg-zinc-100 text-zinc-800";
    }
  };

  return (
    <section>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-zinc-900">Recommended destinations</h2>
        <a
          href="#"
          className="text-sm text-zinc-600 hover:text-zinc-900 transition-colors"
        >
          Explore more
        </a>
      </div>
      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {destinations.map((dest) => (
          <li
            key={`${dest.city}-${dest.country}`}
            className="group rounded-xl border border-zinc-200 bg-white p-5 transition-all hover:border-zinc-300 hover:shadow-md"
          >
            <div className="flex items-start justify-between mb-3">
              <div>
                <h3 className="text-base font-semibold text-zinc-900 group-hover:text-zinc-700 transition-colors">
                  {dest.city}
                </h3>
                <p className="text-sm text-zinc-600">{dest.country}</p>
              </div>
              <span
                className={`rounded-full px-2.5 py-1 text-xs font-medium ${costColor(
                  dest.costIndex,
                )}`}
              >
                {dest.costIndex}
              </span>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="text-zinc-600">Popularity</span>
                <span className="font-medium text-zinc-900">{dest.popularity}%</span>
              </div>
              <div className="bg-zinc-200 rounded-full h-2 overflow-hidden">
                <div
                  className="bg-gradient-to-r from-zinc-600 to-zinc-900 h-2 rounded-full transition-all"
                  style={{ width: `${dest.popularity}%` }}
                />
              </div>
            </div>
            <button className="mt-4 w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-xs font-medium text-zinc-700 transition-colors hover:bg-zinc-50 hover:border-zinc-400">
              Add to trip
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}

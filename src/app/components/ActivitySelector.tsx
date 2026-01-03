import { useMemo, useState } from "react";

interface Activity {
  id: string;
  name: string;
  category: "Sightseeing" | "Food" | "Adventure" | "Culture" | "Relaxation";
  description: string;
  cost: number | null;
  durationMinutes: number | null;
  imageUrl?: string;
}

interface Props {
  city: string;
  selected: Activity[];
  onChange: (activities: Activity[]) => void;
}

const mockActivities: Record<string, Activity[]> = {
  Tokyo: [
    {
      id: "1",
      name: "Senso-ji Temple",
      category: "Sightseeing",
      description: "Historic Buddhist temple in Asakusa district.",
      cost: 0,
      durationMinutes: 90,
    },
    {
      id: "2",
      name: "Tsukiji Outer Market",
      category: "Food",
      description: "Fresh seafood and street food stalls.",
      cost: 30,
      durationMinutes: 120,
    },
    {
      id: "3",
      name: "TeamLab Borderless",
      category: "Culture",
      description: "Immersive digital art museum.",
      cost: 60,
      durationMinutes: 180,
    },
    {
      id: "4",
      name: "Shibuya Crossing",
      category: "Sightseeing",
      description: "Famous scramble crossing.",
      cost: 0,
      durationMinutes: 30,
    },
    {
      id: "5",
      name: "Mount Fuji Day Trip",
      category: "Adventure",
      description: "Guided tour to Japan’s iconic peak.",
      cost: 150,
      durationMinutes: 600,
    },
  ],
  Kyoto: [
    {
      id: "6",
      name: "Fushimi Inari Shrine",
      category: "Sightseeing",
      description: "Thousands of red torii gates.",
      cost: 0,
      durationMinutes: 120,
    },
    {
      id: "7",
      name: "Kaiseki Dinner",
      category: "Food",
      description: "Traditional multi-course Japanese dinner.",
      cost: 120,
      durationMinutes: 150,
    },
    {
      id: "8",
      name: "Bamboo Grove Walk",
      category: "Relaxation",
      description: "Serene walk through towering bamboo.",
      cost: 0,
      durationMinutes: 60,
    },
  ],
  Barcelona: [
    {
      id: "9",
      name: "Sagrada Familia",
      category: "Sightseeing",
      description: "Gaudí’s unfinished masterpiece.",
      cost: 26,
      durationMinutes: 120,
    },
    {
      id: "10",
      name: "Tapas Tour",
      category: "Food",
      description: "Guided tour of local tapas bars.",
      cost: 65,
      durationMinutes: 180,
    },
    {
      id: "11",
      name: "Park Güell",
      category: "Sightseeing",
      description: "Colorful mosaic park by Gaudí.",
      cost: 10,
      durationMinutes: 90,
    },
  ],
};

export default function ActivitySelector({ city, selected, onChange }: Props) {
  const [query, setQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState<string>("");
  const [costFilter, setCostFilter] = useState<string>("");
  const [preview, setPreview] = useState<Activity | null>(null);

  const activities = useMemo(() => {
    const list = mockActivities[city] || [];
    return list.filter((a) => {
      const matchesQuery = a.name.toLowerCase().includes(query.toLowerCase());
      const matchesCategory = !categoryFilter || a.category === categoryFilter;
      const matchesCost =
        !costFilter ||
        (costFilter === "Free" && a.cost === 0) ||
        (costFilter === "Paid" && a.cost !== null && a.cost > 0);
      return matchesQuery && matchesCategory && matchesCost;
    });
  }, [city, query, categoryFilter, costFilter]);

  const isSelected = (a: Activity) => selected.some((s) => s.id === a.id);

  function toggle(a: Activity) {
    if (isSelected(a)) {
      onChange(selected.filter((s) => s.id !== a.id));
    } else {
      onChange([...selected, a]);
    }
  }

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row gap-3">
        <input
          className="flex-1 rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-900 outline-none transition-colors focus:ring-2 focus:ring-zinc-900/10"
          placeholder="Search activities..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <select
          className="rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-900 outline-none transition-colors focus:ring-2 focus:ring-zinc-900/10"
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
        >
          <option value="">All categories</option>
          <option value="Sightseeing">Sightseeing</option>
          <option value="Food">Food</option>
          <option value="Adventure">Adventure</option>
          <option value="Culture">Culture</option>
          <option value="Relaxation">Relaxation</option>
        </select>
        <select
          className="rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-900 outline-none transition-colors focus:ring-2 focus:ring-zinc-900/10"
          value={costFilter}
          onChange={(e) => setCostFilter(e.target.value)}
        >
          <option value="">All costs</option>
          <option value="Free">Free</option>
          <option value="Paid">Paid</option>
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {activities.map((act) => (
          <div
            key={act.id}
            className={`rounded-xl border bg-white overflow-hidden transition-all cursor-pointer ${
              isSelected(act)
                ? "border-zinc-900 ring-2 ring-zinc-900/10"
                : "border-zinc-200 hover:border-zinc-300"
            }`}
            onClick={() => setPreview(act)}
          >
            {act.imageUrl ? (
              <img src={act.imageUrl} alt={act.name} className="w-full h-32 object-cover" />
            ) : (
              <div className="h-32 bg-gradient-to-br from-zinc-100 to-zinc-200" />
            )}
            <div className="p-4">
              <div className="flex items-start justify-between mb-2">
                <h4 className="text-sm font-semibold text-zinc-900">{act.name}</h4>
                <span
                  className={`rounded-full px-2 py-0.5 text-xs font-medium ${
                    act.category === "Sightseeing"
                      ? "bg-blue-100 text-blue-800"
                      : act.category === "Food"
                      ? "bg-orange-100 text-orange-800"
                      : act.category === "Adventure"
                      ? "bg-green-100 text-green-800"
                      : act.category === "Culture"
                      ? "bg-purple-100 text-purple-800"
                      : "bg-pink-100 text-pink-800"
                  }`}
                >
                  {act.category}
                </span>
              </div>
              <p className="text-xs text-zinc-600 mb-2 line-clamp-2">{act.description}</p>
              <div className="flex items-center justify-between text-xs">
                <span className="font-medium text-zinc-900">
                  {act.cost === null ? "Free" : `$${act.cost}`}
                </span>
                <span className="text-zinc-500">
                  {act.durationMinutes ? `${act.durationMinutes} min` : ""}
                </span>
              </div>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  toggle(act);
                }}
                className={`mt-3 w-full rounded-lg px-3 py-2 text-xs font-medium transition-colors ${
                  isSelected(act)
                    ? "bg-zinc-900 text-white"
                    : "border border-zinc-300 bg-white text-zinc-700 hover:bg-zinc-50"
                }`}
              >
                {isSelected(act) ? "Remove" : "Add to itinerary"}
              </button>
            </div>
          </div>
        ))}
      </div>

      {preview && (
        <div className="fixed inset-0 bg-zinc-900/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl p-6 max-w-md w-full">
            <h3 className="text-lg font-semibold text-zinc-900 mb-2">{preview.name}</h3>
            <span
              className={`inline-block rounded-full px-2 py-0.5 text-xs font-medium mb-3 ${
                preview.category === "Sightseeing"
                  ? "bg-blue-100 text-blue-800"
                  : preview.category === "Food"
                  ? "bg-orange-100 text-orange-800"
                  : preview.category === "Adventure"
                  ? "bg-green-100 text-green-800"
                  : preview.category === "Culture"
                  ? "bg-purple-100 text-purple-800"
                  : "bg-pink-100 text-pink-800"
              }`}
            >
              {preview.category}
            </span>
            <p className="text-sm text-zinc-700 mb-4">{preview.description}</p>
            <div className="flex items-center justify-between text-sm mb-4">
              <span className="font-medium text-zinc-900">
                {preview.cost === null ? "Free" : `$${preview.cost}`}
              </span>
              <span className="text-zinc-500">
                {preview.durationMinutes ? `${preview.durationMinutes} min` : ""}
              </span>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setPreview(null)}
                className="flex-1 rounded-lg border border-zinc-300 bg-white px-4 py-2 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-50"
              >
                Close
              </button>
              <button
                onClick={() => {
                  toggle(preview);
                  setPreview(null);
                }}
                className={`flex-1 rounded-lg px-4 py-2 text-sm font-semibold transition-colors ${
                  isSelected(preview)
                    ? "bg-zinc-900 text-white"
                    : "border border-zinc-300 bg-white text-zinc-700 hover:bg-zinc-50"
                }`}
              >
                {isSelected(preview) ? "Remove" : "Add"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

import { useMemo, useState } from "react";

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

interface Props {
  stops: Stop[];
}

type ViewMode = "calendar" | "timeline";

export default function ItineraryVisualization({ stops }: Props) {
  const [viewMode, setViewMode] = useState<ViewMode>("timeline");

  const days = useMemo(() => {
    const map = new Map<string, { date: string; stops: Stop[]; activities: Activity[] }>();
    stops.forEach((stop) => {
      const start = new Date(stop.startDate);
      const end = new Date(stop.endDate);
      for (let d = new Date(start); d <= end; d.setDate(d.getDate() + 1)) {
        const key = d.toISOString().split("T")[0];
        if (!map.has(key)) map.set(key, { date: key, stops: [], activities: [] });
        const entry = map.get(key)!;
        entry.stops.push(stop);
        entry.activities.push(...stop.activities.filter((a) => a.date === key));
      }
    });
    return Array.from(map.values()).sort((a, b) => a.date.localeCompare(b.date));
  }, [stops]);

  const categoryColor = (cat: string) => {
    switch (cat) {
      case "Sightseeing": return "bg-blue-100 text-blue-800";
      case "Food": return "bg-orange-100 text-orange-800";
      case "Adventure": return "bg-green-100 text-green-800";
      case "Culture": return "bg-purple-100 text-purple-800";
      case "Relaxation": return "bg-pink-100 text-pink-800";
      default: return "bg-zinc-100 text-zinc-800";
    }
  };

  if (viewMode === "calendar") {
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-zinc-900">Calendar View</h2>
          <div className="rounded-lg border border-zinc-300 bg-white p-1 flex">
            <button
              onClick={() => setViewMode("calendar")}
              className="px-3 py-1 text-xs font-medium rounded bg-zinc-900 text-white"
            >
              Calendar
            </button>
            <button
              onClick={() => setViewMode("timeline")}
              className="px-3 py-1 text-xs font-medium rounded text-zinc-600 hover:bg-zinc-100"
            >
              Timeline
            </button>
          </div>
        </div>

        <div className="grid grid-cols-7 gap-2 text-xs text-center text-zinc-600 mb-2">
          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => (
            <div key={d}>{d}</div>
          ))}
        </div>

        <div className="grid grid-cols-7 gap-2">
          {(() => {
            const first = new Date(days[0]?.date || new Date());
            const startPad = first.getDay();
            const blanks = Array(startPad).fill(null);
            const cells = [
              ...blanks,
              ...days.map((day) => {
                const date = new Date(day.date);
                const isToday = date.toDateString() === new Date().toDateString();
                return { ...day, dateNum: date.getDate(), isToday };
              }),
            ];
            return cells.map((cell, i) =>
              cell ? (
                <div
                  key={i}
                  className={`border border-zinc-200 rounded-lg p-2 min-h-[100px] ${
                    cell.isToday ? "bg-zinc-50 ring-2 ring-zinc-900/20" : "bg-white"
                  }`}
                >
                  <div className="text-xs font-medium text-zinc-900 mb-1">{cell.dateNum}</div>
                  <div className="space-y-1">
                    {cell.stops.map((stop: Stop) => (
                      <div key={stop.id} className="text-xs font-medium text-zinc-700 truncate">
                        {stop.city}
                      </div>
                    ))}
                    {cell.activities.slice(0, 2).map((act: Activity) => (
                      <div key={act.id} className="text-xs text-zinc-600 truncate">
                        {act.time && `${act.time} `}
                        {act.name}
                      </div>
                    ))}
                    {cell.activities.length > 2 && (
                      <div className="text-xs text-zinc-500">+{cell.activities.length - 2} more</div>
                    )}
                  </div>
                </div>
              ) : (
                <div key={i} />
              )
            );
          })()}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-zinc-900">Timeline View</h2>
        <div className="rounded-lg border border-zinc-300 bg-white p-1 flex">
          <button
            onClick={() => setViewMode("calendar")}
            className="px-3 py-1 text-xs font-medium rounded text-zinc-600 hover:bg-zinc-100"
          >
            Calendar
          </button>
          <button
            onClick={() => setViewMode("timeline")}
            className="px-3 py-1 text-xs font-medium rounded bg-zinc-900 text-white"
          >
            Timeline
          </button>
        </div>
      </div>

      <div className="space-y-6">
        {days.map((day) => (
          <div key={day.date} className="rounded-xl border border-zinc-200 bg-white p-5">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-base font-semibold text-zinc-900">
                  {new Date(day.date).toLocaleDateString("en-US", { weekday: "long", month: "short", day: "numeric" })}
                </h3>
                <p className="text-xs text-zinc-600">
                  {day.stops.map((s) => s.city).join(", ")}
                </p>
              </div>
              <div className="text-right">
                <p className="text-xs text-zinc-600">Activities</p>
                <p className="text-sm font-medium text-zinc-900">{day.activities.length}</p>
              </div>
            </div>

            {day.activities.length === 0 ? (
              <p className="text-sm text-zinc-500 italic">No activities scheduled</p>
            ) : (
              <ul className="space-y-3">
                {day.activities
                  .sort((a, b) => (a.time || "").localeCompare(b.time || ""))
                  .map((act) => (
                    <li key={act.id} className="flex items-start justify-between text-sm">
                      <div className="flex-1">
                        {act.time && <span className="font-medium text-zinc-900 mr-2">{act.time}</span>}
                        <span className="font-medium text-zinc-900">{act.name}</span>
                        <span className={`ml-2 rounded-full px-2 py-0.5 text-xs font-medium ${categoryColor(act.category)}`}>
                          {act.category}
                        </span>
                      </div>
                      {act.cost != null && (
                        <span className="text-zinc-700 font-medium">${act.cost}</span>
                      )}
                    </li>
                  ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

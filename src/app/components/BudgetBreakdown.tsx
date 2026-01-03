import { useMemo } from "react";

interface Activity {
  cost: number | null;
  category: string;
  date?: string;
}

interface Stop {
  activities: Activity[];
}

interface Props {
  stops: Stop[];
  totalBudget?: number;
}

export default function BudgetBreakdown({ stops, totalBudget = 1500 }: Props) {
  const breakdown = useMemo(() => {
    const byCategory = new Map<string, number>();
    let spent = 0;
    stops.forEach((stop) => {
      stop.activities.forEach((act) => {
        const cost = act.cost ?? 0;
        spent += cost;
        const cat = act.category || "Other";
        byCategory.set(cat, (byCategory.get(cat) || 0) + cost);
      });
    });
    return {
      spent,
      remaining: totalBudget - spent,
      byCategory: Array.from(byCategory.entries()).map(([category, amount]) => ({ category, amount })),
    };
  }, [stops, totalBudget]);

  const spentPercent = totalBudget > 0 ? Math.round((breakdown.spent / totalBudget) * 100) : 0;
  const overBudget = breakdown.spent > totalBudget;

  const categoryColors: Record<string, string> = {
    Sightseeing: "bg-blue-500",
    Food: "bg-orange-500",
    Adventure: "bg-green-500",
    Culture: "bg-purple-500",
    Relaxation: "bg-pink-500",
    Other: "bg-zinc-500",
  };

  return (
    <div className="space-y-6">
      <div className="rounded-xl border border-zinc-200 bg-white p-5">
        <h3 className="text-lg font-semibold text-zinc-900 mb-4">Budget Overview</h3>
        <div className="grid grid-cols-3 gap-4 mb-4">
          <div>
            <p className="text-xs text-zinc-600">Total budget</p>
            <p className="text-xl font-bold text-zinc-900">${totalBudget}</p>
          </div>
          <div>
            <p className="text-xs text-zinc-600">Spent so far</p>
            <p className={`text-xl font-bold ${overBudget ? "text-red-600" : "text-zinc-900"}`}>
              ${breakdown.spent}
            </p>
          </div>
          <div>
            <p className="text-xs text-zinc-600">Remaining</p>
            <p className={`text-xl font-bold ${overBudget ? "text-red-600" : "text-zinc-900"}`}>
              ${breakdown.remaining}
            </p>
          </div>
        </div>

        <div className="mb-4">
          <div className="flex items-center justify-between text-xs mb-1">
            <span className="text-zinc-600">Used</span>
            <span className={`font-medium ${overBudget ? "text-red-600" : "text-zinc-900"}`}>
              {spentPercent}%
            </span>
          </div>
          <div className="bg-zinc-200 rounded-full h-3 overflow-hidden">
            <div
              className={`h-3 rounded-full transition-all ${
                overBudget ? "bg-red-500" : "bg-gradient-to-r from-emerald-500 to-emerald-600"
              }`}
              style={{ width: `${Math.min(spentPercent, 100)}%` }}
            />
          </div>
        </div>

        {overBudget && (
          <div className="rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-xs text-red-700">
            ⚠️ Over budget by ${breakdown.spent - totalBudget}
          </div>
        )}
      </div>

      <div className="rounded-xl border border-zinc-200 bg-white p-5">
        <h3 className="text-lg font-semibold text-zinc-900 mb-4">Breakdown by Category</h3>

        {/* Pie chart representation */}
        <div className="mb-6 flex justify-center">
          <div className="relative w-40 h-40">
            <svg viewBox="0 0 42 42" className="w-full h-full -rotate-90">
              {breakdown.byCategory.map(({ category, amount }, i) => {
                const percent = breakdown.spent > 0 ? (amount / breakdown.spent) * 100 : 0;
                const prev = breakdown.byCategory.slice(0, i).reduce((sum, { amount }) => sum + amount, 0);
                const prevPercent = breakdown.spent > 0 ? (prev / breakdown.spent) * 100 : 0;
                const strokeDasharray = `${percent} 100`;
                const strokeDashoffset = -prevPercent;
                return (
                  <circle
                    key={category}
                    cx="21"
                    cy="21"
                    r="15.91549430918954"
                    fill="transparent"
                    stroke={categoryColors[category] || categoryColors.Other}
                    strokeWidth="3"
                    strokeDasharray={strokeDasharray}
                    strokeDashoffset={strokeDashoffset}
                  />
                );
              })}
            </svg>
          </div>
        </div>

        {/* Legend */}
        <div className="space-y-2">
          {breakdown.byCategory.map(({ category, amount }) => (
            <div key={category} className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-2">
                <div className={`w-3 h-3 rounded-full ${categoryColors[category] || categoryColors.Other}`} />
                <span className="text-zinc-700">{category}</span>
              </div>
              <span className="font-medium text-zinc-900">${amount}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Simple bar chart */}
      <div className="rounded-xl border border-zinc-200 bg-white p-5">
        <h3 className="text-lg font-semibold text-zinc-900 mb-4">Spending by Day</h3>
        <div className="space-y-2">
          {(() => {
            const daily = new Map<string, number>();
            stops.forEach((stop) => {
              stop.activities.forEach((act) => {
                const date = act.date || "Unscheduled";
                daily.set(date, (daily.get(date) || 0) + (act.cost ?? 0));
              });
            });
            return Array.from(daily.entries())
              .sort((a, b) => a[0].localeCompare(b[0]))
              .map(([date, amount]) => {
                const percent = totalBudget > 0 ? (amount / totalBudget) * 100 : 0;
                return (
                  <div key={date} className="flex items-center gap-3">
                    <div className="w-24 text-xs text-zinc-600 truncate">{date}</div>
                    <div className="flex-1 bg-zinc-200 rounded-full h-2 overflow-hidden">
                      <div
                        className={`h-2 rounded-full transition-all ${
                          amount > 0 ? "bg-emerald-500" : ""
                        }`}
                        style={{ width: `${Math.min(percent * 10, 100)}%` }}
                      />
                    </div>
                    <span className="text-xs font-medium text-zinc-900 w-12 text-right">${amount}</span>
                  </div>
                );
              });
          })()}
        </div>
      </div>
    </div>
  );
}

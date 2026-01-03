export default function BudgetHighlights() {
  const highlights = {
    totalBudget: 4200,
    spentSoFar: 1280,
    upcomingCosts: 2920,
    averagePerDay: 140,
    topCategory: "Activities",
  };

  const spentPercent = Math.round(
    (highlights.spentSoFar / highlights.totalBudget) * 100,
  );

  return (
    <section>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-zinc-900">Budget highlights</h2>
        <a
          href="#"
          className="text-sm text-zinc-600 hover:text-zinc-900 transition-colors"
        >
          View details
        </a>
      </div>
      <div className="rounded-xl border border-zinc-200 bg-white p-6">
        <div className="grid grid-cols-2 gap-6 mb-6">
          <div className="text-center">
            <div className="flex items-center justify-center w-10 h-10 mx-auto mb-2 rounded-full bg-emerald-100">
              <span className="text-emerald-700 font-bold text-lg">$</span>
            </div>
            <p className="text-xs text-zinc-600 mb-1">Total budget</p>
            <p className="text-xl font-bold text-zinc-900">
              ${highlights.totalBudget.toLocaleString()}
            </p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center w-10 h-10 mx-auto mb-2 rounded-full bg-amber-100">
              <span className="text-amber-700 font-bold text-lg">%</span>
            </div>
            <p className="text-xs text-zinc-600 mb-1">Spent so far</p>
            <p className="text-xl font-bold text-zinc-900">
              ${highlights.spentSoFar.toLocaleString()}
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <div className="flex items-center justify-between text-sm mb-2">
              <span className="text-zinc-600">Budget used</span>
              <span className="font-semibold text-zinc-900">{spentPercent}%</span>
            </div>
            <div className="bg-zinc-200 rounded-full h-3 overflow-hidden">
              <div
                className="bg-gradient-to-r from-emerald-500 to-emerald-600 h-3 rounded-full transition-all"
                style={{ width: `${spentPercent}%` }}
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 pt-2 border-t border-zinc-100">
            <div>
              <p className="text-xs text-zinc-600">Upcoming costs</p>
              <p className="text-sm font-semibold text-zinc-900">
                ${highlights.upcomingCosts.toLocaleString()}
              </p>
            </div>
            <div>
              <p className="text-xs text-zinc-600">Avg per day</p>
              <p className="text-sm font-semibold text-zinc-900">
                ${highlights.averagePerDay}
              </p>
            </div>
          </div>

          <div className="pt-2 border-t border-zinc-100">
            <p className="text-xs text-zinc-600">
              Top category:{" "}
              <span className="font-semibold text-zinc-900">{highlights.topCategory}</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

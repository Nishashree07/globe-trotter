import Link from "next/link";

export default function PlanNewTripButton() {
  return (
    <Link
      href="/trips/new"
      className="group relative inline-flex items-center justify-center w-full rounded-xl bg-zinc-900 px-6 py-4 text-base font-semibold text-white transition-all hover:bg-zinc-800 hover:shadow-lg"
    >
      <span className="absolute left-4 flex items-center justify-center w-5 h-5 rounded-full bg-white/20">
        <span className="block w-2 h-2 bg-white rounded-sm" />
      </span>
      <span className="ml-2">Plan New Trip</span>
      <span className="ml-2 text-zinc-300 group-hover:text-white transition-colors">
        →
      </span>
    </Link>
  );
}

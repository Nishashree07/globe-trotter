import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

const mockDestinations = {
  "1": {
    id: "1",
    name: "Paris",
    country: "France",
    image: "https://images.unsplash.com/photo-1502602893406-5e88db641a7d?w=1200&h=800&fit=crop",
    price: 899,
    rating: 4.8,
    trips: 124,
    description: "Experience the City of Light with iconic landmarks, world-class cuisine, and romantic ambiance.",
    highlights: ["Eiffel Tower", "Louvre Museum", "Seine River Cruise", "Montmartre"],
    includes: ["Hotel (4★)", "Daily Breakfast", "Airport Transfer", "City Tour"],
  },
  "2": {
    id: "2",
    name: "Bali",
    country: "Indonesia",
    image: "https://images.unsplash.com/photo-1537956150983-4db2c5a4a6d9?w=1200&h=800&fit=crop",
    price: 599,
    rating: 4.9,
    trips: 98,
    description: "Tropical paradise with stunning beaches, ancient temples, and vibrant culture.",
    highlights: ["Ubud Rice Terraces", "Tanah Lot Temple", "Seminyak Beach", "Traditional Dance"],
    includes: ["Resort (5★)", "Daily Breakfast", "Spa Access", "Airport Transfer"],
  },
  "3": {
    id: "3",
    name: "Tokyo",
    country: "Japan",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e9962cd9?w=1200&h=800&fit=crop",
    price: 1299,
    rating: 4.7,
    trips: 156,
    description: "Futuristic metropolis blending ancient traditions with cutting-edge technology.",
    highlights: ["Senso-ji Temple", "Shibuya Crossing", "Mount Fuji", "Cherry Blossoms"],
    includes: ["Hotel (4★)", "JR Pass", "Guided Tours", "Travel Insurance"],
  },
};

export default function DestinationPage({ params }: { params: { id: string } }) {
  const dest = mockDestinations[params.id as keyof typeof mockDestinations];
  if (!dest) notFound();

  return (
    <div className="min-h-screen bg-white">
      <nav className="sticky top-0 z-50 bg-white border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold text-zinc-900">
              GlobeTrotter
            </Link>
            <div className="flex items-center gap-6 text-sm">
              <Link href="/destinations" className="text-zinc-600 hover:text-zinc-900">Destinations</Link>
              <Link href="/trips" className="text-zinc-600 hover:text-zinc-900">Trips</Link>
              <Link href="/hotels" className="text-zinc-600 hover:text-zinc-900">Hotels</Link>
              <Link href="/flights" className="text-zinc-600 hover:text-zinc-900">Flights</Link>
              <Link href="/profile" className="text-zinc-600 hover:text-zinc-900">Profile</Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="relative h-96">
        <Image
          src={dest.image}
          alt={dest.name}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
          <h1 className="text-4xl font-bold mb-2">{dest.name}</h1>
          <p className="text-lg mb-4">{dest.country}</p>
          <div className="flex items-center gap-4 text-sm">
            <span className="text-yellow-500">★</span>
            <span className="font-semibold">{dest.rating}</span>
            <span className="text-zinc-300">({dest.trips} reviews)</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-zinc-900 mb-4">About this destination</h2>
              <p className="text-lg text-zinc-600 mb-6">{dest.description}</p>
              <h3 className="text-lg font-semibold text-zinc-900 mb-3">Highlights</h3>
              <ul className="grid grid-cols-2 gap-2 text-zinc-700">
                {dest.highlights.map((h, i) => (
                  <li key={i}>• {h}</li>
                ))}
              </ul>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-zinc-900 mb-4">What&apos;s included</h3>
              <ul className="space-y-2 text-zinc-700">
                {dest.includes.map((inc, i) => (
                  <li key={i}>✓ {inc}</li>
                ))}
              </ul>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-zinc-900 mb-4">Trip options</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="rounded-lg border border-zinc-200 p-4">
                  <h4 className="font-semibold text-zinc-900 mb-2">Basic</h4>
                  <p className="text-2xl font-bold text-emerald-600 mb-1">{dest.price}</p>
                  <p className="text-sm text-zinc-600">per person</p>
                  <button className="w-full rounded-lg bg-emerald-600 text-white px-4 py-2 text-sm font-semibold transition-colors hover:bg-emerald-700">
                    Book Now
                  </button>
                </div>
                <div className="rounded-lg border border-zinc-200 p-4">
                  <h4 className="font-semibold text-zinc-900 mb-2">Premium</h4>
                  <p className="text-2xl font-bold text-emerald-600 mb-1">${Math.round(dest.price * 1.5)}</p>
                  <p className="text-sm text-zinc-600">per person</p>
                  <button className="w-full rounded-lg bg-emerald-600 text-white px-4 py-2 text-sm font-semibold transition-colors hover:bg-emerald-700">
                    Book Now
                  </button>
                </div>
              </div>
            </section>
          </div>

          <div className="space-y-8">
            <section className="rounded-xl border border-zinc-200 bg-white p-6">
              <h3 className="text-lg font-semibold text-zinc-900 mb-4">Quick facts</h3>
              <dl className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <dt className="text-zinc-600">Best time to visit</dt>
                  <dd className="text-zinc-900">Apr - Oct</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-zinc-600">Average temperature</dt>
                  <dd className="text-zinc-900">22°C</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-zinc-600">Time zone</dt>
                  <dd className="text-zinc-900">GMT+1</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-zinc-600">Currency</dt>
                  <dd className="text-zinc-900">EUR</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-zinc-600">Language</dt>
                  <dd className="text-zinc-900">French</dd>
                </div>
              </dl>
            </section>

            <section className="rounded-xl border border-zinc-200 bg-white p-6">
              <h3 className="text-lg font-semibold text-zinc-900 mb-4">Travel tips</h3>
              <ul className="space-y-2 text-sm text-zinc-700">
                <li>• Book accommodations 2-3 months in advance for better rates</li>
                <li>• Purchase city museum passes online to skip lines</li>
                <li>• Try local restaurants away from tourist areas</li>
                <li>• Download offline maps before traveling</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

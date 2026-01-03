import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

const mockBookings = {
  "1": {
    id: "1",
    title: "Romantic Getaway to Paris",
    destination: "Paris, France",
    image: "https://images.unsplash.com/photo-1502602893406-5e88db641a7d?w=1200&h=800&fit=crop",
    price: 1299,
    rating: 4.8,
    duration: 5,
    dates: "Apr 12–Apr 17",
    operator: "TravelWorld",
    description: "Experience the romance of Paris with guided tours, fine dining, and iconic landmarks.",
    itinerary: [
      "Day 1: Arrival & Eiffel Tower",
      "Day 2: Louvre Museum & Seine Cruise",
      "Day 3: Versailles Day Trip",
      "Day 4: Montmartre & Sacré-Cœur",
      "Day 5: Departure",
    ],
    includes: ["Hotel (4★)", "Daily Breakfast", "Airport Transfer", "City Tour", "Travel Insurance"],
    gallery: [
      "https://images.unsplash.com/photo-1549144511-4ba99c6e5c9c?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1502602893406-5e88db641a7d?w=600&h=400&fit=crop",
    ],
  },
};

export default function BookingDetailPage({ params }: { params: { id: string } }) {
  const booking = mockBookings[params.id as keyof typeof mockBookings];
  if (!booking) notFound();

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
              <Link href="/bookings" className="text-emerald-600 hover:text-emerald-700">Bookings</Link>
              <Link href="/hotels" className="text-zinc-600 hover:text-zinc-900">Hotels</Link>
              <Link href="/flights" className="text-zinc-600 hover:text-zinc-900">Flights</Link>
              <Link href="/profile" className="text-zinc-600 hover:text-zinc-900">Profile</Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="relative h-96">
        <Image
          src={booking.image}
          alt={booking.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
          <h1 className="text-4xl font-bold mb-2">{booking.title}</h1>
          <p className="text-lg mb-4">{booking.destination}</p>
          <div className="flex items-center gap-4 text-sm">
            <span className="text-yellow-500">★</span>
            <span className="font-semibold">{booking.rating}</span>
            <span className="text-zinc-300">• {booking.dates}</span>
            <span className="text-zinc-300">• {booking.duration} days</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-zinc-900 mb-4">About this trip</h2>
              <p className="text-lg text-zinc-600 mb-6">{booking.description}</p>
              <h3 className="text-lg font-semibold text-zinc-900 mb-3">Itinerary</h3>
              <ul className="space-y-2 text-zinc-700">
                {booking.itinerary.map((item, i) => (
                  <li key={i}>• {item}</li>
                ))}
              </ul>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-zinc-900 mb-4">What&apos;s included</h3>
              <ul className="space-y-2 text-zinc-700">
                {booking.includes.map((inc, i) => (
                  <li key={i}>✓ {inc}</li>
                ))}
              </ul>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-zinc-900 mb-4">Gallery</h3>
              <div className="grid grid-cols-3 gap-2">
                {booking.gallery.map((src, i) => (
                  <div key={i} className="aspect-[4/3] rounded-lg overflow-hidden">
                    <Image
                      src={src}
                      alt={`Gallery ${i + 1}`}
                      width={400}
                      height={300}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </section>
          </div>

          <div className="space-y-8">
            <section className="rounded-xl border border-zinc-200 bg-white p-6">
              <h3 className="text-lg font-semibold text-zinc-900 mb-4">Booking details</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <dt className="text-zinc-600">Price per person</dt>
                  <dd className="text-2xl font-bold text-emerald-600">${booking.price}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-zinc-600">Duration</dt>
                  <dd className="text-zinc-900">{booking.duration} days</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-zinc-600">Dates</dt>
                  <dd className="text-zinc-900">{booking.dates}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-zinc-600">Operator</dt>
                  <dd className="text-zinc-900">{booking.operator}</dd>
                </div>
              </div>
            </section>

            <section className="rounded-xl border border-zinc-200 bg-white p-6">
              <h3 className="text-lg font-semibold text-zinc-900 mb-4">Guest details</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-zinc-700 mb-1">First name</label>
                  <input
                    type="text"
                    className="w-full rounded-lg border border-zinc-300 px-3 py-2 text-sm text-zinc-900"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-zinc-700 mb-1">Last name</label>
                  <input
                    type="text"
                    className="w-full rounded-lg border border-zinc-300 px-3 py-2 text-sm text-zinc-900"
                    placeholder="Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-zinc-700 mb-1">Email</label>
                  <input
                    type="email"
                    className="w-full rounded-lg border border-zinc-300 px-3 py-2 text-sm text-zinc-900"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-zinc-700 mb-1">Phone</label>
                  <input
                    type="tel"
                    className="w-full rounded-lg border border-zinc-300 px-3 py-2 text-sm text-zinc-900"
                    placeholder="+1 234 567 890"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-zinc-700 mb-1">Number of travelers</label>
                  <input
                    type="number"
                    min={1}
                    defaultValue={1}
                    className="w-full rounded-lg border border-zinc-300 px-3 py-2 text-sm text-zinc-900"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-zinc-700 mb-1">Special requests</label>
                  <textarea
                    rows={3}
                    className="w-full rounded-lg border border-zinc-300 px-3 py-2 text-sm text-zinc-900"
                    placeholder="Any dietary restrictions, accessibility needs, etc."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-lg bg-emerald-600 px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-emerald-700"
                >
                  Proceed to Payment
                </button>
              </form>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

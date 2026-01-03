import Image from "next/image";
import Link from "next/link";

export default function DestinationGrid() {
  const destinations = [
    {
      id: 1,
      name: "Paris",
      country: "France",
      image: "https://images.unsplash.com/photo-1502602893406-5e88db641a7d?w=400&h=300&fit=crop",
      price: "$899",
      rating: 4.8,
      trips: 124,
    },
    {
      id: 2,
      name: "Bali",
      country: "Indonesia",
      image: "https://images.unsplash.com/photo-1537956150983-4db2c5a4a6d9?w=400&h=300&fit=crop",
      price: "$599",
      rating: 4.9,
      trips: 98,
    },
    {
      id: 3,
      name: "Tokyo",
      country: "Japan",
      image: "https://images.unsplash.com/photo-1493976040374-85c8e9962cd9?w=400&h=300&fit=crop",
      price: "$1299",
      rating: 4.7,
      trips: 156,
    },
    {
      id: 4,
      name: "New York",
      country: "USA",
      image: "https://images.unsplash.com/photo-1496442226666-8104f0aef5c4?w=400&h=300&fit=crop",
      price: "$1199",
      rating: 4.6,
      trips: 210,
    },
    {
      id: 5,
      name: "Barcelona",
      country: "Spain",
      image: "https://images.unsplash.com/photo-15834185592383-9b07aea8b2a6?w=400&h=300&fit=crop",
      price: "$799",
      rating: 4.8,
      trips: 87,
    },
    {
      id: 6,
      name: "Dubai",
      country: "UAE",
      image: "https://images.unsplash.com/photo-1512459970291-97a04000f6ea?w=400&h=300&fit=crop",
      price: "$999",
      rating: 4.9,
      trips: 112,
    },
  ];

  return (
    <section className="py-16 bg-zinc-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-zinc-900 mb-4">Popular Destinations</h2>
          <p className="text-lg text-zinc-600">Explore our most sought-after travel experiences</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((dest) => (
            <div key={dest.id} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-xl bg-white shadow-sm transition-all hover:shadow-lg">
                <div className="aspect-[4/3] overflow-hidden">
                  <Image
                    src={dest.image}
                    alt={dest.name}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="text-xl font-semibold text-zinc-900">{dest.name}</h3>
                      <p className="text-sm text-zinc-600">{dest.country}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-emerald-600">{dest.price}</p>
                      <p className="text-xs text-zinc-500">per person</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-zinc-600 mb-4">
                    <div className="flex items-center">
                      <span className="text-yellow-500">★</span>
                      <span>{dest.rating}</span>
                    </div>
                    <span>{dest.trips} trips</span>
                  </div>
                  <Link
                    href={`/destinations/${dest.id}`}
                    onClick={() => alert(`Exploring ${dest.name}, ${dest.country}`)}
                    className="block w-full rounded-lg border border-zinc-300 bg-white px-4 py-2 text-center text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-50"
                  >
                    Explore
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

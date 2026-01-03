"use client";

import GlobeTrotterLogo from "../components/GlobeTrotterLogo";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function BookingsPage() {
  const [search, setSearch] = useState("");
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 5000]);
  const [duration, setDuration] = useState<[number, number]>([1, 14]);
  const [rating, setRating] = useState(0);

  const mockBookings = [
    {
      id: "paris",
      title: "Romantic Getaway to Paris",
      destination: "Paris, France",
      image: "https://images.unsplash.com/photo-1502602893406-5e88db641a7d?w=800&h=500&fit=crop",
      price: 1299,
      rating: 4.8,
      duration: 5,
      dates: "Apr 12–Apr 17",
      operator: "TravelWorld",
      highlights: ["Eiffel Tower", "Louvre Museum", "Seine River"],
      badge: "🔥 Trending",
      badgeColor: "from-red-500 to-orange-500"
    },
    {
      id: "bali",
      title: "Bali Beach Retreat",
      destination: "Bali, Indonesia",
      image: "https://images.unsplash.com/photo-1537956150983-4db2c5a4a6d9?w=800&h=500&fit=crop",
      price: 899,
      rating: 4.9,
      duration: 7,
      dates: "Jun 3–Jun 10",
      operator: "Island Vibes",
      highlights: ["Beach Resorts", "Ancient Temples", "Rice Terraces"],
      badge: "💸 Budget",
      badgeColor: "from-green-500 to-emerald-500"
    },
    {
      id: "tokyo",
      title: "Tokyo Adventure",
      destination: "Tokyo, Japan",
      image: "https://images.unsplash.com/photo-1493976040374-85c8e9962cd9?w=800&h=500&fit=crop",
      price: 1599,
      rating: 4.7,
      duration: 6,
      dates: "Oct 1–Oct 7",
      operator: "Asia Explorer",
      highlights: ["Mount Fuji", "Cherry Blossoms", "Tech Districts"],
      badge: "🌸 New",
      badgeColor: "from-pink-500 to-rose-500"
    },
    {
      id: "nyc",
      title: "NYC City Break",
      destination: "New York, USA",
      image: "https://images.unsplash.com/photo-1496442226666-8104f0aef5c4?w=800&h=500&fit=crop",
      price: 1199,
      rating: 4.6,
      duration: 4,
      dates: "Dec 1–Dec 5",
      operator: "City Lights",
      highlights: ["Times Square", "Central Park", "Broadway"],
      badge: "🏙️ Popular",
      badgeColor: "from-purple-500 to-indigo-500"
    },
    {
      id: "barcelona",
      title: "Barcelona Escape",
      destination: "Barcelona, Spain",
      image: "https://images.unsplash.com/photo-15834185592383-9b07aea8b2a6?w=800&h=500&fit=crop",
      price: 999,
      rating: 4.8,
      duration: 5,
      dates: "Sep 10–Sep 15",
      operator: "Mediterranean Magic",
      highlights: ["Sagrada Familia", "Beach Clubs", "Tapas Tours"],
      badge: "🏖️ Relax",
      badgeColor: "from-blue-500 to-cyan-500"
    },
    {
      id: "dubai",
      title: "Dubai Luxury",
      destination: "Dubai, UAE",
      image: "https://images.unsplash.com/photo-1512459970291-97a04000f6ea?w=800&h=500&fit=crop",
      price: 1899,
      rating: 4.9,
      duration: 5,
      dates: "Nov 20–Nov 25",
      operator: "Desert Oasis",
      highlights: ["Burj Khalifa", "Desert Safari", "Luxury Shopping"],
      badge: "💎 Luxury",
      badgeColor: "from-amber-500 to-orange-500"
    },
  ];

  const filtered = mockBookings.filter((b) => {
    const matchesSearch = b.title.toLowerCase().includes(search.toLowerCase()) ||
      b.destination.toLowerCase().includes(search.toLowerCase());
    const matchesPrice = b.price >= priceRange[0] && b.price <= priceRange[1];
    const matchesDuration = b.duration >= duration[0] && b.duration <= duration[1];
    const matchesRating = rating === 0 || b.rating >= rating;
    return matchesSearch && matchesPrice && matchesDuration && matchesRating;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-700">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-pink-400 rounded-full opacity-30 blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-yellow-400 rounded-full opacity-30 blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-400 rounded-full opacity-20 blur-3xl animate-pulse"></div>
        <div className="absolute top-20 right-20 w-60 h-60 bg-orange-400 rounded-full opacity-25 blur-2xl animate-bounce"></div>
        <div className="absolute bottom-20 left-20 w-60 h-60 bg-green-400 rounded-full opacity-25 blur-2xl animate-bounce"></div>
      </div>
      <nav className="sticky top-0 z-50 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 backdrop-blur-lg border-b border-purple-300/50 shadow-2xl shadow-purple-500/20">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <GlobeTrotterLogo />
            </Link>
            <div className="flex items-center gap-8 text-sm font-medium">
              <Link href="/" className="relative text-white/90 hover:text-white transition-colors duration-200 px-4 py-2 rounded-xl hover:bg-white/20 hover:scale-105">
                Home
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200" />
              </Link>
              <Link href="/destinations" className="relative text-white/90 hover:text-white transition-colors duration-200 px-4 py-2 rounded-xl hover:bg-white/20 hover:scale-105">
                Destinations
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200" />
              </Link>
              <Link href="/bookings" className="relative text-white font-semibold transition-colors duration-200 px-4 py-2 rounded-xl bg-white/20 hover:bg-white/30 hover:scale-105">
                Browse
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200" />
              </Link>
              <Link href="/hotels" className="relative text-white/90 hover:text-white transition-colors duration-200 px-4 py-2 rounded-xl hover:bg-white/20 hover:scale-105">
                Hotels
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200" />
              </Link>
              <Link href="/flights" className="relative text-white/90 hover:text-white transition-colors duration-200 px-4 py-2 rounded-xl hover:bg-white/20 hover:scale-105">
                Flights
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200" />
              </Link>
              <Link href="/profile" className="relative text-white/90 hover:text-white transition-colors duration-200 px-4 py-2 rounded-xl hover:bg-white/20 hover:scale-105">
                Profile
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200" />
              </Link>
              <Link href="/login-simple" className="relative text-white/90 hover:text-white transition-colors duration-200 px-4 py-2 rounded-xl hover:bg-white/20 hover:scale-105">
                Login
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200" />
              </Link>
              <Link href="/signup-simple" className="relative bg-white text-purple-600 px-4 py-2 rounded-xl font-semibold hover:bg-purple-50 hover:scale-105 transition-all duration-200">
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Enhanced Hero Section */}
        <div className="relative rounded-3xl overflow-hidden mb-12 shadow-2xl">
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1600&h=600&fit=crop"
              alt="Travel hero"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-purple-900/95 via-pink-800/90 to-indigo-900/95"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
          </div>
          <div className="relative z-10 px-8 py-20 text-center text-white">
            <div className="max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-white/25 to-white/15 backdrop-blur-md rounded-full px-8 py-4 mb-10 border border-white/40 shadow-xl">
                <span className="text-4xl animate-bounce">🌍</span>
                <span className="text-xl font-bold tracking-wide">Discover Your Next Adventure</span>
              </div>
              <h1 className="text-6xl md:text-7xl font-black mb-8 leading-tight tracking-tight">
                Browse Our Curated
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300">Travel Experiences</span>
              </h1>
              <p className="text-2xl text-purple-50 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
                Explore handpicked destinations with exclusive deals and unforgettable memories waiting to be made
              </p>
              <div className="flex flex-wrap justify-center gap-8 mb-12">
                <div className="bg-gradient-to-r from-white/25 to-white/15 backdrop-blur-md rounded-3xl px-10 py-6 border border-white/40 shadow-xl transform hover:scale-105 transition-all duration-300">
                  <div className="text-4xl mb-3 animate-pulse">🌍</div>
                  <p className="text-3xl font-bold">500+</p>
                  <p className="text-purple-100 font-medium">Destinations</p>
                </div>
                <div className="bg-gradient-to-r from-white/25 to-white/15 backdrop-blur-md rounded-3xl px-10 py-6 border border-white/40 shadow-xl transform hover:scale-105 transition-all duration-300">
                  <div className="text-4xl mb-3 animate-pulse">🏨</div>
                  <p className="text-3xl font-bold">50+</p>
                  <p className="text-purple-100 font-medium">Countries</p>
                </div>
                <div className="bg-gradient-to-r from-white/25 to-white/15 backdrop-blur-md rounded-3xl px-10 py-6 border border-white/40 shadow-xl transform hover:scale-105 transition-all duration-300">
                  <div className="text-4xl mb-3 animate-pulse">⭐</div>
                  <p className="text-3xl font-bold">4.8★</p>
                  <p className="text-purple-100 font-medium">Average Rating</p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-4 px-8 rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300 text-lg">
                  Explore Destinations
                </button>
                <button className="bg-white/20 backdrop-blur-md hover:bg-white/30 text-white font-bold py-4 px-8 rounded-2xl border-2 border-white/40 shadow-xl transform hover:scale-105 transition-all duration-300 text-lg">
                  View Special Offers
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Search Section */}
        <div className="bg-gradient-to-r from-white/90 via-purple-50/50 to-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 mb-12 border border-purple-200/50 shadow-purple-500/20">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-3 flex items-center justify-center gap-3">
              <span className="text-4xl">🔍</span>
              Find Your Perfect Trip
            </h2>
            <p className="text-white/80 text-lg">Search through our curated collection of amazing destinations</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8">
            <div className="lg:col-span-2">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                <input
                  className="w-full rounded-2xl border-2 border-purple-200/50 bg-white/90 backdrop-blur-sm px-6 py-5 text-purple-900 placeholder-purple-400 focus:ring-4 focus:ring-purple-500/20 focus:border-purple-500 text-lg shadow-lg shadow-purple-500/20 transition-all duration-300"
                  placeholder="🔍 Search destinations, trips, or activities..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
                <div className="absolute right-5 top-1/2 -translate-y-1/2 text-purple-500 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
            </div>
            <select
              className="rounded-2xl border-2 border-purple-200/50 bg-white/90 backdrop-blur-sm px-6 py-5 text-purple-900 focus:ring-4 focus:ring-purple-500/20 focus:border-purple-500 text-lg shadow-lg shadow-purple-500/20 transition-all duration-300 hover:border-purple-400"
              value={`${priceRange[0]}-${priceRange[1]}`}
              onChange={(e) => {
                const [min, max] = e.target.value.split("-").map(Number);
                setPriceRange([min, max]);
              }}
            >
              <option value="0-500">💰 Under $500</option>
              <option value="500-1500">💵 $500–$1500</option>
              <option value="1500-3000">💸 $1500–$3000</option>
              <option value="3000-5000">💴 $3000–$5000</option>
              <option value="5000-10000">💎 $5000+</option>
            </select>
            <select
              className="rounded-2xl border-2 border-purple-200/50 bg-white/90 backdrop-blur-sm px-6 py-5 text-purple-900 focus:ring-4 focus:ring-purple-500/20 focus:border-purple-500 text-lg shadow-lg shadow-purple-500/20 transition-all duration-300 hover:border-purple-400"
              value={`${duration[0]}-${duration[1]} days`}
              onChange={(e) => {
                const [min, max] = e.target.value.split("-").map(Number);
                setDuration([min, max]);
              }}
            >
              <option value="1-3">⏱️ 1–3 days</option>
              <option value="4-7">📅 4–7 days</option>
              <option value="8-14">📆 8–14 days</option>
              <option value="15+">🗓️ 15+ days</option>
            </select>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <select
                className="rounded-2xl border-2 border-emerald-200 px-6 py-4 text-gray-900 focus:ring-4 focus:ring-emerald-500/20 focus:border-emerald-500 text-lg shadow-lg transition-all duration-300 hover:border-emerald-400"
                value={rating || "any"}
                onChange={(e) => setRating(Number(e.target.value))}
              >
                <option value="0">⭐ Any Rating</option>
                <option value="3">⭐⭐⭐ 3+ Stars</option>
                <option value="4">⭐⭐⭐⭐ 4+ Stars</option>
                <option value="5">⭐⭐⭐⭐⭐ 5 Stars</option>
              </select>
              <div className="bg-gradient-to-r from-emerald-100 to-teal-100 rounded-2xl px-6 py-4 border border-emerald-300">
                <span className="text-lg font-bold text-emerald-800">
                  <span className="text-2xl">{filtered.length}</span> trips found
                </span>
              </div>
            </div>
            <button className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-bold py-4 px-8 rounded-2xl shadow-xl transform hover:scale-105 transition-all duration-300 text-lg">
              Apply Filters
            </button>
          </div>
        </div>

        {/* Popular Categories with Real Images */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 flex items-center gap-2">
            <span>🎯</span>
            Popular Categories
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <Link href="#" className="relative rounded-2xl overflow-hidden group cursor-pointer transform hover:scale-105 transition-all duration-300">
              <Image
                src="https://images.unsplash.com/photo-1464822759833-65f6b9a9376c?w=600&h=400&fit=crop"
                alt="Mountain Adventures"
                width={600}
                height={400}
                className="w-full h-40 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-4 text-white">
                  <div className="text-2xl mb-1">🏔️</div>
                  <p className="font-bold text-lg">Mountain Adventures</p>
                  <p className="text-sm opacity-90">120+ Trips</p>
                </div>
              </div>
            </Link>
            <Link href="#" className="relative rounded-2xl overflow-hidden group cursor-pointer transform hover:scale-105 transition-all duration-300">
              <Image
                src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&h=400&fit=crop"
                alt="Beach Escapes"
                width={600}
                height={400}
                className="w-full h-40 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-4 text-white">
                  <div className="text-2xl mb-1">🏖️</div>
                  <p className="font-bold text-lg">Beach Escapes</p>
                  <p className="text-sm opacity-90">85+ Trips</p>
                </div>
              </div>
            </Link>
            <Link href="#" className="relative rounded-2xl overflow-hidden group cursor-pointer transform hover:scale-105 transition-all duration-300">
              <Image
                src="https://images.unsplash.com/photo-1480714378408-67cf0d13bc1f?w=600&h=400&fit=crop"
                alt="City Tours"
                width={600}
                height={400}
                className="w-full h-40 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-4 text-white">
                  <div className="text-2xl mb-1">🏙️</div>
                  <p className="font-bold text-lg">City Tours</p>
                  <p className="text-sm opacity-90">200+ Trips</p>
                </div>
              </div>
            </Link>
            <Link href="#" className="relative rounded-2xl overflow-hidden group cursor-pointer transform hover:scale-105 transition-all duration-300">
              <Image
                src="https://images.unsplash.com/photo-1549149985-0b4d3c5e5c9?w=600&h=400&fit=crop"
                alt="Cultural Experiences"
                width={600}
                height={400}
                className="w-full h-40 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-4 text-white">
                  <div className="text-2xl mb-1">🎭</div>
                  <p className="font-bold text-lg">Cultural Experiences</p>
                  <p className="text-sm opacity-90">95+ Trips</p>
                </div>
              </div>
            </Link>
          </div>
        </div>

        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-gray-800 flex items-center gap-2">
            <span>✈️</span>
            Available Trips
          </h2>
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600">
              <span className="font-bold text-emerald-600">{filtered.length}</span> trips found
            </span>
          </div>
        </div>

        {/* Enhanced Booking Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((booking) => (
            <div key={booking.id} className="group rounded-2xl overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              {/* Badge */}
              <div className="absolute top-4 left-4 z-10">
                <div className={`bg-gradient-to-r ${booking.badgeColor} text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg animate-pulse`}>
                  {booking.badge}
                </div>
              </div>
              
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={booking.image}
                  alt={booking.title}
                  width={800}
                  height={500}
                  className="w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                
                {/* Price Badge on Image */}
                <div className="absolute bottom-4 right-4">
                  <div className="bg-emerald-600 text-white px-4 py-2 rounded-xl shadow-lg">
                    <p className="text-2xl font-bold">${booking.price}</p>
                    <p className="text-xs">per person</p>
                  </div>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{booking.title}</h3>
                    <div className="flex items-center gap-2 mb-3">
                      <svg className="w-5 h-5 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                      <p className="text-gray-700 font-medium">{booking.destination}</p>
                    </div>
                  </div>
                </div>
                
                {/* Highlights */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {booking.highlights.slice(0, 3).map((highlight, index) => (
                    <span
                      key={index}
                      className="bg-emerald-50 text-emerald-700 px-2 py-1 rounded-full text-xs font-medium"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
                
                {/* Trip Details */}
                <div className="grid grid-cols-3 gap-4 mb-4 text-sm">
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-1 mb-1">
                      <span className="text-yellow-500">★</span>
                      <span className="font-bold text-gray-800">{booking.rating}</span>
                    </div>
                    <p className="text-gray-600">Rating</p>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-1 mb-1">
                      <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span className="font-bold text-gray-800">{booking.duration}</span>
                    </div>
                    <p className="text-gray-600">Days</p>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-1 mb-1">
                      <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="font-bold text-gray-800 text-xs">{booking.dates.split('–')[0].slice(0, -3)}</span>
                    </div>
                    <p className="text-gray-600">Start</p>
                  </div>
                </div>
                
                {/* Operator and Features */}
                <div className="flex items-center justify-between text-xs text-gray-500 mb-6">
                  <div className="flex items-center gap-1">
                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    <span>{booking.operator}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <svg className="w-4 h-4 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-emerald-600 font-medium">Free Cancellation</span>
                  </div>
                </div>
                
                {/* Action Buttons */}
                <div className="flex gap-3">
                  <Link 
                    href={`/bookings/${booking.id}`}
                    className="flex-1 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white px-4 py-3 rounded-xl font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-center"
                  >
                    View Details
                  </Link>
                  <button 
                    onClick={() => {
                      // Navigate to booking page with pre-filled data
                      window.location.href = `/bookings/${booking.id}?quick=true`;
                    }}
                    className="bg-gradient-to-r from-rose-500 to-pink-500 text-white px-4 py-3 rounded-xl font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-12">
            <p className="text-zinc-600">No trips found matching your filters.</p>
          </div>
        )}
      </div>
    </div>
  );
}

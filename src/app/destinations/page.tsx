"use client";

import GlobeTrotterLogo from "../components/GlobeTrotterLogo";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function DestinationsPage() {
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("all");

  const destinations = [
    {
      id: 1,
      name: "Paris",
      country: "France",
      region: "Europe",
      image: "https://images.unsplash.com/photo-1502602893406-5e88db641a7d?w=600&h=400&fit=crop&auto=format",
      description: "City of lights, romance, and incredible cuisine",
      price: "$899",
      rating: 4.8,
      trips: 124,
    },
    {
      id: 2,
      name: "Bali",
      country: "Indonesia",
      region: "Asia",
      image: "https://images.unsplash.com/photo-1537956150983-4db2c5a4a6d9?w=600&h=400&fit=crop&auto=format",
      description: "Tropical paradise with stunning beaches and temples",
      price: "$599",
      rating: 4.9,
      trips: 98,
    },
    {
      id: 3,
      name: "Tokyo",
      country: "Japan",
      region: "Asia",
      image: "https://images.unsplash.com/photo-1493976040374-85c8e9962cd9?w=600&h=400&fit=crop&auto=format",
      description: "Modern metropolis blending tradition and innovation",
      price: "$1299",
      rating: 4.7,
      trips: 156,
    },
    {
      id: 4,
      name: "New York",
      country: "USA",
      region: "North America",
      image: "https://images.unsplash.com/photo-1496442226666-8104f0aef5c4?w=600&h=400&fit=crop&auto=format",
      description: "The city that never sleeps with endless attractions",
      price: "$1199",
      rating: 4.6,
      trips: 210,
    },
    {
      id: 5,
      name: "Barcelona",
      country: "Spain",
      region: "Europe",
      image: "https://images.unsplash.com/photo-15834185592383-9b07aea8b2a6?w=600&h=400&fit=crop&auto=format",
      description: "Vibrant city with art, architecture, and beaches",
      price: "$799",
      rating: 4.8,
      trips: 87,
    },
    {
      id: 6,
      name: "Dubai",
      country: "UAE",
      region: "Middle East",
      image: "https://images.unsplash.com/photo-1512459974797-539a54e6c95b?w=600&h=400&fit=crop&auto=format",
      description: "Luxury shopping, stunning architecture, and desert adventures",
      price: "$999",
      rating: 4.9,
      trips: 112,
    },
  ];

  const filtered = destinations.filter((dest) => {
    const matchesSearch = dest.name.toLowerCase().includes(search.toLowerCase()) ||
      dest.country.toLowerCase().includes(search.toLowerCase());
    const matchesRegion = region === "all" || dest.region === region;
    return matchesSearch && matchesRegion;
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
              <Link href="/destinations" className="relative text-white font-semibold transition-colors duration-200 px-4 py-2 rounded-xl bg-white/20 hover:bg-white/30 hover:scale-105">
                Destinations
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200" />
              </Link>
              <Link href="/bookings" className="relative text-white/90 hover:text-white transition-colors duration-200 px-4 py-2 rounded-xl hover:bg-white/20 hover:scale-105">
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
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">Explore Destinations</h1>
          <p className="text-xl text-white/90">Discover amazing places around the world</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 mb-8">
          <div className="flex-1">
            <input
              className="w-full rounded-lg border border-purple-200/50 bg-white/90 backdrop-blur-sm px-4 py-3 text-sm text-purple-900 placeholder-purple-400 focus:ring-2 focus:ring-purple-500/50 shadow-lg shadow-purple-500/20"
              placeholder="Search destinations..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className="flex gap-2">
            <select
              className="rounded-lg border border-purple-200/50 bg-white/90 backdrop-blur-sm px-4 py-3 text-sm text-purple-900 focus:ring-2 focus:ring-purple-500/50 shadow-lg shadow-purple-500/20"
              value={region}
              onChange={(e) => setRegion(e.target.value)}
            >
              <option value="all">All Regions</option>
              <option value="Europe">Europe</option>
              <option value="Asia">Asia</option>
              <option value="North America">North America</option>
              <option value="Middle East">Middle East</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((dest) => (
            <div key={dest.id} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-xl bg-white/90 backdrop-blur-sm shadow-lg shadow-purple-500/20 transition-all hover:shadow-xl hover:shadow-purple-500/30 border border-purple-200/50">
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
                      <h3 className="text-xl font-semibold text-purple-900">{dest.name}</h3>
                      <p className="text-sm text-purple-600">{dest.country}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-purple-600">{dest.price}</p>
                      <p className="text-xs text-purple-400">from</p>
                    </div>
                  </div>
                  <p className="text-sm text-purple-600 mb-4">{dest.description}</p>
                  <div className="flex items-center gap-4 text-sm text-purple-600 mb-4">
                    <div className="flex items-center">
                      <span className="text-yellow-500">★</span>
                      <span>{dest.rating}</span>
                    </div>
                    <span>{dest.trips} trips</span>
                  </div>
                  <Link
                    href={`/bookings`}
                    className="block w-full rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 px-4 py-2 text-center text-sm font-semibold text-white transition-all duration-200 hover:from-purple-700 hover:to-pink-700 shadow-lg shadow-purple-500/25"
                  >
                    View Trips
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-12">
            <p className="text-white/80">No destinations found matching your search.</p>
          </div>
        )}
      </div>
    </div>
  );
}

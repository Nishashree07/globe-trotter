"use client";

import GlobeTrotterLogo from "../components/GlobeTrotterLogo";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function HotelsPage() {
  const [search, setSearch] = useState("");
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 500]);
  const [rating, setRating] = useState(0);
  const [amenities, setAmenities] = useState<string[]>([]);

  const mockHotels = [
    {
      id: "1",
      name: "Le Marais Boutique",
      location: "Paris, France",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=400&fit=crop",
      price: 189,
      rating: 4.8,
      reviews: 312,
      amenities: ["WiFi", "Breakfast", "Gym", "Spa"],
      description: "Charming boutique hotel in the heart of Le Marais district.",
    },
    {
      id: "2",
      name: "Seaside Resort Bali",
      location: "Bali, Indonesia",
      image: "https://images.unsplash.com/photo-1571003123894-1f05e423a2bb?w=600&h=400&fit=crop",
      price: 129,
      rating: 4.9,
      reviews: 256,
      amenities: ["WiFi", "Pool", "Beach Access", "Restaurant"],
      description: "Luxury beachfront resort with stunning ocean views.",
    },
    {
      id: "3",
      name: "Tokyo Skyline Hotel",
      location: "Tokyo, Japan",
      image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5a0?w=600&h=400&fit=crop",
      price: 219,
      rating: 4.7,
      reviews: 189,
      amenities: ["WiFi", "Breakfast", "Bar", "City View"],
      description: "Modern hotel with panoramic city skyline views.",
    },
    {
      id: "4",
      name: "Manhattan Central",
      location: "New York, USA",
      image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=600&h=400&fit=crop",
      price: 299,
      rating: 4.6,
      reviews: 423,
      amenities: ["WiFi", "Gym", "Business Center", "Restaurant"],
      description: "Prime location in the heart of Manhattan.",
    },
    {
      id: "5",
      name: "Barcelona Gothic",
      location: "Barcelona, Spain",
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&h=400&fit=crop",
      price: 159,
      rating: 4.8,
      reviews: 167,
      amenities: ["WiFi", "Breakfast", "Rooftop", "Historic"],
      description: "Historic hotel in Barcelona's Gothic Quarter.",
    },
    {
      id: "6",
      name: "Dubai Luxury Suites",
      location: "Dubai, UAE",
      image: "https://images.unsplash.com/photo-1584132967334-10e028bd69c5?w=600&h=400&fit=crop",
      price: 389,
      rating: 4.9,
      reviews: 298,
      amenities: ["WiFi", "Spa", "Pool", "Butler Service"],
      description: "Ultra-luxury suites with world-class amenities.",
    },
  ];

  const amenityOptions = ["WiFi", "Breakfast", "Gym", "Spa", "Pool", "Restaurant", "Bar", "Beach Access"];

  const filtered = mockHotels.filter((hotel) => {
    const matchesSearch = hotel.name.toLowerCase().includes(search.toLowerCase()) ||
      hotel.location.toLowerCase().includes(search.toLowerCase());
    const matchesPrice = hotel.price >= priceRange[0] && hotel.price <= priceRange[1];
    const matchesRating = rating === 0 || hotel.rating >= rating;
    const matchesAmenities = amenities.length === 0 || amenities.every((a) => hotel.amenities.includes(a));
    return matchesSearch && matchesPrice && matchesRating && matchesAmenities;
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
              <Link href="/bookings" className="relative text-white/90 hover:text-white transition-colors duration-200 px-4 py-2 rounded-xl hover:bg-white/20 hover:scale-105">
                Browse
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200" />
              </Link>
              <Link href="/hotels" className="relative text-white font-semibold transition-colors duration-200 px-4 py-2 rounded-xl bg-white/20 hover:bg-white/30 hover:scale-105">
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
        <div className="mb-8">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">Find Your Perfect Stay</h1>
          <p className="text-lg text-white/90">Discover hotels and resorts in top destinations worldwide</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 mb-8">
          <div className="flex-1">
            <input
              className="w-full rounded-lg border border-purple-200/50 bg-white/90 backdrop-blur-sm px-4 py-3 text-sm text-purple-900 placeholder-purple-400 focus:ring-2 focus:ring-purple-500/50 shadow-lg shadow-purple-500/20"
              placeholder="Search hotels or destinations..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className="flex flex-wrap gap-2">
            <select
              className="rounded-lg border border-purple-200/50 bg-white/90 backdrop-blur-sm px-4 py-3 text-sm text-purple-900 focus:ring-2 focus:ring-purple-500/50 shadow-lg shadow-purple-500/20"
              value={`${priceRange[0]}-${priceRange[1]}`}
              onChange={(e) => {
                const [min, max] = e.target.value.split("-").map(Number);
                setPriceRange([min, max]);
              }}
            >
              <option value="0-100">Under $100</option>
              <option value="100-200">$100–$200</option>
              <option value="200-300">$200–$300</option>
              <option value="300-500">$300–$500</option>
              <option value="500-1000">$500+</option>
            </select>
            <select
              className="rounded-lg border border-purple-200/50 bg-white/90 backdrop-blur-sm px-4 py-3 text-sm text-purple-900 focus:ring-2 focus:ring-purple-500/50 shadow-lg shadow-purple-500/20"
              value={rating || "any"}
              onChange={(e) => setRating(Number(e.target.value))}
            >
              <option value="0">Any rating</option>
              <option value="3">3+ stars</option>
              <option value="4">4+ stars</option>
              <option value="5">5 stars</option>
            </select>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-8">
          {amenityOptions.map((amenity) => (
            <button
              key={amenity}
              onClick={() => {
                setAmenities((prev) =>
                  prev.includes(amenity)
                    ? prev.filter((a) => a !== amenity)
                    : [...prev, amenity]
                );
              }}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ${
                amenities.includes(amenity)
                  ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/25"
                  : "bg-white/90 backdrop-blur-sm border border-purple-200/50 text-purple-700 hover:bg-purple-50 shadow-md shadow-purple-500/20"
              }`}
            >
              {amenity}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((hotel) => (
            <div key={hotel.id} className="group rounded-xl overflow-hidden bg-white/90 backdrop-blur-sm shadow-lg shadow-purple-500/20 transition-all hover:shadow-xl hover:shadow-purple-500/30 border border-purple-200/50">
              <div className="aspect-[4/3] overflow-hidden">
                <Image
                  src={hotel.image}
                  alt={hotel.name}
                  width={600}
                  height={400}
                  className="w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="text-lg font-semibold text-purple-900">{hotel.name}</h3>
                    <p className="text-sm text-purple-600">{hotel.location}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-purple-600">${hotel.price}</p>
                    <p className="text-xs text-purple-400">per night</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-sm text-purple-600 mb-3">
                  <div className="flex items-center">
                    <span className="text-yellow-500">★</span>
                    <span>{hotel.rating}</span>
                  </div>
                  <span>({hotel.reviews} reviews)</span>
                </div>
                <p className="text-sm text-purple-600 mb-4">{hotel.description}</p>
                <div className="flex flex-wrap gap-1 mb-4">
                  {hotel.amenities.slice(0, 3).map((amenity) => (
                    <span key={amenity} className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full border border-purple-200/50">
                      {amenity}
                    </span>
                  ))}
                  {hotel.amenities.length > 3 && (
                    <span className="text-xs text-purple-400">+{hotel.amenities.length - 3} more</span>
                  )}
                </div>
                <button 
                  onClick={() => alert(`Booking ${hotel.name} in ${hotel.location} for $${hotel.price}/night`)}
                  className="w-full rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 px-4 py-2 text-sm font-semibold text-white transition-all duration-200 hover:from-purple-700 hover:to-pink-700 shadow-lg shadow-purple-500/25"
                >
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-12">
            <p className="text-white/80">No hotels found matching your filters.</p>
          </div>
        )}
      </div>
    </div>
  );
}

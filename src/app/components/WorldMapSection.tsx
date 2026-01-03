"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function WorldMapSection() {
  const [selectedCity, setSelectedCity] = useState<string | null>(null);
  const [hoveredCity, setHoveredCity] = useState<string | null>(null);

  const cities = [
    {
      id: "paris",
      name: "Paris",
      country: "France",
      x: "48%",
      y: "25%",
      image: "https://images.unsplash.com/photo-1502602893406-5e88db641a7d?w=400&h=300&fit=crop",
      price: "$899",
      rating: 4.8,
      emoji: "🗼️",
      description: "City of Light and Romance",
      color: "from-pink-500 to-rose-500"
    },
    {
      id: "bali",
      name: "Bali",
      country: "Indonesia",
      x: "75%",
      y: "65%",
      image: "https://images.unsplash.com/photo-1537956150983-4db2c5a4a6d9?w=400&h=300&fit=crop",
      price: "$599",
      rating: 4.9,
      emoji: "🏝️",
      description: "Tropical Paradise Island",
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: "tokyo",
      name: "Tokyo",
      country: "Japan",
      x: "85%",
      y: "30%",
      image: "https://images.unsplash.com/photo-1493976040374-85c8e9962cd9?w=400&h=300&fit=crop",
      price: "$1299",
      rating: 4.7,
      emoji: "🗾",
      description: "Modern Metropolis",
      color: "from-red-500 to-pink-500"
    },
    {
      id: "nyc",
      name: "New York",
      country: "USA",
      x: "25%",
      y: "35%",
      image: "https://images.unsplash.com/photo-1496442226666-8104f0aef5c4?w=400&h=300&fit=crop",
      price: "$1199",
      rating: 4.6,
      emoji: "🗽",
      description: "The City That Never Sleeps",
      color: "from-purple-500 to-indigo-500"
    },
    {
      id: "dubai",
      name: "Dubai",
      country: "UAE",
      x: "60%",
      y: "45%",
      image: "https://images.unsplash.com/photo-1512459970291-97a04000f6ea?w=400&h=300&fit=crop",
      price: "$999",
      rating: 4.9,
      emoji: "🏙️",
      description: "City of Gold",
      color: "from-amber-500 to-orange-500"
    },
    {
      id: "sydney",
      name: "Sydney",
      country: "Australia",
      x: "85%",
      y: "75%",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
      price: "$1099",
      rating: 4.7,
      emoji: "🌉",
      description: "Harbor City Down Under",
      color: "from-teal-500 to-green-500"
    }
  ];

  return (
    <div className="relative w-full min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-200 via-gray-200 to-slate-300"></div>
      </div>

      <div className="relative z-10 px-4 py-16">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 mb-6 shadow-lg border border-white/50">
            <span className="text-3xl">🌍</span>
            <span className="text-2xl font-bold text-gray-800">Explore the World</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight">
            Choose Your Next
            <span className="block text-emerald-600">Adventure</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Click on any city to discover amazing destinations around the globe
          </p>
        </div>

        {/* World Map Container */}
        <div className="relative max-w-6xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200">
          {/* World Map Image */}
          <div className="relative h-[500px] md:h-[600px]">
            <Image
              src="https://images.unsplash.com/photo-1526778548026-f7bad6f5e6a?w=1600&h=800&fit=crop"
              alt="World map"
              fill
              className="object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-emerald-50/30 to-slate-100/50"></div>
            
            {/* City Dots */}
            {cities.map((city) => (
              <div
                key={city.id}
                className="absolute transform -translate-x-1/2 -translate-y-1/2"
                style={{ left: city.x, top: city.y }}
              >
                {/* Pulse Ring */}
                <div className={`absolute inset-0 w-8 h-8 -m-2 rounded-full bg-emerald-400/30 animate-ping`}></div>
                
                {/* City Dot */}
                <Link
                  href={`/bookings/${city.id}`}
                  onMouseEnter={() => setHoveredCity(city.id)}
                  onMouseLeave={() => setHoveredCity(null)}
                  className={`relative w-4 h-4 rounded-full bg-gradient-to-r ${city.color} shadow-lg transform transition-all duration-300 hover:scale-150 z-20 ${
                    city.id === selectedCity ? 'scale-150 ring-4 ring-white ring-opacity-50' : ''
                  }`}
                >
                  <span className="absolute inset-0 flex items-center justify-center text-xs font-bold text-white">
                    {city.emoji}
                  </span>
                </Link>
              </div>
            ))}

            {/* City Tooltip */}
            {hoveredCity && (
              <div 
                className="absolute z-30 transform -translate-x-1/2 pointer-events-none"
                style={{ 
                  left: cities.find(c => c.id === hoveredCity)?.x,
                  top: cities.find(c => c.id === hoveredCity)?.y 
                }}
              >
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
                  <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 p-4 w-64">
                    {/* City Image */}
                    <div className="relative h-32 rounded-xl overflow-hidden mb-3">
                      <Image
                        src={cities.find(c => c.id === hoveredCity)?.image || ''}
                        alt={cities.find(c => c.id === hoveredCity)?.name || ''}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    </div>
                    
                    {/* City Info */}
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-bold text-gray-800">
                          {cities.find(c => c.id === hoveredCity)?.name}
                        </h3>
                        <span className="text-2xl">
                          {cities.find(c => c.id === hoveredCity)?.emoji}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600">
                        {cities.find(c => c.id === hoveredCity)?.country}
                      </p>
                      <p className="text-sm text-gray-700 italic">
                        {cities.find(c => c.id === hoveredCity)?.description}
                      </p>
                      <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                        <div className="flex items-center gap-1">
                          <span className="text-yellow-500">★</span>
                          <span className="text-sm font-medium">
                            {cities.find(c => c.id === hoveredCity)?.rating}
                          </span>
                        </div>
                        <span className="text-lg font-bold text-emerald-600">
                          {cities.find(c => c.id === hoveredCity)?.price}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Tooltip Arrow */}
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 -mt-2">
                    <div className="w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-white"></div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Selected City Details */}
        {selectedCity && (
          <div className="mt-12 max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-200">
              {(() => {
                const city = cities.find(c => c.id === selectedCity);
                if (!city) return null;
                
                return (
                  <>
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-4">
                        <span className="text-4xl">{city.emoji}</span>
                        <div>
                          <h3 className="text-3xl font-bold text-gray-800">{city.name}</h3>
                          <p className="text-lg text-gray-600">{city.country}</p>
                        </div>
                      </div>
                      <button
                        onClick={() => setSelectedCity(null)}
                        className="text-gray-400 hover:text-gray-600 transition-colors"
                      >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="relative h-48 rounded-xl overflow-hidden">
                        <Image
                          src={city.image}
                          alt={city.name}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                      </div>
                      
                      <div className="space-y-4">
                        <div className="bg-gray-50 rounded-xl p-4">
                          <h4 className="font-semibold text-gray-800 mb-2">Quick Facts</h4>
                          <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                              <span className="text-gray-600">Rating:</span>
                              <span className="font-medium flex items-center gap-1">
                                <span className="text-yellow-500">★</span>
                                {city.rating}
                              </span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-600">Starting from:</span>
                              <span className="font-bold text-emerald-600 text-lg">{city.price}</span>
                            </div>
                          </div>
                        </div>
                        
                        <button 
                          onClick={() => alert(`🌍 Exploring ${city.name}, ${city.country}! Starting from ${city.price}`)}
                          className={`w-full bg-gradient-to-r ${city.color} text-white px-6 py-3 rounded-xl font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300`}
                        >
                          Explore {city.name}
                        </button>
                      </div>
                    </div>
                  </>
                );
              })()}
            </div>
          </div>
        )}

        {/* Stats Section */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-8 bg-white/80 backdrop-blur-sm rounded-full px-8 py-4 shadow-lg border border-white/50">
            <div className="text-center">
              <div className="text-3xl mb-1">🌍</div>
              <p className="text-sm font-medium text-gray-800">6 Cities</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-1">🏨</div>
              <p className="text-sm font-medium text-gray-800">4 Continents</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-1">⭐</div>
              <p className="text-sm font-medium text-gray-800">4.7+ Rating</p>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-20 text-emerald-400/10 animate-pulse">
        <span className="text-8xl">✈️</span>
      </div>
      <div className="absolute bottom-20 left-20 text-blue-400/10 animate-pulse">
        <span className="text-8xl">🚢</span>
      </div>
    </div>
  );
}

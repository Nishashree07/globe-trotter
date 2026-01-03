"use client";

import Image from "next/image";
import { useState } from "react";

export default function BaliStorySection() {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const highlights = [
    {
      id: 1,
      emoji: "🏖️",
      title: "Beach Paradise",
      description: "Pristine white sand beaches with crystal-clear turquoise waters",
      icon: "🌊",
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 2,
      emoji: "🏛️",
      title: "Ancient Temples",
      description: "Thousands of years old Hindu temples with stunning architecture",
      icon: "🙏",
      color: "from-orange-500 to-red-500"
    },
    {
      id: 3,
      emoji: "🌴",
      title: "Tropical Vibes",
      description: "Lush rice terraces and volcanic landscapes",
      icon: "🌺",
      color: "from-green-500 to-emerald-500"
    },
    {
      id: 4,
      emoji: "💰",
      title: "Budget Friendly",
      description: "Luxury experience at affordable prices",
      icon: "💵",
      color: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-gradient-to-b from-cyan-50 to-blue-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-200 via-blue-200 to-indigo-200"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 px-4 py-16">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 mb-6 shadow-lg border border-white/50">
            <span className="text-3xl">🏝️</span>
            <span className="text-2xl font-bold text-gray-800">Bali, Indonesia</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight">
            Why Bali is
            <span className="block text-cyan-600">Perfect for You</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover why this tropical paradise has captured the hearts of millions of travelers worldwide
          </p>
        </div>

        {/* Hero Image with Cost Overlay */}
        <div className="relative mb-16 rounded-3xl overflow-hidden shadow-2xl">
          <Image
            src="https://images.unsplash.com/photo-1537956150983-4db2c5a4a6d9?w=1600&h=800&fit=crop"
            alt="Bali paradise"
            width={1600}
            height={800}
            className="w-full h-[400px] md:h-[500px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
          
          {/* Cost Overlay */}
          <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl px-6 py-4 shadow-xl border border-white/50">
              <div className="flex items-center gap-3">
                <span className="text-2xl">💰</span>
                <div>
                  <p className="text-sm text-gray-600">Starting from</p>
                  <p className="text-3xl font-bold text-gray-800">$599</p>
                  <p className="text-sm text-gray-600">per week</p>
                </div>
              </div>
            </div>
            <div className="bg-cyan-500/90 backdrop-blur-sm rounded-2xl px-6 py-4 shadow-xl border border-cyan-400">
              <div className="flex items-center gap-3 text-white">
                <span className="text-2xl">🔥</span>
                <div>
                  <p className="text-sm font-medium">Trending Now</p>
                  <p className="text-lg font-bold">Top Destination</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Highlight Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {highlights.map((highlight) => (
            <div
              key={highlight.id}
              onMouseEnter={() => setActiveCard(highlight.id)}
              onMouseLeave={() => setActiveCard(null)}
              className={`relative group cursor-pointer transform transition-all duration-300 ${
                activeCard === highlight.id ? 'scale-105 -translate-y-2' : 'hover:scale-105'
              }`}
            >
              <div className={`bg-gradient-to-br ${highlight.color} p-8 rounded-2xl shadow-lg text-white h-full min-h-[200px] flex flex-col justify-between border-2 border-transparent group-hover:border-white/30 transition-all`}>
                <div>
                  <div className="text-4xl mb-4">{highlight.emoji}</div>
                  <h3 className="text-xl font-bold mb-2">{highlight.title}</h3>
                  <p className="text-white/90 text-sm leading-relaxed">{highlight.description}</p>
                </div>
                <div className="text-3xl mt-4 opacity-70 group-hover:opacity-100 transition-opacity">
                  {highlight.icon}
                </div>
              </div>
              
              {/* Floating Badge */}
              {activeCard === highlight.id && (
                <div className="absolute -top-3 -right-3 bg-white rounded-full px-3 py-1 shadow-lg border-2 border-cyan-400 animate-bounce">
                  <span className="text-sm font-bold text-cyan-600">Explore!</span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Call to Action Section */}
        <div className="text-center">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl border border-white/50 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">
              Ready for Your
              <span className="block text-cyan-600">Bali Adventure?</span>
            </h3>
            <p className="text-lg text-gray-600 mb-8">
              Join thousands of travelers who've experienced the magic of Bali
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => alert('🏝️ Exploring Bali packages and experiences!')}
                className="group relative overflow-hidden bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-full text-lg font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <span>Explore Bali</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5-5m5 5H6" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </button>
              <button 
                onClick={() => alert('📅 Planning my Bali trip!')}
                className="bg-white text-cyan-600 px-8 py-4 rounded-full text-lg font-bold border-2 border-cyan-600 hover:bg-cyan-50 transform hover:scale-105 transition-all duration-300"
              >
                Plan Trip
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 text-cyan-400/20 animate-pulse">
        <span className="text-6xl">🌴</span>
      </div>
      <div className="absolute bottom-10 right-10 text-cyan-400/20 animate-pulse">
        <span className="text-6xl">🏝️</span>
      </div>
    </div>
  );
}

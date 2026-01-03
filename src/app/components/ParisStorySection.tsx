"use client";

import Image from "next/image";
import { useState } from "react";

export default function ParisStorySection() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1502602893406-5e88db641a7d?w=1920&h=1080&fit=crop"
          alt="Paris story"
          fill
          className={`object-cover transition-transform duration-1000 ${isHovered ? 'scale-110' : 'scale-100'}`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
      </div>

      {/* Content Overlay */}
      <div 
        className="relative z-10 h-full flex items-center justify-center px-4"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="text-center text-white max-w-4xl">
          {/* City Badge */}
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-white/30">
            <span className="text-2xl">🗼️</span>
            <span className="text-lg font-semibold">Paris, France</span>
          </div>

          {/* Story Title */}
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            A Day in
            <span className="block text-emerald-400">Paris</span>
          </h2>

          {/* Story Description */}
          <div className="mb-8 space-y-4">
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              Wake up to the aroma of fresh croissants, spend your morning wandering through 
              charming cobblestone streets, and end your day with the sparkling Eiffel Tower 
              illuminating the night sky.
            </p>
            <p className="text-lg text-white/70 italic">
              "Paris is always a good idea" - Audrey Hepburn
            </p>
          </div>

          {/* Interactive Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 transform hover:scale-105 transition-all duration-300">
              <div className="text-3xl mb-3">🌅</div>
              <h3 className="text-xl font-semibold mb-2">Best Time to Visit</h3>
              <p className="text-white/80">April - June, September - October</p>
              <div className="mt-3 inline-flex items-center gap-2 bg-emerald-500/30 rounded-full px-3 py-1">
                <span className="text-emerald-300 text-sm">🌡️</span>
                <span className="text-emerald-300 text-sm font-medium">Perfect Weather</span>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 transform hover:scale-105 transition-all duration-300">
              <div className="text-3xl mb-3">💰</div>
              <h3 className="text-xl font-semibold mb-2">Avg Daily Cost</h3>
              <p className="text-white/80 text-2xl font-bold">$80-120</p>
              <p className="text-white/60 text-sm">per person</p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 transform hover:scale-105 transition-all duration-300">
              <div className="text-3xl mb-3">🎯</div>
              <h3 className="text-xl font-semibold mb-2">Top Attraction</h3>
              <p className="text-white/80">Eiffel Tower</p>
              <p className="text-white/60 text-sm">Must-visit at sunset</p>
            </div>
          </div>

          {/* CTA Button */}
          <button 
            onClick={() => alert('🗼️ Exploring Paris packages and experiences!')}
            className="group relative overflow-hidden bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-12 py-4 rounded-full text-lg font-bold shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300"
          >
            <span className="relative z-10 flex items-center gap-3">
              Explore Paris
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5-5m5 5H6" />
              </svg>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-teal-600 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </button>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-10 right-10 text-white/60 animate-pulse">
        <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
          <span className="text-sm font-medium">Hover to explore</span>
        </div>
      </div>

      {/* Side Navigation Dots */}
      <div className="absolute right-8 top-1/2 transform -translate-y-1/2 space-y-4">
        <div className="w-3 h-3 bg-white/50 rounded-full cursor-pointer hover:bg-white/80 transition-colors"></div>
        <div className="w-3 h-3 bg-white rounded-full cursor-pointer hover:bg-white/80 transition-colors"></div>
        <div className="w-3 h-3 bg-white/50 rounded-full cursor-pointer hover:bg-white/80 transition-colors"></div>
      </div>
    </div>
  );
}

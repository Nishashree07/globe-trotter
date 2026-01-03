"use client";

import Image from "next/image";
import { useState } from "react";

export default function TokyoStorySection() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1493976040374-85c8e9962cd9?w=1920&h=1080&fit=crop"
          alt="Tokyo story"
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
            <span className="text-2xl">🗾</span>
            <span className="text-lg font-semibold">Tokyo, Japan</span>
          </div>

          {/* Story Title */}
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Future Meets
            <span className="block text-pink-400">Tradition</span>
          </h2>

          {/* Story Description */}
          <div className="mb-8 space-y-4">
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              Experience the perfect blend of ancient temples, neon-lit streets, and cutting-edge technology 
              in the world's most fascinating metropolis where every corner holds a new discovery.
            </p>
            <p className="text-lg text-white/70 italic">
              "Tokyo is a city of endless possibilities" - Yoko Ono
            </p>
          </div>

          {/* Interactive Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 transform hover:scale-105 transition-all duration-300">
              <div className="text-3xl mb-3">🌸</div>
              <h3 className="text-xl font-semibold mb-2">Cherry Blossoms</h3>
              <p className="text-white/80">March - May</p>
              <div className="mt-3 inline-flex items-center gap-2 bg-pink-500/30 rounded-full px-3 py-1">
                <span className="text-pink-300 text-sm">🌸</span>
                <span className="text-pink-300 text-sm font-medium">Peak Season</span>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 transform hover:scale-105 transition-all duration-300">
              <div className="text-3xl mb-3">🏙️</div>
              <h3 className="text-xl font-semibold mb-2">Modern Tech</h3>
              <p className="text-white/80">Year-round innovation</p>
              <div className="mt-3 inline-flex items-center gap-2 bg-red-500/30 rounded-full px-3 py-1">
                <span className="text-red-300 text-sm">🤖</span>
                <span className="text-red-300 text-sm font-medium">Tech District</span>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 transform hover:scale-105 transition-all duration-300">
              <div className="text-3xl mb-3">🍱</div>
              <h3 className="text-xl font-semibold mb-2">Ramen Culture</h3>
              <p className="text-white/80">Authentic flavors</p>
              <div className="mt-3 inline-flex items-center gap-2 bg-orange-500/30 rounded-full px-3 py-1">
                <span className="text-orange-300 text-sm">🍜</span>
                <span className="text-orange-300 text-sm font-medium">Food Paradise</span>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <button 
            onClick={() => alert('🗾️ Exploring Tokyo packages and Japanese experiences!')}
            className="group relative overflow-hidden bg-gradient-to-r from-pink-500 to-red-600 text-white px-12 py-4 rounded-full text-lg font-bold shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300"
          >
            <span className="relative z-10 flex items-center gap-3">
              Explore Tokyo
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5-5m5 5H6" />
              </svg>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-pink-500 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </button>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-10 right-10 text-pink-400/10 animate-pulse">
        <span className="text-6xl">🗾</span>
      </div>
      <div className="absolute bottom-10 left-10 text-red-400/10 animate-pulse">
        <span className="text-6xl">🤖</span>
      </div>
    </div>
  );
}

"use client";

import Image from "next/image";
import { useState } from "react";

export default function NYCStorySection() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1496442226666-8104f0aef5c4?w=1920&h=1080&fit=crop"
          alt="NYC story"
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
            <span className="text-2xl">🗽</span>
            <span className="text-lg font-semibold">New York City, USA</span>
          </div>

          {/* Story Title */}
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            The City That
            <span className="block text-purple-400">Never Sleeps</span>
          </h2>

          {/* Story Description */}
          <div className="mb-8 space-y-4">
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              From the bright lights of Times Square to the peaceful oasis of Central Park, 
              experience the endless energy of the world's most iconic metropolis.
            </p>
            <p className="text-lg text-white/70 italic">
              "New York is the only real city-city" - Truman Capote
            </p>
          </div>

          {/* Interactive Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 transform hover:scale-105 transition-all duration-300">
              <div className="text-3xl mb-3">🎭</div>
              <h3 className="text-xl font-semibold mb-2">Broadway Shows</h3>
              <p className="text-white/80">Year-round entertainment</p>
              <div className="mt-3 inline-flex items-center gap-2 bg-purple-500/30 rounded-full px-3 py-1">
                <span className="text-purple-300 text-sm">🎟</span>
                <span className="text-purple-300 text-sm font-medium">World-Class Theater</span>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 transform hover:scale-105 transition-all duration-300">
              <div className="text-3xl mb-3">🌳</div>
              <h3 className="text-xl font-semibold mb-2">Central Park</h3>
              <p className="text-white/80">Urban oasis</p>
              <div className="mt-3 inline-flex items-center gap-2 bg-green-500/30 rounded-full px-3 py-1">
                <span className="text-green-300 text-sm">🌿</span>
                <span className="text-green-300 text-sm font-medium">Nature Escape</span>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 transform hover:scale-105 transition-all duration-300">
              <div className="text-3xl mb-3">🏙️</div>
              <h3 className="text-xl font-semibold mb-2">Skyline Views</h3>
              <p className="text-white/80">Iconic architecture</p>
              <div className="mt-3 inline-flex items-center gap-2 bg-blue-500/30 rounded-full px-3 py-1">
                <span className="text-blue-300 text-sm">🏗️</span>
                <span className="text-blue-300 text-sm font-medium">City Heights</span>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <button 
            onClick={() => alert('🗽️ Exploring NYC packages and Big Apple experiences!')}
            className="group relative overflow-hidden bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-12 py-4 rounded-full text-lg font-bold shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300"
          >
            <span className="relative z-10 flex items-center gap-3">
              Explore NYC
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5-5m5 5H6" />
              </svg>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-500 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </button>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-10 right-10 text-purple-400/10 animate-pulse">
        <span className="text-6xl">🗽</span>
      </div>
      <div className="absolute bottom-10 left-10 text-indigo-400/10 animate-pulse">
        <span className="text-6xl">🏙️</span>
      </div>
    </div>
  );
}

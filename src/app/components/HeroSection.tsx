"use client";

import Image from "next/image";
import { useState } from "react";

export default function HeroSection() {
  const [isPlaying, setIsPlaying] = useState(true);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Video/Image Background */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1488646952015-9bbd4af7e61?w=1920&h=1080&fit=crop"
          alt="Travel hero"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/60" />
      </div>

      {/* Floating Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 text-center text-white">
        {/* Animated Title */}
        <div className="mb-8 animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-black mb-4 tracking-tight">
            Plan. Explore.
            <span className="block text-emerald-400">Travel Smarter.</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Discover amazing places around the world with curated trips, hotels, and experiences
          </p>
        </div>

        {/* Premium Search Section */}
        <div className="w-full max-w-5xl mx-auto bg-white/10 backdrop-blur-md rounded-2xl p-6 md:p-8 shadow-2xl border border-white/20">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <div className="relative">
              <input
                type="text"
                placeholder="🌍 Where to?"
                className="w-full rounded-xl bg-white/20 backdrop-blur-sm border border-white/30 px-4 py-4 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition-all"
              />
              <div className="absolute right-3 top-1/2 -translate-y-1/2 text-white/50">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
            <div className="relative">
              <input
                type="date"
                placeholder="📅 When?"
                className="w-full rounded-xl bg-white/20 backdrop-blur-sm border border-white/30 px-4 py-4 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition-all"
              />
              <div className="absolute right-3 top-1/2 -translate-y-1/2 text-white/50">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
            </div>
            <div className="relative">
              <input
                type="number"
                placeholder="👥 Travelers"
                min={1}
                className="w-full rounded-xl bg-white/20 backdrop-blur-sm border border-white/30 px-4 py-4 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition-all"
              />
              <div className="absolute right-3 top-1/2 -translate-y-1/2 text-white/50">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
            </div>
            <button 
              onClick={() => alert('🚀 Starting your dream journey search!')}
              className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 px-8 py-4 text-lg font-bold text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <span className="relative z-10 flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                Search Adventures
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-teal-600 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </button>
          </div>

          {/* Quick Stats */}
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
              <span className="text-emerald-400">🌍</span>
              <span className="text-white/90">500+ Destinations</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
              <span className="text-emerald-400">🏨</span>
              <span className="text-white/90">50+ Countries</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
              <span className="text-emerald-400">⭐</span>
              <span className="text-white/90">4.8★ Average</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 animate-bounce">
        <div className="flex flex-col items-center gap-2">
          <span className="text-sm font-medium">Scroll to explore</span>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out;
        }
      `}</style>
    </div>
  );
}

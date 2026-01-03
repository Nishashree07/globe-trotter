"use client";

import Image from "next/image";

export default function GlobeTrotterLogo() {
  return (
    <div className="flex items-center gap-2">
      {/* Globe Icon */}
      <div className="relative w-10 h-10">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center">
          <span className="text-white text-xl font-bold">🌍</span>
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full animate-ping opacity-75"></div>
      </div>
      
      {/* Logo Text */}
      <div className="flex flex-col">
        <span className="text-2xl font-black font-bold tracking-tight">
          Globe<span className="text-emerald-600">Trotter</span>
        </span>
        <span className="text-xs text-gray-500 font-medium tracking-wider">
          TRAVEL THE WORLD
        </span>
      </div>
    </div>
  );
}

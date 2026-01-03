"use client";

import Image from "next/image";
import { useState } from "react";

export default function PromotionSlider() {
  const [index, setIndex] = useState(0);

  const promos = [
    {
      id: 1,
      title: "Summer in Europe",
      subtitle: "Save up to 30% on city packages",
      image: "https://images.unsplash.com/photo-1512459475466-99e0b66d7dfe?w=600&h=300&fit=crop",
      cta: "View Deals",
    },
    {
      id: 2,
      title: "Beach Escapes",
      subtitle: "Tropical paradises await",
      image: "https://images.unsplash.com/photo-1507525428034-bbb2363c5d64?w=600&h=300&fit=crop",
      cta: "Explore",
    },
    {
      id: 3,
      title: "Adventure Awaits",
      subtitle: "Hiking, diving, safaris & more",
      image: "https://images.unsplash.com/photo-1551632849-5de448ac75ab?w=600&h=300&fit=crop",
      cta: "Discover",
    },
  ];

  const next = () => setIndex((i) => (i + 1) % promos.length);
  const prev = () => setIndex((i) => (i - 1 + promos.length) % promos.length);

  return (
    <div className="relative bg-white py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold text-zinc-900">Featured Deals</h2>
          <div className="flex gap-2">
            <button
              onClick={prev}
              className="rounded-full p-2 bg-zinc-100 hover:bg-zinc-200 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={next}
              className="rounded-full p-2 bg-zinc-100 hover:bg-zinc-200 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
        <div className="relative rounded-xl overflow-hidden">
          <Image
            src={promos[index].image}
            alt={promos[index].title}
            width={1200}
            height={400}
            className="w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            <h3 className="text-2xl font-bold mb-1">{promos[index].title}</h3>
            <p className="text-sm mb-4">{promos[index].subtitle}</p>
            <button 
              onClick={() => alert('Viewing deals for: ' + promos[index].title)}
              className="rounded-lg bg-white text-zinc-900 px-6 py-2 text-sm font-semibold transition-colors hover:bg-zinc-100"
            >
              {promos[index].cta}
            </button>
          </div>
        </div>
        <div className="flex justify-center mt-4 gap-2">
          {promos.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-2 w-2 rounded-full transition-colors ${
                i === index ? "bg-emerald-600" : "bg-zinc-300"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

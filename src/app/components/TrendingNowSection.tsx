"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";

export default function TrendingNowSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const trendingDestinations = [
    {
      id: 1,
      name: "Bali",
      route: "bali",
      country: "Indonesia",
      image: "https://images.unsplash.com/photo-1537956150983-4db2c5a4a6d9?w=600&h=400&fit=crop",
      badge: "🔥 Trending",
      badgeColor: "from-red-500 to-orange-500",
      price: "$599",
      rating: 4.9,
      description: "Tropical paradise with stunning beaches",
      trend: "up 45%"
    },
    {
      id: 2,
      name: "Lisbon",
      route: "lisbon",
      country: "Portugal",
      image: "https://images.unsplash.com/photo-1543782761-3632f2b9358?w=600&h=400&fit=crop",
      badge: "💸 Budget",
      badgeColor: "from-green-500 to-emerald-500",
      price: "$399",
      rating: 4.7,
      description: "Charming European city on a budget",
      trend: "up 32%"
    },
    {
      id: 3,
      name: "Santorini",
      route: "santorini",
      country: "Greece",
      image: "https://images.unsplash.com/photo-1570077181367-8e99442c643e?w=600&h=400&fit=crop",
      badge: "🏖️ Relax",
      badgeColor: "from-blue-500 to-cyan-500",
      price: "$899",
      rating: 4.8,
      description: "Island romance with sunset views",
      trend: "up 28%"
    },
    {
      id: 4,
      name: "Dubai",
      route: "dubai",
      country: "UAE",
      image: "https://images.unsplash.com/photo-1512459970291-97a04000f6ea?w=600&h=400&fit=crop",
      badge: "💎 Luxury",
      badgeColor: "from-amber-500 to-orange-500",
      price: "$1299",
      rating: 4.9,
      description: "Futuristic city with record-breaking architecture",
      trend: "up 52%"
    },
    {
      id: 5,
      name: "Paris",
      route: "paris",
      country: "France",
      image: "https://images.unsplash.com/photo-1502602893406-5e88db641a7d?w=600&h=400&fit=crop",
      badge: "🏙️ Popular",
      badgeColor: "from-purple-500 to-indigo-500",
      price: "$799",
      rating: 4.8,
      description: "City of Light and romance",
      trend: "up 38%"
    },
    {
      id: 6,
      name: "Tokyo",
      route: "tokyo",
      country: "Japan",
      image: "https://images.unsplash.com/photo-1493976040374-85c8e9962cd9?w=600&h=400&fit=crop",
      badge: "🌸 New",
      badgeColor: "from-pink-500 to-rose-500",
      price: "$999",
      rating: 4.7,
      description: "Modern metropolis with ancient traditions",
      trend: "up 41%"
    }
  ];

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -400, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };

  const scrollToIndex = (index: number) => {
    if (scrollContainerRef.current) {
      const cardWidth = 400; // Approximate card width including gap
      scrollContainerRef.current.scrollTo({ left: index * cardWidth, behavior: 'smooth' });
      setCurrentIndex(index);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (scrollContainerRef.current) {
        const scrollLeft = scrollContainerRef.current.scrollLeft;
        const newIndex = Math.round(scrollLeft / 400);
        setCurrentIndex(newIndex);
      }
    };

    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <div className="relative w-full bg-gradient-to-b from-gray-50 to-gray-100 py-16">
      {/* Section Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 mb-6 shadow-lg border border-white/50">
          <span className="text-2xl">🔥</span>
          <span className="text-2xl font-bold text-gray-800">Popular Right Now</span>
        </div>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Discover the hottest destinations travelers are booking right now
        </p>
      </div>

      {/* Navigation Arrows */}
      <div className="relative max-w-7xl mx-auto px-4 mb-8">
        <button
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 z-20 -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
        >
          <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7 7" />
          </svg>
        </button>
        <button
          onClick={scrollRight}
          className="absolute right-0 top-1/2 z-20 -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
        >
          <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Horizontal Scrolling Carousel */}
      <div 
        ref={scrollContainerRef}
        className="relative max-w-7xl mx-auto px-4 overflow-hidden"
      >
        <div className="flex gap-6 transition-transform duration-300">
          {trendingDestinations.map((destination, index) => (
            <div
              key={destination.id}
              className="flex-shrink-0 w-[400px] transform transition-all duration-300 hover:scale-105"
            >
              <div className="relative group cursor-pointer">
                {/* Destination Image */}
                <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src={destination.image}
                    alt={destination.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
                  
                  {/* Trend Badge */}
                  <div className={`absolute top-4 left-4 ${destination.badgeColor} rounded-full px-3 py-1 text-white text-xs font-bold shadow-lg animate-pulse`}>
                    {destination.badge}
                  </div>
                  
                  {/* Trend Indicator */}
                  <div className="absolute top-4 right-4 bg-green-500 rounded-full px-3 py-1 text-white text-xs font-bold shadow-lg flex items-center gap-1">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.293 7.707a1 1 0 010-1.414L10.586 3.414a1 1 0 01-1.414 1.414l-8.486 8.486a1 1 0 01-1.414-1.414L6.707 7.707a1 1 0 01-1.414 1.414l8.486-8.486a1 1 0 011.414 1.414z" clipRule="evenodd" />
                    </svg>
                    <span>{destination.trend}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="mt-6 bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-1">{destination.name}</h3>
                      <p className="text-lg text-gray-600">{destination.country}</p>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-1 mb-1">
                        <span className="text-yellow-500 text-lg">★</span>
                        <span className="text-lg font-semibold">{destination.rating}</span>
                      </div>
                      <p className="text-2xl font-bold text-emerald-600">{destination.price}</p>
                      <p className="text-sm text-gray-500">per person</p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 mb-6 leading-relaxed">{destination.description}</p>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <Link 
                      href={`/bookings/${destination.route}`}
                      className="flex-1 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-4 py-3 rounded-xl font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-center"
                    >
                      Book Now
                    </Link>
                    <Link 
                      href={`/bookings/${destination.route}`}
                      className="bg-white text-emerald-600 px-4 py-3 rounded-xl font-bold border-2 border-emerald-600 hover:bg-emerald-50 transform hover:scale-105 transition-all duration-300 text-center"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
                </div>
              </div>
            ))}
        </div>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center gap-2 mt-8">
        {trendingDestinations.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollToIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'bg-emerald-600 scale-125' 
                : 'bg-gray-300 hover:bg-gray-400 hover:scale-110'
            }`}
          />
        ))}
      </div>

      {/* Call to Action */}
      <div className="text-center mt-16">
        <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-4xl mx-auto border border-gray-100">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Don't Miss Out on These
            <span className="block text-emerald-600">Trending Destinations!</span>
          </h3>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Book now before prices increase and availability runs out
          </p>
          <button 
            onClick={() => alert('🌟 Exploring all trending destinations and special offers!')}
            className="group relative overflow-hidden bg-gradient-to-r from-orange-500 to-red-600 text-white px-12 py-4 rounded-full text-lg font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            <span className="relative z-10 flex items-center gap-3">
              Explore All Trends
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5-5m5 5H6" />
              </svg>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-orange-600 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </div>
  );
}

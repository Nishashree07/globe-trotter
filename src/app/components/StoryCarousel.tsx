"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const stories = [
  {
    id: "paris",
    name: "Paris",
    country: "France",
    emoji: "🗼️",
    image: "https://images.unsplash.com/photo-1502602893406-5e88db641a7d?w=1920&h=1080&fit=crop",
    title: "City of Light",
    subtitle: "Romance",
    description: "Wake up to the aroma of fresh croissants, wander through charming cobblestone streets, and fall in love with the City of Light.",
    color: "from-pink-500 to-rose-500",
    highlights: ["Eiffel Tower", "Louvre Museum", "Seine River"]
  },
  {
    id: "bali",
    name: "Bali",
    country: "Indonesia",
    emoji: "🏝️",
    image: "https://images.unsplash.com/photo-1537956150983-4db2c5a4a6d9?w=1920&h=1080&fit=crop",
    title: "Tropical Paradise",
    subtitle: "Island Life",
    description: "Discover pristine beaches, ancient temples, and terraced rice paddies in this Indonesian paradise.",
    color: "from-blue-500 to-cyan-500",
    highlights: ["Beach Resorts", "Ancient Temples", "Rice Terraces"]
  },
  {
    id: "tokyo",
    name: "Tokyo",
    country: "Japan",
    emoji: "🗾",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e9962cd9?w=1920&h=1080&fit=crop",
    title: "Future Meets Tradition",
    subtitle: "Modern Metropolis",
    description: "Experience the perfect blend of ancient traditions and cutting-edge technology in Japan's vibrant capital.",
    color: "from-red-500 to-pink-500",
    highlights: ["Cherry Blossoms", "Modern Tech", "Ramen Culture"]
  },
  {
    id: "nyc",
    name: "New York",
    country: "USA",
    emoji: "🗽",
    image: "https://images.unsplash.com/photo-1496442226666-8104f0aef5c4?w=1920&h=1080&fit=crop",
    title: "The City That Never Sleeps",
    subtitle: "Urban Energy",
    description: "From Broadway shows to Central Park, experience the endless energy of the world's most iconic metropolis.",
    color: "from-purple-500 to-indigo-500",
    highlights: ["Broadway Shows", "Central Park", "Skyline Views"]
  },
  {
    id: "barcelona",
    name: "Barcelona",
    country: "Spain",
    emoji: "🏖️",
    image: "https://images.unsplash.com/photo-15834185592383-9b07aea8b2a6?w=1920&h=1080&fit=crop",
    title: "Mediterranean Dreams",
    subtitle: "Coastal Beauty",
    description: "Savor tapas, explore Gothic architecture, and enjoy beautiful Mediterranean beaches in Catalonia's capital.",
    color: "from-blue-500 to-cyan-500",
    highlights: ["Gothic Quarter", "Beach Clubs", "Tapas Culture"]
  },
  {
    id: "dubai",
    name: "Dubai",
    country: "UAE",
    emoji: "🏙️",
    image: "https://images.unsplash.com/photo-1512459970291-97a04000f6ea?w=1920&h=1080&fit=crop",
    title: "City of Gold",
    subtitle: "Luxury Innovation",
    description: "Experience record-breaking architecture, luxury shopping, and desert adventures in this dazzling Middle Eastern metropolis.",
    color: "from-amber-500 to-orange-500",
    highlights: ["Burj Khalifa", "Desert Safari", "Luxury Shopping"]
  }
];

export default function StoryCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % stories.length);
    }, 5000); // Change story every 5 seconds

    return () => {
      clearInterval(interval);
    };
  }, []);

  const goToStory = (index: number) => {
    setCurrentIndex(index);
  };

  const nextStory = () => {
    setCurrentIndex((prev) => (prev + 1) % stories.length);
  };

  const prevStory = () => {
    setCurrentIndex((prev) => (prev - 1 + stories.length) % stories.length);
  };

  const currentStory = stories[currentIndex];

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={currentStory.image}
          alt={`${currentStory.name} story`}
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
            <span className="text-2xl">{currentStory.emoji}</span>
            <span className="text-lg font-semibold">{currentStory.name}, {currentStory.country}</span>
          </div>

          {/* Story Title */}
          <h2 className={`text-4xl md:text-6xl font-bold mb-6 leading-tight bg-gradient-to-r ${currentStory.color} bg-clip-text text-transparent bg-clip-text`}>
            {currentStory.title}
            <span className="block text-2xl md:text-3xl">{currentStory.subtitle}</span>
          </h2>

          {/* Story Description */}
          <div className="mb-8 space-y-4">
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              {currentStory.description}
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {currentStory.highlights.map((highlight, index) => (
                <span
                  key={index}
                  className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-sm text-white font-medium"
                >
                  {highlight}
                </span>
              ))}
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center gap-2 mb-8">
            {stories.map((_, index) => (
              <button
                key={index}
                onClick={() => goToStory(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-white scale-125 ring-2 ring-white ring-opacity-50'
                    : 'bg-white/50 hover:bg-white/70 hover:scale-110'
                }`}
              />
            ))}
          </div>

          {/* Navigation Arrows */}
          <div className="flex justify-between items-center w-full max-w-md px-8 absolute bottom-8">
            <button
              onClick={prevStory}
              className="bg-white/20 backdrop-blur-sm rounded-full p-3 hover:bg-white/30 transition-colors absolute left-0"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7 7" />
              </svg>
            </button>
            
            <button
              onClick={nextStory}
              className="bg-white/20 backdrop-blur-sm rounded-full p-3 hover:bg-white/30 transition-colors absolute right-0"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* CTA Button */}
          <button 
            onClick={() => alert(`🌟 Exploring ${currentStory.name}, ${currentStory.country}! Starting from amazing experiences!`)}
            className={`group relative overflow-hidden bg-gradient-to-r ${currentStory.color} text-white px-12 py-4 rounded-full text-lg font-bold shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300`}
          >
            <span className="relative z-10 flex items-center gap-3">
              Explore {currentStory.name}
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5-5m5 5H6" />
              </svg>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </button>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-10 right-10 text-white/60 animate-pulse">
        <span className="text-6xl">🌍</span>
      </div>
      <div className="absolute bottom-10 left-10 text-white/60 animate-pulse">
        <span className="text-6xl">🌟</span>
      </div>
    </div>
  );
}

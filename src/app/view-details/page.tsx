"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function ViewDetailsPage() {
  const [selectedTab, setSelectedTab] = useState("overview");
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const destination = {
    id: "paris",
    name: "Paris",
    country: "France",
    heroImage: "https://images.unsplash.com/photo-1502602893406-5e88db641a7d?w=1600&h=800&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1549149985-0b4d3c5e5c9?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1502602893406-5e88db641a7d?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1512459970291-97a04000f6ea?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1551632849-5de448ac75ab?w=800&h=600&fit=crop"
    ],
    rating: 4.8,
    reviews: 2847,
    price: 1299,
    description: "Paris, the capital of France, is renowned for its art, fashion, gastronomy and culture. This stunning city features iconic landmarks like the Eiffel Tower, world-class museums, charming cafés, and romantic atmosphere.",
    highlights: [
      "Eiffel Tower - Iconic iron lattice tower",
      "Louvre Museum - World's largest art museum",
      "Arc de Triomphe - Monumental triumphal arch",
      "Seine River Cruise - Scenic boat tours",
      "Montmartre - Artistic neighborhood with basilica"
    ],
    bestTime: "April to June, September to October",
    avgTemp: "12°C - 25°C",
    currency: "EUR (€)",
    language: "French",
    timezone: "GMT+2",
    activities: {
      cultural: [
        { name: "Louvre Museum Tour", price: 45, duration: "3 hours", image: "https://images.unsplash.com/photo-1566472267474-352b94d5ad8?w=400&h=300&fit=crop" },
        { name: "Versailles Palace", price: 85, duration: "Full day", image: "https://images.unsplash.com/photo-1560049009383-7e5d2b8a8a8?w=400&h=300&fit=crop" },
        { name: "Seine River Dinner Cruise", price: 75, duration: "2 hours", image: "https://images.unsplash.com/photo-1549149985-0b4d3c5e5c9?w=400&h=300&fit=crop" }
      ],
      adventure: [
        { name: "Eiffel Tower Summit", price: 35, duration: "2 hours", image: "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?w=400&h=300&fit=crop" },
        { name: "Bike Tour of Paris", price: 55, duration: "4 hours", image: "https://images.unsplash.com/photo-1551632849-5de448ac75ab?w=400&h=300&fit=crop" },
        { name: "Hot Air Balloon Ride", price: 180, duration: "3 hours", image: "https://images.unsplash.com/photo-1476514573739-1f312e6a8f4?w=400&h=300&fit=crop" }
      ],
      food: [
        { name: "French Cooking Class", price: 95, duration: "3 hours", image: "https://images.unsplash.com/photo-1567620155748-3e5ca5a9b4f8?w=400&h=300&fit=crop" },
        { name: "Wine Tasting Tour", price: 65, duration: "2 hours", image: "https://images.unsplash.com/photo-1566472267474-352b94d5ad8?w=400&h=300&fit=crop" },
        { name: "Market Food Tour", price: 50, duration: "3 hours", image: "https://images.unsplash.com/photo-1549149985-0b4d3c5e5c9?w=400&h=300&fit=crop" }
      ]
    }
  };

  const tabs = [
    { id: "overview", label: "Overview", icon: "📋" },
    { id: "gallery", label: "Gallery", icon: "🖼️" },
    { id: "activities", label: "Activities", icon: "🎯" },
    { id: "practical", label: "Practical Info", icon: "ℹ️" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold text-emerald-600">
              GlobeTrotter
            </Link>
            <div className="flex items-center gap-6 text-sm">
              <Link href="/" className="text-zinc-600 hover:text-zinc-900">Home</Link>
              <Link href="/destinations" className="text-zinc-600 hover:text-zinc-900">Destinations</Link>
              <Link href="/bookings" className="text-zinc-600 hover:text-zinc-900">Browse</Link>
              <Link href="/book-now" className="text-zinc-600 hover:text-zinc-900">Book Now</Link>
              <Link href="/view-details" className="text-emerald-600 hover:text-emerald-700 font-semibold">Details</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative h-96 overflow-hidden">
        <Image
          src={destination.heroImage}
          alt={`${destination.name} hero`}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-black mb-4">
              {destination.name}
              <span className="block text-emerald-400">{destination.country}</span>
            </h1>
            <div className="flex items-center gap-6 text-lg">
              <div className="flex items-center gap-2">
                <span className="text-yellow-400 text-2xl">★</span>
                <span className="font-bold">{destination.rating}</span>
                <span className="text-white/80">({destination.reviews.toLocaleString()} reviews)</span>
              </div>
              <div className="bg-emerald-600 px-6 py-3 rounded-full">
                <span className="text-2xl font-bold">From ${destination.price}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Tabs */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-full shadow-lg p-2 inline-flex gap-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedTab(tab.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedTab === tab.id
                    ? 'bg-emerald-600 text-white shadow-lg'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <span className="mr-2">{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          {/* Overview Tab */}
          {selectedTab === "overview" && (
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-4">About {destination.name}</h2>
                <p className="text-lg text-gray-700 leading-relaxed max-w-4xl">
                  {destination.description}
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Top Highlights</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {destination.highlights.map((highlight, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 bg-emerald-50 rounded-xl">
                      <span className="text-2xl">🗼️</span>
                      <span className="text-gray-700">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6">
                  <h4 className="font-bold text-gray-800 mb-2 flex items-center gap-2">
                    <span>🌅</span>
                    Best Time to Visit
                  </h4>
                  <p className="text-lg text-gray-700">{destination.bestTime}</p>
                </div>
                <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-6">
                  <h4 className="font-bold text-gray-800 mb-2 flex items-center gap-2">
                    <span>🌡️</span>
                    Average Temperature
                  </h4>
                  <p className="text-lg text-gray-700">{destination.avgTemp}</p>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6">
                  <h4 className="font-bold text-gray-800 mb-2 flex items-center gap-2">
                    <span>💰</span>
                    Currency
                  </h4>
                  <p className="text-lg text-gray-700">{destination.currency}</p>
                </div>
              </div>
            </div>
          )}

          {/* Gallery Tab */}
          {selectedTab === "gallery" && (
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Photo Gallery</h2>
              
              {/* Main Image */}
              <div className="relative h-96 rounded-2xl overflow-hidden mb-6">
                <Image
                  src={destination.gallery[activeImageIndex]}
                  alt={`${destination.name} gallery ${activeImageIndex + 1}`}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Thumbnail Grid */}
              <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
                {destination.gallery.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveImageIndex(index)}
                    className={`relative aspect-video rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                      activeImageIndex === index
                        ? 'border-emerald-500 shadow-lg scale-105'
                        : 'border-gray-200 hover:border-emerald-300'
                    }`}
                  >
                    <Image
                      src={image}
                      alt={`${destination.name} gallery ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Activities Tab */}
          {selectedTab === "activities" && (
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-8">Activities & Experiences</h2>
              
              <div className="space-y-8">
                {/* Cultural Activities */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                    <span>🎭</span>
                    Cultural Experiences
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {destination.activities.cultural.map((activity, index) => (
                      <div key={index} className="group cursor-pointer">
                        <div className="relative h-48 rounded-xl overflow-hidden mb-4">
                          <Image
                            src={activity.image}
                            alt={activity.name}
                            fill
                            className="object-cover transition-transform duration-300 group-hover:scale-110"
                          />
                        </div>
                        <h4 className="font-bold text-gray-800 mb-2">{activity.name}</h4>
                        <div className="flex items-center justify-between">
                          <span className="text-gray-600">{activity.duration}</span>
                          <span className="text-xl font-bold text-emerald-600">${activity.price}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Adventure Activities */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                    <span>🪂</span>
                    Adventure Activities
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {destination.activities.adventure.map((activity, index) => (
                      <div key={index} className="group cursor-pointer">
                        <div className="relative h-48 rounded-xl overflow-hidden mb-4">
                          <Image
                            src={activity.image}
                            alt={activity.name}
                            fill
                            className="object-cover transition-transform duration-300 group-hover:scale-110"
                          />
                        </div>
                        <h4 className="font-bold text-gray-800 mb-2">{activity.name}</h4>
                        <div className="flex items-center justify-between">
                          <span className="text-gray-600">{activity.duration}</span>
                          <span className="text-xl font-bold text-emerald-600">${activity.price}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Food Activities */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                    <span>🍽</span>
                    Food & Dining
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {destination.activities.food.map((activity, index) => (
                      <div key={index} className="group cursor-pointer">
                        <div className="relative h-48 rounded-xl overflow-hidden mb-4">
                          <Image
                            src={activity.image}
                            alt={activity.name}
                            fill
                            className="object-cover transition-transform duration-300 group-hover:scale-110"
                          />
                        </div>
                        <h4 className="font-bold text-gray-800 mb-2">{activity.name}</h4>
                        <div className="flex items-center justify-between">
                          <span className="text-gray-600">{activity.duration}</span>
                          <span className="text-xl font-bold text-emerald-600">${activity.price}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Practical Info Tab */}
          {selectedTab === "practical" && (
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-8">Practical Information</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6">
                    <h4 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
                      <span>🗣️</span>
                      Language
                    </h4>
                    <p className="text-lg text-gray-700">{destination.language}</p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6">
                    <h4 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
                      <span>🕐</span>
                      Timezone
                    </h4>
                    <p className="text-lg text-gray-700">{destination.timezone}</p>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6">
                    <h4 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
                      <span>💵</span>
                      Currency
                    </h4>
                    <p className="text-lg text-gray-700">{destination.currency}</p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-xl p-6">
                    <h4 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
                      <span>🌅</span>
                      Climate
                    </h4>
                    <p className="text-lg text-gray-700">{destination.avgTemp}</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* CTA Section */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Experience {destination.name}?
            </h3>
            <p className="text-xl text-emerald-50 mb-8">
              Book your complete Paris adventure with exclusive deals
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => alert(`📚 Booking ${destination.name} package! Starting from $${destination.price}`)}
                className="bg-white text-emerald-600 px-8 py-4 rounded-full font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                Book Complete Package
              </button>
              <button 
                onClick={() => alert('🎯 Customizing my Paris trip with activities!')}
                className="bg-emerald-700 text-white px-8 py-4 rounded-full font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                Customize Trip
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function BookNowPage() {
  const [selectedDestination, setSelectedDestination] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedDuration, setSelectedDuration] = useState(5);
  const [travelers, setTravelers] = useState(2);
  const [selectedHotel, setSelectedHotel] = useState("");
  const [selectedActivities, setSelectedActivities] = useState<string[]>([]);

  const destinations = [
    {
      id: "paris",
      name: "Paris",
      country: "France",
      image: "https://images.unsplash.com/photo-1502602893406-5e88db641a7d?w=800&h=500&fit=crop",
      price: 1299,
      rating: 4.8,
      description: "City of Light and Romance",
      highlights: ["Eiffel Tower", "Louvre Museum", "Seine River Cruise"]
    },
    {
      id: "bali",
      name: "Bali",
      country: "Indonesia",
      image: "https://images.unsplash.com/photo-1537956150983-4db2c5a4a6d9?w=800&h=500&fit=crop",
      price: 899,
      rating: 4.9,
      description: "Tropical Paradise Island",
      highlights: ["Beach Resorts", "Ancient Temples", "Rice Terraces"]
    },
    {
      id: "tokyo",
      name: "Tokyo",
      country: "Japan",
      image: "https://images.unsplash.com/photo-1493976040374-85c8e9962cd9?w=800&h=500&fit=crop",
      price: 1599,
      rating: 4.7,
      description: "Modern Metropolis",
      highlights: ["Mount Fuji", "Cherry Blossoms", "Tech Districts"]
    }
  ];

  const hotels = [
    { id: "luxury", name: "Luxury Resort", price: 250, rating: 5.0 },
    { id: "premium", name: "Premium Hotel", price: 150, rating: 4.5 },
    { id: "comfort", name: "Comfort Inn", price: 80, rating: 4.0 }
  ];

  const activities = [
    { id: "city-tour", name: "City Tour", price: 50, icon: "🏙️" },
    { id: "food-experience", name: "Food Experience", price: 75, icon: "🍽" },
    { id: "adventure", name: "Adventure Sports", price: 100, icon: "🪂" },
    { id: "cultural", name: "Cultural Shows", price: 60, icon: "🎭" },
    { id: "spa", name: "Spa & Wellness", price: 120, icon: "💆" },
    { id: "shopping", name: "Shopping Tour", price: 40, icon: "🛍" }
  ];

  const toggleActivity = (activityId: string) => {
    setSelectedActivities(prev =>
      prev.includes(activityId)
        ? prev.filter(id => id !== activityId)
        : [...prev, activityId]
    );
  };

  const selectedDestinationData = destinations.find(d => d.id === selectedDestination);
  const selectedHotelData = hotels.find(h => h.id === selectedHotel);
  const selectedActivitiesData = activities.filter(a => selectedActivities.includes(a.id));

  const calculateTotal = () => {
    let total = selectedDestinationData?.price || 0;
    if (selectedHotelData) total += selectedHotelData.price * selectedDuration;
    total += selectedActivitiesData.reduce((sum, activity) => sum + activity.price, 0);
    return total;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-teal-50">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-emerald-200">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold text-emerald-600">
              GlobeTrotter
            </Link>
            <div className="flex items-center gap-6 text-sm">
              <Link href="/" className="text-zinc-600 hover:text-zinc-900">Home</Link>
              <Link href="/destinations" className="text-zinc-600 hover:text-zinc-900">Destinations</Link>
              <Link href="/bookings" className="text-zinc-600 hover:text-zinc-900">Browse</Link>
              <Link href="/book-now" className="text-emerald-600 hover:text-emerald-700 font-semibold">Book Now</Link>
              <Link href="/view-details" className="text-zinc-600 hover:text-zinc-900">Details</Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 mb-6 shadow-lg border border-emerald-200">
            <span className="text-3xl">📚</span>
            <span className="text-2xl font-bold text-emerald-800">Book Your Dream Trip</span>
          </div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Customize every detail of your perfect vacation in real-time
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Destination Selection */}
          <div className="lg:col-span-2 space-y-8">
            {/* Destination Selection */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-emerald-100">
              <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                <span>🌍</span>
                Choose Destination
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                {destinations.map((destination) => (
                  <button
                    key={destination.id}
                    onClick={() => setSelectedDestination(destination.id)}
                    className={`relative rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                      selectedDestination === destination.id
                        ? 'border-emerald-500 shadow-lg scale-105'
                        : 'border-gray-200 hover:border-emerald-300 hover:shadow-md'
                    }`}
                  >
                    <div className="aspect-video">
                      <Image
                        src={destination.image}
                        alt={destination.name}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    </div>
                    <div className="p-4 text-left">
                      <h4 className="font-bold text-gray-800 mb-1">{destination.name}</h4>
                      <p className="text-sm text-gray-600 mb-2">{destination.country}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1">
                          <span className="text-yellow-500 text-sm">★</span>
                          <span className="text-sm font-medium">{destination.rating}</span>
                        </div>
                        <span className="text-lg font-bold text-emerald-600">${destination.price}</span>
                      </div>
                    </div>
                  </button>
                ))}
              </div>

              {/* Selected Destination Details */}
              {selectedDestinationData && (
                <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl p-6 border border-emerald-200">
                  <h4 className="text-lg font-bold text-gray-800 mb-3">
                    {selectedDestinationData.name} Highlights
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedDestinationData.highlights.map((highlight, index) => (
                      <span
                        key={index}
                        className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Hotel Selection */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-emerald-100">
              <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                <span>🏨</span>
                Select Hotel
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {hotels.map((hotel) => (
                  <button
                    key={hotel.id}
                    onClick={() => setSelectedHotel(hotel.id)}
                    className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                      selectedHotel === hotel.id
                        ? 'border-emerald-500 bg-emerald-50 shadow-lg scale-105'
                        : 'border-gray-200 hover:border-emerald-300 hover:shadow-md'
                    }`}
                  >
                    <h4 className="font-bold text-gray-800 mb-2">{hotel.name}</h4>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-1">
                        <span className="text-yellow-500 text-sm">★</span>
                        <span className="text-sm font-medium">{hotel.rating}</span>
                      </div>
                      <span className="text-lg font-bold text-emerald-600">${hotel.price}/night</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Activities Selection */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-emerald-100">
              <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                <span>🎯</span>
                Choose Activities
              </h3>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {activities.map((activity) => (
                  <button
                    key={activity.id}
                    onClick={() => toggleActivity(activity.id)}
                    className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                      selectedActivities.includes(activity.id)
                        ? 'border-emerald-500 bg-emerald-50 shadow-lg scale-105'
                        : 'border-gray-200 hover:border-emerald-300 hover:shadow-md'
                    }`}
                  >
                    <div className="text-2xl mb-2">{activity.icon}</div>
                    <h4 className="font-bold text-gray-800 mb-1">{activity.name}</h4>
                    <p className="text-lg font-bold text-emerald-600">${activity.price}</p>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Booking Summary */}
          <div className="space-y-6">
            {/* Trip Details */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-emerald-100">
              <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                <span>📅</span>
                Trip Details
              </h3>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Travel Date</label>
                  <input
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Duration (days)</label>
                  <input
                    type="range"
                    min="1"
                    max="30"
                    value={selectedDuration}
                    onChange={(e) => setSelectedDuration(Number(e.target.value))}
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>1</span>
                    <span className="font-bold text-emerald-600">{selectedDuration} days</span>
                    <span>30</span>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Travelers</label>
                  <input
                    type="number"
                    min="1"
                    max="10"
                    value={travelers}
                    onChange={(e) => setTravelers(Number(e.target.value))}
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  />
                </div>
              </div>
            </div>

            {/* Price Summary */}
            <div className="bg-gradient-to-br from-emerald-600 to-teal-600 rounded-2xl shadow-lg p-6 text-white">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <span>💰</span>
                Price Summary
              </h3>
              
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>Destination Package:</span>
                  <span className="font-bold">${selectedDestinationData?.price || 0}</span>
                </div>
                <div className="flex justify-between">
                  <span>Hotel ({selectedDuration} nights):</span>
                  <span className="font-bold">${(selectedHotelData?.price || 0) * selectedDuration}</span>
                </div>
                <div className="flex justify-between">
                  <span>Activities:</span>
                  <span className="font-bold">${selectedActivitiesData.reduce((sum, a) => sum + a.price, 0)}</span>
                </div>
                <div className="border-t border-emerald-400 pt-3 flex justify-between">
                  <span className="text-lg font-bold">Total:</span>
                  <span className="text-2xl font-bold">${calculateTotal()}</span>
                </div>
              </div>
              
              <button 
                onClick={() => alert(`🎉 Booking confirmed! Total: $${calculateTotal()} for ${selectedDestinationData?.name || 'Selected Destination'}`)}
                className="w-full bg-white text-emerald-600 px-6 py-4 rounded-xl font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 mt-6"
              >
                Complete Booking
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

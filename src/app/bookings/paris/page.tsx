"use client";

import GlobeTrotterLogo from "../../components/GlobeTrotterLogo";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function ParisBookingPage() {
  const [selectedDate, setSelectedDate] = useState("");
  const [travelers, setTravelers] = useState(2);
  const [selectedHotel, setSelectedHotel] = useState("luxury");
  const [selectedActivities, setSelectedActivities] = useState<string[]>([]);

  const hotels = [
    {
      id: "luxury",
      name: "Le Marais Boutique Hotel",
      rating: 4.9,
      price: 289,
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099920?w=600&h=400&fit=crop",
      amenities: ["WiFi", "Spa", "Restaurant", "Bar", "Concierge"],
      description: "Luxury boutique hotel in the heart of historic Le Marais district"
    },
    {
      id: "premium",
      name: "Eiffel Tower View Hotel",
      rating: 4.7,
      price: 189,
      image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=600&h=400&fit=crop",
      amenities: ["WiFi", "Restaurant", "City View", "Fitness"],
      description: "Modern hotel with stunning Eiffel Tower views"
    },
    {
      id: "comfort",
      name: "Montmartre Garden Inn",
      rating: 4.5,
      price: 129,
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&h=400&fit=crop",
      amenities: ["WiFi", "Breakfast", "Garden View"],
      description: "Charming hotel in the artistic Montmartre neighborhood"
    }
  ];

  const activities = [
    {
      id: "eiffel",
      name: "Eiffel Tower Summit",
      price: 35,
      duration: "2 hours",
      image: "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?w=400&h=300&fit=crop",
      description: "Skip the lines and enjoy panoramic views from the top"
    },
    {
      id: "louvre",
      name: "Louvre Museum Tour",
      price: 65,
      duration: "3 hours",
      image: "https://images.unsplash.com/photo-1566472267474-352b94d5ad8?w=400&h=300&fit=crop",
      description: "Private guided tour of the world's largest art museum"
    },
    {
      id: "seine",
      name: "Seine River Dinner Cruise",
      price: 89,
      duration: "2.5 hours",
      image: "https://images.unsplash.com/photo-1549149985-0b4d3c5e5c9?w=400&h=300&fit=crop",
      description: "Romantic dinner cruise with illuminated Paris landmarks"
    },
    {
      id: "versailles",
      name: "Palace of Versailles",
      price: 95,
      duration: "Full day",
      image: "https://images.unsplash.com/photo-1560049009383-7e5d2b8a8a8?w=400&h=300&fit=crop",
      description: "Day trip to the magnificent royal palace and gardens"
    },
    {
      id: "montmartre",
      name: "Montmartre Walking Tour",
      price: 45,
      duration: "3 hours",
      image: "https://images.unsplash.com/photo-1551632849-5de448ac75ab?w=400&h=300&fit=crop",
      description: "Explore the artistic heart of Paris with local guide"
    },
    {
      id: "food",
      name: "French Cooking Class",
      price: 125,
      duration: "4 hours",
      image: "https://images.unsplash.com/photo-1567620155748-3e5ca5a9b4f8?w=400&h=300&fit=crop",
      description: "Learn to make classic French dishes with expert chef"
    }
  ];

  const toggleActivity = (activityId: string) => {
    setSelectedActivities(prev =>
      prev.includes(activityId)
        ? prev.filter(id => id !== activityId)
        : [...prev, activityId]
    );
  };

  const selectedHotelData = hotels.find(h => h.id === selectedHotel);
  const selectedActivitiesData = activities.filter(a => selectedActivities.includes(a.id));

  const calculateTotal = () => {
    const basePrice = 1299;
    const hotelCost = (selectedHotelData?.price || 0) * 5; // 5 nights
    const activitiesCost = selectedActivitiesData.reduce((sum, activity) => sum + activity.price, 0);
    return basePrice + hotelCost + activitiesCost;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-gradient-to-r from-emerald-600 via-emerald-500 to-emerald-600 backdrop-blur-lg border-b border-emerald-300 shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <GlobeTrotterLogo />
            </Link>
            <div className="flex items-center gap-8 text-sm font-medium">
              <Link href="/" className="relative text-white/90 hover:text-white transition-colors duration-200 px-4 py-2 rounded-xl hover:bg-white/20 hover:scale-105">
                Home
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200" />
              </Link>
              <Link href="/destinations" className="relative text-white/90 hover:text-white transition-colors duration-200 px-4 py-2 rounded-xl hover:bg-white/20 hover:scale-105">
                Destinations
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200" />
              </Link>
              <Link href="/bookings" className="relative text-white font-semibold transition-colors duration-200 px-4 py-2 rounded-xl bg-white/20 hover:bg-white/30 hover:scale-105">
                Browse
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200" />
              </Link>
              <Link href="/hotels" className="relative text-white/90 hover:text-white transition-colors duration-200 px-4 py-2 rounded-xl hover:bg-white/20 hover:scale-105">
                Hotels
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200" />
              </Link>
              <Link href="/flights" className="relative text-white/90 hover:text-white transition-colors duration-200 px-4 py-2 rounded-xl hover:bg-white/20 hover:scale-105">
                Flights
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200" />
              </Link>
              <Link href="/profile" className="relative text-white/90 hover:text-white transition-colors duration-200 px-4 py-2 rounded-xl hover:bg-white/20 hover:scale-105">
                Profile
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200" />
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative h-96 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1502602893406-5e88db641a7d?w=1600&h=600&fit=crop"
          alt="Paris hero"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-4">
              <span className="text-4xl">🗼️</span>
              <div>
                <h1 className="text-4xl md:text-5xl font-black mb-2">Paris, France</h1>
                <p className="text-xl text-emerald-300">City of Light and Romance</p>
              </div>
            </div>
            <div className="flex items-center gap-6 text-lg">
              <div className="flex items-center gap-2">
                <span className="text-yellow-400 text-2xl">★</span>
                <span className="font-bold">4.8</span>
                <span className="text-white/80">(2,847 reviews)</span>
              </div>
              <div className="bg-emerald-600 px-4 py-2 rounded-full">
                <span className="text-2xl font-bold">From $1,299</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* About Paris */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-emerald-100">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-2">
            <span>🌍</span>
            About Paris
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Paris, the capital of France, is renowned for its art, fashion, gastronomy, and culture. 
                This stunning city features iconic landmarks like the Eiffel Tower, world-class museums, 
                charming cafés, and an unparalleled romantic atmosphere that captivates millions of visitors each year.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-blue-50 rounded-xl p-4">
                  <h4 className="font-bold text-blue-800 mb-2">Best Time to Visit</h4>
                  <p className="text-blue-700">April - June, September - October</p>
                </div>
                <div className="bg-orange-50 rounded-xl p-4">
                  <h4 className="font-bold text-orange-800 mb-2">Average Temperature</h4>
                  <p className="text-orange-700">12°C - 25°C</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Top Highlights</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🗼️</span>
                  <div>
                    <h4 className="font-bold text-gray-800">Eiffel Tower</h4>
                    <p className="text-gray-600">Iconic iron lattice tower and symbol of Paris</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🎨</span>
                  <div>
                    <h4 className="font-bold text-gray-800">Louvre Museum</h4>
                    <p className="text-gray-600">World's largest art museum with Mona Lisa</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">⛪</span>
                  <div>
                    <h4 className="font-bold text-gray-800">Seine River Cruise</h4>
                    <p className="text-gray-600">Scenic boat tours through the heart of Paris</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">⛪</span>
                  <div>
                    <h4 className="font-bold text-gray-800">Montmartre</h4>
                    <p className="text-gray-600">Artistic neighborhood with Sacré-Cœur Basilica</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Hotel Selection */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-emerald-100">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-2">
            <span>🏨</span>
            Select Your Hotel
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {hotels.map((hotel) => (
              <button
                key={hotel.id}
                onClick={() => setSelectedHotel(hotel.id)}
                className={`text-left p-6 rounded-2xl border-2 transition-all duration-300 ${
                  selectedHotel === hotel.id
                    ? 'border-emerald-500 bg-emerald-50 shadow-lg scale-105'
                    : 'border-gray-200 hover:border-emerald-300 hover:shadow-md'
                }`}
              >
                <div className="relative h-40 rounded-xl overflow-hidden mb-4">
                  <Image
                    src={hotel.image}
                    alt={hotel.name}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">{hotel.name}</h3>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-1">
                    <span className="text-yellow-500">★</span>
                    <span className="font-medium">{hotel.rating}</span>
                  </div>
                  <span className="text-xl font-bold text-emerald-600">${hotel.price}/night</span>
                </div>
                <p className="text-sm text-gray-600 mb-3">{hotel.description}</p>
                <div className="flex flex-wrap gap-2">
                  {hotel.amenities.map((amenity, index) => (
                    <span
                      key={index}
                      className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs"
                    >
                      {amenity}
                    </span>
                  ))}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Activities Selection */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-emerald-100">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-2">
            <span>🎯</span>
            Choose Your Activities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {activities.map((activity) => (
              <button
                key={activity.id}
                onClick={() => toggleActivity(activity.id)}
                className={`text-left p-6 rounded-2xl border-2 transition-all duration-300 ${
                  selectedActivities.includes(activity.id)
                    ? 'border-emerald-500 bg-emerald-50 shadow-lg scale-105'
                    : 'border-gray-200 hover:border-emerald-300 hover:shadow-md'
                }`}
              >
                <div className="relative h-32 rounded-xl overflow-hidden mb-4">
                  <Image
                    src={activity.image}
                    alt={activity.name}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">{activity.name}</h3>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-gray-600">{activity.duration}</span>
                  <span className="text-lg font-bold text-emerald-600">${activity.price}</span>
                </div>
                <p className="text-sm text-gray-600">{activity.description}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Booking Details */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-emerald-100">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <span>📅</span>
                Trip Details
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                  <label className="block text-sm font-medium text-gray-700 mb-2">Number of Travelers</label>
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

            <div className="bg-white rounded-2xl shadow-lg p-6 border border-emerald-100">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <span>ℹ️</span>
                Practical Information
              </h3>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="bg-blue-50 rounded-xl p-4">
                  <h4 className="font-bold text-blue-800 mb-2">Currency</h4>
                  <p className="text-blue-700">EUR (€)</p>
                </div>
                <div className="bg-green-50 rounded-xl p-4">
                  <h4 className="font-bold text-green-800 mb-2">Language</h4>
                  <p className="text-green-700">French</p>
                </div>
                <div className="bg-purple-50 rounded-xl p-4">
                  <h4 className="font-bold text-purple-800 mb-2">Timezone</h4>
                  <p className="text-purple-700">GMT+2</p>
                </div>
                <div className="bg-orange-50 rounded-xl p-4">
                  <h4 className="font-bold text-orange-800 mb-2">Climate</h4>
                  <p className="text-orange-700">Temperate</p>
                </div>
              </div>
            </div>
          </div>

          {/* Price Summary */}
          <div className="lg:col-span-1">
            <div className="bg-gradient-to-br from-emerald-600 to-teal-600 rounded-2xl shadow-lg p-6 text-white sticky top-24">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <span>💰</span>
                Price Summary
              </h3>
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span>Base Package:</span>
                  <span className="font-bold">$1,299</span>
                </div>
                <div className="flex justify-between">
                  <span>Hotel (5 nights):</span>
                  <span className="font-bold">${(selectedHotelData?.price || 0) * 5}</span>
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
                onClick={() => alert(`🎉 Paris trip booked! Total: $${calculateTotal()} for ${travelers} travelers`)}
                className="w-full bg-white text-emerald-600 px-6 py-4 rounded-xl font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
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

"use client";

import GlobeTrotterLogo from "../../components/GlobeTrotterLogo";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function DubaiBookingPage() {
  const [selectedDate, setSelectedDate] = useState("");
  const [travelers, setTravelers] = useState(2);
  const [selectedHotel, setSelectedHotel] = useState("burj");
  const [selectedActivities, setSelectedActivities] = useState<string[]>([]);

  const hotels = [
    {
      id: "burj",
      name: "Burj Al Arab Hotel",
      rating: 4.9,
      price: 599,
      image: "https://images.unsplash.com/photo-1512459970291-97a04000f6ea?w=600&h=400&fit=crop",
      amenities: ["Butler Service", "Private Beach", "Helicopter", "Multiple Restaurants"],
      description: "World's most luxurious hotel with iconic sail architecture"
    },
    {
      id: "marina",
      name: "Dubai Marina Resort",
      rating: 4.8,
      price: 329,
      image: "https://images.unsplash.com/photo-1512459970291-97a04000f6ea?w=600&h=400&fit=crop",
      amenities: ["Marina View", "Yacht Club", "Spa", "Infinity Pool"],
      description: "Modern resort with stunning Dubai Marina views"
    },
    {
      id: "downtown",
      name: "Downtown Dubai Hotel",
      rating: 4.7,
      price: 259,
      image: "https://images.unsplash.com/photo-1512459970291-97a04000f6ea?w=600&h=400&fit=crop",
      amenities: ["City View", "Shopping Access", "Metro Station", "Rooftop Bar"],
      description: "Luxury hotel in heart of Dubai's business district"
    }
  ];

  const activities = [
    {
      id: "burj",
      name: "Burj Khalifa Visit",
      price: 65,
      duration: "3 hours",
      image: "https://images.unsplash.com/photo-1512459970291-97a04000f6ea?w=400&h=300&fit=crop",
      description: "Visit world's tallest building with observation deck"
    },
    {
      id: "desert",
      name: "Desert Safari Adventure",
      price: 125,
      duration: "Full day",
      image: "https://images.unsplash.com/photo-1512459970291-97a04000f6ea?w=400&h=300&fit=crop",
      description: "Dune bashing, camel rides, and desert camp experience"
    },
    {
      id: "dubai",
      name: "Dubai Mall Shopping Tour",
      price: 85,
      duration: "4 hours",
      image: "https://images.unsplash.com/photo-1512459970291-97a04000f6ea?w=400&h=300&fit=crop",
      description: "Shop at world's largest mall with personal shopper"
    },
    {
      id: "marina",
      name: "Dubai Marina Dhow Cruise",
      price: 95,
      duration: "2 hours",
      image: "https://images.unsplash.com/photo-1512459970291-97a04000f6ea?w=400&h=300&fit=crop",
      description: "Traditional dhow cruise with dinner and entertainment"
    },
    {
      id: "fountain",
      name: "Dubai Fountain Show",
      price: 75,
      duration: "30 minutes",
      image: "https://images.unsplash.com/photo-1512459970291-97a04000f6ea?w=400&h=300&fit=crop",
      description: "Spectacular fountain and light show at Dubai Mall"
    },
    {
      id: "gold",
      name: "Gold Souk Experience",
      price: 55,
      duration: "3 hours",
      image: "https://images.unsplash.com/photo-1512459970291-97a04000f6ea?w=400&h=300&fit=crop",
      description: "Explore traditional gold market with guided shopping tour"
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
    const basePrice = 1899;
    const hotelCost = (selectedHotelData?.price || 0) * 5; // 5 nights
    const activitiesCost = selectedActivitiesData.reduce((sum, activity) => sum + activity.price, 0);
    return basePrice + hotelCost + activitiesCost;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
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
          src="https://images.unsplash.com/photo-1512459970291-97a04000f6ea?w=1600&h=600&fit=crop"
          alt="Dubai hero"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-amber-900/70 via-amber-800/40 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-4">
              <span className="text-4xl">🏙️</span>
              <div>
                <h1 className="text-4xl md:text-5xl font-black mb-2">Dubai, UAE</h1>
                <p className="text-xl text-amber-300">City of Gold</p>
              </div>
            </div>
            <div className="flex items-center gap-6 text-lg">
              <div className="flex items-center gap-2">
                <span className="text-yellow-400 text-2xl">★</span>
                <span className="font-bold">4.9</span>
                <span className="text-white/80">(3,156 reviews)</span>
              </div>
              <div className="bg-amber-600 px-4 py-2 rounded-full">
                <span className="text-2xl font-bold">From $1,899</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* About Dubai */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-amber-100">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-2">
            <span>🌍</span>
            About Dubai
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Dubai, the jewel of the UAE, is a futuristic metropolis known for its record-breaking skyscrapers, 
                luxury shopping, world-class dining, and innovative architecture. This desert oasis offers 
                unparalleled luxury experiences from the world's tallest building to man-made islands and 
                extravagant shopping malls.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-amber-50 rounded-xl p-4">
                  <h4 className="font-bold text-amber-800 mb-2">Best Time to Visit</h4>
                  <p className="text-amber-700">Nov - Mar, Apr - May</p>
                </div>
                <div className="bg-orange-50 rounded-xl p-4">
                  <h4 className="font-bold text-orange-800 mb-2">Average Temperature</h4>
                  <p className="text-orange-700">20°C - 38°C</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Top Highlights</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🏗️</span>
                  <div>
                    <h4 className="font-bold text-gray-800">Burj Khalifa</h4>
                    <p className="text-gray-600">World's tallest building at 828m</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🏪</span>
                  <div>
                    <h4 className="font-bold text-gray-800">Dubai Mall</h4>
                    <p className="text-gray-600">World's largest shopping mall</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🏖️</span>
                  <div>
                    <h4 className="font-bold text-gray-800">Palm Jumeirah</h4>
                    <p className="text-gray-600">Iconic palm-shaped island resort</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🏜</span>
                  <div>
                    <h4 className="font-bold text-gray-800">Desert Safari</h4>
                    <p className="text-gray-600">Dune bashing and camel adventures</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Hotel Selection */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-amber-100">
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
                    ? 'border-amber-500 bg-amber-50 shadow-lg scale-105'
                    : 'border-gray-200 hover:border-amber-300 hover:shadow-md'
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
                  <span className="text-xl font-bold text-amber-600">${hotel.price}/night</span>
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
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-amber-100">
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
                    ? 'border-amber-500 bg-amber-50 shadow-lg scale-105'
                    : 'border-gray-200 hover:border-amber-300 hover:shadow-md'
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
                  <span className="text-lg font-bold text-amber-600">${activity.price}</span>
                </div>
                <p className="text-sm text-gray-600">{activity.description}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Booking Details */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-amber-100">
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
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 focus:ring-2 focus:ring-amber-500 focus:border-transparent"
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
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6 border border-amber-100">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <span>ℹ️</span>
                Practical Information
              </h3>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="bg-amber-50 rounded-xl p-4">
                  <h4 className="font-bold text-amber-800 mb-2">Currency</h4>
                  <p className="text-amber-700">AED (د.إ)</p>
                </div>
                <div className="bg-green-50 rounded-xl p-4">
                  <h4 className="font-bold text-green-800 mb-2">Language</h4>
                  <p className="text-green-700">English, Arabic</p>
                </div>
                <div className="bg-purple-50 rounded-xl p-4">
                  <h4 className="font-bold text-purple-800 mb-2">Timezone</h4>
                  <p className="text-purple-700">GMT+4</p>
                </div>
                <div className="bg-orange-50 rounded-xl p-4">
                  <h4 className="font-bold text-orange-800 mb-2">Climate</h4>
                  <p className="text-orange-700">Desert</p>
                </div>
              </div>
            </div>
          </div>

          {/* Price Summary */}
          <div className="lg:col-span-1">
            <div className="bg-gradient-to-br from-amber-600 to-orange-600 rounded-2xl shadow-lg p-6 text-white sticky top-24">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <span>💰</span>
                Price Summary
              </h3>
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span>Base Package:</span>
                  <span className="font-bold">$1,899</span>
                </div>
                <div className="flex justify-between">
                  <span>Hotel (5 nights):</span>
                  <span className="font-bold">${(selectedHotelData?.price || 0) * 5}</span>
                </div>
                <div className="flex justify-between">
                  <span>Activities:</span>
                  <span className="font-bold">${selectedActivitiesData.reduce((sum, a) => sum + a.price, 0)}</span>
                </div>
                <div className="border-t border-amber-400 pt-3 flex justify-between">
                  <span className="text-lg font-bold">Total:</span>
                  <span className="text-2xl font-bold">${calculateTotal()}</span>
                </div>
              </div>
              <button 
                onClick={() => alert(`🏙️ Dubai trip booked! Total: $${calculateTotal()} for ${travelers} travelers`)}
                className="w-full bg-white text-amber-600 px-6 py-4 rounded-xl font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
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

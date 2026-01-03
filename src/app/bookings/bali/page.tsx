"use client";

import GlobeTrotterLogo from "../../components/GlobeTrotterLogo";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function BaliBookingPage() {
  const [selectedDate, setSelectedDate] = useState("");
  const [travelers, setTravelers] = useState(2);
  const [selectedHotel, setSelectedHotel] = useState("beachfront");
  const [selectedActivities, setSelectedActivities] = useState<string[]>([]);

  const hotels = [
    {
      id: "beachfront",
      name: "Nusa Dua Beach Resort",
      rating: 4.9,
      price: 189,
      image: "https://images.unsplash.com/photo-1571003123894-1f05e4d23d2b?w=600&h=400&fit=crop",
      amenities: ["Beach Access", "Spa", "Pool", "Restaurant", "Bar"],
      description: "Luxury beachfront resort with pristine white sand beach"
    },
    {
      id: "jungle",
      name: "Ubud Jungle Villa",
      rating: 4.8,
      price: 149,
      image: "https://images.unsplash.com/photo-1537956150983-4db2c5a4a6d9?w=600&h=400&fit=crop",
      amenities: ["Jungle View", "Private Pool", "Yoga Deck", "Spa"],
      description: "Serene jungle retreat surrounded by tropical rainforest"
    },
    {
      id: "budget",
      name: "Seminyak Guest House",
      rating: 4.6,
      price: 89,
      image: "https://images.unsplash.com/photo-1537956150983-4db2c5a4a6d9?w=600&h=400&fit=crop",
      amenities: ["WiFi", "Breakfast", "Garden", "Bike Rental"],
      description: "Affordable guest house near popular beaches and cafes"
    }
  ];

  const activities = [
    {
      id: "temple",
      name: "Tanah Lot Temple Tour",
      price: 45,
      duration: "4 hours",
      image: "https://images.unsplash.com/photo-1516426122078-c23e763198a8?w=400&h=300&fit=crop",
      description: "Visit iconic sea temple and witness spectacular sunset"
    },
    {
      id: "rice",
      name: "Tegallalang Rice Terraces",
      price: 55,
      duration: "Half day",
      image: "https://images.unsplash.com/photo-1537956150983-4db2c5a4a6d9?w=400&h=300&fit=crop",
      description: "Explore stunning ancient rice terraces with local guide"
    },
    {
      id: "surfing",
      name: "Surfing Lessons",
      price: 65,
      duration: "3 hours",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=300&fit=crop",
      description: "Professional surfing lessons for all skill levels"
    },
    {
      id: "spa",
      name: "Traditional Balinese Spa",
      price: 85,
      duration: "2 hours",
      image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=400&h=300&fit=crop",
      description: "Authentic Balinese massage and spa treatments"
    },
    {
      id: "volcano",
      name: "Mount Batur Sunrise Trek",
      price: 75,
      duration: "Full day",
      image: "https://images.unsplash.com/photo-1537956150983-4db2c5a4a6d9?w=400&h=300&fit=crop",
      description: "Overnight trek to witness spectacular sunrise from volcano summit"
    },
    {
      id: "snorkeling",
      name: "Blue Lagoon Snorkeling",
      price: 95,
      duration: "4 hours",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=300&fit=crop",
      description: "Discover vibrant marine life in crystal clear waters"
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
    const basePrice = 899;
    const hotelCost = (selectedHotelData?.price || 0) * 7; // 7 nights
    const activitiesCost = selectedActivitiesData.reduce((sum, activity) => sum + activity.price, 0);
    return basePrice + hotelCost + activitiesCost;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
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
          src="https://images.unsplash.com/photo-1537956150983-4db2c5a4a6d9?w=1600&h=600&fit=crop"
          alt="Bali hero"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 via-blue-800/40 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-4">
              <span className="text-4xl">🏝️</span>
              <div>
                <h1 className="text-4xl md:text-5xl font-black mb-2">Bali, Indonesia</h1>
                <p className="text-xl text-blue-300">Tropical Paradise Island</p>
              </div>
            </div>
            <div className="flex items-center gap-6 text-lg">
              <div className="flex items-center gap-2">
                <span className="text-yellow-400 text-2xl">★</span>
                <span className="font-bold">4.9</span>
                <span className="text-white/80">(3,156 reviews)</span>
              </div>
              <div className="bg-blue-600 px-4 py-2 rounded-full">
                <span className="text-2xl font-bold">From $899</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* About Bali */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-blue-100">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-2">
            <span>🌍</span>
            About Bali
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Bali, known as the Island of the Gods, is a tropical paradise that captivates visitors with its 
                stunning beaches, ancient temples, terraced rice paddies, and vibrant culture. This Indonesian 
                island offers a perfect blend of relaxation, adventure, and spiritual experiences that make it 
                one of the world's most sought-after destinations.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-green-50 rounded-xl p-4">
                  <h4 className="font-bold text-green-800 mb-2">Best Time to Visit</h4>
                  <p className="text-green-700">April - October</p>
                </div>
                <div className="bg-orange-50 rounded-xl p-4">
                  <h4 className="font-bold text-orange-800 mb-2">Average Temperature</h4>
                  <p className="text-orange-700">26°C - 30°C</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Top Highlights</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🏖️</span>
                  <div>
                    <h4 className="font-bold text-gray-800">Pristine Beaches</h4>
                    <p className="text-gray-600">White sand beaches with crystal-clear turquoise waters</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🛕</span>
                  <div>
                    <h4 className="font-bold text-gray-800">Ancient Temples</h4>
                    <p className="text-gray-600">Sacred Hindu temples with stunning architecture</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🌾</span>
                  <div>
                    <h4 className="font-bold text-gray-800">Rice Terraces</h4>
                    <p className="text-gray-600">Ancient terraced rice fields with breathtaking views</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🌺</span>
                  <div>
                    <h4 className="font-bold text-gray-800">Rich Culture</h4>
                    <p className="text-gray-600">Traditional dances, ceremonies, and warm hospitality</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Hotel Selection */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-blue-100">
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
                    ? 'border-blue-500 bg-blue-50 shadow-lg scale-105'
                    : 'border-gray-200 hover:border-blue-300 hover:shadow-md'
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
                  <span className="text-xl font-bold text-blue-600">${hotel.price}/night</span>
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
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-blue-100">
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
                    ? 'border-blue-500 bg-blue-50 shadow-lg scale-105'
                    : 'border-gray-200 hover:border-blue-300 hover:shadow-md'
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
                  <span className="text-lg font-bold text-blue-600">${activity.price}</span>
                </div>
                <p className="text-sm text-gray-600">{activity.description}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Booking Details */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-blue-100">
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
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6 border border-blue-100">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <span>ℹ️</span>
                Practical Information
              </h3>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="bg-blue-50 rounded-xl p-4">
                  <h4 className="font-bold text-blue-800 mb-2">Currency</h4>
                  <p className="text-blue-700">IDR (Rp)</p>
                </div>
                <div className="bg-green-50 rounded-xl p-4">
                  <h4 className="font-bold text-green-800 mb-2">Language</h4>
                  <p className="text-green-700">Indonesian, Balinese</p>
                </div>
                <div className="bg-purple-50 rounded-xl p-4">
                  <h4 className="font-bold text-purple-800 mb-2">Timezone</h4>
                  <p className="text-purple-700">GMT+8</p>
                </div>
                <div className="bg-orange-50 rounded-xl p-4">
                  <h4 className="font-bold text-orange-800 mb-2">Climate</h4>
                  <p className="text-orange-700">Tropical</p>
                </div>
              </div>
            </div>
          </div>

          {/* Price Summary */}
          <div className="lg:col-span-1">
            <div className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl shadow-lg p-6 text-white sticky top-24">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <span>💰</span>
                Price Summary
              </h3>
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span>Base Package:</span>
                  <span className="font-bold">$899</span>
                </div>
                <div className="flex justify-between">
                  <span>Hotel (7 nights):</span>
                  <span className="font-bold">${(selectedHotelData?.price || 0) * 7}</span>
                </div>
                <div className="flex justify-between">
                  <span>Activities:</span>
                  <span className="font-bold">${selectedActivitiesData.reduce((sum, a) => sum + a.price, 0)}</span>
                </div>
                <div className="border-t border-blue-400 pt-3 flex justify-between">
                  <span className="text-lg font-bold">Total:</span>
                  <span className="text-2xl font-bold">${calculateTotal()}</span>
                </div>
              </div>
              <button 
                onClick={() => alert(`🏝️ Bali trip booked! Total: $${calculateTotal()} for ${travelers} travelers`)}
                className="w-full bg-white text-blue-600 px-6 py-4 rounded-xl font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
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

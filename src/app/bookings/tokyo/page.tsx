"use client";

import GlobeTrotterLogo from "../../components/GlobeTrotterLogo";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function TokyoBookingPage() {
  const [selectedDate, setSelectedDate] = useState("");
  const [travelers, setTravelers] = useState(2);
  const [selectedHotel, setSelectedHotel] = useState("modern");
  const [selectedActivities, setSelectedActivities] = useState<string[]>([]);

  const hotels = [
    {
      id: "modern",
      name: "Shibuya Sky Hotel",
      rating: 4.8,
      price: 259,
      image: "https://images.unsplash.com/photo-1493976040374-85c8e9962cd9?w=600&h=400&fit=crop",
      amenities: ["City View", "Rooftop Bar", "Spa", "Fitness", "Restaurant"],
      description: "Ultra-modern hotel in heart of vibrant Shibuya district"
    },
    {
      id: "traditional",
      name: "Asakusa Ryokan",
      rating: 4.7,
      price: 189,
      image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=600&h=400&fit=crop",
      amenities: ["Traditional", "Onsen", "Garden", "Tea Ceremony", "Kaiseki Dining"],
      description: "Authentic Japanese inn with traditional architecture and hot springs"
    },
    {
      id: "business",
      name: "Ginza Business Hotel",
      rating: 4.6,
      price: 149,
      image: "https://images.unsplash.com/photo-1549149985-0b4d3c5e5c9?w=600&h=400&fit=crop",
      amenities: ["Business Center", "Meeting Rooms", "High-Speed WiFi", "Concierge"],
      description: "Modern business hotel in prestigious Ginza shopping district"
    }
  ];

  const activities = [
    {
      id: "fuji",
      name: "Mount Fuji Day Trip",
      price: 125,
      duration: "Full day",
      image: "https://images.unsplash.com/photo-1490806844555-bc46e8b14f86?w=400&h=300&fit=crop",
      description: "Day trip to Japan's sacred mountain with guided climb"
    },
    {
      id: "temple",
      name: "Senso-ji Temple Tour",
      price: 45,
      duration: "3 hours",
      image: "https://images.unsplash.com/photo-1493976040374-85c8e9962cd9?w=400&h=300&fit=crop",
      description: "Guided tour of Tokyo's oldest and most famous temple"
    },
    {
      id: "sushi",
      name: "Tsukiji Sushi Experience",
      price: 95,
      duration: "4 hours",
      image: "https://images.unsplash.com/photo-1566472267474-352b94d5ad8?w=400&h=300&fit=crop",
      description: "Early morning visit to fish market followed by sushi making class"
    },
    {
      id: "anime",
      name: "Akihabara Anime District",
      price: 65,
      duration: "Half day",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
      description: "Explore the electric town of anime, manga, and electronics"
    },
    {
      id: "cherry",
      name: "Cherry Blossom Viewing",
      price: 55,
      duration: "3 hours",
      image: "https://images.unsplash.com/photo-1522365423374-3da675b90c47?w=400&h=300&fit=crop",
      description: "Hanami party in Ueno Park during cherry blossom season"
    },
    {
      id: "robot",
      name: "Robot Restaurant Show",
      price: 85,
      duration: "2 hours",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
      description: "Futuristic dining experience with robot entertainment show"
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
    const basePrice = 1599;
    const hotelCost = (selectedHotelData?.price || 0) * 6; // 6 nights
    const activitiesCost = selectedActivitiesData.reduce((sum, activity) => sum + activity.price, 0);
    return basePrice + hotelCost + activitiesCost;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
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
          src="https://images.unsplash.com/photo-1493976040374-85c8e9962cd9?w=1600&h=600&fit=crop"
          alt="Tokyo hero"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-pink-900/70 via-pink-800/40 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-4">
              <span className="text-4xl">🗾</span>
              <div>
                <h1 className="text-4xl md:text-5xl font-black mb-2">Tokyo, Japan</h1>
                <p className="text-xl text-pink-300">Modern Metropolis</p>
              </div>
            </div>
            <div className="flex items-center gap-6 text-lg">
              <div className="flex items-center gap-2">
                <span className="text-yellow-400 text-2xl">★</span>
                <span className="font-bold">4.7</span>
                <span className="text-white/80">(2,456 reviews)</span>
              </div>
              <div className="bg-pink-600 px-4 py-2 rounded-full">
                <span className="text-2xl font-bold">From $1,599</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* About Tokyo */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-pink-100">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-2">
            <span>🌍</span>
            About Tokyo
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Tokyo, Japan's bustling capital, is a mesmerizing blend of ultra-modern technology and 
                traditional culture. This vibrant metropolis offers everything from ancient temples and gardens 
                to neon-lit skyscrapers, cutting-edge fashion, and world-renowned cuisine, creating 
                an unforgettable urban adventure.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-pink-50 rounded-xl p-4">
                  <h4 className="font-bold text-pink-800 mb-2">Best Time to Visit</h4>
                  <p className="text-pink-700">March - May, Oct - Nov</p>
                </div>
                <div className="bg-purple-50 rounded-xl p-4">
                  <h4 className="font-bold text-purple-800 mb-2">Average Temperature</h4>
                  <p className="text-purple-700">5°C - 27°C</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Top Highlights</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🗼</span>
                  <div>
                    <h4 className="font-bold text-gray-800">Senso-ji Temple</h4>
                    <p className="text-gray-600">Ancient Buddhist temple with traditional architecture</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🌸</span>
                  <div>
                    <h4 className="font-bold text-gray-800">Cherry Blossoms</h4>
                    <p className="text-gray-600">Beautiful sakura viewing in spring season</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🏙️</span>
                  <div>
                    <h4 className="font-bold text-gray-800">Shibuya Crossing</h4>
                    <p className="text-gray-600">World's busiest pedestrian crossing</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🍱</span>
                  <div>
                    <h4 className="font-bold text-gray-800">Mount Fuji</h4>
                    <p className="text-gray-600">Japan's sacred mountain, day trip away</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Hotel Selection */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-pink-100">
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
                    ? 'border-pink-500 bg-pink-50 shadow-lg scale-105'
                    : 'border-gray-200 hover:border-pink-300 hover:shadow-md'
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
                  <span className="text-xl font-bold text-pink-600">${hotel.price}/night</span>
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
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-pink-100">
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
                    ? 'border-pink-500 bg-pink-50 shadow-lg scale-105'
                    : 'border-gray-200 hover:border-pink-300 hover:shadow-md'
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
                  <span className="text-lg font-bold text-pink-600">${activity.price}</span>
                </div>
                <p className="text-sm text-gray-600">{activity.description}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Booking Details */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-pink-100">
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
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 focus:ring-2 focus:ring-pink-500 focus:border-transparent"
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
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6 border border-pink-100">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <span>ℹ️</span>
                Practical Information
              </h3>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="bg-pink-50 rounded-xl p-4">
                  <h4 className="font-bold text-pink-800 mb-2">Currency</h4>
                  <p className="text-pink-700">JPY (¥)</p>
                </div>
                <div className="bg-green-50 rounded-xl p-4">
                  <h4 className="font-bold text-green-800 mb-2">Language</h4>
                  <p className="text-green-700">Japanese</p>
                </div>
                <div className="bg-purple-50 rounded-xl p-4">
                  <h4 className="font-bold text-purple-800 mb-2">Timezone</h4>
                  <p className="text-purple-700">GMT+9</p>
                </div>
                <div className="bg-orange-50 rounded-xl p-4">
                  <h4 className="font-bold text-orange-800 mb-2">Climate</h4>
                  <p className="text-orange-700">Humid Subtropical</p>
                </div>
              </div>
            </div>
          </div>

          {/* Price Summary */}
          <div className="lg:col-span-1">
            <div className="bg-gradient-to-br from-pink-600 to-purple-600 rounded-2xl shadow-lg p-6 text-white sticky top-24">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <span>💰</span>
                Price Summary
              </h3>
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span>Base Package:</span>
                  <span className="font-bold">$1,599</span>
                </div>
                <div className="flex justify-between">
                  <span>Hotel (6 nights):</span>
                  <span className="font-bold">${(selectedHotelData?.price || 0) * 6}</span>
                </div>
                <div className="flex justify-between">
                  <span>Activities:</span>
                  <span className="font-bold">${selectedActivitiesData.reduce((sum, a) => sum + a.price, 0)}</span>
                </div>
                <div className="border-t border-pink-400 pt-3 flex justify-between">
                  <span className="text-lg font-bold">Total:</span>
                  <span className="text-2xl font-bold">${calculateTotal()}</span>
                </div>
              </div>
              <button 
                onClick={() => alert(`🗾️ Tokyo trip booked! Total: $${calculateTotal()} for ${travelers} travelers`)}
                className="w-full bg-white text-pink-600 px-6 py-4 rounded-xl font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
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

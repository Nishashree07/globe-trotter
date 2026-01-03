"use client";

import GlobeTrotterLogo from "../../components/GlobeTrotterLogo";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function FlightBookingPage() {
  const [passengers, setPassengers] = useState(1);
  const [selectedSeat, setSelectedSeat] = useState("economy");
  const [baggage, setBaggage] = useState("standard");
  const [meal, setMeal] = useState("standard");
  const [insurance, setInsurance] = useState(false);

  const flightData = {
    airline: "Emirates",
    flightNumber: "EK456",
    from: "LAX",
    to: "DXB",
    departure: "14:20",
    arrival: "19:30+1",
    price: 899,
    duration: "14h 10m",
    stops: 0,
    aircraft: "Airbus A380",
    image: "https://images.unsplash.com/photo-1511795409834-efcbb730f98c?w=600&h=400&fit=crop",
  };

  const calculateTotal = () => {
    let total = flightData.price * passengers;
    
    // Seat class pricing
    if (selectedSeat === "premium") total *= 1.5;
    if (selectedSeat === "business") total *= 2.5;
    
    // Baggage fees
    if (baggage === "extra") total += 50 * passengers;
    if (baggage === "premium") total += 100 * passengers;
    
    // Meal upgrades
    if (meal === "premium") total += 30 * passengers;
    
    // Insurance
    if (insurance) total += 25 * passengers;
    
    return total;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-700">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-pink-400 rounded-full opacity-30 blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-yellow-400 rounded-full opacity-30 blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-400 rounded-full opacity-20 blur-3xl animate-pulse"></div>
        <div className="absolute top-20 right-20 w-60 h-60 bg-orange-400 rounded-full opacity-25 blur-2xl animate-bounce"></div>
        <div className="absolute bottom-20 left-20 w-60 h-60 bg-green-400 rounded-full opacity-25 blur-2xl animate-bounce"></div>
      </div>
      <nav className="sticky top-0 z-50 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 backdrop-blur-lg border-b border-purple-300/50 shadow-2xl shadow-purple-500/20">
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
              <Link href="/bookings" className="relative text-white/90 hover:text-white transition-colors duration-200 px-4 py-2 rounded-xl hover:bg-white/20 hover:scale-105">
                Browse
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200" />
              </Link>
              <Link href="/hotels" className="relative text-white/90 hover:text-white transition-colors duration-200 px-4 py-2 rounded-xl hover:bg-white/20 hover:scale-105">
                Hotels
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200" />
              </Link>
              <Link href="/flights" className="relative text-white font-semibold transition-colors duration-200 px-4 py-2 rounded-xl bg-white/20 hover:bg-white/30 hover:scale-105">
                Flights
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200" />
              </Link>
              <Link href="/profile" className="relative text-white/90 hover:text-white transition-colors duration-200 px-4 py-2 rounded-xl hover:bg-white/20 hover:scale-105">
                Profile
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200" />
              </Link>
              <Link href="/login-simple" className="relative text-white/90 hover:text-white transition-colors duration-200 px-4 py-2 rounded-xl hover:bg-white/20 hover:scale-105">
                Login
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200" />
              </Link>
              <Link href="/signup-simple" className="relative bg-white text-purple-600 px-4 py-2 rounded-xl font-semibold hover:bg-purple-50 hover:scale-105 transition-all duration-200">
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Flight Summary Card */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 mb-8 text-white shadow-2xl shadow-purple-500/20">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="relative w-full lg:w-1/3 h-48 lg:h-32 rounded-xl overflow-hidden">
              <Image
                src={flightData.image}
                alt={flightData.airline}
                fill
                className="object-cover"
              />
            </div>
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-3xl font-bold mb-2">{flightData.airline} {flightData.flightNumber}</h1>
              <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-8">
                <div className="flex items-center gap-4">
                  <div>
                    <p className="text-2xl font-bold">{flightData.from}</p>
                    <p className="text-purple-100">{flightData.departure}</p>
                  </div>
                  <div className="text-purple-200">✈️</div>
                  <div>
                    <p className="text-2xl font-bold">{flightData.to}</p>
                    <p className="text-purple-100">{flightData.arrival}</p>
                  </div>
                </div>
                <div className="flex items-center gap-6 text-sm">
                  <span className="bg-white/20 px-3 py-1 rounded-full">{flightData.duration}</span>
                  <span className="bg-white/20 px-3 py-1 rounded-full">{flightData.aircraft}</span>
                  <span className="bg-white/20 px-3 py-1 rounded-full">Nonstop</span>
                </div>
              </div>
            </div>
            <div className="text-center lg:text-right">
              <p className="text-4xl font-bold">${flightData.price}</p>
              <p className="text-purple-100">per person</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Booking Form */}
          <div className="lg:col-span-2 space-y-6">
            {/* Passenger Details */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg shadow-purple-500/20 p-6 border border-purple-200/50">
              <h2 className="text-2xl font-bold text-purple-900 mb-6 flex items-center gap-2">
                <span>👥</span>
                Passenger Details
              </h2>
              
              <div className="mb-6">
                <label className="block text-sm font-medium text-purple-700 mb-2">Number of Passengers</label>
                <select
                  value={passengers}
                  onChange={(e) => setPassengers(Number(e.target.value))}
                  className="w-full rounded-lg border border-purple-200/50 bg-white/90 backdrop-blur-sm px-4 py-3 text-purple-900 focus:ring-2 focus:ring-purple-500/50 shadow-md shadow-purple-500/20"
                >
                  <option value={1}>1 Passenger</option>
                  <option value={2}>2 Passengers</option>
                  <option value={3}>3 Passengers</option>
                  <option value={4}>4 Passengers</option>
                  <option value={5}>5 Passengers</option>
                </select>
              </div>

              {Array.from({ length: passengers }, (_, index) => (
                <div key={index} className="space-y-4 mb-6 p-4 bg-purple-50/50 backdrop-blur-sm rounded-xl border border-purple-200/50">
                  <h3 className="font-semibold text-purple-900">Passenger {index + 1}</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                      <input
                        type="text"
                        placeholder="Enter first name"
                        className="w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-900 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                      <input
                        type="text"
                        placeholder="Enter last name"
                        className="w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-900 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                      <input
                        type="email"
                        placeholder="Enter email"
                        className="w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-900 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                      <input
                        type="tel"
                        placeholder="Enter phone number"
                        className="w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-900 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Seat Selection */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                <span>✈️</span>
                Seat Class
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { id: "economy", name: "Economy", price: flightData.price, description: "Standard comfort" },
                  { id: "premium", name: "Premium Economy", price: flightData.price * 1.5, description: "Extra legroom & comfort" },
                  { id: "business", name: "Business", price: flightData.price * 2.5, description: "Luxury & privacy" },
                ].map((seat) => (
                  <div
                    key={seat.id}
                    onClick={() => setSelectedSeat(seat.id)}
                    className={`relative p-4 rounded-xl border-2 cursor-pointer transition-all ${
                      selectedSeat === seat.id
                        ? "border-emerald-500 bg-emerald-50"
                        : "border-gray-200 hover:border-emerald-300"
                    }`}
                  >
                    <div className="text-center">
                      <h3 className="font-semibold text-gray-900">{seat.name}</h3>
                      <p className="text-2xl font-bold text-emerald-600 my-2">${Math.round(seat.price)}</p>
                      <p className="text-sm text-gray-600">{seat.description}</p>
                    </div>
                    {selectedSeat === seat.id && (
                      <div className="absolute top-2 right-2 w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs">✓</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Additional Services */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                <span>🎒</span>
                Additional Services
              </h2>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Baggage Allowance</label>
                  <select
                    value={baggage}
                    onChange={(e) => setBaggage(e.target.value)}
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  >
                    <option value="standard">Standard (1 bag included)</option>
                    <option value="extra">Extra (+$50) - 2 bags</option>
                    <option value="premium">Premium (+$100) - 3 bags + priority</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Meal Preference</label>
                  <select
                    value={meal}
                    onChange={(e) => setMeal(e.target.value)}
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  >
                    <option value="standard">Standard Meal (included)</option>
                    <option value="premium">Premium Meal (+$30) - Gourmet options</option>
                  </select>
                </div>

                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                  <div>
                    <h3 className="font-semibold text-gray-900">Travel Insurance</h3>
                    <p className="text-sm text-gray-600">Coverage for cancellations & emergencies</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-600">+$25/passenger</span>
                    <input
                      type="checkbox"
                      checked={insurance}
                      onChange={(e) => setInsurance(e.target.checked)}
                      className="w-5 h-5 text-emerald-600 rounded focus:ring-emerald-500"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Price Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-24">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Price Summary</h2>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-gray-600">
                  <span>Base Fare ({passengers} passengers)</span>
                  <span>${flightData.price * passengers}</span>
                </div>
                
                {selectedSeat !== "economy" && (
                  <div className="flex justify-between text-gray-600">
                    <span>Seat Upgrade</span>
                    <span>+${Math.round((flightData.price * (selectedSeat === "premium" ? 0.5 : 1.5)) * passengers)}</span>
                  </div>
                )}
                
                {baggage !== "standard" && (
                  <div className="flex justify-between text-gray-600">
                    <span>Extra Baggage</span>
                    <span>+${(baggage === "extra" ? 50 : 100) * passengers}</span>
                  </div>
                )}
                
                {meal === "premium" && (
                  <div className="flex justify-between text-gray-600">
                    <span>Premium Meals</span>
                    <span>+${30 * passengers}</span>
                  </div>
                )}
                
                {insurance && (
                  <div className="flex justify-between text-gray-600">
                    <span>Travel Insurance</span>
                    <span>+${25 * passengers}</span>
                  </div>
                )}
                
                <div className="border-t pt-3">
                  <div className="flex justify-between text-xl font-bold text-gray-900">
                    <span>Total</span>
                    <span className="text-emerald-600">${Math.round(calculateTotal())}</span>
                  </div>
                </div>
              </div>

              <button className="w-full bg-gradient-to-r from-emerald-600 to-emerald-700 text-white px-6 py-4 rounded-xl font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                Complete Booking
              </button>
              
              <p className="text-xs text-gray-500 text-center mt-4">
                By completing this booking, you agree to our terms and conditions
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";

import GlobeTrotterLogo from "../components/GlobeTrotterLogo";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function FlightsPage() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [date, setDate] = useState("");
  const [tripType, setTripType] = useState<"roundtrip" | "oneway">("roundtrip");
  const [passengers, setPassengers] = useState(1);

  const mockFlights = [
    {
      id: "1",
      airline: "Air France",
      flightNumber: "AF123",
      from: "JFK",
      to: "CDG",
      departure: "08:30",
      arrival: "21:45",
      price: 689,
      duration: "7h 15m",
      stops: 0,
      aircraft: "Boeing 777",
      image: "https://images.unsplash.com/photo-1436491865336-ee80a2a68663?w=600&h=400&fit=crop",
    },
    {
      id: "2",
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
    },
    {
      id: "3",
      airline: "Japan Airlines",
      flightNumber: "JL789",
      from: "SFO",
      to: "NRT",
      departure: "11:00",
      arrival: "15:30+1",
      price: 749,
      duration: "11h 30m",
      stops: 0,
      aircraft: "Boeing 787",
      image: "https://images.unsplash.com/photo-1542202229-7d93c33f5d12?w=600&h=400&fit=crop",
    },
    {
      id: "4",
      airline: "Delta",
      flightNumber: "DL234",
      from: "ATL",
      to: "LHR",
      departure: "22:30",
      arrival: "10:15+1",
      price: 569,
      duration: "7h 45m",
      stops: 0,
      aircraft: "Boeing 767",
      image: "https://images.unsplash.com/photo-1522819633858-37d9f9c7fc68?w=600&h=400&fit=crop",
    },
    {
      id: "5",
      airline: "Qatar Airways",
      flightNumber: "QR567",
      from: "DOH",
      to: "BKK",
      departure: "02:45",
      arrival: "13:20",
      price: 429,
      duration: "6h 35m",
      stops: 0,
      aircraft: "Boeing 777",
      image: "https://images.unsplash.com/photo-1517248135467-4c8ed12b4d01?w=600&h=400&fit=crop",
    },
    {
      id: "6",
      airline: "British Airways",
      flightNumber: "BA890",
      from: "LHR",
      to: "JFK",
      departure: "09:15",
      arrival: "12:30",
      price: 789,
      duration: "8h 15m",
      stops: 0,
      aircraft: "Airbus A350",
      image: "https://images.unsplash.com/photo-1514376408952-6b9b61acee7a?w=600&h=400&fit=crop",
    },
  ];

  const filtered = mockFlights.filter((flight) => {
    const matchesFrom = !from || flight.from.toLowerCase().includes(from.toLowerCase());
    const matchesTo = !to || flight.to.toLowerCase().includes(to.toLowerCase());
    return matchesFrom && matchesTo;
  });

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
        <div className="mb-8">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">Search Flights Worldwide</h1>
          <p className="text-lg text-white/90">Find the best deals on international and domestic flights</p>
        </div>

        <div className="rounded-xl border border-purple-200/50 bg-white/90 backdrop-blur-sm p-6 mb-8 shadow-lg shadow-purple-500/20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-purple-700 mb-1">From</label>
              <input
                type="text"
                placeholder="City or airport"
                className="w-full rounded-lg border border-purple-200/50 bg-white/90 backdrop-blur-sm px-3 py-2 text-sm text-purple-900 focus:ring-2 focus:ring-purple-500/50 shadow-md shadow-purple-500/20"
                value={from}
                onChange={(e) => setFrom(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-purple-700 mb-1">To</label>
              <input
                type="text"
                placeholder="City or airport"
                className="w-full rounded-lg border border-purple-200/50 bg-white/90 backdrop-blur-sm px-3 py-2 text-sm text-purple-900 focus:ring-2 focus:ring-purple-500/50 shadow-md shadow-purple-500/20"
                value={to}
                onChange={(e) => setTo(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-purple-700 mb-1">Date</label>
              <input
                type="date"
                className="w-full rounded-lg border border-purple-200/50 bg-white/90 backdrop-blur-sm px-3 py-2 text-sm text-purple-900 focus:ring-2 focus:ring-purple-500/50 shadow-md shadow-purple-500/20"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-purple-700 mb-1">Trip Type</label>
              <select
                className="w-full rounded-lg border border-purple-200/50 bg-white/90 backdrop-blur-sm px-3 py-2 text-sm text-purple-900 focus:ring-2 focus:ring-purple-500/50 shadow-md shadow-purple-500/20"
                value={tripType}
                onChange={(e) => setTripType(e.target.value as "roundtrip" | "oneway")}
              >
                <option value="roundtrip">Round-trip</option>
                <option value="oneway">One-way</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-purple-700 mb-1">Passengers</label>
              <input
                type="number"
                min={1}
                max={9}
                className="w-full rounded-lg border border-purple-200/50 bg-white/90 backdrop-blur-sm px-3 py-2 text-sm text-purple-900 focus:ring-2 focus:ring-purple-500/50 shadow-md shadow-purple-500/20"
                value={passengers}
                onChange={(e) => setPassengers(Number(e.target.value))}
              />
            </div>
          </div>
          <button 
            onClick={() => alert('Searching flights...')}
            className="w-full rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 px-4 py-3 text-sm font-semibold text-white transition-all duration-200 hover:from-purple-700 hover:to-pink-700 shadow-lg shadow-purple-500/25"
          >
            Search Flights
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filtered.map((flight) => (
            <div key={flight.id} className="group rounded-xl overflow-hidden bg-white/90 backdrop-blur-sm shadow-lg shadow-purple-500/20 transition-all hover:shadow-xl hover:shadow-purple-500/30 border border-purple-200/50">
              <div className="aspect-[16/9] overflow-hidden">
                <Image
                  src={flight.image}
                  alt={flight.airline}
                  width={800}
                  height={450}
                  className="w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-purple-900">{flight.airline}</h3>
                    <p className="text-sm text-purple-600">{flight.flightNumber} • {flight.aircraft}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-purple-600">${flight.price}</p>
                    <p className="text-xs text-purple-400">per person</p>
                  </div>
                </div>
                <div className="flex items-center justify-between mb-4">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-purple-900">{flight.from}</p>
                    <p className="text-sm text-purple-600">{flight.departure}</p>
                  </div>
                  <div className="flex-1 px-4">
                    <div className="relative">
                      <div className="h-0.5 bg-purple-400"></div>
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white px-2">
                        <p className="text-xs text-purple-700">{flight.duration}</p>
                      </div>
                    </div>
                    <p className="text-center text-xs text-purple-500 mt-1">
                      {flight.stops === 0 ? "Nonstop" : `${flight.stops} stop${flight.stops > 1 ? "s" : ""}`}
                    </p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-purple-900">{flight.to}</p>
                    <p className="text-sm text-purple-600">{flight.arrival}</p>
                  </div>
                </div>
                <Link
                  href="/flights/booking"
                  className="block w-full rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 px-4 py-2 text-sm font-semibold text-white transition-all duration-200 hover:from-purple-700 hover:to-pink-700 text-center shadow-lg shadow-purple-500/25"
                >
                  Select Flight
                </Link>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-12">
            <p className="text-white/80">No flights found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
}

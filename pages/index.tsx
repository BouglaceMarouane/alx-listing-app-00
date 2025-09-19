
import { PROPERTYLISTINGSAMPLE } from "@/constants";
import Image from "next/image";
import React from "react";
import HeroSection from "../public/assets/img/HeroSection.png";

export default function Home() {
  const filters = ["Top Villa", "Self Checkin", "Free WiFi", "Luxury", "Pet Friendly"];

  return (
    <div>
      {/* Hero Section */}
      <section
        className="h-[400px] bg-cover bg-center flex flex-col items-center justify-center text-white" 
        style={{ backgroundImage: `url(${HeroSection.src})` }}
      >
          
        <h1 className="text-4xl font-bold mb-2">Find your favorite place here!</h1>
        <p className="text-lg">The best prices for over 2 million properties worldwide.</p>
      </section>

      {/* Filters */}
      <section className="flex flex-wrap gap-3 justify-center py-6">
        {filters.map((filter, i) => (
          <span
            key={i}
            className="px-4 py-2 bg-gray-200 rounded-full cursor-pointer hover:bg-indigo-600 hover:text-white transition"
          >
            {filter}
          </span>
        ))}
      </section>

      {/* Property Listings */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {PROPERTYLISTINGSAMPLE.map((property, index) => (
          <div key={index} className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition">
            <Image src={property.thumbimageProps.image} alt={property.name} className="h-48 w-full object-cover" width={property.thumbimageProps.width} height={property.thumbimageProps.height}  />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{property.name}</h2>
              <p className="text-gray-500 text-sm">
                {property.address.city}, {property.address.country}
              </p>
              <div className="flex justify-between items-center mt-2">
                <span className="text-indigo-600 font-bold">${property.price}/night</span>
                <span className="text-yellow-500">⭐ {property.rating}</span>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

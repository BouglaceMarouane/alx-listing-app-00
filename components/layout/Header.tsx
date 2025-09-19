"use client";
import React from "react";

const Header = () => {
  return (
    <header className="w-full bg-white shadow-md px-6 py-4 flex items-center justify-between">
      {/* Logo */}
      <div className="text-2xl font-bold text-indigo-600">ListingApp</div>

      {/* Search bar */}
      <div className="flex-1 max-w-lg mx-6">
        <input
          type="text"
          placeholder="Search by city, villa, etc."
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      {/* Auth buttons */}
      <div className="space-x-4">
        <button className="px-4 py-2 rounded-lg border text-indigo-600 border-indigo-600">
          Sign In
        </button>
        <button className="px-4 py-2 rounded-lg bg-indigo-600 text-white">
          Sign Up
        </button>
      </div>
    </header>
  );
};

export default Header;

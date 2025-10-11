"use client";

import React from "react";
import { FiSearch, FiBell, FiMapPin } from "react-icons/fi";

const Topbar = () => {
  return (
    <header className="w-full flex items-center justify-between px-6 py-3 bg-[#0A0E1A] border-b border-[#2A3550]">
      {/* Breadcrumb */}
      <div className="flex items-center text-sm">
        <span className="text-[#8B9DC3]">Inicio</span>
        <span className="text-[#8B9DC3] mx-2">/</span>
        <span className="text-white font-semibold">Dashboard</span>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-4">
        {/* Search Input */}
        <div className="relative">
          <FiSearch className="absolute left-3 top-2.5 text-[#8B9DC3]" />
          <input
            type="text"
            placeholder="Buscar... (Ctrl+K)"
            className="bg-[#151B2D] text-white placeholder-[#8B9DC3] border border-[#2A3550] rounded-lg pl-10 pr-4 py-2 text-sm w-72 focus:outline-none focus:border-[#00D9FF] transition"
          />
        </div>

        {/* Location Button */}
        <button className="flex items-center gap-2 bg-[#151B2D] border border-[#2A3550] rounded-lg px-3 py-2 text-sm text-white hover:border-[#00D9FF] transition">
          <FiMapPin className="text-[#00D9FF]" />
          <span>Mina Norte</span>
        </button>

        {/* Notifications */}
        <div className="relative">
          <FiBell className="text-[#8B9DC3] text-xl cursor-pointer hover:text-[#00D9FF] transition" />
          <span className="absolute -top-1 -right-1 bg-[#FF4D4D] text-xs font-bold w-4 h-4 flex items-center justify-center rounded-full">
            2
          </span>
        </div>

        {/* User Avatar */}
        <div className="bg-[#00D9FF] text-[#0A0E1A] font-bold w-9 h-9 flex items-center justify-center rounded-full cursor-pointer">
          JD
        </div>
      </div>
    </header>
  );
};

export default Topbar;

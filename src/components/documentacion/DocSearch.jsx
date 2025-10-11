"use client";
import { useState } from "react";
import { Search } from "lucide-react";

export default function DocSearch({ onSearchChange }) {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    if (onSearchChange) onSearchChange(value.toLowerCase());
  };

  return (
    <div className="w-full flex justify-center">
      <div className="relative w-[60%]">
        <Search
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#8B9DC3]"
          size={18}
        />
        <input
          type="text"
          value={query}
          onChange={handleChange}
          placeholder="Buscar en la documentación..."
          className="w-full bg-[#0E1525] text-sm text-white placeholder-[#8B9DC3] border border-[#2A3550] rounded-lg pl-10 pr-4 py-3 focus:outline-none focus:ring-1 focus:ring-[#00D9FF] transition"
        />
      </div>
    </div>
  );
}

"use client";
import React from "react";

export default function AlertsFilter({ current, onChange }) {
  const filters = ["Todas", "Críticas", "Altas", "Medias", "Resueltas"];

  return (
    <div className="flex gap-3 flex-wrap mb-6">
      {filters.map((f) => (
        <button
          key={f}
          onClick={() => onChange(f)} 
          className={`px-5 py-2 rounded-xl border transition-all ${
            current === f
              ? "bg-[#00D9FF] text-[#0A0E1A] font-semibold border-[#00D9FF]"
              : "bg-[#1E2733] text-[#8B9DC3] border-[#2A3550] hover:border-[#00D9FF]"
          }`}
        >
          {f}
        </button>
      ))}
    </div>
  );
}

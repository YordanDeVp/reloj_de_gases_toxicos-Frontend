"use client";
import React from "react";

export default function AlertsHeader() {
  return (
    <div className="flex items-center justify-between">
      <div>
        <h1 className="text-4xl font-extrabold text-white flex items-center gap-3">
          Centro de Alertas
          <span className="bg-[#FF4D4D] text-white text-sm px-3 py-1 rounded-full">
            2 No Resueltas
          </span>
        </h1>
        <p className="text-[#8B9DC3] mt-2">
          Gestiona y responde a las alertas del sistema
        </p>
      </div>

      <button className="border border-[#00D9FF] text-[#00D9FF] rounded-xl px-5 py-2 font-medium hover:bg-[#00D9FF] hover:text-[#0A0E1A] transition-all">
        Marcar Todas como Leídas
      </button>
    </div>
  );
}

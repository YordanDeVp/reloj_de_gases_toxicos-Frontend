"use client";
import React, { useState } from "react";

export default function ConfigUmbrales() {
  const [umbrales, setUmbrales] = useState({
    h2s: 10,
    co: 40,
    polvo: 150,
  });

  const handleChange = (key, value) => {
    setUmbrales((prev) => ({ ...prev, [key]: Number(value) }));
  };

  const umbralItems = [
    {
      key: "h2s",
      label: "H₂S (Sulfuro de Hidrógeno)",
      unidad: "ppm",
      color: "#00D9FF",
      rango: 20,
      escala: [
        { color: "#00FF88", label: "0–5 Bajo" },
        { color: "#FFD166", label: "5–10 Medio" },
        { color: "#FFA500", label: "10–15 Alto" },
        { color: "#FF4D4D", label: "15+ Crítico" },
      ],
    },
    {
      key: "co",
      label: "CO (Monóxido de Carbono)",
      unidad: "ppm",
      color: "#FFD166",
      rango: 80,
      escala: [
        { color: "#00FF88", label: "0–25 Bajo" },
        { color: "#FFD166", label: "25–40 Medio" },
        { color: "#FFA500", label: "40–60 Alto" },
        { color: "#FF4D4D", label: "60+ Crítico" },
      ],
    },
    {
      key: "polvo",
      label: "Polvo (Partículas Suspendidas)",
      unidad: "µg/m³",
      color: "#00FF88",
      rango: 250,
      escala: [
        { color: "#00FF88", label: "0–100 Bajo" },
        { color: "#FFD166", label: "100–150 Medio" },
        { color: "#FFA500", label: "150–200 Alto" },
        { color: "#FF4D4D", label: "200+ Crítico" },
      ],
    },
  ];

  return (
    <div className="bg-[#151B2D] p-8 rounded-2xl border border-[#1E2733] text-white space-y-10">
      <h2 className="text-xl font-semibold">Umbrales de Alertas por Defecto</h2>
      <p className="text-sm text-[#8B9DC3] mb-4">
        Configura los límites globales para todos los dispositivos
      </p>

      {umbralItems.map((item) => (
        <div key={item.key} className="space-y-3">
          {/* Header */}
          <div className="flex justify-between items-center">
            <label className="font-medium">{item.label}</label>
            <span className="font-semibold text-lg" style={{ color: item.color }}>
              {umbrales[item.key]}{" "}
              <span className="text-sm font-normal text-white/90">{item.unidad}</span>
            </span>
          </div>

          {/* Barra principal (slider turquesa) */}
          <div className="relative w-full h-3 bg-[#2A3550] rounded-full">
            <div
              className="absolute h-3 bg-[#00D9FF] rounded-full"
              style={{
                width: `${(umbrales[item.key] / item.rango) * 100}%`,
              }}
            ></div>

            {/* Slider invisible */}
            <input
              type="range"
              min="0"
              max={item.rango}
              step="1"
              value={umbrales[item.key]}
              onChange={(e) => handleChange(item.key, e.target.value)}
              className="absolute w-full h-3 opacity-0 cursor-pointer"
            />
          </div>

          {/* Barras de color debajo */}
          <div className="flex w-full h-2 mt-2 rounded-full overflow-hidden">
            {item.escala.map((seg, i) => (
              <div
                key={i}
                style={{
                  backgroundColor: seg.color,
                  width: `${100 / item.escala.length}%`,
                }}
              ></div>
            ))}
          </div>

          {/* Etiquetas */}
          <div className="flex justify-between text-xs mt-1">
            {item.escala.map((seg, i) => (
              <span key={i} style={{ color: seg.color }}>
                {seg.label}
              </span>
            ))}
          </div>
        </div>
      ))}

      {/* Footer */}
      <div className="flex items-center gap-4 pt-6">
        <button className="bg-[#00D9FF] text-[#0A0E1A] font-semibold px-5 py-2 rounded-md hover:bg-[#00B8D4] transition">
          Guardar Umbrales
        </button>
        <select className="bg-[#1A2238] border border-[#2A3550] text-white text-sm rounded-md px-4 py-2 focus:border-[#00D9FF]">
          <option>Solo dispositivos nuevos</option>
          <option>Todos los dispositivos</option>
        </select>
      </div>
    </div>
  );
}

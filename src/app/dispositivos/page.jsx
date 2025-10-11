"use client";
import React, { useState } from "react";
import DeviceCard from "@/components/dispositivos/DeviceCard";

export default function DispositivosPage() {
  const [filter, setFilter] = useState("Todos");
  const [search, setSearch] = useState("");

  const devices = [
    { id: "WCH-001", name: "Sensor Principal A", location: "Túnel A - Zona 3", status: "Activo", metrics: { h2s: 5.2, co: 18, dust: 95 }, battery: 87, lastReading: "Hace 2 min", assigned: "Juan Pérez" },
    { id: "WCH-002", name: "Sensor Norte B", location: "Túnel B - Zona 1", status: "Advertencia", metrics: { h2s: 8.5, co: 35, dust: 145 }, battery: 45, lastReading: "Hace 5 min", assigned: "María González" },
    { id: "WCH-003", name: "Sensor Central", location: "Zona Central", status: "Activo", metrics: { h2s: 3.8, co: 12, dust: 68 }, battery: 92, lastReading: "Hace 1 min", assigned: "Carlos Ramírez" },
    { id: "WCH-004", name: "Sensor Sur C", location: "Túnel C - Zona 2", status: "Crítico", metrics: { h2s: 12.4, co: 48, dust: 180 }, battery: 78, lastReading: "Hace 3 min", assigned: "Ana Martínez" },
    { id: "WCH-005", name: "Sensor Máquinas", location: "Sala de Máquinas", status: "Offline", metrics: { h2s: 0, co: 0, dust: 0 }, battery: 5, lastReading: "Hace 1h", assigned: "Roberto Silva" },
    { id: "WCH-006", name: "Sensor Este D", location: "Túnel D - Zona 4", status: "Activo", metrics: { h2s: 6.1, co: 22, dust: 102 }, battery: 68, lastReading: "Hace 4 min", assigned: "Luis Torres" },
  ];

  // 🔹 Filtro por estado
  const filteredDevices = devices.filter((d) => {
    const matchesFilter = filter === "Todos" || d.status === filter;
    const matchesSearch =
      d.id.toLowerCase().includes(search.toLowerCase()) ||
      d.location.toLowerCase().includes(search.toLowerCase()) ||
      d.assigned.toLowerCase().includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const filters = ["Todos", "Activo", "Advertencia", "Crítico", "Offline"];

  return (
    <main className="flex-1 overflow-y-auto p-8 scrollbar-thin scrollbar-thumb-[#00D9FF]/40 scrollbar-track-transparent">
      {/* 🔹 Barra de búsqueda y filtros (NO fijos) */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-8">
        <input
          type="text"
          placeholder="Buscar por ID, ubicación o asignado..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="bg-[#151B2D] border border-[#2A3550] text-white rounded-lg py-2 px-4 w-full lg:w-1/3 focus:outline-none focus:border-[#00D9FF]"
        />

        <div className="flex gap-3 flex-wrap">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                filter === f
                  ? "bg-[#00D9FF] text-[#0A0E1A] font-semibold"
                  : "bg-[#151B2D] text-[#8B9DC3] hover:text-white"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* 🔹 Tarjetas de dispositivos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pb-8">
        {filteredDevices.map((device) => (
          <DeviceCard key={device.id} device={device} />
        ))}
      </div>
    </main>
  );
}

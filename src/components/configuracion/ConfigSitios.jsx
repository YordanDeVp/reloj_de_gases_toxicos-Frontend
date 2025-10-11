"use client";
import { MapPin, Plus, Trash2, Edit } from "lucide-react";

export default function ConfigSitios() {
  const sitios = [
    { nombre: "Túnel A", zonas: ["Zona 1", "Zona 2", "Zona 3"] },
    { nombre: "Túnel B", zonas: ["Zona 1", "Zona 2"] },
    { nombre: "Túnel C", zonas: ["Zona 1", "Zona 2", "Zona 3", "Zona 4"] },
  ];

  return (
    <div className="bg-[#141A2A] p-6 rounded-2xl border border-[#1E2733]">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Sitios y Zonas Mineras</h2>
        <button className="flex items-center gap-2 bg-[#00D9FF] text-black px-4 py-2 rounded-lg font-semibold hover:bg-[#00B8D4] transition">
          <Plus size={16} /> Agregar Sitio
        </button>
      </div>

      {sitios.map((s) => (
        <div key={s.nombre} className="bg-[#0A0E1A] rounded-xl border border-[#2A3550] p-4 mb-4">
          <div className="flex justify-between items-center mb-2">
            <div className="flex items-center gap-2">
              <MapPin className="text-[#00D9FF]" />
              <h3 className="font-semibold">{s.nombre}</h3>
            </div>
            <div className="flex gap-2">
              <button className="bg-[#1E2733] text-[#00D9FF] px-3 py-1 rounded-md text-sm flex items-center gap-1">
                <Edit size={14} /> Editar
              </button>
              <button className="bg-[#1E2733] text-[#FF4567] px-3 py-1 rounded-md text-sm flex items-center gap-1">
                <Trash2 size={14} /> Eliminar
              </button>
            </div>
          </div>

          <div className="flex gap-2 flex-wrap">
            {s.zonas.map((z) => (
              <span key={z} className="px-3 py-1 bg-[#1E2733] rounded-md text-sm">
                {z}
              </span>
            ))}
            <button className="flex items-center gap-1 text-[#00D9FF] text-sm">
              <Plus size={14} /> Agregar Zona
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

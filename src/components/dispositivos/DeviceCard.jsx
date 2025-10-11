"use client";
import { FiMapPin, FiBattery, FiClock, FiEye, FiSettings, FiActivity } from "react-icons/fi";

const statusColors = {
  Activo: "border-[#00FF88]",
  Advertencia: "border-[#FFB800]",
  Crítico: "border-[#FF4D4D]",
  Offline: "border-[#8B9DC3]",
};

const badgeColors = {
  Activo: "bg-[#00FF88]/20 text-[#00FF88]",
  Advertencia: "bg-[#FFB800]/20 text-[#FFB800]",
  Crítico: "bg-[#FF4D4D]/20 text-[#FF4D4D]",
  Offline: "bg-[#8B9DC3]/20 text-[#8B9DC3]",
};

export default function DeviceCard({ device }) {
  return (
    <div
      className={`rounded-2xl border-2 ${statusColors[device.status]} p-5 bg-[#111827] text-white shadow-lg transition-all hover:scale-[1.02]`}
    >
      <div className="flex justify-between items-center mb-2">
        <h3 className="font-mono text-lg font-semibold">{device.id}</h3>
        <span className={`text-xs font-medium px-2 py-1 rounded-lg ${badgeColors[device.status]}`}>
          {device.status}
        </span>
      </div>
      <p className="text-[#8B9DC3] mb-3">{device.name}</p>
      <div className="flex items-center text-sm text-[#8B9DC3] mb-4">
        <FiMapPin className="mr-2" />
        {device.location}
      </div>

      {/* MÉTRICAS */}
      <div className="grid grid-cols-3 gap-3 mb-4">
        <div className="bg-[#1A2236] rounded-lg p-2 text-center">
          <p className="text-[#00D9FF] font-semibold">{device.metrics.h2s}</p>
          <p className="text-xs text-[#8B9DC3]">H₂S (ppm)</p>
        </div>
        <div className="bg-[#1A2236] rounded-lg p-2 text-center">
          <p className="text-[#FFB800] font-semibold">{device.metrics.co}</p>
          <p className="text-xs text-[#8B9DC3]">CO (ppm)</p>
        </div>
        <div className="bg-[#1A2236] rounded-lg p-2 text-center">
          <p className="text-[#00FF88] font-semibold">{device.metrics.dust}</p>
          <p className="text-xs text-[#8B9DC3]">Polvo (µg/m³)</p>
        </div>
      </div>

      {/* ESTADO */}
      <div className="flex justify-between text-sm text-[#8B9DC3] mb-4">
        <div className="flex items-center gap-1">
          <FiBattery /> {device.battery}%
        </div>
        <div className="flex items-center gap-1">
          <FiClock /> {device.lastReading}
        </div>
      </div>

      {/* ASIGNADO */}
      <p className="text-[#8B9DC3] text-sm mb-1">Asignado a:</p>
      <p className="font-semibold mb-4">{device.assigned}</p>

      {/* BOTONES */}
      <div className="flex justify-between items-center border-t border-[#1E2733] pt-3">
        <button className="bg-[#00D9FF]/10 text-[#00D9FF] px-4 py-2 rounded-lg text-sm font-semibold hover:bg-[#00D9FF]/20">
          Ver Detalle
        </button>
        <div className="flex gap-3 text-[#8B9DC3]">
          <FiSettings className="cursor-pointer hover:text-white" />
          <FiActivity className="cursor-pointer hover:text-white" />
          <FiEye className="cursor-pointer hover:text-white" />
        </div>
      </div>
    </div>
  );
}

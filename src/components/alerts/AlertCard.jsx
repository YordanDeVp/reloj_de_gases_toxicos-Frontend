"use client";
import React, { useState } from "react";
import { Clock, MapPin, User, XCircle, AlertTriangle, Info, CheckCircle } from "lucide-react";

export default function AlertCard({ alert }) {
  const [showDetails, setShowDetails] = useState(false);

  const typeColors = {
    Crítica: "border-[#FF4567] text-[#FF4567]",
    Alta: "border-[#FFD166] text-[#FFD166]",
    Media: "border-[#00D9FF] text-[#00D9FF]",
  };

  const statusColors = {
    Pendiente: "bg-[#8B5E00]",
    Resuelta: "bg-[#00FF88]",
    "En Investigación": "bg-[#00B8D4]",
  };

  return (
    <div
      className={`rounded-2xl border ${
        typeColors[alert.type] || "border-[#00D9FF]"
      } bg-[#1A1F2C] p-5 mb-6 transition-all duration-300`}
    >
      {/* Header */}
      <div className="flex justify-between items-start">
        <div>
          <div className="flex items-center gap-2">
            {alert.type === "Crítica" && <XCircle className="text-[#FF4567]" />}
            {alert.type === "Alta" && <AlertTriangle className="text-[#FFD166]" />}
            {alert.type === "Media" && <Info className="text-[#00D9FF]" />}
            <h2 className={`font-bold text-lg ${typeColors[alert.type]}`}>
              {alert.title}
            </h2>
            <span
              className={`text-sm px-2 py-1 rounded-md text-white ${
                statusColors[alert.status] || "bg-[#444]"
              }`}
            >
              {alert.status}
            </span>
          </div>

          <div className="flex items-center text-sm text-gray-400 gap-3 mt-1">
            <Clock size={16} /> {alert.time}
            <span className="font-mono">{alert.deviceId}</span>
            <MapPin size={16} /> {alert.location}
          </div>

          <p className={`mt-2 text-sm ${typeColors[alert.type]}`}>
            {alert.description}
          </p>

          <p className="mt-1 text-sm text-gray-300">
            Valor detectado:{" "}
            <span className="font-bold text-white">{alert.detectedValue}</span>{" "}
            Umbral:{" "}
            <span className="font-bold text-white">{alert.threshold}</span>
          </p>
        </div>

        {/* Botones */}
        <div className="flex gap-2">
          <button
            onClick={() => setShowDetails(!showDetails)}
            className="bg-[#00D9FF] text-black font-semibold px-3 py-1 rounded-md hover:bg-[#00B8D4] transition"
          >
            Investigar
          </button>
          <button className="bg-[#1E1E2E] text-[#FF4567] px-3 py-1 rounded-md hover:text-[#00D9FF] transition">
            Resolver
          </button>
        </div>
      </div>

      {/* Formulario expandible */}
      {showDetails && (
        <div className="mt-4 border-t border-[#2A2F3E] pt-4">
          <textarea
            className="w-full bg-[#0E1420] text-gray-200 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00D9FF]"
            rows="3"
            placeholder="Agregar notas sobre la investigación o acciones tomadas..."
          ></textarea>
          <div className="flex gap-3 mt-3">
            <button className="bg-[#00D9FF] text-black font-semibold px-4 py-2 rounded-md hover:bg-[#00B8D4] transition">
              Marcar como Resuelta
            </button>
            <button className="bg-[#1E1E2E] text-gray-300 px-4 py-2 rounded-md hover:text-white transition">
              Asignar a...
            </button>
            <button className="bg-[#1E1E2E] text-gray-300 px-4 py-2 rounded-md hover:text-[#00D9FF] transition">
              Ver Dispositivo
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

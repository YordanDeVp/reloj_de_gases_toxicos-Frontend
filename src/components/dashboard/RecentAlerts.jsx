"use client";
import React from "react";

const RecentAlerts = () => {
  const alerts = [
    { id: "WCH-004", time: "Hace 5 min", message: "H₂S superó límite seguro", value: "12.4 ppm", status: "Activa" },
    { id: "WCH-002", time: "Hace 15 min", message: "Batería baja detectada", value: "45%", status: "Activa" },
    { id: "WCH-001", time: "Hace 32 min", message: "Nivel de polvo elevado", value: "145 μg/m³", status: "Resuelta" },
    { id: "WCH-003", time: "Hace 1h 12min", message: "CO en aumento", value: "35 ppm", status: "Resuelta" },
  ];

  return (
    <div className="bg-[#0F1625] border border-[#2A3550] rounded-2xl p-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-semibold text-white">Alertas Recientes</h3>
        <button className="text-[#00D9FF] hover:underline text-sm">Ver Todas</button>
      </div>
      <p className="text-sm text-[#8B9DC3] mb-4">Requieren atención</p>
      <div className="space-y-4">
        {alerts.map((a) => (
          <div
            key={a.id}
            className={`p-4 rounded-xl flex justify-between items-center ${
              a.status === "Activa"
                ? "bg-[#1E2640] border border-[#FF4D4D80]"
                : "bg-[#151B2D] border border-[#2A3550]"
            }`}
          >
            <div>
              <p className="text-sm text-[#00D9FF] font-semibold">{a.id}</p>
              <p className="text-[#8B9DC3] text-sm">{a.time}</p>
              <p className="text-white font-medium mt-1">{a.message}</p>
              <p className="text-sm text-[#00FF88]">{a.value}</p>
            </div>
            <div className="flex gap-2">
              <button className="px-3 py-1 rounded-md text-sm bg-[#FFB80020] border border-[#FFB80040] hover:bg-[#FFB80030]">
                Investigar
              </button>
              <button className="px-3 py-1 rounded-md text-sm bg-[#00FF8820] border border-[#00FF8840] hover:bg-[#00FF8830]">
                Resolver
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentAlerts;

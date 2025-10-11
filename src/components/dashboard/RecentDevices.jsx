"use client";
import React from "react";

const RecentDevices = () => {
  const devices = [
    { id: "WCH-001", location: "Túnel A - Zona 3", status: "Activo", lastReading: "Hace 2 min", battery: 87, metrics: { H2S: 5.2, CO: 18, P: 95 } },
    { id: "WCH-002", location: "Túnel B - Zona 1", status: "Advertencia", lastReading: "Hace 5 min", battery: 45, metrics: { H2S: 8.5, CO: 35, P: 145 } },
    { id: "WCH-003", location: "Zona Central", status: "Activo", lastReading: "Hace 1 min", battery: 92, metrics: { H2S: 3.8, CO: 12, P: 68 } },
    { id: "WCH-004", location: "Túnel C - Zona 2", status: "Crítico", lastReading: "Hace 3 min", battery: 78, metrics: { H2S: 12.4, CO: 48, P: 180 } },
    { id: "WCH-005", location: "Sala de Máquinas", status: "Offline", lastReading: "Hace 1h", battery: 5, metrics: { H2S: 0, CO: 0, P: 0 } },
  ];

  return (
    <div className="bg-[#0F1625] border border-[#2A3550] rounded-2xl p-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-semibold text-white">Dispositivos Recientes</h3>
        <button className="text-[#00D9FF] hover:underline text-sm">Ver Todos</button>
      </div>
      <p className="text-sm text-[#8B9DC3] mb-4">Estado actualizado en tiempo real</p>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-[#8B9DC3] border-b border-[#1E2733]">
              <th className="py-3 text-left">ID Dispositivo</th>
              <th>Ubicación</th>
              <th>Estado</th>
              <th>Última Lectura</th>
              <th>Batería</th>
              <th>Métricas</th>
            </tr>
          </thead>
          <tbody>
            {devices.map((d) => (
              <tr key={d.id} className="border-b border-[#1E2733]">
                <td className="py-3">{d.id}</td>
                <td>{d.location}</td>
                <td
                  className={`font-semibold ${
                    d.status === "Crítico"
                      ? "text-[#FF4D4D]"
                      : d.status === "Advertencia"
                      ? "text-[#FFB800]"
                      : d.status === "Offline"
                      ? "text-[#8B9DC3]"
                      : "text-[#00FF88]"
                  }`}
                >
                  {d.status}
                </td>
                <td>{d.lastReading}</td>
                <td>{d.battery}%</td>
                <td className="text-[#8B9DC3]">
                  H₂S: {d.metrics.H2S} | CO: {d.metrics.CO} | P: {d.metrics.P}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentDevices;

"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { FiEye, FiSettings, FiClock } from "react-icons/fi";
import { BsBatteryFull, BsBatteryHalf, BsBattery } from "react-icons/bs";

const RecentDevices = () => {
  const router = useRouter();
  const [selectedDevice, setSelectedDevice] = useState(null);

  // TODO: Reemplazar con datos reales del backend
  const devices = [
    { id: "WCH-001", location: "Túnel A - Zona 3", status: "Activo", lastReading: "Hace 2 min", battery: 87, metrics: { H2S: 5.2, CO: 18, P: 95 } },
    { id: "WCH-002", location: "Túnel B - Zona 1", status: "Advertencia", lastReading: "Hace 5 min", battery: 45, metrics: { H2S: 8.5, CO: 35, P: 145 } },
    { id: "WCH-003", location: "Zona Central", status: "Activo", lastReading: "Hace 1 min", battery: 92, metrics: { H2S: 3.8, CO: 12, P: 68 } },
    { id: "WCH-004", location: "Túnel C - Zona 2", status: "Crítico", lastReading: "Hace 3 min", battery: 78, metrics: { H2S: 12.4, CO: 48, P: 180 } },
    { id: "WCH-005", location: "Sala de Máquinas", status: "Offline", lastReading: "Hace 1h", battery: 5, metrics: { H2S: 0, CO: 0, P: 0 } },
  ];

  const getStatusClass = (status) => {
    switch (status) {
      case "Activo":
        return "bg-[#00FF88]/10 text-[#00FF88]";
      case "Advertencia":
        return "bg-[#FFB800]/10 text-[#FFB800]";
      case "Crítico":
        return "bg-[#FF4D4D]/10 text-[#FF4D4D]";
      case "Offline":
        return "bg-[#8B9DC3]/10 text-[#8B9DC3]";
      default:
        return "bg-gray-600/10 text-gray-400";
    }
  };

  const getBatteryIcon = (level) => {
    if (level > 75) return <BsBatteryFull className="inline mr-1 text-green-400" />;
    if (level > 30) return <BsBatteryHalf className="inline mr-1 text-yellow-400" />;
    return <BsBattery className="inline mr-1 text-red-400" />;
  };

  // TODO: Conectar con endpoint para ver detalles del dispositivo
  // Redirige a la página de detalles completos del dispositivo
  const handleViewDetails = (device) => {
    console.log("Ver detalles del dispositivo:", device.id);
    
    // Navegar a la página de detalles del dispositivo
    // Ajusta la ruta según tu estructura:
    // - Si la página se llama "dispositivos": /dispositivos/${device.id}
    // - Si está en dashboard: /dashboard/dispositivos/${device.id}
    router.push(`/dispositivos/${device.id}`);
  };

  // TODO: Conectar con endpoint para configurar dispositivo
  // Endpoint sugerido: GET /api/devices/{deviceId}/settings
  // Redirige a la página de configuración del dispositivo
  // Debería permitir editar: umbrales de alerta, frecuencia de lectura, calibración, etc.
  const handleSettings = (device) => {
    console.log("Configurar dispositivo:", device.id);
    
    // Navegar a la página de configuración
    // Ajusta la ruta según tu estructura:
    // - Opción 1 (página separada): /dispositivos/${device.id}/configuracion
    // - Opción 2 (sección en detalles): /dispositivos/${device.id}?tab=configuracion
    router.push(`/dispositivos/${device.id}/configuracion`);
  };

  // TODO: Conectar con endpoint para ver historial del dispositivo
  // Endpoint sugerido: GET /api/devices/{deviceId}/history?startDate=X&endDate=Y
  // Redirige a la página de historial con gráficas y datos históricos
  const handleHistory = (device) => {
    console.log("Ver historial del dispositivo:", device.id);
    
    // Navegar a la página de historial
    // Ajusta la ruta según tu estructura:
    // - Opción 1 (página separada): /dispositivos/${device.id}/historial
    // - Opción 2 (sección en detalles): /dispositivos/${device.id}?tab=historial
    router.push(`/dispositivos/${device.id}/historial`);
  };

  // TODO: Conectar con endpoint para ver todos los dispositivos
  // Endpoint sugerido: GET /api/devices?page=1&limit=20
  // Redirige a la página principal con lista completa de dispositivos
  const handleViewAll = () => {
    console.log("Ver todos los dispositivos");
    
    // Navegar a la página de todos los dispositivos
    // Ajusta la ruta según tu estructura:
    // - Si la página se llama "dispositivos": /dispositivos
    // - Si está en dashboard: /dashboard/dispositivos
    router.push("/dispositivos");
  };

  return (
    <div className="bg-[#0F1625] border border-[#2A3550] rounded-2xl p-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-semibold text-white">Dispositivos Recientes</h3>
        <button 
          onClick={handleViewAll}
          className="text-[#00D9FF] hover:underline text-sm transition"
        >
          Ver Todos
        </button>
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
              <th className="text-center">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {devices.map((d) => (
              <tr key={d.id} className="border-b border-[#1E2733] hover:bg-[#1A2235] transition">
                <td className="py-3 font-mono text-white">{d.id}</td>
                <td className="text-[#8B9DC3]">{d.location}</td>
                <td>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusClass(d.status)}`}>
                    {d.status}
                  </span>
                </td>
                <td className="text-[#8B9DC3]">{d.lastReading}</td>
                <td className="text-white">
                  {getBatteryIcon(d.battery)} {d.battery}%
                </td>
                <td className="text-[#8B9DC3] pl-5">
                  H₂S: <span className="text-cyan-400">{d.metrics.H2S}</span>{" "}
                  CO: <span className="text-orange-400">{d.metrics.CO}</span>{" "}
                  P: <span className="text-green-400">{d.metrics.P}</span>
                </td>
                <td className="flex justify-center gap-5 text-[#8B9DC3] mt-3">
                  <button
                    onClick={() => handleViewDetails(d)}
                    className="hover:text-[#00D9FF] transition"
                    title="Ver detalles"
                  >
                    <FiEye className="cursor-pointer" />
                  </button>
                  <button
                    onClick={() => handleSettings(d)}
                    className="hover:text-[#00D9FF] transition"
                    title="Configuración"
                  >
                    <FiSettings className="cursor-pointer" />
                  </button>
                  <button
                    onClick={() => handleHistory(d)}
                    className="hover:text-[#00D9FF] transition"
                    title="Ver historial"
                  >
                    <FiClock className="cursor-pointer" />
                  </button>
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
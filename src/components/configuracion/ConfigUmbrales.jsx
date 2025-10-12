"use client";
import React, { useState } from "react";

export default function ConfigUmbrales() {
  /*
    🔸 NOTA / PENDIENTE BACKEND:

    - Los umbrales actualmente están definidos con valores por defecto estáticos.
    
    - Cuando esté lista la API, se obtendrán mediante un GET a:
      `${API_URL}/configuracion/umbrales`
    
    - Las operaciones se conectarán a los siguientes endpoints:
      - GET `${API_URL}/configuracion/umbrales` - Obtener umbrales actuales
      - PUT `${API_URL}/configuracion/umbrales` - Guardar umbrales modificados
    
    - El parámetro "aplicarA" determinará si los umbrales se aplican a:
      * "nuevos" - Solo dispositivos nuevos
      * "todos" - Todos los dispositivos existentes
  */

  const [umbrales, setUmbrales] = useState({
    h2s: 10,
    co: 40,
    polvo: 150,
  });

  const [aplicarA, setAplicarA] = useState("nuevos");
  const [guardando, setGuardando] = useState(false);

  const handleChange = (key, value) => {
    setUmbrales((prev) => ({ ...prev, [key]: Number(value) }));
  };

  const handleGuardarUmbrales = async () => {
    setGuardando(true);

    /*
      INTEGRACIÓN BACKEND - GUARDAR UMBRALES:
    */

    // Simulación de guardado
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setGuardando(false);
    alert(`Umbrales guardados exitosamente.\nAplicados a: ${aplicarA === "nuevos" ? "Solo dispositivos nuevos" : "Todos los dispositivos"}`);
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
      <div>
        <h2 className="text-xl font-semibold">Umbrales de Alertas por Defecto</h2>
        <p className="text-sm text-[#8B9DC3] mt-2">
          Configura los límites globales para todos los dispositivos
        </p>
      </div>

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
              className="absolute h-3 bg-[#00D9FF] rounded-full transition-all duration-150"
              style={{
                width: `${(umbrales[item.key] / item.rango) * 100}%`,
              }}
            ></div>

            {/* Slider con estilo personalizado */}
            <input
              type="range"
              min="0"
              max={item.rango}
              step="1"
              value={umbrales[item.key]}
              onChange={(e) => handleChange(item.key, e.target.value)}
              className="absolute w-full h-3 opacity-0 cursor-pointer z-10"
              style={{
                WebkitAppearance: 'none',
                appearance: 'none',
              }}
            />
            
            {/* Indicador visual (handle) */}
            <div
              className="absolute top-1/2 -translate-y-1/2 w-5 h-5 bg-white rounded-full shadow-lg border-2 border-[#00D9FF] pointer-events-none transition-all duration-150"
              style={{
                left: `calc(${(umbrales[item.key] / item.rango) * 100}% - 10px)`,
              }}
            ></div>
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
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-6 border-t border-[#2A3550]">
        <button 
          onClick={handleGuardarUmbrales}
          disabled={guardando}
          className={`bg-[#00D9FF] text-[#0A0E1A] font-semibold px-6 py-2 rounded-lg transition-all ${
            guardando 
              ? "opacity-50 cursor-not-allowed" 
              : "hover:bg-[#00B8D4]"
          }`}
        >
          {guardando ? "Guardando..." : "Guardar Umbrales"}
        </button>
        
        <div className="flex items-center gap-3">
          <label className="text-sm text-[#8B9DC3]">Aplicar a:</label>
          <select 
            value={aplicarA}
            onChange={(e) => setAplicarA(e.target.value)}
            className="bg-[#1A2238] border border-[#2A3550] text-white text-sm rounded-lg px-4 py-2 focus:border-[#00D9FF] focus:outline-none transition-all cursor-pointer"
          >
            <option value="nuevos">Solo dispositivos nuevos</option>
            <option value="todos">Todos los dispositivos</option>
          </select>
        </div>
      </div>

      {/* Información adicional */}
      <div className="bg-[#1A2238] border border-[#2A3550] rounded-lg p-4">
        <p className="text-sm text-[#8B9DC3]">
           <strong className="text-white">Nota:</strong> Los umbrales se pueden ajustar individualmente 
          por dispositivo desde la configuración de cada equipo. Estos valores son solo los predeterminados.
        </p>
      </div>
    </div>
  );
}
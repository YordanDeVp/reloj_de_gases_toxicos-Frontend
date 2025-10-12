"use client";
import React, { useState, useEffect } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const RealtimeChart = () => {
  /*
    NOTA / PENDIENTE BACKEND:

    - Los datos del gráfico actualmente son estáticos solo para diseño.
    
    - Cuando esté lista la API, se obtendrán mediante un GET a:
      `${API_URL}/dashboard/monitoreo?intervalo={intervalo}`
    
    - El parámetro "intervalo" puede ser: 1h, 6h, 24h, 7d, 30d
    
    - La respuesta esperada del backend debe tener este formato:
      {
        data: [
          { time: "00:00", H2S: 5, CO: 15, Polvo: 90 },
          { time: "04:00", H2S: 12, CO: 25, Polvo: 120 },
          ...
        ],
        ultimaActualizacion: "2024-01-15T10:30:00Z"
      }
    
    - IMPORTANTE: Para tiempo real, considerar usar WebSockets o polling cada X segundos
  */

  const [intervalo, setIntervalo] = useState("24h");
  const [data, setData] = useState([]);
  const [cargando, setCargando] = useState(false);
  const [ultimaActualizacion, setUltimaActualizacion] = useState(null);

  // Datos estáticos por defecto
  const datosEstaticos = {
    "1h": [
      { time: "10:00", H2S: 5, CO: 15, Polvo: 90 },
      { time: "10:15", H2S: 6, CO: 17, Polvo: 95 },
      { time: "10:30", H2S: 7, CO: 16, Polvo: 88 },
      { time: "10:45", H2S: 5, CO: 18, Polvo: 92 },
    ],
    "6h": [
      { time: "06:00", H2S: 4, CO: 14, Polvo: 85 },
      { time: "08:00", H2S: 8, CO: 20, Polvo: 95 },
      { time: "10:00", H2S: 6, CO: 18, Polvo: 88 },
      { time: "12:00", H2S: 10, CO: 25, Polvo: 105 },
    ],
    "24h": [
      { time: "00:00", H2S: 5, CO: 15, Polvo: 90 },
      { time: "04:00", H2S: 12, CO: 25, Polvo: 120 },
      { time: "08:00", H2S: 8, CO: 20, Polvo: 70 },
      { time: "12:00", H2S: 10, CO: 30, Polvo: 95 },
      { time: "16:00", H2S: 6, CO: 22, Polvo: 110 },
      { time: "20:00", H2S: 7, CO: 19, Polvo: 85 },
      { time: "24:00", H2S: 9, CO: 18, Polvo: 100 },
    ],
    "7d": [
      { time: "Lun", H2S: 7, CO: 20, Polvo: 95 },
      { time: "Mar", H2S: 8, CO: 22, Polvo: 100 },
      { time: "Mié", H2S: 6, CO: 18, Polvo: 88 },
      { time: "Jue", H2S: 9, CO: 24, Polvo: 105 },
      { time: "Vie", H2S: 7, CO: 21, Polvo: 92 },
      { time: "Sáb", H2S: 5, CO: 16, Polvo: 85 },
      { time: "Dom", H2S: 6, CO: 17, Polvo: 90 },
    ],
    "30d": [
      { time: "Sem 1", H2S: 7, CO: 20, Polvo: 95 },
      { time: "Sem 2", H2S: 8, CO: 23, Polvo: 102 },
      { time: "Sem 3", H2S: 6, CO: 19, Polvo: 88 },
      { time: "Sem 4", H2S: 9, CO: 25, Polvo: 110 },
    ],
  };

  // Cargar datos al montar y cuando cambia el intervalo
  useEffect(() => {
    cargarDatos(intervalo);
  }, [intervalo]);

  const cargarDatos = async (intervaloSeleccionado) => {
    setCargando(true);

    /*
      INTEGRACIÓN BACKEND - CARGAR DATOS DE MONITOREO
    */

    // Simulación de carga desde API
    await new Promise(resolve => setTimeout(resolve, 500));
    
    setData(datosEstaticos[intervaloSeleccionado]);
    setUltimaActualizacion(new Date().toISOString());
    setCargando(false);
  };

  /*
    🔸 INTEGRACIÓN TIEMPO REAL (OPCIONAL)
  */

  const handleCambiarIntervalo = (nuevoIntervalo) => {
    setIntervalo(nuevoIntervalo);
  };

  // Tooltip personalizado
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-[#0A0E1A] border border-[#2A3550] rounded-lg p-3 shadow-lg">
          <p className="text-white text-sm font-semibold mb-2">{payload[0].payload.time}</p>
          {payload.map((entry, index) => (
            <p key={index} className="text-xs" style={{ color: entry.color }}>
              {entry.name}: <strong>{entry.value}</strong> {entry.name === "Polvo" ? "µg/m³" : "ppm"}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="bg-[#1E2640] border border-[#2A3550] rounded-2xl p-6 hover:border-[#00D9FF] transition-all duration-300">
      {/* Encabezado del bloque */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
        <div>
          <h3 className="text-xl font-bold text-white">
            Monitoreo en Tiempo Real
          </h3>
          <p className="text-sm text-[#8B9DC3] mt-1">
            {intervalo === "1h" && "Última hora"}
            {intervalo === "6h" && "Últimas 6 horas"}
            {intervalo === "24h" && "Últimas 24 horas"}
            {intervalo === "7d" && "Últimos 7 días"}
            {intervalo === "30d" && "Últimos 30 días"}
          </p>
          {ultimaActualizacion && (
            <p className="text-xs text-[#8B9DC3] mt-1">
              Actualizado: {new Date(ultimaActualizacion).toLocaleTimeString()}
            </p>
          )}
        </div>

        {/* Selector de intervalos de tiempo */}
        <div className="flex gap-2 text-sm">
          {["1h", "6h", "24h", "7d", "30d"].map((label) => (
            <button
              key={label}
              onClick={() => handleCambiarIntervalo(label)}
              disabled={cargando}
              className={`px-3 py-2 rounded-lg border transition-all ${
                intervalo === label
                  ? "bg-[#00D9FF] text-black border-[#00D9FF] font-semibold"
                  : "border-[#2A3550] text-[#8B9DC3] hover:text-white hover:border-[#00D9FF]"
              } ${cargando ? "opacity-50 cursor-not-allowed" : ""}`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Estado de carga */}
      {cargando ? (
        <div className="flex items-center justify-center h-[320px]">
          <div className="text-[#00D9FF] flex flex-col items-center gap-3">
            <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-[#00D9FF]"></div>
            <p className="text-sm">Cargando datos...</p>
          </div>
        </div>
      ) : (
        <>
          {/* Gráfico principal */}
          <ResponsiveContainer width="100%" height={320}>
            <LineChart data={data}>
              <CartesianGrid stroke="#2A3550" strokeDasharray="3 3" />
              <XAxis 
                dataKey="time" 
                stroke="#8B9DC3" 
                style={{ fontSize: '12px' }}
              />
              <YAxis 
                stroke="#8B9DC3" 
                style={{ fontSize: '12px' }}
              />
              <Tooltip content={<CustomTooltip />} />
              <Legend 
                wrapperStyle={{ fontSize: '14px', paddingTop: '10px' }}
                iconType="line"
              />
              <Line 
                type="monotone" 
                dataKey="H2S" 
                stroke="#00D9FF" 
                strokeWidth={2}
                dot={{ fill: '#00D9FF', r: 3 }}
                activeDot={{ r: 5 }}
                name="H₂S"
              />
              <Line 
                type="monotone" 
                dataKey="CO" 
                stroke="#FFB800" 
                strokeWidth={2}
                dot={{ fill: '#FFB800', r: 3 }}
                activeDot={{ r: 5 }}
                name="CO"
              />
              <Line 
                type="monotone" 
                dataKey="Polvo" 
                stroke="#00FF88" 
                strokeWidth={2}
                dot={{ fill: '#00FF88', r: 3 }}
                activeDot={{ r: 5 }}
                name="Polvo"
              />
            </LineChart>
          </ResponsiveContainer>

          {/* Leyenda mejorada con valores actuales */}
          <div className="flex justify-center gap-6 mt-4 flex-wrap">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#00D9FF]"></div>
              <span className="text-sm text-[#8B9DC3]">
                H₂S: <strong className="text-[#00D9FF]">{data[data.length - 1]?.H2S || 0} ppm</strong>
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#FFB800]"></div>
              <span className="text-sm text-[#8B9DC3]">
                CO: <strong className="text-[#FFB800]">{data[data.length - 1]?.CO || 0} ppm</strong>
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#00FF88]"></div>
              <span className="text-sm text-[#8B9DC3]">
                Polvo: <strong className="text-[#00FF88]">{data[data.length - 1]?.Polvo || 0} µg/m³</strong>
              </span>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default RealtimeChart;
"use client";
import React from "react";
import {
  FiCpu,
  FiActivity,
  FiAlertTriangle,
  FiTrendingUp,
} from "react-icons/fi";

const StatsCards = () => {
  /*
    🔸 NOTA / PENDIENTE BACKEND:

    - En este momento los valores de las estadísticas (stats) están definidos manualmente
      solo para mantener el diseño del panel.

    - Cuando esté lista la API del dashboard, este bloque se reemplazará por
      datos reales provenientes del backend.
    Mientras tanto se dejan valores estáticos solo para presentación.
  */

  const stats = [
    {
      title: "Dispositivos Activos",
      value: "24",
      badge: { text: "2 offline", color: "#FF4D4D" },
      icon: <FiCpu />,
      color: "#00D9FF",
      progressValue: 92, // 22 de 24 online = 91.66%
      progressColors: ["#00FF88", "#FF4D4D"], // Verde para online, rojo para offline
      progressSegments: [92, 8] // 92% online, 8% offline
    },
    {
      title: "Lecturas Hoy",
      value: "3,428",
      badge: { text: "+12%", color: "#00FF88" },
      subtitle: "vs 3,056 ayer",
      icon: <FiActivity />,
      color: "#00FF88",
    },
    {
      title: "Alertas Críticas",
      value: "5",
      badge: { text: "Ver todas", color: "#00D9FF" },
      subtitle: "Requieren atención inmediata",
      icon: <FiAlertTriangle />,
      color: "#FF4D4D",
    },
    {
      title: "Calidad Promedio",
      value: "87%",
      subtitle: "Estable",
      icon: <FiTrendingUp />,
      color: "#FFB800",
      progressValue: 87,
      progressColors: ["#00D9FF"],
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
      {stats.map((stat, i) => (
        <div
          key={i}
          className="bg-[#1E2640] border border-[#2A3550] rounded-2xl p-5 hover:border-[#00D9FF] transition-all duration-300 relative overflow-hidden"
        >
          {/* Badge superior derecho */}
          {stat.badge && (
            <div
              className="absolute top-4 right-4 text-[10px] font-semibold px-2 py-1 rounded-md"
              style={{
                color: stat.badge.color,
                backgroundColor: `${stat.badge.color}20`,
              }}
            >
              {stat.badge.text}
            </div>
          )}

          {/* Ícono superior */}
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 text-xl"
            style={{ backgroundColor: `${stat.color}20`, color: stat.color }}
          >
            {stat.icon}
          </div>

          {/* Valor principal */}
          <h3 className="text-4xl font-bold text-white mb-2">{stat.value}</h3>

          {/* Título */}
          <p className="text-[#8B9DC3] text-sm mb-3">{stat.title}</p>

          {/* Subtítulo */}
          {stat.subtitle && (
            <p className="text-xs text-[#8B9DC3] mb-3">{stat.subtitle}</p>
          )}

          {/* Barra de progreso */}
          {stat.progressValue !== undefined && (
            <div className="w-full h-1.5 bg-[#0F1625] rounded-full overflow-hidden">
              {stat.progressSegments ? (
                // Barra segmentada (para Dispositivos Activos)
                <div className="flex h-full">
                  {stat.progressSegments.map((segment, idx) => (
                    <div
                      key={idx}
                      className="h-full transition-all duration-500"
                      style={{
                        width: `${segment}%`,
                        backgroundColor: stat.progressColors[idx],
                      }}
                    />
                  ))}
                </div>
              ) : (
                // Barra simple
                <div
                  className="h-full rounded-full transition-all duration-500"
                  style={{
                    width: `${stat.progressValue}%`,
                    backgroundColor: stat.progressColors[0],
                  }}
                />
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default StatsCards;
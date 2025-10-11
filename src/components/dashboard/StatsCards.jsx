"use client";
import React from "react";
import { FiCpu, FiActivity, FiAlertTriangle, FiTrendingUp } from "react-icons/fi";

const StatsCards = () => {
  const stats = [
    {
      title: "Dispositivos Activos",
      value: "24",
      change: "+12%",
      icon: <FiCpu />,
      color: "#00D9FF",
    },
    {
      title: "Lecturas Hoy",
      value: "3,428",
      subtitle: "vs 3,056 ayer",
      icon: <FiActivity />,
      color: "#00FF88",
    },
    {
      title: "Alertas Críticas",
      value: "5",
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
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
      {stats.map((stat, i) => (
        <div
          key={i}
          className="bg-[#0F1625] border border-[#2A3550] rounded-2xl p-5 flex items-center justify-between hover:border-[#00D9FF] transition-all duration-300"
        >
          <div>
            <p className="text-[#8B9DC3] text-sm">{stat.title}</p>
            <h3 className="text-3xl font-bold mt-1">{stat.value}</h3>
            {stat.subtitle && (
              <p className="text-xs text-[#8B9DC3] mt-1">{stat.subtitle}</p>
            )}
          </div>
          <div
            className="p-3 rounded-xl"
            style={{ backgroundColor: `${stat.color}20`, color: stat.color }}
          >
            {stat.icon}
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatsCards;

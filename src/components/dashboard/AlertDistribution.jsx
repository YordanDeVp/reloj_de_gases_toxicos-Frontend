"use client";
import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const pieData = [
  { name: "Crítico", value: 5, color: "#FF4D4D" },
  { name: "Alto", value: 12, color: "#FFB800" },
  { name: "Medio", value: 28, color: "#00FF88" },
  { name: "Bajo", value: 45, color: "#00D9FF" },
];

const AlertDistribution = () => {
  return (
    <div className="bg-[#0F1625] border border-[#2A3550] rounded-2xl p-6">
      <h3 className="text-xl font-semibold mb-2">Distribución de Alertas</h3>
      <p className="text-sm text-[#8B9DC3] mb-4">Últimos 7 días</p>
      <div className="h-64">
        <ResponsiveContainer>
          <PieChart>
            <Pie data={pieData} dataKey="value" nameKey="name" outerRadius={100} label>
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="flex justify-center mt-4 gap-6">
        {pieData.map((d, i) => (
          <div key={i} className="flex items-center gap-2">
            <div
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: d.color }}
            ></div>
            <span className="text-sm text-[#8B9DC3]">
              {d.name}: {d.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AlertDistribution;

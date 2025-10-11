"use client";
import React from "react";
import { Info, XCircle, Clock, CheckCircle } from "lucide-react";

export default function AlertsSummary() {
  const summary = [
    { label: "Total Alertas", value: 6, icon: <Info className="text-[#8B9DC3]" /> },
    { label: "Críticas", value: 2, icon: <XCircle className="text-[#FF4D4D]" /> },
    { label: "Pendientes", value: 2, icon: <Clock className="text-[#FFB800]" /> },
    { label: "Resueltas", value: 3, icon: <CheckCircle className="text-[#00FF88]" /> },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {summary.map((item, i) => (
        <div
          key={i}
          className="bg-[#151B2D] border border-[#2A3550] rounded-2xl p-5 flex flex-col justify-center shadow-md"
        >
          <div className="flex justify-between items-center mb-3">
            <p className="text-[#8B9DC3]">{item.label}</p>
            {item.icon}
          </div>
          <p className="text-3xl font-bold">{item.value}</p>
        </div>
      ))}
    </div>
  );
}

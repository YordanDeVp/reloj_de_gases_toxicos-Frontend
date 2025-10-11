"use client";
import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const data = [
  { time: "00:00", H2S: 5, CO: 15, Polvo: 90 },
  { time: "04:00", H2S: 12, CO: 25, Polvo: 120 },
  { time: "08:00", H2S: 8, CO: 20, Polvo: 70 },
  { time: "12:00", H2S: 10, CO: 30, Polvo: 95 },
  { time: "16:00", H2S: 6, CO: 22, Polvo: 110 },
  { time: "20:00", H2S: 7, CO: 19, Polvo: 85 },
  { time: "24:00", H2S: 9, CO: 18, Polvo: 100 },
];

const RealtimeChart = () => {
  return (
    <div className="bg-[#0F1625] border border-[#2A3550] rounded-2xl p-6">
      <h3 className="text-xl font-semibold mb-2">Monitoreo en Tiempo Real</h3>
      <p className="text-sm text-[#8B9DC3] mb-4">Últimas 24 horas</p>
      <ResponsiveContainer width="100%" height={320}>
        <LineChart data={data}>
          <CartesianGrid stroke="#1E2733" />
          <XAxis dataKey="time" stroke="#8B9DC3" />
          <YAxis stroke="#8B9DC3" />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="H2S" stroke="#00D9FF" strokeWidth={2} />
          <Line type="monotone" dataKey="CO" stroke="#FFB800" strokeWidth={2} />
          <Line type="monotone" dataKey="Polvo" stroke="#FF4D4D" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RealtimeChart;

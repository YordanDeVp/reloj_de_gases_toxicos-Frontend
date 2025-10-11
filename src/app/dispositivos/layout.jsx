"use client";
import React from "react";
import Sidebar from "@/components/Sidebar";
import Topbar from "@/components/Topbar";

export default function DispositivosLayout({ children }) {
  return (
    <div className="flex h-screen bg-[#0A0E1A] text-white overflow-hidden font-[Inter]">
      {/* 🔹 Sidebar fijo */}
      <Sidebar />

      {/* 🔹 Contenedor principal */}
      <div className="flex flex-col flex-1 overflow-hidden">
        {/* 🔹 Topbar fijo */}
        <Topbar />

        {/* 🔹 Contenido dinámico (scrollable solo aquí) */}
        {children}
      </div>
    </div>
  );
}

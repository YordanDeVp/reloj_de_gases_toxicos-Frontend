"use client";
import React from "react";
import Sidebar from "@/components/Sidebar";
import TopBar from "@/components/Topbar";

export default function PanelLayout({ children }) {
  return (
    <div className="flex h-screen bg-[#0A0E1A] text-white">
      {/* Sidebar */}
      <Sidebar />

      {/* Contenedor principal */}
      <div className="flex flex-col flex-1 overflow-hidden">
        {/* Top bar */}
        <TopBar />

        {/* Contenido interno (scrollable) */}
        <main className="flex-1 overflow-y-auto p-8">{children}</main>
      </div>
    </div>
  );
}

"use client";

import Sidebar from "@/components/Sidebar";
import Topbar from "@/components/Topbar";
import DocSidebar from "@/components/documentacion/DocSidebar";

export default function DocumentacionLayout({ children }) {
  return (
    <div className="flex h-screen bg-[#0A0E1A] text-white">
      {/* Sidebar general del Dashboard */}
      <Sidebar />

      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Topbar general */}
        <Topbar />

        {/* Contenido principal */}
        <main className="flex-1 overflow-auto p-6 flex gap-6">
          {/* Sidebar de Documentación (categorías) */}
          <DocSidebar />

          {/* Contenido dinámico (categoría o artículo) */}
          <div className="flex-1 bg-[#111827] border border-[#2A3550] rounded-2xl p-6 overflow-y-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}

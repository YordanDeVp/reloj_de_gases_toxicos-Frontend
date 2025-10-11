"use client";
import Sidebar from "@/components/Sidebar";
import Topbar from "@/components/Topbar";

export default function ConfiguracionLayout({ children }) {
  return (
    <div className="flex h-screen bg-[#0A0E1A] text-white font-[Inter] overflow-hidden">
      {/* Sidebar fijo */}
      <Sidebar />

      {/* Contenedor principal */}
      <div className="flex flex-col flex-1 overflow-hidden">
        {/* Topbar fijo */}
        <Topbar />

        {/* Contenido desplazable */}
        <main className="flex-1 overflow-y-auto p-8 scrollbar-thin scrollbar-thumb-[#00D9FF]/40 scrollbar-track-transparent">
          {children}
        </main>
      </div>
    </div>
  );
}

"use client";
import { useState } from "react";
import ConfigGeneral from "@/components/configuracion/ConfigGeneral";
import ConfigSitios from "@/components/configuracion/ConfigSitios";
import ConfigUmbrales from "@/components/configuracion/ConfigUmbrales";
import ConfigIntegraciones from "@/components/configuracion/ConfigIntegraciones";
import ConfigFacturacion from "@/components/configuracion/ConfigFacturacion";
import ConfigAvanzado from "@/components/configuracion/ConfigAvanzado";

export default function ConfiguracionPage() {
  const [tab, setTab] = useState("General");
  const tabs = ["General", "Sitios y Zonas", "Umbrales", "Integraciones", "Facturación", "Avanzado"];

  const renderContent = () => {
    switch (tab) {
      case "Sitios y Zonas":
        return <ConfigSitios />;
      case "Umbrales":
        return <ConfigUmbrales />;
      case "Integraciones":
        return <ConfigIntegraciones />;
      case "Facturación":
        return <ConfigFacturacion />;
      case "Avanzado":
        return <ConfigAvanzado />;
      default:
        return <ConfigGeneral />;
    }
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-2">Configuración</h1>
        <p className="text-[#8B9DC3]">Administra las preferencias de tu sistema</p>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 flex-wrap border-b border-[#1E2733] pb-2">
        {tabs.map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              tab === t
                ? "bg-[#00D9FF] text-[#0A0E1A] font-semibold"
                : "bg-[#151B2D] text-[#8B9DC3] hover:text-white"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      {/* Contenido dinámico */}
      {renderContent()}
    </div>
  );
}

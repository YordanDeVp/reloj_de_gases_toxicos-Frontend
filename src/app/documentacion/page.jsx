"use client";

import { useState } from "react";
import DocSidebar from "@/components/documentacion/DocSidebar";
import { documentacionData } from "@/components/documentacion/data";
import PrimerosPasosList from "@/components/documentacion/primeros-pasos/PrimerosPasosList";
import ConfiguracionDispositivosList from "@/components/documentacion/configuracion-dispositivos/ConfiguracionDispositivosList";
import InterpretacionDatosList from "@/components/documentacion/interpretacion-datos/InterpretacionDatosList";
import GestionAlertasList from "@/components/documentacion/gestion-alertas/GestionAlertasList";
import FacturacionPlanesList from "@/components/documentacion/facturacion-planes/FacturacionPlanesList";
import ApiWebhooksList from "@/components/documentacion/api-webhooks/ApiWebhooksList";
import SolucionProblemasList from "@/components/documentacion/solucion-problemas/SolucionProblemasList";
import PreguntasFrecuentesList from "@/components/documentacion/preguntas-frecuentes/PreguntasFrecuentesList";

export default function DocumentacionPage() {
  const [selectedCategory, setSelectedCategory] = useState("primeros-pasos");

  const renderCategoryContent = () => {
    switch (selectedCategory) {
      case "primeros-pasos":
        return <PrimerosPasosList />;
      case "configuracion-dispositivos":
        return <ConfiguracionDispositivosList />;
      case "interpretacion-datos":
        return <InterpretacionDatosList />;
      case "gestion-alertas":
        return <GestionAlertasList />;
      case "facturacion-planes":
        return <FacturacionPlanesList />;
      case "api-webhooks":
        return <ApiWebhooksList />;
      case "solucion-problemas":
        return <SolucionProblemasList />;
      case "preguntas-frecuentes":
        return <PreguntasFrecuentesList />;
      default:
        return <PrimerosPasosList />;
    }
  };

  return (
    <div className="flex flex-col lg:flex-row gap-6">
      {/* Sidebar de categorías */}
      <DocSidebar onSelectCategory={setSelectedCategory} />

      {/* Contenido principal */}
      <div className="flex-1 bg-[#111827] p-6 rounded-2xl border border-[#2A3550] shadow-lg">
        {renderCategoryContent()}
      </div>
    </div>
  );
}

"use client";
import { BookOpen, Settings, Database, Bell, FileText, Plug, HelpCircle, AlertTriangle } from "lucide-react";

const categories = [
  { id: "primeros-pasos", name: "Primeros Pasos", count: 4, icon: BookOpen },
  { id: "configuracion-dispositivos", name: "Configuración de Dispositivos", count: 5, icon: Settings },
  { id: "interpretacion-datos", name: "Interpretación de Datos", count: 4, icon: Database },
  { id: "gestion-alertas", name: "Gestión de Alertas", count: 4, icon: Bell },
  { id: "facturacion-planes", name: "Facturación y Planes", count: 4, icon: FileText },
  { id: "api-webhooks", name: "API y Webhooks", count: 4, icon: Plug },
  { id: "solucion-problemas", name: "Solución de Problemas", count: 4, icon: AlertTriangle },
  { id: "preguntas-frecuentes", name: "Preguntas Frecuentes", count: 4, icon: HelpCircle },
];

export default function DocSidebar({ onSelectCategory }) {
  return (
    <aside className="bg-[#1A2238] p-5 rounded-2xl border border-[#2A3550] w-80 h-fit">
      <h2 className="text-sm font-semibold text-[#8B9DC3] mb-4">CATEGORÍAS</h2>
      <div className="flex flex-col gap-2">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => onSelectCategory(cat.id)}
            className="flex items-center justify-between bg-[#111827] hover:bg-[#00D9FF]/10 border border-transparent hover:border-[#00D9FF]/50 rounded-xl p-3 transition text-left"
          >
            <div className="flex items-center gap-3">
              <cat.icon size={18} className="text-[#00D9FF]" />
              <div>
                <p className="font-medium text-sm">{cat.name}</p>
                <p className="text-xs text-[#8B9DC3]">{cat.count} artículos</p>
              </div>
            </div>
            <span className="text-[#8B9DC3]">{">"}</span>
          </button>
        ))}
      </div>
    </aside>
  );
}

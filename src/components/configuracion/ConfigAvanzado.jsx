"use client";
import { Download, Trash2 } from "lucide-react";

export default function ConfigAvanzado() {
  return (
    <div className="bg-[#141A2A] p-6 rounded-2xl border border-[#1E2733] space-y-6">
      <h2 className="text-xl font-semibold mb-6">Opciones Avanzadas</h2>

      <div>
        <label className="block text-sm text-[#AAB5CF] mb-2">Modo Debug</label>
        <input type="checkbox" className="accent-[#00D9FF]" />{" "}
        <span className="ml-2 text-sm text-[#8B9DC3]">Habilita logs detallados del sistema</span>
      </div>

      <div>
        <label className="block text-sm text-[#AAB5CF] mb-2">Retención de Logs</label>
        <select
        className="bg-[#151B2D] text-white border border-[#2A3550] rounded-lg px-3 py-2"
        defaultValue="90 días"
        >
        <option>30 días</option>
        <option>60 días</option>
        <option>90 días</option>
        </select>
      </div>

      <div>
        <h3 className="text-sm text-[#AAB5CF] mb-2">Exportación de Datos (GDPR)</h3>
        <button className="bg-[#00D9FF] text-black font-semibold px-4 py-2 rounded-md flex items-center gap-2 hover:bg-[#00B8D4] transition">
          <Download size={16} /> Exportar Mis Datos
        </button>
      </div>

      <div className="border-t border-[#2A3550] pt-6">
        <h3 className="text-red-500 font-semibold mb-2">Zona de Peligro</h3>
        <p className="text-[#8B9DC3] text-sm mb-4">
          Eliminar permanentemente tu cuenta y todos los datos asociados
        </p>
        <button className="bg-[#FF4567] text-white px-4 py-2 rounded-md flex items-center gap-2 hover:bg-[#FF1E4D] transition">
          <Trash2 size={16} /> Eliminar Cuenta
        </button>
      </div>
    </div>
  );
}

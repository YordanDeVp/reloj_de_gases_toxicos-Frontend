"use client";
import { Upload } from "lucide-react";

export default function ConfigGeneral() {
  return (
    <div className="bg-[#141A2A] p-6 rounded-2xl border border-[#1E2733]">
      <h2 className="text-xl font-semibold mb-6">Información de la Organización</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm mb-2 text-[#AAB5CF]">Nombre de la Organización</label>
          <input
            className="w-full bg-[#0A0E1A] border border-[#2A3550] rounded-lg p-2"
            defaultValue="Minera del Norte S.A."
          />
        </div>
        <div>
          <label className="block text-sm mb-2 text-[#AAB5CF]">Logo de la Empresa</label>
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 bg-[#0A0E1A] border border-[#2A3550] rounded-lg px-3 py-2 hover:border-[#00D9FF] transition">
              <Upload size={16} /> Subir Logo
            </button>
            <span className="text-xs text-[#8B9DC3]">Tamaño recomendado: 200×200px (PNG, JPG)</span>
          </div>
        </div>

        <div>
          <label className="block text-sm mb-2 text-[#AAB5CF]">Zona Horaria</label>
          <select className="w-full bg-[#0A0E1A] border border-[#2A3550] rounded-lg p-2">
            <option>América/Santiago (UTC-3)</option>
            <option>América/Lima (UTC-5)</option>
          </select>
        </div>

        <div>
          <label className="block text-sm mb-2 text-[#AAB5CF]">Idioma</label>
          <select className="w-full bg-[#0A0E1A] border border-[#2A3550] rounded-lg p-2">
            <option>Español</option>
            <option>Inglés</option>
          </select>
        </div>

        <div>
          <label className="block text-sm mb-2 text-[#AAB5CF]">Formato de Fecha</label>
          <input
            className="w-full bg-[#0A0E1A] border border-[#2A3550] rounded-lg p-2"
            defaultValue="DD/MM/YYYY"
          />
        </div>

        <div>
          <label className="block text-sm mb-2 text-[#AAB5CF]">Unidades de Medida</label>
          <select className="w-full bg-[#0A0E1A] border border-[#2A3550] rounded-lg p-2">
            <option>Métrico (SI)</option>
            <option>Imperial</option>
          </select>
        </div>
      </div>

      <button className="mt-6 bg-[#00D9FF] text-black font-semibold px-4 py-2 rounded-md hover:bg-[#00B8D4] transition">
        Guardar Cambios
      </button>
    </div>
  );
}

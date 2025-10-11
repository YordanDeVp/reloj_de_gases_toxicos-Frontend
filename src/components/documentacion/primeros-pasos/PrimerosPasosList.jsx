"use client";

import { FileText } from "lucide-react";
import Link from "next/link";
import { documentacionData } from "../data";

export default function PrimerosPasosList() {
  const categoria = documentacionData.find((cat) => cat.id === "primeros-pasos");

  return (
    <div className="bg-[#1B2235] p-6 rounded-2xl border border-[#2A3550]">
      {/* Encabezado */}
      <div className="flex items-center gap-3 mb-5">
        <div className="bg-[#00D9FF]/10 p-3 rounded-2xl">
          <FileText size={28} className="text-[#00D9FF]" />
        </div>
        <div>
          <h2 className="text-xl font-semibold text-white">{categoria.nombre}</h2>
          <p className="text-sm text-[#8B9DC3]">
            {categoria.articulos.length} artículos disponibles
          </p>
        </div>
      </div>

      {/* Lista de artículos */}
      <div className="flex flex-col gap-3">
        {categoria.articulos.map((articulo) => (
          <Link
            key={articulo.id}
            href={`/documentacion/${categoria.id}/${articulo.id}`}
            className="flex items-center justify-between bg-[#111827] hover:bg-[#00D9FF]/10 border border-transparent hover:border-[#00D9FF]/30 rounded-xl p-4 transition"
          >
            <div className="flex items-center gap-3">
              <FileText size={18} className="text-[#00D9FF]" />
              <div>
                <p className="font-medium text-sm text-white">{articulo.titulo}</p>
                <p className="text-xs text-[#8B9DC3]">
                  Tiempo de lectura: {articulo.tiempo}
                </p>
              </div>
            </div>
            <span className="text-[#8B9DC3]">{">"}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}

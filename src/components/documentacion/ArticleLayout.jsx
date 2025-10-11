"use client";
import Link from "next/link";
import { AlertTriangle } from "lucide-react";

export default function ArticleLayout({ category, time, title, children }) {
  return (
    <div className="bg-[#1A2238] p-6 rounded-2xl border border-[#2A3550] text-[#B8C1EC]">
      <Link
        href={`/documentacion/${category}`}
        className="text-[#00D9FF] hover:underline text-sm"
      >
        ← Volver a {category.replace("-", " ").replace(/\b\w/g, c => c.toUpperCase())}
      </Link>

      <div className="flex items-center gap-3 mt-4">
        <span className="bg-[#00D9FF]/10 text-[#00D9FF] text-xs px-3 py-1 rounded-md">
          {category.replace("-", " ").replace(/\b\w/g, c => c.toUpperCase())}
        </span>
        <span className="bg-[#2A3550] text-xs px-3 py-1 rounded-md">{time} min lectura</span>
      </div>

      <h1 className="text-2xl font-bold text-white mt-4">{title}</h1>

      <div className="mt-4 space-y-4">{children}</div>

      {/* Nota importante */}
      <div className="bg-[#111827] border border-[#3B4261] rounded-xl p-4 mt-6 flex items-start gap-3">
        <AlertTriangle className="text-yellow-400 mt-0.5" size={20} />
        <div>
          <p className="font-semibold text-yellow-400">Nota Importante</p>
          <p className="text-sm text-[#B8C1EC]">
            Asegúrate de seguir las mejores prácticas de seguridad al configurar tus dispositivos IoT.
          </p>
        </div>
      </div>

      {/* Ejemplo de código */}
      <div className="mt-6">
        <h2 className="text-lg font-semibold text-white mb-2">Ejemplo de Código</h2>
        <div className="bg-[#0D111C] border border-[#2A3550] rounded-lg p-4 font-mono text-sm text-[#00D9FF]">
          // Ejemplo de configuración
          <br />
          const config = {"{"} threshold: {"{"} h2s: 10, co: 40, dust: 150 {"}"}, notifications: ['email', 'sms'] {"}"};
        </div>
      </div>

      {/* Conclusión */}
      <div className="mt-6">
        <h2 className="text-lg font-semibold text-white">Conclusión</h2>
        <p className="text-[#B8C1EC]">
          Siguiendo estos pasos, podrás configurar correctamente el sistema y aprovechar al máximo sus capacidades.
        </p>
      </div>

      {/* Feedback */}
      <div className="border-t border-[#2A3550] mt-6 pt-4 flex items-center justify-between">
        <p className="text-sm text-[#8B9DC3]">¿Te resultó útil este artículo?</p>
        <div className="flex gap-2">
          <button className="bg-green-700 hover:bg-green-600 px-3 py-1 rounded-lg flex items-center gap-1 text-sm">
            👍 Sí
          </button>
          <button className="bg-[#8B1F4A] hover:bg-[#A22D5D] px-3 py-1 rounded-lg flex items-center gap-1 text-sm">
            👎 No
          </button>
        </div>
      </div>
    </div>
  );
}

"use client";
import { documentacionData } from "@/components/documentacion/data";
import DocLayout from "@/components/documentacion/DocLayout";

export default function DocumentacionPage() {
  return (
    <DocLayout>
      <div className="space-y-4">
        <h1 className="text-2xl font-semibold text-[#00D9FF]">Documentación</h1>
        <p className="text-[#B8C1EC] mb-4">Explora nuestras guías por categoría</p>

        {documentacionData.map((categoria) => (
          <a
            key={categoria.id}
            href={`/documentacion/${categoria.id}`}
            className="block bg-[#151B2D] hover:bg-[#1C223A] transition p-4 rounded-lg border border-transparent hover:border-[#00D9FF]/30"
          >
            <h2 className="font-semibold text-white">{categoria.nombre}</h2>
            <p className="text-sm text-[#8B9DC3]">
              {categoria.articulos.length} artículos disponibles
            </p>
          </a>
        ))}
      </div>
    </DocLayout>
  );
}

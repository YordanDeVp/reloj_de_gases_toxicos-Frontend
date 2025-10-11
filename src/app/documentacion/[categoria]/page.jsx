"use client";
import { documentacionData } from "@/components/documentacion/data";
import DocLayout from "@/components/documentacion/DocLayout";

export default function CategoriaPage({ params }) {
  const categoria = documentacionData.find((c) => c.id === params.categoria);

  if (!categoria) return <p>Categoría no encontrada</p>;

  return (
    <DocLayout>
      <h1 className="text-2xl font-semibold text-[#00D9FF] mb-2">
        {categoria.nombre}
      </h1>
      <p className="text-[#B8C1EC] mb-6">
        {categoria.articulos.length} artículos disponibles
      </p>

      <div className="space-y-3">
        {categoria.articulos.map((articulo) => (
          <a
            key={articulo.id}
            href={`/documentacion/${categoria.id}/${articulo.id}`}
            className="block bg-[#151B2D] hover:bg-[#1C223A] transition p-4 rounded-lg border border-transparent hover:border-[#00D9FF]/30"
          >
            <h3 className="font-semibold text-white">{articulo.titulo}</h3>
            <p className="text-sm text-[#8B9DC3] mt-1">
              Tiempo de lectura: {articulo.tiempo}
            </p>
          </a>
        ))}
      </div>
    </DocLayout>
  );
}

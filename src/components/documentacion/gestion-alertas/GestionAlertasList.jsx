"use client";

import React from "react";
import { documentacionData } from "../data";
import ArticuloCard from "../ArticuloCard";

export default function GestionAlertasList() {
  const categoria = documentacionData.find(
    (cat) => cat.id === "gestion-alertas"
  );

  if (!categoria) {
    return <p className="text-[#8B9DC3]">No se encontraron artículos.</p>;
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-white">{categoria.nombre}</h1>
        <p className="text-[#8B9DC3] text-sm mt-1">
          {categoria.articulos.length} artículos disponibles
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {categoria.articulos.map((articulo) => (
          <ArticuloCard
            key={articulo.id}
            categoriaId={categoria.id}
            articulo={articulo}
          />
        ))}
      </div>
    </div>
  );
}

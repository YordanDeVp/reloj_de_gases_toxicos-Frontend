"use client";
import ArticleLayout from "@/components/documentacion/ArticleLayout";
import { documentacionData } from "@/components/documentacion/data";

export default function ArticuloPage({ params }) {
  const categoria = documentacionData.find((c) => c.id === params.categoria);
  const articulo = categoria?.articulos.find((a) => a.id === params.articulo);

  if (!categoria || !articulo) return <p>Artículo no encontrado</p>;

  return (
    <ArticleLayout
      category={categoria.nombre}
      time={articulo.tiempo}
      title={articulo.titulo}
    >
      <p>
        Esta es una vista previa del artículo de documentación. Aquí se mostraría el contenido
        completo con formato Markdown, imágenes, snippets de código, etc.
      </p>
    </ArticleLayout>
  );
}

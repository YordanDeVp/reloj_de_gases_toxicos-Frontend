import { categorias } from "@/components/documentacion/data";
import DocLayout from "@/components/documentacion/DocLayout";

export default function CategoriaPage({ params }) {
  const categoria = categorias.find(c => c.id === params.categoria);
  if (!categoria) return <p>Categoría no encontrada</p>;

  return <DocLayout categoria={categoria} />;
}

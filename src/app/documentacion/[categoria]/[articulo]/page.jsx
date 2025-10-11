import { documentacionData } from "@/components/documentacion/data";
import ArticleLayout from "@/components/documentacion/ArticleLayout";

export default function ArticuloPage({ params }) {
  const categoria = documentacionData.find((c) => c.id === params.categoria);
  const articulo = categoria?.articulos.find((a) => a.id === params.articulo);

  if (!articulo) return <p>Artículo no encontrado</p>;

  return (
    <ArticleLayout
      category={categoria.nombre}
      time={articulo.tiempo}
      title={articulo.titulo}
    >
      <p>
        Esta es una vista previa del artículo de documentación. En una
        implementación completa, aquí se mostraría el contenido completo del
        artículo con formato Markdown, imágenes, snippets de código y más.
      </p>

      <h2 className="text-lg font-semibold mt-4">Introducción</h2>
      <p>
        Este artículo te guiará a través de los conceptos fundamentales y pasos
        necesarios para completar esta tarea de manera efectiva.
      </p>

      <h2 className="text-lg font-semibold mt-4">Pasos a Seguir</h2>
      <ol className="list-decimal ml-5 text-[#B8C1EC] space-y-1">
        <li>Primero, asegúrate de tener acceso al dashboard</li>
        <li>Navega a la sección correspondiente</li>
        <li>Configura los parámetros necesarios</li>
        <li>Verifica que todo funcione correctamente</li>
      </ol>

      <h2 className="text-lg font-semibold mt-4">Nota Importante</h2>
      <p>
        Asegúrate de seguir las mejores prácticas de seguridad al configurar tus
        dispositivos IoT.
      </p>

      <h2 className="text-lg font-semibold mt-4">Ejemplo de Código</h2>
      <pre className="bg-[#151B2D] p-4 rounded-lg text-[#00D9FF] text-sm overflow-x-auto">
        {`// Ejemplo de configuración
const config = {
  threshold: { h2s: 10, co: 40, dust: 150 },
  notifications: ['email', 'sms'],
};`}
      </pre>

      <h2 className="text-lg font-semibold mt-4">Conclusión</h2>
      <p>
        Siguiendo estos pasos, podrás configurar correctamente el sistema y
        aprovechar al máximo sus capacidades.
      </p>

      <div className="flex gap-4 mt-6">
        <button className="bg-[#00D9FF] text-[#0A0E1A] font-semibold px-4 py-2 rounded-md hover:bg-[#00B8D4] transition">
          👍 Sí
        </button>
        <button className="bg-[#151B2D] border border-[#2A3550] text-white px-4 py-2 rounded-md hover:border-[#00D9FF] transition">
          👎 No
        </button>
      </div>
    </ArticleLayout>
  );
}

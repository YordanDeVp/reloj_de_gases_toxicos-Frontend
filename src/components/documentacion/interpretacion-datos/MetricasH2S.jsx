"use client";
import ArticleLayout from "../ArticleLayout";

export default function MetricasH2S() {
  return (
    <ArticleLayout
      category="interpretacion-datos"
      time="9"
      title="Entendiendo las Métricas H₂S"
    >
      <p>
        Esta es una vista previa del artículo de documentación. En una implementación completa,
        aquí se mostraría el contenido completo del artículo con formato Markdown, imágenes,
        snippets de código y más.
      </p>

      <h2 className="text-lg font-semibold mt-4">Introducción</h2>
      <p>
        Este artículo te guiará a través de los conceptos fundamentales y pasos necesarios
        para comprender cómo interpretar correctamente las mediciones de H₂S en tu sistema SafeMine IoT.
      </p>

      <h2 className="text-lg font-semibold mt-4">Pasos a Seguir</h2>
      <ol className="list-decimal ml-5 text-[#B8C1EC] space-y-1">
        <li>Primero, asegúrate de tener acceso al dashboard.</li>
        <li>Selecciona el dispositivo que deseas analizar.</li>
        <li>Verifica la lectura de H₂S en tiempo real.</li>
        <li>Compara con los umbrales configurados para identificar posibles alertas.</li>
      </ol>

      <h2 className="text-lg font-semibold mt-4">Nota Importante</h2>
      <p className="text-[#FFD166]">
        Asegúrate de seguir las mejores prácticas de seguridad al interpretar las mediciones
        de gases tóxicos y calibrar tus sensores periódicamente.
      </p>

      <h2 className="text-lg font-semibold mt-4">Ejemplo de Código</h2>
      <pre className="bg-[#1A2238] text-[#B8C1EC] p-4 rounded-lg text-sm overflow-x-auto">
{`// Ejemplo de configuración
const config = {
  threshold: { h2s: 10, co: 40, dust: 150 },
  notifications: ['email', 'sms']
};`}
      </pre>

      <h2 className="text-lg font-semibold mt-4">Conclusión</h2>
      <p>
        Siguiendo estos pasos, podrás interpretar de manera eficiente las métricas de H₂S
        y garantizar la seguridad en las operaciones mineras monitoreadas por SafeMine IoT.
      </p>

      <div className="mt-8 border-t border-[#2A3550] pt-4 flex items-center justify-between text-sm text-[#8B9DC3]">
        <p>¿Te resultó útil este artículo?</p>
        <div className="flex gap-3">
          <button className="hover:text-[#00D9FF] transition">👍 Sí</button>
          <button className="hover:text-[#FF4D4D] transition">👎 No</button>
        </div>
      </div>
    </ArticleLayout>
  );
}

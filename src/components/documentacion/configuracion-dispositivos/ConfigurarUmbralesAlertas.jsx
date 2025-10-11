"use client";
import ArticleLayout from "../ArticleLayout";

export default function ConfigurarUmbralesAlertas() {
  return (
    <ArticleLayout
      category="configuracion-dispositivos"
      time="10"
      title="Configurar Umbrales de Alertas"
    >
      <p>
        Esta es una vista previa del artículo de documentación. En una implementación completa,
        aquí se mostraría el contenido completo del artículo con formato Markdown, imágenes,
        snippets de código y más.
      </p>

      <h2 className="text-lg font-semibold mt-4">Introducción</h2>
      <p>
        Este artículo te guiará a través de los conceptos fundamentales y pasos necesarios
        para completar esta tarea de manera efectiva.
      </p>

      <h2 className="text-lg font-semibold mt-4">Pasos a Seguir</h2>
      <ol className="list-decimal ml-5 text-[#B8C1EC] space-y-1">
        <li>Primero, asegúrate de tener acceso al dashboard.</li>
        <li>Navega a la sección correspondiente.</li>
        <li>Configura los parámetros necesarios.</li>
        <li>Verifica que todo funcione correctamente.</li>
      </ol>

      <h2 className="text-lg font-semibold mt-4">Nota Importante</h2>
      <p className="text-[#FFD166]">
        Asegúrate de seguir las mejores prácticas de seguridad al configurar tus dispositivos IoT.
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
        Siguiendo estos pasos, podrás configurar correctamente el sistema y aprovechar al máximo sus capacidades.
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

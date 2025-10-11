"use client";
import ArticleLayout from "../ArticleLayout";

export default function NavegandoDashboard() {
  return (
    <ArticleLayout
      category="primeros-pasos"
      time="7"
      title="Navegando por el Dashboard"
    >
      <p>
        Esta es una vista previa del artículo de documentación. En una implementación completa,
        aquí se mostraría el contenido completo del artículo con formato Markdown, imágenes,
        snippets de código y más.
      </p>

      <h2 className="text-lg font-semibold text-white mt-4">Introducción</h2>
      <p>
        Este artículo te guiará a través de los conceptos fundamentales y pasos necesarios
        para completar esta tarea de manera efectiva.
      </p>

      <h2 className="text-lg font-semibold text-white mt-4">Pasos a Seguir</h2>
      <ol className="list-decimal ml-5 text-[#B8C1EC] space-y-1">
        <li>Primero, asegúrate de tener acceso al dashboard</li>
        <li>Navega a la sección correspondiente</li>
        <li>Configura los parámetros necesarios</li>
        <li>Verifica que todo funcione correctamente</li>
      </ol>

      <div className="bg-[#111827] border border-[#2A3550] rounded-xl p-4 mt-5">
        <p className="text-yellow-400 font-medium flex items-center gap-2">
          ⚠️ Nota Importante
        </p>
        <p className="text-sm text-[#B8C1EC] mt-1">
          Asegúrate de seguir las mejores prácticas de seguridad al configurar tus dispositivos IoT.
        </p>
      </div>

      <h2 className="text-lg font-semibold text-white mt-5">Ejemplo de Código</h2>
      <pre className="bg-[#0D1326] text-[#00D9FF] text-sm rounded-xl p-4 overflow-x-auto mt-2">
        {`// Ejemplo de configuración
const config = {
  threshold: { h2s: 10, co: 40, dust: 150 },
  notifications: ['email', 'sms']
};`}
      </pre>

      <h2 className="text-lg font-semibold text-white mt-5">Conclusión</h2>
      <p>
        Siguiendo estos pasos, podrás configurar correctamente el sistema y aprovechar al máximo sus capacidades.
      </p>

      <div className="border-t border-[#2A3550] mt-6 pt-4">
        <p className="text-sm text-[#8B9DC3] mb-2">¿Te resultó útil este artículo?</p>
        <div className="flex gap-2">
          <button className="px-3 py-1 bg-emerald-700 hover:bg-emerald-600 rounded-lg text-sm font-medium">
            👍 Sí
          </button>
          <button className="px-3 py-1 bg-rose-800 hover:bg-rose-700 rounded-lg text-sm font-medium">
            👎 No
          </button>
        </div>
      </div>
    </ArticleLayout>
  );
}

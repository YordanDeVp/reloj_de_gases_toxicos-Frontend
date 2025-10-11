"use client";
import ArticleLayout from "../ArticleLayout";

export default function ApiKey() {
  return (
    <ArticleLayout
      category="api-webhooks"
      time="8"
      title="Autenticación con API Key"
    >
      <p>
        Esta es una vista previa del artículo de documentación. En una implementación completa,
        aquí se mostraría el contenido completo del artículo con formato Markdown, ejemplos de código,
        diagramas de flujo y mejores prácticas.
      </p>

      <h2 className="text-lg font-semibold mt-4">Introducción</h2>
      <p>
        SafeMine IoT ofrece un sistema de autenticación mediante API Keys que te permite 
        conectar aplicaciones externas a tu cuenta de manera segura. 
        Este artículo explica cómo generar y utilizar tu clave de autenticación.
      </p>

      <h2 className="text-lg font-semibold mt-4">Pasos a Seguir</h2>
      <ol className="list-decimal ml-5 text-[#B8C1EC] space-y-1">
        <li>Accede al <strong>Dashboard</strong> de SafeMine IoT.</li>
        <li>Ve a la sección <em>API y Webhooks</em>.</li>
        <li>Selecciona <strong>Generar nueva API Key</strong>.</li>
        <li>Copia la clave generada y guárdala en un lugar seguro.</li>
        <li>Utiliza la clave en tus solicitudes HTTP como encabezado de autorización.</li>
      </ol>

      <h2 className="text-lg font-semibold mt-4">Nota Importante</h2>
      <p className="text-[#FFD166]">
        Las API Keys son confidenciales. Nunca las compartas públicamente ni las incluyas en código fuente accesible.
      </p>

      <h2 className="text-lg font-semibold mt-4">Ejemplo de Código</h2>
      <pre className="bg-[#1A2238] text-[#B8C1EC] p-4 rounded-lg text-sm overflow-x-auto">
{`// Ejemplo de solicitud autenticada
fetch("https://api.safemine.io/v1/devices", {
  method: "GET",
  headers: {
    "Authorization": "Bearer TU_API_KEY_AQUI",
    "Content-Type": "application/json",
  },
})
  .then(response => response.json())
  .then(data => console.log("Dispositivos:", data))
  .catch(error => console.error("Error:", error));`}
      </pre>

      <h2 className="text-lg font-semibold mt-4">Conclusión</h2>
      <p>
        La autenticación con API Key permite una integración segura y directa entre tus sistemas
        y la plataforma SafeMine IoT. Mantén tus credenciales protegidas y renueva tus claves periódicamente
        para mejorar la seguridad.
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

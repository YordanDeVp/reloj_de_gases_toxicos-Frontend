"use client";
import ArticleLayout from "../ArticleLayout";

export default function EndpointsDisponibles() {
  return (
    <ArticleLayout
      category="api-webhooks"
      time="15"
      title="Endpoints Disponibles"
    >
      <p>
        Esta es una vista previa del artículo de documentación. En una implementación completa,
        aquí se mostraría el contenido completo del artículo con formato Markdown, tablas de endpoints,
        ejemplos de peticiones y respuestas JSON.
      </p>

      <h2 className="text-lg font-semibold mt-4">Introducción</h2>
      <p>
        SafeMine IoT ofrece múltiples endpoints RESTful para interactuar con dispositivos, 
        obtener datos en tiempo real y gestionar configuraciones. A continuación, se listan
        los principales puntos de conexión disponibles.
      </p>

      <h2 className="text-lg font-semibold mt-4">Pasos a Seguir</h2>
      <ol className="list-decimal ml-5 text-[#B8C1EC] space-y-1">
        <li>Accede a la <strong>documentación oficial de la API</strong> desde el dashboard.</li>
        <li>Identifica los endpoints que necesitas utilizar según tus requerimientos.</li>
        <li>Genera una API Key válida.</li>
        <li>Realiza solicitudes HTTP usando tu cliente preferido (Postman, curl, fetch, etc.).</li>
      </ol>

      <h2 className="text-lg font-semibold mt-4">Endpoints Principales</h2>
      <ul className="list-disc ml-5 text-[#B8C1EC] space-y-1">
        <li><code>GET /devices</code> → Lista todos los dispositivos registrados.</li>
        <li><code>GET /devices/:id</code> → Obtiene información detallada de un dispositivo.</li>
        <li><code>POST /alerts</code> → Crea una nueva alerta manualmente.</li>
        <li><code>GET /metrics</code> → Devuelve las métricas de gas y polvo actuales.</li>
        <li><code>GET /notifications</code> → Recupera el historial de notificaciones enviadas.</li>
      </ul>

      <h2 className="text-lg font-semibold mt-4">Nota Importante</h2>
      <p className="text-[#FFD166]">
        Todos los endpoints requieren autenticación mediante el encabezado <code>Authorization: Bearer TU_API_KEY</code>.
      </p>

      <h2 className="text-lg font-semibold mt-4">Ejemplo de Código</h2>
      <pre className="bg-[#1A2238] text-[#B8C1EC] p-4 rounded-lg text-sm overflow-x-auto">
{`// Ejemplo: Obtener lista de dispositivos
fetch("https://api.safemine.io/v1/devices", {
  method: "GET",
  headers: {
    "Authorization": "Bearer TU_API_KEY",
    "Content-Type": "application/json",
  },
})
  .then(response => response.json())
  .then(data => console.log("Dispositivos:", data))
  .catch(error => console.error("Error:", error));`}
      </pre>

      <h2 className="text-lg font-semibold mt-4">Conclusión</h2>
      <p>
        Conociendo los endpoints disponibles, podrás integrar SafeMine IoT fácilmente en tus aplicaciones
        y automatizar procesos de monitoreo o respuesta ante alertas. 
        Consulta la documentación técnica para detalles más avanzados.
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

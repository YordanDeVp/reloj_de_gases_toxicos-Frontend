"use client";
import ArticleLayout from "../ArticleLayout";

export default function ConfigurarWebhooks() {
  return (
    <ArticleLayout
      category="api-webhooks"
      time="10"
      title="Configurar Webhooks"
    >
      <p>
        Esta es una vista previa del artículo de documentación. En una implementación completa,
        aquí se mostraría el contenido completo del artículo con formato Markdown, ejemplos de configuración,
        respuestas del servidor y buenas prácticas.
      </p>

      <h2 className="text-lg font-semibold mt-4">Introducción</h2>
      <p>
        Los webhooks permiten a SafeMine IoT enviar notificaciones automáticas a tus servidores
        cuando ocurren eventos relevantes, como alertas críticas, desconexión de sensores o
        cambios en la configuración. Esto te permite integrar SafeMine con tus sistemas internos.
      </p>

      <h2 className="text-lg font-semibold mt-4">Pasos a Seguir</h2>
      <ol className="list-decimal ml-5 text-[#B8C1EC] space-y-1">
        <li>Accede a la sección <strong>Integraciones & Webhooks</strong> desde el dashboard.</li>
        <li>Haz clic en <strong>“Agregar nuevo Webhook”</strong>.</li>
        <li>Introduce la URL de destino donde SafeMine enviará los datos.</li>
        <li>Selecciona los eventos que deseas recibir (alertas, métricas, estado del dispositivo, etc.).</li>
        <li>Guarda la configuración y verifica la conexión con una prueba.</li>
      </ol>

      <h2 className="text-lg font-semibold mt-4">Formato de Notificación</h2>
      <pre className="bg-[#1A2238] text-[#B8C1EC] p-4 rounded-lg text-sm overflow-x-auto">
{`{
  "event": "alert_critical",
  "device_id": "WCH-004",
  "timestamp": "2025-10-11T15:32:00Z",
  "data": {
    "h2s": 12.4,
    "co": 48,
    "dust": 180
  }
}`}
      </pre>

      <h2 className="text-lg font-semibold mt-4">Nota Importante</h2>
      <p className="text-[#FFD166]">
        Asegúrate de que tu endpoint acepte solicitudes HTTPS con certificados válidos. 
        Los webhooks deben responder con un código <code>200 OK</code> en menos de 5 segundos
        para considerarse entregados correctamente.
      </p>

      <h2 className="text-lg font-semibold mt-4">Ejemplo de Código</h2>
      <pre className="bg-[#1A2238] text-[#B8C1EC] p-4 rounded-lg text-sm overflow-x-auto">
{`// Ejemplo: Servidor Node.js para recibir Webhooks
import express from "express";
const app = express();
app.use(express.json());

app.post("/webhook/safemine", (req, res) => {
  console.log("Evento recibido:", req.body);
  res.status(200).send("OK");
});

app.listen(4000, () => console.log("Servidor escuchando en puerto 4000"));`}
      </pre>

      <h2 className="text-lg font-semibold mt-4">Conclusión</h2>
      <p>
        Los webhooks te permiten automatizar la respuesta a eventos en tiempo real dentro de SafeMine IoT.
        Configurarlos correctamente garantiza una integración fluida entre tus sistemas y la plataforma.
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

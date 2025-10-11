"use client";
import ArticleLayout from "../ArticleLayout";

export default function EjemplosDeIntegracion() {
  return (
    <ArticleLayout
      category="api-webhooks"
      time="20"
      title="Ejemplos de Integración"
    >
      <p>
        Esta es una vista previa del artículo de documentación. En una implementación completa,
        aquí se mostraría el contenido completo del artículo con formato Markdown, ejemplos prácticos
        de integración con distintos lenguajes y frameworks, además de recomendaciones de seguridad.
      </p>

      <h2 className="text-lg font-semibold mt-4">Introducción</h2>
      <p>
        En esta sección aprenderás cómo integrar SafeMine IoT con tus propias aplicaciones utilizando
        la API REST y los Webhooks disponibles. Verás ejemplos en Node.js, Python y otros entornos
        para que puedas automatizar procesos fácilmente.
      </p>

      <h2 className="text-lg font-semibold mt-4">Pasos a Seguir</h2>
      <ol className="list-decimal ml-5 text-[#B8C1EC] space-y-1">
        <li>Genera tu clave API desde la sección <strong>Configuración &gt; API</strong>.</li>
        <li>Autoriza tus solicitudes usando el header <code>Authorization: Bearer &lt;API_KEY&gt;</code>.</li>
        <li>Usa los endpoints disponibles para obtener datos o configurar dispositivos.</li>
        <li>Verifica tus integraciones mediante pruebas en entorno de desarrollo.</li>
      </ol>

      <h2 className="text-lg font-semibold mt-4">Ejemplo de Integración con Node.js</h2>
      <pre className="bg-[#1A2238] text-[#B8C1EC] p-4 rounded-lg text-sm overflow-x-auto">
{`// Ejemplo: Consultar métricas de un dispositivo con Node.js
import fetch from "node-fetch";

const API_URL = "https://api.safemine.io/devices/WCH-001";
const API_KEY = "tu_api_key_aquí";

async function getDeviceData() {
  const res = await fetch(API_URL, {
    headers: { Authorization: \`Bearer \${API_KEY}\` },
  });
  const data = await res.json();
  console.log("Datos del dispositivo:", data);
}

getDeviceData();`}
      </pre>

      <h2 className="text-lg font-semibold mt-4">Ejemplo de Integración con Python</h2>
      <pre className="bg-[#1A2238] text-[#B8C1EC] p-4 rounded-lg text-sm overflow-x-auto">
{`# Ejemplo: Consultar métricas de un dispositivo con Python
import requests

API_URL = "https://api.safemine.io/devices/WCH-001"
API_KEY = "tu_api_key_aquí"

headers = {
    "Authorization": f"Bearer {API_KEY}"
}

response = requests.get(API_URL, headers=headers)
print("Datos del dispositivo:", response.json())`}
      </pre>

      <h2 className="text-lg font-semibold mt-4">Nota Importante</h2>
      <p className="text-[#FFD166]">
        Asegúrate de proteger tus claves API. Nunca las incluyas directamente en el código público
        ni en repositorios compartidos. Utiliza variables de entorno o servicios de gestión segura.
      </p>

      <h2 className="text-lg font-semibold mt-4">Ejemplo de Código</h2>
      <pre className="bg-[#1A2238] text-[#B8C1EC] p-4 rounded-lg text-sm overflow-x-auto">
{`// Ejemplo de configuración
const config = {
  threshold: { h2s: 10, co: 40, dust: 150 },
  notifications: ["email", "sms"]
};`}
      </pre>

      <h2 className="text-lg font-semibold mt-4">Conclusión</h2>
      <p>
        Siguiendo estos ejemplos podrás integrar SafeMine IoT en tus sistemas para recibir alertas,
        consultar métricas y automatizar tareas críticas de monitoreo en tu mina o entorno industrial.
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

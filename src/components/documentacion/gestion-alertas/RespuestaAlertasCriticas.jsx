"use client";
import ArticleLayout from "../ArticleLayout";

export default function RespuestaAlertasCriticas() {
  return (
    <ArticleLayout
      category="gestion-alertas"
      time="12"
      title="Respuesta a Alertas Críticas"
    >
      <p>
        Esta es una vista previa del artículo de documentación. En una implementación completa,
        aquí se mostraría el contenido completo del artículo con formato Markdown, imágenes,
        ejemplos prácticos y más.
      </p>

      <h2 className="text-lg font-semibold mt-4">Introducción</h2>
      <p>
        Este artículo te guiará sobre cómo reaccionar ante una alerta crítica en el sistema
        SafeMine IoT. Aprenderás las mejores prácticas para evaluar el riesgo y ejecutar
        acciones inmediatas que garanticen la seguridad del personal y la estabilidad de los equipos.
      </p>

      <h2 className="text-lg font-semibold mt-4">Pasos a Seguir</h2>
      <ol className="list-decimal ml-5 text-[#B8C1EC] space-y-1">
        <li>Verifica la autenticidad y severidad de la alerta en el panel principal.</li>
        <li>Evalúa el área afectada y notifica a los equipos cercanos.</li>
        <li>Accede al historial del dispositivo para revisar los valores previos.</li>
        <li>Aplica los protocolos de seguridad establecidos según el tipo de alerta.</li>
        <li>Registra la acción tomada en el sistema para análisis posterior.</li>
      </ol>

      <h2 className="text-lg font-semibold mt-4">Nota Importante</h2>
      <p className="text-[#FFD166]">
        En casos de niveles de gases peligrosos (como H₂S o CO), sigue siempre las normas de
        evacuación y utiliza el equipo de protección adecuado antes de acercarte al área afectada.
      </p>

      <h2 className="text-lg font-semibold mt-4">Ejemplo de Código</h2>
      <pre className="bg-[#1A2238] text-[#B8C1EC] p-4 rounded-lg text-sm overflow-x-auto">
{`// Ejemplo de manejo de alertas críticas
const alertHandler = (alert) => {
  if (alert.level === 'Crítico') {
    sendNotification(['email', 'sms']);
    triggerSafetyProtocol(alert.deviceId);
    logIncident(alert);
  }
};`}
      </pre>

      <h2 className="text-lg font-semibold mt-4">Conclusión</h2>
      <p>
        Responder eficazmente ante alertas críticas minimiza riesgos y asegura la continuidad
        operativa. La preparación y la capacitación del equipo son esenciales para garantizar
        una respuesta rápida y precisa ante emergencias.
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

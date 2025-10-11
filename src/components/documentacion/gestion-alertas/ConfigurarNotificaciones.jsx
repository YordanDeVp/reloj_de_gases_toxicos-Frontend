"use client";
import ArticleLayout from "../ArticleLayout";

export default function ConfigurarNotificaciones() {
  return (
    <ArticleLayout
      category="gestion-alertas"
      time="8"
      title="Configurar Notificaciones"
    >
      <p>
        Esta es una vista previa del artículo de documentación. En una implementación completa,
        aquí se mostraría el contenido completo del artículo con formato Markdown, imágenes,
        ejemplos prácticos y más.
      </p>

      <h2 className="text-lg font-semibold mt-4">Introducción</h2>
      <p>
        Este artículo te guiará paso a paso para configurar correctamente las notificaciones
        en el sistema SafeMine IoT. Aprenderás cómo activar alertas por correo electrónico,
        SMS o integraciones externas.
      </p>

      <h2 className="text-lg font-semibold mt-4">Pasos a Seguir</h2>
      <ol className="list-decimal ml-5 text-[#B8C1EC] space-y-1">
        <li>Accede al panel de <strong>Gestión de Alertas</strong> desde el dashboard.</li>
        <li>Selecciona la pestaña <strong>Notificaciones</strong>.</li>
        <li>Activa los métodos de aviso deseados: correo, SMS o webhook.</li>
        <li>Guarda los cambios y realiza una prueba para verificar la configuración.</li>
      </ol>

      <h2 className="text-lg font-semibold mt-4">Nota Importante</h2>
      <p className="text-[#FFD166]">
        Para recibir alertas por SMS o integraciones externas, asegúrate de que tu plan
        de suscripción incluya estos servicios.
      </p>

      <h2 className="text-lg font-semibold mt-4">Ejemplo de Código</h2>
      <pre className="bg-[#1A2238] text-[#B8C1EC] p-4 rounded-lg text-sm overflow-x-auto">
{`// Ejemplo de configuración de notificaciones
const config = {
  threshold: { h2s: 10, co: 40, dust: 150 },
  notifications: ['email', 'sms', 'webhook'],
  webhookURL: 'https://api.safemine.io/alerts',
};`}
      </pre>

      <h2 className="text-lg font-semibold mt-4">Conclusión</h2>
      <p>
        Configurar correctamente las notificaciones garantiza que el equipo de seguridad
        reciba alertas en tiempo real, permitiendo una respuesta rápida y efectiva
        ante situaciones críticas.
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
    
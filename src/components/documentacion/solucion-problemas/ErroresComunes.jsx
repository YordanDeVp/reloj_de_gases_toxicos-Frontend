"use client";
import ArticleLayout from "../ArticleLayout";

export default function ErroresComunes() {
  return (
    <ArticleLayout
      category="solucion-problemas"
      time="12"
      title="Errores Comunes y Soluciones"
    >
      <p>
        Esta es una vista previa del artículo de documentación. En una implementación completa,
        aquí se mostraría el contenido completo del artículo con formato Markdown, imágenes,
        snippets de código y más.
      </p>

      <h2 className="text-lg font-semibold mt-4">Introducción</h2>
      <p>
        Los dispositivos IoT pueden presentar diversos errores operativos debido a configuraciones
        incorrectas, interferencias o fallos de red. Este artículo recopila los errores más frecuentes 
        en SafeMine IoT y sus soluciones prácticas.
      </p>

      <h2 className="text-lg font-semibold mt-4">Errores Frecuentes</h2>
      <ul className="list-disc ml-5 text-[#B8C1EC] space-y-1">
        <li>
          <strong>Error de Conexión:</strong> El dispositivo no logra comunicarse con el servidor.  
          <em>Solución:</em> Verifica la conexión de red y las credenciales de emparejamiento.
        </li>
        <li>
          <strong>Lecturas Inestables:</strong> Los valores varían sin motivo aparente.  
          <em>Solución:</em> Revisa la calibración de sensores y las condiciones ambientales.
        </li>
        <li>
          <strong>Alertas Falsas:</strong> El sistema notifica sin condiciones reales de riesgo.  
          <em>Solución:</em> Ajusta los umbrales y asegúrate de que los sensores estén limpios.
        </li>
        <li>
          <strong>Sin Datos en el Dashboard:</strong> No se registran mediciones.  
          <em>Solución:</em> Comprueba la fuente de energía y la sincronización de datos.
        </li>
      </ul>

      <h2 className="text-lg font-semibold mt-4">Pasos a Seguir</h2>
      <ol className="list-decimal ml-5 text-[#B8C1EC] space-y-1">
        <li>Accede al panel de dispositivos desde el dashboard principal.</li>
        <li>Identifica el dispositivo afectado y revisa los registros de eventos.</li>
        <li>Aplica las soluciones indicadas según el tipo de error.</li>
        <li>Verifica que el dispositivo recupere su estado operativo normal.</li>
      </ol>

      <h2 className="text-lg font-semibold mt-4">Consejos Preventivos</h2>
      <ul className="list-disc ml-5 text-[#B8C1EC] space-y-1">
        <li>Realiza mantenimiento preventivo cada dos semanas.</li>
        <li>Evita reinicios forzados frecuentes en los dispositivos.</li>
        <li>Mantén actualizado el firmware y las configuraciones de red.</li>
      </ul>

      <h2 className="text-lg font-semibold mt-4">Nota Importante</h2>
      <p className="text-[#FFD166]">
        Antes de escalar cualquier incidente al equipo técnico, asegúrate de haber
        revisado las configuraciones básicas del dispositivo y el estado de la red.
      </p>

      <h2 className="text-lg font-semibold mt-4">Ejemplo de Código</h2>
      <pre className="bg-[#1A2238] text-[#B8C1EC] p-4 rounded-lg text-sm overflow-x-auto">
{`// Ejemplo de validación de conexión
const deviceStatus = async (id) => {
  const response = await fetch(\`/api/device/status/\${id}\`);
  const data = await response.json();
  if (!data.online) {
    console.warn("El dispositivo está desconectado.");
  }
  return data;
};`}
      </pre>

      <h2 className="text-lg font-semibold mt-4">Conclusión</h2>
      <p>
        Identificar rápidamente los errores comunes y aplicar soluciones adecuadas permite 
        mantener el sistema operativo en condiciones óptimas y minimizar tiempos de inactividad 
        en tu red IoT.
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

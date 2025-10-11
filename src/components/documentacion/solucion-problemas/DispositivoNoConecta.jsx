"use client";
import ArticleLayout from "../ArticleLayout";

export default function DispositivoNoConecta() {
  return (
    <ArticleLayout
      category="solucion-problemas"
      time="8"
      title="Dispositivo No Conecta"
    >
      <p>
        Esta es una vista previa del artículo de documentación. En una implementación completa,
        aquí se mostraría el contenido completo del artículo con formato Markdown, imágenes,
        snippets de código y más.
      </p>

      <h2 className="text-lg font-semibold mt-4">Introducción</h2>
      <p>
        En este artículo aprenderás cómo diagnosticar y resolver problemas de conexión en tus
        dispositivos SafeMine IoT. Los fallos de conexión pueden deberse a configuraciones
        incorrectas, fallos de red o interferencias ambientales.
      </p>

      <h2 className="text-lg font-semibold mt-4">Pasos a Seguir</h2>
      <ol className="list-decimal ml-5 text-[#B8C1EC] space-y-1">
        <li>Verifica que el dispositivo esté encendido y con batería suficiente.</li>
        <li>Confirma que la red Wi-Fi o conexión LoRaWAN esté activa y estable.</li>
        <li>Revisa los parámetros de configuración del dispositivo en el dashboard.</li>
        <li>Si el problema persiste, reinicia el dispositivo e intenta nuevamente.</li>
      </ol>

      <h2 className="text-lg font-semibold mt-4">Soluciones Comunes</h2>
      <ul className="list-disc ml-5 text-[#B8C1EC] space-y-1">
        <li>Revisa la distancia entre el dispositivo y el gateway.</li>
        <li>Evita interferencias por otros equipos electrónicos cercanos.</li>
        <li>Actualiza el firmware del dispositivo si hay una nueva versión disponible.</li>
      </ul>

      <h2 className="text-lg font-semibold mt-4">Nota Importante</h2>
      <p className="text-[#FFD166]">
        Asegúrate de seguir las mejores prácticas de seguridad y conexión recomendadas
        por el fabricante para evitar interrupciones en la comunicación IoT.
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
        Siguiendo estos pasos podrás diagnosticar de manera efectiva los problemas de
        conexión y restablecer la comunicación de tus dispositivos SafeMine IoT sin
        comprometer la operación ni la seguridad del sistema.
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

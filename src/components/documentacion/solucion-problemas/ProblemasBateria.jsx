"use client";
import ArticleLayout from "../ArticleLayout";

export default function ProblemasBateria() {
  return (
    <ArticleLayout
      category="solucion-problemas"
      time="7"
      title="Problemas de Batería"
    >
      <p>
        Esta es una vista previa del artículo de documentación. En una implementación completa,
        aquí se mostraría el contenido completo del artículo con formato Markdown, imágenes,
        snippets de código y más.
      </p>

      <h2 className="text-lg font-semibold mt-4">Introducción</h2>
      <p>
        En los sistemas IoT, la duración y el rendimiento de la batería son factores críticos para 
        garantizar un monitoreo continuo y confiable. Este artículo detalla las causas comunes de los 
        problemas de batería y las mejores prácticas para optimizar su duración.
      </p>

      <h2 className="text-lg font-semibold mt-4">Causas Frecuentes</h2>
      <ul className="list-disc ml-5 text-[#B8C1EC] space-y-1">
        <li>Configuración de transmisión con intervalos muy cortos.</li>
        <li>Temperaturas extremas que afectan el rendimiento de la batería.</li>
        <li>Uso intensivo de sensores en tiempo real.</li>
        <li>Fugas de corriente o baterías defectuosas.</li>
      </ul>

      <h2 className="text-lg font-semibold mt-4">Pasos a Seguir</h2>
      <ol className="list-decimal ml-5 text-[#B8C1EC] space-y-1">
        <li>Verifica el estado de la batería desde el panel del dashboard.</li>
        <li>Reduce la frecuencia de muestreo si no es estrictamente necesaria.</li>
        <li>Aplica el modo de ahorro de energía disponible en el dispositivo.</li>
        <li>Reemplaza la batería si presenta un voltaje inferior al recomendado.</li>
      </ol>

      <h2 className="text-lg font-semibold mt-4">Recomendaciones</h2>
      <ul className="list-disc ml-5 text-[#B8C1EC] space-y-1">
        <li>Evita exponer el dispositivo a temperaturas bajo 0°C o superiores a 50°C.</li>
        <li>Configura alertas automáticas de nivel de batería bajo.</li>
        <li>Utiliza baterías originales certificadas por el fabricante.</li>
      </ul>

      <h2 className="text-lg font-semibold mt-4">Nota Importante</h2>
      <p className="text-[#FFD166]">
        Asegúrate de reemplazar las baterías siguiendo los procedimientos de seguridad indicados 
        en la guía del dispositivo. Nunca utilices baterías que no cumplan con las especificaciones 
        recomendadas.
      </p>

      <h2 className="text-lg font-semibold mt-4">Ejemplo de Código</h2>
      <pre className="bg-[#1A2238] text-[#B8C1EC] p-4 rounded-lg text-sm overflow-x-auto">
{`// Ejemplo de configuración de energía
const config = {
  power: {
    sleepMode: true,
    transmissionInterval: 300, // segundos
  },
  notifications: ['email', 'sms'],
};`}
      </pre>

      <h2 className="text-lg font-semibold mt-4">Conclusión</h2>
      <p>
        Siguiendo estas recomendaciones podrás extender la vida útil de las baterías de tus dispositivos
        SafeMine IoT, garantizando un funcionamiento continuo y estable incluso en condiciones exigentes.
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

"use client";
import ArticleLayout from "../ArticleLayout";

export default function CalidadAirePM10() {
  return (
    <ArticleLayout
      category="interpretacion-datos"
      time="7"
      title="Calidad del Aire: Partículas PM10"
    >
      <p>
        Esta es una vista previa del artículo de documentación. En una implementación completa,
        aquí se mostraría el contenido completo del artículo con formato Markdown, imágenes,
        snippets de código y más.
      </p>

      <h2 className="text-lg font-semibold mt-4">Introducción</h2>
      <p>
        Este artículo te ayudará a comprender cómo interpretar los niveles de partículas PM10
        detectadas por los sensores SafeMine IoT, y su impacto en la calidad del aire en entornos mineros.
      </p>

      <h2 className="text-lg font-semibold mt-4">Pasos a Seguir</h2>
      <ol className="list-decimal ml-5 text-[#B8C1EC] space-y-1">
        <li>Accede al dashboard y selecciona el dispositivo correspondiente.</li>
        <li>Verifica la lectura actual de partículas PM10.</li>
        <li>Compara el valor con los umbrales de calidad del aire establecidos.</li>
        <li>Aplica medidas preventivas si los niveles exceden los límites seguros.</li>
      </ol>

      <h2 className="text-lg font-semibold mt-4">Nota Importante</h2>
      <p className="text-[#FFD166]">
        Los niveles elevados de partículas PM10 pueden afectar la salud respiratoria del personal.
        Es importante mantener un control constante y aplicar sistemas de ventilación adecuados.
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
        Monitorear la concentración de PM10 en las minas ayuda a prevenir problemas de salud
        y garantiza un entorno de trabajo más seguro y sostenible.
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

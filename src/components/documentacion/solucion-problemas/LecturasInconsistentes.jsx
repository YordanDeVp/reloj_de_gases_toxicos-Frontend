"use client";
import ArticleLayout from "../ArticleLayout";

export default function LecturasInconsistentes() {
  return (
    <ArticleLayout
      category="solucion-problemas"
      time="10"
      title="Lecturas Inconsistentes"
    >
      <p>
        Esta es una vista previa del artículo de documentación. En una implementación completa,
        aquí se mostraría el contenido completo del artículo con formato Markdown, imágenes,
        snippets de código y más.
      </p>

      <h2 className="text-lg font-semibold mt-4">Introducción</h2>
      <p>
        Las lecturas inconsistentes son uno de los problemas más comunes en sistemas IoT.
        Este artículo te ayudará a identificar las causas más frecuentes y los pasos para
        resolverlas de manera efectiva, garantizando que los sensores entreguen datos
        precisos y confiables.
      </p>

      <h2 className="text-lg font-semibold mt-4">Posibles Causas</h2>
      <ul className="list-disc ml-5 text-[#B8C1EC] space-y-1">
        <li>Interferencias electromagnéticas en el entorno.</li>
        <li>Calibración incorrecta del sensor.</li>
        <li>Fluctuaciones ambientales (temperatura, humedad, polvo).</li>
        <li>Problemas en la comunicación entre el dispositivo y el gateway.</li>
      </ul>

      <h2 className="text-lg font-semibold mt-4">Pasos a Seguir</h2>
      <ol className="list-decimal ml-5 text-[#B8C1EC] space-y-1">
        <li>Verifica la calibración del sensor desde el panel de configuración.</li>
        <li>Reinicia el dispositivo y asegúrate de que esté en un entorno estable.</li>
        <li>Comprueba la integridad de los cables y conectores.</li>
        <li>Revisa los registros de datos para detectar patrones irregulares.</li>
      </ol>

      <h2 className="text-lg font-semibold mt-4">Recomendaciones</h2>
      <ul className="list-disc ml-5 text-[#B8C1EC] space-y-1">
        <li>Realiza una calibración periódica cada 30 días.</li>
        <li>Evita colocar sensores cerca de maquinaria de alta potencia.</li>
        <li>Usa filtros digitales para suavizar los datos en el backend.</li>
      </ul>

      <h2 className="text-lg font-semibold mt-4">Nota Importante</h2>
      <p className="text-[#FFD166]">
        Asegúrate de seguir las mejores prácticas de mantenimiento y calibración recomendadas por el
        fabricante para evitar falsos positivos o valores erróneos.
      </p>

      <h2 className="text-lg font-semibold mt-4">Ejemplo de Código</h2>
      <pre className="bg-[#1A2238] text-[#B8C1EC] p-4 rounded-lg text-sm overflow-x-auto">
{`// Ejemplo de ajuste de calibración
const config = {
  threshold: { h2s: 10, co: 40, dust: 150 },
  smoothing: true,
  notifications: ['email', 'sms']
};`}
      </pre>

      <h2 className="text-lg font-semibold mt-4">Conclusión</h2>
      <p>
        Siguiendo estos pasos podrás identificar la causa raíz de las lecturas inconsistentes
        y mantener la confiabilidad de los sensores SafeMine IoT en todo momento.
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

"use client";
import ArticleLayout from "../ArticleLayout";

export default function NivelesSeveridadAlertas() {
  return (
    <ArticleLayout
      category="gestion-alertas"
      time="6"
      title="Niveles de Severidad de Alertas"
    >
      <p>
        Esta es una vista previa del artículo de documentación. En una implementación completa,
        aquí se mostraría el contenido completo del artículo con formato Markdown, imágenes,
        ejemplos visuales y más.
      </p>

      <h2 className="text-lg font-semibold mt-4">Introducción</h2>
      <p>
        Este artículo explica los diferentes niveles de severidad de las alertas
        en el sistema SafeMine IoT, cómo se clasifican y su importancia para la seguridad operativa.
      </p>

      <h2 className="text-lg font-semibold mt-4">Pasos a Seguir</h2>
      <ol className="list-decimal ml-5 text-[#B8C1EC] space-y-1">
        <li>Accede al panel de <strong>Gestión de Alertas</strong> desde el dashboard.</li>
        <li>Revisa los indicadores de severidad de cada dispositivo.</li>
        <li>Configura los umbrales de detección en función del riesgo.</li>
        <li>Verifica que las alertas se notifiquen correctamente.</li>
      </ol>

      <h2 className="text-lg font-semibold mt-4">Nota Importante</h2>
      <p className="text-[#FFD166]">
        Las alertas críticas deben atenderse de inmediato. Un retraso en la respuesta puede comprometer
        la seguridad de los trabajadores o la estabilidad del entorno de operación.
      </p>

      <h2 className="text-lg font-semibold mt-4">Ejemplo de Código</h2>
      <pre className="bg-[#1A2238] text-[#B8C1EC] p-4 rounded-lg text-sm overflow-x-auto">
{`// Ejemplo de clasificación de alertas
const alertas = [
  { tipo: "Crítica", color: "#FF4D4D", prioridad: 1 },
  { tipo: "Alta", color: "#FFD166", prioridad: 2 },
  { tipo: "Media", color: "#00D9FF", prioridad: 3 },
  { tipo: "Baja", color: "#00FF88", prioridad: 4 },
];`}
      </pre>

      <h2 className="text-lg font-semibold mt-4">Conclusión</h2>
      <p>
        Conocer y diferenciar los niveles de severidad de las alertas permite priorizar acciones
        y optimizar la respuesta ante eventos críticos en la mina.
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

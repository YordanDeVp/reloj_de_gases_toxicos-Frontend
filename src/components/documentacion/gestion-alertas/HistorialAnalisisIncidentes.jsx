"use client";
import ArticleLayout from "../ArticleLayout";

export default function HistorialAnalisisIncidentes() {
  return (
    <ArticleLayout
      category="gestion-alertas"
      time="10"
      title="Historial y Análisis de Incidentes"
    >
      <p>
        Esta es una vista previa del artículo de documentación. En una implementación completa,
        aquí se mostraría el contenido completo del artículo con formato Markdown, imágenes,
        gráficos analíticos y más.
      </p>

      <h2 className="text-lg font-semibold mt-4">Introducción</h2>
      <p>
        El análisis de incidentes es una parte esencial del sistema SafeMine IoT, ya que permite
        entender la frecuencia, el impacto y las causas de las alertas registradas en los
        dispositivos. Este módulo te permite obtener una visión histórica de los eventos y tomar
        decisiones basadas en datos.
      </p>

      <h2 className="text-lg font-semibold mt-4">Pasos a Seguir</h2>
      <ol className="list-decimal ml-5 text-[#B8C1EC] space-y-1">
        <li>Accede al panel de <strong>Gestión de Alertas</strong> desde el dashboard principal.</li>
        <li>Selecciona el filtro de rango de fechas o el tipo de alerta que deseas analizar.</li>
        <li>Revisa el gráfico de tendencias para identificar patrones de comportamiento.</li>
        <li>Descarga el informe en formato PDF o CSV para registro interno.</li>
        <li>Utiliza el módulo de comparación para contrastar diferentes periodos.</li>
      </ol>

      <h2 className="text-lg font-semibold mt-4">Nota Importante</h2>
      <p className="text-[#FFD166]">
        Mantener un historial de alertas actualizado y revisarlo regularmente ayuda a detectar
        fallos en la calibración o mantenimiento de los sensores, así como posibles riesgos
        recurrentes en zonas específicas.
      </p>

      <h2 className="text-lg font-semibold mt-4">Ejemplo de Código</h2>
      <pre className="bg-[#1A2238] text-[#B8C1EC] p-4 rounded-lg text-sm overflow-x-auto">
{`// Ejemplo de extracción de historial de incidentes
const fetchIncidentHistory = async () => {
  const response = await fetch('/api/incidents?range=30days');
  const data = await response.json();
  console.log("Incidentes recientes:", data);
  return data;
};`}
      </pre>

      <h2 className="text-lg font-semibold mt-4">Conclusión</h2>
      <p>
        Analizar el historial de alertas es una herramienta poderosa para mejorar la seguridad
        operacional y la eficiencia de los equipos. SafeMine IoT proporciona herramientas visuales
        y analíticas que facilitan la identificación de tendencias y la toma de decisiones proactivas.
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

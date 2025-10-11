"use client";
import ArticleLayout from "../ArticleLayout";

export default function InterpretandoGraficosTendencias() {
  return (
    <ArticleLayout
      category="interpretacion-datos"
      time="11"
      title="Interpretando Gráficos de Tendencias"
    >
      <p>
        Esta es una vista previa del artículo de documentación. En una implementación completa,
        aquí se mostraría el contenido completo del artículo con formato Markdown, imágenes,
        gráficos interactivos y más.
      </p>

      <h2 className="text-lg font-semibold mt-4">Introducción</h2>
      <p>
        Este artículo te enseñará cómo analizar correctamente los gráficos de tendencias
        generados por SafeMine IoT para comprender el comportamiento de los sensores a lo largo del tiempo.
      </p>

      <h2 className="text-lg font-semibold mt-4">Pasos a Seguir</h2>
      <ol className="list-decimal ml-5 text-[#B8C1EC] space-y-1">
        <li>Accede al panel de “Visualización de Datos” en el dashboard.</li>
        <li>Selecciona el rango de tiempo que deseas analizar.</li>
        <li>Observa los patrones en las curvas de lectura de H₂S, CO y polvo.</li>
        <li>Identifica posibles anomalías o picos que puedan indicar riesgo.</li>
      </ol>

      <h2 className="text-lg font-semibold mt-4">Nota Importante</h2>
      <p className="text-[#FFD166]">
        Los picos frecuentes o incrementos sostenidos en las gráficas pueden indicar una falla en los sensores
        o condiciones peligrosas en el ambiente. Verifica con las herramientas de calibración antes de intervenir.
      </p>

      <h2 className="text-lg font-semibold mt-4">Ejemplo de Código</h2>
      <pre className="bg-[#1A2238] text-[#B8C1EC] p-4 rounded-lg text-sm overflow-x-auto">
{`// Ejemplo de obtención de datos históricos
const fetchData = async () => {
  const response = await fetch('/api/sensores/historico');
  const data = await response.json();
  renderTrendChart(data);
};`}
      </pre>

      <h2 className="text-lg font-semibold mt-4">Conclusión</h2>
      <p>
        Los gráficos de tendencias son una herramienta poderosa para anticipar riesgos y optimizar
        la seguridad en las operaciones mineras. Un análisis constante permite tomar decisiones proactivas.
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

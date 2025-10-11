"use client";
import ArticleLayout from "../ArticleLayout";

export default function ComparacionPlanes() {
  return (
    <ArticleLayout
      category="facturacion-planes"
      time="5"
      title="Comparación de Planes"
    >
      <p>
        Esta es una vista previa del artículo de documentación. En una implementación completa,
        aquí se mostraría el contenido completo del artículo con formato Markdown, imágenes,
        tablas comparativas y ejemplos reales de uso.
      </p>

      <h2 className="text-lg font-semibold mt-4">Introducción</h2>
      <p>
        SafeMine IoT ofrece diferentes planes de suscripción diseñados para adaptarse a las
        necesidades de cada operación minera. Conocer sus diferencias te permitirá elegir el
        plan más adecuado para tu empresa y optimizar tus costos de monitoreo.
      </p>

      <h2 className="text-lg font-semibold mt-4">Pasos a Seguir</h2>
      <ol className="list-decimal ml-5 text-[#B8C1EC] space-y-1">
        <li>Accede al menú principal y selecciona la sección <strong>Facturación y Planes</strong>.</li>
        <li>Revisa las características y límites de cada plan disponible.</li>
        <li>Selecciona el plan que mejor se adapte al tamaño y necesidad de tu operación.</li>
        <li>Confirma tu suscripción o solicita una actualización desde el panel.</li>
      </ol>

      <h2 className="text-lg font-semibold mt-4">Nota Importante</h2>
      <p className="text-[#FFD166]">
        Puedes cambiar de plan en cualquier momento. Sin embargo, las modificaciones en la
        facturación se aplicarán en el siguiente ciclo de cobro.
      </p>

      <h2 className="text-lg font-semibold mt-4">Ejemplo de Código</h2>
      <pre className="bg-[#1A2238] text-[#B8C1EC] p-4 rounded-lg text-sm overflow-x-auto">
{`// Ejemplo: comparación entre planes
const plans = [
  { name: "Básico", devices: 10, support: "Email", price: "$20/mes" },
  { name: "Pro", devices: 50, support: "Email + Chat", price: "$80/mes" },
  { name: "Enterprise", devices: "Ilimitado", support: "24/7 Dedicado", price: "Personalizado" }
];`}
      </pre>

      <h2 className="text-lg font-semibold mt-4">Conclusión</h2>
      <p>
        Comparar los planes disponibles te ayudará a aprovechar mejor los recursos de SafeMine IoT.
        Si tienes una operación en crecimiento, se recomienda optar por un plan con soporte ampliado
        y capacidad de expansión.
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

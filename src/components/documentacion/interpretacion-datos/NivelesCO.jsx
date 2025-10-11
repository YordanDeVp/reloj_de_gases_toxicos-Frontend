"use client";
import ArticleLayout from "../ArticleLayout";

export default function NivelesCO() {
  return (
    <ArticleLayout
      category="interpretacion-datos"
      time="9"
      title="Niveles de CO y su Significado"
    >
      <p>
        Esta es una vista previa del artículo de documentación. En una implementación completa,
        aquí se mostraría el contenido completo del artículo con formato Markdown, imágenes,
        snippets de código y más.
      </p>

      <h2 className="text-lg font-semibold mt-4">Introducción</h2>
      <p>
        Este artículo te ayudará a comprender cómo interpretar los niveles de monóxido de carbono (CO)
        detectados por tus sensores y qué acciones tomar ante posibles incrementos peligrosos.
      </p>

      <h2 className="text-lg font-semibold mt-4">Pasos a Seguir</h2>
      <ol className="list-decimal ml-5 text-[#B8C1EC] space-y-1">
        <li>Verifica que los sensores de CO estén correctamente calibrados.</li>
        <li>Accede al dashboard para revisar los valores en tiempo real.</li>
        <li>Compara los valores registrados con los umbrales establecidos.</li>
        <li>Si se detectan niveles altos, revisa el sistema de ventilación.</li>
      </ol>

      <h2 className="text-lg font-semibold mt-4">Nota Importante</h2>
      <p className="text-[#FFD166]">
        El CO es un gas incoloro y potencialmente mortal. Asegúrate de realizar mantenimientos
        regulares y configurar alertas automáticas en el sistema SafeMine IoT.
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
        Comprender los niveles de CO es clave para garantizar la seguridad de los trabajadores
        en zonas mineras. SafeMine IoT permite un monitoreo continuo y notificaciones automáticas
        para prevenir incidentes.
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

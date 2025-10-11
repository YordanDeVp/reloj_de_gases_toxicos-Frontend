"use client";
import ArticleLayout from "../ArticleLayout";

export default function PoliticaCancelacion() {
  return (
    <ArticleLayout
      category="facturacion-planes"
      time="4"
      title="Política de Cancelación"
    >
      <p>
        Esta es una vista previa del artículo de documentación. En una implementación completa,
        aquí se mostraría el contenido completo del artículo con formato Markdown, imágenes,
        ejemplos prácticos y más.
      </p>

      <h2 className="text-lg font-semibold mt-4">Introducción</h2>
      <p>
        En SafeMine IoT entendemos que las necesidades de cada cliente pueden cambiar.
        Por ello, ofrecemos un proceso de cancelación simple, transparente y sin complicaciones.
        Este artículo detalla cómo puedes cancelar tu suscripción y qué aspectos debes considerar.
      </p>

      <h2 className="text-lg font-semibold mt-4">Pasos a Seguir</h2>
      <ol className="list-decimal ml-5 text-[#B8C1EC] space-y-1">
        <li>Accede al <strong>Dashboard</strong> de SafeMine IoT.</li>
        <li>Dirígete a la sección <em>Facturación y Planes</em>.</li>
        <li>Selecciona la opción <strong>Cancelar Suscripción</strong>.</li>
        <li>Confirma la cancelación y revisa los términos aplicables.</li>
        <li>Recibirás un correo electrónico con la confirmación del proceso.</li>
      </ol>

      <h2 className="text-lg font-semibold mt-4">Nota Importante</h2>
      <p className="text-[#FFD166]">
        La cancelación entra en vigor al finalizar el periodo de facturación actual. 
        No se realizan reembolsos parciales una vez iniciado un ciclo de pago.
      </p>

      <h2 className="text-lg font-semibold mt-4">Ejemplo de Código</h2>
      <pre className="bg-[#1A2238] text-[#B8C1EC] p-4 rounded-lg text-sm overflow-x-auto">
{`// Ejemplo: cancelar una suscripción
const cancelSubscription = async () => {
  try {
    const response = await api.post("/billing/cancel-subscription");
    console.log("Suscripción cancelada:", response.data);
  } catch (error) {
    console.error("Error al cancelar la suscripción:", error);
  }
};

cancelSubscription();`}
      </pre>

      <h2 className="text-lg font-semibold mt-4">Conclusión</h2>
      <p>
        Puedes cancelar tu suscripción en cualquier momento sin cargos ocultos. 
        Te recomendamos revisar los términos del servicio antes de proceder para evitar interrupciones 
        inesperadas en tus servicios o almacenamiento de datos.
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

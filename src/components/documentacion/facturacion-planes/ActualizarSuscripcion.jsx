"use client";
import ArticleLayout from "../ArticleLayout";

export default function ActualizarSuscripcion() {
  return (
    <ArticleLayout
      category="facturacion-planes"
      time="7"
      title="Actualizar tu Suscripción"
    >
      <p>
        Esta es una vista previa del artículo de documentación. En una implementación completa,
        aquí se mostraría el contenido completo del artículo con formato Markdown, imágenes, pasos
        detallados y ejemplos visuales.
      </p>

      <h2 className="text-lg font-semibold mt-4">Introducción</h2>
      <p>
        SafeMine IoT te permite actualizar tu suscripción de forma rápida y segura. Esta función
        está diseñada para que puedas escalar tu plan según las necesidades de tu operación,
        sin interrupciones en el servicio.
      </p>

      <h2 className="text-lg font-semibold mt-4">Pasos a Seguir</h2>
      <ol className="list-decimal ml-5 text-[#B8C1EC] space-y-1">
        <li>Accede al <strong>Dashboard</strong> y dirígete a la sección <em>Facturación y Planes</em>.</li>
        <li>Haz clic en la opción <strong>Actualizar Plan</strong> o <strong>Cambiar Suscripción</strong>.</li>
        <li>Selecciona el nuevo plan que deseas contratar y revisa sus beneficios.</li>
        <li>Confirma el cambio de plan y el método de pago asociado.</li>
        <li>Recibirás una notificación confirmando la actualización de tu suscripción.</li>
      </ol>

      <h2 className="text-lg font-semibold mt-4">Nota Importante</h2>
      <p className="text-[#FFD166]">
        Si realizas una actualización a mitad de ciclo, el sistema ajustará automáticamente el
        cobro proporcional en tu próxima factura. No es necesario realizar ninguna acción adicional.
      </p>

      <h2 className="text-lg font-semibold mt-4">Ejemplo de Código</h2>
      <pre className="bg-[#1A2238] text-[#B8C1EC] p-4 rounded-lg text-sm overflow-x-auto">
{`// Ejemplo: actualización de plan de usuario
const updateSubscription = async (newPlan) => {
  const response = await api.post("/billing/update", { plan: newPlan });
  console.log("Suscripción actualizada:", response.data);
};

updateSubscription("pro");`}
      </pre>

      <h2 className="text-lg font-semibold mt-4">Conclusión</h2>
      <p>
        Actualizar tu suscripción te permite mantener la flexibilidad de tu servicio y adaptar
        SafeMine IoT al crecimiento de tu operación. Recuerda que siempre puedes volver a un
        plan anterior si tus necesidades cambian.
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

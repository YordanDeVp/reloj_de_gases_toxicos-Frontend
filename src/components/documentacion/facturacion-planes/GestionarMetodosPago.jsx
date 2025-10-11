"use client";
import ArticleLayout from "../ArticleLayout";

export default function GestionarMetodosPago() {
  return (
    <ArticleLayout
      category="facturacion-planes"
      time="6"
      title="Gestionar Métodos de Pago"
    >
      <p>
        Esta es una vista previa del artículo de documentación. En una implementación completa,
        aquí se mostraría el contenido completo del artículo con formato Markdown, imágenes, 
        ejemplos prácticos y enlaces útiles.
      </p>

      <h2 className="text-lg font-semibold mt-4">Introducción</h2>
      <p>
        SafeMine IoT permite gestionar de manera flexible tus métodos de pago para mantener tus
        suscripciones activas sin interrupciones. Puedes agregar, eliminar o cambiar tarjetas,
        así como configurar un método principal para facturación automática.
      </p>

      <h2 className="text-lg font-semibold mt-4">Pasos a Seguir</h2>
      <ol className="list-decimal ml-5 text-[#B8C1EC] space-y-1">
        <li>Accede al <strong>Dashboard</strong> y dirígete a la sección <em>Facturación y Planes</em>.</li>
        <li>Haz clic en <strong>Métodos de Pago</strong>.</li>
        <li>Selecciona <strong>Agregar Método de Pago</strong> e ingresa los datos de tu tarjeta o cuenta.</li>
        <li>Confirma la información y guarda los cambios.</li>
        <li>Puedes marcar un método como <strong>predeterminado</strong> para pagos futuros.</li>
      </ol>

      <h2 className="text-lg font-semibold mt-4">Nota Importante</h2>
      <p className="text-[#FFD166]">
        SafeMine IoT no almacena directamente la información de tus tarjetas. Todos los pagos son 
        procesados de forma segura a través de pasarelas certificadas PCI DSS.
      </p>

      <h2 className="text-lg font-semibold mt-4">Ejemplo de Código</h2>
      <pre className="bg-[#1A2238] text-[#B8C1EC] p-4 rounded-lg text-sm overflow-x-auto">
{`// Ejemplo: agregar método de pago
const addPaymentMethod = async (paymentData) => {
  const response = await api.post("/billing/payment-methods", paymentData);
  console.log("Método de pago agregado:", response.data);
};

addPaymentMethod({
  type: "card",
  number: "**** **** **** 4242",
  expiry: "12/28"
});`}
      </pre>

      <h2 className="text-lg font-semibold mt-4">Conclusión</h2>
      <p>
        Mantener tus métodos de pago actualizados garantiza una facturación continua sin interrupciones.
        Puedes modificar o eliminar métodos en cualquier momento desde tu panel de administración.
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

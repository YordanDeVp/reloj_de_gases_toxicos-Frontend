"use client";
import ArticleLayout from "../ArticleLayout";

export default function CuantosDispositivos() {
  return (
    <ArticleLayout
      category="preguntas-frecuentes"
      time="3"
      title="¿Cuántos dispositivos puedo conectar?"
    >
      <p>
        SafeMine IoT permite conectar múltiples dispositivos dentro de tu red,
        dependiendo del plan de suscripción que tengas activo. Cada dispositivo
        puede enviar datos en tiempo real al dashboard, lo que te permite una
        supervisión centralizada y eficiente.
      </p>

      <h2 className="text-lg font-semibold mt-4">Introducción</h2>
      <p>
        El número máximo de dispositivos que puedes conectar depende del tipo de
        plan contratado y de la capacidad del gateway principal. A medida que
        crece tu operación, puedes escalar fácilmente tu infraestructura IoT.
      </p>

      <h2 className="text-lg font-semibold mt-4">Límites por Plan</h2>
      <ul className="list-disc ml-5 text-[#B8C1EC] space-y-1">
        <li><strong>Plan Básico:</strong> Hasta 10 dispositivos.</li>
        <li><strong>Plan Profesional:</strong> Hasta 50 dispositivos.</li>
        <li><strong>Plan Empresarial:</strong> Dispositivos ilimitados.</li>
      </ul>

      <h2 className="text-lg font-semibold mt-4">Pasos a Seguir</h2>
      <ol className="list-decimal ml-5 text-[#B8C1EC] space-y-1">
        <li>Verifica tu plan actual desde la sección de “Facturación y Planes”.</li>
        <li>Conecta tus sensores al gateway siguiendo las instrucciones.</li>
        <li>Agrega cada dispositivo al dashboard mediante su número de serie.</li>
        <li>Confirma que todos los dispositivos estén activos y transmitiendo datos.</li>
      </ol>

      <h2 className="text-lg font-semibold mt-4">Nota Importante</h2>
      <p>
        Si alcanzas el límite de dispositivos, puedes actualizar tu plan desde el
        panel de administración sin necesidad de desconectar los sensores actuales.
      </p>

      <h2 className="text-lg font-semibold mt-4">Ejemplo de Código</h2>
      <pre className="bg-[#1A2238] text-[#B8C1EC] p-4 rounded-lg text-sm overflow-x-auto">
{`// Ejemplo de registro de dispositivo
const newDevice = {
  id: 'SM-2025-001',
  type: 'sensor_h2s',
  location: 'Zona Norte',
  active: true
};

dashboard.registerDevice(newDevice);`}
      </pre>

      <h2 className="text-lg font-semibold mt-4">Conclusión</h2>
      <p>
        Con SafeMine IoT, puedes escalar tu red de dispositivos fácilmente y sin
        interrupciones. La plataforma está diseñada para crecer contigo y adaptarse
        a las necesidades de tu operación.
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

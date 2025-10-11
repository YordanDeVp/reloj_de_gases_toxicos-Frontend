"use client";
import ArticleLayout from "../ArticleLayout";

export default function ComoFuncionaIoT() {
  return (
    <ArticleLayout
      category="preguntas-frecuentes"
      time="6"
      title="¿Cómo funciona el sistema IoT?"
    >
      <p>
        SafeMine IoT utiliza una red de sensores conectados que monitorean en tiempo real 
        las condiciones ambientales y de seguridad en tu mina o instalación industrial. 
        Estos dispositivos recopilan datos como concentraciones de gases, niveles de polvo 
        y estado de los equipos, enviándolos al dashboard central para su análisis.
      </p>

      <h2 className="text-lg font-semibold mt-4">Introducción</h2>
      <p>
        El sistema IoT de SafeMine se basa en la comunicación constante entre sensores, 
        servidores y la interfaz de usuario. Cada dispositivo transmite datos utilizando 
        protocolos seguros y eficientes, garantizando la precisión de la información.
      </p>

      <h2 className="text-lg font-semibold mt-4">Estructura del Sistema</h2>
      <ul className="list-disc ml-5 text-[#B8C1EC] space-y-1">
        <li><strong>Sensores:</strong> Capturan métricas ambientales como H₂S, CO y polvo.</li>
        <li><strong>Gateway:</strong> Transmite los datos de los sensores al servidor central.</li>
        <li><strong>Servidor:</strong> Procesa, almacena y analiza los datos en tiempo real.</li>
        <li><strong>Dashboard:</strong> Permite visualizar métricas, alertas y reportes.</li>
      </ul>

      <h2 className="text-lg font-semibold mt-4">Pasos a Seguir</h2>
      <ol className="list-decimal ml-5 text-[#B8C1EC] space-y-1">
        <li>Conecta tus sensores al gateway principal.</li>
        <li>Configura los umbrales de alertas desde el dashboard.</li>
        <li>Verifica la sincronización de los datos en tiempo real.</li>
        <li>Monitorea las métricas desde el panel de control.</li>
      </ol>

      <h2 className="text-lg font-semibold mt-4">Seguridad y Comunicación</h2>
      <p>
        Todos los datos son encriptados durante la transmisión para proteger la integridad 
        de la información. El sistema utiliza autenticación mediante claves API únicas para 
        cada dispositivo, asegurando la identificación correcta.
      </p>

      <h2 className="text-lg font-semibold mt-4">Ejemplo de Código</h2>
      <pre className="bg-[#1A2238] text-[#B8C1EC] p-4 rounded-lg text-sm overflow-x-auto">
{`// Ejemplo de configuración IoT
const config = {
  threshold: { h2s: 10, co: 40, dust: 150 },
  notifications: ['email', 'sms'],
  security: { encryption: true, apiKey: 'XYZ-12345' }
};`}
      </pre>

      <h2 className="text-lg font-semibold mt-4">Conclusión</h2>
      <p>
        SafeMine IoT te permite mantener un monitoreo continuo y seguro de tus operaciones, 
        mejorando la eficiencia, la seguridad y la capacidad de respuesta ante incidentes. 
        Comprender su funcionamiento es clave para aprovechar su potencial al máximo.
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

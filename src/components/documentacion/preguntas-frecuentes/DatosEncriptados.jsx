"use client";
import ArticleLayout from "../ArticleLayout";

export default function DatosEncriptados() {
  return (
    <ArticleLayout
      category="preguntas-frecuentes"
      time="5"
      title="¿Los datos están encriptados?"
    >
      <p>
        En SafeMine IoT, la seguridad de tus datos es una prioridad. Todos los datos
        transmitidos desde los dispositivos hacia la plataforma están completamente
        cifrados utilizando estándares modernos de encriptación.
      </p>

      <h2 className="text-lg font-semibold mt-4">Introducción</h2>
      <p>
        Los datos recopilados por los sensores se envían a través de conexiones
        seguras (HTTPS y MQTT con TLS 1.3). Además, la información se almacena
        cifrada en reposo mediante algoritmos AES-256 para garantizar la
        confidencialidad y protección ante accesos no autorizados.
      </p>

      <h2 className="text-lg font-semibold mt-4">Capas de Seguridad</h2>
      <ul className="list-disc ml-5 text-[#B8C1EC] space-y-1">
        <li><strong>Transmisión Segura:</strong> Todos los datos viajan por canales cifrados (TLS).</li>
        <li><strong>Encriptación en Reposo:</strong> Se utiliza AES-256 en la base de datos.</li>
        <li><strong>Autenticación de Dispositivos:</strong> Cada sensor se autentica antes de enviar datos.</li>
        <li><strong>Control de Acceso:</strong> Solo usuarios autorizados pueden visualizar o exportar datos.</li>
      </ul>

      <h2 className="text-lg font-semibold mt-4">Pasos a Seguir</h2>
      <ol className="list-decimal ml-5 text-[#B8C1EC] space-y-1">
        <li>Verifica que los dispositivos estén actualizados con el firmware más reciente.</li>
        <li>Asegúrate de usar conexiones seguras al acceder al dashboard.</li>
        <li>Configura autenticación de dos factores (2FA) para tu cuenta.</li>
        <li>Evita compartir tus credenciales o tokens de API.</li>
      </ol>

      <h2 className="text-lg font-semibold mt-4">Nota Importante</h2>
      <p>
        Aunque SafeMine IoT cifra todos los datos, la seguridad también depende de las
        prácticas del usuario. Mantén tus credenciales seguras y utiliza contraseñas
        robustas.
      </p>

      <h2 className="text-lg font-semibold mt-4">Ejemplo de Código</h2>
      <pre className="bg-[#1A2238] text-[#B8C1EC] p-4 rounded-lg text-sm overflow-x-auto">
{`// Ejemplo de encriptación con AES
import crypto from "crypto";

const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);
const cipher = crypto.createCipheriv("aes-256-cbc", key, iv);
let encrypted = cipher.update("dato_confidencial", "utf8", "hex");
encrypted += cipher.final("hex");
console.log(encrypted);`}
      </pre>

      <h2 className="text-lg font-semibold mt-4">Conclusión</h2>
      <p>
        SafeMine IoT garantiza que toda la información transmitida y almacenada esté
        protegida bajo los más altos estándares de seguridad industrial, asegurando
        la integridad y privacidad de tus datos.
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

"use client";
import ArticleLayout from "../ArticleLayout";

export default function ExportarDatos() {
  return (
    <ArticleLayout
      category="preguntas-frecuentes"
      time="4"
      title="¿Puedo exportar mis datos?"
    >
      <p>
        Sí, SafeMine IoT permite exportar los datos recopilados de tus dispositivos en
        múltiples formatos, como CSV, Excel o JSON, para análisis externos o reportes
        personalizados.
      </p>

      <h2 className="text-lg font-semibold mt-4">Introducción</h2>
      <p>
        Esta funcionalidad te permite descargar tus mediciones, eventos y alertas
        directamente desde el dashboard. De esta forma puedes procesar la información
        en otras plataformas o compartirla con tu equipo.
      </p>

      <h2 className="text-lg font-semibold mt-4">Pasos a Seguir</h2>
      <ol className="list-decimal ml-5 text-[#B8C1EC] space-y-1">
        <li>Accede al dashboard de SafeMine IoT con tus credenciales.</li>
        <li>Dirígete a la sección <strong>“Datos”</strong> o <strong>“Historial”</strong>.</li>
        <li>Selecciona el rango de fechas y los dispositivos que deseas exportar.</li>
        <li>Haz clic en el botón <strong>“Exportar Datos”</strong> y elige el formato deseado.</li>
      </ol>

      <h2 className="text-lg font-semibold mt-4">Nota Importante</h2>
      <p>
        La exportación está sujeta a permisos de usuario. Si no ves la opción,
        contacta a tu administrador para habilitar el acceso a la descarga de datos.
      </p>

      <h2 className="text-lg font-semibold mt-4">Ejemplo de Código</h2>
      <pre className="bg-[#1A2238] text-[#B8C1EC] p-4 rounded-lg text-sm overflow-x-auto">
{`// Ejemplo: exportar datos desde la API de SafeMine
fetch("https://api.safemine.io/v1/export?format=csv", {
  headers: {
    Authorization: "Bearer TU_API_KEY",
  },
})
  .then((res) => res.blob())
  .then((blob) => {
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "datos_safemine.csv";
    a.click();
  });`}
      </pre>

      <h2 className="text-lg font-semibold mt-4">Conclusión</h2>
      <p>
        Exportar tus datos es una herramienta poderosa para analizar tendencias,
        crear reportes personalizados y compartir resultados con tu equipo técnico o
        gerencial.
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

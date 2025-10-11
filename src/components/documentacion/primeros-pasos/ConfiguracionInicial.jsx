"use client";
import ArticleLayout from "../ArticleLayout";

export default function ConfiguracionInicial() {
  return (
    <ArticleLayout
      category="primeros-pasos"
      time="10"
      title="Configuración Inicial del Sistema"
    >
      <p>
        Esta es una vista previa del artículo de documentación. En una implementación completa,
        aquí se mostraría el contenido completo del artículo con formato Markdown, imágenes,
        snippets de código y más.
      </p>

      <h2 className="text-lg font-semibold text-white mt-4">Introducción</h2>
      <p>
        Este artículo te guiará a través de los conceptos fundamentales y pasos necesarios
        para completar esta tarea de manera efectiva.
      </p>

      <h2 className="text-lg font-semibold text-white mt-4">Pasos a Seguir</h2>
      <ol className="list-decimal ml-5 text-[#B8C1EC] space-y-1">
        <li>Primero, asegúrate de tener acceso al dashboard</li>
        <li>Navega a la sección correspondiente</li>
        <li>Configura los parámetros necesarios</li>
        <li>Verifica que todo funcione correctamente</li>
      </ol>
    </ArticleLayout>
  );
}

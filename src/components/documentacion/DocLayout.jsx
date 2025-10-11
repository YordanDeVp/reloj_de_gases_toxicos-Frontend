"use client";
import DocSidebar from "./DocSidebar";
import DocSearch from "./DocSearch";
import DocWelcome from "./DocWelcome";
import DocVideos from "./DocVideos";

export default function DocLayout({ children }) {
  return (
    <div className="min-h-screen bg-[#0B1120] text-white px-8 py-6">
      <h1 className="text-3xl font-bold text-center mb-2">
        Centro de Documentación
      </h1>
      <p className="text-center text-[#8B9DC3] mb-8">
        Encuentra guías, tutoriales y respuestas a tus preguntas
      </p>

      <DocSearch />

      <div className="flex gap-6 mt-8">
        <DocSidebar />
        <div className="flex-1 flex flex-col gap-6">
          {children || (
            <>
              <DocWelcome />
              <DocVideos />
            </>
          )}
        </div>
      </div>
    </div>
  );
}

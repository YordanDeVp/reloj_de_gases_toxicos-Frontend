"use client";
import Link from "next/link";

const articulos = [
  {
    slug: "tipos-sensores",
    title: "Tipos de Sensores Soportados",
    time: "6 min lectura",
  },
  {
    slug: "activacion-emparejamiento",
    title: "Activación y Emparejamiento",
    time: "12 min lectura",
  },
  {
    slug: "configurar-umbrales",
    title: "Configurar Umbrales de Alertas",
    time: "10 min lectura",
  },
  {
    slug: "calibracion-sensores",
    title: "Calibración de Sensores",
    time: "15 min lectura",
  },
  {
    slug: "mantenimiento-preventivo",
    title: "Mantenimiento Preventivo",
    time: "8 min lectura",
  },
];

export default function ConfiguracionDispositivosList() {
  return (
    <div className="space-y-6">
      {/* Encabezado */}
      <div>
        <h1 className="text-2xl font-bold text-white">Configuración de Dispositivos</h1>
        <p className="text-[#8B9DC3] text-sm mt-1">5 artículos disponibles</p>
      </div>

      {/* Listado de artículos */}
      <div className="grid grid-cols-1 gap-4">
        {articulos.map((articulo, index) => (
          <Link
            key={index}
            href={`/documentacion/configuracion-dispositivos/${articulo.slug}`}
            className="block bg-[#111827] border border-[#2A3550] hover:border-[#00D9FF]/60 hover:bg-[#00D9FF]/5 p-5 rounded-xl transition-all"
          >
            <h3 className="text-lg font-semibold text-white mb-1">{articulo.title}</h3>
            <p className="text-sm text-[#8B9DC3]">{articulo.time}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

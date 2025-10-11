import { PlayCircle } from "lucide-react";

const videos = [
  { title: "Tour Completo del Sistema", duration: "12:45", views: "2.3k vistas" },
  { title: "Instalación de Dispositivos IoT", duration: "8:30", views: "1.8k vistas" },
  { title: "Configuración de Alertas Avanzadas", duration: "10:15", views: "1.5k vistas" },
  { title: "Generación de Reportes Personalizados", duration: "6:20", views: "1.2k vistas" },
];

export default function DocVideos() {
  return (
    <div className="bg-[#1A2238] border border-[#2A3550] rounded-2xl p-6">
      <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
        <PlayCircle className="text-[#00D9FF]" /> Video Tutoriales
      </h3>

      <div className="grid grid-cols-2 gap-4">
        {videos.map((video, i) => (
          <div key={i} className="bg-[#111827] rounded-xl p-4 hover:border-[#00D9FF]/50 border border-transparent transition">
            <div className="h-32 bg-gradient-to-br from-[#003C46] to-[#032C35] rounded-xl flex items-center justify-center mb-3">
              <PlayCircle className="text-[#B88FFF]" size={36} />
            </div>
            <p className="font-medium">{video.title}</p>
            <div className="flex justify-between text-xs text-[#8B9DC3] mt-1">
              <span>{video.duration}</span>
              <span>{video.views}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

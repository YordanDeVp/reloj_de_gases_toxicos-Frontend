import { BookOpen } from "lucide-react";

export default function DocWelcome() {
  return (
    <div className="bg-[#0E1C26] border border-[#1E293B] rounded-2xl p-10 text-center">
      <BookOpen className="mx-auto text-[#00D9FF]" size={40} />
      <h2 className="text-2xl font-bold mt-4">¡Bienvenido a la Documentación!</h2>
      <p className="text-[#8B9DC3] mt-2">
        Selecciona una categoría de la izquierda para comenzar o usa el buscador para encontrar información específica
      </p>
    </div>
  );
}

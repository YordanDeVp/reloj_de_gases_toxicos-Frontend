"use client";
import { Upload, ChevronDown } from "lucide-react";
import { useState } from "react";

export default function ConfigGeneral() {
  /*
    NOTA / PENDIENTE BACKEND:

    - Los valores de los campos (nombre de organización, zona horaria, idioma, etc.) 
      actualmente están como valores por defecto estáticos.
    - Cuando esté lista la API, aquí se obtendrán los datos de configuración 
      mediante un GET a un endpoint
  */

  const [logo, setLogo] = useState(null);
  const [logoPreview, setLogoPreview] = useState(null);

  /*
    CUANDO CONECTE CON EL BACKEND:
    
    Aquí iría un useEffect para cargar la configuración existente:
    
  */

  const handleLogoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setLogo(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setLogoPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }

    /*
      INTEGRACIÓN BACKEND - SUBIDA DE LOGO:
    */
  };

  return (
    <div className="bg-[#141A2A] p-6 rounded-2xl border border-[#1E2733]">
      <h2 className="text-xl font-semibold mb-6">Información de la Organización</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Nombre de la Organización */}
        <div>
          <label className="block text-sm mb-2 text-[#AAB5CF]">Nombre de la Organización</label>
          <input
            className="w-full bg-[#0A0E1A] border border-[#2A3550] rounded-lg p-2 text-white focus:border-[#00D9FF] focus:outline-none transition-all"
            defaultValue="Minera del Norte S.A."
          />
        </div>

        {/* Logo de la Empresa */}
        <div>
          <label className="block text-sm mb-2 text-[#AAB5CF]">Logo de la Empresa</label>
          <div className="flex items-center gap-3">
            {/* Preview del logo si existe */}
            {logoPreview && (
              <div className="w-10 h-10 rounded-lg overflow-hidden border border-[#2A3550]">
                <img src={logoPreview} alt="Logo preview" className="w-full h-full object-cover" />
              </div>
            )}
            
            {/* Input oculto para subir archivo */}
            <input
              type="file"
              id="logo-upload"
              accept="image/png, image/jpeg, image/jpg"
              onChange={handleLogoUpload}
              className="hidden"
            />
            
            {/* Botón para activar el input */}
            <label
              htmlFor="logo-upload"
              className="flex items-center gap-2 bg-[#0A0E1A] border border-[#2A3550] rounded-lg px-3 py-2 hover:border-[#00D9FF] transition-all cursor-pointer"
            >
              <Upload size={16} /> Subir Logo
            </label>
            
            <span className="text-xs text-[#8B9DC3]">
              Tamaño recomendado: 200×200px (PNG, JPG)
            </span>
          </div>
        </div>

        {/* Zona Horaria */}
        <div>
          <label className="block text-sm mb-2 text-[#AAB5CF]">Zona Horaria</label>
          <div className="relative">
            <select className="w-full bg-[#0A0E1A] border border-[#2A3550] rounded-lg p-2 text-white appearance-none cursor-pointer focus:border-[#00D9FF] focus:outline-none transition-all pr-10">
              <option value="santiago">América/Santiago (UTC-3)</option>
              <option value="lima">América/Lima (UTC-5)</option>
              <option value="mexico">América/México (UTC-6)</option>
              <option value="bogota">América/Bogotá (UTC-5)</option>
            </select>
            <ChevronDown 
              className="absolute right-3 top-1/2 -translate-y-1/2 text-[#8B9DC3] pointer-events-none" 
              size={16} 
            />
          </div>
        </div>

        {/* Idioma */}
        <div>
          <label className="block text-sm mb-2 text-[#AAB5CF]">Idioma</label>
          <div className="relative">
            <select className="w-full bg-[#0A0E1A] border border-[#2A3550] rounded-lg p-2 text-white appearance-none cursor-pointer focus:border-[#00D9FF] focus:outline-none transition-all pr-10">
              <option value="es">Español</option>
              <option value="en">Inglés</option>
              <option value="pt">Portugués</option>
            </select>
            <ChevronDown 
              className="absolute right-3 top-1/2 -translate-y-1/2 text-[#8B9DC3] pointer-events-none" 
              size={16} 
            />
          </div>
        </div>

        {/* Formato de Fecha */}
        <div>
          <label className="block text-sm mb-2 text-[#AAB5CF]">Formato de Fecha</label>
          <input
            className="w-full bg-[#0A0E1A] border border-[#2A3550] rounded-lg p-2 text-white focus:border-[#00D9FF] focus:outline-none transition-all"
            defaultValue="DD/MM/YYYY"
          />
        </div>

        {/* Unidades de Medida */}
        <div>
          <label className="block text-sm mb-2 text-[#AAB5CF]">Unidades de Medida</label>
          <div className="relative">
            <select className="w-full bg-[#0A0E1A] border border-[#2A3550] rounded-lg p-2 text-white appearance-none cursor-pointer focus:border-[#00D9FF] focus:outline-none transition-all pr-10">
              <option value="metric">Métrico (SI)</option>
              <option value="imperial">Imperial</option>
            </select>
            <ChevronDown 
              className="absolute right-3 top-1/2 -translate-y-1/2 text-[#8B9DC3] pointer-events-none" 
              size={16} 
            />
          </div>
        </div>
      </div>

      {/* Botón de guardar */}
      <button 
        className="mt-6 bg-[#00D9FF] text-[#0A0E1A] font-semibold px-6 py-2 rounded-lg hover:bg-[#00B8D4] transition-all"
        onClick={() => {
          /*
            INTEGRACIÓN BACKEND - GUARDAR CONFIGURACIÓN:
            
            // Mostrar notificación de éxito o error
          */
          alert("Configuración guardada (Esto se conectará al backend)");
        }}
      >
        Guardar Cambios
      </button>
    </div>
  );
}
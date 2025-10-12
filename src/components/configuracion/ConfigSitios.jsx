"use client";
import { MapPin, Plus, Trash2, Edit, X } from "lucide-react";
import { useState } from "react";

export default function ConfigSitios() {
  /*
    NOTA / PENDIENTE BACKEND:

    - Los sitios actualmente están definidos como un array estático.    
    - Las operaciones CRUD se conectarán a los siguientes endpoints:
      - POST `${API_URL}/configuracion/sitios` - Crear sitio
      - PUT `${API_URL}/configuracion/sitios/:id` - Actualizar sitio
      - DELETE `${API_URL}/configuracion/sitios/:id` - Eliminar sitio
      - POST `${API_URL}/configuracion/sitios/:id/zonas` - Agregar zona
      - DELETE `${API_URL}/configuracion/sitios/:id/zonas/:zonaId` - Eliminar zona
  */

  const [sitios, setSitios] = useState([
    { id: 1, nombre: "Túnel A", zonas: ["Zona 1", "Zona 2", "Zona 3"] },
    { id: 2, nombre: "Túnel B", zonas: ["Zona 1", "Zona 2"] },
    { id: 3, nombre: "Túnel C", zonas: ["Zona 1", "Zona 2", "Zona 3", "Zona 4"] },
  ]);

  const [showModalSitio, setShowModalSitio] = useState(false);
  const [showModalZona, setShowModalZona] = useState(false);
  const [sitioActual, setSitioActual] = useState(null);
  const [nuevoSitioNombre, setNuevoSitioNombre] = useState("");
  const [nuevaZonaNombre, setNuevaZonaNombre] = useState("");
  const [modoEdicion, setModoEdicion] = useState(false);

  // Agregar nuevo sitio
  const handleAgregarSitio = () => {
    if (!nuevoSitioNombre.trim()) return;

    /*
      INTEGRACIÓN BACKEND - CREAR SITIO:
    */

    const nuevoSitio = {
      id: Date.now(),
      nombre: nuevoSitioNombre,
      zonas: []
    };

    setSitios([...sitios, nuevoSitio]);
    setNuevoSitioNombre("");
    setShowModalSitio(false);
  };

  // Editar sitio existente
  const handleEditarSitio = (sitio) => {
    setSitioActual(sitio);
    setNuevoSitioNombre(sitio.nombre);
    setModoEdicion(true);
    setShowModalSitio(true);
  };

  const handleGuardarEdicion = () => {
    if (!nuevoSitioNombre.trim()) return;

    /*
      INTEGRACIÓN BACKEND - ACTUALIZAR SITIO:
    */

    setSitios(sitios.map(s => 
      s.id === sitioActual.id ? { ...s, nombre: nuevoSitioNombre } : s
    ));
    
    setNuevoSitioNombre("");
    setShowModalSitio(false);
    setModoEdicion(false);
    setSitioActual(null);
  };

  // Eliminar sitio
  const handleEliminarSitio = (sitioId) => {
    if (!confirm("¿Estás seguro de eliminar este sitio?")) return;

    /*
      INTEGRACIÓN BACKEND - ELIMINAR SITIO:
    */

    setSitios(sitios.filter(s => s.id !== sitioId));
  };

  // Agregar zona a un sitio
  const handleAgregarZona = () => {
    if (!nuevaZonaNombre.trim()) return;

    /*
      INTEGRACIÓN BACKEND - AGREGAR ZONA:
    */

    setSitios(sitios.map(s => 
      s.id === sitioActual.id 
        ? { ...s, zonas: [...s.zonas, nuevaZonaNombre] }
        : s
    ));

    setNuevaZonaNombre("");
    setShowModalZona(false);
    setSitioActual(null);
  };

  // Eliminar zona de un sitio
  const handleEliminarZona = (sitioId, zonaNombre) => {
    if (!confirm("¿Estás seguro de eliminar esta zona?")) return;

    /*
      INTEGRACIÓN BACKEND - ELIMINAR ZONA:
    */

    setSitios(sitios.map(s => 
      s.id === sitioId 
        ? { ...s, zonas: s.zonas.filter(z => z !== zonaNombre) }
        : s
    ));
  };

  return (
    <div className="bg-[#141A2A] p-6 rounded-2xl border border-[#1E2733]">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Sitios y Zonas Mineras</h2>
        <button 
          onClick={() => {
            setModoEdicion(false);
            setNuevoSitioNombre("");
            setShowModalSitio(true);
          }}
          className="flex items-center gap-2 bg-[#00D9FF] text-black px-4 py-2 rounded-lg font-semibold hover:bg-[#00B8D4] transition"
        >
          <Plus size={16} /> Agregar Sitio
        </button>
      </div>

      {/* Lista de sitios */}
      {sitios.map((s) => (
        <div key={s.id} className="bg-[#0A0E1A] rounded-xl border border-[#2A3550] p-4 mb-4">
          <div className="flex justify-between items-center mb-2">
            <div className="flex items-center gap-2">
              <MapPin className="text-[#00D9FF]" />
              <h3 className="font-semibold">{s.nombre}</h3>
            </div>
            <div className="flex gap-2">
              <button 
                onClick={() => handleEditarSitio(s)}
                className="bg-[#1E2733] text-[#00D9FF] px-3 py-1 rounded-md text-sm flex items-center gap-1 hover:bg-[#2A3550] transition"
              >
                <Edit size={14} /> Editar
              </button>
              <button 
                onClick={() => handleEliminarSitio(s.id)}
                className="bg-[#1E2733] text-[#FF4567] px-3 py-1 rounded-md text-sm flex items-center gap-1 hover:bg-[#2A3550] transition"
              >
                <Trash2 size={14} /> Eliminar
              </button>
            </div>
          </div>

          <div className="flex gap-2 flex-wrap">
            {s.zonas.map((z) => (
              <div 
                key={z} 
                className="px-3 py-1 bg-[#1E2733] rounded-md text-sm flex items-center gap-2 group"
              >
                {z}
                <button
                  onClick={() => handleEliminarZona(s.id, z)}
                  className="opacity-0 group-hover:opacity-100 transition-opacity text-[#FF4567] hover:text-[#FF6B8A]"
                >
                  <X size={14} />
                </button>
              </div>
            ))}
            <button 
              onClick={() => {
                setSitioActual(s);
                setShowModalZona(true);
              }}
              className="flex items-center gap-1 text-[#00D9FF] text-sm hover:text-[#00B8D4] transition"
            >
              <Plus size={14} /> Agregar Zona
            </button>
          </div>
        </div>
      ))}

      {/* Modal para agregar/editar sitio */}
      {showModalSitio && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-[#141A2A] border border-[#2A3550] rounded-2xl p-6 w-full max-w-md">
            <h3 className="text-xl font-semibold mb-4">
              {modoEdicion ? "Editar Sitio" : "Agregar Nuevo Sitio"}
            </h3>
            <input
              type="text"
              placeholder="Nombre del sitio (ej: Túnel D)"
              value={nuevoSitioNombre}
              onChange={(e) => setNuevoSitioNombre(e.target.value)}
              className="w-full bg-[#0A0E1A] border border-[#2A3550] rounded-lg p-3 mb-4 focus:border-[#00D9FF] focus:outline-none"
            />
            <div className="flex gap-3 justify-end">
              <button
                onClick={() => {
                  setShowModalSitio(false);
                  setNuevoSitioNombre("");
                  setModoEdicion(false);
                  setSitioActual(null);
                }}
                className="px-4 py-2 bg-[#1E2733] rounded-lg hover:bg-[#2A3550] transition"
              >
                Cancelar
              </button>
              <button
                onClick={modoEdicion ? handleGuardarEdicion : handleAgregarSitio}
                className="px-4 py-2 bg-[#00D9FF] text-black font-semibold rounded-lg hover:bg-[#00B8D4] transition"
              >
                {modoEdicion ? "Guardar" : "Agregar"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal para agregar zona */}
      {showModalZona && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-[#141A2A] border border-[#2A3550] rounded-2xl p-6 w-full max-w-md">
            <h3 className="text-xl font-semibold mb-4">
              Agregar Zona a {sitioActual?.nombre}
            </h3>
            <input
              type="text"
              placeholder="Nombre de la zona (ej: Zona 5)"
              value={nuevaZonaNombre}
              onChange={(e) => setNuevaZonaNombre(e.target.value)}
              className="w-full bg-[#0A0E1A] border border-[#2A3550] rounded-lg p-3 mb-4 focus:border-[#00D9FF] focus:outline-none"
            />
            <div className="flex gap-3 justify-end">
              <button
                onClick={() => {
                  setShowModalZona(false);
                  setNuevaZonaNombre("");
                  setSitioActual(null);
                }}
                className="px-4 py-2 bg-[#1E2733] rounded-lg hover:bg-[#2A3550] transition"
              >
                Cancelar
              </button>
              <button
                onClick={handleAgregarZona}
                className="px-4 py-2 bg-[#00D9FF] text-black font-semibold rounded-lg hover:bg-[#00B8D4] transition"
              >
                Agregar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
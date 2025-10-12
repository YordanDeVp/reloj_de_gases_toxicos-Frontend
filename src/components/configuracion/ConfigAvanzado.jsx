"use client";
import { Download, Trash2, X, ChevronDown } from "lucide-react";
import { useState } from "react";

export default function ConfigAvanzado() {
  /*
    🔸 NOTA / PENDIENTE BACKEND:

    - Las opciones avanzadas actualmente tienen valores por defecto estáticos.
    
    - Cuando esté lista la API, se obtendrán mediante un GET a:
      `${API_URL}/configuracion/avanzado`
    
    - Las operaciones se conectarán a los siguientes endpoints:
      - GET `${API_URL}/configuracion/avanzado` - Obtener configuración avanzada
      - PUT `${API_URL}/configuracion/avanzado/debug` - Activar/desactivar modo debug
      - PUT `${API_URL}/configuracion/avanzado/logs` - Cambiar retención de logs
      - POST `${API_URL}/configuracion/avanzado/exportar` - Solicitar exportación GDPR
      - DELETE `${API_URL}/configuracion/avanzado/cuenta` - Eliminar cuenta permanentemente
  */

  const [modoDebug, setModoDebug] = useState(false);
  const [retencionLogs, setRetencionLogs] = useState("90");
  const [exportando, setExportando] = useState(false);
  const [showModalEliminar, setShowModalEliminar] = useState(false);
  const [confirmacionTexto, setConfirmacionTexto] = useState("");

  // Toggle Modo Debug
  const handleToggleDebug = async (nuevoEstado) => {
    setModoDebug(nuevoEstado);

    /*
      INTEGRACIÓN BACKEND - ACTIVAR/DESACTIVAR DEBUG:
    */
  };

  // Cambiar retención de logs
  const handleCambiarRetencion = async (dias) => {
    setRetencionLogs(dias);

    /*
      INTEGRACIÓN BACKEND - CAMBIAR RETENCIÓN DE LOGS:
    */
  };

  // Exportar datos (GDPR)
  const handleExportarDatos = async () => {
    setExportando(true);

    /*
      INTEGRACIÓN BACKEND - EXPORTAR DATOS (GDPR):
    */

    // Simulación de exportación
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setExportando(false);
    alert("Datos exportados exitosamente en formato JSON");
  };

  // Eliminar cuenta permanentemente
  const handleEliminarCuenta = async () => {
    if (confirmacionTexto !== "ELIMINAR") {
      alert("Por favor escribe ELIMINAR para confirmar");
      return;
    }

    /*
      INTEGRACIÓN BACKEND - ELIMINAR CUENTA:
    */

    alert("Cuenta eliminada exitosamente (simulación)");
    setShowModalEliminar(false);
    setConfirmacionTexto("");
  };

  return (
    <div className="bg-[#1E2640] p-6 rounded-2xl border border-[#2A3550] space-y-8">
      <h2 className="text-xl font-semibold">Opciones Avanzadas</h2>

      {/* Modo Debug */}
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-semibold text-white">Modo Debug</h3>
            <p className="text-sm text-[#8B9DC3]">Habilita logs detallados del sistema</p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={modoDebug}
              onChange={(e) => handleToggleDebug(e.target.checked)}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-gray-700 rounded-full peer peer-checked:bg-[#00D9FF] transition-all relative">
              <div className={`absolute top-0.5 left-0.5 bg-white w-5 h-5 rounded-full transition-transform ${
                modoDebug ? "translate-x-5" : ""
              }`}></div>
            </div>
          </label>
        </div>
      </div>

      {/* Retención de Logs */}
      <div className="space-y-2">
        <div>
          <h3 className="font-semibold text-white">Retención de Logs</h3>
          <p className="text-sm text-[#8B9DC3] mb-3">Mantener logs por {retencionLogs} días</p>
        </div>
        <div className="relative">
          <select
            value={retencionLogs}
            onChange={(e) => handleCambiarRetencion(e.target.value)}
            className="w-full bg-[#141A2A] border border-[#2A3550] text-white rounded-lg px-4 py-3 appearance-none cursor-pointer focus:border-[#00D9FF] focus:outline-none transition-all"
          >
            <option value="30">30 días</option>
            <option value="60">60 días</option>
            <option value="90">90 días</option>
            <option value="180">180 días</option>
          </select>
          <ChevronDown 
            className="absolute right-3 top-1/2 -translate-y-1/2 text-[#8B9DC3] pointer-events-none" 
            size={16} 
          />
        </div>
      </div>

      {/* Exportación de Datos (GDPR) */}
      <div className="space-y-3">
        <div>
          <h3 className="font-semibold text-white">Exportación de Datos (GDPR)</h3>
          <p className="text-sm text-[#8B9DC3]">Descarga todos tus datos en formato JSON</p>
        </div>
        <button 
          onClick={handleExportarDatos}
          disabled={exportando}
          className={`bg-[#00D9FF] text-black font-semibold px-5 py-3 rounded-lg flex items-center gap-2 transition-all ${
            exportando ? "opacity-50 cursor-not-allowed" : "hover:bg-[#00B8D4]"
          }`}
        >
          <Download size={16} /> 
          {exportando ? "Exportando..." : "Exportar Mis Datos"}
        </button>
      </div>

      {/* Zona de Peligro */}
      <div className="border-t border-[#2A3550] pt-6 space-y-3">
        <h3 className="text-[#FF4D4D] font-semibold text-lg">Zona de Peligro</h3>
        <p className="text-[#8B9DC3] text-sm">
          Eliminar permanentemente tu cuenta y todos los datos asociados
        </p>
        <button 
          onClick={() => setShowModalEliminar(true)}
          className="bg-[#FF4D4D] text-white px-5 py-3 rounded-lg flex items-center gap-2 hover:bg-[#FF1E4D] transition-all font-semibold"
        >
          <Trash2 size={16} /> Eliminar Cuenta
        </button>
      </div>

      {/* Modal: Confirmar Eliminación de Cuenta */}
      {showModalEliminar && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="bg-[#141A2A] border-2 border-[#FF4D4D] rounded-2xl p-6 w-full max-w-md">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-semibold text-[#FF4D4D] flex items-center gap-2">
                  <Trash2 size={20} />
                  ⚠️ Eliminar Cuenta
                </h3>
              </div>
              <button 
                onClick={() => {
                  setShowModalEliminar(false);
                  setConfirmacionTexto("");
                }} 
                className="text-[#8B9DC3] hover:text-white"
              >
                <X size={20} />
              </button>
            </div>
            
            <div className="space-y-4">
              <div className="bg-[#FF4D4D]/10 border border-[#FF4D4D]/30 rounded-lg p-4">
                <p className="text-sm text-white mb-2">
                  <strong>Esta acción es irreversible.</strong> Se eliminarán permanentemente:
                </p>
                <ul className="text-sm text-[#8B9DC3] space-y-1 list-disc list-inside">
                  <li>Tu cuenta de usuario</li>
                  <li>Todos los dispositivos asociados</li>
                  <li>Historial de alertas y lecturas</li>
                  <li>Configuraciones personalizadas</li>
                  <li>Datos de facturación</li>
                </ul>
              </div>

              <div>
                <label className="block text-sm text-white mb-2">
                  Para confirmar, escribe <strong className="text-[#FF4D4D]">ELIMINAR</strong>
                </label>
                <input
                  type="text"
                  value={confirmacionTexto}
                  onChange={(e) => setConfirmacionTexto(e.target.value)}
                  placeholder="ELIMINAR"
                  className="w-full bg-[#0A0E1A] border border-[#2A3550] rounded-lg p-3 text-white focus:border-[#FF4D4D] focus:outline-none"
                />
              </div>

              <div className="flex gap-3 justify-end">
                <button
                  onClick={() => {
                    setShowModalEliminar(false);
                    setConfirmacionTexto("");
                  }}
                  className="px-4 py-2 bg-[#1E2733] rounded-lg hover:bg-[#2A3550] transition"
                >
                  Cancelar
                </button>
                <button
                  onClick={handleEliminarCuenta}
                  disabled={confirmacionTexto !== "ELIMINAR"}
                  className={`px-4 py-2 bg-[#FF4D4D] text-white font-semibold rounded-lg transition ${
                    confirmacionTexto !== "ELIMINAR"
                      ? "opacity-50 cursor-not-allowed"
                      : "hover:bg-[#FF1E4D]"
                  }`}
                >
                  Eliminar Permanentemente
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
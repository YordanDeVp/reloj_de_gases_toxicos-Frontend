"use client";
import { CreditCard, Plus, Trash2, Download, X } from "lucide-react";
import { useState } from "react";

export default function ConfigFacturacion() {
  /*
    🔸 NOTA / PENDIENTE BACKEND:

    - Los métodos de pago y el historial actualmente están definidos como datos estáticos.
    
    - Cuando esté lista la API, se obtendrán mediante un GET a:
      `${API_URL}/configuracion/facturacion`
    
    - Las operaciones se conectarán a los siguientes endpoints:
      - GET `${API_URL}/configuracion/facturacion/metodos` - Obtener métodos de pago
      - POST `${API_URL}/configuracion/facturacion/metodos` - Agregar método de pago
      - PUT `${API_URL}/configuracion/facturacion/metodos/:id/predeterminar` - Establecer como predeterminado
      - DELETE `${API_URL}/configuracion/facturacion/metodos/:id` - Eliminar método de pago
      - GET `${API_URL}/configuracion/facturacion/historial` - Obtener historial de pagos
      - GET `${API_URL}/configuracion/facturacion/recibo/:id` - Descargar recibo
  */

  const [metodos, setMetodos] = useState([
    { id: 1, numero: "4242", predeterminada: true, expira: "12/25" },
    { id: 2, numero: "8888", predeterminada: false, expira: "09/26" },
  ]);

  const [pagos, setPagos] = useState([
    { id: 1, fecha: "01/10/2024", concepto: "Plan Profesional - Mensual", monto: "$149.00", estado: "Pagado" },
    { id: 2, fecha: "01/09/2024", concepto: "Plan Profesional - Mensual", monto: "$149.00", estado: "Pagado" },
    { id: 3, fecha: "01/08/2024", concepto: "Plan Profesional - Mensual", monto: "$149.00", estado: "Pagado" },
  ]);

  const [showModalAgregar, setShowModalAgregar] = useState(false);
  const [descargando, setDescargando] = useState(null);

  /*
    CUANDO CONECTE CON EL BACKEND:
  */

  // Predeterminar método de pago
  const handlePredeterminar = async (metodoId) => {
    /*
      INTEGRACIÓN BACKEND - PREDETERMINAR MÉTODO:
    */

    setMetodos(metodos.map(m => ({
      ...m,
      predeterminada: m.id === metodoId
    })));
  };

  // Eliminar método de pago
  const handleEliminar = async (metodoId) => {
    const metodo = metodos.find(m => m.id === metodoId);
    
    if (metodo.predeterminada) {
      alert("No puedes eliminar el método de pago predeterminado. Establece otro método como predeterminado primero.");
      return;
    }

    if (!confirm("¿Estás seguro de eliminar este método de pago?")) return;

    /*
      INTEGRACIÓN BACKEND - ELIMINAR MÉTODO:
    */

    setMetodos(metodos.filter(m => m.id !== metodoId));
  };

  // Agregar método de pago
  const handleAgregarMetodo = async (datosMetodo) => {
    /*
      INTEGRACIÓN BACKEND - AGREGAR MÉTODO:
    */

    const nuevoMetodo = {
      id: Date.now(),
      numero: datosMetodo.numero.slice(-4),
      predeterminada: metodos.length === 0,
      expira: datosMetodo.expiracion
    };

    setMetodos([...metodos, nuevoMetodo]);
    setShowModalAgregar(false);
    alert("Método de pago agregado exitosamente");
  };

  // Descargar recibo
  const handleDescargarRecibo = async (pagoId) => {
    setDescargando(pagoId);

    /*
      INTEGRACIÓN BACKEND - DESCARGAR RECIBO
    */

    // Simulación de descarga
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setDescargando(null);
    alert("Recibo descargado exitosamente");
  };

  return (
    <div className="bg-[#1E2640] p-6 rounded-2xl border border-[#2A3550] space-y-6">
      {/* Métodos de Pago */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Métodos de Pago</h2>
        <div className="space-y-3">
          {metodos.map((m) => (
            <div 
              key={m.id} 
              className="bg-[#141A2A] border border-[#2A3550] rounded-xl p-4 flex justify-between items-center hover:border-[#00D9FF] transition-all"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#00D9FF]/10 rounded-lg flex items-center justify-center">
                  <CreditCard className="text-[#00D9FF]" size={20} />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-semibold">•••• {m.numero}</span>
                    {m.predeterminada && (
                      <span className="text-[#00FF88] text-xs bg-[#00FF88]/10 px-2 py-1 rounded-full">
                        Predeterminada
                      </span>
                    )}
                  </div>
                  <small className="text-[#8B9DC3]">Expira {m.expira}</small>
                </div>
              </div>
              <div className="flex items-center gap-2">
                {!m.predeterminada && (
                  <button 
                    onClick={() => handlePredeterminar(m.id)}
                    className="text-[#00D9FF] text-sm px-3 py-1 rounded-lg border border-[#00D9FF] hover:bg-[#00D9FF] hover:text-black transition-all font-semibold"
                  >
                    Predeterminar
                  </button>
                )}
                <button 
                  onClick={() => handleEliminar(m.id)}
                  className="text-[#FF4D4D] p-2 rounded-lg hover:bg-[#FF4D4D]/10 transition-all"
                >
                  <Trash2 size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>

        <button 
          onClick={() => setShowModalAgregar(true)}
          className="w-full mt-4 bg-[#00D9FF] text-black py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-[#00B8D4] transition-all font-semibold"
        >
          <Plus size={18} /> Agregar Método de Pago
        </button>
      </div>

      {/* Historial de Pagos */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Historial de Pagos</h2>
        <div className="bg-[#141A2A] border border-[#2A3550] rounded-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-[#0A0E1A]">
                <tr className="text-[#8B9DC3] border-b border-[#2A3550]">
                  <th className="py-3 px-4 font-semibold">Fecha</th>
                  <th className="py-3 px-4 font-semibold">Concepto</th>
                  <th className="py-3 px-4 font-semibold">Monto</th>
                  <th className="py-3 px-4 font-semibold">Estado</th>
                  <th className="py-3 px-4 font-semibold">Recibo</th>
                </tr>
              </thead>
              <tbody>
                {pagos.map((p) => (
                  <tr key={p.id} className="border-b border-[#2A3550] hover:bg-[#1A2238] transition-all">
                    <td className="py-3 px-4 font-semibold text-white">{p.fecha}</td>
                    <td className="py-3 px-4 text-[#8B9DC3]">{p.concepto}</td>
                    <td className="py-3 px-4 font-semibold text-white">{p.monto}</td>
                    <td className="py-3 px-4">
                      <span className="text-[#00FF88] text-xs bg-[#00FF88]/10 px-2 py-1 rounded-full">
                        {p.estado}
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <button
                        onClick={() => handleDescargarRecibo(p.id)}
                        disabled={descargando === p.id}
                        className={`text-[#00D9FF] flex items-center gap-1 hover:text-[#00B8D4] transition-all ${
                          descargando === p.id ? "opacity-50 cursor-not-allowed" : ""
                        }`}
                      >
                        <Download size={14} /> 
                        {descargando === p.id ? "Descargando..." : "Descargar"}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Modal: Agregar Método de Pago */}
      {showModalAgregar && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-[#141A2A] border border-[#2A3550] rounded-2xl p-6 w-full max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold">Agregar Método de Pago</h3>
              <button 
                onClick={() => setShowModalAgregar(false)} 
                className="text-[#8B9DC3] hover:text-white"
              >
                <X size={20} />
              </button>
            </div>
            <form 
              onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.target);
                handleAgregarMetodo({
                  numero: formData.get('numero'),
                  nombre: formData.get('nombre'),
                  expiracion: formData.get('expiracion'),
                  cvv: formData.get('cvv')
                });
              }}
              className="space-y-4"
            >
              <div>
                <label className="block text-sm text-[#8B9DC3] mb-2">Número de Tarjeta</label>
                <input
                  type="text"
                  name="numero"
                  placeholder="1234 5678 9012 3456"
                  maxLength="19"
                  required
                  className="w-full bg-[#0A0E1A] border border-[#2A3550] rounded-lg p-3 text-white focus:border-[#00D9FF] focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm text-[#8B9DC3] mb-2">Nombre del Titular</label>
                <input
                  type="text"
                  name="nombre"
                  placeholder="Juan Pérez"
                  required
                  className="w-full bg-[#0A0E1A] border border-[#2A3550] rounded-lg p-3 text-white focus:border-[#00D9FF] focus:outline-none"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-[#8B9DC3] mb-2">Fecha de Expiración</label>
                  <input
                    type="text"
                    name="expiracion"
                    placeholder="MM/AA"
                    maxLength="5"
                    required
                    className="w-full bg-[#0A0E1A] border border-[#2A3550] rounded-lg p-3 text-white focus:border-[#00D9FF] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm text-[#8B9DC3] mb-2">CVV</label>
                  <input
                    type="text"
                    name="cvv"
                    placeholder="123"
                    maxLength="4"
                    required
                    className="w-full bg-[#0A0E1A] border border-[#2A3550] rounded-lg p-3 text-white focus:border-[#00D9FF] focus:outline-none"
                  />
                </div>
              </div>
              <div className="flex gap-3 justify-end mt-6">
                <button
                  type="button"
                  onClick={() => setShowModalAgregar(false)}
                  className="px-4 py-2 bg-[#1E2733] rounded-lg hover:bg-[#2A3550] transition"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-[#00D9FF] text-black font-semibold rounded-lg hover:bg-[#00B8D4] transition"
                >
                  Agregar Tarjeta
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
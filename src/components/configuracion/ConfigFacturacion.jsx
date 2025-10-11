"use client";
import { CreditCard, Plus, Trash2, Download } from "lucide-react";

export default function ConfigFacturacion() {
  const metodos = [
    { id: "4242", pred: true, expira: "12/25" },
    { id: "8888", pred: false, expira: "09/25" },
  ];

  const pagos = [
    { fecha: "01/10/2024", concepto: "Plan Profesional - Mensual", monto: "$149.00" },
    { fecha: "01/09/2024", concepto: "Plan Profesional - Mensual", monto: "$149.00" },
    { fecha: "01/08/2024", concepto: "Plan Profesional - Mensual", monto: "$149.00" },
  ];

  return (
    <div className="bg-[#141A2A] p-6 rounded-2xl border border-[#1E2733] space-y-6">
      <h2 className="text-xl font-semibold">Métodos de Pago</h2>
      {metodos.map((m) => (
        <div key={m.id} className="bg-[#0A0E1A] border border-[#2A3550] rounded-lg p-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <CreditCard className="text-[#00D9FF]" />
            <span>•••• {m.id}</span>
            <small className="text-[#8B9DC3]">Expira {m.expira}</small>
          </div>
          <div className="flex items-center gap-2">
            {m.pred ? (
              <span className="text-[#00FF88] text-sm">Predeterminada</span>
            ) : (
              <button className="text-[#00D9FF] text-sm">Predeterminar</button>
            )}
            <button className="text-[#FF4567]">
              <Trash2 size={16} />
            </button>
          </div>
        </div>
      ))}

      <button className="w-full bg-[#00D9FF] text-black py-2 rounded-md flex items-center justify-center gap-2 hover:bg-[#00B8D4] transition">
        <Plus size={16} /> Agregar Método de Pago
      </button>

      <h2 className="text-xl font-semibold mt-8">Historial de Pagos</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm border-collapse">
          <thead>
            <tr className="text-[#8B9DC3] border-b border-[#2A3550]">
              <th className="py-2 px-2">Fecha</th>
              <th className="py-2 px-2">Concepto</th>
              <th className="py-2 px-2">Monto</th>
              <th className="py-2 px-2">Recibo</th>
            </tr>
          </thead>
          <tbody>
            {pagos.map((p, i) => (
              <tr key={i} className="border-b border-[#1E2733]">
                <td className="py-2 px-2 font-semibold">{p.fecha}</td>
                <td className="py-2 px-2">{p.concepto}</td>
                <td className="py-2 px-2">{p.monto}</td>
                <td className="py-2 px-2 text-[#00D9FF] flex items-center gap-1 cursor-pointer hover:text-[#00B8D4]">
                  <Download size={14} /> Descargar
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

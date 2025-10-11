"use client";
import React, { useState } from "react";
import { FiCopy, FiLink, FiMail, FiMessageSquare } from "react-icons/fi";

export default function ConfigIntegraciones() {
  const [webhookEnabled, setWebhookEnabled] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("sk_live_51H8xA2JKLNMOPQRSTUVWXYZabcdefghijklmno");
    alert("Token copiado al portapapeles");
  };

  return (
    <div className="bg-[#111827] p-6 rounded-2xl border border-[#2A3550] text-white space-y-6">
      <h2 className="text-xl font-semibold mb-4">Integraciones Disponibles</h2>

      {/* API REST */}
      <div className="bg-[#1A2238] p-5 rounded-xl border border-[#2A3550] space-y-3 relative">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-medium flex items-center gap-2">
            <FiLink className="text-[#00D9FF]" /> API REST
          </h3>
          <span className="bg-[#00FF88]/10 text-[#00FF88] text-xs px-3 py-1 rounded-full">
            Activo
          </span>
        </div>
        <p className="text-sm text-[#8B9DC3]">Integra con sistemas externos</p>
        <div className="flex items-center gap-2">
          <input
            type="text"
            readOnly
            value="sk_live_51H8xA2JKLNMOPQRSTUVWXYZabcdefghijklmno"
            className="flex-1 bg-[#0D1422] border border-[#2A3550] text-[#8B9DC3] rounded-lg px-3 py-2 text-sm"
          />
          <button
            onClick={handleCopy}
            className="bg-[#00D9FF] text-black text-sm px-3 py-2 rounded-md font-semibold hover:bg-[#00B8D4] transition"
          >
            Copiar
          </button>
        </div>
        <a
          href="#"
          className="text-[#00D9FF] text-sm hover:underline inline-block"
        >
          Ver Documentación de API →
        </a>
      </div>

      {/* Webhooks */}
      <div className="bg-[#1A2238] p-5 rounded-xl border border-[#2A3550] space-y-3">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-medium flex items-center gap-2">
            <FiLink className="text-[#00D9FF]" /> Webhooks
          </h3>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={webhookEnabled}
              onChange={() => setWebhookEnabled(!webhookEnabled)}
              className="sr-only peer"
            />
            <div className="w-10 h-5 bg-gray-700 rounded-full peer peer-checked:bg-[#00D9FF] transition"></div>
            <span className="ml-2 text-sm text-[#8B9DC3]">
              {webhookEnabled ? "Activo" : ""}
            </span>
          </label>
        </div>
        <p className="text-sm text-[#8B9DC3]">Recibe notificaciones en tiempo real</p>
        <input
          type="text"
          placeholder="https://tu-servidor.com/webhook"
          className="w-full bg-[#0D1422] border border-[#2A3550] text-[#8B9DC3] rounded-lg px-3 py-2 text-sm"
        />
      </div>

      {/* Notificaciones por Email */}
      <div className="bg-[#1A2238] p-5 rounded-xl border border-[#2A3550] space-y-3">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-medium flex items-center gap-2">
            <FiMail className="text-[#00D9FF]" /> Notificaciones por Email
          </h3>
          <span className="bg-[#00FF88]/10 text-[#00FF88] text-xs px-3 py-1 rounded-full">
            Configurado
          </span>
        </div>
        <p className="text-sm text-[#8B9DC3]">SMTP configurado</p>
        <button className="w-full bg-[#0D1422] border border-[#2A3550] text-[#8B9DC3] rounded-lg py-2 text-sm hover:border-[#00D9FF] transition">
          Reconfigurar SMTP
        </button>
      </div>

      {/* Proveedor SMS */}
      <div className="bg-[#1A2238] p-5 rounded-xl border border-[#2A3550] space-y-3">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-medium flex items-center gap-2">
            <FiMessageSquare className="text-[#00D9FF]" /> Proveedor SMS
          </h3>
          <span className="bg-[#00FF88]/10 text-[#00FF88] text-xs px-3 py-1 rounded-full">
            Activo
          </span>
        </div>
        <p className="text-sm text-[#8B9DC3]">Twilio – 1,500 créditos restantes</p>
        <button className="w-full border border-[#00D9FF] text-[#00D9FF] rounded-lg py-2 text-sm hover:bg-[#00D9FF] hover:text-[#0A0E1A] transition">
          Recargar Créditos
        </button>
      </div>
    </div>
  );
}

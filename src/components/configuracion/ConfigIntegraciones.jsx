"use client";
import React, { useState } from "react";
import { FiCopy, FiLink, FiMail, FiMessageSquare, FiRefreshCw, FiX } from "react-icons/fi";

export default function ConfigIntegraciones() {
  /*
    NOTA / PENDIENTE BACKEND:

    - Las integraciones actualmente muestran datos estáticos de ejemplo.
    
    - Cuando esté lista la API, se obtendrán mediante un GET a:
      `${API_URL}/configuracion/integraciones`
    
    - Las operaciones se conectarán a los siguientes endpoints:
      - GET `${API_URL}/configuracion/integraciones` - Obtener estado de integraciones
      - POST `${API_URL}/configuracion/integraciones/api/regenerar` - Regenerar token API
      - PUT `${API_URL}/configuracion/integraciones/webhook` - Actualizar webhook
      - POST `${API_URL}/configuracion/integraciones/smtp` - Configurar SMTP
      - POST `${API_URL}/configuracion/integraciones/sms/recargar` - Recargar créditos SMS
  */

  const [apiToken, setApiToken] = useState("sk_live_51H8xA2JKLNMOPQRSTUVWXYZabcdefghijklmno");
  const [webhookEnabled, setWebhookEnabled] = useState(false);
  const [webhookUrl, setWebhookUrl] = useState("");
  const [smtpConfigured, setSmtpConfigured] = useState(true);
  const [smsCredits, setSmsCredits] = useState(1500);
  
  const [showModalSMTP, setShowModalSMTP] = useState(false);
  const [showModalSMS, setShowModalSMS] = useState(false);
  const [showModalRegenerarAPI, setShowModalRegenerarAPI] = useState(false);
  
  const [copiado, setCopiado] = useState(false);
  const [guardandoWebhook, setGuardandoWebhook] = useState(false);


  // Copiar token API al portapapeles
  const handleCopy = () => {
    navigator.clipboard.writeText(apiToken);
    setCopiado(true);
    setTimeout(() => setCopiado(false), 2000);
  };

  // Regenerar token API
  const handleRegenerarToken = async () => {
    /*
      INTEGRACIÓN BACKEND - REGENERAR TOKEN API:
    */

    const nuevoToken = `sk_live_${Math.random().toString(36).substring(2, 50)}`;
    setApiToken(nuevoToken);
    setShowModalRegenerarAPI(false);
    alert("Token API regenerado exitosamente");
  };

  // Guardar configuración de webhook
  const handleGuardarWebhook = async () => {
    if (webhookEnabled && !webhookUrl.trim()) {
      alert("Por favor ingresa una URL válida para el webhook");
      return;
    }

    setGuardandoWebhook(true);

    /*
      INTEGRACIÓN BACKEND - GUARDAR WEBHOOK:
    */

    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setGuardandoWebhook(false);
    alert("Webhook guardado exitosamente");
  };

  // Configurar SMTP
  const handleConfigurarSMTP = () => {
    setShowModalSMTP(true);
  };

  const handleGuardarSMTP = async (datos) => {
    /*
      INTEGRACIÓN BACKEND - CONFIGURAR SMTP
    */

    setSmtpConfigured(true);
    setShowModalSMTP(false);
    alert("SMTP configurado exitosamente");
  };

  // Recargar créditos SMS
  const handleRecargarSMS = () => {
    setShowModalSMS(true);
  };

  const handleConfirmarRecargaSMS = async (cantidad) => {
    /*
      INTEGRACIÓN BACKEND - RECARGAR CRÉDITOS SMS
    */

    setSmsCredits(smsCredits + cantidad);
    setShowModalSMS(false);
    alert(`Recarga exitosa. Nuevo saldo: ${smsCredits + cantidad} créditos`);
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
            value={apiToken}
            className="flex-1 bg-[#0D1422] border border-[#2A3550] text-[#8B9DC3] rounded-lg px-3 py-2 text-sm"
          />
          <button
            onClick={handleCopy}
            className={`${
              copiado ? "bg-[#00FF88]" : "bg-[#00D9FF]"
            } text-black text-sm px-3 py-2 rounded-md font-semibold transition-all flex items-center gap-1`}
          >
            <FiCopy size={14} />
            {copiado ? "¡Copiado!" : "Copiar"}
          </button>
        </div>
        <div className="flex items-center justify-between">
          <a
            href="#"
            className="text-[#00D9FF] text-sm hover:underline inline-block"
          >
            Ver Documentación de API →
          </a>
          <button
            onClick={() => setShowModalRegenerarAPI(true)}
            className="text-[#FF4D4D] text-sm hover:underline flex items-center gap-1"
          >
            <FiRefreshCw size={14} />
            Regenerar Token
          </button>
        </div>
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
              onChange={(e) => setWebhookEnabled(e.target.checked)}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-gray-700 rounded-full peer peer-checked:bg-[#00D9FF] transition-all relative">
              <div className={`absolute top-0.5 left-0.5 bg-white w-5 h-5 rounded-full transition-transform ${
                webhookEnabled ? "translate-x-5" : ""
              }`}></div>
            </div>
            <span className="ml-2 text-sm text-[#8B9DC3]">
              {webhookEnabled ? "Activo" : "Inactivo"}
            </span>
          </label>
        </div>
        <p className="text-sm text-[#8B9DC3]">Recibe notificaciones en tiempo real</p>
        <input
          type="url"
          placeholder="https://tu-servidor.com/webhook"
          value={webhookUrl}
          onChange={(e) => setWebhookUrl(e.target.value)}
          disabled={!webhookEnabled}
          className={`w-full bg-[#0D1422] border border-[#2A3550] text-white rounded-lg px-3 py-2 text-sm focus:border-[#00D9FF] focus:outline-none transition-all ${
            !webhookEnabled ? "opacity-50 cursor-not-allowed" : ""
          }`}
        />
        <button
          onClick={handleGuardarWebhook}
          disabled={guardandoWebhook || !webhookEnabled}
          className={`w-full bg-[#00D9FF] text-black rounded-lg py-2 text-sm font-semibold transition-all ${
            guardandoWebhook || !webhookEnabled
              ? "opacity-50 cursor-not-allowed"
              : "hover:bg-[#00B8D4]"
          }`}
        >
          {guardandoWebhook ? "Guardando..." : "Guardar Webhook"}
        </button>
      </div>

      {/* Notificaciones por Email */}
      <div className="bg-[#1A2238] p-5 rounded-xl border border-[#2A3550] space-y-3">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-medium flex items-center gap-2">
            <FiMail className="text-[#00D9FF]" /> Notificaciones por Email
          </h3>
          <span className={`${
            smtpConfigured ? "bg-[#00FF88]/10 text-[#00FF88]" : "bg-[#FF4D4D]/10 text-[#FF4D4D]"
          } text-xs px-3 py-1 rounded-full`}>
            {smtpConfigured ? "Configurado" : "No Configurado"}
          </span>
        </div>
        <p className="text-sm text-[#8B9DC3]">
          {smtpConfigured ? "SMTP configurado correctamente" : "Configura SMTP para enviar notificaciones"}
        </p>
        <button 
          onClick={handleConfigurarSMTP}
          className="w-full bg-[#0D1422] border border-[#2A3550] text-[#00D9FF] rounded-lg py-2 text-sm hover:border-[#00D9FF] hover:bg-[#1A2238] transition-all font-semibold"
        >
          {smtpConfigured ? "Reconfigurar SMTP" : "Configurar SMTP"}
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
        <p className="text-sm text-[#8B9DC3]">Twilio – {smsCredits.toLocaleString()} créditos restantes</p>
        <button 
          onClick={handleRecargarSMS}
          className="w-full border border-[#00D9FF] text-[#00D9FF] rounded-lg py-2 text-sm hover:bg-[#00D9FF] hover:text-[#0A0E1A] transition-all font-semibold"
        >
          Recargar Créditos
        </button>
      </div>

      {/* Modal: Regenerar Token API */}
      {showModalRegenerarAPI && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-[#141A2A] border border-[#2A3550] rounded-2xl p-6 w-full max-w-md">
            <h3 className="text-xl font-semibold mb-4 text-[#FF4D4D]">⚠️ Regenerar Token API</h3>
            <p className="text-sm text-[#8B9DC3] mb-4">
              Esta acción invalidará el token actual. Todas las integraciones que usen el token anterior dejarán de funcionar.
            </p>
            <p className="text-sm text-white mb-6">
              ¿Estás seguro de que deseas continuar?
            </p>
            <div className="flex gap-3 justify-end">
              <button
                onClick={() => setShowModalRegenerarAPI(false)}
                className="px-4 py-2 bg-[#1E2733] rounded-lg hover:bg-[#2A3550] transition"
              >
                Cancelar
              </button>
              <button
                onClick={handleRegenerarToken}
                className="px-4 py-2 bg-[#FF4D4D] text-white font-semibold rounded-lg hover:bg-[#FF6B6B] transition"
              >
                Sí, Regenerar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal: Configurar SMTP */}
      {showModalSMTP && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-[#141A2A] border border-[#2A3550] rounded-2xl p-6 w-full max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold">Configurar SMTP</h3>
              <button onClick={() => setShowModalSMTP(false)} className="text-[#8B9DC3] hover:text-white">
                <FiX size={20} />
              </button>
            </div>
            <div className="space-y-3">
              <input
                type="text"
                placeholder="Host SMTP (ej: smtp.gmail.com)"
                className="w-full bg-[#0A0E1A] border border-[#2A3550] rounded-lg p-3 text-white focus:border-[#00D9FF] focus:outline-none"
              />
              <input
                type="number"
                placeholder="Puerto (ej: 587)"
                className="w-full bg-[#0A0E1A] border border-[#2A3550] rounded-lg p-3 text-white focus:border-[#00D9FF] focus:outline-none"
              />
              <input
                type="text"
                placeholder="Usuario"
                className="w-full bg-[#0A0E1A] border border-[#2A3550] rounded-lg p-3 text-white focus:border-[#00D9FF] focus:outline-none"
              />
              <input
                type="password"
                placeholder="Contraseña"
                className="w-full bg-[#0A0E1A] border border-[#2A3550] rounded-lg p-3 text-white focus:border-[#00D9FF] focus:outline-none"
              />
              <input
                type="email"
                placeholder="Email remitente"
                className="w-full bg-[#0A0E1A] border border-[#2A3550] rounded-lg p-3 text-white focus:border-[#00D9FF] focus:outline-none"
              />
            </div>
            <div className="flex gap-3 justify-end mt-6">
              <button
                onClick={() => setShowModalSMTP(false)}
                className="px-4 py-2 bg-[#1E2733] rounded-lg hover:bg-[#2A3550] transition"
              >
                Cancelar
              </button>
              <button
                onClick={() => handleGuardarSMTP({})}
                className="px-4 py-2 bg-[#00D9FF] text-black font-semibold rounded-lg hover:bg-[#00B8D4] transition"
              >
                Guardar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal: Recargar SMS */}
      {showModalSMS && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-[#141A2A] border border-[#2A3550] rounded-2xl p-6 w-full max-w-md">
            <h3 className="text-xl font-semibold mb-4">Recargar Créditos SMS</h3>
            <p className="text-sm text-[#8B9DC3] mb-4">Selecciona la cantidad de créditos:</p>
            <div className="space-y-2 mb-6">
              {[500, 1000, 2500, 5000].map((cantidad) => (
                <button
                  key={cantidad}
                  onClick={() => handleConfirmarRecargaSMS(cantidad)}
                  className="w-full bg-[#1E2733] border border-[#2A3550] rounded-lg p-3 hover:border-[#00D9FF] transition-all text-left"
                >
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">{cantidad.toLocaleString()} créditos</span>
                    <span className="text-[#00D9FF]">${(cantidad * 0.05).toFixed(2)}</span>
                  </div>
                </button>
              ))}
            </div>
            <button
              onClick={() => setShowModalSMS(false)}
              className="w-full px-4 py-2 bg-[#1E2733] rounded-lg hover:bg-[#2A3550] transition"
            >
              Cancelar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
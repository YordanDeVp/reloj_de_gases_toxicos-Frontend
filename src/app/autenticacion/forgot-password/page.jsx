"use client";
import { useState } from "react";
import Link from "next/link";
import { FiMail, FiArrowLeft, FiActivity } from "react-icons/fi";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRecovery = async (e) => {
    e.preventDefault();
    setError("");
    setMessage("");

    if (!email.trim()) {
      setError("El correo es requerido");
      return;
    }

    setLoading(true);

    try {
      // 🔹 Aquí se define el endpoint del backend para recuperar contraseña
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL || "https://tu-api.com"}/api/auth/forgot-password`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          // 🔹 Aquí se envía el correo electrónico al backend
          body: JSON.stringify({ email }),
        }
      );

      // 🔹 Valida la respuesta del servidor
      if (!res.ok)
        throw new Error("Error al enviar el correo de recuperación");

      // 🔹 Mensaje de éxito si el backend responde correctamente (200 o 201)
      setMessage("Se envió el enlace de recuperación a tu correo electrónico");
      setEmail("");
    } catch (err) {
      // 🔹 Muestra cualquier error devuelto por el backend o por la red
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0A0E1A] text-white p-6 font-[Inter]">
      <div className="flex w-full max-w-4xl rounded-3xl overflow-hidden border border-[#2A3550] shadow-[0_0_25px_rgba(0,217,255,0.1)]">
        
        {/* PANEL IZQUIERDO */}
        <div className="w-full lg:w-[55%] p-10 md:p-14">
          <Link
            href="/autenticacion/login"
            className="flex items-center gap-2 text-[#00D9FF] mb-6 hover:underline"
          >
            <FiArrowLeft /> Volver al login
          </Link>

          <h2 className="text-2xl font-semibold text-white mb-2">Recuperar Contraseña</h2>
          <p className="text-[#8B9DC3] mb-8">
            Ingresa tu correo electrónico y te enviaremos un enlace para restablecer tu contraseña.
          </p>

          {/* 🔹 Formulario que llama a tu endpoint de recuperación */}
          <form onSubmit={handleRecovery}>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-[#8B9DC3] mb-2"
            >
              Correo Electrónico
            </label>
            <div className="relative mb-4">
              <FiMail className="absolute left-3 top-3 text-[#8B9DC3]" />
              <input
                id="email"
                type="email"
                placeholder="usuario@empresa.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-[#151B2D] border-2 border-[#2A3550] rounded-lg py-3 pl-10 pr-4 text-white placeholder-[#8B9DC3] focus:outline-none focus:border-[#00D9FF]"
                disabled={loading}
              />
            </div>

            {/* 🔹 Mensajes dinámicos */}
            {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
            {message && <p className="text-green-500 text-sm mb-2">{message}</p>}

            {/* 🔹 Botón principal (bloqueado mientras se envía la solicitud) */}
            <button
              type="submit"
              disabled={loading}
              className={`w-full bg-[#00D9FF] text-[#0A0E1A] font-bold py-3 rounded-lg transition-all duration-300 ${
                loading
                  ? "opacity-70 cursor-not-allowed"
                  : "hover:shadow-[#00D9FF]/50"
              }`}
            >
              {loading ? "Enviando..." : "Enviar enlace de recuperación"}
            </button>
          </form>
        </div>

        {/* PANEL DERECHO */}
        <div className="hidden lg:flex w-[45%] flex-col items-center justify-center text-center p-12 bg-[#0A0E1A]">
          <div
            className="p-8 rounded-3xl mb-6"
            style={{
              background: "linear-gradient(135deg, #00D9FF 0%, #00FF88 100%)",
            }}
          >
            <FiActivity className="text-6xl text-white drop-shadow-[0_0_12px_#00FF88]" />
          </div>
          <h2 className="text-2xl font-bold text-white mb-3">
            Seguridad Garantizada
          </h2>
          <p className="text-[#8B9DC3] max-w-sm mb-10 leading-relaxed">
            Tu información está protegida con estándares de seguridad de nivel
            empresarial.
          </p>
        </div>
      </div>
    </div>
  );
}

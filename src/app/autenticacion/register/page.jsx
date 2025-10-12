"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import {
  FaUserShield,
  FaUserCheck,
  FaHardHat,
} from "react-icons/fa";
import {
  FiMail,
  FiLock,
  FiEye,
  FiEyeOff,
  FiArrowLeft,
  FiCheck,
} from "react-icons/fi";

const SafeMineRegister = () => {
  const router = useRouter();

  // Control de pasos del proceso de registro (1 a 4)
  const [step, setStep] = useState(1);

  // Control de visibilidad de contraseñas
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Paso 1: Datos personales
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // Paso 2: Tipo de cuenta
  const [selectedAccount, setSelectedAccount] = useState("Operador");

  // Paso 3: Información empresarial
  const [company, setCompany] = useState("");
  const [sector, setSector] = useState("");
  const [country, setCountry] = useState("");
  const [code, setCode] = useState("");

  // Paso 4: Verificación
  const [verifyCode, setVerifyCode] = useState("");
  const [accepted, setAccepted] = useState(false);

  // Indicador visual de seguridad de contraseña
  const passwordStrength = () => {
    let strength = 0;
    if (password.length >= 8) strength++;
    if (/[A-Z]/.test(password) && /[a-z]/.test(password)) strength++;
    if (/\d/.test(password)) strength++;
    return strength;
  };

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 4));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  // Manejo del envío final del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!accepted) return;

    /* INTEGRACIÓN API - REGISTRO DE USUARIO */

    alert("Cuenta creada exitosamente");

    // redirige al login
    router.push("/autenticacion/login");
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center text-gray-200 font-[Inter] p-6 transition-all duration-500"
      style={{ backgroundColor: "#0A0E1A" }}
    >
      <div className="w-full max-w-4xl bg-[#0A0E1A] border border-[#2A3550] rounded-3xl p-8 shadow-[0_0_30px_rgba(0,217,255,0.1)]">
        {/* HEADER */}
        <div className="flex items-center justify-between mb-6">
          <button
            onClick={() =>
              step > 1 ? prevStep() : router.push("/autenticacion/login")
            }
            className="flex items-center gap-2 text-[#00D9FF] hover:underline"
          >
            <FiArrowLeft /> Volver al inicio de sesión
          </button>
          <h2 className="font-bold text-lg text-white">Crear Cuenta</h2>
        </div>

        <h1 className="text-3xl font-extrabold text-white mb-2">
          SafeMine IoT - Registro
        </h1>

        {/* BARRA DE PROGRESO */}
        <div className="w-full bg-[#151B2D] rounded-full h-3 mb-6 border border-[#2A3550] overflow-hidden">
          <div
            className="h-full rounded-full transition-all duration-500"
            style={{
              width: `${step * 25}%`,
              background: "linear-gradient(90deg,#00D9FF,#00FF88)",
            }}
          />
        </div>
        <p className="text-[#8B9DC3] mb-6">Paso {step} de 4</p>

        {/* PASO 1 - Datos personales */}
        {step === 1 && (
          <form onSubmit={(e) => e.preventDefault()}>
            <h2 className="text-xl font-semibold mb-6">Datos Personales</h2>

            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Nombre"
                className="bg-[#151B2D] border-2 border-[#2A3550] rounded-lg py-3 px-4 text-white placeholder-[#8B9DC3] focus:border-[#00D9FF]"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="text"
                placeholder="Apellido"
                className="bg-[#151B2D] border-2 border-[#2A3550] rounded-lg py-3 px-4 text-white placeholder-[#8B9DC3] focus:border-[#00D9FF]"
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <input
                type="email"
                placeholder="Correo Electrónico"
                className="bg-[#151B2D] border-2 border-[#2A3550] rounded-lg py-3 px-4 text-white placeholder-[#8B9DC3] focus:border-[#00D9FF]"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="text"
                placeholder="Teléfono"
                className="bg-[#151B2D] border-2 border-[#2A3550] rounded-lg py-3 px-4 text-white placeholder-[#8B9DC3] focus:border-[#00D9FF]"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>

            {/* CONTRASEÑAS */}
            <div className="mt-4 grid md:grid-cols-2 gap-4">
              {/* Contraseña */}
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Contraseña"
                  className="w-full bg-[#151B2D] border-2 border-[#2A3550] rounded-lg py-3 pl-4 pr-11 text-white placeholder-[#8B9DC3] focus:border-[#00D9FF] focus:outline-none"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute top-1/5 -translate-y-1/2 right-3 text-[#8B9DC3] hover:text-white focus:outline-none"
                  tabIndex={-1}
                >
                  {showPassword ? <FiEyeOff size={18} /> : <FiEye size={18} />}
                </button>

                {/* Barra de seguridad visual */}
                <div className="w-full h-2 bg-[#1E2640] rounded mt-2 overflow-hidden">
                  <div
                    className={`h-full transition-all duration-300 ${
                      passwordStrength() === 1
                        ? "bg-red-500 w-1/3"
                        : passwordStrength() === 2
                        ? "bg-yellow-400 w-2/3"
                        : passwordStrength() === 3
                        ? "bg-green-400 w-full"
                        : "w-0"
                    }`}
                  />
                </div>

                <ul className="text-xs mt-2 space-y-1 text-[#8B9DC3]">
                  <li className={password.length >= 8 ? "text-[#00FF88]" : ""}>
                    • Mínimo 8 caracteres
                  </li>
                  <li
                    className={
                      /[A-Z]/.test(password) && /[a-z]/.test(password)
                        ? "text-[#00FF88]"
                        : ""
                    }
                  >
                    • Mayúsculas y minúsculas
                  </li>
                  <li className={/\d/.test(password) ? "text-[#00FF88]" : ""}>
                    • Al menos un número
                  </li>
                </ul>
              </div>

              {/* Confirmar contraseña */}
              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirmar Contraseña"
                  className="w-full bg-[#151B2D] border-2 border-[#2A3550] rounded-lg py-3 pl-4 pr-11 text-white placeholder-[#8B9DC3] focus:border-[#00D9FF] focus:outline-none"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute top-1/5 -translate-y-1/2 right-3 text-[#8B9DC3] hover:text-white focus:outline-none"
                  tabIndex={-1}
                >
                  {showConfirmPassword ? <FiEyeOff size={18} /> : <FiEye size={18} />}
                </button>
                {confirmPassword && confirmPassword !== password && (
                  <p className="text-red-500 text-sm mt-2">
                    Las contraseñas no coinciden
                  </p>
                )}
              </div>
            </div>

            <button
              type="button"
              onClick={nextStep}
              className="w-full mt-8 py-3 rounded-lg text-[#0A0E1A] font-bold transition-all duration-300"
              style={{ backgroundColor: "#00D9FF" }}
            >
              Siguiente
            </button>
          </form>
        )}

        {/* PASO 2 - Tipo de cuenta */}
        {step === 2 && (
          <div>
            <h2 className="text-xl font-semibold mb-6">Tipo de Cuenta</h2>
            <p className="text-[#8B9DC3] mb-4">
              Selecciona el tipo de acceso que necesitas
            </p>

            {/* Aquí podrías obtener los tipos de usuario desde tu API */}

            <div className="grid md:grid-cols-2 gap-4 max-h-[400px] overflow-y-auto pr-1">
              {[
                {
                  id: "Operador",
                  icon: <FaHardHat />,
                  color: "#FFFFFF",
                  desc: [
                    "Ver datos de dispositivos asignados",
                    "Recibir alertas en tiempo real",
                    "Dashboard básico",
                  ],
                },
                {
                  id: "Supervisor",
                  icon: <FaUserCheck />,
                  color: "#FFB800",
                  desc: [
                    "Gestionar múltiples dispositivos",
                    "Generar reportes y análisis",
                    "Asignar dispositivos a operadores",
                  ],
                  tag: { text: "Recomendado", color: "#FFB800" },
                },
                {
                  id: "Administrador",
                  icon: <FaUserShield />,
                  color: "#FF4D4D",
                  desc: [
                    "Control total de usuarios y permisos",
                    "Configuración del sistema",
                    "Gestión de facturación",
                  ],
                  tag: { text: "Requiere aprobación", color: "#FF4D4D" },
                },
              ].map((type) => (
                <div
                  key={type.id}
                  onClick={() => setSelectedAccount(type.id)}
                  className={`p-3 rounded-xl border-2 cursor-pointer transition-all ${
                    selectedAccount === type.id
                      ? `border-[${type.color}] shadow-[0_0_12px_${type.color}40]`
                      : "border-[#2A3550] hover:border-[#00D9FF]"
                  } bg-[#151B2D]`}
                >
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center gap-3">
                      <span className="text-xl" style={{ color: type.color }}>
                        {type.icon}
                      </span>
                      <h3 className="font-semibold text-white text-sm">
                        {type.id}
                      </h3>
                    </div>
                    {type.tag && (
                      <span
                        className="text-[10px] font-semibold px-2 py-[2px] rounded-md"
                        style={{
                          color: type.tag.color,
                          border: `1px solid ${type.tag.color}`,
                        }}
                      >
                        {type.tag.text}
                      </span>
                    )}
                  </div>
                  <ul className="text-xs text-[#8B9DC3] space-y-1 mt-1">
                    {type.desc.map((d, i) => (
                      <li key={i} className="flex items-center gap-1">
                        <FiCheck className="text-[#00FF88] text-sm" /> {d}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="flex justify-end mt-6">
              <button
                onClick={nextStep}
                className="py-3 px-6 rounded-lg text-[#0A0E1A] font-bold"
                style={{ backgroundColor: "#00D9FF" }}
              >
                Siguiente
              </button>
            </div>
          </div>
        )}

        {/* PASO 3 - Información empresarial */}
        {step === 3 && (
          <div>
            <h2 className="text-xl font-semibold mb-6">
              Información de la Empresa
            </h2>

            {/* Aquí podrías consumir un endpoint para listar países o sectores */}

            <input
              type="text"
              placeholder="Nombre de la Empresa"
              className="w-full bg-[#151B2D] border-2 border-[#2A3550] rounded-lg py-3 px-4 text-white placeholder-[#8B9DC3] focus:border-[#00D9FF]"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
            />

            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <select
                value={sector}
                onChange={(e) => setSector(e.target.value)}
                className="bg-[#1E2640] border-2 border-[#2A3550] rounded-lg py-3 px-4 text-white"
              >
                <option value="">Seleccionar sector</option>
                <option>Minería Subterránea</option>
                <option>Minería a Cielo Abierto</option>
                <option>Construcción</option>
                <option>Industria Pesada</option>
                <option>Petróleo y Gas</option>
              </select>

              <select
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                className="bg-[#1E2640] border-2 border-[#2A3550] rounded-lg py-3 px-4 text-white"
              >
                <option value="">Seleccionar país</option>
                <option>Chile</option>
                <option>Perú</option>
                <option>México</option>
                <option>Colombia</option>
                <option>Argentina</option>
              </select>
            </div>

            <div className="mt-4">
              <input
                type="text"
                placeholder="Código de Organización (opcional)"
                className="w-full bg-[#151B2D] border-2 border-[#2A3550] rounded-lg py-3 px-4 text-white placeholder-[#8B9DC3] focus:border-[#00D9FF]"
                value={code}
                onChange={(e) => setCode(e.target.value)}
              />
              <p className="text-xs text-[#8B9DC3] mt-2">
                Si tu organización ya usa SafeMine IoT, ingresa el código para unirte
              </p>
            </div>

            <div className="flex justify-end mt-6">
              <button
                onClick={nextStep}
                className="py-3 px-6 rounded-lg text-[#0A0E1A] font-bold"
                style={{ backgroundColor: "#00D9FF" }}
              >
                Siguiente
              </button>
            </div>
          </div>
        )}

        {/* PASO 4 - Verificación */}
        {step === 4 && (
          <form onSubmit={handleSubmit}>
            <h2 className="text-xl font-semibold mb-6">Verificación</h2>
            <p className="text-[#8B9DC3] mb-2">
              Enviamos un código de verificación a
            </p>
            <p className="text-white mb-6">{email || "usuario@correo.com"}</p>

            {/* INTEGRACIÓN API - ENVÍO DE CÓDIGO */}

            <input
              type="text"
              placeholder="000000"
              maxLength={6}
              className="w-full bg-[#151B2D] border-2 border-[#2A3550] rounded-lg py-3 px-4 text-center text-white placeholder-[#8B9DC3] focus:border-[#00D9FF]"
              value={verifyCode}
              onChange={(e) => setVerifyCode(e.target.value)}
            />

            <p className="text-sm text-[#8B9DC3] mt-3">
              ¿No recibiste el código?{" "}
              <button
                type="button"
                className="text-[#00D9FF] hover:underline"
                // Aquí iría la función para reenviar el código
              >
                Reenviar código
              </button>
            </p>

            <div className="flex items-center mt-6">
              <input
                type="checkbox"
                id="terms"
                checked={accepted}
                onChange={(e) => setAccepted(e.target.checked)}
                className="h-4 w-4 rounded bg-[#151B2D] border-[#2A3550] text-[#00D9FF]"
              />
              <label htmlFor="terms" className="ml-2 text-[#8B9DC3] text-sm">
                Acepto los{" "}
                <a href="#" className="text-[#00D9FF] hover:underline">
                  Términos y Condiciones
                </a>{" "}
                y la{" "}
                <a href="#" className="text-[#00D9FF] hover:underline">
                  Política de Privacidad
                </a>
              </label>
            </div>

            <div className="flex justify-between mt-8">
              <button
                type="button"
                onClick={prevStep}
                className="py-3 px-6 rounded-lg font-bold border border-[#00D9FF] text-[#00D9FF]"
              >
                Atrás
              </button>
              <button
                type="submit"
                disabled={!accepted}
                className="py-3 px-6 rounded-lg font-bold text-[#0A0E1A]"
                style={{
                  backgroundColor: accepted ? "#00D9FF" : "#2A3550",
                }}
              >
                Crear Cuenta
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default SafeMineRegister;
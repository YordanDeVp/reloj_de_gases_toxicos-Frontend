"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaUserShield, FaUserCheck, FaHardHat } from "react-icons/fa";
import { FiMail, FiLock, FiEye, FiEyeOff, FiActivity, FiArrowLeft } from "react-icons/fi";

const UserTypeCard = ({ icon, title, description, isSelected, color, onClick }) => {
  const baseClasses =
    "flex items-center w-full p-4 rounded-xl border-2 transition-all duration-300 cursor-pointer";

  const glow = {
    Administrador: "shadow-[0_0_20px_#FF4D4D80] border-[#FF4D4D]",
    Supervisor: "shadow-[0_0_20px_#FFB80080] border-[#FFB800]",
    Operador: "shadow-[0_0_20px_#FFFFFF80] border-[#FFFFFF]",
  };

  return (
    <div
      onClick={onClick}
      className={`${baseClasses} ${
        isSelected
          ? glow[title]
          : "bg-[#151B2D] border-[#2A3550] hover:border-[#00D9FF]"
      }`}
    >
      <div className={`text-3xl mr-4 ${isSelected ? color : "text-[#8B9DC3]"}`}>{icon}</div>
      <div>
        <h3 className="font-semibold text-white">{title}</h3>
        <p className="text-sm text-[#8B9DC3]">{description}</p>
      </div>
    </div>
  );
};

const SafeMineLoginScreen = () => {
  const [userType, setUserType] = useState("Operador");
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [recoveryEmail, setRecoveryEmail] = useState("");

  const userTypes = [
    { id: "Administrador", icon: <FaUserShield />, title: "Administrador", description: "Acceso completo al sistema", color: "#FF4D4D" },
    { id: "Supervisor", icon: <FaUserCheck />, title: "Supervisor", description: "Supervisión y reportes", color: "#FFB800" },
    { id: "Operador", icon: <FaHardHat />, title: "Operador", description: "Acceso a dispositivos asignados", color: "#FFFFFF" },
  ];

  const handleLogin = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!email.trim()) newErrors.email = "El correo es requerido";
    if (!password.trim()) newErrors.password = "La contraseña es requerida";
    setErrors(newErrors);
  };

  const handleRecovery = (e) => {
    e.preventDefault();
    if (!recoveryEmail.trim()) {
      setErrors({ recoveryEmail: "El correo es requerido" });
    } else {
      alert("Se envió el enlace de recuperación al correo ingresado.");
      setShowForgotPassword(false);
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center text-gray-200 font-[Inter] p-6"
      style={{ backgroundColor: "#0A0E1A" }}
    >
      <div className="flex w-full max-w-6xl rounded-3xl overflow-hidden border border-[#2A3550] shadow-[0_0_25px_rgba(0,217,255,0.1)]">
        
        {/* PANEL IZQUIERDO */}
        <div className="w-full lg:w-[58%] p-10 md:p-14" style={{ backgroundColor: "#0A0E1A" }}>
          <header className="mb-8 flex items-center gap-4">
            <div
              className="p-3 rounded-xl flex items-center justify-center shadow-lg"
              style={{
                background: "linear-gradient(135deg, #00D9FF 0%, #00FF88 100%)",
              }}
            >
              <FiActivity className="text-2xl text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-extrabold text-white tracking-wide">SafeMine IoT</h1>
              <p className="text-[#8B9DC3]">Sistema de Monitoreo</p>
            </div>
          </header>

          {/* CAMBIO ENTRE LOGIN Y RECUPERACIÓN */}
          {!showForgotPassword ? (
            <>
              <h2 className="text-2xl font-semibold text-white mb-2">Acceso al Sistema</h2>
              <p className="text-[#8B9DC3] mb-8">Monitoreo Ambiental Inteligente para Minería</p>

              <form onSubmit={handleLogin}>
                {/* TIPO DE USUARIO */}
                <div className="mb-8">
                  <label className="block text-sm font-medium text-[#8B9DC3] mb-3">Tipo de Usuario</label>
                  <div className="space-y-3">
                    {userTypes.map((type) => (
                      <UserTypeCard
                        key={type.id}
                        icon={type.icon}
                        title={type.title}
                        description={type.description}
                        isSelected={userType === type.id}
                        color={type.color}
                        onClick={() => setUserType(type.id)}
                      />
                    ))}
                  </div>
                </div>

                {/* CORREO */}
                <div className="mb-5">
                  <label htmlFor="email" className="block text-sm font-medium text-[#8B9DC3] mb-2">
                    Correo Electrónico
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                      <FiMail className="text-[#8B9DC3]" />
                    </span>
                    <input
                      type="email"
                      id="email"
                      placeholder="usuario@empresa.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-[#151B2D] border-2 border-[#2A3550] rounded-lg py-3 pl-10 pr-4 text-white placeholder-[#8B9DC3] focus:outline-none focus:border-[#00D9FF]"
                    />
                  </div>
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>

                {/* CONTRASEÑA */}
                <div className="mb-5">
                  <label htmlFor="password" className="block text-sm font-medium text-[#8B9DC3] mb-2">
                    Contraseña
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                      <FiLock className="text-[#8B9DC3]" />
                    </span>
                    <input
                      type={showPassword ? "text" : "password"}
                      id="password"
                      placeholder="••••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full bg-[#151B2D] border-2 border-[#2A3550] rounded-lg py-3 pl-10 pr-10 text-white placeholder-[#8B9DC3] focus:outline-none focus:border-[#00D9FF]"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute inset-y-0 right-0 flex items-center pr-3 text-[#8B9DC3] hover:text-white"
                    >
                      {showPassword ? <FiEyeOff /> : <FiEye />}
                    </button>
                  </div>
                  {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
                </div>

                {/* RECORDAR */}
                <div className="flex items-center justify-between mb-8 text-sm">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="remember-me"
                      className="h-4 w-4 rounded bg-[#151B2D] border-[#2A3550] text-[#00D9FF]"
                    />
                    <label htmlFor="remember-me" className="ml-2 text-[#8B9DC3]">Recordarme</label>
                  </div>
                  <button
                    type="button"
                    onClick={() => setShowForgotPassword(true)}
                    className="font-medium text-[#00D9FF] hover:underline"
                  >
                    ¿Olvidaste tu contraseña?
                  </button>
                </div>

                {/* BOTÓN */}
                <button
                  type="submit"
                  className="w-full py-3 px-4 rounded-lg text-[#0A0E1A] font-bold transition-all duration-300 shadow-lg hover:shadow-[#00D9FF]/50"
                  style={{ backgroundColor: "#00D9FF" }}
                >
                  Iniciar Sesión
                </button>
              </form>

              <p className="text-center text-sm mt-8 text-[#8B9DC3]">
                ¿No tienes una cuenta?{" "}
                <Link
                  href="/autenticacion/register"
                  className="font-medium text-[#00D9FF] hover:underline"
                >
                  Regístrate aquí
                </Link>
              </p>
            </>
          ) : (
            /* RECUPERAR CONTRASEÑA */
            <div>
              <button
                onClick={() => setShowForgotPassword(false)}
                className="flex items-center gap-2 text-[#00D9FF] mb-6 hover:underline"
              >
                <FiArrowLeft /> Volver al login
              </button>
              <h2 className="text-2xl font-semibold text-white mb-2">Recuperar Contraseña</h2>
              <p className="text-[#8B9DC3] mb-8">
                Ingresa tu correo electrónico y te enviaremos un enlace para restablecer tu contraseña.
              </p>
              <form onSubmit={handleRecovery}>
                <div className="mb-5">
                  <label htmlFor="recoveryEmail" className="block text-sm font-medium text-[#8B9DC3] mb-2">
                    Correo Electrónico
                  </label>
                  <input
                    type="email"
                    id="recoveryEmail"
                    placeholder="usuario@empresa.com"
                    value={recoveryEmail}
                    onChange={(e) => setRecoveryEmail(e.target.value)}
                    className="w-full bg-[#1E2640] border-2 border-[#2A3550] rounded-lg py-3 pl-4 text-white placeholder-[#8B9DC3] focus:outline-none focus:border-[#00D9FF]"
                  />
                  {errors.recoveryEmail && (
                    <p className="text-red-500 text-sm mt-1">{errors.recoveryEmail}</p>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full py-3 px-4 rounded-lg font-bold transition-all duration-300 shadow-lg hover:shadow-[#00D9FF]/50"
                  style={{ backgroundColor: "#00D9FF", color: "#0A0E1A" }}
                >
                  Enviar enlace de recuperación
                </button>
              </form>
            </div>
          )}
        </div>

        {/* PANEL DERECHO */}
        <div
          className="hidden lg:flex w-[42%] flex-col items-center justify-center text-center p-12"
          style={{ backgroundColor: "#0A0E1A" }}
        >
          <div
            className="p-8 rounded-3xl mb-6"
            style={{ background: "linear-gradient(135deg, #00D9FF 0%, #00FF88 100%)" }}
          >
            <FiActivity className="text-7xl text-white drop-shadow-[0_0_12px_#00FF88]" />
          </div>
          <h2 className="text-3xl font-bold text-white mb-3">Tecnología de Monitoreo Avanzado</h2>
          <p className="text-[#8B9DC3] max-w-sm mb-10 leading-relaxed">
            Protege a tu equipo con monitoreo en tiempo real de gases tóxicos, polvo y vibraciones.
          </p>
          <div className="grid grid-cols-3 gap-6 w-full max-w-md">
            <div className="bg-[#151B2D] p-4 rounded-xl border border-[#2A3550]">
              <p className="text-2xl font-bold" style={{ color: "#00D9FF" }}>24/7</p>
              <p className="text-sm text-[#8B9DC3]">Monitoreo Continuo</p>
            </div>
            <div className="bg-[#151B2D] p-4 rounded-xl border border-[#2A3550]">
              <p className="text-2xl font-bold" style={{ color: "#00FF88" }}>99.9%</p>
              <p className="text-sm text-[#8B9DC3]">Precisión</p>
            </div>
            <div className="bg-[#151B2D] p-4 rounded-xl border border-[#2A3550]">
              <p className="text-2xl font-bold" style={{ color: "#FFB800" }}>+150</p>
              <p className="text-sm text-[#8B9DC3]">Empresas Confían</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SafeMineLoginScreen;

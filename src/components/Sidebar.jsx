"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  FiMenu,
  FiGrid,
  FiBell,
  FiSettings,
  FiBook,
  FiHeadphones,
  FiPower,
  FiActivity,
  FiUsers,
  FiBarChart2,
  FiCreditCard,
} from "react-icons/fi";

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [role, setRole] = useState("Operador");
  const pathname = usePathname();
  const router = useRouter();

  // 🔹 Cargar el rol guardado desde localStorage al montar el componente
  useEffect(() => {
    const storedRole = localStorage.getItem("userRole");
    if (storedRole) setRole(storedRole);
  }, []);

  // 🔹 Menú base para todos los roles
  const baseMenu = [
    { name: "Dashboard", icon: <FiGrid />, href: "/dashboard" },
    { name: "Mis Dispositivos", icon: <FiActivity />, href: "/dispositivos" },
    { name: "Alertas", icon: <FiBell />, href: "/alerts", badge: 3 },
    { name: "Configuración", icon: <FiSettings />, href: "/configuracion" },
    { name: "Documentación", icon: <FiBook />, href: "/documentacion" },
    { name: "Soporte", icon: <FiHeadphones />, href: "/soporte" },
  ];

  // 🔹 Extra según el rol
  const supervisorExtras = [
    { name: "Análisis y Reportes", icon: <FiBarChart2 />, href: "/reportes" },
    { name: "Planes y Suscripciones", icon: <FiCreditCard />, href: "/planes" },
  ];

  const adminExtras = [
    { name: "Gestión de Usuarios", icon: <FiUsers />, href: "/usuarios" },
    { name: "Planes y Suscripciones", icon: <FiCreditCard />, href: "/planes" },
  ];

  // 🔹 Mezclar dinámicamente los menús según el rol
  let menuItems = [...baseMenu];
  if (role === "Supervisor") {
    menuItems.splice(3, 0, ...supervisorExtras);
  } else if (role === "Administrador") {
    menuItems.splice(3, 0, ...adminExtras);
  }

  // 🔹 Función para verificar si una ruta está activa
  const isActive = (href) => pathname === href;

  // 🔹 Función para cerrar sesión
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userRole");
    localStorage.removeItem("userEmail");
    router.push("/autenticacion/login");
  };

  return (
    <aside
      className={`h-screen flex flex-col justify-between bg-[#0A0E1A] border-r border-[#2A3550] text-white transition-all duration-300 ${
        collapsed ? "w-[5rem]" : "w-64"
      }`}
    >
      {/* HEADER */}
      <div>
        <div className="flex items-center justify-between px-4 py-4 border-b border-[#2A3550]">
          {!collapsed && (
            <div className="flex items-center gap-2">
              <FiActivity className="text-[#00D9FF] text-2xl" />
              <span className="font-bold text-lg">SafeMine IoT</span>
            </div>
          )}
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="p-2 rounded-lg hover:bg-[#151B2D] transition"
          >
            <FiMenu className="text-[#8B9DC3]" />
          </button>
        </div>

        {/* PERFIL DE USUARIO */}
        <div className="flex flex-col items-center py-6 border-b border-[#2A3550]">
          <div className="bg-[#00D9FF] text-[#0A0E1A] font-bold w-12 h-12 flex items-center justify-center rounded-full">
            JD
          </div>
          {!collapsed && (
            <>
              <p className="mt-3 font-semibold">Juan Pérez</p>
              <span
                className={`text-xs px-3 py-1 rounded-full mt-1 ${
                  role === "Administrador"
                    ? "bg-[#3B0A0A] text-[#FF4D4D]"
                    : role === "Supervisor"
                    ? "bg-[#3B2A00] text-[#FFB800]"
                    : "bg-[#002F4E] text-[#00D9FF]"
                }`}
              >
                {role}
              </span>
            </>
          )}
        </div>

        {/* MENÚ PRINCIPAL */}
        <nav className="flex flex-col gap-1 px-2 mt-4">
          {menuItems.map((item, index) => {
            const active = isActive(item.href);
            return (
              <Link
                key={index}
                href={item.href}
                className={`flex items-center gap-3 px-3 py-3 rounded-lg cursor-pointer transition-all duration-200 ${
                  active
                    ? "bg-[#151B2D] border-l-4 border-[#00D9FF]"
                    : "hover:bg-[#151B2D]"
                }`}
              >
                <div
                  className={`relative text-xl ${
                    active ? "text-[#00D9FF]" : "text-[#8B9DC3]"
                  }`}
                >
                  {item.icon}
                  {item.badge && (
                    <span className="absolute -top-2 -right-2 bg-[#FF4D4D] text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                      {item.badge}
                    </span>
                  )}
                </div>
                {!collapsed && (
                  <span
                    className={`text-sm ${
                      active ? "text-[#00D9FF]" : "text-[#8B9DC3]"
                    }`}
                  >
                    {item.name}
                  </span>
                )}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* FOOTER */}
      <div className="border-t border-[#2A3550] p-4">
        <div className="flex items-center gap-2 mb-3">
          <span className="w-2 h-2 bg-green-500 rounded-full"></span>
          {!collapsed && (
            <span className="text-sm text-[#8B9DC3]">Sincronizado</span>
          )}
        </div>
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 text-[#8B9DC3] hover:text-[#FF4D4D] transition-all"
        >
          <FiPower />
          {!collapsed && <span>Cerrar sesión</span>}
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;

"use client";

import React, { useState } from "react";
import {
  FiMenu,
  FiGrid,
  FiBell,
  FiSettings,
  FiBook,
  FiHeadphones,
  FiPower,
  FiActivity,
} from "react-icons/fi";

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  const menuItems = [
    { name: "Dashboard", icon: <FiGrid /> },
    { name: "Mis Dispositivos", icon: <FiActivity /> },
    { name: "Alertas", icon: <FiBell />, badge: 3 },
    { name: "Configuración", icon: <FiSettings /> },
    { name: "Documentación", icon: <FiBook /> },
    { name: "Soporte", icon: <FiHeadphones /> },
  ];

  return (
    <aside
      className={`h-screen flex flex-col justify-between bg-[#0A0E1A] border-r border-[#2A3550] text-white transition-all duration-300 ${
        collapsed ? "w-[5rem]" : "w-64"
      }`}
    >
      {/* Header */}
      <div>
        {/* Logo y botón de colapsar */}
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

        {/* Usuario */}
        <div className="flex flex-col items-center py-6 border-b border-[#2A3550]">
          <div className="bg-[#00D9FF] text-[#0A0E1A] font-bold w-12 h-12 flex items-center justify-center rounded-full">
            JD
          </div>
          {!collapsed && (
            <>
              <p className="mt-3 font-semibold">Andrew Peralta </p>
              <span className="text-xs bg-[#002F4E] text-[#00D9FF] px-3 py-1 rounded-full mt-1">
                Operador
              </span>
            </>
          )}
        </div>

        {/* Menú */}
        <nav className="flex flex-col gap-1 px-2 mt-4">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className={`flex items-center gap-3 px-3 py-3 rounded-lg cursor-pointer transition-all duration-200 ${
                item.name === "Dashboard"
                  ? "bg-[#151B2D] border-l-4 border-[#00D9FF]"
                  : "hover:bg-[#151B2D]"
              }`}
            >
              <div className="relative text-[#8B9DC3] text-xl">
                {item.icon}
                {item.badge && (
                  <span className="absolute -top-2 -right-2 bg-[#FF4D4D] text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                    {item.badge}
                  </span>
                )}
              </div>
              {!collapsed && (
                <span className="text-sm text-[#8B9DC3]">{item.name}</span>
              )}
            </div>
          ))}
        </nav>
      </div>

      {/* Footer */}
      <div className="border-t border-[#2A3550] p-4">
        <div className="flex items-center gap-2 mb-3">
          <span className="w-2 h-2 bg-green-500 rounded-full"></span>
          {!collapsed && <span className="text-sm text-[#8B9DC3]">Sincronizado</span>}
        </div>
        <button className="flex items-center gap-2 text-[#8B9DC3] hover:text-[#FF4D4D] transition-all">
          <FiPower />
          {!collapsed && <span>Cerrar sesión</span>}
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;

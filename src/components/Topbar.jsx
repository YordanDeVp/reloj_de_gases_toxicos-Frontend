"use client";

import React, { useState, useEffect, useRef } from "react";
import { useRouter, usePathname } from "next/navigation";
import { FiSearch, FiBell, FiMapPin, FiX } from "react-icons/fi";

const Topbar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [searchQuery, setSearchQuery] = useState("");
  const [showNotifications, setShowNotifications] = useState(false);
  const [showLocationMenu, setShowLocationMenu] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState("Mina Norte");
  const notificationRef = useRef(null);
  const locationRef = useRef(null);

  // TODO: Reemplazar con datos reales del backend
  // Endpoint sugerido: GET /api/notifications/unread
  // Respuesta esperada: Array de objetos { id, type, message, timestamp, deviceId, read }
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: "critical",
      message: "H₂S crítico en WCH-004",
      timestamp: "Hace 5 min",
      deviceId: "WCH-004",
      read: false
    },
    {
      id: 2,
      type: "warning",
      message: "Batería baja en WCH-002",
      timestamp: "Hace 15 min",
      deviceId: "WCH-002",
      read: false
    },
    {
      id: 3,
      type: "info",
      message: "Mantenimiento programado mañana",
      timestamp: "Hace 1h",
      deviceId: null,
      read: false
    }
  ]);

  // TODO: Reemplazar con datos reales del backend
  // Endpoint sugerido: GET /api/locations
  // Respuesta esperada: Array de objetos { id, name, deviceCount, activeAlerts }
  const locations = [
    { id: 1, name: "Mina Norte", deviceCount: 12, activeAlerts: 2 },
    { id: 2, name: "Mina Sur", deviceCount: 8, activeAlerts: 0 },
    { id: 3, name: "Zona Central", deviceCount: 15, activeAlerts: 1 },
    { id: 4, name: "Sala de Máquinas", deviceCount: 5, activeAlerts: 0 }
  ];

  // Generar breadcrumb dinámico basado en la ruta actual
  const generateBreadcrumb = () => {
    const paths = pathname.split("/").filter(Boolean);
    
    if (paths.length === 0) {
      return { parent: "Inicio", current: "Dashboard" };
    }

    const pathMap = {
      "dashboard": "Dashboard",
      "dispositivos": "Dispositivos",
      "alertas": "Alertas",
      "reportes": "Reportes",
      "configuracion": "Configuración",
      "perfil": "Perfil",
      "historial": "Historial"
    };

    const current = pathMap[paths[paths.length - 1]] || paths[paths.length - 1];
    const parent = paths.length > 1 ? pathMap[paths[0]] || "Inicio" : "Inicio";

    return { parent, current };
  };

  const breadcrumb = generateBreadcrumb();

  // Cerrar menús al hacer click fuera
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (notificationRef.current && !notificationRef.current.contains(event.target)) {
        setShowNotifications(false);
      }
      if (locationRef.current && !locationRef.current.contains(event.target)) {
        setShowLocationMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Atajo de teclado Ctrl+K para el buscador
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        document.getElementById("search-input")?.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // TODO: Conectar con endpoint de búsqueda
  // Endpoint sugerido: GET /api/search?q=${query}
  // Debería buscar en dispositivos, alertas, ubicaciones, etc.
  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      console.log("Buscando:", searchQuery);
      // router.push(`/busqueda?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  // TODO: Conectar con endpoint para marcar notificación como leída
  // Endpoint sugerido: PUT /api/notifications/{notificationId}/read
  // Body: { read: true }
  const handleNotificationClick = (notification) => {
    console.log("Notificación clickeada:", notification.id);
    
    // Marcar como leída
    setNotifications(prev =>
      prev.map(n => n.id === notification.id ? { ...n, read: true } : n)
    );

    // TODO: Hacer request al backend
    // await fetch(`/api/notifications/${notification.id}/read`, {
    //   method: 'PUT',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ read: true })
    // });

    // Redirigir según el tipo de notificación
    if (notification.deviceId) {
      router.push(`/dispositivos/${notification.deviceId}`);
    } else if (notification.type === "info") {
      router.push("/alertas");
    }
    
    setShowNotifications(false);
  };

  // TODO: Conectar con endpoint para marcar todas como leídas
  // Endpoint sugerido: PUT /api/notifications/mark-all-read
  const handleMarkAllRead = () => {
    console.log("Marcar todas como leídas");
    
    setNotifications(prev => prev.map(n => ({ ...n, read: true })));
    
    // TODO: Hacer request al backend
    // await fetch('/api/notifications/mark-all-read', {
    //   method: 'PUT',
    //   headers: { 'Content-Type': 'application/json' }
    // });
  };

  // TODO: Conectar con endpoint para cambiar ubicación activa
  // Endpoint sugerido: PUT /api/user/active-location
  // Body: { locationId: id }
  // Esto debería filtrar todos los datos del dashboard por esa ubicación
  const handleLocationChange = (location) => {
    console.log("Ubicación seleccionada:", location.name);
    setSelectedLocation(location.name);
    setShowLocationMenu(false);
    
    // TODO: Hacer request al backend para guardar preferencia
    // await fetch('/api/user/active-location', {
    //   method: 'PUT',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ locationId: location.id })
    // });
    
    // Recargar datos del dashboard con nueva ubicación
    // window.location.reload(); // O mejor, actualizar state global
  };

  // Navegar al perfil del usuario
  const handleProfileClick = () => {
    console.log("Navegar a perfil");
    router.push("/perfil");
  };

  const unreadCount = notifications.filter(n => !n.read).length;

  const getNotificationIcon = (type) => {
    switch (type) {
      case "critical":
        return "🔴";
      case "warning":
        return "⚠️";
      case "info":
        return "ℹ️";
      default:
        return "🔔";
    }
  };

  return (
    <header className="w-full flex items-center justify-between px-6 py-3 bg-[#0A0E1A] border-b border-[#2A3550]">
      {/* Breadcrumb dinámico */}
      <div className="flex items-center text-sm">
        <span className="text-[#8B9DC3]">{breadcrumb.parent}</span>
        <span className="text-[#8B9DC3] mx-2">/</span>
        <span className="text-white font-semibold">{breadcrumb.current}</span>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-4">
        {/* Search Input */}
        <form onSubmit={handleSearch} className="relative">
          <FiSearch className="absolute left-3 top-2.5 text-[#8B9DC3]" />
          <input
            id="search-input"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Buscar... (Ctrl+K)"
            className="bg-[#151B2D] text-white placeholder-[#8B9DC3] border border-[#2A3550] rounded-lg pl-10 pr-4 py-2 text-sm w-72 focus:outline-none focus:border-[#00D9FF] transition"
          />
        </form>

        {/* Location Selector */}
        <div className="relative" ref={locationRef}>
          <button 
            onClick={() => setShowLocationMenu(!showLocationMenu)}
            className="flex items-center gap-2 bg-[#151B2D] border border-[#2A3550] rounded-lg px-3 py-2 text-sm text-white hover:border-[#00D9FF] transition"
          >
            <FiMapPin className="text-[#00D9FF]" />
            <span>{selectedLocation}</span>
          </button>

          {/* Location Dropdown Menu */}
          {showLocationMenu && (
            <div className="absolute right-0 mt-2 w-64 bg-[#151B2D] border border-[#2A3550] rounded-lg shadow-lg z-50">
              <div className="p-3 border-b border-[#2A3550]">
                <p className="text-xs text-[#8B9DC3] font-semibold">SELECCIONAR UBICACIÓN</p>
              </div>
              <div className="max-h-64 overflow-y-auto">
                {locations.map((location) => (
                  <button
                    key={location.id}
                    onClick={() => handleLocationChange(location)}
                    className={`w-full px-4 py-3 text-left hover:bg-[#1A2235] transition flex items-center justify-between ${
                      selectedLocation === location.name ? "bg-[#1A2235]" : ""
                    }`}
                  >
                    <div>
                      <p className="text-white text-sm font-medium">{location.name}</p>
                      <p className="text-xs text-[#8B9DC3]">{location.deviceCount} dispositivos</p>
                    </div>
                    {location.activeAlerts > 0 && (
                      <span className="bg-[#FF4D4D] text-white text-xs px-2 py-0.5 rounded-full">
                        {location.activeAlerts}
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Notifications */}
        <div className="relative" ref={notificationRef}>
          <button
            onClick={() => setShowNotifications(!showNotifications)}
            className="relative"
          >
            <FiBell className="text-[#8B9DC3] text-xl cursor-pointer hover:text-[#00D9FF] transition" />
            {unreadCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#FF4D4D] text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                {unreadCount}
              </span>
            )}
          </button>

          {/* Notifications Dropdown */}
          {showNotifications && (
            <div className="absolute right-0 mt-2 w-96 bg-[#151B2D] border border-[#2A3550] rounded-lg shadow-lg z-50">
              <div className="flex items-center justify-between p-4 border-b border-[#2A3550]">
                <h3 className="text-white font-semibold">Notificaciones</h3>
                <button
                  onClick={handleMarkAllRead}
                  className="text-xs text-[#00D9FF] hover:underline"
                >
                  Marcar todas como leídas
                </button>
              </div>
              
              <div className="max-h-96 overflow-y-auto">
                {notifications.length === 0 ? (
                  <div className="p-8 text-center text-[#8B9DC3]">
                    <p>No hay notificaciones</p>
                  </div>
                ) : (
                  notifications.map((notification) => (
                    <button
                      key={notification.id}
                      onClick={() => handleNotificationClick(notification)}
                      className={`w-full p-4 text-left hover:bg-[#1A2235] transition border-b border-[#1E2733] ${
                        !notification.read ? "bg-[#1A2235]/50" : ""
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <span className="text-2xl">{getNotificationIcon(notification.type)}</span>
                        <div className="flex-1">
                          <p className="text-white text-sm font-medium">{notification.message}</p>
                          <p className="text-xs text-[#8B9DC3] mt-1">{notification.timestamp}</p>
                        </div>
                        {!notification.read && (
                          <span className="w-2 h-2 bg-[#00D9FF] rounded-full mt-1"></span>
                        )}
                      </div>
                    </button>
                  ))
                )}
              </div>
              
              <div className="p-3 border-t border-[#2A3550]">
                <button
                  onClick={() => {
                    router.push("/notificaciones");
                    setShowNotifications(false);
                  }}
                  className="w-full text-center text-sm text-[#00D9FF] hover:underline"
                >
                  Ver todas las notificaciones
                </button>
              </div>
            </div>
          )}
        </div>

        {/* User Avatar */}
        <button
          onClick={handleProfileClick}
          className="bg-[#00D9FF] text-[#0A0E1A] font-bold w-9 h-9 flex items-center justify-center rounded-full cursor-pointer hover:bg-[#00B8E6] transition"
          title="Ver perfil"
        >
          JD
        </button>
      </div>
    </header>
  );
};

export default Topbar;
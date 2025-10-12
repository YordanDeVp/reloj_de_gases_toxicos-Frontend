"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { FiAlertTriangle } from "react-icons/fi";

const RecentAlerts = () => {
  const router = useRouter();
  const [alerts, setAlerts] = useState([
    {
      id: "WCH-004",
      time: "Hace 5 min",
      message: "H₂S superó límite seguro",
      value: "12.4 ppm",
      status: "critical",
      severity: "crítico"
    },
    {
      id: "WCH-002",
      time: "Hace 15 min",
      message: "Batería baja detectada",
      value: "45%",
      status: "warning",
      severity: "advertencia"
    },
    {
      id: "WCH-001",
      time: "Hace 32 min",
      message: "Nivel de polvo elevado",
      value: "145 μg/m³",
      status: "resolved",
      severity: "resuelto"
    },
    {
      id: "WCH-003",
      time: "Hace 1h 12min",
      message: "CO en aumento",
      value: "35 ppm",
      status: "resolved",
      severity: "resuelto"
    },
  ]);

  const [loadingAlert, setLoadingAlert] = useState(null);

  const getAlertStyles = (status) => {
    switch (status) {
      case "critical":
        return {
          bg: "bg-[#3D1F2F]",
          border: "border-[#FF4D4D]",
          icon: "#FF4D4D",
          text: "#FF4D4D"
        };
      case "warning":
        return {
          bg: "bg-[#3D3520]",
          border: "border-[#FFB800]",
          icon: "#FFB800",
          text: "#FFB800"
        };
      case "resolved":
        return {
          bg: "bg-[#1E2640]",
          border: "border-[#2A3550]",
          icon: "#00FF88",
          text: "#00FF88"
        };
      default:
        return {
          bg: "bg-[#1E2640]",
          border: "border-[#2A3550]",
          icon: "#8B9DC3",
          text: "#8B9DC3"
        };
    }
  };

  // TODO: Conectar con endpoint para investigar alerta
  // Endpoint sugerido: POST /api/alerts/{alertId}/investigate
  // Body: { userId: "user-id", notes: "optional notes" }
  // Esta acción redirige a la página de detalles de la alerta para investigación completa
  const handleInvestigate = async (alert) => {
    console.log("Investigar alerta:", alert.id);
    setLoadingAlert(alert.id);
    
    try {
      // TODO: Llamada API para registrar que se está investigando

      setTimeout(() => {
        router.push(`/alertas/${alert.id}`);
        setLoadingAlert(null);
      }, 300);
    } catch (error) {
      console.error("Error al investigar alerta:", error);
      setLoadingAlert(null);
    }
  };

  // TODO: Conectar con endpoint para resolver alerta
  const handleResolve = async (alert) => {
    console.log("Resolver alerta:", alert.id);
    
    // TODO: Implementar modal de confirmación personalizado en lugar de window.confirm
    // Por ahora usamos el nativo para funcionalidad básica
    const confirm = window.confirm(
      `¿Estás seguro de marcar como resuelta la alerta ${alert.id}?\n\n` +
      `Mensaje: ${alert.message}\n` +
      `Valor: ${alert.value}`
    );
    
    if (!confirm) return;
    
    setLoadingAlert(alert.id);
    
    try {
      // TODO: Llamada API para resolver la alerta
      // Actualizar el estado local de la alerta
      setTimeout(() => {
        setAlerts(prevAlerts =>
          prevAlerts.map(a =>
            a.id === alert.id ? { ...a, status: "resolved" } : a
          )
        );
        setLoadingAlert(null);
      }, 500);
    } catch (error) {
      console.error("Error al resolver alerta:", error);
      alert("Error al resolver la alerta. Intenta nuevamente.");
      setLoadingAlert(null);
    }
  };

  // TODO: Conectar con endpoint para ver todas las alertas
  const handleViewAll = () => {
    console.log("Ver todas las alertas");
  
    router.push("/alerts");
  };

  return (
    <div className="bg-[#1E2640] border border-[#2A3550] rounded-2xl p-6 hover:border-[#00D9FF] transition-all duration-300">
      {/* Encabezado */}
      <div className="flex justify-between items-start mb-2">
        <div>
          <h3 className="text-xl font-bold text-white">Alertas Recientes</h3>
          <p className="text-sm text-[#8B9DC3] mt-1">Requieren atención</p>
        </div>
        <button 
          onClick={handleViewAll}
          className="text-[#00D9FF] hover:underline text-sm font-semibold px-4 py-2 rounded-lg border border-[#00D9FF] hover:bg-[#00D9FF] hover:text-[#0A0E1A] transition-all duration-200"
        >
          Ver Todas
        </button>
      </div>

      {/* Listado de alertas */}
      <div className="space-y-3 mt-6">
        {alerts.map((alert) => {
          const styles = getAlertStyles(alert.status);
          const isLoading = loadingAlert === alert.id;
          
          return (
            <div
              key={alert.id}
              className={`${styles.bg} border ${styles.border} rounded-xl p-4 transition-all duration-200 hover:scale-[1.01] ${
                isLoading ? 'opacity-50 pointer-events-none' : ''
              }`}
            >
              <div className="flex items-start justify-between">
                {/* Información de la alerta */}
                <div className="flex gap-3 flex-1">
                  {/* Ícono de alerta */}
                  <div
                    className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: `${styles.icon}20` }}
                  >
                    <FiAlertTriangle style={{ color: styles.icon }} size={20} />
                  </div>

                  {/* Detalles */}
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span
                        className="text-sm font-bold"
                        style={{ color: styles.text }}
                      >
                        {alert.id}
                      </span>
                      <span className="text-xs text-[#8B9DC3]">
                        {alert.time}
                      </span>
                    </div>
                    <p className="text-white font-medium text-sm mb-1">
                      {alert.message}
                    </p>
                    <p
                      className="text-sm font-semibold"
                      style={{ color: styles.text }}
                    >
                      {alert.value}
                    </p>
                  </div>
                </div>

                {/* Botones de acción o estado */}
                <div className="flex gap-2 ml-4">
                  {alert.status !== "resolved" ? (
                    <>
                      <button 
                        onClick={() => handleInvestigate(alert)}
                        disabled={isLoading}
                        className="px-3 py-1.5 rounded-lg text-xs font-bold bg-[#00D9FF] text-[#0A0E1A] hover:bg-[#00B8E6] transition-all whitespace-nowrap disabled:opacity-50"
                      >
                        {isLoading ? "..." : "Investigar"}
                      </button>
                      <button 
                        onClick={() => handleResolve(alert)}
                        disabled={isLoading}
                        className="px-3 py-1.5 rounded-lg text-xs font-bold bg-[#0F1625] text-white border border-[#2A3550] hover:bg-[#1B2333] transition-all whitespace-nowrap disabled:opacity-50"
                      >
                        {isLoading ? "..." : "Resolver"}
                      </button>
                    </>
                  ) : (
                    <span className="text-xs font-bold px-3 py-1.5 rounded-lg text-[#00FF88] bg-[#00FF8820]">
                      Resuelta
                    </span>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RecentAlerts;
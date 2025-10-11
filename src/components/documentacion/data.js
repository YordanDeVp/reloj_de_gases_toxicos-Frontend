// components/documentacion/data.js

export const documentacionData = [
  {
    id: "primeros-pasos",
    nombre: "Primeros Pasos",
    icono: "BookOpen",
    articulos: [
      {
        id: "bienvenido-a-safemine",
        titulo: "Bienvenido a SafeMine IoT",
        tiempo: "5 min",
      },
      {
        id: "configuracion-inicial-sistema",
        titulo: "Configuración Inicial del Sistema",
        tiempo: "10 min",
      },
      {
        id: "registrar-primer-dispositivo",
        titulo: "Registrar tu Primer Dispositivo",
        tiempo: "8 min",
      },
      {
        id: "navegando-dashboard",
        titulo: "Navegando por el Dashboard",
        tiempo: "7 min",
      },
    ],
  },
  {
    id: "configuracion-dispositivos",
    nombre: "Configuración de Dispositivos",
    icono: "Settings",
    articulos: [
      { id: "tipos-sensores", titulo: "Tipos de Sensores Soportados", tiempo: "6 min" },
      { id: "emparejamiento", titulo: "Activación y Emparejamiento", tiempo: "12 min" },
      { id: "umbrales-alertas", titulo: "Configurar Umbrales de Alertas", tiempo: "10 min" },
      { id: "calibracion-sensores", titulo: "Calibración de Sensores", tiempo: "15 min" },
      { id: "mantenimiento-preventivo", titulo: "Mantenimiento Preventivo", tiempo: "8 min" },
    ],
  },
  {
    id: "interpretacion-datos",
    nombre: "Interpretación de Datos",
    icono: "Database",
    articulos: [
      { id: "metricas-h2s", titulo: "Entendiendo las Métricas H₂S", tiempo: "9 min" },
      { id: "niveles-co", titulo: "Niveles de CO y su Significado", tiempo: "9 min" },
      { id: "calidad-aire", titulo: "Calidad del Aire: Partículas PM10", tiempo: "7 min" },
      { id: "graficos-tendencias", titulo: "Interpretando Gráficos de Tendencias", tiempo: "11 min" },
    ],
  },
  {
    id: "gestion-alertas",
    nombre: "Gestión de Alertas",
    icono: "Bell",
    articulos: [
      { id: "niveles-alertas", titulo: "Niveles de Severidad de Alertas", tiempo: "6 min" },
      { id: "configurar-notificaciones", titulo: "Configurar Notificaciones", tiempo: "8 min" },
      { id: "respuesta-criticas", titulo: "Respuesta a Alertas Críticas", tiempo: "12 min" },
      { id: "analisis-incidentes", titulo: "Historial y Análisis de Incidentes", tiempo: "10 min" },
    ],
  },
  {
    id: "facturacion-planes",
    nombre: "Facturación y Planes",
    icono: "FileText",
    articulos: [
      { id: "comparacion-planes", titulo: "Comparación de Planes", tiempo: "5 min" },
      { id: "actualizar-suscripcion", titulo: "Actualizar tu Suscripción", tiempo: "7 min" },
      { id: "metodos-pago", titulo: "Gestionar Métodos de Pago", tiempo: "6 min" },
      { id: "politica-cancelacion", titulo: "Política de Cancelación", tiempo: "4 min" },
    ],
  },
  {
    id: "api-webhooks",
    nombre: "API y Webhooks",
    icono: "Plug",
    articulos: [
      { id: "api-key", titulo: "Autenticación con API Key", tiempo: "8 min" },
      { id: "endpoints", titulo: "Endpoints Disponibles", tiempo: "15 min" },
      { id: "configurar-webhooks", titulo: "Configurar Webhooks", tiempo: "10 min" },
      { id: "ejemplos-integracion", titulo: "Ejemplos de Integración", tiempo: "20 min" },
    ],
  },
  {
    id: "solucion-problemas",
    nombre: "Solución de Problemas",
    icono: "AlertTriangle",
    articulos: [
      { id: "no-conecta", titulo: "Dispositivo No Conecta", tiempo: "8 min" },
      { id: "lecturas-inconsistentes", titulo: "Lecturas Inconsistentes", tiempo: "10 min" },
      { id: "problemas-bateria", titulo: "Problemas de Batería", tiempo: "7 min" },
      { id: "errores-comunes", titulo: "Errores Comunes y Soluciones", tiempo: "12 min" },
    ],
  },
  {
    id: "preguntas-frecuentes",
    nombre: "Preguntas Frecuentes",
    icono: "HelpCircle",
    articulos: [
      { id: "funciona-iot", titulo: "¿Cómo funciona el sistema IoT?", tiempo: "6 min" },
      { id: "cuantos-dispositivos", titulo: "¿Cuántos dispositivos puedo conectar?", tiempo: "3 min" },
      { id: "datos-encriptados", titulo: "¿Los datos están encriptados?", tiempo: "5 min" },
      { id: "exportar-datos", titulo: "¿Puedo exportar mis datos?", tiempo: "4 min" },
    ],
  },
];

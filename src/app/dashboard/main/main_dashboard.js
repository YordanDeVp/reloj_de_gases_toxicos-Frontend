import Header from "../components/header/Header";
import StatCard from "../components/stats/StatCard";
import RealTimeMonitor from "../components/charts/RealTimeMonitor";
import AlertDistribution from "../components/charts/AlertDistribution";

// Placeholder para íconos
const DeviceActiveIcon = () => (
  <svg
    className="w-8 h-8 text-primary"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
    />
  </svg>
);
const ReadingsIcon = () => (
  <svg
    className="w-8 h-8 text-primary"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
    />
  </svg>
);
const AlertIcon = () => (
  <svg
    className="w-8 h-8 text-accent-red"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
    />
  </svg>
);
const QualityIcon = () => (
  <svg
    className="w-8 h-8 text-primary"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

export default function DashboardPage() {
  return (
    <div className="p-8">
      <Header />
      <div className="mt-8">
        {/* Sección de Estadísticas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatCard
            icon={<DeviceActiveIcon />}
            value="24"
            title="Dispositivos Activos"
            details="2 offline"
          />
          <StatCard
            icon={<ReadingsIcon />}
            value="3,428"
            title="Lecturas Hoy"
            subtitle="vs 3,056 ayer"
            details="+12%"
          />
          <StatCard
            icon={<AlertIcon />}
            value="5"
            title="Alertas Críticas"
            subtitle={
              <span className="text-accent-red">
                Requieren atención inmediata
              </span>
            }
            color="red"
          />
          <StatCard
            icon={<QualityIcon />}
            value="87%"
            title="Calidad Promedio"
            color="primary"
          />
        </div>

        {/* Sección de Gráficos */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
          <div className="lg:col-span-2">
            <RealTimeMonitor />
          </div>
          <div>
            <AlertDistribution />
          </div>
        </div>
      </div>
    </div>
  );
}
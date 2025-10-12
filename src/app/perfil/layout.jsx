import { Inter } from "next/font/google";
import Sidebar from "@/components/profile/layout/sidebar.jsx"; // Importamos el menú lateral


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SafeMine IoT",
  description: "Panel de control de SafeMine IoT",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`${inter.className} bg-[#0F172A] text-gray-300`}>
        {/* Usamos Flexbox para crear el layout de dos columnas */}
        <div className="flex min-h-screen">
          
          {/* Componente del Menú Lateral (Sidebar) */}
          <Sidebar />

          {/* Contenedor principal que crecerá para ocupar el espacio restante */}
          <main className="flex-1">
            {children}
          </main>

        </div>
      </body>
    </html>
  );
}
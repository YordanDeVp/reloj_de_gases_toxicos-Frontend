'use client'
import React from 'react';
import Link from 'next/link'; // Importante para la navegación en Next.js
import { 
    LayoutDashboard, User, BarChart, Bell, FileText, Settings, Users, HardDrive, HelpCircle, LogOut, CheckCircle 
} from 'lucide-react';
import Avatar from '../ui/avatar';

// ---- COMPONENTE DE UN ITEM DE NAVEGACIÓN ----
// Creamos un componente pequeño para no repetir código
const NavItem = ({ href, icon, children, hasAlert }) => (
    <Link href={href} className="flex items-center px-4 py-2.5 text-sm font-medium text-gray-300 rounded-lg hover:bg-slate-700 transition-colors group">
        {icon}
        <span className="flex-1 ml-3 whitespace-nowrap">{children}</span>
        {hasAlert && <span className="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium text-white bg-red-500 rounded-full">4</span>}
    </Link>
);


const Sidebar = () => {
    return (
        <aside className="w-64 flex-shrink-0 bg-[#1E293B] p-4 flex flex-col">
            
            {/* ---- SECCIÓN DEL LOGO Y TÍTULO ---- */}
            <div className="flex items-center mb-6 px-4">
                {/* Aquí iría tu logo */}
                <svg className="w-8 h-8 text-cyan-400" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5-10-5-10 5z"/>
                </svg>
                <h1 className="text-xl font-bold text-white ml-2">SafeMine IoT</h1>
            </div>

            {/* ---- PERFIL DE USUARIO EN EL SIDEBAR ---- */}
            <div className="mb-4">
                <div className="flex items-center p-3 bg-slate-700/50 rounded-lg">
                    <Avatar initials="JP" />
                    <div className="ml-3">
                        <p className="text-sm font-semibold text-white">Juan Pérez</p>
                        <p className="text-xs text-gray-400">Supervisor</p>
                    </div>
                </div>
            </div>

            {/* ---- NAVEGACIÓN PRINCIPAL ---- */}
            {/* Esta sección es la más importante para la navegación */}
            <nav className="flex-1 space-y-1">
                <NavItem href="/dashboard" icon={<LayoutDashboard size={20} />}>Dashboard</NavItem>
                <NavItem href="/dispositivos" icon={<HardDrive size={20} />}>Mis Dispositivos</NavItem>
                <NavItem href="/analisis" icon={<BarChart size={20} />}>Análisis y Reportes</NavItem>
                <NavItem href="/alertas" icon={<Bell size={20} />} hasAlert>Alertas</NavItem>
                <NavItem href="/planes" icon={<FileText size={20} />}>Planes y Suscripciones</NavItem>
                <NavItem href="/gestion-usuarios" icon={<Users size={20} />}>Gestión de Usuarios</NavItem>
                <NavItem href="/configuracion" icon={<Settings size={20} />}>Configuración</NavItem>
                <NavItem href="/documentacion" icon={<HelpCircle size={20} />}>Documentación</NavItem>
                <NavItem href="/soporte" icon={<User size={20} />}>Soporte</NavItem>
            </nav>

            {/* ---- SECCIÓN INFERIOR: ESTADO Y CERRAR SESIÓN ---- */}
            <div className="mt-auto space-y-2">
                 <div className="flex items-center text-sm text-green-400 px-4">
                    <CheckCircle size={16} className="mr-2"/> Sincronizado
                 </div>
                 <button className="w-full flex items-center px-4 py-2.5 text-sm font-medium text-gray-300 rounded-lg hover:bg-slate-700 transition-colors group">
                    <LogOut size={20} className="text-red-500"/>
                    <span className="ml-3">Cerrar sesión</span>
                 </button>
            </div>
        </aside>
    );
}

export default Sidebar;
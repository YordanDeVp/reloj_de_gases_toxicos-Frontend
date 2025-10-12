'use client' 
import React, { useState } from 'react';
import { User, Building, Lock, Bell, Settings } from 'lucide-react';
// 1. Importar los nuevos paneles
import PersonalInfoPanel from './personal-info-panel';
import CompanyInfoPanel from './company-info-panel';
import SecurityPanel from './security-panel';
import AccountPanel from './account-panel';
import NotificationsPanel from './notifications-panel';

// --- DATOS DE EJEMPLO (llévalos a la página principal si es necesario) ---
const userData = {
  name: "Juan Pérez",
  role: "Supervisor de Operaciones",
  email: "juan.perez@mineradelnorte.cl",
  phone: "+56 9 1234 5678"
};

const TABS = [
    { name: 'Información Personal', icon: <User size={16} />, component: <PersonalInfoPanel user={userData} /> },
    { name: 'Empresa', icon: <Building size={16} />, component: <CompanyInfoPanel /> },
    { name: 'Seguridad', icon: <Lock size={16} />, component: <SecurityPanel /> },
    { name: 'Cuenta', icon: <Settings size={16} />, component: <AccountPanel /> },
    { name: 'Notificaciones', icon: <Bell size={16} />, component: <NotificationsPanel /> },
];

const ProfileTabs = () => {
    const [activeTab, setActiveTab] = useState(TABS[0].name);

    // Encontrar el componente de la pestaña activa para renderizarlo
    const activeComponent = TABS.find(tab => tab.name === activeTab)?.component;

    return (
        <div>
            {/* Navegación de Pestañas */}
            <div className="border-b border-slate-700">
                <nav className="-mb-px flex space-x-6" aria-label="Tabs">
                    {TABS.map((tab) => (
                        <button
                            key={tab.name}
                            onClick={() => setActiveTab(tab.name)}
                            className={`inline-flex items-center gap-2 whitespace-nowrap py-3 px-1 border-b-2 font-medium text-sm transition-colors ${
                                activeTab === tab.name
                                    ? 'border-cyan-500 text-cyan-500'
                                    : 'border-transparent text-gray-400 hover:text-white hover:border-gray-500'
                            }`}
                        >
                            {tab.icon}
                            {tab.name}
                        </button>
                    ))}
                </nav>
            </div>

            {/* Contenido de la Pestaña Activa */}
            {/* 2. Aquí se renderiza el componente correcto */}
            <div className="mt-8">
                {activeComponent}
            </div>
        </div>
    );
}

export default ProfileTabs;
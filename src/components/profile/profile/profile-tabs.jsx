'use client' // Se necesita para el estado de la pestaña activa
import React, { useState } from 'react';
import { User, Building, Lock, Bell } from 'lucide-react';

const tabs = [
    { name: 'Información Personal', icon: <User size={16} /> },
    { name: 'Empresa', icon: <Building size={16} /> },
    { name: 'Seguridad', icon: <Lock size={16} /> },
    { name: 'Notificaciones', icon: <Bell size={16} /> },
];

const ProfileTabs = () => {
    // Estado para saber cuál es la pestaña activa. Por defecto, la primera.
    const [activeTab, setActiveTab] = useState(tabs[0].name);

    return (
        <div className="border-b border-slate-700">
            <nav className="-mb-px flex space-x-6" aria-label="Tabs">
                {/* Mapeamos el array de pestañas para crearlas dinámicamente */}
                {tabs.map((tab) => (
                    <button
                        key={tab.name}
                        onClick={() => setActiveTab(tab.name)}
                        className={`inline-flex items-center gap-2 whitespace-nowrap py-3 px-1 border-b-2 font-medium text-sm transition-colors ${
                            activeTab === tab.name
                                ? 'border-cyan-500 text-cyan-500' // Estilos si está activa
                                : 'border-transparent text-gray-400 hover:text-white hover:border-gray-500' // Estilos si no está activa
                        }`}
                    >
                        {tab.icon}
                        {tab.name}
                    </button>
                ))}
            </nav>
        </div>
    );
}

export default ProfileTabs;
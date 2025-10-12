import React from 'react';
import Button from '../ui/button';

// Componente pequeño para mostrar cada campo y no repetir código
const InfoField = ({ label, value }) => (
    <div className="py-3">
        <p className="text-xs text-gray-400">{label}</p>
        <p className="text-sm font-medium text-white">{value}</p>
    </div>
);

const PersonalInfoPanel = ({ user }) => {
    return (
        <div className="bg-[#1E293B] p-6 rounded-lg">
            {/* Cabecera del panel */}
            <div className="flex justify-between items-center mb-4 border-b border-slate-700 pb-4">
                <div>
                    <h3 className="text-lg font-semibold text-white">Información Personal</h3>
                    <p className="text-sm text-gray-400">Administra tu información básica</p>
                </div>
                <Button variant="outline">Editar</Button>
            </div>

            {/* Cuadrícula con la información del usuario */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 divide-y md:divide-y-0 divide-slate-700">
                <InfoField label="Nombre" value={user.name.split(' ')[0]} />
                <InfoField label="Apellido" value={user.name.split(' ')[1]} />
                <InfoField label="Correo Electrónico" value={user.email} />
                <InfoField label="Teléfono" value={user.phone} />
                <InfoField label="Cargo" value={user.role} />
                <InfoField label="Departamento" value="Operaciones" />
            </div>
        </div>
    );
}

export default PersonalInfoPanel;
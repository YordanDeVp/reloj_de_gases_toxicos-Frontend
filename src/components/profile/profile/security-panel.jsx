import React from 'react';
import { Eye, EyeOff, Lock, ShieldCheck } from 'lucide-react';
import Button from '../ui/button';
import Switch from '../ui/switch';

const PasswordInput = ({ placeholder }) => (
    <div className="relative">
        <input 
            type="password" 
            placeholder={placeholder}
            className="w-full bg-slate-800 border border-slate-600 rounded-md px-3 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500"
        />
        <button className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-white">
            <Eye size={16}/>
        </button>
    </div>
);

const SecurityPanel = () => {
  return (
    <div className="bg-[#1E293B] p-8 rounded-lg space-y-10">
      {/* Sección Cambiar Contraseña */}
      <div>
        <h3 className="text-lg font-semibold text-white">Cambiar Contraseña</h3>
        <p className="text-sm text-gray-400 mb-6">Actualiza tu contraseña periódicamente</p>
        <div className="space-y-4 max-w-lg">
            <div>
                <label className="text-sm font-medium text-gray-300 mb-2 block">Contraseña Actual</label>
                <PasswordInput placeholder="Ingresa tu contraseña actual" />
            </div>
            <div>
                <label className="text-sm font-medium text-gray-300 mb-2 block">Nueva Contraseña</label>
                <PasswordInput placeholder="Mínimo 8 caracteres" />
            </div>
            <div>
                <label className="text-sm font-medium text-gray-300 mb-2 block">Confirmar Nueva Contraseña</label>
                <PasswordInput placeholder="Repite la nueva contraseña" />
            </div>
            <div>
                <p className="text-sm text-gray-400 mb-2">Requisitos de contraseña:</p>
                <ul className="text-xs text-gray-400 list-disc list-inside space-y-1">
                    <li>Mínimo 8 caracteres</li>
                    <li>Al menos una letra mayúscula</li>
                    <li>Al menos un número</li>
                    <li>Las contraseñas coinciden</li>
                </ul>
            </div>
            <Button className="w-full">
                <Lock size={16} className="mr-2"/> Cambiar Contraseña
            </Button>
        </div>
      </div>

      {/* Sección Autenticación de Dos Factores */}
      <div>
        <h3 className="text-lg font-semibold text-white">Autenticación de Dos Factores</h3>
        <div className="flex items-center justify-between mt-2 bg-slate-800/50 p-4 rounded-lg">
            <div>
                <p className="text-sm font-medium text-white">Agrega una capa extra de seguridad</p>
            </div>
            <Switch />
        </div>
      </div>
    </div>
  );
};

export default SecurityPanel;
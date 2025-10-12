import React from 'react';
import { AlertTriangle, User, CheckCircle } from 'lucide-react';
import Badge from '../ui/badge';
import Button from '../ui/button';

const AccountPanel = () => {
  return (
    <div className="bg-[#1E293B] p-8 rounded-lg space-y-8">
      {/* Sección Tipo de Usuario / Rol */}
      <div>
        <h3 className="font-semibold text-white mb-2">Tipo de Usuario / Rol</h3>
        <div className="bg-yellow-900/50 border border-yellow-700 text-yellow-300 text-sm rounded-lg p-4 flex items-start gap-3 mb-4">
          <AlertTriangle size={20} className="flex-shrink-0 mt-0.5" />
          <p>No puedes asignarte el rol de Administrador. Solo un Administrador puede cambiar tu rol.</p>
        </div>
        <div className="flex items-center p-3 bg-slate-800 border border-slate-600 rounded-md">
          <User size={16} className="text-gray-400 mr-2" />
          <span className="text-sm">Operador</span>
        </div>
      </div>

      {/* Sección Plan de Suscripción */}
      <div>
        <h3 className="font-semibold text-white mb-2">Plan de Suscripción</h3>
        <div className="bg-slate-800 rounded-lg p-4 flex items-center justify-between">
            <div>
                <p className="font-medium text-white">Plan Básico <Badge variant="success" className="ml-2">Activa</Badge></p>
                <p className="text-sm text-gray-400">5 dispositivos, funciones básicas</p>
            </div>
            <div className="flex items-center gap-4">
                <Button>Cambiar Plan</Button>
                <a href="#" className="text-sm text-cyan-400 hover:underline">Ver Facturación</a>
            </div>
        </div>
      </div>

      {/* Sección Tipo de Cuenta */}
      <div>
          <h3 className="font-semibold text-white mb-2">Tipo de Cuenta</h3>
          <p className="p-3 bg-slate-800 border border-slate-600 rounded-md text-sm">Empresarial</p>
      </div>

      {/* Sección Estado de la Cuenta */}
      <div>
          <h3 className="font-semibold text-white mb-2">Estado de la Cuenta</h3>
          <div className="flex items-center gap-2 p-3 bg-slate-800 border border-slate-600 rounded-md">
            <CheckCircle size={16} className="text-green-500" />
            <p className="text-sm text-green-400">Tu cuenta está activa y verificada</p>
          </div>
      </div>
    </div>
  );
};

export default AccountPanel;
import React from 'react';
import { AlertTriangle } from 'lucide-react';

const InfoField = ({ label, value }) => (
    <div>
        <label className="text-sm font-medium text-gray-300 mb-2 block">{label}</label>
        <p className="w-full bg-slate-800 border border-slate-600 rounded-md px-3 py-2 text-sm">{value}</p>
    </div>
);

const CompanyInfoPanel = () => {
  return (
    <div className="bg-[#1E293B] p-8 rounded-lg">
      <h3 className="text-lg font-semibold text-white">Información de la Empresa</h3>
      <p className="text-sm text-gray-400 mb-6">Datos de tu organización</p>
      
      <div className="bg-yellow-900/50 border border-yellow-700 text-yellow-300 text-sm rounded-lg p-4 flex items-start gap-3 mb-6">
        <AlertTriangle size={20} className="flex-shrink-0 mt-0.5" />
        <p>Solo los administradores pueden modificar la información de la empresa.</p>
      </div>

      <div className="space-y-4">
        <InfoField label="Nombre de la Empresa" value="Minera del Norte S.A." />
        <InfoField label="Dirección" value="Av. Libertador 1234" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <InfoField label="Ciudad" value="Antofagasta" />
            <InfoField label="País" value="Chile" />
        </div>
      </div>
    </div>
  );
};

export default CompanyInfoPanel;
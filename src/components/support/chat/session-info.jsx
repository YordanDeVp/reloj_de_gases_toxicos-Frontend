import React from 'react';
import { HelpCircle } from 'lucide-react';

const InfoItem = ({ label, value }) => (
  <div>
    <p className="text-xs text-gray-400">{label}</p>
    <p className="font-medium text-white">{value}</p>
  </div>
);

const QuickReplyButton = ({ text }) => (
  <button className="w-full text-left p-3 bg-slate-700 hover:bg-slate-600 rounded-lg text-sm flex items-center transition-colors">
    <HelpCircle size={18} className="mr-3 text-gray-400" />
    {text}
  </button>
);

const SessionInfo = () => {
  return (
    <div className="bg-[#1E293B] rounded-lg p-6 h-full flex flex-col">
      <h2 className="text-lg font-semibold text-white mb-6">Información de la Sesión</h2>
      
      <div className="space-y-4">
        <InfoItem label="ID de Sesión" value="CHAT-20241005-001" />
        <InfoItem label="Agente Asignado" value="Ana Rodríguez" />
        <InfoItem label="Tiempo de Espera" value="Menos de 1 minuto" />
        <InfoItem label="Tiempo de Chat" value="5 minutos" />
      </div>

      <div className="border-t border-gray-700 my-6"></div>

      <h3 className="text-lg font-semibold text-white mb-4">Respuestas Rápidas</h3>
      <div className="space-y-3">
        <QuickReplyButton text="¿Cómo reseteo mi dispositivo?" />
        <QuickReplyButton text="¿Cómo actualizo mi plan?" />
        <QuickReplyButton text="Problemas de conexión" />
      </div>
    </div>
  );
};

export default SessionInfo;
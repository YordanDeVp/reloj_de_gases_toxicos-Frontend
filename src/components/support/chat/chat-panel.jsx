import React from 'react';
import { Paperclip, Send } from 'lucide-react';
import ChatMessage from './chat-message';

const ChatPanel = () => {
  // Datos de ejemplo para la conversación
  const messages = [
    { sender: 'agent', text: '¡Hola! Soy Ana del equipo de soporte. ¿En qué puedo ayudarte hoy?', time: '10:30' },
    { sender: 'user', text: 'Hola, tengo un problema con uno de mis dispositivos que no está sincronizando.', time: '10:32' },
    { sender: 'agent', text: 'Entiendo. ¿Podrías indicarme el ID del dispositivo que presenta el problema? Así puedo revisar su estado.', time: '10:33' },
    { sender: 'user', text: 'Es el dispositivo WCH-004', time: '10:34' },
    { sender: 'agent', text: 'Perfecto, déjame revisar... Veo que el dispositivo WCH-004 muestra batería baja. ¿Podrías intentar conectarlo a la corriente?', time: '10:35' },
  ];

  return (
    <div className="bg-[#1E293B] rounded-lg flex flex-col h-full">
      {/* Cabecera del Chat */}
      <div className="p-4 border-b border-gray-700 flex items-center">
        <div className="w-10 h-10 rounded-full bg-gray-500 flex items-center justify-center font-bold text-white mr-3">AS</div>
        <div>
          <h3 className="font-semibold">Ana - Soporte SafeMine</h3>
          <div className="flex items-center text-xs text-green-400">
            <span className="h-2 w-2 bg-green-500 rounded-full mr-1.5"></span>
            En línea
          </div>
        </div>
      </div>

      {/* Área de Mensajes */}
      <div className="flex-grow p-4 space-y-6 overflow-y-auto">
        {messages.map((msg, index) => (
          <ChatMessage key={index} message={msg} />
        ))}
      </div>

      {/* Input de Mensaje */}
      <div className="p-4 border-t border-gray-700 flex items-center bg-[#1E293B] rounded-b-lg">
        <button className="text-gray-400 hover:text-white p-2">
          <Paperclip size={20} />
        </button>
        <input
          type="text"
          placeholder="Escribe tu mensaje..."
          className="flex-grow bg-transparent focus:outline-none px-3 text-sm"
        />
        <button className="bg-cyan-500 hover:bg-cyan-600 text-white rounded-full p-2">
          <Send size={20} />
        </button>
      </div>
    </div>
  );
};

export default ChatPanel;
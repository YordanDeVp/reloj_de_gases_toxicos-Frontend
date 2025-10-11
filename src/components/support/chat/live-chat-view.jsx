import React from 'react';
import ChatPanel from './chat-panel';
import SessionInfo from './session-info';

const LiveChatView = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[70vh]">
      {/* Columna Izquierda: Panel del Chat */}
      <div className="lg:col-span-2 h-full">
        <ChatPanel />
      </div>

      {/* Columna Derecha: Información de la Sesión */}
      <div className="lg:col-span-1 h-full">
        <SessionInfo />
      </div>
    </div>
  );
};

export default LiveChatView;
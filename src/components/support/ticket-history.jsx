// app/components/support/ticket-history.jsx
'use client';

import React, { useState } from 'react';
import TicketItem from './ticket-item';

const TABS = ['Mis Tickets', 'Chat en Vivo', 'Nuevo Ticket'];

const TicketHistory = () => {
  const [activeTab, setActiveTab] = useState('Mis Tickets');

  // Datos de ejemplo
  const tickets = [
    {
      id: 'TKT-001',
      status: 'Abierto',
      priority: 'Alta',
      title: 'Dispositivo WCH-004 no sincroniza',
      createdAt: '05/10/2024 10:30',
      updatedAt: 'HACE 2 horas',
    },
    // ... puedes agregar más tickets aquí
  ];

  return (
    <div className="mt-10">
      {/* Pestañas de Navegación */}
      <div className="border-b border-gray-700">
        <nav className="-mb-px flex space-x-8" aria-label="Tabs">
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`${
                activeTab === tab
                  ? 'border-cyan-500 text-cyan-500'
                  : 'border-transparent text-gray-400 hover:text-gray-200 hover:border-gray-500'
              } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm transition-colors`}
            >
              {tab}
            </button>
          ))}
        </nav>
      </div>

      {/* Contenido de la Pestaña */}
      <div className="mt-8">
        {activeTab === 'Mis Tickets' && (
          <div>
            <h2 className="text-xl font-semibold mb-4">Historial de Tickets</h2>
            <div className="space-y-4">
              {tickets.map((ticket) => (
                <TicketItem key={ticket.id} ticket={ticket} />
              ))}
            </div>
          </div>
        )}
        {/* Aquí puedes agregar el contenido para las otras pestañas */}
      </div>
    </div>
  );
};

export default TicketHistory;
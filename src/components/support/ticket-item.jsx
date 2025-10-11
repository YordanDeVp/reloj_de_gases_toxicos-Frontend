import React from 'react';
import { Badge } from './ui/badge';
import { Button } from './ui/button';

const TicketItem = ({ ticket }) => {
  return (
    <div className="bg-[#1E293B] p-5 rounded-lg flex flex-wrap items-center justify-between gap-4">
      <div className="flex-grow">
        <div className="flex items-center gap-3 mb-2">
          <span className="font-mono text-sm text-cyan-400">{ticket.id}</span>
          <Badge variant={ticket.status === 'Abierto' ? 'success' : 'default'}>{ticket.status}</Badge>
          <Badge variant={ticket.priority === 'Alta' ? 'danger' : 'default'}>{ticket.priority}</Badge>
        </div>
        <h3 className="font-semibold text-lg text-white">{ticket.title}</h3>
        <p className="text-xs text-gray-400 mt-2">
          Creado: {ticket.createdAt} &bull; Actualizado: {ticket.updatedAt}
        </p>
      </div>
      <Button variant="outline">Ver Detalles</Button>
    </div>
  );
};

export default TicketItem;
'use client'; // Necesario para usar hooks como useState

import React, { useState } from 'react';
import { Paperclip, Send } from 'lucide-react';

// Componentes reutilizables para los campos del formulario
const FormLabel = ({ children }) => (
  <label className="block text-sm font-medium text-gray-300 mb-2">{children}</label>
);

const TextInput = (props) => (
  <input
    {...props}
    className="w-full bg-slate-800 border border-slate-600 rounded-md px-3 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500"
  />
);

const SelectInput = ({ children, ...props }) => (
    <select
        {...props}
        className="w-full bg-slate-800 border border-slate-600 rounded-md px-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 appearance-none"
        style={{ backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%239ca3af' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`, backgroundPosition: 'right 0.5rem center', backgroundRepeat: 'no-repeat', backgroundSize: '1.5em 1.5em' }}
    >
        {children}
    </select>
);


const TextAreaInput = (props) => (
  <textarea
    {...props}
    rows="5"
    className="w-full bg-slate-800 border border-slate-600 rounded-md px-3 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500"
  ></textarea>
);

const NewTicketForm = () => {
  return (
    <div className="bg-[#1E293B] p-8 rounded-lg max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold text-white mb-6">Crear Nuevo Ticket de Soporte</h2>

      <form onSubmit={(e) => e.preventDefault()}>
        <div className="space-y-6">
          {/* Asunto */}
          <div>
            <FormLabel>Asunto</FormLabel>
            <TextInput type="text" placeholder="Describe brevemente tu problema" />
          </div>

          {/* Prioridad y Dispositivo */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <FormLabel>Prioridad</FormLabel>
              <SelectInput defaultValue="Media">
                <option>Baja</option>
                <option>Media</option>
                <option>Alta</option>
                <option>Urgente</option>
              </SelectInput>
            </div>
            <div>
              <FormLabel>Dispositivo Relacionado (Opcional)</FormLabel>
              <SelectInput>
                <option>Seleccionar dispositivo</option>
                <option>WCH-004</option>
                <option>SEN-012</option>
                <option>CAM-009</option>
              </SelectInput>
            </div>
          </div>

          {/* Descripción Detallada */}
          <div>
            <FormLabel>Descripción Detallada</FormLabel>
            <TextAreaInput placeholder="Explica tu problema con el mayor detalle posible..." />
          </div>

          {/* Adjuntar Archivos */}
          <div>
            <FormLabel>Adjuntar Archivos</FormLabel>
            <div className="mt-2 flex justify-center rounded-lg border border-dashed border-slate-600 px-6 py-10">
              <div className="text-center">
                <Paperclip className="mx-auto h-12 w-12 text-gray-500" aria-hidden="true" />
                <div className="mt-4 flex text-sm leading-6 text-gray-400">
                  <label
                    htmlFor="file-upload"
                    className="relative cursor-pointer rounded-md font-semibold text-cyan-400 focus-within:outline-none focus-within:ring-2 focus-within:ring-cyan-500 focus-within:ring-offset-2 focus-within:ring-offset-slate-900 hover:text-cyan-300"
                  >
                    <span>Arrastra archivos aquí o haz clic para seleccionar</span>
                    <input id="file-upload" name="file-upload" type="file" className="sr-only" multiple />
                  </label>
                </div>
                <p className="text-xs leading-5 text-gray-500">PNG, JPG, PDF hasta 10MB</p>
              </div>
            </div>
          </div>
        </div>

        {/* Botones de Acción */}
        <div className="mt-8 flex items-center justify-end gap-x-4">
          <button type="button" className="text-sm font-semibold leading-6 text-gray-300 hover:text-white">
            Cancelar
          </button>
          <button
            type="submit"
            className="inline-flex items-center gap-x-2 rounded-md bg-cyan-500 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-cyan-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600"
          >
            <Send size={16} />
            Enviar Ticket
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewTicketForm;
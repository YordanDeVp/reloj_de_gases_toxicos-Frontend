// app/components/support/support-header.jsx
import React from 'react';

const SupportHeader = () => {
  return (
    <header className="flex justify-between items-center">
      <div>
        <h1 className="text-3xl font-bold text-white">Centro de Soporte</h1>
        <p className="text-gray-400 mt-1">Estamos aquí para ayudarte</p>
      </div>
      <div className="flex items-center space-x-2">
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
        </span>
        <span className="text-sm text-green-400 font-medium">Soporte en línea</span>
      </div>
    </header>
  );
};

export default SupportHeader;
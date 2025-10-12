import React from 'react';

const Button = ({ children, className, variant = 'primary', ...props }) => {
  // --- Clases base comunes para todos los botones ---
  const baseClasses = "inline-flex items-center justify-center px-4 py-2 rounded-md font-semibold text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900";

  // --- Clases específicas para cada variante ---
  const variantClasses = {
    // Botón principal de color cian
    primary: "bg-cyan-500 text-white hover:bg-cyan-600 focus:ring-cyan-500",
    // Botón con solo un borde, fondo transparente
    outline: "bg-transparent border border-slate-600 text-gray-300 hover:bg-slate-700 focus:ring-slate-500"
  };

  // Combinamos las clases base, las de la variante y cualquier otra que se pase
  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
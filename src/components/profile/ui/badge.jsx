import React from 'react';

const Badge = ({ children, className, variant = 'default', ...props }) => {
  // --- Clases específicas para cada variante de color ---
  const variantClasses = {
    // Variante gris por defecto
    default: "bg-slate-700 text-cyan-300",
    // Variante verde para éxito o estados activos
    success: "bg-green-800/80 text-green-300",
    // Variante roja para alertas o peligro
    danger: "bg-red-800/80 text-red-300",
  };

  return (
    <span
      className={`inline-block px-2.5 py-1 rounded-full text-xs font-semibold ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </span>
  );
};

export default Badge;
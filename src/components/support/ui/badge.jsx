import React from 'react';

export const Badge = ({ className, variant = 'default', ...props }) => {
  const variantClasses = {
    default: "bg-gray-600 text-gray-200",
    success: "bg-green-800/80 text-green-300",
    danger: "bg-red-800/80 text-red-300",
  };

  return (
    <div
      className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold ${variantClasses[variant]} ${className}`}
      {...props}
    />
  );
};
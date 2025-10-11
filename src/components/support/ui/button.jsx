// app/components/ui/button.jsx
import React from 'react';

export const Button = ({ className, variant = 'primary', ...props }) => {
  const baseClasses = "px-4 py-2 rounded-md font-semibold text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900";

  const variantClasses = {
    primary: "bg-cyan-500 text-white hover:bg-cyan-600 focus:ring-cyan-500",
    outline: "bg-transparent border border-gray-600 text-gray-300 hover:bg-gray-700 focus:ring-gray-500"
  };

  return (
    <button className={`${baseClasses} ${variantClasses[variant]} ${className}`} {...props} />
  );
};
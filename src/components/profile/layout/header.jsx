import React from 'react';
import { Search, ChevronDown } from 'lucide-react';
import Avatar from '../ui/avatar';

const Header = () => {
    return (
        // Contenedor principal de la cabecera con un borde inferior
        <header className="flex items-center justify-between p-4 bg-[#1E293B] border-b border-slate-700 h-16 flex-shrink-0">
            
            {/* ---- SECCIÓN IZQUIERDA: BREADCRUMBS Y BÚSQUEDA ---- */}
            <div className="flex items-center">
                <p className="text-sm text-gray-400">Inicio / <span className="text-white font-medium">Profile</span></p>
            </div>

            <div className="flex items-center gap-4">
                {/* Campo de búsqueda */}
                <div className="relative">
                    <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input 
                        type="text" 
                        placeholder="Buscar... (Ctrl+K)"
                        className="bg-slate-800 border border-slate-600 rounded-md pl-10 pr-4 py-2 text-sm w-64 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    />
                </div>

                {/* ---- SECCIÓN DERECHA: SELECTOR Y PERFIL ---- */}
                <div className="flex items-center gap-4">
                    {/* Selector de Mina/Empresa */}
                    <button className="flex items-center gap-2 text-sm font-medium">
                        <span className="w-2 h-2 rounded-full bg-green-500"></span>
                        Mina Norte
                        <ChevronDown size={16} />
                    </button>
                    {/* Avatar del Usuario */}
                    <div className="w-8 h-8">
                        <Avatar initials="JP" />
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
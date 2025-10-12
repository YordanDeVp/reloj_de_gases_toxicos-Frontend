import React from 'react';
import Avatar from '../ui/avatar';
import Badge from '../ui/badge';
import { Mail, Phone, Building, MapPin, Upload } from 'lucide-react';

const ProfileHeader = ({ user }) => {
    return (
        <div className="bg-[#1E293B] p-6 rounded-lg flex-1">
            <div className="flex items-center gap-6">
                
                {/* Avatar grande con botón de subir imagen */}
                <div className="relative">
                    <Avatar initials={user.avatarInitials} size="large" />
                    <button className="absolute -bottom-1 -right-1 bg-cyan-500 rounded-full p-1.5 border-2 border-[#1E293B] hover:bg-cyan-600">
                        <Upload size={14} className="text-white" />
                    </button>
                </div>

                {/* Información del usuario */}
                <div className="space-y-3">
                    <div className="flex items-center gap-3">
                        <h2 className="text-2xl font-bold text-white">{user.name}</h2>
                        <Badge>{user.role}</Badge>
                    </div>
                    
                    {/* Datos de contacto y empresa en una cuadrícula */}
                    <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-sm">
                        <div className="flex items-center gap-2"><Mail size={14} className="text-gray-400" />{user.email}</div>
                        <div className="flex items-center gap-2"><Phone size={14} className="text-gray-400" />{user.phone}</div>
                        <div className="flex items-center gap-2"><Building size={14} className="text-gray-400" />{user.company}</div>
                        <div className="flex items-center gap-2"><MapPin size={14} className="text-gray-400" />{user.location}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfileHeader;
import React from 'react';

const Avatar = ({ initials, size = 'medium' }) => {
    const sizeClasses = {
        medium: 'w-10 h-10 text-sm',
        large: 'w-20 h-20 text-2xl'
    };
    return (
        <div className={`rounded-full bg-cyan-600 flex items-center justify-center font-bold text-white ${sizeClasses[size]}`}>
            {initials}
        </div>
    );
}
export default Avatar;
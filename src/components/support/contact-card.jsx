// app/components/support/contact-card.jsx
import React from 'react';
import { Button } from './ui/button';

const ContactCard = ({ icon, title, description, actionText, contactInfo, actionType }) => {
  return (
    <div className="bg-[#1E293B] p-6 rounded-lg flex flex-col justify-between h-full">
      <div className="flex items-start space-x-4">
        <div className="bg-gray-700/50 p-3 rounded-full">{icon}</div>
        <div>
          <h3 className="font-semibold text-lg">{title}</h3>
          <p className="text-gray-400 text-sm">{description}</p>
        </div>
      </div>
      <div className="mt-6">
        {actionText && actionType === 'primary' && (
          <Button className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-bold">
            {actionText}
          </Button>
        )}
        {contactInfo && (
          <p className="text-cyan-400 font-medium text-center md:text-left">{contactInfo}</p>
        )}
      </div>
    </div>
  );
};

export default ContactCard;
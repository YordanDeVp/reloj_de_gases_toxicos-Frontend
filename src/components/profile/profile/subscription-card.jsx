import React from 'react';
import Badge from '../ui/badge';
import Button from '../ui/button';

const SubscriptionCard = ({ subscription }) => {
    return (
        <div className="bg-[#1E293B] p-6 rounded-lg w-full lg:w-80 flex flex-col justify-between">
            <div className="flex justify-between items-start">
                <h3 className="font-semibold text-white">Suscripción</h3>
                <Badge variant={subscription.status === 'Activa' ? 'success' : 'default'}>{subscription.status}</Badge>
            </div>
            <div className="mt-4">
                <p className="text-xl font-bold text-white">{subscription.plan}</p>
                <p className="text-xs text-gray-400 mt-1">Vence: {subscription.expires}</p>
            </div>
            <div className="mt-6">
                <Button variant="primary" className="w-full">Gestionar Plan</Button>
            </div>
        </div>
    );
}

export default SubscriptionCard;
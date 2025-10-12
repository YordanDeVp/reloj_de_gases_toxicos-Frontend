import React from 'react';
import Button from '../ui/button';
import Switch from '../ui/switch';

const NotificationItem = ({ title, description, enabled }) => (
    <div className="flex items-center justify-between py-4 border-b border-slate-700">
        <div>
            <h4 className="font-medium text-white">{title}</h4>
            <p className="text-sm text-gray-400">{description}</p>
        </div>
        <Switch enabled={enabled} />
    </div>
);

const NotificationsPanel = () => {
    return (
        <div className="bg-[#1E293B] p-8 rounded-lg">
            <h3 className="text-lg font-semibold text-white mb-6">Preferencias de Notificaciones</h3>
            <div className="divide-y divide-slate-700">
                <NotificationItem title="Alertas por Email" description="Recibe alertas críticas por correo" />
                <NotificationItem title="Alertas por SMS" description="Notificaciones de emergencia vía SMS" enabled={true} />
                <NotificationItem title="Notificaciones Push" description="Alertas en tiempo real en tu navegador" />
                <NotificationItem title="Reportes Semanales" description="Resumen semanal de actividad" enabled={true} />
                <NotificationItem title="Emails de Marketing" description="Novedades y promociones" />
            </div>
            <div className="mt-8 flex justify-end">
                <Button className="px-6">Guardar Preferencias</Button>
            </div>
        </div>
    );
};

export default NotificationsPanel;
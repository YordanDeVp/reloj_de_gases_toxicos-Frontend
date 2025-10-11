// app/page.jsx
import { MessageSquare, Mail, Phone } from "lucide-react";
import SupportHeader from "../../components/support/support-header";
import ContactCard from "../../components/support/contact-card";
import TicketHistory from "../../components/support/ticket-history"

export default function SupportPage() {
  return (
    <div className="min-h-screen p-8 bg-[#0F172A]">
      <div className="max-w-7xl mx-auto">
        <SupportHeader />

        {/* Sección de Contacto */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
          <ContactCard
            icon={<MessageSquare className="w-6 h-6 text-cyan-400" />}
            title="Chat en Vivo"
            description="Respuesta inmediata"
            actionText="Iniciar Chat"
            actionType="primary"
          />
          <ContactCard
            icon={<Mail className="w-6 h-6 text-cyan-400" />}
            title="Email"
            description="Respuesta en 24h"
            contactInfo="soporte@safemine.com"
          />
          <ContactCard
            icon={<Phone className="w-6 h-6 text-cyan-400" />}
            title="Teléfono"
            description="Lun-Vie 8:00-20:00"
            contactInfo="+56 9 1234 5678"
          />
        </div>

        {/* Historial de Tickets */}
        <TicketHistory />
      </div>
    </div>
  );
}
import React from 'react';
import Header from '@/components/profile/layout/header';
import ProfileHeader from '@/components/profile/profile/profile-header';
import SubscriptionCard from '@/components/profile/profile/subscription-card';
import ProfileTabs from '@/components/profile/profile/profile-tabs';
import PersonalInfoPanel from '@/components/profile/profile/personal-info-panel';


// ---- Datos de Ejemplo para el Usuario ----
// En una aplicación real, estos datos vendrían de una API o una sesión de usuario.
const userData = {
  name: "Andrew Peralta",
  role: "Obrero",
  email: "andrew.peralta@minero_norteño.cl",
  phone: "+51 987 654 321",
  company: "Minera del Norte S.A.",
  location: "Antofagasta, Chile",
  avatarInitials: "JP",
};

const subscriptionData = {
  plan: "Plan Profesional",
  status: "Activa",
  expires: "12/10/2025"
};

export default function ProfilePage() {
  return (
    <div className="w-full h-full flex flex-col">
      
      {/* 1. Cabecera superior (con la búsqueda, etc.) */}
      <Header />

      {/* 2. Contenedor del contenido principal con padding */}
      <div className="p-8 space-y-8">
        
        {/* 2a. Sección superior con el perfil del usuario y la tarjeta de suscripción */}
        <div className="flex flex-col lg:flex-row gap-8">
          <ProfileHeader user={userData} />
          <SubscriptionCard subscription={subscriptionData} />
        </div>

        {/* 2b. Pestañas de navegación de la sección de perfil */}
        <ProfileTabs />

        {/* 2c. Panel con la información personal (contenido de la pestaña activa) */}
        <PersonalInfoPanel user={userData} />

      </div>
    </div>
  );
}
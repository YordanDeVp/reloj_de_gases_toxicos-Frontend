"use client";

export default function ConfigTabs({ activeTab, setActiveTab }) {
  const tabs = ["General", "Sitios y Zonas", "Umbrales", "Integraciones", "Facturación", "Avanzado"];

  return (
    <div className="flex flex-wrap gap-2 mb-6">
      {tabs.map(tab => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
            activeTab === tab
              ? "bg-[#00D9FF] text-black"
              : "bg-[#1E2733] text-white hover:bg-[#00D9FF]/20"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}

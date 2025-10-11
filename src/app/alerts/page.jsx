"use client";
import React, { useState, useMemo } from "react";
import AlertCard from "@/components/alerts/AlertCard";
import AlertsHeader from "@/components/alerts/AlertsHeader";
import AlertsFilter from "@/components/alerts/AlertsFilter";
import AlertsSummary from "@/components/alerts/AlertsSummary";
import alertsData from "@/data/alertsData";

const normalize = (s) =>
  String(s || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

export default function AlertsPage() {
  const [filter, setFilter] = useState("Todas");

  // Filtrado inteligente
  const filteredAlerts = useMemo(() => {
    if (filter === "Todas") return alertsData;
    const f = normalize(filter);

    return alertsData.filter((a) => {
      const type = normalize(a.type || "");
      const status = normalize(a.status || "");
      const title = normalize(a.title || "");
      if (f.includes("resuel")) return status.includes("resuel");
      if (f.includes("critic")) return type.includes("critic") || title.includes("critic");
      if (f.includes("alta")) return type.includes("alta") || title.includes("alta");
      if (f.includes("media")) return type.includes("media") || title.includes("media");
      return type.includes(f) || status.includes(f) || title.includes(f);
    });
  }, [filter]);

  return (
    <div className="p-8 space-y-6">
      {/* Header */}
      <AlertsHeader onMarkAll={() => setFilter("Todas")} />

      {/* Summary */}
      <AlertsSummary alerts={alertsData} />

      {/* Filters */}
      <AlertsFilter current={filter} onChange={setFilter} />

      {/* Alert List */}
      <div className="space-y-4 pb-8">
        {filteredAlerts.length === 0 ? (
          <p className="text-center text-[#8B9DC3] py-8">
            No hay alertas que coincidan con «{filter}»
          </p>
        ) : (
          filteredAlerts.map((alert) => <AlertCard key={alert.id} alert={alert} />)
        )}
      </div>
    </div>
  );
}

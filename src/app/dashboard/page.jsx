"use client";
import React from "react";
import StatsCards from "@/components/dashboard/StatsCards";
import RealtimeChart from "@/components/dashboard/RealtimeChart";
import AlertDistribution from "@/components/dashboard/AlertDistribution";
import RecentDevices from "@/components/dashboard/RecentDevices";
import RecentAlerts from "@/components/dashboard/RecentAlerts";


export default function DashboardPage(){
return (
<div className="flex flex-col gap-6">
<StatsCards />


<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
<div className="lg:col-span-2"><RealtimeChart /></div>
<AlertDistribution />
</div>


<RecentDevices />
<RecentAlerts />
</div>
)
}
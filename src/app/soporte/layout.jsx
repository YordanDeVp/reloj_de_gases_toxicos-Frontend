import Sidebar from "@/components/Sidebar";
import Topbar from "@/components/Topbar";


export default function SupportLayout({ children }){
return (
<div className="flex h-screen bg-[#0A0E1A] text-white">
<Sidebar />
<div className="flex-1 flex flex-col overflow-hidden">
<Topbar />
<main className="flex-1 overflow-auto p-6">{children}</main>
</div>
</div>
)
}
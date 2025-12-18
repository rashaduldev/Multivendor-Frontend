// components/Sidebar.tsx
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LogOut, ArrowLeft } from "lucide-react";
import { ROLE_NAV } from "../navigation";

export default function Sidebar({ role }: { role: keyof typeof ROLE_NAV }) {
  const pathname = usePathname();
  const navItems = ROLE_NAV[role] || [];

  return (
    <aside className="w-64 h-screen bg-[#0f172a] text-slate-300 flex flex-col fixed left-0 top-0 border-r border-slate-800">
      <div className="p-6">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg" /> POS Master
        </h2>
      </div>

      <nav className="flex-1 px-4 space-y-1 overflow-y-auto">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                isActive 
                ? "bg-blue-600 text-white shadow-lg shadow-blue-900/20" 
                : "hover:bg-slate-800 hover:text-white"
              }`}
            >
              <item.icon size={20} />
              <span className="text-sm font-medium">{item.name}</span>
            </Link>
          );
        })}
        <Link className="flex items-center gap-3 px-4 py-3 rounded-xl transition-all hover:bg-slate-800 hover:text-white" href="/"><ArrowLeft /> Back To Home</Link>
      </nav>

      <div className="p-4 border-t border-slate-800">
        <button className="flex w-full items-center gap-3 px-4 py-3 text-rose-400 hover:bg-rose-500/10 rounded-xl transition-all">
          <LogOut size={20} />
          <span className="text-sm font-medium">Logout</span>
        </button>
      </div>
    </aside>
  );
}
"use client";
import React, { useState } from "react";
import { Search, UserPlus, Shield, Trash2 } from "lucide-react";
import { Staff } from "@/types/alltypes";

export default function StaffManagement() {
  const [searchTerm, setSearchTerm] = useState("");
  
  const [staffList] = useState<Staff[]>([
    { id: "S01", name: "Anisur Rahman", storeId: "ST-01", permissions: ["pos_access"], shiftStatus: "on_duty" },
    { id: "S02", name: "Karim Uddin", storeId: "ST-01", permissions: ["pos_access", "inventory_view"], shiftStatus: "off_duty" },
  ]);

  const filteredStaff = staffList.filter(s => s.name.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">Staff Management</h1>
          <p className="text-sm text-slate-500">Manage your cashiers and floor staff permissions.</p>
        </div>
        <button className="bg-blue-600 text-white px-5 py-2.5 rounded-xl flex items-center gap-2 hover:bg-blue-700 transition-all shadow-lg shadow-blue-100">
          <UserPlus size={18} /> Add New Staff
        </button>
      </div>

      <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm flex gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
          <input 
            type="text" 
            placeholder="Search staff by name..."
            className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border-none rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredStaff.map((staff) => (
          <div key={staff.id} className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-all">
            <div className="flex justify-between items-start mb-4">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center font-bold text-lg">
                {staff.name.charAt(0)}
              </div>
              <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                staff.shiftStatus === 'on_duty' ? 'bg-green-100 text-green-700' : 'bg-slate-100 text-slate-500'
              }`}>
                {staff.shiftStatus.replace('_', ' ')}
              </span>
            </div>
            <h3 className="font-bold text-slate-800 text-lg">{staff.name}</h3>
            <p className="text-xs text-slate-400 mb-4">ID: {staff.id}</p>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {staff.permissions.map(p => (
                <span key={p} className="flex items-center gap-1 text-[10px] bg-slate-50 text-slate-600 px-2 py-1 rounded-lg border border-slate-100">
                  <Shield size={10} /> {p.replace('_', ' ')}
                </span>
              ))}
            </div>

            <div className="flex gap-2">
              <button className="flex-1 py-2 bg-slate-50 text-slate-600 rounded-xl text-sm font-medium hover:bg-slate-100 transition-colors">Edit Profile</button>
              <button className="p-2 text-rose-500 hover:bg-rose-50 rounded-xl transition-colors"><Trash2 size={18} /></button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
"use client";
import React from "react";
import { Save} from "lucide-react";

export default function StoreSettings() {
  return (
    <div className="max-w-4xl space-y-8 pb-10">
      <header>
        <h1 className="text-2xl font-bold text-slate-800">Store Settings</h1>
        <p className="text-slate-500">Manage your business profile, tax rules and receipt design.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Navigation for settings */}
        <div className="space-y-2">
          {['General Profile', 'Tax & VAT', 'Receipt Template', 'Notifications'].map((tab, i) => (
            <button key={i} className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all ${
              i === 0 ? 'bg-blue-600 text-white shadow-lg shadow-blue-100' : 'text-slate-500 hover:bg-white'
            }`}>
              {tab}
            </button>
          ))}
        </div>

        {/* Settings Form */}
        <div className="md:col-span-2 space-y-6">
          <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm space-y-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center border-2 border-dashed border-slate-300 text-slate-400 text-xs text-center p-2">
                Click to upload logo
              </div>
              <div>
                <h4 className="font-bold text-slate-800">Store Logo</h4>
                <p className="text-xs text-slate-400">PNG or JPG, Max 2MB</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase">Business Name</label>
                <input type="text" className="w-full p-3 bg-slate-50 border-none rounded-xl focus:ring-2 focus:ring-blue-500 outline-none" defaultValue="Tech Market LLC" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase">Phone Number</label>
                <input type="text" className="w-full p-3 bg-slate-50 border-none rounded-xl focus:ring-2 focus:ring-blue-500 outline-none" defaultValue="+971 50 123 4567" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase">Store Address</label>
              <textarea rows={3} className="w-full p-3 bg-slate-50 border-none rounded-xl focus:ring-2 focus:ring-blue-500 outline-none" defaultValue="Dubai Marina, Shop 14, Building A" />
            </div>

            <div className="pt-6 border-t border-slate-50 flex justify-end">
              <button className="flex items-center gap-2 bg-[#0f172a] text-white px-8 py-3 rounded-xl font-bold hover:opacity-90 transition-opacity">
                <Save size={18} /> Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
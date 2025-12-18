"use client";
import React from "react";
import { TrendingUp, ArrowUpRight, Download, Calendar } from "lucide-react";

export default function ReportsPage() {
  const stats = [
    { label: "Today's Sales", value: "AED 12,450", trend: "+12.5%", color: "text-emerald-500" },
    { label: "Net Profit", value: "AED 3,840", trend: "+8.2%", color: "text-blue-500" },
    { label: "Avg. Basket Value", value: "AED 85.00", trend: "-2.1%", color: "text-rose-500" },
  ];

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-slate-800">Financial Reports</h1>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-xl text-sm font-medium text-slate-600">
            <Calendar size={18} /> Last 30 Days
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-xl text-sm font-medium hover:bg-blue-700">
            <Download size={18} /> Export PDF
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((s, i) => (
          <div key={i} className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm">
            <p className="text-slate-500 text-sm mb-1">{s.label}</p>
            <div className="flex items-end justify-between">
              <h2 className="text-3xl font-black text-slate-800">{s.value}</h2>
              <span className={`flex items-center text-xs font-bold ${s.color}`}>
                {s.trend} <ArrowUpRight size={14} />
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm h-80">
          <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
            <TrendingUp size={18} className="text-blue-600" /> Revenue Growth
          </h3>
          <div className="w-full h-full bg-slate-50 rounded-2xl flex items-center justify-center border-2 border-dashed border-slate-200 text-slate-400">
            [Chart Visualization - Integration with Chart.js or Recharts]
          </div>
        </div>
        
        <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm overflow-hidden">
          <h3 className="font-bold text-slate-800 mb-6">Top Selling Products</h3>
          <div className="space-y-6">
            {[
              { name: "Organic Arabica Coffee", sales: 145, amount: "AED 2,175" },
              { name: "Wireless Mechanical Keyboard", sales: 84, amount: "AED 7,140" },
              { name: "Reusable Water Bottle", sales: 52, amount: "AED 1,040" },
            ].map((item, idx) => (
              <div key={idx} className="flex justify-between items-center">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center font-bold text-slate-500">{idx+1}</div>
                  <div>
                    <p className="font-bold text-slate-800 text-sm">{item.name}</p>
                    <p className="text-[10px] text-slate-400 uppercase tracking-tighter">{item.sales} Units Sold</p>
                  </div>
                </div>
                <p className="font-bold text-blue-600">{item.amount}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
"use client";
import React, { useState } from "react";
import { ShoppingCart, CreditCard, Banknote } from "lucide-react";

export default function POSTerminal() {
  const [cart, setCart] = useState<{name: string, price: number, qty: number}[]>([]);
  
  const products = [
    { name: "Coffee", price: 15, stock: 50 },
    { name: "Donut", price: 8, stock: 20 },
    { name: "Sandwich", price: 25, stock: 15 },
  ];

  const addToCart = (product: { name: string; price: number }) => {
    setCart([...cart, { name: product.name, price: product.price, qty: 1 }]);
  };

  const total = cart.reduce((acc, item) => acc + (item.price * item.qty), 0);

  return (
    <div className="grid grid-cols-12 gap-6 h-[calc(100vh-160px)]">
      {/* Products Grid */}
      <div className="col-span-8 overflow-y-auto pr-2">
        <div className="grid grid-cols-3 gap-4">
          {products.map((p, i) => (
            <div 
              key={i} 
              onClick={() => addToCart(p)}
              className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm hover:border-blue-500 cursor-pointer transition-all active:scale-95"
            >
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-4 font-bold">
                {p.name[0]}
              </div>
              <h3 className="font-bold text-slate-800">{p.name}</h3>
              <p className="text-blue-600 font-black">AED {p.price}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Cart System */}
      <div className="col-span-4 bg-[#0f172a] rounded-[2rem] text-white flex flex-col p-6 shadow-2xl">
        <div className="flex items-center gap-3 mb-6 pb-6 border-b border-slate-800">
          <ShoppingCart className="text-blue-400" />
          <h2 className="text-xl font-bold">Current Order</h2>
        </div>

        <div className="flex-1 overflow-y-auto space-y-4">
          {cart.map((item, idx) => (
            <div key={idx} className="flex justify-between items-center bg-slate-800/50 p-4 rounded-2xl border border-slate-700">
              <div>
                <p className="font-bold">{item.name}</p>
                <p className="text-xs text-slate-400">Qty: {item.qty}</p>
              </div>
              <p className="font-bold text-blue-400">AED {item.price * item.qty}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 pt-6 border-t border-slate-800 space-y-4">
          <div className="flex justify-between text-slate-400"><span>Subtotal</span><span>AED {total}</span></div>
          <div className="flex justify-between text-2xl font-black"><span>Total</span><span>AED {total}</span></div>
          
          <div className="grid grid-cols-2 gap-3 pt-4">
            <button className="bg-slate-800 py-3 rounded-xl flex items-center justify-center gap-2 font-bold hover:bg-slate-700">
              <Banknote size={18} /> Cash
            </button>
            <button className="bg-blue-600 py-3 rounded-xl flex items-center justify-center gap-2 font-bold hover:bg-blue-500 shadow-lg shadow-blue-900/40">
              <CreditCard size={18} /> Card
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
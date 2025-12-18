export default function POSPage() {
  return (
    <div className="h-[calc(100vh-100px)] grid grid-cols-12 gap-6">
      {/* Product Grid (Left) */}
      <div className="col-span-8 flex flex-col gap-4">
        <input 
          type="text" 
          placeholder="Scan barcode or search product..." 
          className="w-full p-4 bg-white rounded-2xl border shadow-sm outline-none focus:ring-2 focus:ring-blue-500"
        />
        <div className="grid grid-cols-4 gap-4 overflow-y-auto pr-2">
          {[1,2,3,4,5,6,7,8].map((id) => (
            <div key={id} className="bg-white p-4 rounded-2xl border hover:border-blue-500 cursor-pointer shadow-sm">
              <div className="aspect-square bg-slate-100 rounded-xl mb-3" />
              <h4 className="font-bold text-sm">Wireless Mouse</h4>
              <p className="text-blue-600 font-bold">AED 45.00</p>
              <p className="text-[10px] text-slate-400">Stock: 24</p>
            </div>
          ))}
        </div>
      </div>

      {/* Cart & Checkout (Right) */}
      <div className="col-span-4 bg-white rounded-3xl border shadow-lg flex flex-col overflow-hidden">
        <div className="p-6 border-b bg-slate-50">
          <h3 className="font-bold text-lg">Current Order</h3>
        </div>
        <div className="flex-1 p-6 space-y-4 overflow-y-auto">
          <div className="flex justify-between items-center text-sm">
            <span>Wireless Mouse x 2</span>
            <span className="font-bold">AED 90.00</span>
          </div>
        </div>
        <div className="p-6 bg-slate-50 space-y-3">
          <div className="flex justify-between text-sm"><span>Tax (5%)</span><span>AED 4.50</span></div>
          <div className="flex justify-between text-xl font-black text-blue-600">
            <span>Total</span><span>AED 94.50</span>
          </div>
          <button className="w-full bg-blue-600 text-white py-4 rounded-2xl font-bold text-lg shadow-xl shadow-blue-200">
            Complete Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
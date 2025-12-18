export default function InventoryPage() {
  const stockData = [
    { product: "Gaming Mouse", status: "Low Stock", current: 5, warehouse: "Section A" },
    { product: "LED Monitor", status: "In Stock", current: 42, warehouse: "Section C" },
  ];

  return (
    <div className="bg-white rounded-3xl border border-slate-100 overflow-hidden shadow-sm">
      <div className="p-6 border-b flex justify-between items-center">
        <h2 className="font-bold text-lg">Stock Valuation & Status</h2>
        <button className="text-blue-600 font-bold text-sm">Download CSV</button>
      </div>
      <table className="w-full text-left">
        <thead className="bg-slate-50 text-slate-400 text-[10px] uppercase font-bold tracking-widest">
          <tr>
            <th className="px-6 py-4">Product Name</th>
            <th className="px-6 py-4">Status</th>
            <th className="px-6 py-4">Quantity</th>
            <th className="px-6 py-4">Warehouse</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-50">
          {stockData.map((s, i) => (
            <tr key={i}>
              <td className="px-6 py-4 font-medium">{s.product}</td>
              <td className="px-6 py-4">
                <span className={`px-2 py-1 rounded-md text-[10px] font-bold ${s.status === 'Low Stock' ? 'bg-rose-100 text-rose-600' : 'bg-emerald-100 text-emerald-600'}`}>
                  {s.status}
                </span>
              </td>
              <td className="px-6 py-4 font-bold">{s.current}</td>
              <td className="px-6 py-4 text-slate-500">{s.warehouse}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
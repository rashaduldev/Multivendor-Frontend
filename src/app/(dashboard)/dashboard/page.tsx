export default function VendorManagement() {
  const vendors = [
    { name: "Electronics Hub", sales: "AED 120k", commission: "10%", status: "Active" },
    { name: "Fashion Daily", sales: "AED 45k", commission: "15%", status: "Pending" },
  ];

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">Vendor Control Center</h1>
        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg">Approve New Vendors</button>
      </div>
      <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
        <table className="w-full text-left">
          <thead className="bg-slate-50 border-b border-slate-200">
            <tr className="text-slate-500 text-xs font-semibold uppercase">
              <th className="px-6 py-4">Store Name</th>
              <th className="px-6 py-4">Total Sales</th>
              <th className="px-6 py-4">Comm. Rate</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {vendors.map((v, i) => (
              <tr key={i} className="hover:bg-slate-50 transition-colors text-sm">
                <td className="px-6 py-4 font-bold text-slate-800">{v.name}</td>
                <td className="px-6 py-4 text-slate-600">{v.sales}</td>
                <td className="px-6 py-4 text-blue-600 font-medium">{v.commission}</td>
                <td className="px-6 py-4">
                   <span className={`px-2 py-1 rounded-md text-[10px] font-bold ${v.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700'}`}>
                    {v.status}
                   </span>
                </td>
                <td className="px-6 py-4 flex gap-2">
                  <button className="p-2 bg-slate-100 rounded-md">Edit</button>
                  <button className="p-2 bg-rose-50 text-rose-600 rounded-md">Suspend</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
import Sidebar from "@/components/Dashboard/Sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const userRole = "vendor" as const;

  return (
    <div className="flex min-h-screen bg-slate-50">
      <Sidebar role={userRole} />
      <main className="flex-1 ml-64 p-8">
        <header className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-sm font-medium text-slate-500">Welcome Back</h1>
            <p className="text-xl font-bold text-slate-800">Shop Manager</p>
          </div>
          <div className="w-10 h-10 rounded-full bg-slate-200 border border-white shadow-sm" />
        </header>
        <div className="animate-in fade-in slide-in-from-bottom-2 duration-500">
          {children}
        </div>
      </main>
    </div>
  );
}
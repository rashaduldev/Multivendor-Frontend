import { 
  LayoutDashboard, Store, Users, DollarSign, Package, 
  ShoppingCart, BarChart3, Settings, ShieldCheck, ClipboardList 
} from "lucide-react";

export const ROLE_NAV = {
  super_admin: [
    { name: 'Platform Overview', href: '/admin', icon: LayoutDashboard },
    { name: 'Vendors', href: '/admin/vendors', icon: Store },
    { name: 'Sales & Commission', href: '/admin/finance', icon: DollarSign },
    { name: 'Global Products', href: '/admin/products', icon: Package },
    { name: 'User & Roles', href: '/admin/users', icon: ShieldCheck },
    { name: 'Platform Settings', href: '/admin/settings', icon: Settings },
  ],
  vendor: [
    { name: 'Business Overview', href: '/dashboard', icon: LayoutDashboard },
    { name: 'Vendor', href: '/dashboard/vendor', icon: LayoutDashboard },
    { name: 'POS Terminal', href: '/dashboard/pos', icon: ShoppingCart },
    { name: 'Products & SKUs', href: '/dashboard/products', icon: Package },
    { name: 'Inventory', href: '/dashboard/inventory', icon: ClipboardList },
    { name: 'Staff Management', href: '/dashboard/staff', icon: Users },
    { name: 'Reports', href: '/dashboard/reports', icon: BarChart3 },
    { name: 'Store Settings', href: '/dashboard/settings', icon: Settings },
  ],
  staff: [
    { name: 'POS Terminal', href: '/staff/pos', icon: ShoppingCart },
    { name: 'Stock Check', href: '/staff/inventory', icon: Package },
    { name: 'Shift Summary', href: '/staff/history', icon: ClipboardList },
  ]
};
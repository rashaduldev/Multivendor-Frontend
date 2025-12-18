export type UserRole = 'super_admin' | 'vendor' | 'staff' | 'customer';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar?: string;
  storeId?: string;
}

export interface Product {
  id: string;
  name: string;
  sku: string; 
  barcode?: string;
  category: string;
  price: number;
  costPrice: number;
  stock: number;
  minStockLevel: number; 
  unit: 'pcs' | 'kg' | 'ltr' | 'box';
  image?: string;
  status: 'active' | 'inactive';
}

export interface CartItem extends Product {
  quantity: number;
  discount?: number;
}

export interface SaleTransaction {
  id: string;
  invoiceNumber: string;
  items: CartItem[];
  subtotal: number;
  tax: number;
  discount: number;
  total: number;
  paymentMethod: 'cash' | 'card' | 'mobile_money' | 'split';
  cashierId: string;
  timestamp: Date;
  status: 'completed' | 'refunded' | 'pending';
}

export interface Store {
  id: string;
  ownerId: string;
  name: string;
  logo?: string;
  address: string;
  phone: string;
  vatNumber?: string;
  commissionRate: number; 
  status: 'active' | 'pending' | 'suspended';
  businessHours: {
    open: string;
    close: string;
  };
}

export interface Staff {
  id: string;
  name: string;
  storeId: string;
  permissions: string[]; 
  shiftStatus: 'on_duty' | 'off_duty';
}
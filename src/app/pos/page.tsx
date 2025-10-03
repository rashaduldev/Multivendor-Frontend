"use client"
import Header from '@/components/Header';
import Image from 'next/image';
import { useState } from 'react';
import { BiCalculator, BiCreditCard, BiMinus, BiPlus, BiReceipt, BiSearch } from 'react-icons/bi';
import { BsCalculator, BsTrash2 } from 'react-icons/bs';
import { FaDollarSign } from 'react-icons/fa';

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  vendor: string;
  image: string;
}

const POS: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [cart, setCart] = useState<CartItem[]>([]);
  const [paymentMethod, setPaymentMethod] = useState<'cash' | 'card' | 'split'>('cash');
  const [cashAmount, setCashAmount] = useState('');
  const [discount, setDiscount] = useState(0);
  const [tax, setTax] = useState(8.25);

  const products = [
    {
      id: '1',
      name: 'Wireless Headphones',
      price: 89.99,
      vendor: 'TechStore Pro',
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
      barcode: '1234567890123'
    },
    {
      id: '2',
      name: 'Cotton T-Shirt',
      price: 24.99,
      vendor: 'Fashion Hub',
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
      barcode: '1234567890124'
    },
    {
      id: '3',
      name: 'Coffee Beans',
      price: 18.99,
      vendor: 'Coffee Masters',
      image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
      barcode: '1234567890125'
    },
    {
      id: '4',
      name: 'Yoga Mat',
      price: 39.99,
      vendor: 'FitLife',
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
      barcode: '1234567890126'
    }
  ];

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.barcode.includes(searchQuery)
  );

  const addToCart = (product: typeof products[0]) => {
    const existingItem = cart.find(item => item.id === product.id);
    if (existingItem) {
      setCart(cart.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCart([...cart, {
        id: product.id,
        name: product.name,
        price: product.price,
        quantity: 1,
        vendor: product.vendor,
        image: product.image
      }]);
    }
  };

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(id);
    } else {
      setCart(cart.map(item =>
        item.id === id ? { ...item, quantity } : item
      ));
    }
  };

  const removeFromCart = (id: string) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const clearCart = () => {
    setCart([]);
    setCashAmount('');
    setDiscount(0);
  };

  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const discountAmount = subtotal * (discount / 100);
  const taxAmount = (subtotal - discountAmount) * (tax / 100);
  const total = subtotal - discountAmount + taxAmount;
  const change = cashAmount ? Math.max(0, parseFloat(cashAmount) - total) : 0;

  const handleCheckout = () => {
    if (cart.length === 0) return;
    
    // Simulate checkout process
    alert('Transaction completed successfully!');
    clearCart();
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Product Search & Selection */}
          <div className="lg:col-span-2 space-y-6">
            {/* Search Bar */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6">
              <div className="relative">
                <BiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search products or scan barcode..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-4 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent font-inter text-lg"
                  autoFocus
                />
              </div>
            </div>

            {/* Product Grid */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6">
              <h2 className="font-montserrat font-semibold text-xl text-slate-900 mb-4">
                Products
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {filteredProducts.map((product) => (
                  <button
                    key={product.id}
                    onClick={() => addToCart(product)}
                    className="group bg-slate-50 rounded-xl p-4 hover:bg-rose-50 hover:border-rose-200 border border-transparent transition-all duration-200 text-left"
                  >
                     <Image
                      width={200}
                      height={200}
                      src={product.image}
                      alt={product.name}
                      className="w-full h-24 object-cover rounded-lg mb-3"
                      loading="lazy"
                    />
                    <h3 className="font-inter font-medium text-sm text-slate-900 mb-1 line-clamp-2 group-hover:text-rose-600">
                      {product.name}
                    </h3>
                    <p className="font-montserrat font-semibold text-lg text-slate-900">
                      ${product.price.toFixed(2)}
                    </p>
                    <p className="font-inter text-xs text-slate-500 mt-1">
                      {product.vendor}
                    </p>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Cart & Checkout */}
          <div className="space-y-6">
            {/* Cart */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-montserrat font-semibold text-xl text-slate-900">
                  Cart ({cart.length})
                </h2>
                {cart.length > 0 && (
                  <button
                    onClick={clearCart}
                    className="text-slate-400 hover:text-red-500 transition-colors"
                    aria-label="Clear cart"
                  >
                    <BsTrash2 className="w-5 h-5" />
                  </button>
                )}
              </div>

              <div className="space-y-3 max-h-96 overflow-y-auto">
                {cart.length === 0 ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <BiReceipt className="w-8 h-8 text-slate-400" />
                    </div>
                    <p className="font-inter text-slate-500">Cart is empty</p>
                  </div>
                ) : (
                  cart.map((item) => (
                    <div key={item.id} className="flex items-center space-x-3 p-3 bg-slate-50 rounded-xl">
                      <Image
                      width={200}
                      height={200}
                        src={item.image}
                        alt={item.name}
                        className="w-12 h-12 object-cover rounded-lg"
                        loading="lazy"
                      />
                      <div className="flex-1 min-w-0">
                        <h3 className="font-inter font-medium text-sm text-slate-900 truncate">
                          {item.name}
                        </h3>
                        <p className="font-montserrat font-semibold text-rose-600">
                          ${item.price.toFixed(2)}
                        </p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-8 h-8 flex items-center justify-center bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors"
                        >
                          <BiMinus className="w-4 h-4" />
                        </button>
                        <span className="w-8 text-center font-inter font-medium">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-8 h-8 flex items-center justify-center bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors"
                        >
                          <BiPlus className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>

            {/* Calculations */}
            {cart.length > 0 && (
              <div className="bg-white rounded-2xl border border-slate-200 p-6">
                <h3 className="font-montserrat font-semibold text-lg text-slate-900 mb-4 flex items-center">
                  <BiCalculator className="w-5 h-5 mr-2" />
                  Order Summary
                </h3>
                
                <div className="space-y-3">
                  {/* Discount */}
                  <div className="flex items-center justify-between">
                    <label className="font-inter text-slate-600">Discount (%)</label>
                    <input
                      type="number"
                      value={discount}
                      onChange={(e) => setDiscount(Math.max(0, Math.min(100, parseFloat(e.target.value) || 0)))}
                      className="w-20 px-2 py-1 border border-slate-200 rounded text-right font-inter"
                      min="0"
                      max="100"
                    />
                  </div>

                  {/* Tax */}
                  <div className="flex items-center justify-between">
                    <label className="font-inter text-slate-600">Tax (%)</label>
                    <input
                      type="number"
                      value={tax}
                      onChange={(e) => setTax(parseFloat(e.target.value) || 0)}
                      className="w-20 px-2 py-1 border border-slate-200 rounded text-right font-inter"
                      step="0.01"
                    />
                  </div>

                  <div className="border-t border-slate-200 pt-3 space-y-2">
                    <div className="flex justify-between font-inter">
                      <span className="text-slate-600">Subtotal:</span>
                      <span className="font-medium">${subtotal.toFixed(2)}</span>
                    </div>
                    {discount > 0 && (
                      <div className="flex justify-between font-inter">
                        <span className="text-slate-600">Discount:</span>
                        <span className="font-medium text-green-600">-${discountAmount.toFixed(2)}</span>
                      </div>
                    )}
                    <div className="flex justify-between font-inter">
                      <span className="text-slate-600">Tax:</span>
                      <span className="font-medium">${taxAmount.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between font-montserrat font-bold text-lg border-t border-slate-200 pt-2">
                      <span>Total:</span>
                      <span className="text-rose-600">${total.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Payment */}
            {cart.length > 0 && (
              <div className="bg-white rounded-2xl border border-slate-200 p-6">
                <h3 className="font-montserrat font-semibold text-lg text-slate-900 mb-4">
                  Payment
                </h3>
                
                {/* Payment Method */}
                <div className="grid grid-cols-3 gap-2 mb-4">
                  <button
                    onClick={() => setPaymentMethod('cash')}
                    className={`p-3 rounded-xl border-2 transition-colors ${
                      paymentMethod === 'cash'
                        ? 'border-rose-500 bg-rose-50 text-rose-600'
                        : 'border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <FaDollarSign className="w-5 h-5 mx-auto mb-1" />
                    <span className="text-xs font-inter">Cash</span>
                  </button>
                  <button
                    onClick={() => setPaymentMethod('card')}
                    className={`p-3 rounded-xl border-2 transition-colors ${
                      paymentMethod === 'card'
                        ? 'border-rose-500 bg-rose-50 text-rose-600'
                        : 'border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <BiCreditCard className="w-5 h-5 mx-auto mb-1" />
                    <span className="text-xs font-inter">Card</span>
                  </button>
                  <button
                    onClick={() => setPaymentMethod('split')}
                    className={`p-3 rounded-xl border-2 transition-colors ${
                      paymentMethod === 'split'
                        ? 'border-rose-500 bg-rose-50 text-rose-600'
                        : 'border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <BsCalculator className="w-5 h-5 mx-auto mb-1" />
                    <span className="text-xs font-inter">Split</span>
                  </button>
                </div>

                {/* Cash Payment */}
                {paymentMethod === 'cash' && (
                  <div className="space-y-3">
                    <div>
                      <label className="block font-inter text-sm text-slate-600 mb-1">
                        Cash Received
                      </label>
                      <input
                        type="number"
                        value={cashAmount}
                        onChange={(e) => setCashAmount(e.target.value)}
                        placeholder="0.00"
                        className="w-full px-3 py-2 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent font-inter"
                        step="0.01"
                      />
                    </div>
                    {cashAmount && (
                      <div className="flex justify-between font-inter">
                        <span className="text-slate-600">Change:</span>
                        <span className="font-semibold text-green-600">
                          ${change.toFixed(2)}
                        </span>
                      </div>
                    )}
                  </div>
                )}

                {/* Checkout Button */}
                <button
                  onClick={handleCheckout}
                  disabled={cart.length === 0 || (paymentMethod === 'cash' && parseFloat(cashAmount) < total)}
                  className="w-full mt-4 px-6 py-4 bg-rose-600 text-white font-inter font-semibold rounded-xl hover:bg-rose-700 disabled:bg-slate-300 disabled:cursor-not-allowed transition-colors"
                >
                  Complete Transaction
                </button>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default POS;
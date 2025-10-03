"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { BiBarChart, BiMenu, BiStore, BiUser } from "react-icons/bi";
import { FaShoppingCart } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { MdClose } from "react-icons/md";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const navigation = [
    { name: 'Home', href: '/', icon: null },
    { name: 'Products', href: '/products', icon: null },
    { name: 'Vendors', href: '/vendors', icon: BiStore },
    { name: 'POS', href: '/pos', icon: BiBarChart },
  ];

  const isActive = (path: string) => pathname === path;

  return (
    <header className="bg-white shadow-sm border-b border-slate-200 sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="w-8 h-8 bg-gradient-to-br from-rose-600 to-purple-500 rounded-lg flex items-center justify-center">
              <BiStore className="w-5 h-5 text-white" />
            </div>
            <span className="font-montserrat font-bold text-xl text-slate-900 group-hover:text-rose-600 transition-colors">
              MultiPOS
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`font-inter font-medium transition-colors px-3 py-2 rounded-md ${
                  isActive(item.href)
                    ? 'text-rose-600 bg-rose-50'
                    : 'text-slate-700 hover:text-rose-600 hover:bg-slate-50'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/cart"
              className="relative p-2 text-slate-700 hover:text-rose-600 transition-colors"
              aria-label="Shopping cart"
            >
              <FiShoppingCart className="w-6 h-6" />
              <span className="absolute -top-1 -right-1 bg-rose-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                3
              </span>
            </Link>
            <Link
              href="/login"
              className="flex items-center space-x-2 px-4 py-2 text-slate-700 hover:text-rose-600 transition-colors"
            >
              <BiUser className="w-5 h-5" />
              <span className="font-inter font-medium">Login</span>
            </Link>
            <Link
              href="/register"
              className="px-4 py-2 bg-rose-600 text-white font-inter font-medium rounded-lg hover:bg-rose-700 transition-colors focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-slate-700 hover:text-rose-600 transition-colors"
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? <MdClose className="w-6 h-6" /> : <BiMenu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-200">
            <div className="space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-3 py-2 rounded-md font-inter font-medium transition-colors ${
                    isActive(item.href)
                      ? 'text-rose-600 bg-rose-50'
                      : 'text-slate-700 hover:text-rose-600 hover:bg-slate-50'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-slate-200 space-y-2">
                <Link
                  href="/cart"
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center space-x-2 px-3 py-2 text-slate-700 hover:text-rose-600 transition-colors"
                >
                  <FaShoppingCart className="w-5 h-5" />
                  <span>Cart (3)</span>
                </Link>
                <Link
                  href="/login"
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-3 py-2 text-slate-700 hover:text-rose-600 transition-colors font-inter font-medium"
                >
                  Login
                </Link>
                <Link
                  href="/register"
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-3 py-2 bg-rose-600 text-white font-inter font-medium rounded-lg hover:bg-rose-700 transition-colors text-center"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
"use client"

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ProductCard from "@/components/ProductCard";
import { useState } from "react";
import { BiChevronDown, BiSearch, BiSearchAlt } from "react-icons/bi";
import { BsChevronDown } from "react-icons/bs";
import { FiFilter } from "react-icons/fi";
import { GrGrid } from "react-icons/gr";
import { ImList } from "react-icons/im";

const Products: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showFilters, setShowFilters] = useState(false);

  const categories = [
    { id: 'all', name: 'All Products', count: 1247 },
    { id: 'electronics', name: 'Electronics', count: 324 },
    { id: 'clothing', name: 'Clothing', count: 256 },
    { id: 'home', name: 'Home & Garden', count: 189 },
    { id: 'sports', name: 'Sports', count: 145 },
    { id: 'books', name: 'Books', count: 98 },
    { id: 'beauty', name: 'Beauty', count: 167 },
    { id: 'toys', name: 'Toys', count: 68 }
  ];

  const sortOptions = [
    { id: 'featured', name: 'Featured' },
    { id: 'price-low', name: 'Price: Low to High' },
    { id: 'price-high', name: 'Price: High to Low' },
    { id: 'rating', name: 'Highest Rated' },
    { id: 'newest', name: 'Newest First' }
  ];

  const products = [
    {
      id: '1',
      name: 'Wireless Bluetooth Headphones',
      price: 89.99,
      originalPrice: 129.99,
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      vendor: 'TechStore Pro',
      rating: 4.5,
      reviews: 128,
      inStock: true,
      category: 'Electronics'
    },
    {
      id: '2',
      name: 'Premium Cotton T-Shirt',
      price: 24.99,
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      vendor: 'Fashion Hub',
      rating: 4.2,
      reviews: 89,
      inStock: true,
      category: 'Clothing'
    },
    {
      id: '3',
      name: 'Smart Home Security Camera',
      price: 149.99,
      originalPrice: 199.99,
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      vendor: 'SecureHome',
      rating: 4.7,
      reviews: 203,
      inStock: true,
      category: 'Electronics'
    },
    {
      id: '4',
      name: 'Organic Coffee Beans',
      price: 18.99,
      image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      vendor: 'Coffee Masters',
      rating: 4.8,
      reviews: 156,
      inStock: false,
      category: 'Food & Beverage'
    },
    {
      id: '5',
      name: 'Yoga Mat Premium',
      price: 39.99,
      originalPrice: 59.99,
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      vendor: 'FitLife',
      rating: 4.4,
      reviews: 92,
      inStock: true,
      category: 'Sports'
    },
    {
      id: '6',
      name: 'Ceramic Plant Pot Set',
      price: 34.99,
      image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      vendor: 'Garden Paradise',
      rating: 4.3,
      reviews: 67,
      inStock: true,
      category: 'Home & Garden'
    }
  ];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || product.category.toLowerCase() === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="font-montserrat font-bold text-3xl text-slate-900 mb-2">
            Products
          </h1>
          <p className="font-inter text-slate-600">
            Discover amazing products from our verified vendors
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <BiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent font-inter"
              />
            </div>

            {/* Category Filter */}
            <div className="relative">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="appearance-none bg-white border border-slate-200 rounded-xl px-4 py-3 pr-10 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent font-inter min-w-[200px]"
              >
                {categories.map(category => (
                  <option key={category.id} value={category.id}>
                    {category.name} ({category.count})
                  </option>
                ))}
              </select>
              <BiChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5 pointer-events-none" />
            </div>

            {/* Sort */}
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none bg-white border border-slate-200 rounded-xl px-4 py-3 pr-10 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent font-inter min-w-[180px]"
              >
                {sortOptions.map(option => (
                  <option key={option.id} value={option.id}>
                    {option.name}
                  </option>
                ))}
              </select>
              <BsChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5 pointer-events-none" />
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center border border-slate-200 rounded-xl p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === 'grid'
                    ? 'bg-rose-600 text-white'
                    : 'text-slate-400 hover:text-slate-600'
                }`}
                aria-label="Grid view"
              >
                <GrGrid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === 'list'
                    ? 'bg-rose-600 text-white'
                    : 'text-slate-400 hover:text-slate-600'
                }`}
                aria-label="List view"
              >
                <ImList className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="flex items-center justify-between mb-6">
          <p className="font-inter text-slate-600">
            Showing {filteredProducts.length} of {products.length} products
          </p>
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="lg:hidden flex items-center space-x-2 px-4 py-2 border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors"
          >
            <FiFilter className="w-5 h-5" />
            <span className="font-inter">Filters</span>
          </button>
        </div>

        {/* Products Grid */}
        <div className={`grid gap-6 ${
          viewMode === 'grid' 
            ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
            : 'grid-cols-1'
        }`}>
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <BiSearchAlt className="w-12 h-12 text-slate-400" />
            </div>
            <h3 className="font-montserrat font-semibold text-xl text-slate-900 mb-2">
              No products found
            </h3>
            <p className="font-inter text-slate-600 mb-6">
              Try adjusting your search or filter criteria
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="px-6 py-3 bg-rose-600 text-white font-inter font-medium rounded-xl hover:bg-rose-700 transition-colors"
            >
              Clear Filters
            </button>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Products;
"use client"

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import VendorCard from "@/components/VendorCard";
import { useState } from "react";
import { BiChevronDown, BiMapPin, BiSearch, BiStar } from "react-icons/bi";

const Vendors: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('rating');

  const locations = [
    { id: 'all', name: 'All Locations' },
    { id: 'new-york', name: 'New York' },
    { id: 'los-angeles', name: 'Los Angeles' },
    { id: 'chicago', name: 'Chicago' },
    { id: 'houston', name: 'Houston' },
    { id: 'phoenix', name: 'Phoenix' }
  ];

  const categories = [
    { id: 'all', name: 'All Categories' },
    { id: 'electronics', name: 'Electronics' },
    { id: 'fashion', name: 'Fashion' },
    { id: 'home', name: 'Home & Garden' },
    { id: 'food', name: 'Food & Beverage' },
    { id: 'sports', name: 'Sports & Fitness' },
    { id: 'beauty', name: 'Beauty & Health' }
  ];

  const sortOptions = [
    { id: 'rating', name: 'Highest Rated' },
    { id: 'sales', name: 'Most Sales' },
    { id: 'products', name: 'Most Products' },
    { id: 'newest', name: 'Newest First' }
  ];

  const vendors = [
    {
      id: '1',
      name: 'TechStore Pro',
      description: 'Premium electronics and gadgets with cutting-edge technology. We specialize in the latest smartphones, laptops, and smart home devices.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      coverImage: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      rating: 4.8,
      reviews: 324,
      location: 'New York, NY',
      totalProducts: 156,
      totalSales: '$2.4M',
      categories: ['Electronics', 'Gadgets', 'Smart Home'],
      verified: true
    },
    {
      id: '2',
      name: 'Fashion Hub',
      description: 'Trendy clothing and accessories for modern lifestyle. From casual wear to formal attire, we have everything you need.',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      coverImage: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      rating: 4.6,
      reviews: 198,
      location: 'Los Angeles, CA',
      totalProducts: 89,
      totalSales: '$1.8M',
      categories: ['Fashion', 'Accessories', 'Shoes'],
      verified: true
    },
    {
      id: '3',
      name: 'Garden Paradise',
      description: 'Beautiful plants, gardening tools, and home decor items. Transform your space into a green paradise with our curated collection.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      coverImage: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      rating: 4.7,
      reviews: 156,
      location: 'Chicago, IL',
      totalProducts: 234,
      totalSales: '$890K',
      categories: ['Home & Garden', 'Plants', 'Decor'],
      verified: false
    },
    {
      id: '4',
      name: 'Coffee Masters',
      description: 'Premium coffee beans and brewing equipment. Experience the perfect cup with our expertly sourced beans from around the world.',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      coverImage: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      rating: 4.9,
      reviews: 267,
      location: 'Houston, TX',
      totalProducts: 67,
      totalSales: '$1.2M',
      categories: ['Food & Beverage', 'Coffee', 'Equipment'],
      verified: true
    },
    {
      id: '5',
      name: 'FitLife',
      description: 'Sports equipment and fitness gear for active lifestyle. From yoga mats to professional gym equipment, we support your fitness journey.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      coverImage: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      rating: 4.5,
      reviews: 143,
      location: 'Phoenix, AZ',
      totalProducts: 178,
      totalSales: '$650K',
      categories: ['Sports & Fitness', 'Equipment', 'Apparel'],
      verified: true
    },
    {
      id: '6',
      name: 'Beauty Essentials',
      description: 'Natural skincare and beauty products. Discover organic and cruelty-free cosmetics that enhance your natural beauty.',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      coverImage: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      rating: 4.4,
      reviews: 89,
      location: 'New York, NY',
      totalProducts: 124,
      totalSales: '$420K',
      categories: ['Beauty & Health', 'Skincare', 'Cosmetics'],
      verified: false
    }
  ];

  const filteredVendors = vendors.filter(vendor => {
    const matchesSearch = vendor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         vendor.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesLocation = selectedLocation === 'all' || 
                           vendor.location.toLowerCase().includes(selectedLocation.replace('-', ' '));
    const matchesCategory = selectedCategory === 'all' ||
                           vendor.categories.some(cat => cat.toLowerCase().includes(selectedCategory));
    return matchesSearch && matchesLocation && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="font-montserrat font-bold text-3xl text-slate-900 mb-2">
            Our Vendors
          </h1>
          <p className="font-inter text-slate-600">
            Discover amazing stores and trusted vendors in our marketplace
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
                placeholder="Search vendors..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent font-inter"
              />
            </div>

            {/* Location Filter */}
            <div className="relative">
              <BiMapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="appearance-none bg-white border border-slate-200 rounded-xl pl-10 pr-10 py-3 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent font-inter min-w-[180px]"
              >
                {locations.map(location => (
                  <option key={location.id} value={location.id}>
                    {location.name}
                  </option>
                ))}
              </select>
              <BiChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5 pointer-events-none" />
            </div>

            {/* Category Filter */}
            <div className="relative">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="appearance-none bg-white border border-slate-200 rounded-xl px-4 py-3 pr-10 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent font-inter min-w-[180px]"
              >
                {categories.map(category => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
              <BiChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5 pointer-events-none" />
            </div>

            {/* Sort */}
            <div className="relative">
              <BiStar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none bg-white border border-slate-200 rounded-xl pl-10 pr-10 py-3 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent font-inter min-w-[180px]"
              >
                {sortOptions.map(option => (
                  <option key={option.id} value={option.id}>
                    {option.name}
                  </option>
                ))}
              </select>
              <BiChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="font-inter text-slate-600">
            Showing {filteredVendors.length} of {vendors.length} vendors
          </p>
        </div>

        {/* Vendors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredVendors.map((vendor) => (
            <VendorCard key={vendor.id} {...vendor} />
          ))}
        </div>

        {/* Empty State */}
        {filteredVendors.length === 0 && (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <BiSearch className="w-12 h-12 text-slate-400" />
            </div>
            <h3 className="font-montserrat font-semibold text-xl text-slate-900 mb-2">
              No vendors found
            </h3>
            <p className="font-inter text-slate-600 mb-6">
              Try adjusting your search or filter criteria
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedLocation('all');
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

export default Vendors;
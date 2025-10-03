"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { BiCheckCircle } from 'react-icons/bi';
import { BsArrowRight } from 'react-icons/bs';
import { FiPlay } from 'react-icons/fi';

const HeroSection: React.FC = () => {
  const features = [
    'Multi-vendor support',
    'Real-time analytics',
    'Mobile-responsive POS',
    'Secure payments'
  ];

  return (
    <section className="relative bg-gradient-to-br from-slate-50 via-white to-rose-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <div className="inline-flex items-center px-4 py-2 bg-rose-100 text-rose-700 rounded-full text-sm font-inter font-medium mb-6">
              <span className="w-2 h-2 bg-rose-500 rounded-full mr-2"></span>
              New: Advanced Analytics Dashboard
            </div>
            
            <h1 className="font-montserrat font-bold text-4xl sm:text-5xl lg:text-6xl text-slate-900 leading-tight mb-6">
              The Future of
              <span className="bg-gradient-to-r from-rose-600 to-purple-500 bg-clip-text text-transparent"> Multi-Vendor </span>
              Point of Sale
            </h1>
            
            <p className="font-inter text-lg text-slate-600 mb-8 max-w-2xl">
              Streamline your retail operations with our comprehensive POS solution. 
              Manage multiple vendors, track inventory, process payments, and analyze 
              performance all from one powerful platform.
            </p>

            {/* Features List */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="flex items-center space-x-2"
                >
                  <BiCheckCircle className="w-5 h-5 text-rose-600 flex-shrink-0" />
                  <span className="font-inter text-slate-700">{feature}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href="/register"
                className="inline-flex items-center justify-center px-8 py-4 bg-rose-600 text-white font-inter font-semibold rounded-xl hover:bg-rose-700 transition-all duration-200 shadow-lg hover:shadow-xl group"
              >
                Start Free Trial
                <BsArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <button className="inline-flex items-center justify-center px-8 py-4 bg-white text-slate-700 font-inter font-semibold rounded-xl border border-slate-200 hover:border-slate-300 transition-all duration-200 shadow-sm hover:shadow-md group">
                <FiPlay className="w-5 h-5 mr-2 text-rose-600" />
                Watch Demo
              </button>
            </div>

            {/* Stats */}
            <div className="flex flex-col sm:flex-row gap-8 mt-12 pt-8 border-t border-slate-200">
              <div className="text-center lg:text-left">
                <div className="font-montserrat font-bold text-2xl text-slate-900">10K+</div>
                <div className="font-inter text-slate-600">Active Vendors</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="font-montserrat font-bold text-2xl text-slate-900">$50M+</div>
                <div className="font-inter text-slate-600">Processed</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="font-montserrat font-bold text-2xl text-slate-900">99.9%</div>
                <div className="font-inter text-slate-600">Uptime</div>
              </div>
            </div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10">
              <Image
              width={600}
              height={400}
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Modern POS system interface"
                className="w-full h-auto rounded-2xl shadow-2xl"
                loading="lazy"
              />
              
              {/* Floating Cards */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="absolute -top-4 -left-4 bg-white rounded-xl shadow-lg p-4 border border-slate-100"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="font-inter text-sm font-medium text-slate-700">Live Sales</span>
                </div>
                <div className="font-montserrat font-bold text-xl text-slate-900 mt-1">$12,847</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-lg p-4 border border-slate-100"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-cyan-300 rounded-full"></div>
                  <span className="font-inter text-sm font-medium text-slate-700">Active Vendors</span>
                </div>
                <div className="font-montserrat font-bold text-xl text-slate-900 mt-1">247</div>
              </motion.div>
            </div>

            {/* Background Decoration */}
            <div className="absolute inset-0 bg-gradient-to-br from-rose-100 to-purple-100 rounded-2xl transform rotate-3 scale-105 -z-10"></div>
          </motion.div>
        </div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 -z-20">
        <div className="absolute top-0 left-0 w-72 h-72 bg-rose-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-0 right-0 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/2 w-72 h-72 bg-cyan-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
      </div>
    </section>
  );
};

export default HeroSection;
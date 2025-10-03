"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { BiBarChart, BiCreditCard, BiShield, BiStore } from 'react-icons/bi';
import { FaUserSecret } from 'react-icons/fa';
import { CgSmartphone } from 'react-icons/cg';

const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: BiStore,
      title: 'Multi-Vendor Management',
      description: 'Seamlessly manage multiple vendors with individual dashboards, commission tracking, and automated payouts.',
      color: 'from-rose-500 to-rose-600'
    },
    {
      icon: BiBarChart,
      title: 'Advanced Analytics',
      description: 'Real-time insights with comprehensive reporting, sales forecasting, and performance metrics.',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: BiCreditCard,
      title: 'Flexible Payments',
      description: 'Accept all payment methods including cash, cards, digital wallets, and split payments.',
      color: 'from-cyan-400 to-cyan-500'
    },
    {
      icon: FaUserSecret,
      title: 'Staff Management',
      description: 'Role-based access control with granular permissions and staff performance tracking.',
      color: 'from-emerald-500 to-emerald-600'
    },
    {
      icon: BiShield,
      title: 'Enterprise Security',
      description: 'Bank-level security with end-to-end encryption, PCI compliance, and fraud protection.',
      color: 'from-amber-500 to-amber-600'
    },
    {
      icon: CgSmartphone,
      title: 'Mobile Ready',
      description: 'Fully responsive design optimized for tablets, smartphones, and desktop devices.',
      color: 'from-indigo-500 to-indigo-600'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-montserrat font-bold text-3xl sm:text-4xl text-slate-900 mb-4">
              Everything You Need to
              <span className="bg-gradient-to-r from-rose-600 to-purple-500 bg-clip-text text-transparent"> Succeed</span>
            </h2>
            <p className="font-inter text-lg text-slate-600 max-w-3xl mx-auto">
              Our comprehensive POS solution provides all the tools and features you need to manage 
              your multi-vendor business efficiently and scale with confidence.
            </p>
          </motion.div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-white rounded-2xl p-8 border border-slate-100 hover:border-slate-200 hover:shadow-xl transition-all duration-300"
            >
              {/* Icon */}
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r ${feature.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-6 h-6 text-white" />
              </div>

              {/* Content */}
              <h3 className="font-montserrat font-semibold text-xl text-slate-900 mb-3 group-hover:text-rose-600 transition-colors">
                {feature.title}
              </h3>
              <p className="font-inter text-slate-600 leading-relaxed">
                {feature.description}
              </p>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-rose-50 to-purple-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-rose-600 to-purple-500 text-white font-inter font-semibold rounded-xl hover:shadow-lg transition-shadow duration-300 cursor-pointer">
            Explore All Features
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
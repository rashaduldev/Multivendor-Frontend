"use client"

import Link from "next/link";
import { useState } from "react";
import { BiLock, BiLockAlt, BiMailSend, BiMapPin, BiPhone, BiStore, BiUser } from "react-icons/bi";
import { BsEye } from "react-icons/bs";
import { FaEye } from "react-icons/fa";
import { FiEyeOff } from "react-icons/fi";
import { HiEyeOff } from "react-icons/hi";

const Register: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [userType, setUserType] = useState<'customer' | 'vendor'>('customer');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    businessName: '',
    businessAddress: '',
    businessDescription: '',
    agreeToTerms: false
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle registration logic here
    console.log('Registration attempt:', { ...formData, userType });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-rose-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center space-x-2 group mb-8">
            <div className="w-10 h-10 bg-gradient-to-br from-rose-600 to-purple-500 rounded-xl flex items-center justify-center">
              <BiStore className="w-6 h-6 text-white" />
            </div>
            <span className="font-montserrat font-bold text-2xl text-slate-900 group-hover:text-rose-600 transition-colors">
              MultiPOS
            </span>
          </Link>
          <h2 className="font-montserrat font-bold text-3xl text-slate-900 mb-2">
            Create your account
          </h2>
          <p className="font-inter text-slate-600">
            Join our marketplace and start selling or shopping today
          </p>
        </div>

        {/* User Type Selection */}
        <div className="bg-white rounded-2xl border border-slate-200 p-1 mb-8">
          <div className="grid grid-cols-2 gap-1">
            {[
              { type: 'customer' as const, label: 'Customer', desc: 'Shop from vendors' },
              { type: 'vendor' as const, label: 'Vendor', desc: 'Sell your products' }
            ].map(({ type, label, desc }) => (
              <button
                key={type}
                onClick={() => setUserType(type)}
                className={`p-4 rounded-xl font-inter transition-all text-left ${
                  userType === type
                    ? 'bg-rose-600 text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                <div className="font-medium">{label}</div>
                <div className={`text-sm ${userType === type ? 'text-rose-100' : 'text-slate-500'}`}>
                  {desc}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Registration Form */}
        <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Personal Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstName" className="block font-inter font-medium text-slate-700 mb-2">
                  First Name
                </label>
                <div className="relative">
                  <BiUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    required
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent font-inter"
                    placeholder="John"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="lastName" className="block font-inter font-medium text-slate-700 mb-2">
                  Last Name
                </label>
                <div className="relative">
                  <BiUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    required
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent font-inter"
                    placeholder="Doe"
                  />
                </div>
              </div>
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block font-inter font-medium text-slate-700 mb-2">
                Email address
              </label>
              <div className="relative">
                <BiMailSend className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent font-inter"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            {/* Phone */}
            <div>
              <label htmlFor="phone" className="block font-inter font-medium text-slate-700 mb-2">
                Phone Number
              </label>
              <div className="relative">
                <BiPhone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent font-inter"
                  placeholder="+1 (555) 123-4567"
                />
              </div>
            </div>

            {/* Vendor-specific fields */}
            {userType === 'vendor' && (
              <>
                <div>
                  <label htmlFor="businessName" className="block font-inter font-medium text-slate-700 mb-2">
                    Business Name
                  </label>
                  <div className="relative">
                    <BiStore className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                    <input
                      id="businessName"
                      name="businessName"
                      type="text"
                      required
                      value={formData.businessName}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent font-inter"
                      placeholder="Your Business Name"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="businessAddress" className="block font-inter font-medium text-slate-700 mb-2">
                    Business Address
                  </label>
                  <div className="relative">
                    <BiMapPin className="absolute left-3 top-3 text-slate-400 w-5 h-5" />
                    <input
                      id="businessAddress"
                      name="businessAddress"
                      type="text"
                      required
                      value={formData.businessAddress}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent font-inter"
                      placeholder="123 Business St, City, State 12345"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="businessDescription" className="block font-inter font-medium text-slate-700 mb-2">
                    Business Description
                  </label>
                  <textarea
                    id="businessDescription"
                    name="businessDescription"
                    rows={3}
                    required
                    value={formData.businessDescription}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent font-inter resize-none"
                    placeholder="Describe your business and what you sell..."
                  />
                </div>
              </>
            )}

            {/* Password */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="password" className="block font-inter font-medium text-slate-700 mb-2">
                  Password
                </label>
                <div className="relative">
                  <BiLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    autoComplete="new-password"
                    required
                    value={formData.password}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-12 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent font-inter"
                    placeholder="Create password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
                  >
                    {showPassword ? <FiEyeOff className="w-5 h-5" /> : <FaEye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              <div>
                <label htmlFor="confirmPassword" className="block font-inter font-medium text-slate-700 mb-2">
                  Confirm Password
                </label>
                <div className="relative">
                  <BiLockAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type={showConfirmPassword ? 'text' : 'password'}
                    autoComplete="new-password"
                    required
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-12 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent font-inter"
                    placeholder="Confirm password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
                  >
                    {showConfirmPassword ? <HiEyeOff className="w-5 h-5" /> : <BsEye className="w-5 h-5" />}
                  </button>
                </div>
              </div>
            </div>

            {/* Terms Agreement */}
            <div className="flex items-start">
              <input
                id="agreeToTerms"
                name="agreeToTerms"
                type="checkbox"
                required
                checked={formData.agreeToTerms}
                onChange={handleInputChange}
                className="h-4 w-4 text-rose-600 focus:ring-rose-500 border-slate-300 rounded mt-1"
              />
              <label htmlFor="agreeToTerms" className="ml-3 block text-sm font-inter text-slate-700">
                I agree to the{' '}
                <Link href="/terms" className="text-rose-600 hover:text-rose-500 transition-colors">
                  Terms of Service
                </Link>{' '}
                and{' '}
                <Link href="/privacy" className="text-rose-600 hover:text-rose-500 transition-colors">
                  Privacy Policy
                </Link>
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full px-6 py-3 bg-rose-600 text-white font-inter font-semibold rounded-xl hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2 transition-colors"
            >
              Create Account
            </button>
          </form>
        </div>

        {/* Sign In Link */}
        <div className="text-center mt-8">
          <p className="font-inter text-slate-600">
            Already have an account?{' '}
            <Link
              href="/login"
              className="font-medium text-rose-600 hover:text-rose-500 transition-colors"
            >
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
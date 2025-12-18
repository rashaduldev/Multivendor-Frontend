"use client"
import Link from "next/link";
import { motion } from 'framer-motion';
import { BiStore } from "react-icons/bi";
import { FiAlertTriangle } from "react-icons/fi";
import { Button } from "./ui/button";
import { Home, Store } from "lucide-react";

export function DevWorkingPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-indigo-50 to-slate-100 px-6">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl w-full bg-white rounded-2xl shadow-xl p-10 text-center"
      >
        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div className="h-16 w-16 rounded-full bg-indigo-50 flex items-center justify-center">
            <BiStore className="text-indigo-600" size={32} />
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-800">
          We’re Working on This Feature
        </h1>

        {/* Description */}
        <p className="mt-4 text-slate-600 leading-relaxed">
          This section of the Multivendor POS system is currently under active
          development. Our team is implementing core logic, security checks, and
          performance optimizations to ensure a reliable experience for vendors
          and administrators.
        </p>

        {/* Status */}
        <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-amber-50 px-4 py-2 text-sm font-medium text-amber-700">
          <FiAlertTriangle size={16} />
          Development in progress
        </div>

        {/* Actions */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild className="rounded-xl px-6">
            <Link href="/dashboard">
              <Store className="mr-2 h-4 w-4" />
              Go to Dashboard
            </Link>
          </Button>

          <Button asChild variant="outline" className="rounded-xl px-6">
            <Link href="/">
              <Home className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>
        </div>

        {/* Footer */}
        <p className="mt-10 text-xs text-slate-400">
          Multivendor POS • Feature rollout in progress • Thank you for your
          patience
        </p>
      </motion.div>
    </div>
  );
}

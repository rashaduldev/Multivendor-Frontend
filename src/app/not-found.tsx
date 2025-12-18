"use client";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { AlertTriangle, Home, Store } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-slate-50 to-slate-100 px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-xl w-full text-center bg-white rounded-2xl shadow-xl p-8"
      >
        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div className="h-16 w-16 rounded-full bg-red-50 flex items-center justify-center">
            <AlertTriangle className="text-red-500" size={32} />
          </div>
        </div>

        {/* Title */}
        <h1 className="text-5xl font-bold text-slate-800">404</h1>
        <p className="mt-2 text-xl font-semibold text-slate-700">
          Page Not Found
        </p>

        {/* Description */}
        <p className="mt-4 text-slate-500 leading-relaxed">
          The page you are trying to access doesn’t exist or may have been
          moved. If you’re a vendor or admin, please check the URL or return to
          your dashboard.
        </p>

        {/* Actions */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild className="rounded-xl px-6">
            <Link href="/">
              <Home className="mr-2 h-4 w-4" />
              Go to Home
            </Link>
          </Button>

          <Button asChild variant="outline" className="rounded-xl px-6">
            <Link href="/dashboard">
              <Store className="mr-2 h-4 w-4" />
              Vendor Dashboard
            </Link>
          </Button>
        </div>

        {/* Footer Note */}
        <p className="mt-10 text-xs text-slate-400">
          Multivendor POS System • Secure • Scalable • Reliable
        </p>
      </motion.div>
    </div>
  );
}

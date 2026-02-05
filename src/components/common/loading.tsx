"use client";

import { motion } from "framer-motion";
import { SPINNER_SIZES } from "@/lib/ui-constants";

export function LoadingSpinner({ size = "default" }: { size?: keyof typeof SPINNER_SIZES }) {
  return (
    <div className="flex items-center justify-center">
      <motion.div
        className={`${SPINNER_SIZES[size]} rounded-full border-2 border-primary border-t-transparent`}
        animate={{ rotate: 360 }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </div>
  );
}

export function PageLoader() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-background/80 backdrop-blur-sm z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center gap-4"
      >
        <div className="relative">
          <motion.div
            className="h-16 w-16 rounded-full border-4 border-primary/20"
            animate={{ rotate: 360 }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          <motion.div
            className="absolute inset-0 h-16 w-16 rounded-full border-4 border-primary border-t-transparent"
            animate={{ rotate: -360 }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </div>
        <p className="text-sm text-muted-foreground animate-pulse">Loading...</p>
      </motion.div>
    </div>
  );
}
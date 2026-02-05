"use client";

import { motion, Transition } from "framer-motion";
import { MOTION_VARIANTS, MOTION_TRANSITIONS } from "@/lib/ui-constants";

interface MotionWrapperProps {
  variant?: keyof typeof MOTION_VARIANTS;
  transition?: keyof typeof MOTION_TRANSITIONS | Transition;
  delay?: number;
  children: React.ReactNode;
  className?: string;
  viewportOnce?: boolean;
  viewportAmount?: number;
  style?: React.CSSProperties;
}

export function MotionWrapper({
  variant = "fadeUp",
  transition = "default",
  delay = 0,
  children,
  className = "",
  viewportOnce = true,
  viewportAmount = 0.3,
  style,
  ...props
}: MotionWrapperProps) {
  const transitionConfig = typeof transition === "string" 
    ? { ...MOTION_TRANSITIONS[transition], delay }
    : { ...transition, delay };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: viewportOnce, amount: viewportAmount }}
      variants={MOTION_VARIANTS[variant]}
      transition={transitionConfig}
      className={className}
      style={style}
      {...props}
    >
      {children}
    </motion.div>
  );
}
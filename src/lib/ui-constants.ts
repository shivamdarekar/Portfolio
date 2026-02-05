import { Smartphone, Globe, Link2, Brain, GraduationCap, Briefcase, Award, Code } from "lucide-react";

// Animation variants - centralized
export const MOTION_VARIANTS = {
  fadeUp: {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  },
  fadeDown: {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 }
  },
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  },
  scaleIn: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
  },
  slideLeft: {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  },
  slideRight: {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0 }
  }
};

// Transition presets
export const MOTION_TRANSITIONS = {
  default: { duration: 0.6 },
  fast: { duration: 0.3 },
  slow: { duration: 1 },
  spring: { type: "spring" as const, stiffness: 100, damping: 15 },
  bounce: { type: "spring" as const, bounce: 0.4 }
};

// Category icon components mapping
export const CATEGORY_ICON_MAP = {
  mobile: Smartphone,
  web: Globe,
  blockchain: Link2,
  ai: Brain,
  education: GraduationCap,
  work: Briefcase,
  achievement: Award,
  project: Code
};

// Common CSS classes
export const COMMON_STYLES = {
  gradientText: "bg-gradient-to-r from-primary via-purple-500 to-blue-500 bg-clip-text text-transparent",
  glassCard: "backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl",
  hoverScale: "transition-transform duration-300 hover:scale-105",
  fadeTransition: "transition-all duration-300",
  centerFlex: "flex items-center justify-center",
  sectionPadding: "py-20 px-4",
  containerMax: "container mx-auto max-w-6xl"
};

// Gradient patterns
export const GRADIENTS = {
  primary: "bg-gradient-to-r from-primary to-blue-500",
  secondary: "bg-gradient-to-r from-purple-500 to-pink-500",
  accent: "bg-gradient-to-r from-teal-400 to-blue-500",
  warm: "bg-gradient-to-r from-orange-400 to-red-500",
  cool: "bg-gradient-to-r from-blue-400 to-purple-500"
};

// Loading spinner sizes
export const SPINNER_SIZES = {
  small: "h-4 w-4",
  default: "h-8 w-8",
  large: "h-12 w-12",
  xl: "h-16 w-16"
};
// App constants

export const SITE_CONFIG = {
  name: "Shivam Darekar",
  description:
    "B.Tech Computer Science Engineering Student at Parul University | Full-stack Developer | DevOps Enthusiast | Building scalable web applications",
  url: "https://shivamdarekar.com", 
  ogImage: "/images/me/og-image.png",
  links: {
    email: "darekarshivam0@gmail.com",
    github: "https://github.com/shivamdarekar",
    linkedin: "https://linkedin.com/in/shivam-darekar-b61636240",
    phone: "+91 9096805857"
  }
};

export const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Projects", href: "/projects" },
  { label: "Experience", href: "/experience" }
];

// Legacy animation variants - use MOTION_VARIANTS from ui-constants instead
export const ANIMATION_VARIANTS = {
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
  }
};

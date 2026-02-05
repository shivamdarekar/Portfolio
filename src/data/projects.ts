// Projects data from Shivam Darekar's portfolio

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  features: string[];
  image: string;
  demoUrl?: string;
  githubUrl?: string;
  category: "mobile" | "web" | "blockchain" | "ai";
}

export const projects: Project[] = [
  {
    id: "vmc-civic-issue",
    title: "VMC Civic Issue Monitoring System",
    description:
      "A geo-fenced, offline-first digital platform designed to help Vadodara Municipal Corporation proactively report, track, and resolve civic issues with accountability.",
    longDescription:
      "The VMC Civic Issue Monitoring System is a scalable MVP built for real municipal workflows and field constraints. It features GPS-based issue reporting, geo-fencing with ward boundaries, offline-first PWA capabilities, and automated issue assignment. The platform includes AI-assisted categorization using TensorFlow.js, role-based access control for different municipal roles, and comprehensive issue lifecycle tracking with SLA monitoring.",
    technologies: [
      "Next.js 14",
      "TypeScript",
      "Redux Toolkit",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "PostGIS",
      "Prisma ORM",
      "TensorFlow.js",
      "PWA",
      "IndexedDB"
    ],
    features: [
      "GPS-based issue reporting with automatic ward detection using PostGIS",
      "Offline-first PWA with IndexedDB storage and background sync",
      "AI-assisted issue categorization using TensorFlow.js image analysis",
      "Role-based access control for Field Workers, Ward Engineers, Zone Officers, and Super Admin",
      "Complete issue lifecycle tracking with SLA monitoring and breach indicators",
      "Integrated map navigation with Google Maps and MapMyIndia support"
    ],
    image: "/images/projects/civic-issue/civic-issue.png",
    demoUrl: "https://civic-issue-green.vercel.app/",
    githubUrl: "https://github.com/shivamdarekar/Civic-issue",
    category: "web"
  },
  {
    id: "imagecraft-pro",
    title: "ImageCraft Pro - AI-Powered Image Processing Suite",
    description:
      "A production-ready, full-stack SaaS application providing professional-grade image processing tools powered by Cloudinary's AI and cloud infrastructure.",
    longDescription:
      "ImageCraft Pro is a comprehensive SaaS platform that transforms, optimizes, and enhances images using cutting-edge AI technology. Built with Next.js 15, React 19, and TypeScript, it features component-based architecture, automated file management, rate limiting, and mobile-first design. The platform offers 8+ professional tools including AI-powered background removal, smart compression, social media resizing, passport photo creation, and universal format conversion with HEIC support.",
    technologies: [
      "Next.js 15",
      "React 19",
      "TypeScript",
      "Tailwind CSS 4",
      "Cloudinary AI",
      "Clerk Auth",
      "Upstash Redis",
      "Lucide React"
    ],
    features: [
      "AI-powered background removal with professional results",
      "Smart image compression with target file size control",
      "8+ social media formats with auto-cropping and optimization",
      "Passport photo maker with face detection and official compliance",
      "Universal format converter supporting WebP, AVIF, and HEIC",
      "Production-grade security with rate limiting and comprehensive error handling"
    ],
    image: "/images/projects/imageCraft-pro/imagecraft-pro.png",
    demoUrl: "https://imagecraft-pro.vercel.app/",
    githubUrl: "https://github.com/shivamdarekar/imagecraft-pro",
    category: "web"
  },
  {
    id: "taskhub",
    title: "TaskHub - Project Management & Team Collaboration Platform",
    description:
      "A full-stack project management platform that helps teams plan, assign, and track tasks across workspaces.",
    longDescription:
      "TaskHub is a comprehensive project management and team collaboration platform built with Next.js, TypeScript, and modern full-stack technologies. It enables teams to organize projects, assign tasks with priorities and deadlines, and collaborate in real-time. The platform features role-based access control, secure 2FA authentication with email verification, workspace-level permissions, and subscription management. Built with a focus on scalability and user experience, TaskHub provides a seamless workflow for managing complex projects.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Redux Toolkit",
      "Tailwind CSS",
      "Prisma",
      "MySQL"
    ],
    features: [
      "Task management with priorities, deadlines, and assignments",
      "Real-time team collaboration and updates",
      "Secure authentication with 2FA and email verification",
      "Role-based access control and workspace permissions",
      "Subscription management for different plan tiers",
      "Clean, intuitive UI for efficient task tracking"
    ],
    image: "/images/projects/taskhub/taskhub.png",
    githubUrl: "https://github.com/shivamdarekar/taskhub",
    category: "web"
  },
  {
    id: "trendswave",
    title: "TrendsWave - Full-Stack E-Commerce Platform",
    description:
      "A complete e-commerce solution where users can browse products, place orders, and sellers can manage inventory.",
    longDescription:
      "TrendsWave is a production-ready full-stack e-commerce platform built with React, Node.js, and MongoDB. The platform offers a seamless shopping experience with product browsing, secure online payments via Razorpay integration, and comprehensive order management. It features role-based access for both customers and sellers, allowing sellers to manage inventory and track sales. The application is secured with Helmet middleware and rate limiting for production-grade security, making it a robust solution for online commerce.",
    technologies: [
      "React.js",
      "Redux Toolkit",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "Passport.js",
      "Razorpay"
    ],
    features: [
      "Product browsing with search and filtering capabilities",
      "Secure payment integration with Razorpay and order verification",
      "Role-based access for customers and sellers",
      "Inventory management system for sellers",
      "Order tracking and sales analytics",
      "Production-grade security with Helmet and rate limiting"
    ],
    image: "/images/projects/trendswave/trendswave.png",
    demoUrl: "https://trendswave.vercel.app/",
    githubUrl: "https://github.com/shivamdarekar/trendswave",
    category: "web"
  },
  {
    id: "vidtube",
    title: "Vidtube - Video Sharing Platform Backend",
    description:
      "A scalable backend system for a video-sharing platform with authentication, subscriptions, and user interactions.",
    longDescription:
      "Vidtube is a robust backend system for a video-sharing platform, designed to handle high user interaction and scalability. Built with Node.js, Express.js, and MongoDB, it provides RESTful APIs for video uploads, channel subscriptions, likes, comments, and watch history tracking. The system implements JWT-based authentication for secure user sessions and features carefully designed database schemas using Mongoose for optimal performance. The architecture supports millions of user interactions while maintaining data integrity and security.",
    technologies: [
      "Node.js",
      "Express.js",
      "Mongoose",
      "MongoDB",
      "JWT Authentication"
    ],
    features: [
      "Video upload and management system",
      "Channel subscription and notification system",
      "User interactions: likes, comments, and replies",
      "Watch history tracking and recommendations",
      "JWT-based secure authentication",
      "Scalable REST API architecture with optimized database schemas"
    ],
    image: "/images/projects/vidtube/vidtube.png",
    githubUrl: "https://github.com/shivamdarekar/vidtube",
    category: "web"
  },
  {
    id: "portfolio",
    title: "Portfolio Website - Modern Animated Portfolio",
    description:
      "A modern, performance-focused portfolio website built with Next.js, TypeScript, and smooth animations.",
    longDescription:
      "This portfolio website showcases a modern approach to web development with smooth page transitions, responsive design, and accessibility best practices. Built with Next.js 15 and TypeScript, it features a clean, animated interface using Framer Motion, optimized performance with lazy loading and code splitting, and full SEO optimization. The project demonstrates advanced frontend techniques including custom animations, theme switching, and component-based architecture following industry best practices.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "React"
    ],
    features: [
      "Smooth page transitions and micro-interactions",
      "Fully responsive design across all devices",
      "Accessibility-first approach (WCAG compliant)",
      "Dark/light theme with system preference detection",
      "SEO optimized with meta tags and structured data",
      "Performance optimized with lazy loading and code splitting"
    ],
    image: "/images/projects/portfolio-v1/portfolio.png",
    category: "web"
  }
];

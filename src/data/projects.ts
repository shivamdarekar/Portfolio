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
      "Node.js",
      "Express.js",
      "Prisma ORM",
      "PostgreSQL",
      "Redis",
      "JWT Authentication"
    ],
    features: [
      "Task management with priorities, deadlines, and assignments",
      "Real-time team collaboration and updates",
      "Secure authentication with 2FA and email verification",
      "Role-based access control and workspace permissions",
      "Optimized API performance using caching strategies (Redis) for frequently accessed data",
      "Designed scalable architecture with modular services for handling large team workloads",
      "Implemented background job processing for notifications and email workflows",
      "Subscription management for different plan tiers"
    ],
    image: "/images/projects/taskhub/taskhub.png",
    demoUrl: "https://taskhub-v1.vercel.app",
    githubUrl: "https://github.com/shivamdarekar/taskhub",
    category: "web"
  },
  {
    id: "kortex-ai",
    title: "Kortex AI - Full-Stack AI Platform with PDF RAG & Research Agent",
    description:
      "A full-stack AI platform with two independent features: PDF RAG chat (upload a PDF, ask questions grounded in it) and Research Agent (ask any question, get a web-sourced markdown report).",
    longDescription:
      "Kortex AI is a production-ready full-stack AI platform built from scratch to deeply understand every step of the RAG pipeline without LangChain abstractions in the PDF module. The PDF RAG feature lets users upload PDFs up to 10 MB, extracts text page by page, cleans and chunks it semantically, generates embeddings with BAAI/bge-small-en-v1.5 (384-dim), stores vectors in Pinecone, and returns grounded answers with Groq. The Research Agent uses LangChain LCEL to search the web via Tavily (up to 5 sources), extracts content via Jina Reader with Cheerio fallback, and generates structured markdown reports. Both features expose live pipeline traces in the UI with real-time stats, timing, and source attribution. Built with Next.js 15, React 19, Express 5, and TypeScript for full-stack type safety.",
    technologies: [
      "Next.js 15",
      "React 19",
      "Express 5",
      "TypeScript",
      "Pinecone",
      "Groq",
      "Hugging Face Inference API",
      "Tavily API",
      "Jina Reader API",
      "LangChain LCEL",
      "pdf-parse",
      "Cheerio",
      "React Markdown",
      "Tailwind CSS v4",
      "shadcn/ui",
      "Radix UI",
      "Lucide Icons"
    ],
    features: [
      "PDF RAG: Upload PDFs up to 10 MB and chat with them using semantic chunking and vector retrieval",
      "Semantic text extraction: Page-by-page PDF parsing with noise cleaning and recursive chunking (paragraph → sentence → line → space → hard break)",
      "Embedding pipeline: Batch embedding generation with BAAI/bge-small-en-v1.5 (384-dim) and idempotent Pinecone upserts",
      "Grounded Q&A: Retrieves top-K similar chunks and generates answers with source attribution via Groq llama-3.3-70b-versatile",
      "Document vs General mode: Toggle between PDF-grounded answers and general knowledge mid-conversation",
      "Live pipeline trace (PDF RAG): Animated steps show extraction → chunking → embedding → Pinecone search → context building → answer generation with per-step timing",
      "Suggested questions: Auto-generated 3 starter questions from document content (non-blocking, fire-and-forget)",
      "Research Agent: Ask any question and get a web-sourced markdown report with key findings and structured analysis",
      "Web search pipeline: Tavily search (up to 5 sources) → Jina Reader content extraction (Cheerio fallback) → LLM summarization → full markdown report generation",
      "Live pipeline trace (Research): Animated stages show searching → extracting → summarizing → reporting with real-time status updates",
      "Optimistic UI: Instant placeholder messages with thinking animation, replaced in-place when responses arrive",
      "Token budget enforcement: Chunks capped at 500 chars (~375 tokens), evidence capped at 1,500 chars/source × 5 sources",
      "Fallback handling: Research Agent returns raw source links if GROQ_API_KEY is missing",
      "Dark/light theme support: Full theme switching via next-themes with system preference detection"
    ],
    image: "/images/projects/Kortex-AI/Kortex-AI.png",
    githubUrl: "https://github.com/shivamdarekar/kortex-ai",
    category: "ai"
  },
  {
    id: "codeatlas",
    title: "CodeAtlas - AI-Powered Codebase Intelligence Platform",
    description:
      "Index any GitHub repository or ZIP archive and explore it through natural language chat, execution flow traces, and auto-generated architecture diagrams — powered by AST parsing, not text splitting.",
    longDescription:
      "CodeAtlas is a full-stack AI codebase intelligence tool that takes a fundamentally different approach to code search. Instead of splitting files at arbitrary character limits, it uses ts-morph (TypeScript Compiler API) to parse every source file into a real AST — extracting complete functions, classes, React components, and class methods as semantically whole chunks, never mid-block. Each chunk is stored in Pinecone with rich relationship metadata: functionCalls, componentDependencies, hooksUsed, and apiCalls. At query time, a multi-hop retrieval engine performs an initial vector search to find entry points, then follows the dependency metadata to fetch callee chunks in a second Pinecone query — giving the LLM a complete execution graph instead of disconnected fragments. The platform supports four analytical modes: natural language chat, full architecture overview, step-by-step execution flow tracing, and Mermaid diagram generation. Both GitHub URLs and ZIP archives are supported, with real-time SSE progress streaming during indexing and an AI-powered commit summary feature for cloned repositories.",
    technologies: [
      "Next.js 15",
      "TypeScript",
      "Node.js",
      "Express",
      "ts-morph",
      "Pinecone",
      "Groq",
      "Hugging Face Inference API",
      "LangChain",
      "Zustand",
      "React Flow",
      "Mermaid.js",
      "Three.js",
      "Tailwind CSS",
      "shadcn/ui",
      "simple-git",
      "Zod"
    ],
    features: [
      "AST-aware chunking: uses ts-morph to extract complete functions, classes, React components, and class methods — never splits mid-block",
      "Multi-hop retrieval: vector search finds entry points, then metadata-driven Pinecone $in filter fetches all dependency chunks without re-embedding",
      "4 analytical modes: chat (top-10 vector search), overview (summary JSON, no vector search), flow (multi-hop trace with arrow diagram), diagram (Mermaid flowchart from real AST metadata)",
      "React component detection: identifies PascalCase functions, memo(), forwardRef(), and React.FC typed variables as component chunks",
      "Class + method extraction: a class produces both a full class chunk and individual method chunks (e.g. AuthService.login) for precise retrieval",
      "ZIP upload support: upload any project as a .zip archive up to 200 MB — no GitHub URL required",
      "SSE progress streaming: real-time indexing progress streamed to the frontend via Server-Sent Events",
      "AI commit summary: fetches last 50 commits during depth-50 clone and generates a grouped LLM summary on demand",
      "Mermaid diagram rendering: LLM generates valid Mermaid flowcharts from real dependency metadata, rendered as interactive SVGs in the browser",
      "React Flow canvas: interactive node graph to visually explore components, pages, hooks, and API routes by category",
      "Smart noise filtering: strips JS built-ins (Math.floor, console.log, JSON.stringify) from extracted metadata",
      "Worker pool embedding: batches of 32 texts with 3 concurrent workers and exponential backoff — 8x faster than sequential calls",
      "Zustand split stores: repo-store (persisted), chat-store, and ui-store for isolated, predictable state management",
      "Auto cleanup: cloned and extracted repos deleted from disk after indexing via rimraf"
    ],
    image: "/images/projects/codeatlas/codeatlas.png",
    githubUrl: "https://github.com/shivamdarekar/CodeAtlas-AI",
    category: "ai"
  },
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
      "IndexedDB",
      "WebSockets"
    ],
    features: [
      "GPS-based issue reporting with automatic ward detection using PostGIS",
      "Offline-first PWA with IndexedDB storage and background sync",
      "AI-assisted issue categorization using TensorFlow.js image analysis",
      "Role-based access control for Field Workers, Ward Engineers, Zone Officers, and Super Admin",
      "Geo-spatial queries optimized using PostGIS indexing for fast location-based issue detection",
      "Offline-first architecture with background sync to handle poor network conditions",
      "Event-driven issue lifecycle updates with SLA monitoring and alert triggers",
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
      "Clerk Authentication",
      "Upstash Redis",
      "Server Actions",
      "REST APIs"
    ],
    features: [
      "AI-powered background removal with professional results",
      "Smart image compression with target file size control",
      "8+ social media formats with auto-cropping and optimization",
      "Passport photo maker with face detection and official compliance",
      "Rate limiting and API protection using Redis to prevent abuse",
      "Optimized image delivery using CDN and Cloudinary transformations",
      "Asynchronous processing for heavy image operations to improve user experience",
      "Universal format converter supporting WebP, AVIF, and HEIC"
    ],
    image: "/images/projects/imageCraft-pro/imagecraft-pro.png",
    demoUrl: "https://imagecraft-pro.vercel.app/",
    githubUrl: "https://github.com/shivamdarekar/imagecraft-pro",
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
      "JWT Authentication",
      "Razorpay API",
      "REST APIs"
    ],
    features: [
      "Product browsing with search and filtering capabilities",
      "Implemented secure payment workflow with Razorpay webhook verification",
      "Role-based access for customers and sellers",
      "Designed scalable order management system handling concurrent user requests",
      "Used indexing and query optimization in MongoDB for faster product search and filtering",
      "Inventory management system for sellers with cart consistency and race condition handling",
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
      "MongoDB",
      "Mongoose",
      "JWT Authentication",
      "REST APIs",
      "Pagination"
    ],
    features: [
      "Video upload and management system",
      "Channel subscription and notification system",
      "User interactions: likes, comments, and replies",
      "Efficient schema design to handle high-volume user interactions and relationships",
      "Pagination and lazy loading strategies for scalable content delivery",
      "Implemented data consistency techniques for likes, comments, and subscriptions",
      "Watch history tracking and recommendations with caching for feed optimization",
      "JWT-based secure authentication"
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
      "React",
      "Tailwind CSS",
      "Framer Motion",
      "SEO Optimization"
    ],
    features: [
      "Smooth page transitions and micro-interactions",
      "Fully responsive design across all devices",
      "Accessibility-first approach (WCAG compliant)",
      "Optimized performance using code splitting and lazy loading",
      "Implemented SEO best practices with structured metadata and Open Graph",
      "Smooth animations with minimal performance overhead using Framer Motion",
      "Dark/light theme with system preference detection"
    ],
    image: "/images/projects/portfolio-v1/portfolio.png",
    category: "web"
  }
];

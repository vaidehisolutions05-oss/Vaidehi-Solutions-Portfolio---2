import {
  Code2,
  ShoppingCart,
  Layers,
  MonitorPlay,
  Lightbulb,
  ShieldCheck,
  Zap,
  Cpu,
  Users,
  Smartphone,
  Settings,
  Link,
} from "lucide-react";

export const services = [
  {
    title: "Web Development",
    description:
      "Custom, high-performance websites built with modern frameworks like React, Next.js, and Vue.",
    icon: Code2,
    color: "blue",
  },
  {
    title: "App Development",
    description:
      "Native and cross-platform mobile applications for iOS and Android with seamless UX.",
    icon: Smartphone,
    color: "indigo",
  },
  {
    title: "E-commerce Solutions",
    description:
      "Scalable online stores with seamless payment integration and optimized user journeys.",
    icon: ShoppingCart,
    color: "purple",
  },
  {
    title: "SaaS Platforms",
    description:
      "End-to-end development of multi-tenant cloud applications with robust architectures.",
    icon: Layers,
    color: "teal",
  },
  {
    title: "OTT Development",
    description:
      "Premium video streaming solutions across web, mobile, and smart TV platforms.",
    icon: MonitorPlay,
    color: "red",
  },
  {
    title: "System Integrations",
    description:
      "Connecting disparate systems and APIs to streamline your business workflows.",
    icon: Link,
    color: "rose",
  },
  {
    title: "IT Consultancy",
    description:
      "Strategic technology advice to align your IT infrastructure with business goals.",
    icon: Lightbulb,
    color: "amber",
  },
  {
    title: "Maintenance & Support",
    description:
      "Ongoing technical support and proactive maintenance to keep your systems running smoothly.",
    icon: Settings,
    color: "green",
  },
];

export const portfolio = [
  {
    id: 1,
    title: "Streamify OTT",
    category: "OTT Platform",
    image: "https://plus.unsplash.com/premium_photo-1726812143700-94126ea7b0e5?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    problem: "The client needed a scalable video streaming platform capable of handling 1M+ concurrent users.",
    solution: "We built a custom video delivery network using AWS CloudFront and a React-based frontend.",
    tech: ["React", "AWS", "Node.js", "Redis"],
    outcome: "40% increase in user retention and 99.99% uptime during peak events.",
  },
  {
    id: 2,
    title: "LuxeCart E-commerce",
    category: "E-commerce",
    image: "https://images.unsplash.com/photo-1664455340023-214c33a9d0bd?q=80&w=2064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    problem: "A luxury brand required a bespoke shopping experience that reflected their premium identity.",
    solution: "A headless e-commerce architecture with Shopify Plus and a custom Next.js storefront.",
    tech: ["Next.js", "Shopify", "Tailwind", "GraphQL"],
    outcome: "150% growth in mobile conversions within the first quarter.",
  },
  {
    id: 3,
    title: "CloudSync SaaS",
    category: "SaaS",
    image: "https://images.unsplash.com/photo-1556155092-490a1ba16284?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    problem: "Enterprise teams struggled with real-time data synchronization across global offices.",
    solution: "A real-time collaborative platform built with WebSockets and a distributed database.",
    tech: ["TypeScript", "Socket.io", "PostgreSQL", "Docker"],
    outcome: "Reduced data latency by 70% for international teams.",
  },
  {
    id: 4,
    title: "FinTech Pro",
    category: "FinTech",
    image: "https://images.unsplash.com/photo-1559526324-593bc073d938?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    problem: "The client needed a secure, compliant dashboard for high-frequency trading analysis.",
    solution: "A secure dashboard with real-time data visualization and bank-grade encryption.",
    tech: ["React", "D3.js", "Python", "Kubernetes"],
    outcome: "Successfully processed $500M+ in transactions in the first month.",
  },
];

export const whyChooseUs = [
  {
    title: "Scalable Architecture",
    description: "Systems designed to grow seamlessly with your business demands.",
    icon: Zap,
  },
  {
    title: "Performance-Driven",
    description: "Ultra-fast load times and smooth interactions for better UX.",
    icon: Cpu,
  },
  {
    title: "Modern Tech Stack",
    description: "We use the latest, most reliable technologies to build your products.",
    icon: ShieldCheck,
  },
  {
    title: "Client-Centric",
    description: "Your vision is our priority. We work as an extension of your team.",
    icon: Users,
  },
];

export const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO at TechFlow",
    text: "Vaidehi Solutions transformed our vision into a reality. Their attention to detail and technical expertise are unmatched.",
    image: "https://i.pravatar.cc/150?u=sarah",
  },
  {
    name: "Michael Chen",
    role: "CTO at Nexus",
    text: "The SaaS platform they built for us is incredibly robust and scalable. We couldn't be happier with the results.",
    image: "https://i.pravatar.cc/150?u=michael",
  },
  {
    name: "Elena Rodriguez",
    role: "Founder of LuxeCart",
    text: "Working with them was a breeze. They understood our brand perfectly and delivered a premium e-commerce site.",
    image: "https://i.pravatar.cc/150?u=elena",
  },
];

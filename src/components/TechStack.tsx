import { motion } from "motion/react";

const tech = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "AWS",
  "GraphQL",
  "Tailwind",
  "PostgreSQL",
  "Docker",
  "Kubernetes",
  "Python",
  "Redis",
];

export function TechStack() {
  return (
    <section className="py-24 bg-gray-50/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-serif font-bold text-gray-900"
        >
          Our Technology Stack
        </motion.h2>
      </div>

      <div className="relative flex overflow-x-hidden">
        <div className="py-12 animate-marquee whitespace-nowrap flex">
          {[...tech, ...tech].map((item, i) => (
            <div
              key={i}
              className="mx-8 text-4xl md:text-6xl font-serif font-bold text-gray-200 hover:text-blue-600 transition-colors cursor-default"
            >
              {item}
            </div>
          ))}
        </div>

        <div className="absolute top-0 py-12 animate-marquee2 whitespace-nowrap flex">
          {[...tech, ...tech].map((item, i) => (
            <div
              key={i}
              className="mx-8 text-4xl md:text-6xl font-serif font-bold text-gray-200 hover:text-blue-600 transition-colors cursor-default"
            >
              {item}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-100%); }
        }
        @keyframes marquee2 {
          0% { transform: translateX(100%); }
          100% { transform: translateX(0%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .animate-marquee2 {
          animation: marquee2 30s linear infinite;
        }
      `}</style>
    </section>
  );
}

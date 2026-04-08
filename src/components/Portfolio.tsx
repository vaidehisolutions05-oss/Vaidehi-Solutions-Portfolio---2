import { useState } from "react";
import { motion } from "motion/react";
import { portfolio } from "../data";
import { PremiumModal } from "./PremiumModal";
import { Badge } from "@/components/ui/badge";

export function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<(typeof portfolio)[0] | null>(null);

  return (
    <section id="work" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 tracking-tight mb-4">
              Selected Works
            </h2>
            <p className="text-gray-600 max-w-xl text-lg">
              A showcase of our most impactful digital transformations and
              innovative product builds.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex gap-4">
              {["All", "Web", "Mobile", "SaaS"].map((filter) => (
                <button
                  key={filter}
                  className="px-6 py-2 rounded-full text-sm font-medium border border-gray-100 hover:border-blue-600 hover:text-blue-600 transition-all duration-300"
                >
                  {filter}
                </button>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {portfolio.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-[2.5rem] bg-gray-100 aspect-[4/3]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-10">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="text-blue-400 font-bold text-sm tracking-widest uppercase mb-2 block">
                      {project.category}
                    </span>
                    <h3 className="text-3xl font-serif font-bold text-white mb-4">
                      {project.title}
                    </h3>
                    <div className="flex items-center text-white font-bold">
                      View Case Study <span className="ml-2">→</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <PremiumModal
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        title={selectedProject?.title || ""}
        description={selectedProject?.category}
      >
        {selectedProject && (
          <div className="space-y-8">
            <div className="rounded-2xl overflow-hidden aspect-video">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-gray-900">The Challenge</h4>
                <p className="text-gray-600 leading-relaxed">
                  {selectedProject.problem}
                </p>
              </div>
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-gray-900">Our Solution</h4>
                <p className="text-gray-600 leading-relaxed">
                  {selectedProject.solution}
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="text-xl font-bold text-gray-900">Tech Stack</h4>
              <div className="flex flex-wrap gap-2">
                {selectedProject.tech.map((t) => (
                  <Badge
                    key={t}
                    variant="secondary"
                    className="bg-gray-100 text-gray-700 hover:bg-blue-50 hover:text-blue-600 px-4 py-1 rounded-full text-sm"
                  >
                    {t}
                  </Badge>
                ))}
              </div>
            </div>
            <div className="p-6 bg-blue-50 rounded-2xl border border-blue-100">
              <h4 className="text-blue-900 font-bold mb-2">Outcome</h4>
              <p className="text-blue-800">{selectedProject.outcome}</p>
            </div>
          </div>
        )}
      </PremiumModal>
    </section>
  );
}

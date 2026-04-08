import { motion } from "motion/react";
import { services } from "../data";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export function Services() {
  return (
    <section id="services" className="py-24 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 tracking-tight mb-4">
              Our Expertise
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              We provide a comprehensive suite of digital services designed to
              help your business thrive in the modern era.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="group relative h-full border-none bg-white shadow-sm hover:shadow-2xl transition-all duration-500 rounded-3xl overflow-hidden cursor-default">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <CardContent className="p-8">
                  <div
                    className={cn(
                      "w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-sm",
                      service.color === "blue" && "bg-blue-50 text-blue-600",
                      service.color === "purple" && "bg-purple-50 text-purple-600",
                      service.color === "teal" && "bg-teal-50 text-teal-600",
                      service.color === "red" && "bg-red-50 text-red-600",
                      service.color === "amber" && "bg-amber-50 text-amber-600",
                      service.color === "indigo" && "bg-indigo-50 text-indigo-600",
                      service.color === "rose" && "bg-rose-50 text-rose-600",
                      service.color === "green" && "bg-green-50 text-green-600"
                    )}
                  >
                    <service.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="mt-8 flex items-center text-sm font-bold text-blue-600 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-[-10px] group-hover:translate-x-0">
                    Learn More <span className="ml-2">→</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

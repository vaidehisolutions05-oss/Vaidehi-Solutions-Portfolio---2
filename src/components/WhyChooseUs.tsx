import { motion } from "motion/react";
import { whyChooseUs } from "../data";

export function WhyChooseUs() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-8 tracking-tight leading-tight">
              Why Global Leaders <br />
              <span className="text-blue-600 italic">Choose Us</span>
            </h2>
            <div className="space-y-8">
              {whyChooseUs.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-6"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Our Office"
                className="w-full h-auto object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Stats Overlay */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="absolute -bottom-10 -left-10 bg-white p-8 rounded-3xl shadow-2xl border border-gray-100 z-20"
            >
              <div className="flex gap-12">
                <div>
                  <div className="text-4xl font-serif font-bold text-blue-600">
                    150+
                  </div>
                  <div className="text-sm text-gray-500 font-medium">
                    Projects Delivered
                  </div>
                </div>
                <div className="w-px h-12 bg-gray-100" />
                <div>
                  <div className="text-4xl font-serif font-bold text-blue-600">
                    98%
                  </div>
                  <div className="text-sm text-gray-500 font-medium">
                    Client Satisfaction
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

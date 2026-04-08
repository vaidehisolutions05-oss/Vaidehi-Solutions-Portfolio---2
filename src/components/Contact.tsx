import React, { useState } from "react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";

export function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-24 bg-gray-900 text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-600/10 blur-[120px] -z-0" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
                Let's Build Something <span className="text-blue-400 italic">Extraordinary</span> Together
              </h2>
              <p className="text-gray-400 text-lg mb-12 max-w-lg">
                Ready to take your digital presence to the next level? Our team of
                experts is here to help you navigate your digital transformation.
              </p>

              <div className="space-y-8">
                <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-gray-800 flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
                    <Mail className="w-6 h-6 text-blue-400 group-hover:text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 font-medium">Email Us</div>
                    <div className="text-xl font-bold">vaidehisolutions05@gmail.com</div>
                  </div>
                </div>
                <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-gray-800 flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
                    <Phone className="w-6 h-6 text-blue-400 group-hover:text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 font-medium">Call Us | WhatsApp</div>
                    <div className="text-xl font-bold">+91 - 9653187751</div>
                  </div>
                </div>
                <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-gray-800 flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
                    <MapPin className="w-6 h-6 text-blue-400 group-hover:text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 font-medium">Visit Us</div>
                    <div className="text-xl font-bold">1603, A Wing, Phase 2, Vedant Millennia, Titwala East, Kalyan, Thane, Maharashtra, India - 421605</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-xl p-8 md:p-12 rounded-[2.5rem] border border-white/10"
          >
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <CheckCircle2 className="w-20 h-20 text-green-400 mx-auto mb-6" />
                <h3 className="text-3xl font-serif font-bold mb-4">Message Sent!</h3>
                <p className="text-gray-400">
                  Thank you for reaching out. Our team will get back to you within 24 hours.
                </p>
                <Button
                  variant="outline"
                  className="mt-8 rounded-full border-white/20 text-white hover:bg-white/10"
                  onClick={() => setIsSubmitted(false)}
                >
                  Send Another Message
                </Button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-gray-300">Full Name</Label>
                    <Input
                      id="name"
                      placeholder="John Doe"
                      required
                      className="bg-white/5 border-white/10 h-12 rounded-xl focus:ring-blue-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-gray-300">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      required
                      className="bg-white/5 border-white/10 h-12 rounded-xl focus:ring-blue-500"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="project" className="text-gray-300">Project Type</Label>
                  <select
                    id="project"
                    className="w-full bg-white/5 border border-white/10 h-12 rounded-xl px-4 text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option className="bg-gray-900">Web Development</option>
                    <option className="bg-gray-900">App Development</option>
                    <option className="bg-gray-900">E-commerce</option>
                    <option className="bg-gray-900">SaaS Platform</option>
                    <option className="bg-gray-900">OTT Solution</option>
                    <option className="bg-gray-900">System Integrations</option>
                    <option className="bg-gray-900">IT Consultancy</option>
                    <option className="bg-gray-900">Maintenance & Support</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-gray-300">Your Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your project..."
                    required
                    className="bg-white/5 border-white/10 min-h-[150px] rounded-xl focus:ring-blue-500"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full h-14 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-lg transition-all duration-300 shadow-lg shadow-blue-500/20"
                >
                  Send Message
                  <Send className="ml-2 w-5 h-5" />
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

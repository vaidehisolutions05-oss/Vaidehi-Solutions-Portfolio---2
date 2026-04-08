/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { Portfolio } from "./components/Portfolio";
import { WhyChooseUs } from "./components/WhyChooseUs";
import { TechStack } from "./components/TechStack";
import { Testimonials } from "./components/Testimonials";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { PremiumModal } from "./components/PremiumModal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Send } from "lucide-react";

export default function App() {
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white selection:bg-blue-100 selection:text-blue-900">
      <Navbar onStartProject={() => setIsProjectModalOpen(true)} />
      
      <main>
        <Hero onStartProject={() => setIsProjectModalOpen(true)} />
        <Services />
        <Portfolio />
        <WhyChooseUs />
        <TechStack />
        <Testimonials />
        <Contact />
      </main>

      <Footer />

      {/* Global Start Project Modal */}
      <PremiumModal
        isOpen={isProjectModalOpen}
        onClose={() => setIsProjectModalOpen(false)}
        title="Start Your Project"
        description="Fill out the form below and we'll get back to you with a custom proposal."
      >
        <form className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="modal-name">Full Name</Label>
              <Input id="modal-name" placeholder="John Doe" className="rounded-xl" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="modal-email">Email Address</Label>
              <Input id="modal-email" type="email" placeholder="john@example.com" className="rounded-xl" />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="modal-service">Service Interested In</Label>
            <select
              id="modal-service"
              className="w-full bg-white border border-gray-200 h-10 rounded-xl px-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option>Web Development</option>
              <option>App Development</option>
              <option>E-commerce</option>
              <option>SaaS Platform</option>
              <option>OTT Solution</option>
              <option>System Integrations</option>
              <option>IT Consultancy</option>
              <option>Maintenance & Support</option>
            </select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="modal-message">Project Details</Label>
            <Textarea
              id="modal-message"
              placeholder="Tell us about your goals, timeline, and budget..."
              className="min-h-[120px] rounded-xl"
            />
          </div>
          <Button
            type="button"
            onClick={() => setIsProjectModalOpen(false)}
            className="w-full h-12 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold transition-all duration-300"
          >
            Send Inquiry
            <Send className="ml-2 w-4 h-4" />
          </Button>
        </form>
      </PremiumModal>
    </div>
  );
}

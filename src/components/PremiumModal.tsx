import { ReactNode } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { motion, AnimatePresence } from "motion/react";

interface PremiumModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description?: string;
  children: ReactNode;
}

export function PremiumModal({
  isOpen,
  onClose,
  title,
  description,
  children,
}: PremiumModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px] p-0 overflow-hidden border-none bg-transparent shadow-none">
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{
                duration: 0.4,
                ease: [0.16, 1, 0.3, 1], // Custom premium easing
              }}
              className="bg-white/90 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl overflow-hidden"
            >
              <div className="p-8">
                <DialogHeader className="mb-6">
                  <DialogTitle className="text-3xl font-serif font-bold text-gray-900">
                    {title}
                  </DialogTitle>
                  {description && (
                    <DialogDescription className="text-gray-500 text-lg">
                      {description}
                    </DialogDescription>
                  )}
                </DialogHeader>
                <div className="mt-4">{children}</div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </DialogContent>
    </Dialog>
  );
}

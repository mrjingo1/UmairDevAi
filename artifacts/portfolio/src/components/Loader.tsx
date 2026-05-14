import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function Loader({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 2500;
    const interval = 20;
    const steps = duration / interval;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      setProgress(Math.min((currentStep / steps) * 100, 100));
      if (currentStep >= steps) {
        clearInterval(timer);
        setTimeout(onComplete, 500);
      }
    }, interval);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-[#08090d]"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      <div className="flex flex-col items-center">
        <motion.h1 
          className="text-4xl md:text-6xl font-display font-bold text-white mb-8 tracking-widest uppercase"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          M. Umair
        </motion.h1>
        
        <div className="w-64 h-[2px] bg-white/10 relative overflow-hidden rounded-full">
          <motion.div 
            className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#6366f1] via-[#8b5cf6] to-[#a855f7]"
            style={{ width: `${progress}%` }}
          />
        </div>
        
        <div className="mt-4 text-white/50 font-mono text-sm tracking-widest">
          {Math.floor(progress)}%
        </div>
      </div>
    </motion.div>
  );
}

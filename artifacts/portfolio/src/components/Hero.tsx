import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const titles = [
  "Video Editor",
  "AI Creator",
  "Content Strategist",
  "Motion Storyteller",
  "Automation Specialist",
  "Digital Marketer",
];

export function Hero() {
  const [titleIndex, setTitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % titles.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] mix-blend-screen opacity-50 animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[150px] mix-blend-screen opacity-50" style={{ animation: 'pulse 4s infinite alternate-reverse' }} />
      </div>

      <div className="container px-6 relative z-10 mx-auto text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-sm font-mono text-primary tracking-[0.2em] mb-6 uppercase">
            Creating the Future of Digital Media
          </p>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-bold text-white mb-6 tracking-tight">
            M. Umair
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="h-12 flex items-center justify-center mb-8"
        >
          <span className="text-xl md:text-3xl text-white/60 font-light mr-3">
            I am a
          </span>
          <motion.span
            key={titleIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="text-xl md:text-3xl font-display text-gradient font-semibold"
          >
            {titles[titleIndex]}
          </motion.span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="max-w-2xl text-lg text-white/50 mb-12 font-light leading-relaxed"
        >
          I create modern digital experiences through cinematic editing, AI-powered workflows, content strategy, and motion-driven storytelling.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="flex flex-col sm:flex-row gap-6"
        >
          <a
            href="#work"
            className="interactive px-8 py-4 bg-white text-black font-medium rounded-full hover:scale-105 transition-transform duration-300"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="interactive px-8 py-4 glass text-white font-medium rounded-full hover:bg-white/10 transition-colors duration-300"
          >
            Let's Connect
          </a>
        </motion.div>
      </div>
    </section>
  );
}

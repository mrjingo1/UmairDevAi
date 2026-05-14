import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import React from "react";

const skills = [
  { title: "Video Editing", desc: "Cinematic pacing, color grading, and immersive sound design." },
  { title: "YouTube Automation", desc: "End-to-end channel management and content scaling systems." },
  { title: "Content Strategy", desc: "Data-driven ideation for maximum retention and reach." },
  { title: "Thumbnail Designing", desc: "High-CTR visual hooks engineered for clicks." },
  { title: "Faceless Content", desc: "Engaging narrative structures without a human presenter." },
  { title: "AI Automation", desc: "Workflows that reduce production time by 80%." },
  { title: "SEO", desc: "Algorithm optimization for search and discovery." },
  { title: "Digital Marketing", desc: "Cross-platform audience building and monetization." },
];

function TiltCard({ title, desc }: { title: string; desc: string }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="interactive relative w-full h-48 rounded-2xl glass p-6 cursor-none group"
    >
      <div 
        className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl pointer-events-none" 
        style={{ transform: "translateZ(-50px)" }} 
      />
      <div style={{ transform: "translateZ(50px)" }} className="relative z-10 h-full flex flex-col justify-center">
        <h3 className="text-xl font-display font-semibold text-white mb-2">{title}</h3>
        <p className="text-sm text-white/50">{desc}</p>
      </div>
    </motion.div>
  );
}

export function Skills() {
  return (
    <section id="skills" className="py-32 bg-[#08090d] relative z-10">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="mb-20 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-bold text-white mb-6"
          >
            Core Competencies
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/60 max-w-2xl mx-auto"
          >
            The technical foundation behind the creative execution.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 perspective-1000">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <TiltCard {...skill} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

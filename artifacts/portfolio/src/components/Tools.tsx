import { motion } from "framer-motion";
import {
  SiHtml5, SiCss, SiPython, SiYoutube, SiCanva,
  SiN8N, SiWondersharefilmora, SiGooglegemini
} from "react-icons/si";
import { Film, Scissors, Wand2 } from "lucide-react";
import { createElement, ElementType } from "react";

type Tool = {
  name: string;
  icon: ElementType;
  color: string;
  isLucide?: boolean;
};

const tools: Tool[] = [
  { name: "Premiere Pro", icon: Film, color: "#9999FF", isLucide: true },
  { name: "CapCut", icon: Scissors, color: "#000000", isLucide: true },
  { name: "Filmora", icon: SiWondersharefilmora, color: "#4CAF50" },
  { name: "YouTube", icon: SiYoutube, color: "#FF0000" },
  { name: "Python", icon: SiPython, color: "#3776AB" },
  { name: "n8n", icon: SiN8N, color: "#EA4B71" },
  { name: "Canva", icon: SiCanva, color: "#00C4CC" },
  { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
  { name: "CSS3", icon: SiCss, color: "#1572B6" },
  { name: "Google AI Studio", icon: SiGooglegemini, color: "#4285F4" },
  { name: "Make.com", icon: Wand2, color: "#6D00CC", isLucide: true },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.85 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

export function Tools() {
  return (
    <section className="py-32 bg-[#08090d] relative z-10 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-72 h-72 bg-violet-500/5 rounded-full blur-3xl" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-xs font-mono tracking-[0.3em] text-violet-400/60 uppercase mb-4">Arsenal</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">Tools & Technologies</h2>
          <p className="mt-4 text-white/40 max-w-xl mx-auto">
            Creative firepower — the platforms and tools that power every project.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-6"
        >
          {tools.map((tool) => (
            <motion.div
              key={tool.name}
              variants={itemVariants}
              whileHover={{ y: -12, scale: 1.12 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="flex flex-col items-center gap-3 group cursor-default"
            >
              <div
                className="w-20 h-20 rounded-2xl flex items-center justify-center text-4xl text-white/50 group-hover:text-white transition-all duration-300 relative overflow-hidden"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  backdropFilter: "blur(12px)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  boxShadow: "0 4px 24px rgba(0,0,0,0.3)",
                }}
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-25 transition-opacity duration-400"
                  style={{ backgroundColor: tool.color }}
                />
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 rounded-2xl"
                  style={{ boxShadow: `0 0 20px ${tool.color}40`, border: `1px solid ${tool.color}30` }}
                />
                <span className="relative z-10 group-hover:scale-110 transition-transform duration-300 inline-flex">
                  {tool.isLucide
                    ? createElement(tool.icon, { size: 32, strokeWidth: 1.5 })
                    : createElement(tool.icon as React.ComponentType<{ size?: number }>, { size: 36 })}
                </span>
              </div>
              <span className="text-xs font-mono tracking-widest text-white/30 group-hover:text-white/80 transition-colors uppercase text-center leading-tight max-w-[80px]">
                {tool.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

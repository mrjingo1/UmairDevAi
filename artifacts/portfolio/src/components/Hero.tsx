import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { ArrowDown } from "lucide-react";
import profileImg from "@assets/Umair_Saho_-_Profile_1778731615502.png";

const titles = [
  "Video Editor",
  "AI Creator",
  "Content Strategist",
  "Motion Storyteller",
  "Automation Specialist",
  "Digital Marketer",
];

function FloatingParticles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {Array.from({ length: 28 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: Math.random() * 3 + 1,
            height: Math.random() * 3 + 1,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            background: i % 3 === 0
              ? "rgba(139,92,246,0.6)"
              : i % 3 === 1
              ? "rgba(99,102,241,0.4)"
              : "rgba(255,255,255,0.3)",
          }}
          animate={{
            y: [0, -30 - Math.random() * 40, 0],
            x: [0, (Math.random() - 0.5) * 20, 0],
            opacity: [0, 0.8, 0],
          }}
          transition={{
            duration: 4 + Math.random() * 5,
            repeat: Infinity,
            delay: Math.random() * 6,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

export function Hero() {
  const [titleIndex, setTitleIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % titles.length);
    }, 2200);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      const rect = containerRef.current?.getBoundingClientRect();
      if (!rect) return;
      setMousePos({
        x: (e.clientX - rect.left) / rect.width - 0.5,
        y: (e.clientY - rect.top) / rect.height - 0.5,
      });
    };
    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Layered background orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-[-10%] left-[-5%] w-[700px] h-[700px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(99,102,241,0.18) 0%, transparent 70%)", filter: "blur(60px)" }}
          animate={{ x: mousePos.x * -30, y: mousePos.y * -20 }}
          transition={{ type: "spring", stiffness: 40, damping: 20 }}
        />
        <motion.div
          className="absolute bottom-[-10%] right-[-5%] w-[800px] h-[800px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(139,92,246,0.15) 0%, transparent 70%)", filter: "blur(80px)" }}
          animate={{ x: mousePos.x * 25, y: mousePos.y * 25 }}
          transition={{ type: "spring", stiffness: 30, damping: 20 }}
        />
        <motion.div
          className="absolute top-[30%] left-[40%] w-[400px] h-[400px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(168,85,247,0.1) 0%, transparent 70%)", filter: "blur(60px)" }}
          animate={{ x: mousePos.x * 15, y: mousePos.y * 15 }}
          transition={{ type: "spring", stiffness: 50, damping: 25 }}
        />
        {/* Grid lines */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <FloatingParticles />

      <div className="container px-6 relative z-10 mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 min-h-screen py-28">

          {/* Left — Text */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-xs font-mono text-white/50 tracking-[0.15em] uppercase">
                  Available for Projects
                </span>
              </div>

              <h1 className="text-6xl md:text-8xl lg:text-[7rem] font-display font-bold text-white leading-[0.95] tracking-tight mb-6">
                M.<br />
                <span className="text-gradient">Umair</span>
              </h1>

              <p className="text-xs font-mono tracking-[0.3em] text-white/30 uppercase mb-8">
                Video Editor&nbsp;&nbsp;•&nbsp;&nbsp;AI Creator&nbsp;&nbsp;•&nbsp;&nbsp;YouTube Automation
              </p>
            </motion.div>

            {/* Rotating title */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="h-14 flex items-center justify-center lg:justify-start mb-8 overflow-hidden"
            >
              <AnimatePresence mode="wait">
                <motion.span
                  key={titleIndex}
                  initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -30, filter: "blur(8px)" }}
                  transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                  className="text-2xl md:text-3xl font-display text-gradient font-semibold"
                >
                  {titles[titleIndex]}
                </motion.span>
              </AnimatePresence>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="max-w-xl text-lg text-white/45 mb-12 font-light leading-relaxed"
            >
              I create modern digital experiences through cinematic editing,
              AI-powered workflows, content strategy, and motion-driven storytelling.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <a
                href="#work"
                className="interactive group relative px-8 py-4 rounded-full font-medium text-black overflow-hidden"
                style={{ background: "linear-gradient(135deg, #a78bfa, #6366f1)" }}
              >
                <span className="relative z-10">View My Work</span>
                <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
              <a
                href="#contact"
                className="interactive px-8 py-4 glass text-white font-medium rounded-full hover:bg-white/10 transition-all duration-300 border border-white/15 hover:border-violet-400/40"
              >
                Let's Connect
              </a>
            </motion.div>
          </div>

          {/* Right — Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 60, scale: 0.92 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1.1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="flex-shrink-0 relative"
          >
            {/* Glow rings */}
            <div
              className="absolute inset-0 rounded-3xl"
              style={{
                background: "radial-gradient(ellipse at center, rgba(139,92,246,0.3) 0%, transparent 70%)",
                transform: "scale(1.3)",
                filter: "blur(40px)",
                animation: "breathe 4s ease-in-out infinite",
              }}
            />
            <motion.div
              className="absolute inset-[-12px] rounded-3xl border border-violet-500/20"
              animate={{ opacity: [0.3, 0.7, 0.3], scale: [1, 1.02, 1] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute inset-[-24px] rounded-3xl border border-violet-500/10"
              animate={{ opacity: [0.15, 0.4, 0.15], scale: [1, 1.04, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            />

            {/* Profile image container */}
            <motion.div
              animate={{
                x: mousePos.x * -12,
                y: mousePos.y * -10,
              }}
              transition={{ type: "spring", stiffness: 80, damping: 25 }}
              className="relative"
              style={{
                width: "clamp(280px, 35vw, 420px)",
                borderRadius: "28px",
                overflow: "hidden",
              }}
            >
              <img
                src={profileImg}
                alt="M. Umair"
                className="w-full h-auto object-cover"
                style={{ borderRadius: "28px", display: "block" }}
              />

              {/* Cinematic rim lighting */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: "linear-gradient(135deg, rgba(139,92,246,0.25) 0%, transparent 40%, rgba(99,102,241,0.15) 100%)",
                  borderRadius: "28px",
                }}
              />
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.15), inset 2px 2px 0 rgba(255,255,255,0.08)",
                  borderRadius: "28px",
                }}
              />

              {/* Floating badge */}
              <motion.div
                className="absolute bottom-6 left-6 right-6 px-4 py-3 rounded-2xl flex items-center gap-3"
                style={{
                  background: "rgba(8,9,13,0.75)",
                  backdropFilter: "blur(20px)",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="w-8 h-8 rounded-full flex items-center justify-center text-sm"
                  style={{ background: "linear-gradient(135deg, #7c3aed, #4f46e5)" }}>
                  ✦
                </div>
                <div>
                  <div className="text-white text-xs font-semibold">M. Umair</div>
                  <div className="text-white/40 text-xs font-mono">Digital Creator</div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        animate={{ opacity: [0.4, 0.9, 0.4], y: [0, 6, 0] }}
        transition={{ duration: 2.5, repeat: Infinity }}
      >
        <span className="text-xs font-mono text-white/30 tracking-widest uppercase">Scroll</span>
        <ArrowDown size={14} className="text-white/30" />
      </motion.div>
    </section>
  );
}

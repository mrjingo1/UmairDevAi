import { motion, AnimatePresence, useMotionValue, useTransform } from "framer-motion";
import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import img1 from "@assets/Create_Unlimited_AI_Videos_for_FREE___Seedance_1_0_is_Veo_3_Ki_1778730504729.jpg";
import img2 from "@assets/Generate_Unlimited_Consistent_AI_Images___Videos_FREE___Secret_1778730504731.jpg";
import img3 from "@assets/How_to_Create_AI_Influencer_Long_Videos___Nano_Banana___ChatGP_1778730504731.jpg";
import img4 from "@assets/Stop_Using_Leonardo___Use_This_Free_Consistent_Ai_Image_Tool_I_1778730504732.jpg";
import img5 from "@assets/Unlimited_AI_Image_To_Video_Generator___Create_Realistic_Talki_1778730504733.jpg";
import img6 from "@assets/image_1778731521894.png";
import img7 from "@assets/image_1778731533487.png";

const thumbnails = [
  { src: img1, title: "Create Unlimited AI Videos for FREE", tag: "AI Video" },
  { src: img2, title: "Consistent AI Images & Videos", tag: "AI Images" },
  { src: img3, title: "AI Influencer Long Videos", tag: "AI Content" },
  { src: img4, title: "Free Consistent AI Image Tool", tag: "AI Tools" },
  { src: img5, title: "AI Image to Video Generator", tag: "AI Automation" },
  { src: img6, title: "America Under Trump", tag: "Documentary" },
  { src: img7, title: "McDonald's Dark Secret", tag: "Viral Content" },
];

const VISIBLE_STACK = 4;

export function ThumbnailGallery() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState<"next" | "prev">("next");
  const [isDragging, setIsDragging] = useState(false);
  const dragX = useMotionValue(0);

  const total = thumbnails.length;

  const goNext = useCallback(() => {
    setDirection("next");
    setCurrent((p) => (p + 1) % total);
  }, [total]);

  const goPrev = useCallback(() => {
    setDirection("prev");
    setCurrent((p) => (p - 1 + total) % total);
  }, [total]);

  useEffect(() => {
    const timer = setInterval(() => {
      if (!isDragging) goNext();
    }, 3500);
    return () => clearInterval(timer);
  }, [goNext, isDragging]);

  const getCardIndex = (offset: number) =>
    (current + offset + total) % total;

  return (
    <section id="work" className="py-32 bg-[#08090d] relative z-10 overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-violet-600/8 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header */}
        <div className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-xs font-mono tracking-[0.3em] text-violet-400/60 uppercase mb-3">Thumbnail Portfolio</p>
            <h2 className="text-4xl md:text-6xl font-display font-bold text-white">
              Visual <span className="text-gradient">Hooks</span>
            </h2>
            <p className="mt-3 text-white/40 max-w-md text-base">
              Engineered for maximum CTR — every pixel earns its click.
            </p>
          </motion.div>

          {/* Counter & Controls */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex items-center gap-6"
          >
            <span className="font-mono text-white/30 text-sm tabular-nums">
              {String(current + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
            </span>
            <div className="flex gap-3">
              <button
                onClick={goPrev}
                className="w-12 h-12 rounded-full glass flex items-center justify-center text-white/60 hover:text-white hover:border-violet-500/50 border border-white/10 transition-all duration-300 hover:scale-110"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={goNext}
                className="w-12 h-12 rounded-full glass flex items-center justify-center text-white/60 hover:text-white hover:border-violet-500/50 border border-white/10 transition-all duration-300 hover:scale-110"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </motion.div>
        </div>

        {/* Card Stack Area */}
        <div className="relative flex items-center justify-center" style={{ height: "520px" }}>
          {/* Stacked background cards */}
          {[3, 2, 1].map((offset) => {
            const idx = getCardIndex(offset);
            const scaleFactor = 1 - offset * 0.045;
            const yOffset = offset * 18;
            const xOffset = offset * 14;
            const opac = 1 - offset * 0.22;
            return (
              <div
                key={`stack-${idx}-${offset}`}
                className="absolute rounded-3xl overflow-hidden"
                style={{
                  width: "min(680px, 90vw)",
                  aspectRatio: "16/9",
                  transform: `scale(${scaleFactor}) translateY(${yOffset}px) translateX(${xOffset}px)`,
                  opacity: opac,
                  zIndex: VISIBLE_STACK - offset,
                  transformOrigin: "center bottom",
                  boxShadow: "0 32px 80px rgba(0,0,0,0.7)",
                }}
              >
                <img
                  src={thumbnails[idx].src}
                  alt={thumbnails[idx].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>
            );
          })}

          {/* Active front card */}
          <AnimatePresence mode="popLayout" custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              initial={(dir: "next" | "prev") => ({
                x: dir === "next" ? "110%" : "-110%",
                opacity: 0,
                scale: 0.88,
                rotate: dir === "next" ? 6 : -6,
              })}
              animate={{
                x: 0,
                opacity: 1,
                scale: 1,
                rotate: 0,
              }}
              exit={(dir: "next" | "prev") => ({
                x: dir === "next" ? "-110%" : "110%",
                opacity: 0,
                scale: 0.9,
                rotate: dir === "next" ? -4 : 4,
              })}
              transition={{
                type: "spring",
                stiffness: 280,
                damping: 28,
                mass: 0.9,
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.15}
              onDragStart={() => setIsDragging(true)}
              onDragEnd={(_e, info) => {
                setIsDragging(false);
                if (info.offset.x < -80) goNext();
                else if (info.offset.x > 80) goPrev();
              }}
              className="absolute rounded-3xl overflow-hidden cursor-grab active:cursor-grabbing group"
              style={{
                width: "min(680px, 90vw)",
                aspectRatio: "16/9",
                zIndex: 10,
                boxShadow: "0 40px 100px rgba(0,0,0,0.8), 0 0 0 1px rgba(255,255,255,0.08)",
              }}
            >
              <img
                src={thumbnails[current].src}
                alt={thumbnails[current].title}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out pointer-events-none select-none"
                draggable={false}
              />
              {/* Cinematic overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-transparent" />

              {/* Info */}
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-mono tracking-widest border border-violet-500/40 bg-violet-500/10 text-violet-300 mb-3">
                  {thumbnails[current].tag}
                </span>
                <h3 className="text-white text-xl md:text-2xl font-display font-bold leading-snug">
                  {thumbnails[current].title}
                </h3>
              </div>

              {/* Rim light effect */}
              <div className="absolute inset-0 rounded-3xl pointer-events-none"
                style={{ boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.12), inset 0 1px 0 rgba(255,255,255,0.2)" }} />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-2 mt-12">
          {thumbnails.map((_, i) => (
            <button
              key={i}
              onClick={() => { setDirection(i > current ? "next" : "prev"); setCurrent(i); }}
              className="transition-all duration-300"
            >
              <div
                className="rounded-full transition-all duration-300"
                style={{
                  width: i === current ? "28px" : "6px",
                  height: "6px",
                  background: i === current ? "hsl(var(--primary))" : "rgba(255,255,255,0.2)",
                }}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

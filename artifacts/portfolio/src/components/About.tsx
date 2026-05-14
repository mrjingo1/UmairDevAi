import { motion } from "framer-motion";

const specialties = [
  { label: "Video Editing", icon: "🎬" },
  { label: "AI Content Creation", icon: "🤖" },
  { label: "YouTube Automation", icon: "▶" },
  { label: "Content Strategy", icon: "📈" },
  { label: "Digital Marketing", icon: "📣" },
  { label: "AI Workflows", icon: "⚡" },
  { label: "Motion Storytelling", icon: "🎥" },
  { label: "Creative Technology", icon: "✦" },
];

const stats = [
  { value: "3+", label: "Years Experience" },
  { value: "50+", label: "Projects Delivered" },
  { value: "10M+", label: "Views Generated" },
  { value: "80%", label: "Faster with AI" },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
};

export function About() {
  return (
    <section id="about" className="py-32 relative z-10 bg-[#08090d] overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-40 bg-gradient-to-b from-transparent via-violet-500/30 to-transparent" />
      </div>

      <div className="container mx-auto px-6 max-w-6xl">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-20"
        >
          <p className="text-xs font-mono tracking-[0.3em] text-violet-400/60 uppercase mb-4">About</p>
          <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 leading-tight">
            Art meets<br />
            <span className="text-gradient">Automation</span>
          </h2>
          <div className="h-[1px] w-20 bg-gradient-to-r from-violet-500 to-transparent" />
        </motion.div>

        {/* Stats row */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
        >
          {stats.map((s) => (
            <motion.div
              key={s.label}
              variants={itemVariants}
              className="glass rounded-2xl p-6 text-center border border-white/5 hover:border-violet-500/20 transition-colors duration-300 group"
            >
              <div className="text-3xl md:text-4xl font-display font-bold text-gradient mb-2 group-hover:scale-105 transition-transform duration-300">
                {s.value}
              </div>
              <div className="text-xs font-mono text-white/30 uppercase tracking-widest">{s.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Content grid */}
        <div className="grid md:grid-cols-2 gap-16 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-xl text-white/65 leading-relaxed font-light mb-8">
              In a world flooded with content, standing out requires more than good editing — it requires a{" "}
              <span className="text-white/90 font-medium">system</span>. A strategic blend of human creativity
              and artificial intelligence.
            </p>
            <p className="text-xl text-white/65 leading-relaxed font-light mb-8">
              I don't just edit videos. I{" "}
              <span className="text-gradient font-semibold">engineer attention</span>. By leveraging
              cutting-edge AI tools and proven storytelling frameworks, I build scalable content engines
              that drive real engagement and growth.
            </p>
            <div className="flex items-center gap-4 mt-10">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-500 to-indigo-500 flex items-center justify-center text-white font-bold text-sm">
                M
              </div>
              <div>
                <div className="text-white font-semibold text-sm">M. Umair</div>
                <div className="text-white/40 text-xs font-mono">Digital Creator & AI Specialist</div>
              </div>
            </div>
          </motion.div>

          {/* Specialty tags */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-wrap gap-3 content-start"
          >
            {specialties.map((item) => (
              <motion.div
                key={item.label}
                variants={itemVariants}
                whileHover={{ scale: 1.06, y: -2 }}
                className="group flex items-center gap-2 px-5 py-3 rounded-full border border-white/8 hover:border-violet-400/40 transition-all duration-300 cursor-default"
                style={{ background: "rgba(255,255,255,0.03)", backdropFilter: "blur(10px)" }}
              >
                <span className="text-xs group-hover:scale-125 transition-transform duration-300">
                  {item.icon}
                </span>
                <span className="text-white/70 group-hover:text-white/95 text-sm font-medium transition-colors duration-300">
                  {item.label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

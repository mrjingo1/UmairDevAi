import { motion } from "framer-motion";

const specialties = [
  "Video Editing",
  "AI Content Creation",
  "YouTube Automation",
  "Content Strategy",
  "Digital Marketing",
  "AI Workflows",
  "Motion Storytelling",
  "Creative Technology",
];

export function About() {
  return (
    <section id="about" className="py-32 relative z-10 bg-[#08090d]">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
            The Intersection of <br />
            <span className="text-gradient">Art & Automation</span>
          </h2>
          <div className="h-[1px] w-24 bg-primary" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-xl text-white/70 leading-relaxed font-light mb-8">
              In a world flooded with content, standing out requires more than just good editing. It requires a system. A strategic blend of human creativity and artificial intelligence.
            </p>
            <p className="text-xl text-white/70 leading-relaxed font-light">
              I don't just edit videos. I engineer attention. By leveraging cutting-edge AI tools and proven storytelling frameworks, I build scalable content engines that drive real engagement and growth.
            </p>
          </motion.div>

          <div className="flex flex-wrap gap-4 align-start content-start">
            {specialties.map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.1 * i }}
                className="glass px-6 py-3 rounded-full text-white/90 text-sm font-medium border-white/10 hover:border-primary/50 transition-colors"
              >
                {item}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

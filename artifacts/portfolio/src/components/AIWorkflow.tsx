import { motion } from "framer-motion";

const steps = [
  "Research",
  "Strategy",
  "Script",
  "AI Tools",
  "Editing",
  "Thumbnail",
  "SEO",
  "Publishing"
];

export function AIWorkflow() {
  return (
    <section id="workflow" className="py-32 bg-[#08090d] relative z-10 overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            The Content Engine
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            A systematized approach to digital creation. Predictable quality at scale.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute top-1/2 left-0 w-full h-[2px] bg-white/5 -translate-y-1/2 hidden md:block" />
          <motion.div 
            className="absolute top-1/2 left-0 h-[2px] bg-gradient-to-r from-primary via-purple-500 to-transparent -translate-y-1/2 hidden md:block"
            initial={{ width: "0%" }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />

          <div className="grid grid-cols-2 md:grid-cols-8 gap-8 relative z-10">
            {steps.map((step, i) => (
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                className="flex flex-col items-center group"
              >
                <div className="w-16 h-16 rounded-full glass flex items-center justify-center mb-6 relative group-hover:scale-110 transition-transform duration-300">
                  <div className="absolute inset-0 rounded-full border border-primary/30 scale-150 opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500" />
                  <span className="text-white font-mono text-sm">0{i + 1}</span>
                </div>
                <h4 className="text-white/80 font-medium text-sm md:text-xs lg:text-sm uppercase tracking-wider">{step}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import { motion } from "framer-motion";

const areas = [
  { title: "Faceless Content Creation", highlight: true },
  { title: "AI-Assisted Editing", highlight: false },
  { title: "YouTube Automation Workflows", highlight: true },
  { title: "Retention-Based Editing", highlight: false },
  { title: "Thumbnail Strategy", highlight: false },
  { title: "SEO Optimization", highlight: false },
  { title: "Audience Engagement", highlight: true },
  { title: "Digital Marketing", highlight: false },
  { title: "AI Workflow Systems", highlight: false },
  { title: "Content Planning", highlight: false },
];

export function SpecializedAreas() {
  return (
    <section className="py-32 bg-[#08090d] relative z-10 border-t border-white/5">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
              Domain Expertise
            </h2>
            <p className="text-white/50 max-w-md">Specialized skills combined to create a holistic digital presence.</p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {areas.map((area, i) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              whileHover={{ scale: 1.02 }}
              className={`p-6 rounded-2xl interactive ${
                area.highlight 
                  ? 'bg-gradient-to-br from-primary/20 to-purple-600/20 border border-primary/30' 
                  : 'glass'
              }`}
            >
              <h3 className={`font-medium ${area.highlight ? 'text-white text-lg' : 'text-white/70'}`}>
                {area.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

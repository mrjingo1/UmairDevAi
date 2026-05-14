import { motion } from "framer-motion";

const codeSnippet = `
class AISystem:
    def __init__(self):
        self.creative_mode = True
        self.efficiency = 100
        
    def generate_content(self, idea):
        strategy = analyze_trends(idea)
        script = generate_hook(strategy)
        video = assemble_assets(script)
        
        return self.optimize_for_algorithm(video)
        
# Initialize Umair's Content Engine
creator = AISystem()
creator.generate_content("The Future of Media")
`.trim();

export function CodingSection() {
  return (
    <section className="py-24 bg-[#08090d] relative z-10">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl glass border border-white/10 overflow-hidden"
        >
          <div className="bg-white/5 px-4 py-3 flex items-center gap-2 border-b border-white/5">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
            <span className="ml-4 text-xs font-mono text-white/40">system.py</span>
          </div>
          <div className="p-6 md:p-8 overflow-x-auto">
            <pre className="font-mono text-sm md:text-base leading-relaxed text-blue-300">
              <motion.code
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                {codeSnippet.split('\n').map((line, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <span className="text-white/20 mr-4 select-none">{i + 1}</span>
                    <span dangerouslySetInnerHTML={{ 
                      __html: line
                        .replace(/class|def|return|True/g, match => `<span class="text-purple-400">${match}</span>`)
                        .replace(/__init__|generate_content|analyze_trends|generate_hook|assemble_assets|optimize_for_algorithm/g, match => `<span class="text-blue-400">${match}</span>`)
                        .replace(/"[^"]*"/g, match => `<span class="text-green-400">${match}</span>`)
                        .replace(/self/g, '<span class="text-orange-400">self</span>')
                    }} />
                  </motion.div>
                ))}
              </motion.code>
            </pre>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

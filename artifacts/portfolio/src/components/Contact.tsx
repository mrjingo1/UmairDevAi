import { motion } from "framer-motion";
import { SiYoutube, SiGithub } from "react-icons/si";
import { Mail } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-32 bg-[#08090d] relative z-10 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-4xl text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-7xl font-display font-bold text-white mb-8 tracking-tight">
            Let's Create Something <br />
            <span className="text-gradient">Extraordinary</span>
          </h2>
          
          <p className="text-xl text-white/60 font-light mb-16 max-w-2xl mx-auto">
            Open for collaborations, freelance opportunities, and visionary projects.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a 
              href="mailto:hello@example.com" 
              className="interactive glass px-8 py-5 rounded-full flex items-center gap-4 text-white hover:bg-white/10 transition-colors w-full sm:w-auto justify-center"
            >
              <Mail className="w-5 h-5" />
              <span className="font-medium tracking-wide">Start a Conversation</span>
            </a>
          </div>

          <div className="mt-32 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-white/40 text-sm font-mono uppercase tracking-widest">
              © {new Date().getFullYear()} M. Umair. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-white/40 hover:text-white transition-colors interactive p-2">
                <SiYoutube className="w-6 h-6" />
              </a>
              <a href="#" className="text-white/40 hover:text-white transition-colors interactive p-2">
                <SiGithub className="w-6 h-6" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

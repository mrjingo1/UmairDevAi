import { motion } from "framer-motion";

import img1 from "@assets/Create_Unlimited_AI_Videos_for_FREE___Seedance_1_0_is_Veo_3_Ki_1778730504729.jpg";
import img2 from "@assets/Generate_Unlimited_Consistent_AI_Images___Videos_FREE___Secret_1778730504731.jpg";
import img3 from "@assets/How_to_Create_AI_Influencer_Long_Videos___Nano_Banana___ChatGP_1778730504731.jpg";
import img4 from "@assets/Stop_Using_Leonardo___Use_This_Free_Consistent_Ai_Image_Tool_I_1778730504732.jpg";
import img5 from "@assets/Unlimited_AI_Image_To_Video_Generator___Create_Realistic_Talki_1778730504733.jpg";

const thumbnails = [
  { src: img1, title: "Create Unlimited AI Videos", aspect: "aspect-[16/9]" },
  { src: img2, title: "Consistent AI Images", aspect: "aspect-[4/3]" },
  { src: img3, title: "AI Influencer Long Videos", aspect: "aspect-[16/9]" },
  { src: img4, title: "Free Consistent AI Tool", aspect: "aspect-[3/4]" },
  { src: img5, title: "AI Image to Video", aspect: "aspect-[16/9]" },
  { src: "", title: "Next Project", aspect: "aspect-[4/3]", placeholder: true },
];

export function ThumbnailGallery() {
  return (
    <section id="work" className="py-32 bg-[#08090d] relative z-10">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-display font-bold text-white mb-6"
          >
            Visual Hooks
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "100px" }}
            viewport={{ once: true }}
            className="h-[2px] bg-primary mb-8"
          />
          <p className="text-white/60 max-w-2xl text-lg">Engineered for maximum CTR. Every pixel serves a purpose.</p>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {thumbnails.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`relative rounded-2xl overflow-hidden group interactive ${item.aspect} break-inside-avoid`}
            >
              {item.placeholder ? (
                <div className="w-full h-full bg-white/5 flex items-center justify-center">
                  <div className="text-white/20 font-mono tracking-widest uppercase text-sm">Incoming</div>
                </div>
              ) : (
                <>
                  <img 
                    src={item.src} 
                    alt={item.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-0 left-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <h3 className="text-white font-display font-semibold text-lg">{item.title}</h3>
                  </div>
                </>
              )}
              <div className="absolute inset-0 border border-white/10 rounded-2xl pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { useState } from "react";
import { Loader } from "@/components/Loader";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Tools } from "@/components/Tools";
import { ThumbnailGallery } from "@/components/ThumbnailGallery";
import { AIWorkflow } from "@/components/AIWorkflow";
import { CodingSection } from "@/components/CodingSection";
import { SpecializedAreas } from "@/components/SpecializedAreas";
import { Contact } from "@/components/Contact";

export default function Home() {
  const [loading, setLoading] = useState(true);

  return (
    <main className="relative bg-[#08090d] min-h-screen selection:bg-primary/30 selection:text-white">
      {loading && <Loader onComplete={() => setLoading(false)} />}
      
      <div 
        className={`transition-opacity duration-1000 ${loading ? 'opacity-0 h-screen overflow-hidden' : 'opacity-100'}`}
      >
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Tools />
        <ThumbnailGallery />
        <AIWorkflow />
        <CodingSection />
        <SpecializedAreas />
        <Contact />
      </div>
    </main>
  );
}

import { motion } from "motion/react";
import ServicesSection from "../components/ServicesSection";
import ProjectGallery from "../components/ProjectGallery";
import CallToAction from "../components/CallToAction";
import { projectsData, servicesData } from "../data";

export default function HomePage() {
  return (
    <div id="top" className="flex flex-col gap-16 md:gap-24 w-full">
      {/* Hero Section */}
      <section className="pt-20 md:pt-32 pb-16 flex flex-col items-start w-full min-h-[60vh] justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {/* UPDATED: Better contrast for light and dark mode instead of white/40 */}
          <span className="inline-block mb-4 text-[10px] uppercase tracking-[0.3em] font-medium text-zinc-700 dark:text-zinc-300">
            Available for new projects
          </span>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-5xl sm:text-7xl md:text-8xl font-serif italic leading-[0.9] tracking-tight text-zinc-900 dark:text-white mb-6 max-w-4xl"
        >
          {/* UPDATED: Replaced low opacity with direct text colors for better readability */}
          Crafting digital experiences with <span className="text-zinc-500 dark:text-zinc-400">precision</span> and performance.
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-sm md:text-base text-zinc-600 dark:text-white/60 max-w-2xl mb-12 leading-relaxed"
        >
          I'm a frontend developer specializing in responsive architectures, smooth animations, and optimized load speeds. I build robust web apps that look as good as they perform.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap gap-4"
        >
          <a href="#work" className="w-full sm:w-auto py-3 px-8 border border-zinc-300 dark:border-white/20 text-[10px] uppercase font-bold tracking-[0.2em] hover:bg-zinc-900 hover:text-white dark:hover:bg-white dark:hover:text-black transition-all text-center">
            View Projects
          </a>
          <a href="#contact" className="w-full sm:w-auto py-3 px-8 text-[10px] uppercase font-bold tracking-[0.2em] text-zinc-600 dark:text-white/60 hover:text-zinc-900 dark:hover:text-white transition-all flex items-center justify-center">
            Get in touch
          </a>
        </motion.div>
      </section>

      <ServicesSection services={servicesData} />
      <ProjectGallery projects={projectsData} />
      <CallToAction />
    </div>
  );
}
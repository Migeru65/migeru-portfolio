import { motion } from "motion/react";

export default function CallToAction() {
  return (
    <section id="contact" className="py-24 md:py-32 w-full relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-zinc-100 dark:to-[#111111] pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-4 relative z-10 text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col items-center w-full"
        >
          <span className="inline-block py-1 px-3 mb-6 text-[10px] uppercase tracking-[0.3em] font-bold text-zinc-500 dark:text-white/40">
            Open for new opportunities
          </span>
          
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-serif italic tracking-tight text-zinc-900 dark:text-white mb-6">
            Let's Work Together
          </h2>
          
          <p className="text-sm md:text-base text-zinc-600 dark:text-white/60 max-w-2xl mb-12 leading-relaxed">
            I specialize in building distinct, high-performance web applications that convert. Whether you need a headless e-commerce store, a robust SaaS landing page, or a complex React application, let's discuss your project.
          </p>
          
          <a 
            href="http://www.fiverr.com/s/996NRND" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center gap-3 w-full sm:w-auto py-4 px-10 border border-zinc-300 dark:border-white/20 text-xs uppercase font-bold tracking-[0.2em] bg-zinc-900 text-white dark:bg-white dark:text-black hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-all shadow-md hover:shadow-xl hover:-translate-y-1"
          >
            <svg 
              viewBox="0 0 24 24" 
              fill="currentColor" 
              className="w-5 h-5 transition-transform group-hover:scale-110"
            >
              {/* Simplified Fiverr-like circle icon */}
              <circle cx="12" cy="12" r="10" />
              <path d="M12 6a2 2 0 100 4 2 2 0 000-4zM8 12h8v2H8zm0 4h5v2H8z" fill="white" className="dark:fill-black" />
            </svg>
            Message Me on Fiverr
          </a>
        </motion.div>
      </div>
    </section>
  );
}

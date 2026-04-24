import { ServiceData } from "../types";
import { Code, ShoppingCart, Layout } from "lucide-react";
import { motion } from "motion/react";

interface ServicesSectionProps {
  services: ServiceData[];
}

export default function ServicesSection({ services }: ServicesSectionProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "code": return <Code className="w-6 h-6 text-zinc-900 dark:text-white/80" />;
      case "shopping-cart": return <ShoppingCart className="w-6 h-6 text-zinc-900 dark:text-white/80" />;
      case "layout": return <Layout className="w-6 h-6 text-zinc-900 dark:text-white/80" />;
      default: return null;
    }
  };

  return (
    <section className="py-16 w-full" id="services">
      <div className="flex justify-between items-baseline mb-8">
        <h2 className="text-[10px] uppercase tracking-[0.4em] font-bold text-zinc-500 dark:text-white/40">Core Expertise</h2>
        <span className="text-xs font-mono text-zinc-500 dark:text-white/40">01 — 0{services.length}</span>
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {services.map((service, index) => (
          <motion.div 
            key={service.id}
            variants={itemVariants}
            className="group flex flex-col bg-white dark:bg-[#111111] border border-zinc-200 dark:border-white/5 p-6 md:p-8 h-full hover:shadow-xl transition-all duration-300 relative"
          >
            {/* Minimalist icon representation */}
            <div className="mb-6 opacity-60 group-hover:opacity-100 transition-opacity">
               {getIcon(service.icon)}
            </div>
            
            <h3 className="text-xl font-serif italic mb-3 text-zinc-900 dark:text-white">{service.title}</h3>
            <p className="text-[11px] text-zinc-600 dark:text-white/60 leading-normal mb-0">{service.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

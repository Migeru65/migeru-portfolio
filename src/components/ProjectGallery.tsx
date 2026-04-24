import { ProjectData } from "../types";
import { ExternalLink, Github } from "lucide-react";
import { motion } from "motion/react";

interface ProjectGalleryProps {
  projects: ProjectData[];
}

export default function ProjectGallery({ projects }: ProjectGalleryProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <section className="py-16 w-full" id="work">
      <div className="flex justify-between items-baseline mb-8">
        <h2 className="text-[10px] uppercase tracking-[0.4em] font-bold text-zinc-500 dark:text-white/40">Selected Case Studies</h2>
        <span className="text-xs font-mono text-zinc-500 dark:text-white/40">01 — 0{projects.length}</span>
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {projects.map((project) => (
          <motion.div 
            key={project.id}
            variants={itemVariants}
            className="group flex flex-col bg-white dark:bg-[#111111] border border-zinc-200 dark:border-white/5 p-6 hover:shadow-xl transition-all duration-300 relative"
          >
            {/* Thumbnail */}
            <div className="relative h-40 w-full overflow-hidden bg-zinc-100 dark:bg-[#1A1A1A] mb-6 border border-zinc-200 dark:border-white/10 group-hover:dark:border-white/20 transition-colors">
              <img 
                src={project.image} 
                alt={`${project.title} thumbnail`}
                loading="lazy"
                decoding="async"
                className="object-cover w-full h-full transform group-hover:scale-[1.03] transition-transform duration-700 ease-in-out opacity-80 group-hover:opacity-100"
              />
            </div>

            {/* Content */}
            <div className="flex flex-col flex-grow">
              <h3 className="text-lg font-serif italic mb-3 text-zinc-900 dark:text-white">{project.title}</h3>
              <p className="text-[11px] text-zinc-600 dark:text-white/60 leading-normal mb-4 flex-grow">{project.description}</p>
              
              {/* Highlight */}
              <div className="mb-6 border-l-2 border-zinc-300 dark:border-white/20 pl-3">
                <span className="text-[9px] uppercase tracking-[0.2em] font-bold text-zinc-900 dark:text-white/80 block mb-1">Architecture Note</span>
                <p className="text-[10px] text-zinc-600 dark:text-white/50 leading-relaxed">{project.readmeHighlight}</p>
              </div>

              <div className="mt-auto">
                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech) => (
                    <span 
                      key={tech} 
                      className="px-2 py-0.5 bg-zinc-100 dark:bg-white/10 text-[9px] uppercase tracking-wider text-zinc-600 dark:text-white/60"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex items-center gap-3">
                  {project.liveUrl && (
                    <a 
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3 border border-zinc-300 dark:border-white/20 text-[10px] uppercase font-bold tracking-[0.2em] hover:bg-zinc-900 hover:text-white dark:hover:bg-white dark:hover:text-black transition-all text-center flex items-center justify-center gap-2"
                    >
                      <ExternalLink className="w-3 h-3" />
                      View Website Example
                    </a>
                  )}
                  {project.githubUrl && (
                    <a 
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                       className="p-3 border border-zinc-300 dark:border-white/20 text-[10px] uppercase font-bold tracking-[0.2em] text-zinc-600 dark:text-white/60 hover:text-zinc-900 dark:hover:text-white transition-all flex items-center justify-center"
                    >
                      <Github className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

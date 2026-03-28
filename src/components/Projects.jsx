import { motion } from 'framer-motion';
import { Github } from 'lucide-react';
import { projects } from '../data/portfolio';
import SectionHeading from './SectionHeading';

export default function Projects() {
  return (
    <section id="projects" className="px-4 py-20 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Featured Work"
          title="Projects designed to feel polished, useful, and production-minded."
          description="Each project reflects an emphasis on interface quality, dependable functionality, and practical value. The presentation here is intentionally premium to mirror the build philosophy."
        />
        <div className="grid gap-6 xl:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ rotateX: 6, rotateY: -6, y: -8 }}
              style={{ transformStyle: 'preserve-3d' }}
              className="group relative overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white/80 p-5 shadow-[0_20px_60px_rgba(148,163,184,0.16)] backdrop-blur-xl dark:border-white/10 dark:bg-white/5 dark:shadow-panel"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${project.accent}`} />
              <div className="relative">
                <div className="rounded-[1.5rem] border border-slate-200 bg-white/90 p-6 dark:border-white/10 dark:bg-slate-950/80">
                  <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.22em] text-slate-400">
                    <span>Case Study</span>
                    <span>0{index + 1}</span>
                  </div>
                  <div className="mt-6 overflow-hidden rounded-[1.5rem] border border-slate-200 bg-slate-100 dark:border-white/10 dark:bg-gradient-to-br dark:from-slate-900 dark:via-slate-800 dark:to-slate-950">
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      className="h-52 w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="mt-6 font-display text-2xl text-slate-950 dark:text-white">{project.title}</h3>
                  <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">{project.description}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span key={tech} className="rounded-full border border-slate-200 bg-slate-100 px-3 py-1 text-xs text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-200">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="mt-8 flex flex-wrap gap-3">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-900 shadow-sm hover:border-sky-400/40 dark:border-white/10 dark:bg-white/5 dark:text-white"
                    >
                      <Github className="h-4 w-4" />
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

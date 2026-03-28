import { motion } from 'framer-motion';
import { skills } from '../data/portfolio';
import SectionHeading from './SectionHeading';

export default function Skills() {
  return (
    <section id="skills" className="px-4 py-20 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Capabilities"
          title="A toolkit built for scalable, polished software."
          description="I work comfortably across frontend, backend, Android, and cloud deployment workflows. The stack below reflects the tools I lean on to ship dependable experiences."
        />
        <div className="grid gap-6 lg:grid-cols-2">
          {skills.map(({ category, icon: Icon, items }, index) => (
            <motion.article
              key={category}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              className="rounded-[2rem] border border-slate-200/80 bg-white/80 p-6 shadow-[0_20px_60px_rgba(148,163,184,0.16)] backdrop-blur-xl dark:border-white/10 dark:bg-white/5 dark:shadow-panel"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500/20 to-violet-500/20 text-sky-300">
                  <Icon className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.24em] text-slate-400">Category</p>
                  <h3 className="mt-1 font-display text-2xl text-slate-950 dark:text-white">{category}</h3>
                </div>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                {items.map((item) => (
                  <motion.span
                    key={item}
                    whileHover={{ y: -4, rotate: -1 }}
                    className="rounded-full border border-slate-200 bg-slate-100/90 px-4 py-2 text-sm text-slate-700 dark:border-white/10 dark:bg-slate-950/70 dark:text-slate-200"
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

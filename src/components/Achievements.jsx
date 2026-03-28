import { motion } from 'framer-motion';
import { achievements } from '../data/portfolio';
import SectionHeading from './SectionHeading';

export default function Achievements() {
  return (
    <section id="achievements" className="px-4 py-20 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Wins & Proof"
          title="Signals of consistency, impact, and technical growth."
          description="This section highlights practical outcomes and the habits behind them, from user adoption to sustained problem-solving discipline."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {achievements.map(({ title, description, icon: Icon }, index) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
                className="rounded-[2rem] border border-slate-200/80 bg-white/80 p-6 shadow-[0_20px_60px_rgba(148,163,184,0.16)] backdrop-blur-xl dark:border-white/10 dark:bg-white/5 dark:shadow-panel"
            >
              <div className="flex items-start gap-4">
                <div className="mt-1 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500/20 to-violet-500/20 text-sky-300">
                  <Icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-display text-2xl text-slate-950 dark:text-white">{title}</h3>
                  <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">{description}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

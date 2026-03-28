import { motion } from 'framer-motion';
import { aboutCards, personalInfo } from '../data/portfolio';
import SectionHeading from './SectionHeading';

export default function About() {
  return (
    <section id="about" className="px-4 py-20 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="About Me"
          title="Thoughtful engineering with a strong product instinct."
          description="I enjoy building software that feels as reliable as it looks. My approach blends performance, clarity, and practical problem-solving across modern web and Android platforms."
        />
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white/80 p-6 shadow-[0_20px_60px_rgba(148,163,184,0.16)] backdrop-blur-xl dark:border-white/10 dark:bg-white/5 dark:shadow-panel"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-sky-500/10 via-transparent to-violet-500/10" />
            <div className="relative">
              <p className="text-sm uppercase tracking-[0.28em] text-sky-700 dark:text-sky-300">Profile</p>
              <p className="mt-6 text-lg leading-8 text-slate-700 dark:text-slate-200">
                I&apos;m {personalInfo.name}, a builder who enjoys taking ideas from concept to production with clean architecture and visual polish. Whether it&apos;s an Android app or a full stack web platform, I care about intuitive UX, maintainable systems, and shipping work that creates measurable value.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  ['Build Style', 'Clean systems, strong UX, reliable delivery'],
                  ['Preferred Work', 'Products that solve practical user problems'],
                  ['Strength', 'Balancing frontend polish with backend structure'],
                  ['Mindset', 'Iterate fast, ship thoughtfully, improve continuously'],
                ].map(([label, value]) => (
                  <div key={label} className="rounded-[1.5rem] border border-slate-200 bg-slate-50/90 p-4 dark:border-white/10 dark:bg-slate-950/50">
                    <p className="text-[11px] uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">{label}</p>
                    <p className="mt-2 text-sm leading-6 text-slate-700 dark:text-slate-200">{value}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <div className="grid gap-5">
            {aboutCards.map(({ title, description, icon: Icon }, index) => (
              <motion.article
                key={title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                className="group rounded-[2rem] border border-slate-200/80 bg-white/80 p-6 shadow-[0_20px_60px_rgba(148,163,184,0.16)] backdrop-blur-xl transition hover:-translate-y-1 hover:border-sky-400/30 dark:border-white/10 dark:bg-white/5 dark:shadow-panel"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500/20 to-violet-500/20 text-sky-300">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 font-display text-2xl text-slate-950 dark:text-white">{title}</h3>
                <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">{description}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

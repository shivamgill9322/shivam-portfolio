import { motion } from 'framer-motion';
import { certifications } from '../data/portfolio';
import SectionHeading from './SectionHeading';

export default function Certifications() {
  return (
    <section id="certifications" className="px-4 py-20 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Certifications"
          title="Continuous learning backed by practical implementation."
          description="These certifications reflect focused upskilling across full stack development, Android workflows, analytics, and cloud deployment."
        />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {certifications.map((certificate, index) => (
            <motion.article
              key={certificate}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="rounded-[2rem] border border-slate-200/80 bg-white/80 p-6 shadow-[0_20px_60px_rgba(148,163,184,0.16)] backdrop-blur-xl dark:border-white/10 dark:bg-white/5 dark:shadow-panel"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500/20 to-violet-500/20 text-sm font-semibold text-sky-300">
                0{index + 1}
              </div>
              <h3 className="mt-6 font-display text-xl text-slate-950 dark:text-white">{certificate}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
                Credential-focused learning applied to real product work and portfolio-ready execution.
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

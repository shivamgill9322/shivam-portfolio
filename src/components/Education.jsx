import { motion } from 'framer-motion';
import { education } from '../data/portfolio';
import SectionHeading from './SectionHeading';

export default function Education() {
  return (
    <section id="education" className="px-4 py-20 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Education"
          title="A foundation shaped by engineering discipline and curiosity."
          description="The timeline below highlights the academic path that supported my development as a practical, product-focused engineer."
        />
        <div className="relative mx-auto max-w-3xl">
          <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-sky-400/70 via-violet-400/30 to-transparent sm:left-1/2" />
          <div className="space-y-8">
            {education.map((item, index) => (
              <motion.article
                key={`${item.year}-${item.title}`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.55, delay: index * 0.1 }}
                className={`relative ml-10 rounded-[2rem] border border-slate-200/80 bg-white/80 p-6 shadow-[0_20px_60px_rgba(148,163,184,0.16)] backdrop-blur-xl dark:border-white/10 dark:bg-white/5 dark:shadow-panel sm:ml-0 sm:w-[calc(50%-1.5rem)] ${
                  index % 2 === 0 ? 'sm:mr-auto' : 'sm:ml-auto'
                }`}
              >
                <div className={`absolute top-10 h-4 w-4 rounded-full border-4 border-slate-950 bg-sky-400 ${index % 2 === 0 ? '-left-8 sm:-right-8 sm:left-auto' : '-left-8 sm:-left-8'}`} />
                <p className="text-[10px] uppercase tracking-[0.24em] text-slate-400">{item.year}</p>
                <h3 className="mt-3 font-display text-2xl text-slate-950 dark:text-white">{item.title}</h3>
                <p className="mt-2 text-sm text-sky-300">{item.subtitle}</p>
                <p className="mt-4 leading-7 text-slate-600 dark:text-slate-300">{item.description}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

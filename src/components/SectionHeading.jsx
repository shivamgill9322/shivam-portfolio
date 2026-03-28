import { motion } from 'framer-motion';

export default function SectionHeading({ eyebrow, title, description }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="mb-12 max-w-3xl text-left"
    >
      <span className="inline-flex rounded-full border border-sky-400/20 bg-sky-400/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-sky-700 dark:text-sky-200">
        {eyebrow}
      </span>
      <h2 className="mt-4 font-display text-2xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-3xl">
        {title}
      </h2>
      <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600 dark:text-slate-300">{description}</p>
    </motion.div>
  );
}

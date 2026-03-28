import { motion } from 'framer-motion';
import { Github, Linkedin, Sparkles } from 'lucide-react';
import { heroRoles, personalInfo } from '../data/portfolio';
import { useTypewriter } from '../hooks/useTypewriter';
import AnimatedButton from './AnimatedButton';

export default function Hero() {
  const typedRole = useTypewriter(heroRoles);

  return (
    <section id="home" className="relative overflow-hidden px-4 pb-20 pt-32 sm:px-6 lg:px-10 lg:pb-28 lg:pt-36">
      <div className="absolute inset-0 bg-mesh" />
      <div className="absolute left-1/2 top-24 h-72 w-72 -translate-x-1/2 rounded-full bg-violet-500/20 blur-[120px]" />
      <div className="absolute left-10 top-28 h-32 w-32 rounded-full bg-sky-400/20 blur-3xl animate-pulseGlow" />
      <div className="absolute bottom-12 right-10 h-40 w-40 rounded-full bg-cyan-400/10 blur-3xl animate-float" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: 'easeOut' }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white/85 px-4 py-2 text-sm text-sky-700 shadow-[0_20px_60px_rgba(148,163,184,0.18)] backdrop-blur-xl dark:border-white/10 dark:bg-white/5 dark:text-sky-100 dark:shadow-panel">
            <Sparkles className="h-4 w-4 text-sky-600 dark:text-sky-300" />
            Available for impactful product engineering
          </div>
          <h1 className="mt-8 max-w-4xl font-display text-4xl font-semibold leading-tight text-slate-950 dark:text-white sm:text-5xl lg:text-7xl">
            Hi, I am Shivam
          </h1>
          <div className="mt-6 h-9 text-lg text-slate-600 dark:text-slate-300 sm:text-2xl">
            <span className="text-slate-500 dark:text-slate-400">I&apos;m </span>
            <span className="font-semibold text-sky-600 dark:text-sky-300">{typedRole}</span>
            <span className="ml-1 inline-block h-6 w-px animate-pulse bg-sky-300 align-middle" />
          </div>
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-300 sm:text-lg">
            {personalInfo.name}, {personalInfo.role}. {personalInfo.tagline}. I build high-performance experiences across web and Android with clean architecture and a product-first mindset.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <AnimatedButton href="#projects">View Projects</AnimatedButton>
            <AnimatedButton href="/Shivam_CV.pdf" variant="secondary" download>
              Download CV
            </AnimatedButton>
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-4 text-sm text-slate-500 dark:text-slate-300">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-slate-200/80 bg-white/90 px-4 py-2 text-slate-700 shadow-sm hover:border-sky-400/40 hover:text-slate-950 dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:hover:text-white"
            >
              <Github className="h-4 w-4" />
              GitHub
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-slate-200/80 bg-white/90 px-4 py-2 text-slate-700 shadow-sm hover:border-sky-400/40 hover:text-slate-950 dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:hover:text-white"
            >
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: 'easeOut' }}
          className="relative mx-auto w-full max-w-xl"
        >
          <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-sky-500/20 to-violet-500/20 blur-3xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white/80 p-4 shadow-[0_20px_60px_rgba(148,163,184,0.18)] backdrop-blur-xl dark:border-white/10 dark:bg-white/5 dark:shadow-panel">
            <div className="rounded-[1.5rem] border border-slate-200 bg-white/90 p-6 dark:border-white/10 dark:bg-slate-950/75">
              <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.28em] text-slate-400">
                <span>Developer Snapshot</span>
                <span>{personalInfo.location}</span>
              </div>
              <img
                src="/shivam_img.png"
                alt="Portrait of Shivam Gill"
                loading="lazy"
                className="mt-6 h-[24rem] w-full rounded-[1.5rem] object-cover object-top shadow-2xl ring-1 ring-white/10"
              />
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {[
                  ['Core Stack', 'React, Node, Android'],
                  ['Delivery Style', 'Fast, polished, scalable'],
                  ['Focus Area', 'UX, performance, product thinking'],
                  ['Current Goal', 'Build standout real-world products'],
                ].map(([label, value]) => (
                  <div key={label} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-slate-400">{label}</p>
                    <p className="mt-2 text-sm text-slate-800 dark:text-white">{value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

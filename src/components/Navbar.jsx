import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { navItems, personalInfo } from '../data/portfolio';
import ThemeToggle from './ThemeToggle';

export default function Navbar({ activeSection }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const linkClass = (id) =>
    `group relative text-sm font-medium transition ${
      activeSection === id ? 'text-slate-950 dark:text-white' : 'text-slate-600 hover:text-slate-950 dark:text-slate-300 dark:hover:text-white'
    }`;

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 py-4 sm:px-6 lg:px-10">
      <nav
        className={`mx-auto flex max-w-7xl items-center justify-between rounded-full border px-4 py-3 transition-all duration-300 sm:px-6 ${
          scrolled
            ? 'border-slate-200/80 bg-white/80 shadow-[0_20px_60px_rgba(148,163,184,0.18)] backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/75 dark:shadow-panel'
            : 'border-slate-200/70 bg-white/70 backdrop-blur-lg dark:border-white/8 dark:bg-white/5'
        }`}
      >
        <a href="#home" className="font-display text-lg font-semibold text-slate-950 dark:text-white">
          {personalInfo.name}
        </a>
        <div className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => (
            <a key={item.id} href={`#${item.id}`} className={linkClass(item.id)}>
              {item.label}
              <span
                className={`absolute -bottom-1 left-0 h-px bg-gradient-to-r from-sky-400 to-violet-400 transition-all duration-300 ${
                  activeSection === item.id ? 'w-full' : 'w-0 group-hover:w-full'
                }`}
              />
            </a>
          ))}
          <ThemeToggle />
        </div>
        <div className="flex items-center gap-3 lg:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            className="rounded-full border border-slate-200/80 bg-white/90 p-2 text-slate-900 shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-white"
            aria-label="Toggle navigation menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>
      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="mx-auto mt-3 max-w-7xl rounded-3xl border border-slate-200/80 bg-white/95 p-4 shadow-[0_20px_60px_rgba(148,163,184,0.18)] backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/90 dark:shadow-panel lg:hidden"
          >
            <div className="flex flex-col gap-3">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => setOpen(false)}
                  className={`rounded-2xl px-4 py-3 ${activeSection === item.id ? 'bg-slate-900 text-white dark:bg-white/10' : 'text-slate-700 dark:text-slate-300'}`}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}

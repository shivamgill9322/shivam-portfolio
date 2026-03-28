import { motion } from 'framer-motion';
import { useEffect } from 'react';
import About from './components/About';
import Achievements from './components/Achievements';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import CursorGlow from './components/CursorGlow';
import Education from './components/Education';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Preloader from './components/Preloader';
import Projects from './components/Projects';
import Skills from './components/Skills';
import { navItems } from './data/portfolio';
import { useActiveSection } from './hooks/useActiveSection';

export default function App() {
  const sectionIds = navItems.map((item) => item.id);
  const activeSection = useActiveSection(sectionIds);

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'light') {
      document.documentElement.classList.remove('dark');
      document.documentElement.style.colorScheme = 'light';
    } else {
      document.documentElement.classList.add('dark');
      document.documentElement.style.colorScheme = 'dark';
    }
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#f5f9ff] text-slate-900 transition-colors duration-300 dark:bg-ink dark:text-white">
      <Preloader />
      <CursorGlow />
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.08)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(circle_at_center,black,transparent_82%)] dark:bg-[linear-gradient(rgba(148,163,184,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.06)_1px,transparent_1px)]" />
        <div className="absolute left-[-8%] top-[-4%] h-[26rem] w-[26rem] rounded-full bg-sky-400/20 blur-[120px] dark:bg-sky-500/14" />
        <div className="absolute right-[-10%] top-[6%] h-[24rem] w-[24rem] rounded-full bg-violet-400/18 blur-[120px] dark:bg-violet-500/12" />
        <div className="absolute bottom-[-8%] left-[38%] h-[22rem] w-[22rem] rounded-full bg-cyan-300/14 blur-[110px] dark:bg-cyan-400/10" />
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white/50 to-transparent dark:from-white/5" />
      </div>
      <Navbar activeSection={activeSection} />
      <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, ease: 'easeOut' }}>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Achievements />
        <Certifications />
        <Education />
        <Contact />
      </motion.main>
      <Footer />
    </div>
  );
}

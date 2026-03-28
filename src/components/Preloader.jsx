import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 1700);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <AnimatePresence>
      {loading ? (
        <motion.div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950" exit={{ opacity: 0, transition: { duration: 0.5 } }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative flex h-24 w-24 items-center justify-center rounded-[28px] border border-white/10 bg-white/5"
          >
            <motion.div
              className="absolute inset-0 rounded-[28px] bg-gradient-to-br from-sky-500/40 via-violet-500/30 to-cyan-400/20 blur-xl"
              animate={{ rotate: 360 }}
              transition={{ duration: 8, ease: 'linear', repeat: Infinity }}
            />
            <span className="relative font-display text-3xl font-bold text-white">SG</span>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

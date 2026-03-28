import { MoonStar, SunMedium } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(document.documentElement.classList.contains('dark'));

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains('dark'));
  }, []);

  const toggleTheme = () => {
    document.documentElement.classList.toggle('dark');
    const darkModeEnabled = document.documentElement.classList.contains('dark');
    document.documentElement.style.colorScheme = darkModeEnabled ? 'dark' : 'light';
    localStorage.setItem('theme', darkModeEnabled ? 'dark' : 'light');
    setIsDark(darkModeEnabled);
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="rounded-full border border-slate-200/80 bg-white/90 p-2 text-slate-700 shadow-sm transition hover:border-sky-400/50 hover:text-slate-950 dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:text-white"
      aria-label="Toggle theme"
    >
      {isDark ? <SunMedium className="h-4 w-4" /> : <MoonStar className="h-4 w-4" />}
    </button>
  );
}

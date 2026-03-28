import { Github, Linkedin, Mail } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

export default function Footer() {
  const links = [
    { label: 'GitHub', href: personalInfo.github, icon: Github },
    { label: 'LinkedIn', href: personalInfo.linkedin, icon: Linkedin },
    { label: 'Email', href: `mailto:${personalInfo.email}`, icon: Mail },
  ];

  return (
    <footer className="px-4 pb-10 pt-6 sm:px-6 lg:px-10">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-4 rounded-[2rem] border border-slate-200/80 bg-white/80 px-6 py-5 text-sm text-slate-500 shadow-[0_20px_60px_rgba(148,163,184,0.16)] backdrop-blur-xl sm:flex-row sm:items-center dark:border-white/10 dark:bg-white/5 dark:text-slate-400 dark:shadow-panel">
        <p>© {new Date().getFullYear()} Shivam Gill. Crafted for impact.</p>
        <div className="flex items-center gap-3">
          {links.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noreferrer' : undefined}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 transition hover:border-sky-400/40 hover:text-slate-950 dark:border-white/10 dark:bg-slate-950/70 dark:text-slate-300 dark:hover:text-white"
              aria-label={label}
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

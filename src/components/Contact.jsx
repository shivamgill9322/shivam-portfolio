import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';
import { useState } from 'react';
import { personalInfo } from '../data/portfolio';
import AnimatedButton from './AnimatedButton';
import SectionHeading from './SectionHeading';

const initialForm = { name: '', email: '', message: '' };

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState('idle');

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setStatus('loading');

    setTimeout(() => {
      setStatus('success');
      setForm(initialForm);
    }, 900);
  };

  return (
    <section id="contact" className="px-4 py-20 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Contact"
          title="Let’s build something ambitious and well-crafted."
          description="Reach out for freelance work, product collaboration, or developer opportunities. The form currently uses a polished mock submission flow and can be swapped to EmailJS quickly."
        />
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55 }}
            className="rounded-[2rem] border border-slate-200/80 bg-white/80 p-6 shadow-[0_20px_60px_rgba(148,163,184,0.16)] backdrop-blur-xl dark:border-white/10 dark:bg-white/5 dark:shadow-panel"
          >
            <div className="space-y-5">
              {[
                { icon: Mail, label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}` },
                { icon: Phone, label: 'Phone', value: personalInfo.phone, href: `tel:${personalInfo.phone}` },
                { icon: Github, label: 'GitHub', value: 'shivamgill9322', href: personalInfo.github },
                { icon: Linkedin, label: 'LinkedIn', value: 'shivamgill9322', href: personalInfo.linkedin },
              ].map(({ icon: Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noreferrer' : undefined}
                  className="flex items-center gap-4 rounded-[1.5rem] border border-slate-200 bg-white p-4 transition hover:border-sky-400/40 dark:border-white/10 dark:bg-slate-950/75"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500/20 to-violet-500/20 text-sky-300">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.22em] text-slate-400">{label}</p>
                    <p className="mt-1 text-sm text-slate-800 dark:text-white">{value}</p>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55 }}
            onSubmit={handleSubmit}
            className="rounded-[2rem] border border-slate-200/80 bg-white/80 p-6 shadow-[0_20px_60px_rgba(148,163,184,0.16)] backdrop-blur-xl dark:border-white/10 dark:bg-white/5 dark:shadow-panel"
          >
            <div className="grid gap-5">
              <label className="grid gap-2">
                <span className="text-sm font-medium text-slate-700 dark:text-slate-200">Name</span>
                <input
                  required
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-sky-400/60 dark:border-white/10 dark:bg-slate-950/75 dark:text-white"
                  placeholder="Your name"
                />
              </label>
              <label className="grid gap-2">
                <span className="text-sm font-medium text-slate-700 dark:text-slate-200">Email</span>
                <input
                  required
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-sky-400/60 dark:border-white/10 dark:bg-slate-950/75 dark:text-white"
                  placeholder="your@email.com"
                />
              </label>
              <label className="grid gap-2">
                <span className="text-sm font-medium text-slate-700 dark:text-slate-200">Message</span>
                <textarea
                  required
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows="6"
                  className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-sky-400/60 dark:border-white/10 dark:bg-slate-950/75 dark:text-white"
                  placeholder="Tell me about your project or opportunity..."
                />
              </label>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <AnimatedButton type="submit">{status === 'loading' ? 'Sending...' : 'Send Message'}</AnimatedButton>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  {status === 'success' ? 'Mock message sent successfully.' : 'Accessible form with mock API flow.'}
                </p>
              </div>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

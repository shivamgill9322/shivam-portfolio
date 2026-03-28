import { ArrowRight } from 'lucide-react';
import { useState } from 'react';

export default function AnimatedButton({
  children,
  href,
  variant = 'primary',
  icon = true,
  className = '',
  disabled = false,
  download = false,
  onClick,
  type = 'button',
}) {
  const [ripple, setRipple] = useState(null);

  const baseClass =
    'group relative inline-flex items-center justify-center overflow-hidden rounded-full border px-5 py-3 text-sm font-semibold transition duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400 disabled:cursor-not-allowed';
  const styles =
    variant === 'secondary'
      ? 'border-slate-200/80 bg-white/90 text-slate-900 shadow-sm hover:border-sky-400/60 hover:bg-white dark:border-white/12 dark:bg-white/5 dark:text-white'
      : 'border-sky-400/40 bg-gradient-to-r from-sky-500 to-violet-500 text-white shadow-glow hover:scale-[1.02]';

  const handlePointerDown = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    setRipple({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
      key: Date.now(),
    });
  };

  const content = (
    <>
      <span
        key={ripple?.key}
        className={ripple ? 'pointer-events-none absolute h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/30 animate-ping' : 'hidden'}
        style={ripple ? { left: ripple.x, top: ripple.y } : undefined}
      />
      <span className="relative z-10 inline-flex items-center gap-2">
        {children}
        {icon ? <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" /> : null}
      </span>
    </>
  );

  if (href) {
    return (
      <a
        href={disabled ? undefined : href}
        download={download}
        target={download || href.startsWith('#') ? undefined : '_blank'}
        rel={download || href.startsWith('#') ? undefined : 'noreferrer'}
        aria-disabled={disabled}
        onMouseDown={handlePointerDown}
        onClick={onClick}
        className={`${baseClass} ${styles} ${disabled ? 'pointer-events-none opacity-50' : ''} ${className}`}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      disabled={disabled}
      onMouseDown={handlePointerDown}
      onClick={onClick}
      className={`${baseClass} ${styles} ${className}`}
    >
      {content}
    </button>
  );
}

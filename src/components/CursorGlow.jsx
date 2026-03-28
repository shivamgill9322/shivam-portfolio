import { useEffect, useState } from 'react';

export default function CursorGlow() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updatePosition = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('pointermove', updatePosition);
    return () => window.removeEventListener('pointermove', updatePosition);
  }, []);

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-10 hidden lg:block">
      <div
        className="absolute h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-400/10 blur-3xl transition-transform duration-150"
        style={{ left: position.x, top: position.y }}
      />
    </div>
  );
}

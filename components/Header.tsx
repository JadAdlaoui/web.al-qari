'use client';

import { useEffect, useState } from 'react';
export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-shadow duration-300"
      style={{
        background: 'rgba(250,250,248,0.92)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        boxShadow: scrolled ? '0 2px 20px rgba(12,59,46,0.08)' : 'none',
      }}
    >
      <nav className="max-w-5xl mx-auto px-5 h-20 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3" aria-label="Al-Qari home">
          <img
            src="/logo white2.png"
            alt="Al-Qari logo"
            className="h-16 w-auto"
          />
          <div className="flex flex-col leading-none">
            <span
              className="text-2xl font-bold"
              style={{ color: 'var(--gold)', fontFamily: 'Georgia, serif', direction: 'rtl' }}
              lang="ar"
            >
              القارئ
            </span>
            <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: 'var(--primary)' }}>
              Al-Qari
            </span>
          </div>
        </a>

        <a
          href="#waitlist"
          className="px-5 py-2 rounded-full text-sm font-semibold text-white transition-all"
          style={{ background: 'var(--primary)' }}
          onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--primary-mid)')}
          onMouseLeave={(e) => (e.currentTarget.style.background = 'var(--primary)')}
        >
          Aanmelden
        </a>
      </nav>
    </header>
  );
}

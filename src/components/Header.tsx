'use client';

import { useLocale, useTranslations } from 'next-intl';
import LanguageToggle from './LanguageToggle';
import ThemeToggle from './ThemeToggle';
import { useState, useEffect } from 'react';

export default function Header() {
  const t = useTranslations('header');
  const locale = useLocale();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? 'var(--bg-secondary)' : 'transparent',
        borderBottom: scrolled ? '1px solid var(--border-color)' : 'none',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
      }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <a href={`/${locale}`} className="font-display text-lg font-semibold tracking-tight" style={{ color: scrolled ? 'var(--text-primary)' : '#fff' }}>
          Cetățuia Park
        </a>

        <nav id="site-navigation" className={`${menuOpen ? 'flex' : 'hidden'} absolute top-16 left-0 right-0 p-5 flex-col md:static md:p-0 md:flex md:flex-row items-center gap-6`} style={{background: menuOpen ? 'var(--bg-secondary)' : undefined}}>
          {(['gallery', 'reviews', 'map', 'nearby'] as const).map((section) => (
            <a
              key={section}
              href={`/${locale}#${section}`}
              onClick={() => setMenuOpen(false)}
              className="text-sm font-medium transition-colors"
              style={{ color: scrolled || menuOpen ? 'var(--text-secondary)' : 'rgba(255,255,255,0.85)' }}
            >
              {t(section)}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button type="button" className="md:hidden px-2 py-1 rounded" style={{background:'var(--bg-secondary)',color:'var(--text-primary)'}} aria-controls="site-navigation" aria-expanded={menuOpen} aria-label={locale==='zh'?'导航菜单':'Navigation menu'} onClick={()=>setMenuOpen(!menuOpen)}>☰</button>
          <ThemeToggle />
          <LanguageToggle />
        </div>
      </div>
    </header>
  );
}

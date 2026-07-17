import { ArrowRight, Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { navigationItems } from '../content/siteContent';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8">
      <div
        className={`mx-auto max-w-7xl transition-all duration-300 ${
          scrolled
            ? 'rounded-3xl border border-white/10 bg-[rgba(5,10,20,0.86)] shadow-[0_24px_80px_rgba(2,6,23,0.45)] backdrop-blur-2xl'
            : 'rounded-3xl border border-white/6 bg-[rgba(5,10,20,0.54)] backdrop-blur-xl'
        }`}
      >
        <div className="flex items-center justify-between gap-4 px-4 py-3 sm:px-6">
          <a href="#" className="flex min-w-0 items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 shadow-[0_10px_30px_rgba(6,182,212,0.12)]">
              <img src="/logo.png" alt="ZENTK" className="h-8 w-8 object-contain" />
            </div>
            <div className="min-w-0">
              <div className="font-display text-lg tracking-[-0.03em] text-white">ZENTK</div>
              <div className="hidden text-[11px] uppercase tracking-[0.28em] text-slate-400 sm:block">
                Hard Tech Globalization
              </div>
            </div>
          </a>

          <div className="hidden items-center gap-1 rounded-full border border-white/8 bg-white/4 px-2 py-2 lg:flex">
            {navigationItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="rounded-full px-4 py-2 text-sm font-medium tracking-[0.01em] text-slate-300 transition-all duration-200 hover:bg-white/8 hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="hidden items-center gap-3 lg:flex">
            <div className="text-right">
              <div className="text-[11px] uppercase tracking-[0.28em] text-slate-500">
                Response window
              </div>
              <div className="text-sm font-medium text-slate-200">Within 24 business hours</div>
            </div>
            <a href="#contact" className="btn-primary inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold text-white">
              Consult Our Experts
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white lg:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {menuOpen ? (
          <div className="border-t border-white/10 px-4 pb-4 pt-3 lg:hidden">
            <div className="flex flex-col gap-2 rounded-3xl border border-white/8 bg-[rgba(255,255,255,0.03)] p-3">
              {navigationItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-2xl px-4 py-3 text-sm font-medium text-slate-200 transition-colors hover:bg-white/6 hover:text-white"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="btn-primary mt-2 inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-3 text-sm font-semibold text-white"
              >
                Consult Our Experts
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        ) : null}
      </div>
    </nav>
  );
}

export function useReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    );

    const elements = document.querySelectorAll('.reveal');
    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);
}

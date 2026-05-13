import { useEffect, useState } from 'react';

// ============================================================
// Navbar
// ============================================================
export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Why ZENTK', href: '#why' },
    { label: 'Global Reach', href: '#global' },
    { label: 'Case Studies', href: '#cases' },
    { label: 'News', href: '#news' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 navbar-blur ${
        scrolled ? 'bg-[#030712]/90 border-b border-[#1e2d42]' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-18">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="relative">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-emerald-500 flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-sm">Z</span>
              </div>
              <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-blue-500 to-emerald-500 opacity-0 group-hover:opacity-30 blur-md transition-opacity" />
            </div>
            <span className="text-white font-bold text-lg tracking-tight">
              ZENTK
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-7">
            {navLinks.map(link => (
              <a
                key={link.label}
                href={link.href}
                className="text-[#94a3b8] text-sm hover:text-white transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden lg:block">
            <a
              href="#contact"
              className="btn-primary inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-white text-sm font-semibold"
            >
              Consult Our Experts
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          {/* Mobile menu btn */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {menuOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              }
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="lg:hidden py-4 border-t border-[#1e2d42] flex flex-col gap-3">
            {navLinks.map(link => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-[#94a3b8] hover:text-white text-sm py-1 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="btn-primary inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-white text-sm font-semibold mt-2"
            >
              Consult Our Experts
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}

// ============================================================
// Reveal hook
// ============================================================
export function useReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    );

    const elements = document.querySelectorAll('.reveal');
    elements.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

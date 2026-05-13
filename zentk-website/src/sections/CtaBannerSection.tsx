export function CtaBannerSection() {
  return (
    <section className="py-20 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #0a1628 0%, #0d1f3c 50%, #071224 100%)' }}>
      {/* Bg effects */}
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent" />

      {/* Glow orbs */}
      <div className="absolute left-1/4 top-1/2 -translate-y-1/2 w-72 h-72 rounded-full bg-blue-500/8 blur-3xl pointer-events-none" />
      <div className="absolute right-1/4 top-1/2 -translate-y-1/2 w-56 h-56 rounded-full bg-emerald-500/8 blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center relative">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm font-medium mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          Now Onboarding New Partners for 2025
        </div>

        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-5 tracking-tight">
          Your Product Deserves a{' '}
          <span className="gradient-text">Global Audience</span>
        </h2>

        <p className="text-[#94a3b8] text-lg max-w-2xl mx-auto mb-10">
          Join the hardware brands already scaling in Europe and North America.
          The window to capture first-mover advantage is now.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            className="btn-primary inline-flex items-center gap-2 px-10 py-4 rounded-xl text-white font-bold text-lg"
          >
            Consult Our Experts
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <div className="flex items-center gap-2 text-[#64748b] text-sm">
            <svg className="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            Response within 24 hours
          </div>
        </div>
      </div>
    </section>
  );
}

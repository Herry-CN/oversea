import { useEffect, useRef } from 'react';

export function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Animated particle network on canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const particles: { x: number; y: number; vx: number; vy: number; size: number }[] = [];
    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 1.5 + 0.5,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(59,130,246,0.5)';
        ctx.fill();
      });

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 130) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(59,130,246,${0.15 * (1 - dist / 130)})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }
      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  const stats = [
    { value: '120+', label: 'Cities Covered' },
    { value: '8', label: 'Key Markets' },
    { value: '3', label: 'Continents' },
    { value: '2023', label: 'Focused on Hard Tech' },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#030712]">
      {/* Particle canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-60"
        style={{ zIndex: 1 }}
      />

      {/* Radial gradient bg */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(59,130,246,0.12) 0%, transparent 70%)',
          zIndex: 2,
        }}
      />
      {/* Grid bg */}
      <div className="absolute inset-0 bg-grid opacity-50" style={{ zIndex: 2 }} />

      {/* Flowing line accent */}
      <div className="absolute top-1/2 left-0 right-0 h-px overflow-hidden" style={{ zIndex: 3 }}>
        <div className="h-full bg-gradient-to-r from-transparent via-blue-500/40 to-transparent animate-flow" />
      </div>
      <div className="absolute top-1/3 left-0 right-0 h-px overflow-hidden" style={{ zIndex: 3 }}>
        <div className="h-full bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent animate-flow" style={{ animationDelay: '1.5s' }} />
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-32 text-center" style={{ zIndex: 10 }}>
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm font-medium mb-8 animate-fade-in">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          Hard Tech Global Go-To-Market Partner
        </div>

        {/* Main heading */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white tracking-tight mb-6 animate-slide-up">
          Take Your{' '}
          <span className="gradient-text">AI Hardware</span>
          <br />
          to Every Corner
          <br />
          <span className="text-[#94a3b8]">of the World.</span>
        </h1>

        {/* Subheading */}
        <p className="text-lg sm:text-xl text-[#94a3b8] max-w-3xl mx-auto mb-10 leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
          ZENTK is a full-chain globalization partner for AI hardware and innovative consumer electronics —
          from <span className="text-white font-medium">regulatory compliance</span> and{' '}
          <span className="text-white font-medium">supply chain optimization</span> to{' '}
          <span className="text-white font-medium">channel distribution</span> in the EU, US, and beyond.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20 animate-slide-up" style={{ animationDelay: '0.3s' }}>
          <a
            href="#contact"
            className="btn-primary inline-flex items-center gap-2 px-8 py-4 rounded-xl text-white text-base font-semibold"
          >
            Consult Our Experts
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a
            href="#services"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-[#1e2d42] text-[#94a3b8] hover:text-white hover:border-blue-500/50 text-base font-medium transition-all duration-300"
          >
            Explore Services
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-3xl mx-auto">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className="p-5 rounded-xl border border-[#1e2d42] bg-[#0a1120]/60 backdrop-blur-sm"
              style={{ animationDelay: `${0.1 * i}s` }}
            >
              <div className="stat-value text-3xl font-bold mb-1">{s.value}</div>
              <div className="text-[#64748b] text-xs">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-[#475569] animate-bounce" style={{ zIndex: 10 }}>
        <span className="text-xs tracking-wider uppercase">Scroll</span>
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}

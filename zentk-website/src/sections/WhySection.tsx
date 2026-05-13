export function WhyZentkSection() {
  const pillars = [
    {
      number: '01',
      title: 'Compliance First',
      subtitle: 'The Gateway to Western Markets',
      desc: 'We understand that CE, FCC, and FDA certifications are not just checkboxes — they are the fundamental trust signals that open doors with retailers like Best Buy, MediaMarkt, and Carrefour. Our team navigates every regulatory nuance.',
      img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80',
      imgAlt: 'AI Processors and advanced hardware circuits',
    },
    {
      number: '02',
      title: 'AI Hardware Native',
      subtitle: 'Built for the Next Generation of Products',
      desc: 'From AI-accelerated edge devices to smart home ecosystems — we specialize exclusively in hard tech. Our playbooks are built on deep product knowledge, not generic export consulting.',
      img: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600&q=80',
      imgAlt: 'Smart hardware and AI chip technology',
    },
    {
      number: '03',
      title: 'Proven Channel Access',
      subtitle: 'Direct Relationships at Scale',
      desc: 'Three continents. Eight core markets. Existing relationships with MediaMarkt, Best Buy, Amazon, and regional distributors. We do not build the bridge — the bridge already exists.',
      img: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80',
      imgAlt: 'Global logistics and international shipping',
    },
  ];

  return (
    <section id="why" className="py-28 bg-[#030712] relative">
      <div className="section-divider" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-10">
        <div className="text-center mb-20 reveal">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-sm font-medium mb-6">
            Why ZENTK
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-5 tracking-tight">
            The Unfair Advantage for{' '}
            <span className="gradient-text">Hard Tech Brands</span>
          </h2>
          <p className="text-[#94a3b8] text-lg max-w-2xl mx-auto">
            Most globalization consultants are generalists. We are specialists —
            obsessively focused on hardware, compliance, and market penetration.
          </p>
        </div>

        <div className="flex flex-col gap-24">
          {pillars.map((p, i) => (
            <div
              key={p.number}
              className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-16 reveal`}
            >
              {/* Text */}
              <div className="flex-1">
                <div className="text-6xl font-black text-[#0f1a2e] mb-4 select-none">{p.number}</div>
                <p className="text-blue-400 text-sm font-semibold uppercase tracking-wider mb-2">{p.subtitle}</p>
                <h3 className="text-white text-3xl font-bold mb-5">{p.title}</h3>
                <p className="text-[#94a3b8] text-base leading-relaxed mb-8">{p.desc}</p>
                <a
                  href="#contact"
                  className="btn-primary inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white font-semibold text-sm"
                >
                  Consult Our Experts
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>

              {/* Image */}
              <div className="flex-1 relative">
                <div className="relative rounded-2xl overflow-hidden border border-[#1e2d42] glow-blue">
                  <img
                    src={p.img}
                    alt={p.imgAlt}
                    className="w-full h-64 lg:h-80 object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-emerald-500/5" />
                </div>
                {/* Decorative floating accent */}
                <div className={`absolute -z-10 w-64 h-64 rounded-full blur-3xl opacity-10 ${
                  i % 2 === 0 ? '-bottom-10 -right-10 bg-blue-500' : '-bottom-10 -left-10 bg-emerald-500'
                }`} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

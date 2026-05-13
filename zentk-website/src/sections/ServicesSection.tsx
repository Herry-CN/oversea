export function ServicesSection() {
  const services = [
    {
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      color: 'blue',
      tag: 'Compliance',
      title: 'Strategy & Compliance',
      desc: 'Deep market-entry research, international certifications (CE, FCC, FDA, RoHS, UL), and full regulatory guidance — the foundation of trust in EU and US markets.',
      items: ['CE / FCC / FDA Certification', 'Market Entry Strategy', 'IP & Trademark Registration', 'Regulatory Risk Assessment'],
    },
    {
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
            d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      color: 'green',
      tag: 'Distribution',
      title: 'Global Channel Network',
      desc: 'Integrated e-commerce, retail, trade shows, and media resources across Europe, Americas, Asia, and Africa — precision channel deployment for hardware brands.',
      items: ['Amazon US / EU Marketplace', 'MediaMarkt & Best Buy Access', 'CES & IFA Exhibition Support', 'Regional Distributor Network'],
    },
    {
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
            d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" />
        </svg>
      ),
      color: 'blue',
      tag: 'Supply Chain',
      title: 'Supply Chain Excellence',
      desc: 'End-to-end supply chain orchestration from manufacturing to last-mile delivery — optimized for speed, cost efficiency, and international compliance at scale.',
      items: ['Overseas Factory Setup', 'Quality & Compliance Audits', 'Customs & Logistics Optimization', 'Bonded Warehouse Solutions'],
    },
    {
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-2 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      color: 'green',
      tag: 'Retail',
      title: 'Retail & In-store Execution',
      desc: '"Product · Training · People · Operations" — a unified in-store activation system designed to maximize sell-through rates and build lasting brand presence in key retail accounts.',
      items: ['Retail Channel Negotiation', 'In-store Training Programs', 'Localized Marketing Campaigns', 'POS & Merchandising Design'],
    },
    {
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      color: 'blue',
      tag: 'Advisory',
      title: 'Think Tank & Advisory',
      desc: 'Board-level strategic guidance from industry veterans — covering product-market fit, brand positioning, competitor intelligence, and long-term global growth planning.',
      items: ['Go-to-Market Strategy', 'Brand Architecture', 'Competitive Intelligence', 'Long-term Advisory Retainer'],
    },
    {
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
            d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      color: 'green',
      tag: 'Growth',
      title: 'Digital & Media Growth',
      desc: 'Precision media buying, influencer marketing, and SEO/SEM tailored for tech hardware categories — driving qualified traffic and measurable demand generation in Western markets.',
      items: ['Performance Marketing (Meta / Google)', 'Tech Media & PR Outreach', 'KOL & Influencer Networks', 'Amazon A+ Content & SEO'],
    },
  ];

  return (
    <section id="services" className="py-28 bg-[#030712] relative">
      {/* Top divider */}
      <div className="section-divider mb-0" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20 reveal">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm font-medium mb-6">
            Full-Chain Services
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-5 tracking-tight">
            Everything You Need to{' '}
            <span className="gradient-text">Win Globally</span>
          </h2>
          <p className="text-[#94a3b8] text-lg max-w-2xl mx-auto">
            Not a middleman. A long-term growth partner that handles every link in the chain —
            from regulatory compliance to retail execution.
          </p>
        </div>

        {/* Service grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div
              key={s.title}
              className={`reveal reveal-delay-${(i % 4) + 1} card-hover rounded-2xl border border-[#1e2d42] bg-[#0a1120] p-7 flex flex-col gap-5`}
            >
              {/* Icon + Tag */}
              <div className="flex items-start justify-between">
                <div className={`p-3 rounded-xl ${
                  s.color === 'blue'
                    ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20'
                    : 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                }`}>
                  {s.icon}
                </div>
                <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${
                  s.color === 'blue'
                    ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20'
                    : 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                }`}>
                  {s.tag}
                </span>
              </div>

              <div>
                <h3 className="text-white font-semibold text-lg mb-2">{s.title}</h3>
                <p className="text-[#64748b] text-sm leading-relaxed">{s.desc}</p>
              </div>

              <ul className="mt-auto flex flex-col gap-2">
                {s.items.map(item => (
                  <li key={item} className="flex items-center gap-2 text-sm text-[#94a3b8]">
                    <div className={`w-1 h-1 rounded-full flex-shrink-0 ${
                      s.color === 'blue' ? 'bg-blue-400' : 'bg-emerald-400'
                    }`} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA row */}
        <div className="mt-14 text-center reveal">
          <a
            href="#contact"
            className="btn-primary inline-flex items-center gap-2 px-8 py-4 rounded-xl text-white font-semibold text-base"
          >
            Consult Our Experts
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

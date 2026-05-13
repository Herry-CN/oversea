export function GlobalSection() {
  const regions = [
    {
      name: 'Europe',
      markets: 'Germany · Italy · Hungary · Romania',
      channels: 'MediaMarkt, Carrefour, Saturn',
      focus: 'New Energy · Smart Hardware',
      color: 'blue',
      icon: '🇪🇺',
    },
    {
      name: 'North America',
      markets: 'United States (Silicon Valley / Bay Area)',
      channels: 'Best Buy, Amazon US, Target',
      focus: 'Consumer Electronics · AI Devices',
      color: 'green',
      icon: '🇺🇸',
    },
    {
      name: 'Asia Pacific',
      markets: 'Singapore · India',
      channels: 'Flipkart, Lazada, Offline Distribution',
      focus: 'Tech Startups · E-Commerce',
      color: 'blue',
      icon: '🌏',
    },
    {
      name: 'Africa',
      markets: 'Kenya',
      channels: 'Trade Channels · Infrastructure Projects',
      focus: 'Energy · Trade Facilitation',
      color: 'green',
      icon: '🌍',
    },
  ];

  const certifications = [
    { name: 'CE', desc: 'European Conformity', region: 'EU' },
    { name: 'FCC', desc: 'Federal Communications', region: 'USA' },
    { name: 'FDA', desc: 'Food & Drug Admin', region: 'USA' },
    { name: 'RoHS', desc: 'Hazardous Substances', region: 'EU' },
    { name: 'UL', desc: 'Underwriters Lab', region: 'USA' },
    { name: 'BIS', desc: 'Bureau of Indian Standards', region: 'India' },
  ];

  return (
    <section id="global" className="py-28 relative overflow-hidden" style={{ background: '#050d1a' }}>
      <div className="section-divider" />

      {/* Bg glow */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse 60% 40% at 50% 100%, rgba(16,185,129,0.06) 0%, transparent 70%)'
      }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-10">
        {/* Header */}
        <div className="text-center mb-20 reveal">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-sm font-medium mb-6">
            Global Footprint
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-5 tracking-tight">
            Four Continents,{' '}
            <span className="gradient-text">One Partner</span>
          </h2>
          <p className="text-[#94a3b8] text-lg max-w-2xl mx-auto">
            In-country resources in every major economic growth hub.
            We move fast because the connections already exist.
          </p>
        </div>

        {/* Region cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          {regions.map((r, i) => (
            <div
              key={r.name}
              className={`reveal reveal-delay-${i + 1} card-hover rounded-2xl border border-[#1e2d42] bg-[#0a1120] p-7`}
            >
              <div className="flex items-start gap-4 mb-5">
                <div className="text-3xl">{r.icon}</div>
                <div>
                  <h3 className="text-white font-bold text-xl">{r.name}</h3>
                  <p className="text-[#64748b] text-sm mt-0.5">{r.markets}</p>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <div className={`w-2 h-2 rounded-full flex-shrink-0 ${r.color === 'blue' ? 'bg-blue-400' : 'bg-emerald-400'}`} />
                  <span className="text-[#94a3b8] text-sm">
                    <span className="text-[#64748b] mr-2">Channels:</span>
                    {r.channels}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className={`w-2 h-2 rounded-full flex-shrink-0 ${r.color === 'blue' ? 'bg-blue-400' : 'bg-emerald-400'}`} />
                  <span className="text-[#94a3b8] text-sm">
                    <span className="text-[#64748b] mr-2">Focus:</span>
                    {r.focus}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Compliance certifications */}
        <div className="reveal">
          <div className="rounded-2xl border border-[#1e2d42] bg-[#0a1120] p-8 lg:p-12">
            <div className="text-center mb-10">
              <h3 className="text-white text-2xl font-bold mb-2">International Compliance Expertise</h3>
              <p className="text-[#64748b]">
                Compliance is not overhead — it's your competitive moat in Western markets.
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {certifications.map(cert => (
                <div key={cert.name} className="flex flex-col items-center p-4 rounded-xl border border-[#1e2d42] bg-[#050d1a] hover:border-blue-500/40 transition-colors">
                  <div className="text-2xl font-bold gradient-text-blue mb-1">{cert.name}</div>
                  <div className="text-[#64748b] text-xs text-center mb-1">{cert.desc}</div>
                  <div className="text-[#475569] text-xs font-medium">{cert.region}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

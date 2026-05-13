export function CaseStudiesSection() {
  const cases = [
    {
      tag: 'Southeast Asia · Tech Startup',
      title: 'Breaking into Southeast Asian Markets',
      challenge: 'The client lacked localized marketing capabilities and was experiencing slow market penetration despite a technically superior product.',
      solution: 'Deployed a dual-engine model: e-commerce platform + local retail, layered with precision KOL marketing targeting tech enthusiasts and early adopters.',
      result: '+30% Brand Penetration Rate',
      resultColor: 'blue',
      img: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&q=80',
    },
    {
      tag: 'Europe · New Energy Brand',
      title: 'Entering Germany and Italy Retail',
      challenge: 'High compliance barriers in German and Italian markets made channel entry nearly impossible without local expertise.',
      solution: 'Provided end-to-end regulatory certification guidance plus direct channel negotiation, leveraging existing retailer relationships.',
      result: '3 Top EU Retail Chains Entered',
      resultColor: 'green',
      img: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=600&q=80',
    },
    {
      tag: 'North America · Consumer Electronics',
      title: 'Launching at CES and Scaling to Retail',
      challenge: 'North American market was fiercely competitive and the brand had minimal awareness or trust with US consumers and buyers.',
      solution: 'Orchestrated a high-impact CES debut strategy combined with direct negotiations with national retail buyers.',
      result: 'Listed on Best Buy & Amazon US',
      resultColor: 'blue',
      img: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&q=80',
    },
  ];

  return (
    <section id="cases" className="py-28 bg-[#030712] relative">
      <div className="section-divider" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-10">
        <div className="text-center mb-20 reveal">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm font-medium mb-6">
            Case Studies
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-5 tracking-tight">
            Proven Results,{' '}
            <span className="gradient-text">Real Impact</span>
          </h2>
          <p className="text-[#94a3b8] text-lg max-w-2xl mx-auto">
            From Southeast Asia tech startups to European new energy brands —
            these are the outcomes that define our methodology.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {cases.map((c, i) => (
            <div
              key={c.title}
              className={`reveal reveal-delay-${i + 1} card-hover rounded-2xl border border-[#1e2d42] bg-[#0a1120] overflow-hidden flex flex-col`}
            >
              {/* Image */}
              <div className="relative h-44 overflow-hidden">
                <img src={c.img} alt={c.title} className="w-full h-full object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1120] via-[#0a1120]/40 to-transparent" />
                <div className="absolute bottom-3 left-4">
                  <span className="text-xs font-medium text-[#94a3b8] bg-[#0a1120]/80 px-2.5 py-1 rounded-full border border-[#1e2d42]">
                    {c.tag}
                  </span>
                </div>
              </div>

              <div className="p-6 flex flex-col gap-4 flex-1">
                <h3 className="text-white font-bold text-lg">{c.title}</h3>

                <div>
                  <div className="text-[#64748b] text-xs uppercase tracking-wide font-semibold mb-1.5">Challenge</div>
                  <p className="text-[#94a3b8] text-sm leading-relaxed">{c.challenge}</p>
                </div>

                <div>
                  <div className="text-[#64748b] text-xs uppercase tracking-wide font-semibold mb-1.5">Solution</div>
                  <p className="text-[#94a3b8] text-sm leading-relaxed">{c.solution}</p>
                </div>

                {/* Result */}
                <div className={`mt-auto pt-4 border-t border-[#1e2d42] flex items-center gap-3`}>
                  <div className={`w-2 h-2 rounded-full flex-shrink-0 ${c.resultColor === 'blue' ? 'bg-blue-400' : 'bg-emerald-400'}`} />
                  <span className={`font-bold text-sm ${c.resultColor === 'blue' ? 'text-blue-400' : 'text-emerald-400'}`}>
                    {c.result}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 text-center reveal">
          <a
            href="#contact"
            className="btn-primary inline-flex items-center gap-2 px-8 py-4 rounded-xl text-white font-semibold text-base"
          >
            Get Your Custom Strategy
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

export function NewsSection() {
  const posts = [
    {
      date: 'May 2025',
      tag: 'Market Insight',
      tagColor: 'blue',
      title: 'Why EU Battery Regulation 2025 Creates a Massive Opportunity for Chinese Hardware Brands',
      desc: 'The EU Battery Regulation now mandates digital product passports for all battery-powered devices. Brands that prepare early will gain a 12-18 month head start over competitors.',
      img: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=600&q=80',
    },
    {
      date: 'Apr 2025',
      tag: 'Industry Report',
      tagColor: 'green',
      title: 'The AI Hardware Boom: How Smart Camera and Edge AI Devices Are Reshaping Consumer Electronics',
      desc: 'Global shipments of AI-powered consumer hardware are forecast to hit $80B by 2027. Understanding the regulatory and distribution dynamics is critical to seizing this market.',
      img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80',
    },
    {
      date: 'Mar 2025',
      tag: 'ZENTK Insight',
      tagColor: 'blue',
      title: 'CES 2025 Takeaways: What Western Buyers Really Want From Chinese Hardware Brands',
      desc: 'After three days on the floor at CES, our team gathered firsthand intelligence on what it takes for Chinese brands to earn trust and shelf space with US and European retail buyers.',
      img: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80',
    },
  ];

  return (
    <section id="news" className="py-28 relative" style={{ background: '#050d1a' }}>
      <div className="section-divider" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16 reveal">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm font-medium mb-5">
              Intelligence & Insights
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white tracking-tight">
              Stay Ahead of{' '}
              <span className="gradient-text">the Market</span>
            </h2>
          </div>
          <a href="#" className="text-blue-400 text-sm font-medium hover:text-blue-300 transition-colors flex items-center gap-1.5 flex-shrink-0 pb-1">
            View All Articles
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((p, i) => (
            <article
              key={p.title}
              className={`reveal reveal-delay-${i + 1} card-hover rounded-2xl border border-[#1e2d42] bg-[#0a1120] overflow-hidden cursor-pointer group`}
            >
              <div className="relative h-44 overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1120]/60 to-transparent" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
                    p.tagColor === 'blue'
                      ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20'
                      : 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                  }`}>
                    {p.tag}
                  </span>
                  <span className="text-[#475569] text-xs">{p.date}</span>
                </div>
                <h3 className="text-white font-semibold text-base mb-3 line-clamp-2 group-hover:text-blue-300 transition-colors">
                  {p.title}
                </h3>
                <p className="text-[#64748b] text-sm leading-relaxed line-clamp-3">{p.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

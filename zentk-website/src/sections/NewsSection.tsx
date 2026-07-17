import { SectionHeading } from '../components/SectionHeading';
import { insightArticles } from '../content/siteContent';

export function NewsSection() {
  const [featured, ...secondary] = insightArticles;

  return (
    <section id="news" className="section-shell bg-[#050d1a]">
      <div className="section-divider" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="reveal">
          <SectionHeading
            eyebrow="Insights"
            title="Editorial thinking for teams shaping a category, not just shipping a SKU."
            accent="Market intelligence."
            description="The topics stay aligned with the current site, but the layout shifts toward a magazine-like editorial board."
          />
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.08fr_0.92fr]">
          <article className="reveal overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.035]">
            <div className="media-frame h-[420px] overflow-hidden">
              <img src={featured.image} alt={featured.title} className="h-full w-full object-cover" loading="lazy" />
              <div className="media-overlay" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <div className="inline-flex rounded-full border border-white/12 bg-black/25 px-3 py-1 text-[11px] uppercase tracking-[0.24em] text-white/80">
                  {featured.tag}
                </div>
                <h3 className="mt-4 max-w-3xl font-display text-3xl tracking-[-0.05em] text-white sm:text-4xl">
                  {featured.title}
                </h3>
                <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-200">{featured.description}</p>
                <div className="mt-4 text-[11px] uppercase tracking-[0.24em] text-slate-400">{featured.date}</div>
              </div>
            </div>
          </article>

          <div className="grid gap-6">
            {secondary.map((item, index) => (
              <article
                key={item.title}
                className={`reveal reveal-delay-${index + 2} grid gap-4 rounded-[32px] border border-white/10 bg-white/[0.035] p-4 sm:grid-cols-[180px_1fr]`}
              >
                <div className="media-frame h-48 overflow-hidden rounded-[24px] sm:h-full">
                  <img src={item.image} alt={item.title} className="h-full w-full object-cover" loading="lazy" />
                  <div className="media-overlay" />
                </div>
                <div className="flex flex-col justify-between gap-4 p-2">
                  <div>
                    <div className="inline-flex rounded-full border border-white/10 px-3 py-1 text-[11px] uppercase tracking-[0.24em] text-slate-400">
                      {item.tag}
                    </div>
                    <h3 className="mt-4 font-display text-2xl tracking-[-0.04em] text-white">{item.title}</h3>
                    <p className="mt-4 text-sm leading-6 text-slate-300">{item.description}</p>
                  </div>
                  <div className="text-[11px] uppercase tracking-[0.24em] text-slate-500">{item.date}</div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

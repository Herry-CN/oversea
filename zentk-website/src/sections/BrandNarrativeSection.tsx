import { SectionHeading } from '../components/SectionHeading';
import { brandNarrative } from '../content/siteContent';

export function BrandNarrativeSection() {
  return (
    <section className="section-shell bg-[#07111f]" id="narrative">
      <div className="section-divider" />

      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div className="reveal">
          <SectionHeading
            eyebrow="Brand narrative"
            title={brandNarrative.heading}
            description={brandNarrative.description}
          />

          <div className="mt-8 flex flex-wrap items-center gap-3">
            {brandNarrative.influenceMarks.map((item) => (
              <div
                key={item.name}
                className="glass-panel inline-flex items-center gap-3 rounded-full px-4 py-2.5"
              >
                {item.type === 'image' ? (
                  <img src={item.src} alt={item.name} className="h-6 w-6 object-contain" loading="lazy" />
                ) : (
                  <span className="font-display text-sm text-white">{item.name}</span>
                )}
                <span className="text-xs uppercase tracking-[0.24em] text-slate-500">
                  reference signal
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          {brandNarrative.cards.map((card, index) => (
            <article
              key={card.title}
              className={`reveal media-frame overflow-hidden rounded-[28px] ${index === 1 ? 'sm:translate-y-10' : ''}`}
            >
              <img
                src={card.image}
                alt={card.title}
                className="h-72 w-full object-cover sm:h-[360px]"
                style={{ objectPosition: card.imagePosition }}
                loading="lazy"
              />
              <div className="media-overlay" />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <div className="text-[11px] uppercase tracking-[0.26em] text-slate-400">
                  {card.title}
                </div>
                <p className="mt-3 text-sm leading-6 text-slate-200">{card.copy}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

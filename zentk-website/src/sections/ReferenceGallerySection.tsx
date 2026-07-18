import { SectionHeading } from '../components/SectionHeading';
import { referenceGallery, referenceSources } from '../content/siteContent';

export function ReferenceGallerySection() {
  return (
    <section className="section-shell bg-[#07111f]">
      <div className="section-divider" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="reveal grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeading
            eyebrow="Reference gallery"
            title="Three reference directions distilled into a more original ZENTK visual system."
            accent="Not copied."
            description="The references influence framing, pacing and material atmosphere. They do not replace ZENTK’s own offer or imply these products belong to ZENTK."
          />

          <div className="grid gap-4 sm:grid-cols-3">
            {referenceGallery.map((item, index) => (
              <article
                key={item.title}
                className={`reveal reveal-delay-${(index % 4) + 1} overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.035]`}
              >
                <div className="media-frame h-72 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover"
                    style={{ objectPosition: item.imagePosition }}
                    loading="lazy"
                  />
                  <div className="media-overlay" />
                </div>
                <div className="space-y-3 p-5">
                  <div className="text-[11px] uppercase tracking-[0.24em] text-slate-500">
                    Inspired by {item.source}
                  </div>
                  <h3 className="font-display text-2xl text-white">{item.title}</h3>
                  <p className="text-sm leading-6 text-slate-300">{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="reveal mt-10 rounded-[28px] border border-white/10 bg-white/[0.03] p-6">
          <div className="text-[11px] uppercase tracking-[0.26em] text-slate-500">
            Downloaded reference assets recorded locally
          </div>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {referenceSources.map((source) => (
              <div key={source.name} className="flex items-center gap-4 rounded-[24px] border border-white/8 bg-black/15 p-4">
                <img src={source.file} alt={source.name} className="h-10 w-10 rounded-full object-contain" loading="lazy" />
                <div className="min-w-0">
                  <div className="font-medium text-white">{source.name}</div>
                  <div className="mt-1 text-xs uppercase tracking-[0.22em] text-slate-500">{source.usage}</div>
                  <a href={source.origin} className="mt-2 block truncate text-sm text-cyan-200 hover:text-white">
                    {source.origin}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

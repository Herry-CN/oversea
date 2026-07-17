import { SectionHeading } from '../components/SectionHeading';
import { caseStudies } from '../content/siteContent';

export function CaseStudiesSection() {
  return (
    <section id="cases" className="section-shell bg-[#030712]">
      <div className="section-divider" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="reveal">
          <SectionHeading
            eyebrow="Proof"
            title="Proof built around commercial interventions, not generic success claims."
            accent="Measured in movement."
            description="The underlying case-study themes stay the same, but the presentation becomes more editorial and outcome-oriented."
            align="center"
          />
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {caseStudies.map((item, index) => (
            <article
              key={item.title}
              className={`reveal reveal-delay-${(index % 4) + 1} overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.035]`}
            >
              <div className="media-frame h-64 overflow-hidden">
                <img src={item.image} alt={item.title} className="h-full w-full object-cover" loading="lazy" />
                <div className="media-overlay" />
                <div className="absolute left-5 top-5 rounded-full border border-white/15 bg-black/20 px-3 py-1 text-[11px] uppercase tracking-[0.24em] text-white/80 backdrop-blur-sm">
                  {item.tag}
                </div>
              </div>

              <div className="space-y-5 p-6">
                <h3 className="font-display text-2xl tracking-[-0.04em] text-white">{item.title}</h3>
                <div className="space-y-4 text-sm leading-6 text-slate-300">
                  <div>
                    <div className="text-[11px] uppercase tracking-[0.24em] text-slate-500">Challenge</div>
                    <p className="mt-2">{item.challenge}</p>
                  </div>
                  <div>
                    <div className="text-[11px] uppercase tracking-[0.24em] text-slate-500">Intervention</div>
                    <p className="mt-2">{item.intervention}</p>
                  </div>
                </div>
                <div className="rounded-[24px] border border-white/10 bg-black/20 px-4 py-4">
                  <div className="text-[11px] uppercase tracking-[0.24em] text-slate-500">Outcome</div>
                  <div className="mt-2 font-display text-2xl text-cyan-200">{item.outcome}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

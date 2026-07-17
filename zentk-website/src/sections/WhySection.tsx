import { SectionHeading } from '../components/SectionHeading';
import { operatingModel } from '../content/siteContent';

export function WhyZentkSection() {
  return (
    <section id="why" className="section-shell bg-[#06101c]">
      <div className="section-divider" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="reveal grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
          <SectionHeading
            eyebrow="Operating model"
            title="Why teams choose ZENTK when launch complexity spans product, compliance and shelf reality."
            accent="Built to execute."
            description="We position the company less like a generic consultancy and more like a strategic launch architecture partner with an explicit operating sequence."
          />

          <div className="grid gap-4 sm:grid-cols-2">
            {operatingModel.map((item, index) => (
              <article
                key={item.step}
                className={`reveal reveal-delay-${(index % 4) + 1} rounded-[28px] border border-white/10 bg-white/[0.035] p-6`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="font-display text-5xl leading-none tracking-[-0.06em] text-white/15">
                    {item.step}
                  </div>
                  <span className="rounded-full border border-white/10 px-3 py-1 text-[11px] uppercase tracking-[0.24em] text-slate-400">
                    phase
                  </span>
                </div>
                <h3 className="mt-6 font-display text-2xl tracking-[-0.04em] text-white">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-6 text-slate-300">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

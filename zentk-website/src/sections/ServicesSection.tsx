import { ArrowRight } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { capabilities, capabilitySummary, productTracks } from '../content/siteContent';

export function ServicesSection() {
  return (
    <section id="services" className="section-shell bg-[#030712]">
      <div className="section-divider" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="reveal grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
          <div className="space-y-8">
            <SectionHeading
              eyebrow="Capabilities"
              title="A launch system that spans compliance, channels and commercial execution."
              accent="End to end."
              description="We keep the core promise of the current site intact, but frame the offer as one integrated operating system rather than a list of disconnected services."
            />

            <div className="glass-panel space-y-4 p-6">
              <div className="text-[11px] uppercase tracking-[0.26em] text-slate-500">
                System overview
              </div>
              {capabilitySummary.map((item) => (
                <div key={item} className="flex items-center gap-3 text-sm text-slate-200">
                  <span className="h-2 w-2 rounded-full bg-fuchsia-400" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-6">
              <div className="text-[11px] uppercase tracking-[0.26em] text-slate-500">
                Product tracks we support
              </div>
              <div className="mt-5 space-y-5">
                {productTracks.map((track) => (
                  <div key={track.name} className="border-l border-white/10 pl-4">
                    <div className="font-display text-xl text-white">{track.name}</div>
                    <p className="mt-2 text-sm leading-6 text-slate-300">{track.copy}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {capabilities.map((capability, index) => (
              <article
                key={capability.title}
                className={`reveal reveal-delay-${(index % 4) + 1} card-hover rounded-[28px] border border-white/10 bg-white/[0.035] p-6`}
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="text-[11px] uppercase tracking-[0.26em] text-slate-500">
                    {capability.label}
                  </div>
                  <span
                    className={`rounded-full px-3 py-1 text-[11px] uppercase tracking-[0.22em] ${
                      capability.accent === 'violet'
                        ? 'bg-violet-500/12 text-violet-200'
                        : 'bg-cyan-400/12 text-cyan-100'
                    }`}
                  >
                    active
                  </span>
                </div>
                <h3 className="mt-5 font-display text-2xl tracking-[-0.04em] text-white">
                  {capability.title}
                </h3>
                <p className="mt-4 text-sm leading-6 text-slate-300">{capability.summary}</p>

                <div className="mt-6 space-y-3">
                  {capability.bullets.map((bullet) => (
                    <div key={bullet} className="flex items-center gap-3 text-sm text-slate-200">
                      <span className="h-px w-6 bg-gradient-to-r from-fuchsia-400 to-cyan-300" />
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="reveal mt-8 flex justify-end">
          <a href="#contact" className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-200 transition-colors hover:text-white">
            Start a structured market-entry conversation
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

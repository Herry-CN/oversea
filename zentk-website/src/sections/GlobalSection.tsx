import { SectionHeading } from '../components/SectionHeading';
import { complianceMarks, marketFootprint } from '../content/siteContent';

export function GlobalSection() {
  return (
    <section id="global" className="section-shell bg-[#050d18]">
      <div className="section-divider" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="reveal grid gap-10 lg:grid-cols-[0.72fr_1.28fr]">
          <SectionHeading
            eyebrow="Markets"
            title="An operating footprint shaped around how each region buys, regulates and scales."
            accent="Not one-size-fits-all."
            description="We keep the original market coverage but present it as a market control board with channel, category and posture signals for each region."
          />

          <div className="grid gap-4 sm:grid-cols-2">
            {marketFootprint.map((market, index) => (
              <article
                key={market.name}
                className={`reveal reveal-delay-${(index % 4) + 1} rounded-[28px] border border-white/10 bg-white/[0.035] p-6`}
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="font-display text-2xl text-white">{market.name}</h3>
                  <span className="rounded-full border border-white/10 px-3 py-1 text-[11px] uppercase tracking-[0.24em] text-slate-500">
                    active market
                  </span>
                </div>

                <div className="mt-5 space-y-4 text-sm leading-6">
                  <div>
                    <div className="text-[11px] uppercase tracking-[0.24em] text-slate-500">Focus</div>
                    <div className="mt-1 text-slate-200">{market.focus}</div>
                  </div>
                  <div>
                    <div className="text-[11px] uppercase tracking-[0.24em] text-slate-500">Channels</div>
                    <div className="mt-1 text-slate-200">{market.channels}</div>
                  </div>
                  <div>
                    <div className="text-[11px] uppercase tracking-[0.24em] text-slate-500">Categories</div>
                    <div className="mt-1 text-slate-200">{market.categories}</div>
                  </div>
                  <div>
                    <div className="text-[11px] uppercase tracking-[0.24em] text-slate-500">Market posture</div>
                    <div className="mt-1 text-slate-300">{market.posture}</div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="reveal mt-12 rounded-[32px] border border-white/10 bg-white/[0.035] p-6 sm:p-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <div className="eyebrow">Compliance database</div>
              <div className="mt-4 font-display text-3xl tracking-[-0.04em] text-white">
                Market trust begins with technical legitimacy.
              </div>
            </div>
            <p className="max-w-2xl text-sm leading-6 text-slate-300">
              The site already referenced certification expertise. The redesign keeps that truth but reframes it as a visible commercial advantage for channel conversations.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {complianceMarks.map((mark) => (
              <div key={mark} className="metric-chip text-center">
                <div className="font-display text-3xl text-white">{mark}</div>
                <div className="mt-2 text-[11px] uppercase tracking-[0.24em] text-slate-500">
                  market signal
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

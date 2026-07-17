import { ArrowRight, MoveRight } from 'lucide-react';
import { heroContent } from '../content/siteContent';

export function HeroSection() {
  return (
    <section className="relative overflow-hidden px-4 pb-16 pt-32 sm:px-6 lg:px-8 lg:pb-24 lg:pt-40">
      <div className="hero-spotlight absolute inset-0" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div className="reveal space-y-8">
          <div className="eyebrow">{heroContent.eyebrow}</div>
          <div className="space-y-5">
            <h1 className="font-display text-5xl font-semibold tracking-[-0.06em] text-white sm:text-6xl lg:text-7xl">
              {heroContent.title[0]}
              <br />
              <span className="display-gradient">{heroContent.title[1]}</span>
              <br />
              <span className="text-slate-400">{heroContent.title[2]}</span>
            </h1>
            <p className="max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              {heroContent.description}
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <a href={heroContent.primaryCta.href} className="btn-primary inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold text-white">
              {heroContent.primaryCta.label}
              <ArrowRight className="h-4 w-4" />
            </a>
            <a href={heroContent.secondaryCta.href} className="inline-flex items-center justify-center gap-2 rounded-full border border-white/12 bg-white/4 px-6 py-3.5 text-sm font-medium text-slate-100 transition-colors hover:bg-white/8">
              {heroContent.secondaryCta.label}
              <MoveRight className="h-4 w-4" />
            </a>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {heroContent.signals.map((signal) => (
              <div key={signal} className="glass-panel flex items-center gap-3 px-4 py-4 text-sm text-slate-200">
                <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_16px_rgba(103,232,249,0.8)]" />
                <span>{signal}</span>
              </div>
            ))}
          </div>

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {heroContent.stats.map((stat) => (
              <div key={stat.label} className="metric-chip">
                <div className="font-display text-3xl tracking-[-0.05em] text-white">{stat.value}</div>
                <div className="mt-2 text-[11px] uppercase tracking-[0.26em] text-slate-500">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="reveal reveal-delay-2 grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="flex flex-col gap-4 lg:pt-16">
            <div className="glass-panel p-5">
              <div className="text-[11px] uppercase tracking-[0.24em] text-slate-500">
                Market posture
              </div>
              <div className="mt-3 font-display text-2xl tracking-[-0.04em] text-white">
                Editorial hard-tech positioning with channel clarity.
              </div>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                Designed to feel closer to a flagship product launch than a generic consulting homepage.
              </p>
            </div>
            <div className="media-frame h-56 overflow-hidden rounded-[28px]">
              <img
                src={heroContent.mediaCards[0].image}
                alt={heroContent.mediaCards[0].title}
                className="h-full w-full object-cover"
                loading="eager"
              />
              <div className="media-overlay" />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <div className="text-xs uppercase tracking-[0.24em] text-cyan-200/80">
                  {heroContent.mediaCards[0].meta}
                </div>
                <div className="mt-2 font-display text-2xl text-white">
                  {heroContent.mediaCards[0].title}
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="media-frame h-full min-h-[520px] overflow-hidden rounded-[32px]">
              <img
                src={heroContent.mediaCards[1].image}
                alt={heroContent.mediaCards[1].title}
                className="h-full w-full object-cover"
                loading="eager"
              />
              <div className="media-overlay" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <div className="text-xs uppercase tracking-[0.24em] text-white/70">
                  {heroContent.mediaCards[1].meta}
                </div>
                <div className="mt-3 font-display text-3xl tracking-[-0.04em] text-white">
                  {heroContent.mediaCards[1].title}
                </div>
              </div>
            </div>

            <div className="glass-panel absolute -bottom-6 left-4 right-4 rounded-[28px] p-5 sm:left-auto sm:right-6 sm:w-[290px]">
              <div className="text-[11px] uppercase tracking-[0.24em] text-slate-500">
                Current focus
              </div>
              <div className="mt-3 text-sm leading-6 text-slate-300">
                Hard tech, innovative consumer electronics, smart devices, lifestyle hardware and category-defining launch programs.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

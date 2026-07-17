import { useState } from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { contactDetails } from '../content/siteContent';

export function ContactSection() {
  const [formState, setFormState] = useState({
    name: '',
    company: '',
    email: '',
    jobTitle: '',
    phone: '',
    interest: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const interests = [
    'Product Go-to-Market',
    'Compliance & Certification',
    'EU Market Entry',
    'US Market Entry',
    'Supply Chain Optimization',
    'Retail Channel Access',
    'CES / Trade Show Strategy',
    'Other',
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (submitting) return;

    setSubmitting(true);
    setSubmitError(null);

    fetch('/api/inquiries', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: formState.name,
        company: formState.company,
        email: formState.email,
        jobTitle: formState.jobTitle,
        interest: formState.interest,
        message: formState.message,
      }),
    })
      .then(async (res) => {
        if (!res.ok) {
          const data = await res.json().catch(() => null);
          const text = data ? '' : await res.text().catch(() => '');
          const message = data?.error || text || `Request failed (${res.status})`;
          throw new Error(message);
        }
        setSubmitted(true);
      })
      .catch((err: unknown) => {
        setSubmitError(err instanceof Error ? err.message : 'Failed to submit');
      })
      .finally(() => {
        setSubmitting(false);
      });
  };

  return (
    <section id="contact" className="section-shell bg-[#030712] relative overflow-hidden">
      <div className="section-divider" />

      <div className="absolute left-1/2 top-0 h-[320px] w-[640px] -translate-x-1/2 rounded-full bg-fuchsia-500/10 blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-[0.86fr_1.14fr] lg:gap-16">
          <div className="reveal">
            <SectionHeading
              eyebrow="Contact"
              title="Ready to shape the market entry architecture around your product?"
              accent="Let's build it."
              description="Tell us where the product is today, which markets matter first and where momentum is currently blocked. We will reply with a sharper launch path rather than a generic intro email."
            />

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="glass-panel rounded-[28px] p-5">
                <div className="text-[11px] uppercase tracking-[0.24em] text-slate-500">Contact</div>
                <div className="mt-3 font-display text-2xl text-white">{contactDetails.contact}</div>
                <p className="mt-2 text-sm leading-6 text-slate-300">{contactDetails.recipientNote}</p>
              </div>
              <div className="glass-panel rounded-[28px] p-5">
                <div className="text-[11px] uppercase tracking-[0.24em] text-slate-500">Response window</div>
                <div className="mt-3 font-display text-2xl text-white">{contactDetails.responseTime}</div>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  Direct conversation for founders, growth teams and export operators.
                </p>
              </div>
            </div>

            <div className="mt-6 rounded-[32px] border border-white/10 bg-white/[0.03] p-6">
              <div className="space-y-5 text-sm text-slate-200">
                <div>
                  <div className="text-[11px] uppercase tracking-[0.24em] text-slate-500">Email</div>
                  <a className="mt-2 block text-base text-white hover:text-cyan-200" href={`mailto:${contactDetails.email}`}>
                    {contactDetails.email}
                  </a>
                </div>
                <div>
                  <div className="text-[11px] uppercase tracking-[0.24em] text-slate-500">Address</div>
                  <div className="mt-2 leading-6 text-slate-300">{contactDetails.address}</div>
                </div>
              </div>
            </div>

            <div className="mt-10 border-t border-white/10 pt-8">
              <p className="text-[11px] uppercase tracking-[0.26em] text-slate-500">
                Clients operate in channels including
              </p>
              <div className="mt-4 flex flex-wrap items-center gap-5">
                {['Best Buy', 'MediaMarkt', 'Amazon', 'CES', 'Flipkart'].map(brand => (
                  <div key={brand} className="text-sm font-semibold text-slate-400 transition-colors hover:text-slate-200">
                    {brand}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="reveal reveal-delay-2">
            {!submitted ? (
              <form
                onSubmit={handleSubmit}
                className="rounded-[32px] border border-white/10 bg-white/[0.04] p-8 flex flex-col gap-5 shadow-[0_40px_120px_rgba(2,6,23,0.35)]"
              >
                <div>
                  <div className="text-[11px] uppercase tracking-[0.26em] text-slate-500">
                    Strategic intake form
                  </div>
                  <div className="mt-3 font-display text-3xl text-white">Tell us what needs to move.</div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-slate-300 text-xs font-medium mb-2 block">Full Name *</label>
                    <input
                      name="name"
                      required
                      value={formState.name}
                      onChange={handleChange}
                      placeholder="John Smith"
                      className="w-full px-4 py-3 rounded-2xl bg-[#07111f] border border-white/10 text-white text-sm placeholder-slate-600 focus:border-cyan-300/50 focus:outline-none focus:ring-1 focus:ring-cyan-300/20 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-slate-300 text-xs font-medium mb-2 block">Company *</label>
                    <input
                      name="company"
                      required
                      value={formState.company}
                      onChange={handleChange}
                      placeholder="Acme Corp"
                      className="w-full px-4 py-3 rounded-2xl bg-[#07111f] border border-white/10 text-white text-sm placeholder-slate-600 focus:border-cyan-300/50 focus:outline-none focus:ring-1 focus:ring-cyan-300/20 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-slate-300 text-xs font-medium mb-2 block">Work Email *</label>
                    <input
                      name="email"
                      type="email"
                      required
                      value={formState.email}
                      onChange={handleChange}
                      placeholder="john@company.com"
                      className="w-full px-4 py-3 rounded-2xl bg-[#07111f] border border-white/10 text-white text-sm placeholder-slate-600 focus:border-cyan-300/50 focus:outline-none focus:ring-1 focus:ring-cyan-300/20 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-slate-300 text-xs font-medium mb-2 block">Job Title *</label>
                    <input
                      name="jobTitle"
                      required
                      value={formState.jobTitle}
                      onChange={handleChange}
                      placeholder="CEO / Head of Business"
                      className="w-full px-4 py-3 rounded-2xl bg-[#07111f] border border-white/10 text-white text-sm placeholder-slate-600 focus:border-cyan-300/50 focus:outline-none focus:ring-1 focus:ring-cyan-300/20 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-slate-300 text-xs font-medium mb-2 block">Primary Interest *</label>
                  <select
                    name="interest"
                    required
                    value={formState.interest}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-2xl bg-[#07111f] border border-white/10 text-white text-sm focus:border-cyan-300/50 focus:outline-none focus:ring-1 focus:ring-cyan-300/20 transition-colors"
                  >
                    <option value="" disabled className="text-slate-600">Select a service area...</option>
                    {interests.map(opt => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="text-slate-300 text-xs font-medium mb-2 block">Tell us about your product & goals</label>
                  <textarea
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Describe your product, target markets, and the challenges you're facing..."
                    className="w-full px-4 py-3 rounded-2xl bg-[#07111f] border border-white/10 text-white text-sm placeholder-slate-600 focus:border-cyan-300/50 focus:outline-none focus:ring-1 focus:ring-cyan-300/20 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="btn-primary w-full py-4 rounded-2xl text-white font-semibold text-base flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {submitting ? 'Submitting...' : 'Consult Our Experts'}
                  <span aria-hidden="true">→</span>
                </button>

                {submitError && (
                  <div className="rounded-2xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-red-200 text-sm">
                    {submitError}
                  </div>
                )}

                <p className="text-slate-500 text-xs text-center">
                  No spam. No sales pressure. Just structured guidance for the next launch move.
                </p>
              </form>
            ) : (
              <div className="rounded-[32px] border border-emerald-500/30 bg-emerald-500/5 p-10 flex flex-col items-center justify-center gap-5 text-center min-h-[420px]">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-3xl text-emerald-300">
                  ✓
                </div>
                <h3 className="font-display text-3xl text-white">Message Received</h3>
                <p className="text-slate-300 text-sm max-w-sm leading-6">
                  Sasha will review the inquiry and reply with a more tailored market-entry perspective within 24 business hours.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

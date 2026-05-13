import { useState } from 'react';

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

  const interests = [
    'AI Hardware Go-to-Market',
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
    // In real integration, post to /api/inquiries
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-28 bg-[#030712] relative overflow-hidden">
      <div className="section-divider" />

      {/* Bg accents */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-500/5 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left: Heading + Info */}
          <div className="reveal">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm font-medium mb-6">
              Get In Touch
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight">
              Ready to Take Your
              <br />
              <span className="gradient-text">Product Global?</span>
            </h2>
            <p className="text-[#94a3b8] text-lg leading-relaxed mb-10">
              Tell us about your product and market ambitions.
              Our experts will map a custom go-to-market strategy within 48 hours.
            </p>

            {/* Contact details */}
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <div className="text-[#64748b] text-xs mb-0.5">Email</div>
                  <div className="text-white text-sm">contact@zentk.com</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-[#64748b] text-xs mb-0.5">Headquartered</div>
                  <div className="text-white text-sm">Shenzhen, China · Silicon Valley, US</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-[#64748b] text-xs mb-0.5">Response Time</div>
                  <div className="text-white text-sm">Within 24 business hours</div>
                </div>
              </div>
            </div>

            {/* Trusted by logos placeholder */}
            <div className="mt-12 pt-8 border-t border-[#1e2d42]">
              <p className="text-[#475569] text-xs uppercase tracking-wider mb-4">Clients operate in markets including</p>
              <div className="flex items-center gap-5 flex-wrap">
                {['Best Buy', 'MediaMarkt', 'Amazon', 'CES', 'Flipkart'].map(brand => (
                  <div key={brand} className="text-[#475569] text-sm font-semibold hover:text-[#94a3b8] transition-colors">
                    {brand}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="reveal reveal-delay-2">
            {!submitted ? (
              <form
                onSubmit={handleSubmit}
                className="rounded-2xl border border-[#1e2d42] bg-[#0a1120] p-8 flex flex-col gap-5"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-[#94a3b8] text-xs font-medium mb-2 block">Full Name *</label>
                    <input
                      name="name"
                      required
                      value={formState.name}
                      onChange={handleChange}
                      placeholder="John Smith"
                      className="w-full px-4 py-3 rounded-xl bg-[#030712] border border-[#1e2d42] text-white text-sm placeholder-[#374151] focus:border-blue-500/60 focus:outline-none focus:ring-1 focus:ring-blue-500/30 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-[#94a3b8] text-xs font-medium mb-2 block">Company *</label>
                    <input
                      name="company"
                      required
                      value={formState.company}
                      onChange={handleChange}
                      placeholder="Acme Corp"
                      className="w-full px-4 py-3 rounded-xl bg-[#030712] border border-[#1e2d42] text-white text-sm placeholder-[#374151] focus:border-blue-500/60 focus:outline-none focus:ring-1 focus:ring-blue-500/30 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-[#94a3b8] text-xs font-medium mb-2 block">Work Email *</label>
                    <input
                      name="email"
                      type="email"
                      required
                      value={formState.email}
                      onChange={handleChange}
                      placeholder="john@company.com"
                      className="w-full px-4 py-3 rounded-xl bg-[#030712] border border-[#1e2d42] text-white text-sm placeholder-[#374151] focus:border-blue-500/60 focus:outline-none focus:ring-1 focus:ring-blue-500/30 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-[#94a3b8] text-xs font-medium mb-2 block">Job Title *</label>
                    <input
                      name="jobTitle"
                      required
                      value={formState.jobTitle}
                      onChange={handleChange}
                      placeholder="CEO / Head of Business"
                      className="w-full px-4 py-3 rounded-xl bg-[#030712] border border-[#1e2d42] text-white text-sm placeholder-[#374151] focus:border-blue-500/60 focus:outline-none focus:ring-1 focus:ring-blue-500/30 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-[#94a3b8] text-xs font-medium mb-2 block">Primary Interest *</label>
                  <select
                    name="interest"
                    required
                    value={formState.interest}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-[#030712] border border-[#1e2d42] text-white text-sm focus:border-blue-500/60 focus:outline-none focus:ring-1 focus:ring-blue-500/30 transition-colors"
                  >
                    <option value="" disabled className="text-[#374151]">Select a service area...</option>
                    {interests.map(opt => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="text-[#94a3b8] text-xs font-medium mb-2 block">Tell us about your product & goals</label>
                  <textarea
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Describe your product, target markets, and the challenges you're facing..."
                    className="w-full px-4 py-3 rounded-xl bg-[#030712] border border-[#1e2d42] text-white text-sm placeholder-[#374151] focus:border-blue-500/60 focus:outline-none focus:ring-1 focus:ring-blue-500/30 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary w-full py-4 rounded-xl text-white font-semibold text-base flex items-center justify-center gap-2"
                >
                  Consult Our Experts
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>

                <p className="text-[#475569] text-xs text-center">
                  No spam. No sales pressure. Just expert guidance. Response within 24 hours.
                </p>
              </form>
            ) : (
              <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/5 p-10 flex flex-col items-center justify-center gap-5 text-center min-h-[400px]">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center">
                  <svg className="w-8 h-8 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-white font-bold text-xl">Message Received</h3>
                <p className="text-[#94a3b8] text-sm max-w-xs">
                  One of our experts will reach out within 24 business hours with a personalized strategy assessment.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

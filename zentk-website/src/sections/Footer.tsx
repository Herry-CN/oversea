import { contactDetails, footerLinkGroups } from '../content/siteContent';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-[#030712]">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1.8fr]">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
                <img src="/logo.png" alt="ZENTK" className="h-8 w-8 object-contain" />
              </div>
              <div>
                <div className="font-display text-2xl tracking-[-0.04em] text-white">ZENTK</div>
                <div className="text-[11px] uppercase tracking-[0.28em] text-slate-500">
                  Hard Tech Globalization
                </div>
              </div>
            </div>

            <p className="max-w-md text-sm leading-7 text-slate-300">
              A more editorial, product-aware global go-to-market partner for hard tech and innovative consumer electronics entering demanding international markets.
            </p>

            <div className="space-y-3 text-sm text-slate-300">
              <div>
                <div className="text-[11px] uppercase tracking-[0.24em] text-slate-500">Contact</div>
                <div className="mt-2 text-white">{contactDetails.contact}</div>
              </div>
              <div>
                <div className="text-[11px] uppercase tracking-[0.24em] text-slate-500">Email</div>
                <a className="mt-2 block text-white hover:text-cyan-200" href={`mailto:${contactDetails.email}`}>
                  {contactDetails.email}
                </a>
              </div>
              <div>
                <div className="text-[11px] uppercase tracking-[0.24em] text-slate-500">Address</div>
                <div className="mt-2 leading-6 text-slate-300">{contactDetails.address}</div>
              </div>
            </div>

            <a href="#contact" className="btn-primary inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold text-white">
              Consult Our Experts
            </a>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {Object.entries(footerLinkGroups).map(([category, items]) => (
              <div key={category}>
                <h4 className="text-[11px] uppercase tracking-[0.28em] text-slate-500">{category}</h4>
                <ul className="mt-5 space-y-3">
                  {items.map((item) => (
                    <li key={item}>
                      <a href="#contact" className="text-sm text-slate-300 transition-colors hover:text-white">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-8 text-sm sm:flex-row sm:items-center sm:justify-between">
          <p className="text-slate-500">
            © {year} ZENTK. All rights reserved. Hard tech global market-entry partner.
          </p>
          <div className="flex flex-wrap items-center gap-6 text-[11px] uppercase tracking-[0.22em] text-slate-500">
            <a href="#contact" className="transition-colors hover:text-white">Privacy Policy</a>
            <a href="#contact" className="transition-colors hover:text-white">Terms of Service</a>
            <a href="#contact" className="transition-colors hover:text-white">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

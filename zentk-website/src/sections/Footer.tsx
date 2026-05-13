export function Footer() {
  const year = new Date().getFullYear();

  const links = {
    Services: ['Strategy & Compliance', 'Global Distribution', 'Supply Chain', 'Retail Execution', 'Think Tank', 'Media & Growth'],
    Markets: ['Europe (EU)', 'North America', 'Southeast Asia', 'India', 'Africa'],
    Company: ['About ZENTK', 'Case Studies', 'News & Insights', 'Careers', 'Contact Us'],
    'Compliance': ['CE Certification', 'FCC Authorization', 'FDA Registration', 'RoHS Compliance', 'UL Listing'],
  };

  return (
    <footer className="bg-[#030712] border-t border-[#1e2d42]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 mb-14">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-emerald-500 flex items-center justify-center">
                <span className="text-white font-bold text-sm">Z</span>
              </div>
              <span className="text-white font-bold text-lg">ZENTK</span>
            </div>
            <p className="text-[#64748b] text-sm leading-relaxed mb-6 max-w-xs">
              Hard Tech Global Go-To-Market Partner.
              Connecting Chinese innovation to the world's most demanding markets.
            </p>
            <a
              href="#contact"
              className="btn-primary inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-white text-sm font-semibold"
            >
              Consult Our Experts
            </a>
          </div>

          {/* Link columns */}
          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <h4 className="text-white font-semibold text-sm mb-4">{category}</h4>
              <ul className="flex flex-col gap-2.5">
                {items.map(item => (
                  <li key={item}>
                    <a href="#" className="text-[#64748b] text-sm hover:text-[#94a3b8] transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-[#1e2d42] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#475569] text-sm">
            © {year} ZENTK. All rights reserved. Hard Tech Global Partner.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-[#475569] text-xs hover:text-[#94a3b8] transition-colors">Privacy Policy</a>
            <a href="#" className="text-[#475569] text-xs hover:text-[#94a3b8] transition-colors">Terms of Service</a>
            <a href="#" className="text-[#475569] text-xs hover:text-[#94a3b8] transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

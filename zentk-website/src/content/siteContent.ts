const textToImage = (prompt: string, imageSize: string) =>
  `https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=${encodeURIComponent(prompt)}&image_size=${imageSize}`;

export const navigationItems = [
  { label: 'Capabilities', href: '#services' },
  { label: 'Operating Model', href: '#why' },
  { label: 'Markets', href: '#global' },
  { label: 'Proof', href: '#cases' },
  { label: 'Insights', href: '#news' },
  { label: 'Contact', href: '#contact' },
];

export const heroContent = {
  eyebrow: 'Global launch architecture for hard tech',
  title: ['Turn Ambitious Products', 'Into Market-Ready', 'Global Categories'],
  description:
    'ZENTK helps hard tech and innovative consumer electronics brands move from product promise to compliant, channel-ready and retail-executable launches across Europe, North America and emerging growth markets.',
  primaryCta: { label: 'Build the Market Entry Plan', href: '#contact' },
  secondaryCta: { label: 'See How We Operate', href: '#why' },
  stats: [
    { value: '08', label: 'priority markets activated' },
    { value: '120+', label: 'cities and retail touchpoints' },
    { value: '24h', label: 'initial strategic response' },
    { value: '06', label: 'linked capability pillars' },
  ],
  signals: [
    'Compliance-led entry',
    'Category positioning',
    'Retail execution',
    'Narrative and media orchestration',
  ],
  mediaCards: [
    {
      title: 'Retail-ready launch kits',
      meta: 'Positioning, shelf strategy, buyer narrative',
      image: textToImage(
        'editorial hard tech launch board with premium consumer electronics, brushed titanium details, packaging mockups, market entry documents, dramatic studio lighting, deep navy and graphite palette, ultra realistic, high-end campaign photography',
        'portrait_4_3'
      ),
    },
    {
      title: 'Flagship category staging',
      meta: 'Inspired by advanced mobility and water-tech hero presentation',
      image: textToImage(
        'futuristic premium mobility device and hydrofoil-inspired technology staged on reflective dark water at dusk, cinematic lighting, high contrast, luxury technology campaign, realistic photography',
        'landscape_4_3'
      ),
    },
  ],
};

export const brandNarrative = {
  heading: 'Built like a brand studio, operated like a market-entry system.',
  description:
    'We studied how product-first brands use atmosphere, aspiration and engineering cues to make innovation legible. ZENTK applies that same discipline to globalization: clarifying what the product means, where it belongs, and how it should be introduced.',
  cards: [
    {
      title: 'Product-language translation',
      copy:
        'We turn engineering strengths into buyer-facing language that works for distributors, retailers and category managers.',
      image: textToImage(
        'premium close-up of advanced consumer electronics materials, brushed metal, precise buttons, warm reflections, editorial macro photography, elegant product storytelling',
        'landscape_4_3'
      ),
    },
    {
      title: 'Launch atmosphere',
      copy:
        'The strongest hard tech launches feel inevitable. We combine visual mood, channel timing and narrative sequencing to create that sense of inevitability.',
      image: textToImage(
        'dark editorial technology showroom with illuminated product podiums, atmospheric lighting, subtle fog, reflective surfaces, sophisticated futuristic interior, realistic photography',
        'landscape_4_3'
      ),
    },
    {
      title: 'Lifestyle relevance',
      copy:
        'Premium consumer electronics win when they fit into real spaces and routines, not only spec sheets. That informs our GTM storytelling and regional activation.',
      image: textToImage(
        'minimalist premium home interior with elegant lighting product, soft natural shadows, warm modern decor, refined editorial lifestyle photography',
        'landscape_4_3'
      ),
    },
  ],
  influenceMarks: [
    { name: 'MorphGears', type: 'text' as const },
    { name: 'FLY-H2O', type: 'image' as const, src: '/reference-images/fly-logo.png' },
    { name: 'Reazenable', type: 'image' as const, src: '/reference-images/reaz-logo.png' },
  ],
};

export const capabilitySummary = [
  'Strategy and compliance',
  'Channel and retail activation',
  'Supply chain orchestration',
  'Narrative, media and conversion',
];

export const capabilities = [
  {
    title: 'Strategy & Compliance',
    label: 'Pillar 01',
    summary:
      'Translate product ambition into a market-entry roadmap with certification, IP, documentation and launch risk controls built in from day one.',
    bullets: ['CE / FCC / FDA / RoHS planning', 'Trademark and regulatory risk review', 'Market-entry sequencing by region'],
    accent: 'violet',
  },
  {
    title: 'Channel Architecture',
    label: 'Pillar 02',
    summary:
      'Design the right mix of marketplaces, regional distributors, flagship retail and event visibility based on category economics and buyer behavior.',
    bullets: ['Amazon and regional e-commerce design', 'Retail buyer targeting', 'Distributor enablement playbooks'],
    accent: 'cyan',
  },
  {
    title: 'Supply Chain Readiness',
    label: 'Pillar 03',
    summary:
      'Prepare the operational layer needed for international launch reliability, from factory coordination to bonded storage and customs timing.',
    bullets: ['Quality and compliance audits', 'Cross-border logistics planning', 'Warehouse and after-sales setup'],
    accent: 'violet',
  },
  {
    title: 'Retail Execution',
    label: 'Pillar 04',
    summary:
      'Build what happens after the listing: training, merchandising, local content, launch campaigns and store-level performance management.',
    bullets: ['Staff training systems', 'POS and display strategy', 'Localized launch calendars'],
    accent: 'cyan',
  },
  {
    title: 'Advisory & Intelligence',
    label: 'Pillar 05',
    summary:
      'Provide category-level perspective for leadership teams navigating unfamiliar markets, pricing pressure and competitive brand positioning.',
    bullets: ['Buyer and competitor intelligence', 'Long-range market prioritization', 'Brand and SKU architecture advice'],
    accent: 'violet',
  },
  {
    title: 'Media & Growth',
    label: 'Pillar 06',
    summary:
      'Align media investment, creator networks and launch storytelling so awareness translates into qualified demand and sell-through.',
    bullets: ['Performance media planning', 'KOL and media outreach', 'Conversion storytelling assets'],
    accent: 'cyan',
  },
];

export const productTracks = [
  {
    name: 'Smart consumer electronics',
    copy: 'Connected products that need narrative clarity, retail proof and local relevance.',
  },
  {
    name: 'AI-enabled devices',
    copy: 'AI hardware as one subcategory among broader hard tech and innovative device launches.',
  },
  {
    name: 'Lifestyle and design-led hardware',
    copy: 'Products where atmosphere, materiality and home integration are part of the sell.',
  },
];

export const operatingModel = [
  {
    step: '01',
    title: 'Decode the category',
    description:
      'Define who the product is really for, which market context fits, and which proof points matter to buyers and regulators.',
  },
  {
    step: '02',
    title: 'Engineer compliance into launch',
    description:
      'Build certification, documentation and channel-readiness into the plan before demand generation starts.',
  },
  {
    step: '03',
    title: 'Deploy the route to shelf',
    description:
      'Map the exact mix of marketplaces, distributors, exhibitions and flagship retail needed for the category and price band.',
  },
  {
    step: '04',
    title: 'Sustain velocity after launch',
    description:
      'Support training, merchandising, media, conversion content and operational follow-through so growth compounds instead of stalling.',
  },
];

export const marketFootprint = [
  {
    name: 'Europe',
    focus: 'Germany, Italy, Hungary, Romania',
    channels: 'MediaMarkt, Carrefour, Saturn, local distributors',
    categories: 'New energy, smart hardware, lifestyle electronics',
    posture: 'High compliance demand, strong retail proof required',
  },
  {
    name: 'North America',
    focus: 'United States and national retail ecosystems',
    channels: 'Best Buy, Amazon US, Target, specialty retail',
    categories: 'Consumer electronics, connected devices, premium hardware',
    posture: 'Competitive launch environment, buyer trust and execution matter',
  },
  {
    name: 'Asia Pacific',
    focus: 'Singapore, India and digital-first growth corridors',
    channels: 'Flipkart, Lazada, cross-border partners',
    categories: 'Tech-forward devices, value-growth categories',
    posture: 'Fast cycles, channel flexibility, platform-native activation',
  },
  {
    name: 'Africa',
    focus: 'Kenya and infrastructure-linked trade entry',
    channels: 'Trade channels, regional project partners',
    categories: 'Energy systems, pragmatic hardware adoption',
    posture: 'Relationship-led entry with logistics and financing nuance',
  },
];

export const complianceMarks = ['CE', 'FCC', 'FDA', 'RoHS', 'UL', 'BIS'];

export const caseStudies = [
  {
    tag: 'Southeast Asia',
    title: 'A fast-growth device startup needed a launch model that fit both platform traffic and offline retail trust.',
    challenge:
      'The product had clear engineering value but weak localization and no regional market narrative.',
    intervention:
      'ZENTK structured a dual-engine entry model combining localized digital demand generation with distributor and retail partner activation.',
    outcome: '+30% brand penetration velocity',
    image: textToImage(
      'premium consumer electronics launch event in southeast asia, retail shelves, digital campaign screens, energetic technology audience, editorial commercial photography',
      'landscape_16_9'
    ),
  },
  {
    tag: 'Europe',
    title: 'A new-energy brand needed to cross the certification barrier before buyers would take the category seriously.',
    challenge:
      'Regulatory complexity and fragmented retailer relationships slowed momentum in Germany and Italy.',
    intervention:
      'We aligned certification planning, documentation strategy and buyer-facing positioning into one launch sequence.',
    outcome: '3 leading retail chains opened',
    image: textToImage(
      'european premium technology retail environment, sleek energy device display, buyers reviewing product documents, polished editorial photography, cool blue palette',
      'landscape_16_9'
    ),
  },
  {
    tag: 'North America',
    title: 'A hardware brand wanted more than expo visibility; it needed a path from CES attention to recurring sell-through.',
    challenge:
      'Interest existed, but there was no coherent bridge from event buzz to retailer confidence and marketplace conversion.',
    intervention:
      'ZENTK linked exhibition strategy, buyer follow-up, channel enablement and launch content into a single commercial arc.',
    outcome: 'Best Buy and Amazon US traction',
    image: textToImage(
      'high-end technology trade show booth with premium devices, buyers in discussion, cinematic convention lighting, realistic event photography',
      'landscape_16_9'
    ),
  },
];

export const insightArticles = [
  {
    title: 'Category strategy matters more than hype when hard tech brands expand into the EU and US.',
    description:
      'The strongest launches connect regulation, positioning and channel logic from the outset instead of treating them as separate workstreams.',
    image: textToImage(
      'editorial collage of global market reports, product blueprints, shipping labels and retail planning boards, elegant hard tech strategy aesthetic',
      'landscape_16_9'
    ),
    tag: 'Category Strategy',
    date: '2026 outlook',
  },
  {
    title: 'How compliance becomes a commercial advantage rather than a launch delay.',
    description:
      'Certifications are not just approvals. They are confidence-building assets that shape retailer trust and marketing narratives.',
    image: textToImage(
      'premium close-up of certification paperwork, electronics lab environment, product prototype, dark blue cinematic tone, realistic commercial photography',
      'landscape_4_3'
    ),
    tag: 'Compliance',
    date: 'Field note',
  },
  {
    title: 'Why modern retail execution needs a product story, not only a distribution contract.',
    description:
      'Shelf presence, staff training and launch content often determine sell-through more than the initial listing itself.',
    image: textToImage(
      'luxury electronics store display with merchandising details, trained staff, glowing shelves, premium editorial retail photography',
      'landscape_4_3'
    ),
    tag: 'Retail Execution',
    date: 'Market signal',
  },
];

export const referenceGallery = [
  {
    title: 'Precision product storytelling',
    source: 'MorphGears',
    description:
      'The lesson: material close-ups and purpose-led copy can make complex products feel immediate and desirable.',
    image: textToImage(
      'macro editorial shot of titanium multi-tool inspired hard tech object, dramatic shadows, tactile details, premium campaign photography',
      'landscape_4_3'
    ),
  },
  {
    title: 'Flagship technology staging',
    source: 'FLY-H2O',
    description:
      'The lesson: bold flagship framing and cinematic scale help advanced products feel category-defining.',
    image: textToImage(
      'flagship water mobility technology vehicle in a futuristic night marina, cinematic reflections, bold product hero photography',
      'landscape_4_3'
    ),
  },
  {
    title: 'Lifestyle integration',
    source: 'Reazenable',
    description:
      'The lesson: atmospheric living-space imagery makes technology feel relevant, tactile and premium.',
    image: textToImage(
      'premium minimalist living space with sculptural lighting and smart home object, warm mood, refined editorial interior photography',
      'landscape_4_3'
    ),
  },
];

export const referenceSources = [
  {
    name: 'FLY-H2O brand logo',
    file: '/reference-images/fly-logo.png',
    origin: 'https://www.fly-h2o.cn/logo.png',
    usage: 'Reference influences row and source archive',
  },
  {
    name: 'Reazenable brand logo',
    file: '/reference-images/reaz-logo.png',
    origin: 'https://reazenable.com/cdn/shop/files/LOGO.png?crop=center&height=256&v=1783664709&width=256',
    usage: 'Reference influences row and source archive',
  },
];

export const contactDetails = {
  contact: 'Sasha',
  email: 'sasha@ZENTKglobal.com',
  address: 'Unit 1603, Tung Ning Building, 2 Hillier Street, Sheung Wan, Hong Kong',
  responseTime: 'Within 24 business hours',
  recipientNote: 'Built for founders, growth leaders and export teams in hard tech.',
};

export const footerLinkGroups = {
  Capabilities: ['Strategy & Compliance', 'Channel Architecture', 'Supply Chain Readiness', 'Retail Execution'],
  Markets: ['Europe', 'North America', 'Asia Pacific', 'Africa'],
  Proof: ['Case Studies', 'Operating Model', 'Market Insights', 'Contact'],
  Company: ['About ZENTK', 'Privacy Policy', 'Terms of Service', 'Cookie Policy'],
};

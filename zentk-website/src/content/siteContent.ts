const svgToDataUri = (svg: string) => `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;

const escapeXml = (value: string) =>
  value
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');

const realReferenceImages = {
  morphHero: '/reference-images/morph-hero.jpg',
  morphMaterial: '/reference-images/morph-material.jpg',
  morphStory: '/reference-images/morph-story.jpg',
  flyHero: '/reference-images/fly-y5-hero.jpg',
  flyDetail: '/reference-images/fly-y5-detail.jpg',
  flyCockpit: '/reference-images/fly-y5-cockpit.jpg',
  reazEditorial: '/reference-images/reaz-editorial.jpg',
  reazLifestyle: '/reference-images/reaz-lifestyle.jpg',
  reazLighting: '/reference-images/reaz-lighting.jpg',
};

type EditorialVariant =
  | 'launch'
  | 'flagship'
  | 'macro'
  | 'showroom'
  | 'lifestyle'
  | 'event'
  | 'strategy'
  | 'compliance'
  | 'retail';

const editorialImage = ({
  label,
  title,
  variant,
}: {
  label: string;
  title: string;
  variant: EditorialVariant;
}) => {
  const palettes: Record<EditorialVariant, { start: string; mid: string; end: string; accent: string; glow: string }> = {
    launch: { start: '#020617', mid: '#0f172a', end: '#172554', accent: '#f97316', glow: '#22d3ee' },
    flagship: { start: '#020617', mid: '#082f49', end: '#0f172a', accent: '#38bdf8', glow: '#c084fc' },
    macro: { start: '#09090b', mid: '#1f2937', end: '#111827', accent: '#fb7185', glow: '#67e8f9' },
    showroom: { start: '#020617', mid: '#111827', end: '#0f172a', accent: '#a855f7', glow: '#22d3ee' },
    lifestyle: { start: '#111827', mid: '#1e293b', end: '#0f172a', accent: '#f59e0b', glow: '#f9a8d4' },
    event: { start: '#030712', mid: '#111827', end: '#172554', accent: '#22d3ee', glow: '#f97316' },
    strategy: { start: '#030712', mid: '#0f172a', end: '#111827', accent: '#c084fc', glow: '#22d3ee' },
    compliance: { start: '#020617', mid: '#1e293b', end: '#0f172a', accent: '#38bdf8', glow: '#f8fafc' },
    retail: { start: '#030712', mid: '#0f172a', end: '#1e293b', accent: '#22d3ee', glow: '#fb7185' },
  };

  const palette = palettes[variant];

  const motifs: Record<EditorialVariant, string> = {
    launch: `
      <rect x='880' y='220' width='420' height='280' rx='32' fill='rgba(15,23,42,0.45)' stroke='rgba(255,255,255,0.18)'/>
      <rect x='940' y='280' width='140' height='180' rx='22' fill='rgba(248,250,252,0.10)' stroke='rgba(255,255,255,0.22)'/>
      <rect x='1098' y='260' width='150' height='110' rx='18' fill='rgba(249,115,22,0.16)' stroke='rgba(249,115,22,0.35)'/>
      <rect x='1098' y='388' width='150' height='72' rx='18' fill='rgba(34,211,238,0.12)' stroke='rgba(34,211,238,0.30)'/>
      <path d='M170 640 C360 560 510 520 740 520' stroke='rgba(34,211,238,0.45)' stroke-width='3' stroke-linecap='round'/>
    `,
    flagship: `
      <ellipse cx='1080' cy='510' rx='260' ry='86' fill='rgba(56,189,248,0.16)'/>
      <path d='M860 500 C930 410 1040 360 1220 372 C1305 378 1360 424 1374 490 C1310 552 1222 582 1100 590 C984 586 900 556 860 500Z' fill='rgba(15,23,42,0.72)' stroke='rgba(255,255,255,0.22)'/>
      <path d='M944 462 C1020 420 1108 402 1226 420' stroke='rgba(192,132,252,0.52)' stroke-width='3' stroke-linecap='round'/>
      <circle cx='1260' cy='450' r='22' fill='rgba(56,189,248,0.85)'/>
    `,
    macro: `
      <circle cx='1110' cy='420' r='180' fill='rgba(103,232,249,0.10)'/>
      <circle cx='1110' cy='420' r='120' fill='rgba(255,255,255,0.05)' stroke='rgba(255,255,255,0.18)'/>
      <rect x='980' y='290' width='260' height='260' rx='64' fill='rgba(15,23,42,0.46)' stroke='rgba(255,255,255,0.20)'/>
      <circle cx='1110' cy='420' r='46' fill='rgba(251,113,133,0.75)'/>
      <path d='M982 560 C1058 508 1168 498 1240 548' stroke='rgba(255,255,255,0.22)' stroke-width='3'/>
    `,
    showroom: `
      <rect x='848' y='210' width='464' height='360' rx='40' fill='rgba(15,23,42,0.36)' stroke='rgba(255,255,255,0.18)'/>
      <rect x='894' y='256' width='120' height='224' rx='24' fill='rgba(255,255,255,0.05)'/>
      <rect x='1038' y='256' width='120' height='224' rx='24' fill='rgba(168,85,247,0.14)'/>
      <rect x='1182' y='256' width='84' height='224' rx='24' fill='rgba(34,211,238,0.14)'/>
      <path d='M868 560 H1292' stroke='rgba(255,255,255,0.16)' stroke-width='3'/>
    `,
    lifestyle: `
      <rect x='860' y='250' width='430' height='290' rx='34' fill='rgba(255,255,255,0.05)' stroke='rgba(255,255,255,0.16)'/>
      <rect x='910' y='372' width='170' height='126' rx='18' fill='rgba(245,158,11,0.18)'/>
      <rect x='1116' y='332' width='122' height='166' rx='24' fill='rgba(255,255,255,0.06)'/>
      <circle cx='1216' cy='298' r='44' fill='rgba(249,168,212,0.46)'/>
      <path d='M890 518 H1260' stroke='rgba(255,255,255,0.18)' stroke-width='3'/>
    `,
    event: `
      <path d='M860 520 C930 430 1014 382 1138 380 C1264 380 1340 430 1382 520' fill='rgba(15,23,42,0.44)' stroke='rgba(255,255,255,0.18)'/>
      <circle cx='928' cy='352' r='16' fill='rgba(34,211,238,0.85)'/>
      <circle cx='1118' cy='308' r='20' fill='rgba(249,115,22,0.78)'/>
      <circle cx='1282' cy='356' r='16' fill='rgba(34,211,238,0.85)'/>
      <rect x='1018' y='420' width='180' height='86' rx='22' fill='rgba(255,255,255,0.06)' stroke='rgba(255,255,255,0.16)'/>
    `,
    strategy: `
      <rect x='850' y='232' width='452' height='324' rx='36' fill='rgba(15,23,42,0.34)' stroke='rgba(255,255,255,0.16)'/>
      <path d='M908 484 L1006 394 L1096 432 L1198 320 L1260 350' stroke='rgba(34,211,238,0.72)' stroke-width='6' stroke-linecap='round' stroke-linejoin='round'/>
      <circle cx='908' cy='484' r='12' fill='rgba(192,132,252,0.90)'/>
      <circle cx='1006' cy='394' r='12' fill='rgba(192,132,252,0.90)'/>
      <circle cx='1096' cy='432' r='12' fill='rgba(192,132,252,0.90)'/>
      <circle cx='1198' cy='320' r='12' fill='rgba(192,132,252,0.90)'/>
      <circle cx='1260' cy='350' r='12' fill='rgba(192,132,252,0.90)'/>
    `,
    compliance: `
      <rect x='872' y='220' width='416' height='340' rx='34' fill='rgba(248,250,252,0.05)' stroke='rgba(255,255,255,0.16)'/>
      <rect x='926' y='270' width='308' height='208' rx='24' fill='rgba(56,189,248,0.10)' stroke='rgba(255,255,255,0.14)'/>
      <path d='M986 378 L1062 454 L1184 314' stroke='rgba(248,250,252,0.90)' stroke-width='20' stroke-linecap='round' stroke-linejoin='round'/>
      <rect x='954' y='506' width='252' height='18' rx='9' fill='rgba(255,255,255,0.18)'/>
    `,
    retail: `
      <rect x='844' y='214' width='466' height='348' rx='34' fill='rgba(15,23,42,0.40)' stroke='rgba(255,255,255,0.16)'/>
      <rect x='892' y='264' width='112' height='246' rx='18' fill='rgba(255,255,255,0.06)'/>
      <rect x='1020' y='264' width='112' height='246' rx='18' fill='rgba(34,211,238,0.14)'/>
      <rect x='1148' y='264' width='112' height='246' rx='18' fill='rgba(251,113,133,0.14)'/>
      <path d='M892 340 H1260 M892 426 H1260' stroke='rgba(255,255,255,0.12)' stroke-width='4'/>
    `,
  };

  return svgToDataUri(`
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1600 900'>
      <defs>
        <linearGradient id='bg' x1='0' y1='0' x2='1' y2='1'>
          <stop offset='0%' stop-color='${palette.start}'/>
          <stop offset='55%' stop-color='${palette.mid}'/>
          <stop offset='100%' stop-color='${palette.end}'/>
        </linearGradient>
        <radialGradient id='glowA' cx='0.25' cy='0.2' r='0.7'>
          <stop offset='0%' stop-color='${palette.glow}' stop-opacity='0.42'/>
          <stop offset='100%' stop-color='${palette.glow}' stop-opacity='0'/>
        </radialGradient>
        <radialGradient id='glowB' cx='0.78' cy='0.76' r='0.62'>
          <stop offset='0%' stop-color='${palette.accent}' stop-opacity='0.34'/>
          <stop offset='100%' stop-color='${palette.accent}' stop-opacity='0'/>
        </radialGradient>
        <pattern id='grid' width='28' height='28' patternUnits='userSpaceOnUse'>
          <path d='M28 0H0V28' fill='none' stroke='rgba(255,255,255,0.06)' stroke-width='1'/>
        </pattern>
      </defs>
      <rect width='1600' height='900' fill='url(#bg)'/>
      <rect width='1600' height='900' fill='url(#grid)' opacity='0.45'/>
      <rect width='1600' height='900' fill='url(#glowA)'/>
      <rect width='1600' height='900' fill='url(#glowB)'/>
      <circle cx='152' cy='132' r='104' fill='rgba(255,255,255,0.04)'/>
      <circle cx='1428' cy='754' r='138' fill='rgba(255,255,255,0.03)'/>
      <g opacity='0.96'>${motifs[variant]}</g>
      <rect x='84' y='86' width='208' height='34' rx='17' fill='rgba(255,255,255,0.10)' stroke='rgba(255,255,255,0.16)'/>
      <text x='108' y='108' fill='rgba(255,255,255,0.78)' font-size='16' font-family='Arial, Helvetica, sans-serif' letter-spacing='3'>${escapeXml(
        label.toUpperCase()
      )}</text>
      <text x='84' y='676' fill='white' font-size='64' font-weight='700' font-family='Arial, Helvetica, sans-serif'>${escapeXml(
        title
      )}</text>
      <text x='84' y='730' fill='rgba(226,232,240,0.72)' font-size='24' font-family='Arial, Helvetica, sans-serif'>ZENTK editorial hard-tech visual system</text>
      <rect x='84' y='778' width='232' height='6' rx='3' fill='${palette.accent}' fill-opacity='0.92'/>
    </svg>
  `);
};

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
      image: realReferenceImages.morphStory,
    },
    {
      title: 'Flagship category staging',
      meta: 'Inspired by advanced mobility and water-tech hero presentation',
      image: realReferenceImages.flyHero,
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
      image: realReferenceImages.morphMaterial,
    },
    {
      title: 'Launch atmosphere',
      copy:
        'The strongest hard tech launches feel inevitable. We combine visual mood, channel timing and narrative sequencing to create that sense of inevitability.',
      image: realReferenceImages.flyDetail,
    },
    {
      title: 'Lifestyle relevance',
      copy:
        'Premium consumer electronics win when they fit into real spaces and routines, not only spec sheets. That informs our GTM storytelling and regional activation.',
      image: realReferenceImages.reazLifestyle,
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
    image: editorialImage({ label: 'Southeast Asia', title: 'Dual-channel market entry', variant: 'event' }),
  },
  {
    tag: 'Europe',
    title: 'A new-energy brand needed to cross the certification barrier before buyers would take the category seriously.',
    challenge:
      'Regulatory complexity and fragmented retailer relationships slowed momentum in Germany and Italy.',
    intervention:
      'We aligned certification planning, documentation strategy and buyer-facing positioning into one launch sequence.',
    outcome: '3 leading retail chains opened',
    image: editorialImage({ label: 'Europe', title: 'Compliance unlock for retail', variant: 'compliance' }),
  },
  {
    tag: 'North America',
    title: 'A hardware brand wanted more than expo visibility; it needed a path from CES attention to recurring sell-through.',
    challenge:
      'Interest existed, but there was no coherent bridge from event buzz to retailer confidence and marketplace conversion.',
    intervention:
      'ZENTK linked exhibition strategy, buyer follow-up, channel enablement and launch content into a single commercial arc.',
    outcome: 'Best Buy and Amazon US traction',
    image: editorialImage({ label: 'North America', title: 'From expo to sell-through', variant: 'flagship' }),
  },
];

export const insightArticles = [
  {
    title: 'Category strategy matters more than hype when hard tech brands expand into the EU and US.',
    description:
      'The strongest launches connect regulation, positioning and channel logic from the outset instead of treating them as separate workstreams.',
    image: editorialImage({ label: 'Insights', title: 'Category strategy', variant: 'strategy' }),
    tag: 'Category Strategy',
    date: '2026 outlook',
  },
  {
    title: 'How compliance becomes a commercial advantage rather than a launch delay.',
    description:
      'Certifications are not just approvals. They are confidence-building assets that shape retailer trust and marketing narratives.',
    image: editorialImage({ label: 'Compliance', title: 'Certification as advantage', variant: 'compliance' }),
    tag: 'Compliance',
    date: 'Field note',
  },
  {
    title: 'Why modern retail execution needs a product story, not only a distribution contract.',
    description:
      'Shelf presence, staff training and launch content often determine sell-through more than the initial listing itself.',
    image: editorialImage({ label: 'Retail Execution', title: 'Shelf story matters', variant: 'retail' }),
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
    image: realReferenceImages.morphHero,
  },
  {
    title: 'Flagship technology staging',
    source: 'FLY-H2O',
    description:
      'The lesson: bold flagship framing and cinematic scale help advanced products feel category-defining.',
    image: realReferenceImages.flyCockpit,
  },
  {
    title: 'Lifestyle integration',
    source: 'Reazenable',
    description:
      'The lesson: atmospheric living-space imagery makes technology feel relevant, tactile and premium.',
    image: realReferenceImages.reazEditorial,
  },
];

export const referenceSources = [
  {
    name: 'MorphGears product hero',
    file: realReferenceImages.morphHero,
    origin: 'https://www.morphgears.com/cdn/shop/files/20260617-170606.jpg?v=1781687207&width=1920',
    usage: 'Hero and reference gallery asset',
  },
  {
    name: 'FLY-H2O flagship image',
    file: realReferenceImages.flyHero,
    origin: 'https://oss.fly-h2o.cn/20260628/coloImg-1_1782624522555.jpg',
    usage: 'Hero flagship staging asset',
  },
  {
    name: 'Reazenable lifestyle image',
    file: realReferenceImages.reazLifestyle,
    origin: 'https://reazenable.com/cdn/shop/files/DSC09276.jpg?v=1783653282&width=1920',
    usage: 'Brand narrative lifestyle asset',
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

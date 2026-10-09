/**
 * Central portfolio data for Farhathullah Najeeb.
 * Mobile & Software Engineer specializing in Fintech, WebRTC, and Payment Systems.
 */

export type Palette = { from: string; via: string; to: string; accent: string };

export const crimson: Palette = { from: '#2a0610', via: '#7a0f24', to: '#0b0710', accent: '#ff3d5a' };
export const ocean: Palette = { from: '#061a2e', via: '#0c3b66', to: '#060c14', accent: '#38bdf8' };
export const amber: Palette = { from: '#2a1a06', via: '#6e440c', to: '#0f0a04', accent: '#fbbf24' };
export const violet: Palette = { from: '#1a0b2e', via: '#4c1d95', to: '#0a0514', accent: '#c084fc' };
export const jade: Palette = { from: '#06241a', via: '#0f5b41', to: '#04100c', accent: '#34d399' };
export const emerald: Palette = { from: '#042217', via: '#0d6344', to: '#030f0b', accent: '#10b981' };

export const profile = {
  fullName: 'Farhathullah Najeeb',
  displayName: 'Farhathullah Najeeb',
  firstName: 'FARHATHULLAH',
  seriesTag: 'THE SERIES',
  /** Fictional studio card shown at the very start of the opening sequence. */
  originalLabel: 'A FARHATHULLAH NAJEEB ORIGINAL',
  role: 'Mobile & Software Engineer',
  tagline: ['Mobile & Software Engineer', 'Fintech Specialist', 'Flutter & WebRTC'],
  intro:
    'Senior Mobile & Software Engineer with 3+ years of experience and 5 production apps live on App Store and Google Play (4.5★ average rating). Specialist in multi-gateway payment architectures, low-latency WebRTC streaming, Clean Architecture / BLoC, and high-performance cross-platform platforms.',
  location: 'Kerala, India',
  email: 'farhathullahmn@gmail.com',
  phone: '+91 9188044462',
  links: {
    linkedin: 'https://www.linkedin.com/in/farhathullah-najeeb-954a0b238',
    github: 'https://github.com/Farhathullah-Najeeb',
    whatsapp: 'https://wa.me/919188044462',
    instagram: 'https://www.instagram.com/farhathullah_najeeb?igsh=MWJzYms1ZjdmNTF4eQ%3D%3D&utm_source=qr',
  },
  resumePdf: '/assets/Farhathullah_Najeeb_Resume.pdf',
  portrait: {
    src: '/assets/portrait-720.webp',
    srcSet: '/assets/portrait-420.webp 420w, /assets/portrait-720.webp 720w, /assets/portrait-1100.webp 1100w',
    alt: 'Portrait of Farhathullah Najeeb',
  },
  interests: ['Fintech & Payment Gateways', 'Real-Time WebRTC Audio/Video', 'Clean Architecture & BLoC', 'Native iOS & Android SDK Bridging', 'Full-Stack Web Systems'],
};

export const education = [
  {
    school: 'MG University',
    place: 'Kerala, India',
    degree: 'Bachelor of Science — Psychology',
    period: 'Graduated',
    score: 'B.Sc Degree',
  },
];

export const experience = [
  {
    company: 'Pips Technologies Pvt Ltd',
    role: 'Senior Software Developer — Flutter',
    place: 'Kochi, Kerala',
    period: 'Jun 2025 — Present',
    points: [
      'Architected and launched GoldVault+ — fintech app for digital gold investments with SIP modules, digital wallets, and real-time portfolio tracking; achieved 4.5★ on both stores.',
      'Engineered NomuPay, Network Pay & HyperPay integrations with PCI-compliant encrypted flows, reducing payment failures by 30%.',
      'Built native SDK bridges via Flutter Method Channels (Kotlin + Swift) for hardware-level Android/iOS feature access.',
      'Streamlined real-time data pipelines with Firebase (Auth, Firestore, FCM) and REST APIs, cutting data sync latency by 35%.',
    ],
  },
  {
    company: 'Crudops Pvt Ltd',
    role: 'Senior Software Developer — Flutter',
    place: 'Ernakulam, Kerala',
    period: 'Jun 2024 — Jun 2025',
    points: [
      'Designed and shipped RingMe — live communication app with WebRTC P2P audio/video, Socket.IO group chat, and QR/NFC device pairing; published on App Store & Play Store within 8-month timeline.',
      'Implemented Apple and Google In-App Purchase subscription flows, enabling 3 premium tier plans and new recurring revenue stream.',
      'Delivered 100% of native iOS features in Swift, completing full App Store release cycle with zero rejection rounds.',
    ],
  },
  {
    company: 'LucidPlus IT Solutions',
    role: 'Software Developer — Flutter',
    place: 'Thrissur, Kerala',
    period: 'Jan 2023 — Jun 2024',
    points: [
      'Developed 3 cross-platform apps (ERP, VILA billing, e-commerce) with Stripe and Razorpay integrations, delivering on time for 3 multi-industry clients.',
      'Reduced app load time by 40% through lazy loading, image caching, and Firebase query tuning across all 3 applications.',
      'Built CI/CD pipelines for App Store and Google Play, cutting release turnaround from 3–4 days to under 2 hours per deployment.',
    ],
  },
];

export type Metric = { value: string; label: string };

export type Project = {
  id: string;
  title: string;
  year: string;
  genre: string;
  logline: string;
  stack: string[];
  build: string[];
  features: string[];
  metrics: Metric[];
  github?: string;
  link?: string;
  image?: string;
  palette: Palette;
  motif: 'shield' | 'flow' | 'tenants';
};

export const projects: Project[] = [
  {
    id: 'goldvault-plus',
    title: 'GoldVault+',
    year: '2025 – Present',
    genre: 'Fintech • Mobile App • WebSockets',
    logline: 'SIP-based digital gold investment platform with real-time WebSocket price feeds, biometric authentication, and digital wallet. Live with 4.5★ rating.',
    stack: ['Flutter', 'Dart', 'WebSockets', 'Firebase', 'Biometrics', 'NomuPay', 'HyperPay'],
    build: [
      'Architected end-to-end digital gold investment application with SIP recurring investments, live spot gold price tickers via WebSockets, and instant sell/buy executions.',
      'Integrated NomuPay, HyperPay, and Network Pay gateways with automated retry logic and zero-loss state persistence, reducing transaction failures by 30%.',
      'Secured financial transactions with biometric authentication (Face ID / Fingerprint) and hardware-backed keystore integration.',
      'Built real-time portfolio analytics with interactive valuation charts, historical price tracking, and instantaneous passbook generation.',
    ],
    features: [
      'Real-time WebSocket spot price feed & live gold ticker',
      'Automated recurring SIP gold investment modules',
      'Unified multi-gateway checkout (NomuPay, HyperPay, Network Pay)',
      'Biometric authentication (Face ID / Fingerprint)',
      'Digital wallet with instant liquidation & delivery options',
      'Encrypted transaction logs & automated invoice generation',
    ],
    metrics: [
      { value: '4.5★', label: 'Average Store Rating' },
      { value: '30%', label: 'Less Payment Failures' },
      { value: '35%', label: 'Faster Data Latency' },
      { value: '0', label: 'Critical Post-Launch Defects' },
      { value: '3+', label: 'Payment Gateways Unified' },
    ],
    github: 'https://github.com/Farhathullah-Najeeb',
    image: '/goldvault_mockup.png',
    palette: amber,
    motif: 'flow',
  },
  {
    id: 'ringme',
    title: 'RingMe',
    year: '2024 – 2025',
    genre: 'Real-Time • WebRTC • Mobile App',
    logline: 'Production audio/video communication app with WebRTC P2P mesh, Socket.IO group messaging, NFC pairing, and In-App Purchases. Published on App Store & Play Store.',
    stack: ['Flutter', 'WebRTC', 'Socket.IO', 'NFC / QR', 'Swift', 'In-App Purchase'],
    build: [
      'Engineered ultra-low latency WebRTC peer-to-peer audio and video calling engine with adaptive bitrate streaming and STUN/TURN failover.',
      'Implemented Swift native plugins for CallKit, PushKit, and background audio session handling on iOS.',
      'Integrated Apple & Google In-App Purchase subscriptions with server-side receipt validation for recurring monetization.',
      'Completed full App Store and Google Play publishing cycle within an 8-month timeline with zero rejection rounds.',
    ],
    features: [
      'P2P WebRTC HD audio & video calls with adaptive bitrate',
      'Socket.IO instant group messaging & read receipts',
      'QR & NFC tap-to-connect device pairing for instant contacts',
      'Apple & Google In-App Purchase recurring subscriptions',
      'Background push notifications with VoIP / CallKit integration',
    ],
    metrics: [
      { value: '8 mo', label: 'Concept to Store Launch' },
      { value: '0', label: 'Rejection Rounds on App Store' },
      { value: '3', label: 'Subscription Tiers' },
      { value: 'HD', label: 'Low-latency WebRTC' },
      { value: '100%', label: 'Native iOS Features in Swift' },
    ],
    link: 'https://apps.apple.com/in/app/ringme-ai/id6504397343',
    github: 'https://github.com/Farhathullah-Najeeb',
    image: '/ringme_mockup.png',
    palette: ocean,
    motif: 'shield',
  },
  {
    id: 'finance-finzoa',
    title: 'Finance Finzoa',
    year: '2024',
    genre: 'Fintech • Web Platform • Analytics',
    logline: 'Web-based personal finance platform with budgeting tools, expense tracking, income forecasting, and interactive financial dashboards.',
    stack: ['React.js', 'Vite.js', 'Tailwind CSS', 'Chart.js', 'REST APIs'],
    build: [
      'Developed modern, responsive web financial platform providing users with visual budgeting tools, cash flow graphs, and expense categorizations.',
      'Implemented modular state management and responsive analytics charts allowing seamless experience across desktop and mobile screens.',
      'Optimized page load speed with code splitting and asset preloading to achieve sub-second render times.',
    ],
    features: [
      'Interactive expense tracking and categorized budgeting',
      'Cash flow forecasting and budget limit alerts',
      'Responsive financial visual dashboards',
      'CSV / PDF statement generation and export',
    ],
    metrics: [
      { value: '100%', label: 'Responsive Design' },
      { value: '<1s', label: 'Dashboard Load Time' },
      { value: 'Live', label: 'Production Status' },
      { value: '10+', label: 'Financial Chart Views' },
      { value: '0', label: 'Data Sync Errors' },
    ],
    link: 'https://www.financefinzoa.com/',
    github: 'https://github.com/Farhathullah-Najeeb',
    image: '/finzoa_mockup.png',
    palette: jade,
    motif: 'tenants',
  },
  {
    id: 'urban-aana',
    title: 'Urban Aana',
    year: '2024',
    genre: 'E-Commerce • Web Platform • Payments',
    logline: 'Kerala-inspired streetwear brand platform with product catalog, order tracking, cart system, and payment gateway integration.',
    stack: ['Vite.js', 'React', 'Payment Gateway', 'Tailwind CSS', 'Framer Motion'],
    build: [
      'Engineered an e-commerce platform for high-traffic apparel drops with dynamic cart management and inventory synchronization.',
      'Integrated payment gateways with instant webhook verification for order confirmation and automated email dispatch.',
    ],
    features: [
      'Product catalog with filtering and instant search',
      'Dynamic shopping cart & checkout flow',
      'Automated order tracking & status notifications',
      'Secure payment gateway integration',
    ],
    metrics: [
      { value: '100%', label: 'Mobile Optimized' },
      { value: 'Live', label: 'Active Store' },
      { value: '99.9%', label: 'Payment Success Rate' },
      { value: 'Fast', label: 'Checkout Flow' },
      { value: 'Kerala', label: 'Cultural Brand' },
    ],
    link: 'https://urbanaana.com/',
    github: 'https://github.com/Farhathullah-Najeeb',
    image: '/urbanaana_mockup.png',
    palette: crimson,
    motif: 'flow',
  },
  {
    id: 'velocity-homes',
    title: 'Velocity Homes',
    year: '2024',
    genre: 'PropTech • Web Platform • Interactive',
    logline: 'Custom home building platform for homeowners in Kerala & Karnataka, featuring project filtering, interactive timelines, and consultation workflows.',
    stack: ['Vite.js', 'React', 'Tailwind CSS', 'Framer Motion', 'REST APIs'],
    build: [
      'Crafted interactive architectural portfolio and construction management platform with rich project showcases and timeline trackers.',
      'Designed dedicated consultation booking workflows tailored for NRI clients with timezone conversion and automated inquiry dispatch.',
    ],
    features: [
      'Interactive construction project showcase & blueprints',
      'Live milestone & progress timeline tracking',
      'Dedicated NRI consultation & quote booking system',
      'Smooth micro-interactions and responsive animations',
    ],
    metrics: [
      { value: 'Featured', label: 'Platform Status' },
      { value: '2 States', label: 'Kerala & Karnataka' },
      { value: '100%', label: 'Smooth 60fps UX' },
      { value: 'NRI', label: 'Client Workflows' },
      { value: 'Custom', label: 'Architecture Suite' },
    ],
    link: 'https://homesbyvelocity.com/',
    github: 'https://github.com/Farhathullah-Najeeb',
    image: '/velocity_mockup.png',
    palette: violet,
    motif: 'tenants',
  },
  {
    id: 'goldvault-admin',
    title: 'GoldVault+ Admin',
    year: '2025',
    genre: 'Admin Dashboard • React • Analytics',
    logline: 'Full-featured web admin dashboard for GoldVault+ — user management, investment plan configuration, transaction monitoring, and real-time analytics.',
    stack: ['React.js', 'Firebase', 'Analytics', 'Tailwind CSS', 'Admin'],
    build: [
      'Engineered comprehensive back-office operations console for real-time monitoring of GoldVault+ financial activities.',
      'Constructed KYC approval pipelines, gold inventory reserves manager, and automated audit logging.',
    ],
    features: [
      'Real-time user & transaction management table',
      'KYC document verification and approval queue',
      'Gold price markup & investment plan configuration',
      'Audit logs with role-based access control (RBAC)',
    ],
    metrics: [
      { value: 'Real-time', label: 'Transaction Monitoring' },
      { value: 'RBAC', label: 'Security Role Levels' },
      { value: 'KYC', label: 'Automated Pipeline' },
      { value: '100%', label: 'Admin Visibility' },
      { value: 'Live', label: 'Operations Suite' },
    ],
    github: 'https://github.com/Farhathullah-Najeeb',
    image: '/goldvault_mockup.png',
    palette: amber,
    motif: 'shield',
  },
];

export type Skill = { name: string; mono: string; note?: string };
export type SkillCategory = { id: string; title: string; subtitle: string; palette: Palette; skills: Skill[] };

export const skillCategories: SkillCategory[] = [
  {
    id: 'mobile',
    title: 'Mobile Development',
    subtitle: 'Cross-platform engineering with clean architecture',
    palette: amber,
    skills: [
      { name: 'Flutter', mono: 'FL', note: '3+ Yrs' },
      { name: 'Dart', mono: 'DA', note: 'Primary' },
      { name: 'Clean Architecture', mono: 'CA', note: 'Standard' },
      { name: 'BLoC Pattern', mono: 'BL', note: 'State' },
      { name: 'Riverpod', mono: 'RP', note: 'State' },
      { name: 'Provider', mono: 'PR', note: 'State' },
      { name: 'Material Design 3', mono: 'M3', note: 'UI/UX' },
      { name: 'Responsive UI', mono: 'UI', note: 'Mobile' },
    ],
  },
  {
    id: 'native',
    title: 'Native & Hardware',
    subtitle: 'iOS & Android native bridge development',
    palette: crimson,
    skills: [
      { name: 'Kotlin', mono: 'KT', note: 'Android' },
      { name: 'Swift', mono: 'SW', note: 'iOS' },
      { name: 'Method Channels', mono: 'MC', note: 'Bridge' },
      { name: 'WebRTC', mono: 'RTC', note: 'P2P Media' },
      { name: 'CallKit & APNs', mono: 'CK', note: 'VoIP' },
      { name: 'QR / NFC Pairing', mono: 'NFC', note: 'Hardware' },
      { name: 'In-App Purchases', mono: 'IAP', note: 'Apple/Google' },
      { name: 'Biometric Auth', mono: 'BIO', note: 'Security' },
    ],
  },
  {
    id: 'fintech',
    title: 'Payments & Fintech',
    subtitle: 'PCI-compliant transactional infrastructure',
    palette: jade,
    skills: [
      { name: 'NomuPay', mono: 'NP', note: 'Live' },
      { name: 'HyperPay', mono: 'HP', note: 'Live' },
      { name: 'Network Pay', mono: 'NET', note: 'Live' },
      { name: 'Stripe', mono: 'ST', note: 'Global' },
      { name: 'Razorpay', mono: 'RZ', note: 'India' },
      { name: 'Apple Pay', mono: 'AP', note: 'iOS' },
      { name: 'Google Pay', mono: 'GP', note: 'Android' },
      { name: 'State Machines', mono: 'SM', note: 'Retry Logic' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend & Real-Time',
    subtitle: 'Distributed messaging, database & cloud services',
    palette: ocean,
    skills: [
      { name: 'WebSockets', mono: 'WS', note: 'Live Feeds' },
      { name: 'Socket.IO', mono: 'SIO', note: 'Chat' },
      { name: 'Firebase Auth', mono: 'FA', note: 'Auth' },
      { name: 'Cloud Firestore', mono: 'FS', note: 'NoSQL' },
      { name: 'Firebase FCM', mono: 'FCM', note: 'Push' },
      { name: 'REST APIs', mono: 'API', note: 'HTTP' },
      { name: 'SQLite', mono: 'SQL', note: 'Local DB' },
      { name: 'Node.js', mono: 'NJ', note: 'Backend' },
    ],
  },
  {
    id: 'web',
    title: 'Web & Frontend',
    subtitle: 'Modern responsive web applications',
    palette: violet,
    skills: [
      { name: 'React.js', mono: 'RE', note: 'Framework' },
      { name: 'Vite.js', mono: 'VT', note: 'Bundler' },
      { name: 'Next.js', mono: 'NX', note: 'SSR' },
      { name: 'TypeScript', mono: 'TS', note: 'Typed' },
      { name: 'Tailwind CSS', mono: 'TW', note: 'Styling' },
      { name: 'JavaScript ES6+', mono: 'JS', note: 'Core' },
      { name: 'HTML5 & CSS3', mono: 'H5', note: 'Markup' },
      { name: 'Framer Motion', mono: 'FM', note: 'Anims' },
    ],
  },
  {
    id: 'devops',
    title: 'Tools & DevOps',
    subtitle: 'Tooling, deployment & automated pipelines',
    palette: emerald,
    skills: [
      { name: 'Git & GitHub', mono: 'GIT', note: 'VCS' },
      { name: 'GitHub Actions', mono: 'GHA', note: 'CI/CD' },
      { name: 'Xcode', mono: 'XC', note: 'iOS' },
      { name: 'Android Studio', mono: 'AS', note: 'Android' },
      { name: 'Postman', mono: 'PM', note: 'API Test' },
      { name: 'Swagger', mono: 'SWG', note: 'Docs' },
      { name: 'Figma', mono: 'FG', note: 'Design' },
      { name: 'CI/CD Pipelines', mono: 'CI', note: '<2h Deploy' },
    ],
  },
];

export const skillEvidence: Record<string, string[]> = {
  Flutter: ['3+ years in production', 'GoldVault+', 'RingMe', '3 client apps at LucidPlus'],
  Dart: ['Asynchronous streams', 'Clean architecture', 'Custom isolate compute'],
  'Clean Architecture': ['BLoC separation', 'Domain/Data/Presentation layers', 'Zero defect launches'],
  'BLoC Pattern': ['Complex state handling', 'Payment flows', 'Live gold price feeds'],
  Riverpod: ['Reactive dependency injection', 'StateNotifier', 'Modular apps'],
  Kotlin: ['Android native Method Channels', 'Keystore biometric bridge', 'Background workers'],
  Swift: ['iOS CallKit integration', 'PushKit VoIP', 'In-App Purchase StoreKit 2'],
  'Method Channels': ['Bidirectional native bridge', 'Hardware sensors', 'NFC & QR'],
  WebRTC: ['P2P mesh video & audio', 'STUN/TURN failover', 'RingMe live calling'],
  'CallKit & APNs': ['Native iOS incoming call screens', 'VoIP background wakeups'],
  NomuPay: ['GoldVault+ PCI-compliant checkout', 'Card tokenization', '30% drop in failure rates'],
  HyperPay: ['Regional payment gateway routing', 'Encrypted payment sessions'],
  Stripe: ['Subscription checkout', 'Customer portal integration', 'Webhook verification'],
  Razorpay: ['UPI intent integration', 'Custom payment callbacks'],
  WebSockets: ['Live gold price ticker', 'Zero latency trade feeds', 'Reconnection fallback'],
  'Socket.IO': ['Real-time group chat', 'Presence indicators', 'Typing statuses'],
  'React.js': ['Finance Finzoa', 'Urban Aana', 'Velocity Homes', 'GoldVault+ Admin'],
  'Vite.js': ['Blazing fast HMR', 'Optimized production bundles', 'Modern web standard'],
  'CI/CD Pipelines': ['Reduced release turnaround from 4 days to <2 hours', 'Fastlane & GitHub Actions'],
};

export type Achievement = {
  id: string;
  laurel: string;
  title: string;
  org: string;
  detail: string;
  link?: string;
};

export const achievements: Achievement[] = [
  {
    id: 'production-apps',
    laurel: '5 PRODUCTION APPS',
    title: '5 Live Mobile Apps',
    org: 'App Store & Google Play',
    detail: 'Shipped 5 production mobile apps maintaining 4.5★ average rating with zero critical post-launch defects.',
    link: 'https://github.com/Farhathullah-Najeeb',
  },
  {
    id: 'payment-resilience',
    laurel: 'PAYMENT RELIABILITY',
    title: '30% Less Failures',
    org: 'Unified Payment Engine',
    detail: 'Engineered multi-gateway abstraction across NomuPay, HyperPay, Network Pay, Stripe and Razorpay with retry logic.',
    link: 'https://github.com/Farhathullah-Najeeb',
  },
  {
    id: 'performance-tuning',
    laurel: 'PERFORMANCE TUNING',
    title: '40% Faster Load',
    org: 'Architecture Tuning',
    detail: 'Optimized app startup, lazy loading, cached network images, and tuned Firebase queries across all deployed apps.',
    link: 'https://github.com/Farhathullah-Najeeb',
  },
  {
    id: 'zero-rejection',
    laurel: 'ZERO-REJECTION LAUNCH',
    title: 'Flawless App Store Release',
    org: 'RingMe Launch',
    detail: 'Delivered 100% native iOS Swift features, passing Apple App Store strict review with zero rejection rounds.',
    link: 'https://apps.apple.com/in/app/ringme-ai/id6504397343',
  },
  {
    id: 'cicd-velocity',
    laurel: 'RELEASE VELOCITY',
    title: '2-Hour Releases',
    org: 'CI/CD Automation',
    detail: 'Automated build and signing workflows, slashing deployment turnaround from 3–4 days to under 2 hours.',
    link: 'https://github.com/Farhathullah-Najeeb',
  },
];

export type Certification = { name: string; issuer: string; link: string };

export const certifications: Certification[] = [
  {
    name: 'Flutter Development Specialist',
    issuer: 'Edapt',
    link: 'https://github.com/Farhathullah-Najeeb',
  },
  {
    name: 'Web Application Security',
    issuer: 'OWASP',
    link: 'https://github.com/Farhathullah-Najeeb',
  },
  {
    name: 'Clean Architecture & BLoC in Flutter',
    issuer: 'Mobile Guild',
    link: 'https://github.com/Farhathullah-Najeeb',
  },
  {
    name: 'App Store & Google Play Production Deployment',
    issuer: 'Apple & Google',
    link: 'https://github.com/Farhathullah-Najeeb',
  },
  {
    name: 'Real-Time Communication with WebRTC',
    issuer: 'WebRTC Standards',
    link: 'https://github.com/Farhathullah-Najeeb',
  },
  {
    name: 'Payment Gateway Integration & PCI Security',
    issuer: 'Fintech Standards',
    link: 'https://github.com/Farhathullah-Najeeb',
  },
];

export type Episode = {
  code: string;
  title: string;
  description: string;
  tags: string[];
  runtime: string;
  palette: Palette;
};

export type Season = {
  number: number;
  title: string;
  period: string;
  synopsis: string;
  episodes: Episode[];
};

export const seasons: Season[] = [
  {
    number: 1,
    title: 'The Spark & Foundations',
    period: '2022 – 2023',
    synopsis: 'Discovering mobile architecture, Dart fundamentals, and building the first production-grade mobile applications.',
    episodes: [
      {
        code: 'S01 E01',
        title: 'The Deep Dive',
        description: 'Immersed into Dart, reactive programming paradigms, and the Flutter widget lifecycle.',
        tags: ['Flutter', 'Dart', 'OOP', 'Mobile UI'],
        runtime: '2022',
        palette: amber,
      },
      {
        code: 'S01 E02',
        title: 'Clean Architecture Foundations',
        description: 'Architecting maintainable separation of concerns with domain layers, repositories, and BLoC state management.',
        tags: ['Clean Architecture', 'BLoC', 'State Management'],
        runtime: '2023',
        palette: violet,
      },
    ],
  },
  {
    number: 2,
    title: 'Production Scale at LucidPlus',
    period: '2023 – 2024',
    synopsis: 'Shipping 3 cross-platform applications across ERP, VILA billing, and e-commerce with payment integrations.',
    episodes: [
      {
        code: 'S02 E01',
        title: 'Multi-Client Deployments',
        description: 'Engineered 3 full cross-platform apps with Stripe & Razorpay checkout flows for multi-industry clients.',
        tags: ['ERP', 'Billing', 'Stripe', 'Razorpay'],
        runtime: 'LucidPlus',
        palette: ocean,
      },
      {
        code: 'S02 E02',
        title: '40% Performance Breakthrough',
        description: 'Cut app loading times by 40% using lazy loading, network image caching, and Firebase query optimizations.',
        tags: ['Performance', 'Firebase Tuning', 'Optimization'],
        runtime: 'LucidPlus',
        palette: jade,
      },
      {
        code: 'S02 E03',
        title: 'Automating the Pipeline',
        description: 'Built automated CI/CD deployment pipelines, slashing store release turnaround from 4 days to under 2 hours.',
        tags: ['CI/CD', 'App Store', 'Google Play'],
        runtime: 'LucidPlus',
        palette: emerald,
      },
    ],
  },
  {
    number: 3,
    title: 'Real-Time & Native Mastery at Crudops',
    period: '2024 – 2025',
    synopsis: 'Designing and publishing RingMe — live WebRTC audio/video calling, Socket.IO group chat, and native iOS Swift bridges.',
    episodes: [
      {
        code: 'S03 E01',
        title: 'The WebRTC Engine',
        description: 'Engineered low-latency P2P audio and video calling engine with adaptive bitrate streaming.',
        tags: ['WebRTC', 'P2P', 'Socket.IO', 'Real-Time'],
        runtime: 'Crudops',
        palette: crimson,
      },
      {
        code: 'S03 E02',
        title: 'Native Swift & Hardware Bridges',
        description: 'Wrote 100% native iOS Swift code for CallKit incoming call UI, PushKit VoIP, and NFC/QR device pairing.',
        tags: ['Swift', 'CallKit', 'NFC', 'Method Channels'],
        runtime: 'Crudops',
        palette: violet,
      },
      {
        code: 'S03 E03',
        title: 'Monetization & Store Approval',
        description: 'Integrated In-App Purchases and completed full App Store publishing with zero rejection rounds.',
        tags: ['In-App Purchases', 'Store Approval', 'Monetization'],
        runtime: 'Crudops',
        palette: ocean,
      },
    ],
  },
  {
    number: 4,
    title: 'Fintech Leadership at Pips Technologies',
    period: '2025 – Present',
    synopsis: 'Architecting GoldVault+ — digital gold investments, multi-gateway checkout, biometric security, and 4.5★ store rating.',
    episodes: [
      {
        code: 'S04 E01',
        title: 'GoldVault+ Digital Investments',
        description: 'Launched SIP gold investment platform with real-time WebSocket spot prices and biometric authentication.',
        tags: ['Flutter', 'Fintech', 'WebSockets', 'Biometrics'],
        runtime: 'Pips Technologies',
        palette: amber,
      },
      {
        code: 'S04 E02',
        title: 'The Unified Payment Gateway',
        description: 'Engineered NomuPay, Network Pay & HyperPay integrations, reducing payment failure rates by 30%.',
        tags: ['NomuPay', 'HyperPay', 'Network Pay', 'PCI-DSS'],
        runtime: 'Pips Technologies',
        palette: jade,
      },
      {
        code: 'S04 E03',
        title: 'Web Platforms & Ecosystem',
        description: 'Shipped Finance Finzoa, Urban Aana e-commerce, and Velocity Homes construction management platform.',
        tags: ['React', 'Vite', 'E-Commerce', 'Web Dashboard'],
        runtime: 'Full-Stack',
        palette: crimson,
      },
    ],
  },
  {
    number: 5,
    title: "What's Next",
    period: 'Now streaming',
    synopsis: 'Expanding the frontier into high-scale distributed systems, AI-powered mobile architectures, and cloud platforms.',
    episodes: [
      {
        code: 'S05 E01',
        title: 'The Next Architecture',
        description: 'Architecting next-generation intelligent mobile systems with offline-first sync and distributed cloud backends.',
        tags: ['Distributed Systems', 'AI Mobile', 'Cloud Architecture'],
        runtime: 'In production',
        palette: violet,
      },
    ],
  },
];

export type TopPick = { label: string; title: string; detail: string; palette: Palette };

export const topPicks: TopPick[] = [
  { label: 'Track Record', title: '5 Production Apps', detail: 'App Store & Google Play • 4.5★ average rating', palette: amber },
  { label: 'The Fintech Flagship', title: 'GoldVault+', detail: 'SIP digital gold investment • Live WebSockets', palette: crimson },
  { label: 'Real-Time WebRTC', title: 'RingMe Calling', detail: 'P2P HD Video/Audio • In-App Purchases', palette: ocean },
  { label: 'Core Architecture', title: 'Clean / BLoC', detail: 'Clean Architecture with BLoC & Riverpod', palette: violet },
  { label: 'Payments Mastered', title: '5 Payment Gateways', detail: 'NomuPay, HyperPay, Stripe, Razorpay, Apple Pay', palette: jade },
  { label: 'Native Bridges', title: 'Swift & Kotlin', detail: 'Method Channels, CallKit, PushKit, NFC & QR', palette: amber },
  { label: 'Optimization High', title: '40% Faster Load', detail: 'Lazy loading, cached images & Firebase query tuning', palette: crimson },
  { label: 'Payment Resilience', title: '30% Less Failures', detail: 'Unified payment gateway abstraction layer', palette: ocean },
  { label: 'DevOps Velocity', title: '2-Hour Releases', detail: 'Automated CI/CD from 4 days to <2 hours', palette: jade },
  { label: 'Web Ecosystem', title: 'Full-Stack Web', detail: 'React.js, Vite.js, Next.js & Tailwind CSS', palette: violet },
];

/** Slides for the "▶ Play Intro" cinematic sequence. */
export type IntroSlide = { kicker: string; title: string; lines: string[]; chips?: string[] };

export const introSlides: IntroSlide[] = [
  {
    kicker: 'Lead Role',
    title: 'Farhathullah Najeeb',
    lines: ['Senior Mobile & Software Engineer', '3+ Years of Production Experience · Kerala, India'],
    chips: ['Flutter', 'Dart', 'Swift', 'Kotlin', 'React.js'],
  },
  {
    kicker: 'Production Record',
    title: '5 Live Mobile Apps',
    lines: ['Published on Apple App Store & Google Play Store', '4.5★ Average Store Rating · Zero Critical Defects'],
    chips: ['App Store', 'Google Play', '4.5★ Live'],
  },
  {
    kicker: 'Fintech & Payments',
    title: 'GoldVault+ & Gateways',
    lines: [
      'SIP Digital Gold Platform with Live WebSocket Tickers',
      'NomuPay, HyperPay, Network Pay, Stripe & Razorpay',
      'Unified Gateway Engine reducing payment dropouts by 30%',
    ],
  },
  {
    kicker: 'Real-Time Communication',
    title: 'RingMe WebRTC',
    lines: [
      'P2P Audio/Video Mesh & Socket.IO Group Messaging',
      'Native Swift CallKit, PushKit & NFC/QR Device Pairing',
      'Shipped within 8-month timeline with zero App Store rejection rounds',
    ],
  },
  {
    kicker: 'Core Architecture',
    title: 'Clean Architecture & Native Bridging',
    lines: [
      'BLoC & Riverpod State Management · Method Channels',
      '40% Faster App Load Times through lazy loading & caching',
      'Automated CI/CD pipelines deploying in under 2 hours',
    ],
  },
  {
    kicker: 'Web Platforms',
    title: 'Full-Stack Ecosystem',
    lines: [
      'Finance Finzoa · Urban Aana E-Commerce · Velocity Homes',
      'GoldVault+ Admin Dashboard with KYC & real-time analytics',
    ],
  },
  {
    kicker: 'Current Mission',
    title: 'Now Streaming',
    lines: ['Architecting high-scale distributed systems, real-time media & intelligent mobile apps'],
  },
];

export type ProfileId = 'farhathullah' | 'recruiter' | 'developer' | 'creative';
export type SectionId = 'about' | 'journey' | 'originals' | 'picks' | 'skills' | 'moments' | 'story';

export const viewerProfiles: {
  id: ProfileId;
  name: string;
  blurb: string;
  color: string;
  order: SectionId[];
}[] = [
    {
      id: 'farhathullah',
      name: 'Farhathullah',
      blurb: 'The full series, in order',
      color: '#e5132b',
      order: ['about', 'journey', 'originals', 'picks', 'skills', 'moments', 'story'],
    },
    {
      id: 'recruiter',
      name: 'Recruiter',
      blurb: 'Resume, achievements & skills first',
      color: '#4cc9ff',
      order: ['story', 'moments', 'skills', 'originals', 'about', 'journey', 'picks'],
    },
    {
      id: 'developer',
      name: 'Developer',
      blurb: 'Projects, stack & GitHub first',
      color: '#46e3a8',
      order: ['originals', 'skills', 'journey', 'moments', 'about', 'picks', 'story'],
    },
    {
      id: 'creative',
      name: 'Creative',
      blurb: 'The story arc & highlights first',
      color: '#ffb547',
      order: ['journey', 'picks', 'originals', 'moments', 'about', 'skills', 'story'],
    },
  ];

export const sectionMeta: Record<SectionId, { nav: string; card: string; meta: string; palette: Palette }> = {
  about: { nav: 'About', card: 'About Me', meta: 'The Pilot • Engineering background & focus', palette: violet },
  journey: { nav: 'Journey', card: 'My Journey', meta: `${seasons.length} Seasons • ${seasons.reduce((n, s) => n + s.episodes.length, 0)} Episodes`, palette: amber },
  originals: { nav: 'Originals', card: 'My Projects', meta: `${projects.length} Originals • 2023 – 2026`, palette: crimson },
  picks: { nav: 'Top Picks', card: 'Top Picks', meta: 'Top 10 from Farhathullah', palette: jade },
  skills: { nav: 'Skills', card: 'My Skills', meta: `${skillCategories.length} Categories`, palette: ocean },
  moments: { nav: 'Moments', card: 'My Achievements', meta: `${achievements.length} Moments • ${certifications.length} Credentials`, palette: crimson },
  story: { nav: 'Resume', card: 'The Full Story', meta: 'Resume • View & contact', palette: violet },
};

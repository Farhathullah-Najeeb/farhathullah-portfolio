export const personal = {
  name: "Farhathullah Najeeb",
  title: "Mobile & Software Engineer ",
  subtitle: "Mobile Apps & Custom Software Specialist",
  typewriterRoles: [
    "Mobile & Software Engineer",
    "Full-Stack Developer",
    "Mobile Architect",
    "Fintech Specialist",
    "Real-Time Systems Engineer"
  ],
  bio: "Senior Mobile & Software Engineer with 3+ years of experience and 5 production apps live on App Store and Google Play, achieving 4.5+ star ratings with zero critical post-launch defects. Specialist in payment gateways, real-time WebRTC communication, Clean Architecture, and custom web platforms.",
  quote: "Turning complex financial systems and real-time communications into seamless mobile and web experiences.",
  email: "farhathullahmn@gmail.com",
  phone: "+91 9188044462",
  location: "Kerala, India",
  linkedin: "https://www.linkedin.com/in/farhathullah-najeeb-954a0b238",
  github: "https://github.com/Farhathullah-Najeeb",
  whatsapp: "https://wa.me/919188044462",
  instagram: "https://www.instagram.com/farhathullah_najeeb",
  heroImage: "/my.jpg",
  aboutImage: "/myimage.jpeg",
};

export const stats = [
  { number: "3+", label: "Years Experience" },
  { number: "5", label: "Production Apps" },
  { number: "5", label: "Payment Gateways" },
  { number: "4.5★", label: "Avg Store Rating" },
];

export const achievements = [
  { icon: "🏆", metric: "5 Apps Shipped", detail: "App Store & Play Store — 4.5★ ratings, zero critical post-launch defects" },
  { icon: "⚡", metric: "30% Less Payment Failures", detail: "Via unified gateway abstraction with retry logic" },
  { icon: "🚀", metric: "40% Faster Load Times", detail: "Via lazy loading, image caching & Firebase query optimization" },
  { icon: "🔒", metric: "5 Payment Gateways", detail: "PCI-compliant end-to-end encrypted transaction flows" },
];

export const skills = [
  {
    category: "Mobile Development",
    tags: ["Flutter", "Dart", "Clean Architecture", "BLoC", "Riverpod", "Provider", "Material Design", "Responsive UI"],
  },
  {
    category: "Native & Hardware",
    tags: ["Kotlin", "Swift", "Flutter Method Channels", "APNs", "WebRTC", "QR/NFC Integration", "In-App Purchases"],
  },
  {
    category: "Payments & Fintech",
    tags: ["Stripe", "Razorpay", "NomuPay", "HyperPay", "Network Pay", "Apple Pay", "Google Pay"],
  },
  {
    category: "Backend & Cloud",
    tags: ["REST APIs", "WebSockets", "Socket.IO", "Firebase Auth", "Firestore", "FCM", "Firebase Storage", "SQLite"],
  },
  {
    category: "Web & Frontend",
    tags: ["React.js", "Vite.js", "Next.js", "TypeScript", "Tailwind CSS", "JavaScript ES6+", "HTML5", "CSS3"],
  },
  {
    category: "Tools & DevOps",
    tags: ["Git", "GitHub Actions", "CI/CD", "Postman", "Swagger", "Xcode", "Android Studio", "Figma"],
  },
];

export const competencies = [
  "Fintech App Development",
  "Payment Gateway Integration",
  "Clean Architecture / BLoC",
  "Real-Time Systems (WebRTC)",
  "Native SDK Bridging",
  "CI/CD & Release Management",
  "Firebase Integration",
  "Cross-Platform UI/UX",
];

export const projects = [
  {
    id: "01",
    name: "GoldVault+",
    category: "Fintech · Mobile App",
    desc: "SIP-based gold investment platform with real-time WebSocket price feeds, biometric authentication (Face ID/Fingerprint), interactive portfolio analytics, and digital wallet. Live on App Store & Play Store with 4.5★ rating.",
    tags: ["Flutter", "Fintech", "WebSockets", "Firebase", "Biometric"],
    link: null,
    github: "https://github.com/Farhathullah-Najeeb",
    badge: "4.5★ Live",
  },
  {
    id: "02",
    name: "GoldVault+ Admin",
    category: "Web Dashboard",
    desc: "Full-featured admin dashboard for GoldVault+ — user management, investment plan configuration, transaction monitoring, KYC approvals, and real-time analytics.",
    tags: ["React.js", "Firebase", "Analytics", "Admin"],
    link: null,
    github: "https://github.com/Farhathullah-Najeeb",
    badge: "BUILDING",
    status: "in-progress"
  },
  {
    id: "03",
    name: "RingMe",
    category: "Real-Time Communication · Mobile App",
    desc: "Live communication app with WebRTC P2P audio/video calls, Socket.IO group chat, QR/NFC device pairing, and In-App Purchase subscription monetization. Published on App Store & Play Store within 8-month timeline, zero rejection rounds.",
    tags: ["Flutter", "WebRTC", "Socket.IO", "NFC", "Swift", "In-App Purchase"],
    link: "https://apps.apple.com/in/app/ringme-ai/id6504397343",
    github: "https://github.com/Farhathullah-Najeeb",
    badge: "Live",
  },
  {
    id: "04",
    name: "Finance Finzoa",
    category: "Fintech · Web Platform",
    desc: "Web-based personal finance platform with budgeting tools, expense tracking, financial analytics, and reporting dashboards.",
    tags: ["Vite.js", "React", "Fintech", "Web"],
    link: "https://www.financefinzoa.com/",
    github: "https://github.com/Farhathullah-Najeeb",
    badge: "Live",
  },
  {
    id: "05",
    name: "Urban Aana",
    category: "E-Commerce · Web",
    desc: "Kerala-inspired streetwear brand platform with product catalog, order tracking, payment gateway integration, cart, and complete e-commerce workflow.",
    tags: ["Vite.js", "E-Commerce", "Payments", "Web"],
    link: "https://urbanaana.com/",
    github: "https://github.com/Farhathullah-Najeeb",
    badge: "Live",
  },
  {
    id: "06",
    name: "Velocity Homes",
    category: "Construction Management · Web Platform",
    desc: "Custom home building and management platform for homeowners in Kerala & Karnataka, featuring project filtering, interactive timelines, NRI services, and consultation workflows.",
    tags: ["Vite.js", "React", "Tailwind CSS", "Framer Motion", "Web"],
    link: "https://homesbyvelocity.com/",
    github: null,
    badge: "Featured",
  },

];

export const experience = [
  {
    company: "Pips Technologies Pvt Ltd",
    role: "Senior Software Developer — Flutter",
    location: "Kochi, Kerala",
    period: "Jun 2025 — Present",
    points: [
      "Architected and launched GoldVault+ — fintech app for digital gold investments with SIP modules, digital wallets, and real-time portfolio tracking; achieved 4.5★ on both stores.",
      "Engineered NomuPay, Network Pay & HyperPay integrations with PCI-compliant encrypted flows, reducing payment failures by 30%.",
      "Built native SDK bridges via Flutter Method Channels (Kotlin + Swift) for hardware-level Android/iOS feature access.",
      "Streamlined real-time data pipelines with Firebase (Auth, Firestore, FCM) and REST APIs, cutting data sync latency by 35%.",
    ],
  },
  {
    company: "Crudops Pvt Ltd",
    role: "Senior Software Developer — Flutter",
    location: "Ernakulam, Kerala",
    period: "Jun 2024 — Jun 2025",
    points: [
      "Designed and shipped RingMe — live communication app with WebRTC P2P audio/video, Socket.IO group chat, and QR/NFC device pairing; published on App Store & Play Store within 8-month timeline.",
      "Implemented Apple and Google In-App Purchase subscription flows, enabling 3 premium tier plans and new recurring revenue stream.",
      "Delivered 100% of native iOS features in Swift, completing full App Store release cycle with zero rejection rounds.",
    ],
  },
  {
    company: "LucidPlus IT Solutions",
    role: "Software Developer — Flutter",
    location: "Thrissur, Kerala",
    period: "Jan 2023 — Jun 2024",
    points: [
      "Developed 3 cross-platform apps (ERP, VILA billing, e-commerce) with Stripe and Razorpay integrations, delivering on time for 3 multi-industry clients.",
      "Reduced app load time by 40% through lazy loading, image caching, and Firebase query tuning across all 3 applications.",
      "Built CI/CD pipelines for App Store and Google Play, cutting release turnaround from 3–4 days to under 2 hours per deployment.",
    ],
  },
];

export const education = [
  {
    degree: "B.Sc Psychology",
    institution: "MG University, Kerala",
    year: null,
  },
];

export const certifications = [
  { name: "Flutter Development", issuer: "Edapt", icon: "📱" },
  { name: "Web Application Security", issuer: "OWASP", icon: "🔒" },
];

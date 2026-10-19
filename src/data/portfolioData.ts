export interface Project {
  id: string;
  title: string;
  category: 'Education' | 'Health' | 'Identity & Finance' | 'Public Sector';
  subtitle: string;
  description: string;
  problem: string;
  solution: string;
  techStack: string[];
  status: 'Production' | 'Active Pilot' | 'National Deployment';
  metrics: string;
  demoUrl?: string;
}

export interface ExperienceItem {
  period: string;
  role: string;
  organization: string;
  location: string;
  summary: string;
  highlights: string[];
  skills: string[];
}

export interface SkillCategory {
  category: string;
  iconName: string;
  skills: { name: string; level: number; description: string }[];
}

export interface Testimonial {
  name: string;
  role: string;
  organization: string;
  comment: string;
  avatar: string;
}

export const PORTFOLIO_DATA = {
  owner: {
    name: "Golebileone Setlamelo",
    alias: "Quinton",
    preferredName: "Quinton",
    avatar: "/src/assets/images/profile_portrait_1792068517850.jpg",
    title: "Full-Stack Developer & Digital Transformation Specialist",
    location: "Mabutsane, Botswana",
    currentRole: "Information Technology Officer across primary schools in Mabutsane District, under BOCRA's Universal Access and Service Fund (UASF) within the Ministry of Child Welfare and Basic Education.",
    education: "BSc (Hons) Computer Systems Engineering (2:1), University of Sunderland",
    experienceYears: "12+ Years ICT Experience",
    bio: "Dedicated digital transformation specialist and senior full-stack architect engineering robust, scalable software solutions for Botswana's public sector and educational infrastructure. Bridging community empowerment with cutting-edge cloud, IoT, and high-security systems.",
    email: "quintonbileon@gmail.com",
    phone: "+267 [Contact via Secure Form]",
    socials: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com"
    },
    stats: {
      ictYears: 12,
      schoolsServed: 24,
      productsBuilt: 15,
      systemUptime: "99.9%"
    }
  },

  projects: [
    {
      id: "edu-suite",
      title: "Edu-Suite Ecosystem",
      category: "Education",
      subtitle: "Unified digital management platform for Botswana primary & secondary schools",
      description: "An integrated suite comprising Edu-VISION (smart classroom analytics), Edu-METRICS (student performance tracking), Edu-DEPLOY (inventory & device asset management), and Edu-BANK (digital resource repository).",
      problem: "Fragmented digital records, paper-based reporting delays, and inadequate visibility into ICT asset allocation across remote rural schools.",
      solution: "Engineered a low-bandwidth optimized progressive web application suite allowing offline-first synchronization, automated reporting for Ministry officials, and centralized resource pooling.",
      techStack: ["React", "TypeScript", "Node.js", "PostgreSQL", "PWA", "Tailwind CSS"],
      status: "National Deployment",
      metrics: "Deployed across 24+ Mabutsane District schools with 4,500+ active student records."
    },
    {
      id: "nexus-kyc",
      title: "NexusKYC",
      category: "Identity & Finance",
      subtitle: "Advanced e-KYC Identity Verification & Compliance System",
      description: "Secure digital onboarding and identity verification platform combining national ID OCR, biometric face matching, and liveness detection.",
      problem: "High friction in remote digital onboarding and risk of synthetic identity fraud in financial and public services.",
      solution: "Developed an edge-accelerated OCR and cryptographic verification gateway with sub-second response times and zero persistent raw biometric storage.",
      techStack: ["Python", "FastAPI", "React", "OpenCV", "PostgreSQL", "Docker"],
      status: "Production",
      metrics: "Processed over 12,000 secure identity verifications with 99.4% first-pass accuracy."
    },
    {
      id: "med-track",
      title: "MedTrack BW",
      category: "Health",
      subtitle: "National Medicine Supply Chain & Cold Chain Visibility",
      description: "Real-time IoT telemetry and logistics tracking system for pharmaceutical distribution across rural health posts and clinics.",
      problem: "Spoilage of temperature-sensitive vaccines and essential medicines due to transit delays and cold-chain monitoring blind spots.",
      solution: "Implemented IoT sensor integration with cellular telemetry, automated alerting for thermal excursions, and predictive inventory restocking algorithms.",
      techStack: ["Node.js", "MQTT", "React", "PostgreSQL", "Chart.js", "Redis"],
      status: "Active Pilot",
      metrics: "Reduced rural clinic stockouts by 34% and eliminated unmonitored vaccine excursions."
    },
    {
      id: "electro-shield",
      title: "ElectroShield",
      category: "Public Sector",
      subtitle: "National Electronics Registry & Compliance Tracker",
      description: "Regulatory tracking and compliance audit platform for electronic equipment import standards and electrical safety certification.",
      problem: "Proliferation of substandard electronic imports and complex manual certification workflows between regulatory bodies.",
      solution: "Built a transparent registry portal with automated barcode/serial number verification, digital certificates, and inspector mobile check-in.",
      techStack: ["TypeScript", "Next.js", "PostgreSQL", "Tailwind CSS", "Zod"],
      status: "Production",
      metrics: "Streamlined inspection clearance times by 65% for regional trade partners."
    },
    {
      id: "fasta-id",
      title: "FastaID",
      category: "Identity & Finance",
      subtitle: "Mobile-First Financial Identity & Inclusion Registry",
      description: "Lightweight USSD and web-hybrid identity registry empowering unbanked citizens to establish verified credentials for micro-credit and social grants.",
      problem: "Exclusion of rural populations from digital financial ecosystems due to lack of formal documentation and smartphone barriers.",
      solution: "Created dual-interface platform supporting both feature-phone USSD interactions and rich smartphone PWA registration backed by cryptographic tokenization.",
      techStack: ["Node.js", "Express", "PostgreSQL", "Redis", "React"],
      status: "Active Pilot",
      metrics: "Onboarded 8,500+ previously unbanked citizens across Kgalagadi region."
    },
    {
      id: "healthlink-bw",
      title: "HealthLink-BW",
      category: "Health",
      subtitle: "Interoperable Electronic Medical Record (EMR) Bridge",
      description: "Secure health data exchange middleware connecting disparate clinic records into a unified national patient index with strict RBAC.",
      problem: "Siloed patient histories between district clinics leading to delayed emergency diagnoses and duplicated testing.",
      solution: "Designed FHIR-compliant secure API gateway with end-to-end encryption, audit logging, and offline local caching.",
      techStack: ["TypeScript", "Express", "PostgreSQL", "FHIR Standards", "Docker"],
      status: "National Deployment",
      metrics: "Linked 18 clinics with over 60,000 patient encounter records securely."
    },
    {
      id: "bid-ready-360",
      title: "BidReady360",
      category: "Public Sector",
      subtitle: "Supplier Registration, EOI, and RFP Tender Platform",
      description: "Digital procurement gateway enabling local SMMEs to register, submit compliance documents, and respond to public sector tenders.",
      problem: "Complex tender application processes and lack of transparency disadvantaging rural small businesses.",
      solution: "Built intuitive guided submission wizard with automatic compliance pre-checks, secure document vault, and encrypted evaluation scoring.",
      techStack: ["React", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS"],
      status: "Production",
      metrics: "Over 450 local businesses successfully registered and awarded public contracts."
    } as Project
  ] as Project[],

  experience: [
    {
      period: "2019 — Present",
      role: "Information Technology Officer",
      organization: "BOCRA UASF / Ministry of Child Welfare and Basic Education",
      location: "Mabutsane District, Botswana",
      summary: "Leading digital transformation, ICT infrastructure deployment, and educational software integration across primary schools in the Mabutsane District under the Universal Access and Service Fund.",
      highlights: [
        "Deployed Edu-Suite across 24 primary schools, connecting over 4,500 students to digital learning tools.",
        "Managed school network infrastructure, VSAT/LTE internet gateways, and hardware maintenance.",
        "Conducted digital literacy and IT capacity building workshops for educators and district staff."
      ],
      skills: ["EdTech", "Network Infrastructure", "Systems Architecture", "Project Management", "Public Sector IT"]
    },
    {
      period: "2018 — 2019",
      role: "Freelance Full-Stack Developer",
      organization: "SDK Digital Labs Botswana",
      location: "Gaborone / Remote",
      summary: "Delivered bespoke software products, web portals, and database architectures for regional enterprises and government agencies.",
      highlights: [
        "Developed custom e-commerce and verification portals with secure payment gateway integrations.",
        "Optimized legacy database performance by 40% for high-volume transactional workloads."
      ],
      skills: ["React", "Node.js", "PostgreSQL", "API Design", "Docker"]
    },
    {
      period: "2014 — 2018",
      role: "Systems Engineer",
      organization: "Metrotech",
      location: "Botswana",
      summary: "Spearheaded hardware deployments, enterprise server administration, network security audits, and client technical support operations.",
      highlights: [
        "Maintained 99.9% uptime across critical client server clusters and network switches.",
        "Automated backup and disaster recovery protocols, eliminating data loss risks.",
        "Provided frontline technical troubleshooting and tier-3 escalation resolution."
      ],
      skills: ["Systems Engineering", "Network Security", "Server Administration", "Hardware Diagnostics"]
    }
  ] as ExperienceItem[],

  skills: [
    {
      category: "Frontend Architecture",
      iconName: "Layout",
      skills: [
        { name: "React / Next.js", level: 95, description: "Advanced component design, SSR, state management & PWA." },
        { name: "TypeScript", level: 90, description: "Strict type safety, generics, and robust codebase maintainability." },
        { name: "Tailwind CSS / UI", level: 95, description: "Responsive glassmorphism, fluid animations & design systems." }
      ]
    },
    {
      category: "Backend & APIs",
      iconName: "Server",
      skills: [
        { name: "Node.js / Express", level: 90, description: "RESTful APIs, asynchronous event handling & microservices." },
        { name: "Python / FastAPI", level: 85, description: "High-performance backend services & data processing scripts." },
        { name: "PostgreSQL / SQL", level: 90, description: "Advanced relational schema design, indexing & query optimization." }
      ]
    },
    {
      category: "Cloud & DevOps",
      iconName: "Cloud",
      skills: [
        { name: "Docker & Containerization", level: 85, description: "Multi-container deployments, orchestration & consistency." },
        { name: "Linux Administration", level: 90, description: "Ubuntu/Debian server hardening, bash scripting & cron automation." },
        { name: "CI/CD & Cloud Run", level: 85, description: "Automated pipelines, cloud deployments & zero-downtime releases." }
      ]
    },
    {
      category: "Data & AI",
      iconName: "Cpu",
      skills: [
        { name: "Gemini API / LLMs", level: 85, description: "Integration of generative AI features & smart assistants." },
        { name: "Data Analytics & Telemetry", level: 90, description: "Real-time dashboards, IoT MQTT feeds & reporting metrics." },
        { name: "OCR & Biometric Pipelines", level: 80, description: "Computer vision identity document parsing & validation." }
      ]
    },
    {
      category: "Digital Transformation",
      iconName: "Globe",
      skills: [
        { name: "Public Sector ICT Strategy", level: 95, description: "Bridging digital divides in rural schools and municipal services." },
        { name: "ICT Infrastructure & VSAT", level: 90, description: "Remote connectivity, school lab setups & hardware lifecycles." },
        { name: "Security & Compliance", level: 88, description: "Data privacy standards, RBAC and cryptographic encryption." }
      ]
    }
  ] as SkillCategory[],

  education: [
    {
      degree: "BSc (Hons) Computer Systems Engineering (2:1)",
      institution: "University of Sunderland",
      period: "Graduated",
      description: "Rigorous academic foundation covering distributed systems, network architecture, advanced algorithms, and secure software engineering."
    },
    {
      degree: "Diploma in Information Technology & Systems",
      institution: "Tertiary Education Institution",
      period: "Completed",
      description: "Comprehensive practical grounding in software development, database management, and systems troubleshooting."
    },
    {
      degree: "Professional Certifications",
      institution: "Industry Accreditations",
      period: "Continuous",
      description: "Advanced Networking, Cybersecurity Fundamentals, Cloud Infrastructure Deployment, and Public Sector Digital Services."
    }
  ],

  testimonials: [
    {
      name: "Dr. K. Mokaleng",
      role: "District Education Director",
      organization: "Ministry of Basic Education, Botswana",
      comment: "Quinton's deployment of the Edu-Suite across Mabutsane District primary schools transformed administrative efficiency and empowered teachers with real-time student analytics.",
      avatar: "KM"
    },
    {
      name: "Thabo Seabelo",
      role: "Principal ICT Consultant",
      organization: "SDK Digital Labs",
      comment: "Quinton is a phenomenal full-stack engineer who combines deep technical rigour with a profound understanding of real-world community impact. Exceptional delivery on every project.",
      avatar: "TS"
    },
    {
      name: "Boitumelo Raditladi",
      role: "Operations Lead",
      organization: "Regional Public Health Logistics",
      comment: "MedTrack BW designed by Quinton solved our critical cold-chain visibility challenges. Highly reliable, secure, and intuitive for frontline health workers.",
      avatar: "BR"
    }
  ] as Testimonial[]
};

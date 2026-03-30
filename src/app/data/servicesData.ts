import { Code2, Globe, Smartphone, Database, Cloud, Shield, BarChart3, Cpu, RefreshCw, Box, Film, PenTool, TrendingUp, Palette, Zap, Layers, Package, Megaphone, Monitor } from 'lucide-react';

export const services = [
  // 1. Product & Software Engineering
  {
    id: '01',
    category: 'PRODUCT & SOFTWARE ENGINEERING',
    categoryIcon: '⚙️',
    title: 'Product & Software Engineering',
    mission: 'Core systems designed to operate smoothly, scale with growth, and support real business logic.',
    chips: [
      'Custom Software',
      'App Engineering',
      'Backend & API Systems',
      'Cloud Infrastructure',
      'Payment Gateway Integration',
      'Subscription / Billing Systems',
      'Inventory / Logistics Dashboards',
      'App Store Submission Support & Analytics'
    ],
    icon: Code2,
    blueprint: {
      hook: "Core systems designed to operate smoothly, scale with growth, and support real business logic.",
      pathwayA: {
        title: "Full Product Build",
        description: "End-to-end engineering from architecture to deployment, including payment integration and app store submission."
      },
      pathwayB: {
        title: "System Enhancement",
        description: "Add cloud infrastructure, optimize backend systems, or integrate new features into existing products."
      },
      deliverables: [
        'Custom Software Development',
        'Mobile & Web App Engineering',
        'Backend & API Architecture',
        'Cloud Infrastructure Setup',
        'Payment Gateway Integration',
        'Subscription & Billing Systems',
        'Inventory & Logistics Dashboards',
        'App Store Submission Support'
      ],
      pricing: "Custom Quote (Minimum: $200)",
      cta: "INITIALIZE_PROJECT"
    }
  },
  // 2. Experience & Interface Systems
  {
    id: '02',
    category: 'EXPERIENCE & INTERFACE SYSTEMS',
    categoryIcon: '🎨',
    title: 'Experience & Interface Systems',
    mission: 'Interfaces and interaction systems built around real user behavior, validated through testing and design best practices.',
    chips: [
      'UI/UX Design',
      'Heuristic Evaluation',
      'Market Research / Competitor Analysis',
      'User Recruitment for Testing',
      'Motion Architecture',
      '3D Systems & WebGL'
    ],
    icon: Palette,
    blueprint: {
      hook: "Interfaces and interaction systems built around real user behavior, validated through testing and design best practices.",
      pathwayA: {
        title: "User-Centered Design",
        description: "Research-driven UX design with usability testing and heuristic evaluation."
      },
      pathwayB: {
        title: "Advanced Interactions",
        description: "Motion design, 3D systems, and WebGL experiences that enhance product engagement."
      },
      deliverables: [
        'UI/UX Design',
        'Motion Architecture',
        '3D Systems & WebGL Integration',
        'Heuristic Evaluation',
        'User Recruitment & Testing',
        'Market Research & Competitor Analysis'
      ],
      pricing: "Custom Quote (Minimum: $200)",
      cta: "DESIGN_EXPERIENCE"
    }
  },
  // 3. Brand, Marketing & Product Communication
  {
    id: '03',
    category: 'BRAND, MARKETING & PRODUCT COMMUNICATION',
    categoryIcon: '✍️',
    title: 'Brand, Marketing & Product Communication',
    mission: 'Clear brand positioning, marketing strategies, and creative content designed to communicate product value, build trust, and drive measurable results.',
    chips: [
      'Brand Systems & Visual Identity',
      'Strategic Copywriting',
      'Marketing Copywriting Campaigns',
      'Product Marketing Strategy',
      'SEO & Content Strategy',
      'Social Media Content Creation',
      'Performance Marketing Strategy',
      'Media Buying & Retargeting',
      'Product Launch Management',
      'Video Production',
      'Photography & Videography'
    ],
    icon: Megaphone,
    blueprint: {
      hook: "Clear brand positioning, marketing strategies, and creative content designed to communicate product value, build trust, and drive measurable results.",
      pathwayA: {
        title: "Brand Foundation",
        description: "Develop brand systems, visual identity, and strategic messaging framework."
      },
      pathwayB: {
        title: "Growth & Launch",
        description: "Product marketing, launch management, performance campaigns, and content creation."
      },
      deliverables: [
        'Brand Systems & Visual Identity',
        'Strategic Copywriting',
        'Marketing Copywriting Campaigns',
        'Product Marketing Strategy',
        'SEO & Content Strategy',
        'Social Media Content Creation',
        'Performance Marketing Strategy',
        'Media Buying & Retargeting',
        'Product Launch Management',
        'Video Production',
        'Photography & Videography'
      ],
      pricing: "Custom Quote (Minimum: $200)",
      cta: "BUILD_BRAND_PRESENCE"
    }
  },
  // 4. Experiential & Spatial Design
  {
    id: '06',
    category: 'EXPERIENTIAL & SPATIAL DESIGN',
    categoryIcon: '🏛️',
    title: 'Experiential & Spatial Design',
    mission: 'Transform spaces into engaging experiences that communicate brand value, educate users, and drive interaction.',
    chips: [
      '3D Booth & Event Design',
      'Interactive Installations',
      'Environmental Branding'
    ],
    icon: Box,
    blueprint: {
      hook: "Create immersive physical and spatial experiences that communicate a brand or product story.",
      pathwayA: {
        title: "Event & Exhibition Design",
        description: "Design immersive exhibition booths, trade show displays, and event spaces that captivate audiences."
      },
      pathwayB: {
        title: "Spatial Branding",
        description: "Environmental branding and interactive installations for spaces, showrooms, or offices."
      },
      deliverables: [
        '3D Booth & Event Design',
        'Interactive Installations',
        'Environmental Branding',
        'Trade Show Displays',
        'Showroom Design',
        'Physical Touchpoints'
      ],
      pricing: "Custom Quote (Minimum: $200)",
      cta: "CREATE_EXPERIENCE"
    }
  },
  // 5. OOH-BTL & Digital Billboards
  {
    id: '08',
    category: 'OOH-BTL & DIGITAL BILLBOARDS',
    categoryIcon: '📺',
    title: 'OOH-BTL & Digital Billboards',
    mission: 'High-impact outdoor advertising and below-the-line marketing solutions that amplify brand visibility and drive consumer engagement in physical spaces.',
    chips: [
      'Digital Billboard Campaigns',
      'Static Billboard Design',
      'Transit Advertising',
      'Street Furniture Advertising',
      'Point-of-Sale Materials',
      'Guerrilla Marketing Campaigns',
      'BTL Event Activations'
    ],
    icon: Monitor,
    blueprint: {
      hook: "Command attention in the physical world with strategic outdoor advertising and below-the-line marketing that reaches audiences where they live, work, and travel.",
      pathwayA: {
        title: "OOH & Digital Billboards",
        description: "Strategic placement and design of digital and static billboards, transit advertising, and street furniture campaigns for maximum visibility."
      },
      pathwayB: {
        title: "BTL Marketing Activations",
        description: "Below-the-line marketing campaigns including point-of-sale materials, guerrilla marketing, and event activations that create direct consumer engagement."
      },
      deliverables: [
        'Digital Billboard Campaign Design',
        'Static Billboard Creative',
        'Transit Advertising (Bus, Metro, Airport)',
        'Street Furniture Advertising',
        'Point-of-Sale Materials',
        'Guerrilla Marketing Campaigns',
        'BTL Event Activations',
        'Location Strategy & Planning'
      ],
      pricing: "Custom Quote (Minimum: $200)",
      cta: "AMPLIFY_VISIBILITY"
    }
  },
  // 6. Sales Enablement & Product Growth
  {
    id: '07',
    category: 'SALES ENABLEMENT & PRODUCT GROWTH',
    categoryIcon: '📈',
    title: 'Sales Enablement & Product Growth',
    mission: 'Aligns strategy, processes, and execution to accelerate revenue, strengthen client relationships, and ensure products/services reach their full market potential.',
    chips: [
      'Sales Strategy & Planning',
      'Lead Generation & Nurturing',
      'Product & Service Selling Support',
      'Market Insights & Feedback Loops'
    ],
    icon: TrendingUp,
    blueprint: {
      hook: "Help businesses sell products and services effectively, using strategy, channels, and execution.",
      pathwayA: {
        title: "Sales Strategy",
        description: "Go-to-market approach, target audience definition, and sales workflow optimization."
      },
      pathwayB: {
        title: "Growth Execution",
        description: "Lead generation, nurturing, and operational support for sales teams with materials and digital tools."
      },
      deliverables: [
        'Sales Strategy & Planning',
        'Lead Generation & Nurturing',
        'Product & Service Selling Support',
        'Market Insights & Feedback Loops',
        'Sales Materials & Demos',
        'Digital Sales Tools'
      ],
      pricing: "Custom Quote (Minimum: $200)",
      cta: "ACCELERATE_GROWTH"
    }
  },
  // 7. Security, Stability & Compliance
  {
    id: '04',
    category: 'SECURITY, STABILITY & COMPLIANCE',
    categoryIcon: '🔒',
    title: 'Security, Stability & Compliance',
    mission: 'Preventive protection and compliance systems designed to reduce risk before issues appear and ensure client trust.',
    chips: [
      'Security Hardening',
      'Cybersecurity',
      'Legal & Compliance Consulting',
      'Chat Support Systems'
    ],
    icon: Shield,
    blueprint: {
      hook: "Preventive protection and compliance systems designed to reduce risk before issues appear and ensure client trust.",
      pathwayA: {
        title: "Security Engineering",
        description: "Security hardening, penetration testing, and cybersecurity infrastructure."
      },
      pathwayB: {
        title: "Compliance & Support",
        description: "Legal compliance consulting (privacy, security, IP) and chat support system implementation."
      },
      deliverables: [
        'Security Hardening',
        'Cybersecurity Infrastructure',
        'Legal & Compliance Consulting',
        'Privacy & Data Protection',
        'IP Protection Consulting',
        'Chat Support Systems (Human/Bot)'
      ],
      pricing: "Custom Quote (Minimum: $200)",
      cta: "SECURE_INFRASTRUCTURE"
    }
  },
  // 8. Intelligence, Data & Automation
  {
    id: '05',
    category: 'INTELLIGENCE, DATA & AUTOMATION',
    categoryIcon: '🤖',
    title: 'Intelligence, Data & Automation',
    mission: 'Intelligence and automation that supports informed decisions, reduces manual work, and improves overall product efficiency.',
    chips: [
      'AI Logic & ML',
      'Data Analytics',
      'Process Automation',
      'CRM Integration & Marketing Automation'
    ],
    icon: Cpu,
    blueprint: {
      hook: "Intelligence and automation that supports informed decisions, reduces manual work, and improves overall product efficiency.",
      pathwayA: {
        title: "AI & Machine Learning",
        description: "Custom AI models, machine learning systems, and intelligent automation."
      },
      pathwayB: {
        title: "Data & Automation",
        description: "Analytics dashboards, process automation, and CRM/marketing automation integration."
      },
      deliverables: [
        'AI Logic & Machine Learning',
        'Data Analytics & BI Dashboards',
        'Process Automation',
        'CRM Integration',
        'Marketing Automation Systems'
      ],
      pricing: "Custom Quote (Minimum: $200)",
      cta: "AUTOMATE_INTELLIGENCE"
    }
  },
];

export type Service = typeof services[0];
// Zaxa Studio - About Page - Team Updated
import { motion } from 'motion/react';
import { Link } from 'react-router';
import { Award, Users, Target, TrendingUp, Lightbulb, Rocket, Shield, Zap, Linkedin, Globe, Github, ArrowRight, Eye, Code, Heart, ArrowUp } from 'lucide-react';
import { Button } from '../components/Button';
import { useLayoutEffect, useCallback, useState, useEffect, useRef, memo } from 'react';
import { MouseParallax } from '../components/MouseParallax';
import { ParallaxContainer } from '../components/ParallaxContainer';
import { ParallaxCard } from '../components/ParallaxCard';
import { ParallaxBackground } from '../components/ParallaxBackground';
import { ParallaxSection, ParallaxElement } from '../components/ParallaxSection';
import { useTheme } from '@/app/contexts/ThemeContext';
import { HeroBackground } from '../components/HeroBackground';
import { aboutValuesBackground as valuesBackground } from '@/assets/images';

const values = [
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'Cutting-edge solutions',
    gradient: 'from-teal-500 to-emerald-500'
  },
  {
    icon: Award,
    title: 'Quality',
    description: 'Excellence in every detail',
    gradient: 'from-emerald-500 to-green-600'
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'Transparent partnership',
    gradient: 'from-teal-500 to-emerald-400'
  },
  {
    icon: Target,
    title: 'Reliability',
    description: 'On time, on budget',
    gradient: 'from-emerald-500 to-green-600'
  },
  {
    icon: Shield,
    title: 'Security',
    description: 'Enterprise-grade protection',
    gradient: 'from-emerald-500 to-green-500'
  },
  {
    icon: Zap,
    title: 'Agility',
    description: 'Rapid iteration and delivery',
    gradient: 'from-teal-500 to-emerald-500'
  },
  {
    icon: TrendingUp,
    title: 'Scalability',
    description: 'Built to grow with you',
    gradient: 'from-emerald-500 to-green-600'
  },
  {
    icon: Eye,
    title: 'Transparency',
    description: 'Clear communication always',
    gradient: 'from-emerald-500 to-teal-500'
  },
  {
    icon: Code,
    title: 'Technical Excellence',
    description: 'Clean, maintainable code',
    gradient: 'from-green-500 to-emerald-500'
  },
  {
    icon: Heart,
    title: 'Client-Focused',
    description: 'Your success is our mission',
    gradient: 'from-emerald-500 to-green-500'
  },
];

const stats = [
  { value: '50+', label: 'Projects' },
  { value: '30+', label: 'Clients' },
  { value: '5+', label: 'Years' },
  { value: '100%', label: 'Satisfaction' },
];

// LEADERSHIP - Founders & C-Level
const leadershipTeam = [
  {
    name: 'Khaled ElSayed',
    role: 'Co Founder & CEO',
    bio: 'Defines Zaxa\'s strategic direction, system architecture, and long-term vision. Oversees product logic, brand positioning, and high-level decision-making to ensure scalable, resilient digital systems.',
    expertise: ['System Architecture', 'Technical Strategy', 'Product Vision', 'Scalable Systems', 'Engineering Leadership', 'Structural Decision Making'],
    linkedin: 'https://www.linkedin.com/in/khaled-el-sayed',
    github: null,
    website: 'https://khaled.figma.site',
    email: 'kelsayed@zaxastudio.com'
  },
  {
    name: 'Merhan Assem',
    role: 'Co Founder & COO',
    bio: 'Defines ZAXA\'s operational strategy, product experience vision, and delivery framework. Oversees execution systems, service architecture, and organizational alignment to ensure scalable operations, consistent quality, and high-impact digital outcomes.',
    expertise: ['Operational Strategy', 'Execution Systems', 'Product Experience Vision', 'Service & Delivery Architecture', 'Quality & Performance Standards', 'Organizational Decision Making'],
    linkedin: 'https://www.linkedin.com/in/merhan-assem-53040a231/',
    github: null,
    website: 'https://mernux.wixstudio.com/mernux',
    email: 'merhan@zaxastudio.com'
  },
  {
    name: 'Abdelrahman ElAwady',
    role: 'Head of Growth & Strategic Consulting',
    bio: 'Leads organizational growth strategy and market alignment initiatives, ensuring Zaxa\'s digital solutions meet global standards while driving sustained business value and operational excellence.',
    expertise: ['Growth Strategy', 'Market Alignment', 'Business Consulting'],
    linkedin: 'https://www.linkedin.com/in/abdelrahman-elawady92',
    github: null,
    website: null,
    email: 'aalawady@zaxastudio.com'
  }
];

// SALES & BUSINESS DEVELOPMENT - Commercial Growth Engine
const salesTeam = [
  {
    name: 'Abdalazeez Taqash',
    role: 'Chief Revenue Officer (CRO) & Head of Strategic Partnerships',
    bio: 'Leads overall revenue strategy, enterprise expansion, and strategic alliances while overseeing business development and account growth functions.',
    expertise: ['Revenue Strategy', 'Strategic Alliances', 'Enterprise Expansion', 'Commercial Leadership'],
    linkedin: 'https://www.linkedin.com/in/abd-al-azeez-taqash-b8856b1b7',
    github: null,
    website: null,
    email: 'ataqash@zaxastudio.com'
  },
  {
    name: 'Ahmed ElSayed',
    role: 'VP of Business Development & Enterprise Growth',
    bio: 'Drives enterprise acquisition strategy and oversees high-value partnerships and key account expansion.',
    expertise: ['Enterprise Partnerships', 'Commercial Expansion', 'Key Account Strategy', 'Market Penetration'],
    linkedin: null,
    github: null,
    website: null,
    email: 'aelsayed@zaxastudio.com'
  },
  {
    name: 'Hassan Younes',
    role: 'Business Development Team Lead',
    bio: 'Hassan leads business development initiatives and drives strategic partnerships, overseeing client acquisition and commercial growth strategies across all markets.',
    expertise: ['Strategic Partnerships', 'Business Development', 'Client Acquisition', 'Commercial Strategy'],
    linkedin: null,
    github: null,
    website: null,
    email: 'hyounes@zaxastudio.com'
  },
  {
    name: 'Athar Seif',
    role: 'Senior Business Development Manager',
    bio: 'Leads senior-level acquisition initiatives and supports strategic account growth opportunities.',
    expertise: ['Strategic Client Acquisition', 'Partnership Development', 'Revenue Growth'],
    linkedin: null,
    github: null,
    website: null,
    email: 'aseif@zaxastudio.com'
  },
  {
    name: 'Hazem Hassan',
    role: 'Business Development Manager',
    bio: 'Hazem oversees business development operations, driving client acquisition strategies and maintaining strategic partnerships that accelerate organizational growth.',
    expertise: ['Client Acquisition', 'Strategic Planning', 'Partnership Development'],
    linkedin: null,
    github: null,
    website: null,
    email: 'hhassan@zaxastudio.com'
  },
  {
    name: 'Abdalrahman Mohsen',
    role: 'Business Development Specialist',
    bio: 'Abdalrahman executes business development strategies, supporting partnership initiatives and contributing to client relationship management across key accounts.',
    expertise: ['Account Management', 'Partnership Support', 'Market Research'],
    linkedin: null,
    github: null,
    website: null,
    email: 'amohsen@zaxastudio.com'
  },
  {
    name: 'Abdalrahman Mohamed',
    role: 'Business Development Specialist',
    bio: 'Abdalrahman implements growth strategies and supports partnership development, working closely with the team to identify and pursue new business opportunities.',
    expertise: ['Growth Strategy', 'Client Support', 'Opportunity Analysis'],
    linkedin: null,
    github: null,
    website: null,
    email: 'amohamed@zaxastudio.com'
  },
  {
    name: 'Hossam Mohamed',
    role: 'Business Development Specialist',
    bio: 'Hossam executes commercial growth initiatives and supports client engagement strategies, contributing to partnership development and new business acquisition.',
    expertise: ['Client Engagement', 'Growth Initiatives', 'Partnership Development'],
    linkedin: null,
    github: null,
    website: null,
    email: 'hmohamed@zaxastudio.com'
  }
];

// ENGINEERING & DEVELOPMENT - Technical Implementation Force
const engineeringTeam = [
  {
    name: 'Mohamed Nouh',
    role: 'Back-End Team Lead',
    bio: 'Engineers the structural integrity of complex digital ecosystems, defining the hardened technical frameworks that keep client products fast, secure, and scalable.',
    expertise: ['System Architecture', 'Technical Frameworks', 'Scalability', 'Laravel/PHP'],
    linkedin: 'https://www.linkedin.com/in/mohamed-adel-nouh/',
    github: 'https://github.com/Mohamed-Adel-91/',
    website: 'https://www.mohamed-nouh.com/',
    email: 'madel@zaxastudio.com'
  },
  {
    name: 'Ahmed Samy',
    role: 'Back-end Systems Supervisor',
    bio: 'Ahmed oversees backend infrastructure and system reliability, ensuring enterprise-grade performance and stability across server architectures and database operations.',
    expertise: ['Backend Architecture', 'System Reliability', 'Infrastructure Management'],
    linkedin: null,
    github: null,
    website: null,
    email: 'asamy-backend@zaxastudio.com'
  },
  {
    name: 'Mohamed Hanafy',
    role: 'Senior Back-End Engineer',
    bio: 'Mohamed architects robust server-side solutions and database systems, delivering high-performance backend infrastructure that powers scalable enterprise applications.',
    expertise: ['Backend Development', 'Database Architecture', 'API Design', 'Server Optimization'],
    linkedin: null,
    github: null,
    website: null,
    email: 'mhanafy@zaxastudio.com'
  },
  {
    name: 'Omar Zaher',
    role: 'Senior Cross-Platform Mobile Engineer (Flutter | KMP)',
    bio: 'Omar leads mobile development with Flutter and Kotlin Multiplatform, building high-performance native-quality apps across Android and iOS.',
    expertise: ['Flutter', 'Kotlin Multiplatform', 'Cross-Platform'],
    linkedin: 'https://www.linkedin.com/in/omarzaherr/',
    github: 'https://github.com/OmarHassanZaher',
    website: 'https://omarhassan.netlify.app/',
    email: 'ohassan@zaxastudio.com'
  },
  {
    name: 'Ahmed Saeed',
    role: 'Front-End Team Lead',
    bio: 'Ahmed leads frontend engineering, architecting scalable web applications with modern JavaScript frameworks and cutting-edge development practices.',
    expertise: ['Frontend Architecture', 'React Ecosystem', 'Performance Engineering'],
    linkedin: null,
    github: null,
    website: null,
    email: 'asaid@zaxastudio.com'
  },
  {
    name: 'Abdel-Rahman Rafaat',
    role: 'Senior Interface Engineer (Front-End)',
    bio: 'Specializing in high-performance web environments, Abdel-Rahman translates high-fidelity designs into pixel-perfect, responsive code, ensuring the user experience is fluid across every browser and device.',
    expertise: ['React', 'TypeScript', 'Performance Optimization'],
    linkedin: 'https://www.linkedin.com/in/abdel-rahman-rafat-922475158/',
    github: 'https://github.com/Abdel-Rahman630',
    website: null,
    email: 'araafat@zaxastudio.com'
  },
  {
    name: 'Nourhan Fawzy',
    role: 'Frontend Developer',
    bio: 'Nourhan crafts pixel-perfect, accessible user interfaces that bridge design vision and technical reality with modern web standards.',
    expertise: ['Next.js', 'React.js', 'TypeScript', 'Tailwind CSS', 'shadcn/ui', 'React Hook Form & API Integration', 'Git & Version Control'],
    linkedin: 'https://www.linkedin.com/in/nourhan-fawzy-a39142260',
    github: 'https://github.com/Nourfawzy-x',
    website: null,
    email: 'nfawsy@zaxastudio.com'
  },
  {
    name: 'Mohamed Said',
    role: 'Senior Quality Assurance Engineer',
    bio: 'Mohamed orchestrates quality assurance strategy with rigorous testing frameworks, ensuring every release meets enterprise-grade reliability standards.',
    expertise: ['Test Automation', 'QA Strategy', 'CI/CD Integration'],
    linkedin: null,
    github: null,
    website: null,
    email: 'msaid@zaxastudio.com'
  }
];

// DESIGN & CREATIVE - Visual Excellence Division
const creativeTeam = [
  {
    name: 'Ahmed Nouh',
    role: 'Director of Video & Visual Production',
    bio: 'Ahmed orchestrates cinematic excellence through video direction and visual storytelling, transforming complex concepts into captivating experiences that command attention.',
    expertise: ['Video Direction', 'Cinematography', 'Visual Storytelling'],
    linkedin: 'https://www.linkedin.com/in/noo7/',
    github: null,
    website: 'https://www.ahmednouh.art/',
    email: 'anouh@zaxastudio.com'
  },
  {
    name: 'Karim Darwish',
    role: 'Executive Creative Director & Head of Design',
    bio: 'Karim leads Zaxa\'s creative vision and design operations, orchestrating visual excellence across all touchpoints while defining the strategic design systems that power world-class digital products.',
    expertise: ['Creative Leadership', 'Design Strategy', 'Brand Vision', 'Design Systems', 'Creative Operations'],
    linkedin: null,
    github: null,
    website: null,
    email: 'kdarwish@zaxastudio.com'
  },
  {
    name: 'Ahmed Samy',
    role: 'Creative Director | Senior Visual & Brand Identity Designer',
    bio: 'Ahmed architects Zaxa\'s distinctive brand presence, orchestrating the "Classy & Edgy" aesthetic philosophy that transforms strategic vision into stunning visual narratives.',
    expertise: ['Creative Direction', 'Brand Identity', 'Visual Design'],
    linkedin: 'https://www.linkedin.com/in/ahmed-samy-3258b429a',
    github: null,
    website: 'https://www.behance.net/AhmedSamyAhmed',
    email: 'asamy@zaxastudio.com'
  },
  {
    name: 'Yossef Gomaa',
    role: 'Art Director',
    bio: 'Orchestrates high-stakes visual narratives that define market dominance for our partners. Yossef balances aesthetic sophistication with strategic intent to ensure every digital touchpoint communicates absolute technical authority.',
    expertise: ['Art Direction', 'Visual Composition', 'Brand Aesthetics'],
    linkedin: 'https://www.linkedin.com/in/yossef-gomaa-616322241/',
    github: null,
    website: 'https://www.behance.net/Yossefgomaa_',
    email: 'ygomaa@zaxastudio.com'
  },
  {
    name: 'Salem ElBoraey',
    role: 'Senior Motion Graphic Designer',
    bio: 'Salem breathes life into static visuals through masterful motion design, elevating user engagement with fluid animations that guide attention and reinforce brand personality.',
    expertise: ['Motion Graphics', 'UI Animation', 'Visual Storytelling'],
    linkedin: 'https://www.linkedin.com/in/salem-elboraey-57702b1b1',
    github: null,
    website: 'https://drive.google.com/file/d/1K8n6QEBN-4iYCNoFSIzvHOFdWoZKa1Gr/view?usp=drivesdk',
    email: 'selboraey@zaxastudio.com'
  },
  {
    name: 'Nada Mohamed',
    role: 'Senior Product Designer | Interface Specialist',
    bio: 'Nada transforms complex requirements into elegant digital experiences, crafting pixel-perfect products that balance aesthetic refinement with functional clarity.',
    expertise: ['Interface Design', 'User Flows', 'Atomic Design Systems'],
    linkedin: null,
    github: null,
    website: 'https://archnudy.webflow.io/',
    email: 'nmohamed@zaxastudio.com'
  },
  {
    name: 'Dina ElMasry',
    role: 'Product Designer',
    bio: 'Dina crafts intuitive digital experiences that blend form and function, designing interfaces that are visually compelling and effortlessly usable.',
    expertise: ['UI Design', 'UX Research', 'Prototyping'],
    linkedin: 'https://www.linkedin.com/in/dena-mohamed-elmasry-78a9b2147',
    github: 'https://www.behance.net/Denaelmasrii',
    website: 'https://denaelmasry.framer.website',
    email: 'dalmasry@zaxastudio.com'
  },
  {
    name: 'Fatma AlSawaf',
    role: 'UI/UX Designer',
    bio: 'Fatma designs user-centered digital experiences, combining research-driven insights with refined aesthetics to create interfaces that are both intuitive and visually engaging.',
    expertise: ['User Experience Design', 'Interface Design', 'User Research'],
    linkedin: null,
    github: null,
    website: null,
    email: 'falsawaf@zaxastudio.com'
  }
];

// MARKETING & GROWTH - Audience Acquisition & Engagement
const marketingTeam = [
  {
    name: 'Mohamed ElSayed',
    role: 'Head of Performance Marketing',
    bio: 'Mohamed orchestrates data-driven marketing strategies, optimizing media acquisition channels to maximize ROI and deliver measurable business impact.',
    expertise: ['Performance Marketing', 'Media Acquisition', 'Conversion Optimization'],
    linkedin: 'https://www.linkedin.com/in/mohamed-el-mahdy-1484b71a7',
    github: null,
    website: null,
    email: 'melsayed@zaxastudio.com'
  },
  {
    name: 'Haidy Eldafrawy',
    role: 'Senior Strategist',
    bio: 'Haidy architects multi-channel growth strategies that integrate brand positioning, digital campaigns, and market intelligence to drive measurable business impact and sustained competitive advantage.',
    expertise: ['Growth Strategy', 'Brand Architecture', 'Digital Marketing', 'Market Intelligence', 'Campaign Design'],
    linkedin: 'https://www.linkedin.com/in/haidy-eldafrawy-8b8215196',
    github: null,
    website: null,
    email: 'heldafrawy@zaxastudio.com'
  },
  {
    name: 'Sherif Salah',
    role: 'Creative Copywriting Specialist',
    bio: 'Sherif crafts compelling brand narratives and creative copy that resonates with audiences, transforming strategic messaging into engaging content that drives action and builds lasting connections.',
    expertise: ['Creative Copywriting', 'Brand Voice', 'Content Creation', 'Storytelling'],
    linkedin: null,
    github: null,
    website: null,
    email: 'ssalah@zaxastudio.com'
  },
  {
    name: 'Yumna ElGendy',
    role: 'Senior Copywriting Strategist',
    bio: 'Yumna crafts persuasive brand narratives and strategic messaging that converts audiences into advocates, combining creative storytelling with conversion-focused copywriting expertise.',
    expertise: ['Strategic Copywriting', 'Brand Messaging', 'Conversion Copy', 'Content Strategy'],
    linkedin: 'https://www.linkedin.com/in/yumna-el-gendy-b33122b9',
    github: null,
    website: null,
    email: 'yelgendy@zaxastudio.com'
  },
  {
    name: 'Menna Tarek',
    role: 'Senior Content Creator',
    bio: 'Menna crafts compelling content strategies and produces engaging multimedia assets that amplify brand narratives and drive audience engagement across digital platforms.',
    expertise: ['Content Strategy', 'Multimedia Production', 'Brand Storytelling', 'Audience Engagement'],
    linkedin: 'https://www.linkedin.com/in/menna-tarek-b930071ba/',
    github: null,
    website: null,
    email: 'mtarek@zaxastudio.com'
  },
  {
    name: 'Ahmed Onsy',
    role: 'Lead Community Operations & Moderation Strategist',
    bio: 'Ahmed orchestrates community operations and moderation frameworks, ensuring brand safety, audience engagement quality, and platform integrity across all digital touchpoints.',
    expertise: ['Community Operations', 'Moderation Strategy', 'Platform Governance', 'Engagement Quality'],
    linkedin: null,
    github: null,
    website: null,
    email: 'aonsy@zaxastudio.com'
  },
  {
    name: 'Aya Elbahr',
    role: 'Senior Community Manager & Analysis Specialist',
    bio: 'Aya manages digital communities and analyzes user behavior patterns, building audience relationships and leveraging analytics to optimize growth.',
    expertise: ['Community Management', 'Brand Reputation', 'Platform Analytics', 'Social Listening'],
    linkedin: null,
    github: null,
    website: null,
    email: 'aalbahr@zaxastudio.com'
  },
  {
    name: 'Nura Muhammad',
    role: 'Senior Community Manager & Analysis Specialist',
    bio: 'Nura manages digital communities and analyzes user behavior patterns, building audience relationships and leveraging analytics to optimize growth.',
    expertise: ['Community Management', 'Brand Reputation', 'Platform Analytics', 'Social Listening'],
    linkedin: 'https://www.linkedin.com/in/nura-muhammad-943a17282/',
    github: null,
    website: null,
    email: 'nmuhammad@zaxastudio.com'
  }
];

export function AboutPage() {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const { theme } = useTheme();
  const audioContextRef = useRef<AudioContext | null>(null);

  useEffect(() => {
    // Initialize Web Audio API for CTA button
    if (typeof window !== 'undefined' && !audioContextRef.current) {
      audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
    }

    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Simple glass tap sound (same as HOME tab)
  const playTabSound = () => {
    if (!audioContextRef.current) return;
    
    const ctx = audioContextRef.current;
    const now = ctx.currentTime;
    
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    
    osc.connect(gain);
    gain.connect(ctx.destination);
    
    osc.frequency.value = 1800;
    osc.type = 'sine';
    
    gain.gain.setValueAtTime(0.06, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.04);
    
    osc.start(now);
    osc.stop(now + 0.04);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Memoized Team Member Card Component for performance
  const TeamMemberCard = memo(({ member, index }: { member: any; index: number }) => {
    return (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: Math.min(index * 0.08, 0.5) }}
        className="group relative p-3 bg-zinc-900/30 border border-zinc-800/50 rounded-2xl hover:border-zinc-700 transition-all duration-300 overflow-hidden will-change-transform"
        style={{ transform: 'translateZ(0)' }}
      >
        <div className="absolute inset-0 bg-zinc-800/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        <div className="relative">
          <div className="mb-2">
            <div className="w-12 h-12 rounded-xl bg-zinc-800/50 border border-zinc-700/50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <span className="text-lg font-bold text-zinc-400">
                {member.name.split(' ').map((n: string) => n[0]).join('')}
              </span>
            </div>
          </div>

          <h4 className="text-xl mb-1 group-hover:text-[#E2E8F0] transition-colors">
            {member.name}
          </h4>
          <p className="text-zinc-400 text-xs mb-2 leading-tight">
            {member.role}
          </p>
          <p className="text-zinc-400 leading-relaxed mb-2 group-hover:text-zinc-300 transition-colors text-[14px]">
            {member.bio}
          </p>

          <div className="flex flex-wrap gap-1.5 mb-2">
            {member.expertise.map((skill: string) => (
              <span
                key={skill}
                className="px-2.5 py-0.5 text-[10px] bg-zinc-800/50 border border-zinc-700/50 rounded-full text-zinc-400"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    );
  });

  TeamMemberCard.displayName = 'TeamMemberCard';

  return (
    <div className="relative scroll-container">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-[#000000]">
        {/* Static Hero Background */}
        <HeroBackground variant="about" />
        
        <div className="relative max-w-7xl mx-auto text-center px-6 z-30">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.8,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1]
            }}
          >
            {/* Label */}
            <motion.div 
              className="mb-4 md:mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6,
                delay: 0.3,
                ease: [0.22, 1, 0.36, 1]
              }}
            >
              <span className="text-xs md:text-sm tracking-[0.2em] md:tracking-[0.3em] text-[#1DCD9F]/80 uppercase" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                [ ABOUT US ]
              </span>
            </motion.div>
            
            <motion.h1 
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-8 tracking-tight leading-tight text-[#FFFFFF]"
              style={{ fontFamily: "'Inter Tight', sans-serif" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.8,
                delay: 0.4,
                ease: [0.22, 1, 0.36, 1]
              }}
            >
              WE ARE <span className="relative inline-block">
                <span className="text-[#1DCD9F]">ZAXA STUDIO</span>
                <div className="absolute -bottom-2 left-0 right-0 h-[2px] bg-[#1DCD9F]" />
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-[16px] md:text-xl text-zinc-400 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.8,
                delay: 0.5,
                ease: [0.22, 1, 0.36, 1]
              }}
            >
              A product-focused studio driving growth through end-to-end digital solutions. We combine engineering, design, and strategy to build, scale, and optimize platforms, experiences, and brands for measurable impact.
            </motion.p>

            {/* Static Scroll Indicator */}
            <motion.div 
              className="mt-8 md:mt-16 flex flex-col items-center gap-2 md:gap-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ 
                duration: 0.6,
                delay: 0.6,
                ease: [0.22, 1, 0.36, 1]
              }}
            >
              <span className="text-[10px] md:text-xs tracking-widest text-[#1DCD9F]/60 uppercase" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                Explore Our Journey
              </span>
              <div className="w-[1px] h-12 md:h-16 bg-gradient-to-b from-[#1DCD9F]/60 to-transparent" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Story Section with Hover */}
      <section className="py-24 px-6 sm:px-8 lg:px-12 relative overflow-hidden">
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `linear-gradient(rgba(226, 232, 240, 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(226, 232, 240, 0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
        
        <div className="w-full relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="group relative p-12 bg-gradient-to-br from-teal-500/5 to-emerald-500/5 border border-zinc-800/50 rounded-3xl overflow-hidden hover:border-teal-500/30 transition-all duration-300 will-change-transform"
          >
            {/* Hover gradient */}
            <div
              className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            ></div>

            <div className="relative space-y-6 text-xl text-zinc-300 leading-relaxed mb-16">
              <p>
                Founded with a vision to bridge innovation and execution, <span className="text-white font-medium">Zaxa Studio</span> has become a trusted partner for startups and businesses.
              </p>
              <p className="group-hover:text-zinc-200 transition-colors duration-300">
                We build custom software solutions that exceed expectations through expertise in development, design, and strategy.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="relative grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-5xl md:text-6xl font-semibold bg-gradient-to-r from-teal-400 to-emerald-500 bg-clip-text text-transparent mb-3 tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-zinc-400 text-lg group-hover:text-zinc-300 transition-colors duration-300">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-24 px-6 sm:px-8 lg:px-12 relative overflow-hidden">
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `linear-gradient(rgba(226, 232, 240, 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(226, 232, 240, 0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
        
        <div className="w-full relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-24"
          >
            <div className="inline-block">
              
            </div>
            <h2 className="text-5xl md:text-6xl mb-6 tracking-tight">
              Our <span className="bg-gradient-to-r from-teal-400 to-emerald-500 bg-clip-text text-transparent">Mission</span>
            </h2>
            <p className="text-xl md:text-2xl text-zinc-400 max-w-3xl mx-auto leading-relaxed">
              Engineering the digital infrastructure that anchors next-generation enterprise operations
            </p>
          </motion.div>

          {/* Mission Statement Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="group relative p-8 bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-3xl hover:border-teal-500/50 hover:bg-white/[0.05] hover:-translate-y-2 transition-all duration-300 overflow-hidden shadow-[0_4px_16px_0_rgba(29,205,159,0.12)] will-change-transform"
            >
              {/* Glass reflection effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.07] via-transparent to-transparent opacity-50" />
              
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              />
              <div className="relative">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-teal-500/20 to-emerald-500/20 border border-teal-500/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Target size={28} className="text-teal-400" />
                </div>
                <h3 className="text-2xl mb-4 group-hover:text-teal-100 transition-colors">Strategic Discovery</h3>
                <p className="text-zinc-400 leading-relaxed group-hover:text-zinc-300 transition-colors">
                  We begin every engagement with deep market analysis and technical feasibility assessment to ensure alignment with enterprise objectives.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="group relative p-8 bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-3xl hover:border-emerald-500/50 hover:bg-white/[0.05] hover:-translate-y-2 transition-all duration-300 overflow-hidden shadow-[0_4px_16px_0_rgba(29,205,159,0.12)] will-change-transform"
            >
              {/* Glass reflection effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.07] via-transparent to-transparent opacity-50" />
              
              <div
                className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-green-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
              <div className="relative">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-green-600/20 border border-emerald-500/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Rocket size={28} className="text-emerald-400" />
                </div>
                <h3 className="text-2xl mb-4 group-hover:text-emerald-100 transition-colors">Production-Grade Delivery</h3>
                <p className="text-zinc-400 leading-relaxed group-hover:text-zinc-300 transition-colors">
                  Our 8-week sprint methodology delivers fully functional, scalable systems built on modern architectural frameworks and security standards.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="group relative p-8 bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-3xl hover:border-teal-500/50 hover:bg-white/[0.05] hover:-translate-y-2 transition-all duration-300 overflow-hidden shadow-[0_4px_16px_0_rgba(29,205,159,0.12)] will-change-transform"
            >
              {/* Glass reflection effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.07] via-transparent to-transparent opacity-50" />
              
              <div
                className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-emerald-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
              <div className="relative">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-teal-500/20 to-emerald-400/20 border border-teal-500/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Users size={28} className="text-teal-400" />
                </div>
                <h3 className="text-2xl mb-4 group-hover:text-teal-100 transition-colors">Partner-Led Execution</h3>
                <p className="text-zinc-400 leading-relaxed group-hover:text-zinc-300 transition-colors">
                  Direct access to senior architects and strategic consultants throughout the entire lifecycle—from concept to deployment.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Mission Metrics */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative p-12 bg-gradient-to-br from-zinc-900/50 to-zinc-800/30 border border-zinc-800/50 rounded-3xl overflow-hidden"
          >
            <div className="absolute inset-0 opacity-[0.02]" style={{
              backgroundImage: `linear-gradient(rgba(226, 232, 240, 0.1) 1px, transparent 1px),
                               linear-gradient(90deg, rgba(226, 232, 240, 0.1) 1px, transparent 1px)`,
              backgroundSize: '50px 50px'
            }} />
            
            <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-5xl md:text-6xl font-light bg-gradient-to-r from-teal-400 to-emerald-400 bg-clip-text text-transparent mb-3">
                  8
                </div>
                <div className="text-zinc-400 text-lg">Week Sprint Cycle</div>
                <div className="text-zinc-500 text-sm mt-1">Standard delivery timeline</div>
              </div>
              
              <div className="text-center">
                <div className="text-5xl md:text-6xl font-light bg-gradient-to-r from-emerald-400 to-green-500 bg-clip-text text-transparent mb-3">
                  100%
                </div>
                <div className="text-zinc-400 text-lg">Partner-Led</div>
                <div className="text-zinc-500 text-sm mt-1">Senior architect involvement</div>
              </div>
              
              <div className="text-center">
                <div className="text-5xl md:text-6xl font-light bg-gradient-to-r from-teal-400 to-emerald-500 bg-clip-text text-transparent mb-3">
                  24/7
                </div>
                <div className="text-zinc-400 text-lg">Infrastructure</div>
                <div className="text-zinc-500 text-sm mt-1">Production-grade systems</div>
              </div>
              
              <div className="text-center">
                <div className="text-5xl md:text-6xl font-light bg-gradient-to-r from-teal-400 to-emerald-500 bg-clip-text text-transparent mb-3">
                  ∞
                </div>
                <div className="text-zinc-400 text-lg">Scalability</div>
                <div className="text-zinc-500 text-sm mt-1">Built for growth</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-24 px-6 sm:px-8 lg:px-12 relative overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${valuesBackground})`,
          }}
        >
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/85" />
        </div>

        <div className="w-full relative z-10">
          <motion.div className="px-[0px] py-[10px] px-[0px] py-[20px] px-[0px] py-[30px] px-[0px] py-[40px] px-[0px] py-[50px] mx-[0px] mt-[0px] mb-[50px]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
              <h3 className="text-5xl md:text-6xl text-center mb-16 tracking-tight">
                Our <span className="text-white">Values</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
              {values.map((value, index) => {
                return (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: Math.min(0.5 + index * 0.08, 1) }}
                    className="group relative p-8 bg-zinc-900/30 border border-zinc-800/50 rounded-3xl hover:border-zinc-700 hover:-translate-y-2 transition-all duration-300 overflow-hidden will-change-transform"
                  >
                    <div
                      className="absolute inset-0 bg-zinc-800/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />
                    <div className="relative">
                      <div className="w-14 h-14 rounded-2xl bg-zinc-800/50 border border-zinc-700/50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                        <value.icon size={28} className="text-zinc-400" />
                      </div>
                      <h4 className="text-2xl mb-4 group-hover:text-[#E2E8F0] transition-colors">{value.title}</h4>
                      <p className="text-zinc-400 leading-relaxed group-hover:text-zinc-300 transition-colors">
                        {value.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-32 px-6 sm:px-8 lg:px-12 bg-zinc-900/30 relative overflow-hidden">
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `linear-gradient(rgba(226, 232, 240, 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(226, 232, 240, 0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
        
        <div className="w-full relative z-10">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-24"
          >
            <motion.div
              whileHover={{ scale: 1.1, rotate: 12 }}
              className="inline-block mb-8"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-2xl blur-lg opacity-50 transform-gpu" />
                
              </div>
            </motion.div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl mb-6 tracking-tight">
              Our <span className="bg-gradient-to-r from-teal-400 to-emerald-500 bg-clip-text text-transparent">Team</span>
            </h2>
            <p className="text-xl md:text-2xl text-zinc-400 max-w-3xl mx-auto leading-relaxed">
              Meet the specialists driving excellence at Zaxa Studio
            </p>
          </motion.div>

          {/* Engineering & Development Section */}
          <div className="mb-24">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl mb-4 bg-gradient-to-r from-teal-400 to-emerald-400 bg-clip-text text-transparent"
            >
              Engineering & Development
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-zinc-400 text-lg mb-12"
            >
              Technical Implementation Force
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {engineeringTeam.map((member, index) => (
                <TeamMemberCard key={member.name} member={member} index={index} />
              ))}
            </div>
          </div>

          {/* Design & Creative Section */}
          <div className="mb-24">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl mb-4 bg-gradient-to-r from-emerald-400 to-green-500 bg-clip-text text-transparent"
            >
              Design & Creative
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-zinc-400 text-lg mb-12"
            >
              Visual Excellence Division
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {creativeTeam.map((member, index) => (
                <TeamMemberCard key={member.name} member={member} index={index} />
              ))}
            </div>
          </div>

          {/* Marketing & Growth Section */}
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl mb-4 bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent"
            >
              Marketing & Growth
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-zinc-400 text-lg mb-12"
            >
              Audience Acquisition & Engagement
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {marketingTeam.map((member, index) => (
                <TeamMemberCard key={member.name} member={member} index={index} />
              ))}
            </div>
          </div>

          {/* Sales & Business Development Section */}
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl mb-[16px] bg-gradient-to-r from-teal-400 to-emerald-500 bg-clip-text text-transparent mt-[110px] mr-[0px] ml-[0px]"
            >
              Sales & Business Development
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-zinc-400 text-lg mb-12"
            >
              Commercial Growth Engine — driving strategic partnerships and market expansion
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {salesTeam.map((member, index) => (
                <TeamMemberCard key={member.name} member={member} index={index} />
              ))}
            </div>
          </div>

          {/* Executive Leadership Section */}
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl mb-[16px] bg-gradient-to-r from-teal-400 to-emerald-500 bg-clip-text text-transparent mt-[110px] mr-[0px] ml-[0px]"
            >
              Executive Leadership
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-zinc-400 text-lg mb-12"
            >
              The visionaries who built Zaxa from the ground up—combining technical mastery with strategic design thinking to redefine digital excellence
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {leadershipTeam.map((member, index) => (
                <TeamMemberCard key={member.name} member={member} index={index} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-40 px-6 sm:px-8 lg:px-12 relative overflow-hidden">
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `linear-gradient(rgba(226, 232, 240, 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(226, 232, 240, 0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
        
        <div className="w-full relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            whileHover={{ y: -6 }}
            className="group relative p-8 sm:p-12 md:p-16 lg:p-20 bg-gradient-to-br from-teal-500/5 via-emerald-500/5 to-transparent border border-zinc-800/50 rounded-3xl text-center overflow-hidden hover:border-teal-500/30 transition-all duration-500"
          >
            {/* Background gradient effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-teal-500/10 via-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            />

            {/* Animated glow orbs */}
            <motion.div
              className="absolute top-0 right-0 w-64 h-64 bg-teal-500/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 transform-gpu"
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 90, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-500/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 transform-gpu"
              animate={{
                scale: [1, 1.3, 1],
                rotate: [0, -90, 0],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            />

            <div className="relative z-10">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 12 }}
                transition={{ duration: 0.3 }}
              >
                <Rocket size={40} className="sm:w-12 sm:h-12 md:w-14 md:h-14 mx-auto mb-6 sm:mb-8 text-teal-400 group-hover:text-teal-300 transition-colors duration-300" />
              </motion.div>
              <span 
                className="text-sm text-[#1DCD9F] uppercase tracking-wider mb-4 block" 
                style={{ fontFamily: "'Inter Tight', sans-serif" }}
              >
                READY TO BUILD WHAT'S NEXT?
              </span>
              <h2 
                className="text-3xl md:text-4xl lg:text-5xl mb-6 tracking-tight group-hover:text-[#E2E8F0] transition-colors duration-300"
                style={{ fontFamily: "'Inter Tight', sans-serif" }}
              >
                Launch faster. Scale smarter. Deliver with confidence.
              </h2>
              <p 
                className="text-xl md:text-2xl text-zinc-400 mb-12 max-w-2xl mx-auto leading-relaxed group-hover:text-zinc-300 transition-colors duration-300"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                with a product designed to perform.
              </p>
              <Link to="/contact">
                <motion.button
                  onClick={playTabSound}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`group relative px-8 md:px-10 py-3 md:py-4 rounded-lg min-h-[48px] md:min-h-[56px] touch-manipulation transition-all duration-300 overflow-hidden ${theme === 'dark' ? 'text-white' : 'text-zinc-900'}`}
                  style={{
                    fontWeight: 600,
                    fontSize: '16px',
                    letterSpacing: '-0.02em',
                    // iOS-26 Teal Liquid Glass - matches Button component exactly
                    background: theme === 'dark'
                      ? 'rgba(29, 205, 159, 0.15)'
                      : 'rgba(29, 205, 159, 0.20)',
                    backdropFilter: 'blur(28px) saturate(180%)',
                    WebkitBackdropFilter: 'blur(28px) saturate(180%)',
                    boxShadow: theme === 'dark'
                      ? '0 4px 12px rgba(29, 205, 159, 0.12), 0 2px 6px rgba(29, 205, 159, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.15)'
                      : '0 4px 12px rgba(29, 205, 159, 0.10), 0 2px 6px rgba(29, 205, 159, 0.05), inset 0 1px 0 rgba(255, 255, 255, 0.40)',
                  }}
                >
                  {/* Frost diffusion overlay (10%) */}
                  <div 
                    className="absolute inset-0 rounded-lg pointer-events-none"
                    style={{
                      background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.10) 0%, transparent 60%)',
                    }}
                  />
                  
                  {/* Noise/grain texture (3%) */}
                  <div 
                    className="absolute inset-0 opacity-[0.03] pointer-events-none rounded-lg mix-blend-overlay"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.5'/%3E%3C/svg%3E")`,
                    }}
                  />
                  
                  {/* Inner highlight stroke */}
                  <div 
                    className="absolute inset-[0.5px] rounded-lg pointer-events-none"
                    style={{
                      border: `1px solid ${theme === 'dark' ? 'rgba(255, 255, 255, 0.15)' : 'rgba(255, 255, 255, 0.50)'}`,
                    }}
                  />
                  
                  {/* Top-edge specular light band */}
                  <div 
                    className="absolute top-[2px] left-[15%] right-[15%] h-[0.5px] rounded-lg pointer-events-none"
                    style={{
                      background: `linear-gradient(90deg, transparent, ${theme === 'dark' ? 'rgba(255, 255, 255, 0.35)' : 'rgba(255, 255, 255, 0.60)'}, transparent)`,
                    }}
                  />
                  
                  {/* Hover brightness effect */}
                  <motion.div
                    className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-100 pointer-events-none"
                    style={{
                      background: theme === 'dark'
                        ? 'rgba(255, 255, 255, 0.08)'
                        : 'rgba(255, 255, 255, 0.15)',
                    }}
                  />
                  
                  <span className="relative z-10 flex items-center gap-3">
                    Start Your Project
                    <ArrowRight size={18} strokeWidth={2.5} />
                  </span>
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Back to Top Button */}
      <motion.button
        onClick={scrollToTop}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ 
          opacity: showBackToTop ? 1 : 0,
          scale: showBackToTop ? 1 : 0.8,
          y: showBackToTop ? 0 : 20
        }}
        transition={{ duration: 0.3 }}
        className={`group fixed bottom-24 right-8 z-[60] w-14 h-14 rounded-2xl bg-white/[0.08] backdrop-blur-md border border-white/20 flex items-center justify-center shadow-[0_4px_16px_0_rgba(29,205,159,0.15)] hover:scale-110 transition-all duration-300 overflow-hidden ${
          !showBackToTop && 'pointer-events-none'
        }`}
        whileHover={{ y: -4 }}
        whileTap={{ scale: 0.95 }}
      >
        {/* Glass reflection effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/[0.15] via-white/[0.05] to-transparent opacity-60 pointer-events-none" />
        
        {/* Hover effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-[#1DCD9F]/30 to-[#169976]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        />
        
        {/* Icon */}
        <ArrowUp size={20} className="text-white relative z-10" strokeWidth={2.5} />
        
        {/* Glow ring */}
        <motion.div
          className="absolute -inset-1 bg-gradient-to-r from-[#1DCD9F] to-[#169976] rounded-2xl blur-md opacity-0 group-hover:opacity-60 -z-10 transform-gpu"
        />

        {/* Tooltip */}
        <div className="absolute right-full mr-3 px-3 py-1.5 bg-[#0A111F]/90 backdrop-blur-md border border-white/10 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
          <span className="text-xs text-white/90">Back to Top</span>
        </div>
      </motion.button>
    </div>
  );
}
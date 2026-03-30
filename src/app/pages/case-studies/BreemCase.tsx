import { CaseStudyTemplate } from '../CaseStudyTemplate';
import { Briefcase, Globe, Users, Zap, Shield, TrendingUp } from 'lucide-react';
import breemLogo from '@/assets/images/7037f5d4a7994f256eb47ce99b499a4495fddca5.png';
import breemHero from '@/assets/images/cb7c18c4fdd4d6aad6452d328fcfd1330a8ad56f.png';

const breemData = {
  title: 'Breem Platform',
  subtitle: 'Modern business services platform',
  category: 'Business Services',
  client: 'Breem',
  duration: '6 months',
  tags: ['React', 'TypeScript', 'Tailwind CSS', 'i18n', 'REST API'],
  heroImage: breemHero,
  logo: breemLogo,
  url: 'https://breem.site/ar',
  overview: 'Breem is a comprehensive business services platform offering modern solutions with seamless user experience and multilingual support, designed to help businesses streamline their operations.',
  challenge: {
    title: 'The Challenge',
    description: 'Breem needed a scalable platform that could handle diverse business services while maintaining simplicity and supporting Arabic and English markets.',
    points: [
      'Complex service catalog with multiple categories',
      'Bilingual support with RTL layout for Arabic',
      'Streamlined user onboarding and service request process',
      'Integration with multiple third-party service providers',
      'Real-time status tracking for service requests'
    ]
  },
  solution: {
    title: 'Our Solution',
    description: 'We built a modern, TypeScript-based React application with comprehensive internationalization, intuitive navigation, and seamless service management.',
    points: [
      'Modular architecture for easy service addition',
      'Full bilingual support with automatic language detection',
      'Intuitive service request wizard with progress tracking',
      'Real-time notifications for service updates',
      'Responsive design optimized for all devices',
      'Admin portal for service management and analytics'
    ]
  },
  features: {
    title: 'Features that empower businesses',
    items: [
      {
        title: 'Service Catalog',
        description: 'Comprehensive catalog of business services with detailed descriptions and pricing.',
        icon: Briefcase
      },
      {
        title: 'Bilingual Platform',
        description: 'Seamless Arabic and English support with RTL layout and localized content.',
        icon: Globe
      },
      {
        title: 'User Management',
        description: 'Robust user authentication, role-based access, and team collaboration tools.',
        icon: Users
      },
      {
        title: 'Quick Processing',
        description: 'Streamlined workflows for fast service delivery and automated task routing.',
        icon: Zap
      },
      {
        title: 'Secure Platform',
        description: 'Enterprise-grade security with data encryption and compliance standards.',
        icon: Shield
      },
      {
        title: 'Analytics Dashboard',
        description: 'Comprehensive reporting and insights for business decision-making.',
        icon: TrendingUp
      }
    ]
  },
  results: {
    title: 'Business Impact',
    metrics: [
      { value: '300+', label: 'Active Businesses' },
      { value: '5K+', label: 'Service Requests' },
      { value: '96%', label: 'Satisfaction Rate' }
    ],
    description: 'Breem has become a trusted platform for businesses seeking professional services with exceptional user satisfaction.'
  },
  images: [
    'https://images.unsplash.com/photo-1629724024952-bada03d4e392?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBidXNpbmVzcyUyMHBsYXRmb3JtfGVufDF8fHx8MTc2ODc1MzIyNHww&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1762340277705-9e8522d0ebe7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHBsYXRmb3JtJTIwaW50ZXJmYWNlfGVufDF8fHx8MTc2ODc1ODY3Nnww&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1758518727707-b023e285b709?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1lZXRpbmclMjBtb2Rlcm58ZW58MXx8fHwxNzY4NzQ5MzMzfDA&ixlib=rb-4.1.0&q=80&w=1080'
  ],
  technologies: ['React', 'TypeScript', 'Tailwind CSS', 'i18next', 'React Query', 'Vite', 'REST API'],
  gradient: 'from-teal-500 to-emerald-500'
};

export function BreemCase() {
  return <CaseStudyTemplate data={breemData} />;
}
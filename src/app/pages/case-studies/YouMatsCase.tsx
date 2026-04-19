import { CaseStudyTemplate } from '../CaseStudyTemplate';
import { Smartphone, CreditCard, TrendingUp, Bell, Shield, Zap } from 'lucide-react';
import { youmatsLogo, youmatsScreenshot, youmatsCover } from '@/assets/images';

const youmatsData = {
  title: 'YouMats.com',
  subtitle: 'Premium e-commerce platform for Islamic prayer mats',
  category: 'E-Commerce',
  client: 'YouMats',
  duration: '4 months',
  tags: ['React', 'Node.js', 'Stripe', 'MongoDB', 'AWS'],
  heroImage: youmatsHero,
  logo: youmatsLogo,
  url: 'https://youmats.com',
  overview: 'YouMats.com is a comprehensive e-commerce platform specializing in premium Islamic prayer mats. We built a modern, user-friendly online store with advanced filtering, secure payment processing, and seamless inventory management to serve the global Muslim community.',
  challenge: {
    title: 'The Challenge',
    description: 'YouMats needed a robust e-commerce solution to showcase their premium prayer mat collection while handling international shipping, multiple currencies, and providing an exceptional user experience.',
    points: [
      'Complex product variations with different sizes, colors, and materials',
      'Need for international shipping and multi-currency support',
      'Advanced filtering system for better product discovery',
      'Secure payment processing with multiple payment gateways',
      'Real-time inventory management across multiple warehouses'
    ]
  },
  solution: {
    title: 'Our Solution',
    description: 'We developed a full-featured e-commerce platform built on React and Node.js, with Stripe integration for payments and MongoDB for scalable data management.',
    points: [
      'Intuitive product browsing with advanced filtering by size, color, material, and price',
      'Secure checkout process with Stripe integration and multiple payment options',
      'Real-time inventory tracking and automated low-stock alerts',
      'Responsive design optimized for mobile and desktop shopping',
      'Multi-currency support with automatic conversion',
      'Admin dashboard for order management and analytics'
    ]
  },
  features: {
    title: 'Powerful features that drive conversions',
    items: [
      {
        title: 'Smart Search & Filtering',
        description: 'Advanced product discovery with real-time search, multi-faceted filters, and intelligent recommendations.',
        icon: Zap
      },
      {
        title: 'Secure Payments',
        description: 'PCI-compliant payment processing with Stripe, supporting credit cards, digital wallets, and international payments.',
        icon: Shield
      },
      {
        title: 'Mobile-First Design',
        description: 'Fully responsive shopping experience optimized for mobile devices, tablets, and desktop.',
        icon: Smartphone
      },
      {
        title: 'Order Tracking',
        description: 'Real-time order status updates with email notifications and shipment tracking integration.',
        icon: TrendingUp
      },
      {
        title: 'Inventory Management',
        description: 'Automated stock tracking with low inventory alerts and multi-warehouse support.',
        icon: Bell
      },
      {
        title: 'One-Click Checkout',
        description: 'Streamlined checkout process with saved addresses and payment methods for returning customers.',
        icon: CreditCard
      }
    ]
  },
  results: {
    title: 'Impressive Results',
    metrics: [
      { value: '250%', label: 'Increase in Sales' },
      { value: '4.2x', label: 'Higher Conversion Rate' },
      { value: '98%', label: 'Customer Satisfaction' }
    ],
    description: 'The new platform delivered exceptional results, significantly boosting sales and customer engagement.'
  },
  images: [
    youmatsCover,
    'https://images.unsplash.com/photo-1723705027411-9bfc3c99c2e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjBzaG9wcGluZyUyMGludGVyZmFjZXxlbnwxfHx8fDE3Njg3MTkyNjR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1607697987724-fc9f8b225223?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBwYXltZW50JTIwYXBwfGVufDF8fHx8MTc2ODc1NDM4MXww&ixlib=rb-4.1.0&q=80&w=1080'
  ],
  technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe API', 'AWS S3', 'Redis', 'Tailwind CSS'],
  gradient: 'from-emerald-500 to-teal-500'
};

export function YouMatsCase() {
  return <CaseStudyTemplate data={youmatsData} />;
}
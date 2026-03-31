import { CaseStudyTemplate } from '../CaseStudyTemplate';
import { Smartphone, MapPin, Calendar, Bell, Shield, Zap } from 'lucide-react';
import { bakkarLogo, bakkarHero } from '@/assets/images';

const bakkarData = {
  title: 'Bakkar',
  subtitle: 'On-demand mobile app for car washing and detailing services',
  category: 'Mobile App',
  client: 'Bakkar',
  duration: '3 months',
  tags: ['React Native', 'Node.js', 'GPS Tracking', 'Payment Gateway', 'Real-time'],
  heroImage: bakkarHero,
  logo: bakkarLogo,
  overview: 'Bakkar is a revolutionary on-demand mobile application that brings professional car washing and detailing services directly to customers\' locations. We engineered a comprehensive platform that seamlessly connects vehicle owners with certified service providers, offering convenient booking, real-time GPS tracking, and secure payment processing.',
  challenge: {
    title: 'The Challenge',
    description: 'Bakkar needed a robust mobile platform to disrupt the traditional car wash industry by providing on-demand services with real-time tracking and seamless payment integration.',
    points: [
      'Real-time GPS tracking for service providers and customers',
      'Dynamic pricing based on service type, vehicle size, and location',
      'Scheduling system with instant and advance booking options',
      'Secure payment gateway with multiple payment methods',
      'Rating and review system for quality assurance',
      'Push notifications for booking confirmations and service updates'
    ]
  },
  solution: {
    title: 'Our Solution',
    description: 'We developed a feature-rich mobile application using React Native for cross-platform compatibility, with a robust Node.js backend for handling real-time operations and complex business logic.',
    points: [
      'Cross-platform mobile app (iOS & Android) built with React Native',
      'Real-time GPS tracking with Google Maps integration',
      'Intelligent booking system with calendar management',
      'Multi-gateway payment integration with Stripe and local processors',
      'Push notification system for instant updates',
      'Comprehensive admin dashboard for service management',
      'Rating and review system with photo uploads',
      'Service history and loyalty rewards program'
    ]
  },
  features: {
    title: 'Powerful features that enhance user experience',
    items: [
      {
        title: 'Real-Time GPS Tracking',
        description: 'Track service providers in real-time with accurate ETA and live location updates throughout the service.',
        icon: MapPin
      },
      {
        title: 'Smart Booking System',
        description: 'Schedule services instantly or in advance with flexible time slots and automatic provider matching.',
        icon: Calendar
      },
      {
        title: 'Secure Payments',
        description: 'Multiple payment options including credit cards, digital wallets, and cash with PCI-compliant processing.',
        icon: Shield
      },
      {
        title: 'Push Notifications',
        description: 'Real-time updates for booking confirmations, provider arrivals, service completion, and special offers.',
        icon: Bell
      },
      {
        title: 'Mobile-First Design',
        description: 'Intuitive interface optimized for one-handed use with smooth animations and responsive design.',
        icon: Smartphone
      },
      {
        title: 'Quick Service Access',
        description: 'Browse services, view pricing, and book appointments in under 60 seconds with saved preferences.',
        icon: Zap
      }
    ]
  },
  results: {
    title: 'Outstanding Results',
    metrics: [
      { value: '10K+', label: 'Active Users' },
      { value: '4.8/5', label: 'App Store Rating' },
      { value: '85%', label: 'Repeat Customers' }
    ],
    description: 'The Bakkar platform has transformed the car washing experience, achieving high user satisfaction and rapid growth.'
  },
  images: [
    'https://images.unsplash.com/photo-1601362840469-51e4d8d58785?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjB3YXNoaW5nJTIwc2VydmljZXxlbnwxfHx8fDE3Njg3NTI2NzZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjB1c2VyJTIwaW50ZXJmYWNlfGVufDF8fHx8MTc2ODcxOTI2NHww&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1590839845192-e90a98dc8a67?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjBkZXRhaWxpbmd8ZW58MXx8fHwxNzY4NzU0MzgxfDA&ixlib=rb-4.1.0&q=80&w=1080'
  ],
  technologies: ['React Native', 'Node.js', 'Express', 'MongoDB', 'Google Maps API', 'Stripe API', 'Firebase Cloud Messaging', 'Socket.io', 'Redis'],
  gradient: 'from-orange-500 to-red-500'
};

export function BakkarCase() {
  return <CaseStudyTemplate data={bakkarData} />;
}
import { CaseStudyTemplate } from '../CaseStudyTemplate';
import { Eye, Camera, Zap, Shield, TrendingUp, Cpu } from 'lucide-react';
import { efficientVisionLogo as effvisionLogo, efficientVisionHero as effvisionHero } from '@/assets/images';

const efficientVisionData = {
  title: 'Efficient Vision',
  subtitle: 'AI-powered computer vision platform',
  category: 'AI & Computer Vision',
  client: 'Efficient Vision',
  duration: '8 months',
  tags: ['React', 'Python', 'TensorFlow', 'WebRTC', 'Docker'],
  heroImage: effvisionHero,
  logo: effvisionLogo,
  url: 'https://effvision.com',
  overview: 'Efficient Vision is an advanced AI-powered computer vision platform that delivers real-time object detection, analytics, and automation solutions for enterprise clients across various industries.',
  challenge: {
    title: 'The Challenge',
    description: 'Enterprise clients needed a powerful yet accessible computer vision solution that could process real-time video streams, detect objects accurately, and provide actionable insights.',
    points: [
      'Process multiple high-resolution video streams simultaneously',
      'Achieve high accuracy in object detection across diverse scenarios',
      'Provide real-time analytics with minimal latency',
      'Scale infrastructure to handle growing data volumes',
      'Create an intuitive interface for non-technical users'
    ]
  },
  solution: {
    title: 'Our Solution',
    description: 'We developed a comprehensive computer vision platform using React for the frontend and Python with TensorFlow for the AI backend, delivering real-time processing with WebRTC streaming.',
    points: [
      'Custom-trained deep learning models for object detection',
      'Real-time video streaming with WebRTC for low latency',
      'Scalable microservices architecture with Docker containers',
      'Interactive dashboard for monitoring and analytics',
      'API integration for third-party systems',
      'Cloud deployment with automatic scaling'
    ]
  },
  features: {
    title: 'Cutting-edge AI features',
    items: [
      {
        title: 'Real-Time Detection',
        description: 'Process video streams in real-time with sub-second latency using optimized neural networks.',
        icon: Eye
      },
      {
        title: 'Multi-Camera Support',
        description: 'Monitor and analyze multiple camera feeds simultaneously with intelligent resource management.',
        icon: Camera
      },
      {
        title: 'Custom AI Models',
        description: 'Train custom models for specific use cases with transfer learning capabilities.',
        icon: Cpu
      },
      {
        title: 'Fast Processing',
        description: 'GPU-accelerated inference with optimized algorithms for maximum throughput.',
        icon: Zap
      },
      {
        title: 'Secure Infrastructure',
        description: 'Enterprise-grade security with encrypted streams and access controls.',
        icon: Shield
      },
      {
        title: 'Analytics Dashboard',
        description: 'Comprehensive analytics with trends, heatmaps, and exportable reports.',
        icon: TrendingUp
      }
    ]
  },
  results: {
    title: 'Transformative Results',
    metrics: [
      { value: '99.2%', label: 'Detection Accuracy' },
      { value: '<100ms', label: 'Processing Latency' },
      { value: '50+', label: 'Enterprise Clients' }
    ],
    description: 'The platform has revolutionized how enterprises leverage computer vision, delivering unprecedented accuracy and performance.'
  },
  images: [
    'https://images.unsplash.com/photo-1697577418970-95d99b5a55cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3Njg3MzU1NzF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1649877508777-1554357604eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBSSUyMGNvbXB1dGVyJTIwdmlzaW9ufGVufDF8fHx8MTc2ODc1ODY3NXww&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1744782211816-c5224434614f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwdmlzdWFsaXphdGlvbiUyMGNoYXJ0c3xlbnwxfHx8fDE3Njg3MjEzODR8MA&ixlib=rb-4.1.0&q=80&w=1080'
  ],
  technologies: ['React', 'Python', 'TensorFlow', 'WebRTC', 'Docker', 'Kubernetes', 'PostgreSQL', 'Redis'],
  testimonial: {
    quote: 'Efficient Vision has transformed our security operations. The AI accuracy and real-time capabilities are unmatched.',
    author: 'David Chen',
    role: 'CTO, SecureTech Inc'
  },
  gradient: 'from-green-500 to-emerald-500'
};

export function EfficientVisionCase() {
  return <CaseStudyTemplate data={efficientVisionData} />;
}
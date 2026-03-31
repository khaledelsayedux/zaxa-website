import { lazy, Suspense } from 'react';
import { SEO } from '../components/SEO';
import { usePlayTabSound } from '@/app/hooks/usePlayTabSound';
import { HomePageHero } from './HomePageHero';

const HomePageBelowFold = lazy(() => import('./HomePageBelowFold'));

export function HomePage() {
  const playTabSound = usePlayTabSound();

  return (
    <div className="relative">
      <SEO
        title="Zaxa Studio | End-to-End Solutions for Growth"
        description="Zaxa Studio brings strategy, design, technology, and growth together to create, optimize, and scale products, brands, and experiences that perform."
        url="/"
        image="/og-image.webp"
        keywords="Zaxa Studio, software development, product design, UI UX, branding, web development, mobile apps, growth, digital products, Cairo agency"
      />
      <HomePageHero playTabSound={playTabSound} />
      <Suspense fallback={null}>
        <HomePageBelowFold playTabSound={playTabSound} />
      </Suspense>
    </div>
  );
}

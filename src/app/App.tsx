import { useEffect, useLayoutEffect, useRef, useState, lazy, Suspense } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { RouterProvider, createBrowserRouter, Outlet, useLocation } from 'react-router';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { FloatingContactButton } from './components/FloatingContactButton';
import { ParallaxBackground } from './components/ParallaxBackground';
import { ScrollToTop } from './components/ScrollToTop';
import { ThemeProvider } from './contexts/ThemeContext';
import { NavigationProvider } from './contexts/NavigationContext';
import { HomePage } from './pages/HomePage';
import { ErrorBoundary } from './components/ErrorBoundary';
import { lazyRoute } from './utils/lazyRoute';

const IntroAnimation = lazy(() =>
  import('./components/IntroAnimation').then((m) => ({ default: m.IntroAnimation })),
);

const ServicesPage = lazyRoute(() => import('./pages/ServicesPage'));
const AboutPage = lazyRoute(() =>
  import('./pages/AboutPage').then((m) => ({ default: m.AboutPage })),
);
const ProjectsPage = lazyRoute(() =>
  import('./pages/ProjectsPage').then((m) => ({ default: m.ProjectsPage })),
);
const ContactPage = lazyRoute(() =>
  import('./pages/ContactPage').then((m) => ({ default: m.ContactPage })),
);
const TermsPage = lazyRoute(() =>
  import('./pages/TermsPage').then((m) => ({ default: m.TermsPage })),
);
const PrivacyPage = lazyRoute(() =>
  import('./pages/PrivacyPage').then((m) => ({ default: m.PrivacyPage })),
);
const NotFoundPage = lazyRoute(() =>
  import('./pages/NotFoundPage').then((m) => ({ default: m.NotFoundPage })),
);
const ProductEngineeringPage = lazyRoute(() => import('./pages/services/ProductEngineeringPage'));
const ExperienceInterfacePage = lazyRoute(() => import('./pages/services/ExperienceInterfacePage'));
const BrandMarketingPage = lazyRoute(() => import('./pages/services/BrandMarketingPage'));
const SecurityCompliancePage = lazyRoute(() => import('./pages/services/SecurityCompliancePage'));
const IntelligenceDataPage = lazyRoute(() => import('./pages/services/IntelligenceDataPage'));
const ExperientialSpatialPage = lazyRoute(() => import('./pages/services/ExperientialSpatialPage'));
const SalesGrowthPage = lazyRoute(() => import('./pages/services/SalesGrowthPage'));
const OOHBTLBillboardsPage = lazyRoute(() => import('./pages/services/OOHBTLBillboardsPage'));
const CareersPage = lazyRoute(() =>
  import('./pages/Careers').then((m) => ({ default: m.CareersPage })),
);
const YouMatsCase = lazyRoute(() =>
  import('./pages/case-studies/YouMatsCase').then((m) => ({ default: m.YouMatsCase })),
);
const AlameedCoffeeCase = lazyRoute(() =>
  import('./pages/case-studies/AlameedCoffeeCase').then((m) => ({ default: m.AlameedCoffeeCase })),
);
const BreemCase = lazyRoute(() =>
  import('./pages/case-studies/BreemCase').then((m) => ({ default: m.BreemCase })),
);
const DreamCairoCase = lazyRoute(() =>
  import('./pages/case-studies/DreamCairoCase').then((m) => ({ default: m.DreamCairoCase })),
);
const EfficientVisionCase = lazyRoute(() =>
  import('./pages/case-studies/EfficientVisionCase').then((m) => ({ default: m.EfficientVisionCase })),
);
const BakkarCase = lazyRoute(() =>
  import('./pages/case-studies/BakkarCase').then((m) => ({ default: m.BakkarCase })),
);

function RootLayout() {
  const location = useLocation();
  const [enableRouteTransition, setEnableRouteTransition] = useState(false);
  const previousPathnameRef = useRef<string | null>(null);

  useEffect(() => {
    const id = requestAnimationFrame(() => setEnableRouteTransition(true));
    return () => cancelAnimationFrame(id);
  }, []);

  const pathname = location.pathname;
  const shouldAnimateRouteEnter =
    enableRouteTransition &&
    previousPathnameRef.current !== null &&
    previousPathnameRef.current !== pathname;

  useLayoutEffect(() => {
    previousPathnameRef.current = pathname;
  }, [pathname]);

  return (
    <NavigationProvider>
      <div className="relative min-h-screen bg-white dark:bg-[#000000] text-zinc-900 dark:text-white overflow-hidden transition-colors duration-500">
        <ParallaxBackground className="fixed inset-0 z-0" />

        <div className="relative z-10">
          <Navigation />
          <main className="relative scroll-container">
            <div
              key={location.pathname}
              className={shouldAnimateRouteEnter ? 'route-page-enter' : undefined}
            >
              <Outlet />
            </div>
          </main>
          <Footer />
        </div>
        <ScrollToTop />
        <FloatingContactButton />
      </div>
    </NavigationProvider>
  );
}

const router = createBrowserRouter([
  {
    path: '/',
    Component: RootLayout,
    ErrorBoundary: ErrorBoundary,
    children: [
      { index: true, Component: HomePage },
      { path: 'services', Component: ServicesPage },
      { path: 'about', Component: AboutPage },
      { path: 'projects', Component: ProjectsPage },
      { path: 'contact', Component: ContactPage },
      { path: 'terms', Component: TermsPage },
      { path: 'privacy', Component: PrivacyPage },
      { path: 'services/product-engineering', Component: ProductEngineeringPage },
      { path: 'services/experience-interface', Component: ExperienceInterfacePage },
      { path: 'services/brand-marketing', Component: BrandMarketingPage },
      { path: 'services/security-compliance', Component: SecurityCompliancePage },
      { path: 'services/intelligence-data', Component: IntelligenceDataPage },
      { path: 'services/experiential-spatial', Component: ExperientialSpatialPage },
      { path: 'services/sales-growth', Component: SalesGrowthPage },
      { path: 'services/ooh-btl-billboards', Component: OOHBTLBillboardsPage },
      { path: 'career', Component: CareersPage },
      { path: 'case-studies/youmats', Component: YouMatsCase },
      { path: 'case-studies/alameed-coffee', Component: AlameedCoffeeCase },
      { path: 'case-studies/breem', Component: BreemCase },
      { path: 'case-studies/dream-cairo', Component: DreamCairoCase },
      { path: 'case-studies/efficient-vision', Component: EfficientVisionCase },
      { path: 'case-studies/bakkar', Component: BakkarCase },
      { path: '*', Component: NotFoundPage },
    ],
  },
]);

export default function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [hasSeenIntro, setHasSeenIntro] = useState(false);

  useEffect(() => {
    const introSeen = sessionStorage.getItem('introSeen');
    if (introSeen) {
      setShowIntro(false);
      setHasSeenIntro(true);
    }
  }, []);

  const handleIntroComplete = () => {
    sessionStorage.setItem('introSeen', 'true');
    setShowIntro(false);
    setHasSeenIntro(true);
  };

  return (
    <HelmetProvider>
      <ThemeProvider>
        {showIntro && !hasSeenIntro && (
          <Suspense fallback={null}>
            <IntroAnimation onComplete={handleIntroComplete} />
          </Suspense>
        )}
        <RouterProvider router={router} />
      </ThemeProvider>
    </HelmetProvider>
  );
}

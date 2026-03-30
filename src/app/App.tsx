import { useEffect, useState } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { RouterProvider, createBrowserRouter, Outlet, useLocation } from 'react-router';
import { AnimatePresence, motion } from 'motion/react';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { FloatingContactButton } from './components/FloatingContactButton';
import { IntroAnimation } from './components/IntroAnimation';
import { ParallaxBackground } from './components/ParallaxBackground';
import { ScrollToTop } from './components/ScrollToTop';
import { ThemeProvider } from './contexts/ThemeContext';
import { NavigationProvider } from './contexts/NavigationContext';
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { AboutPage } from './pages/AboutPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { ContactPage } from './pages/ContactPage';
import { TermsPage } from './pages/TermsPage';
import { PrivacyPage } from './pages/PrivacyPage';
import { NotFoundPage } from './pages/NotFoundPage';
import ProductEngineeringPage from './pages/services/ProductEngineeringPage';
import ExperienceInterfacePage from './pages/services/ExperienceInterfacePage';
import BrandMarketingPage from './pages/services/BrandMarketingPage';
import SecurityCompliancePage from './pages/services/SecurityCompliancePage';
import IntelligenceDataPage from './pages/services/IntelligenceDataPage';
import ExperientialSpatialPage from './pages/services/ExperientialSpatialPage';
import SalesGrowthPage from './pages/services/SalesGrowthPage';
import OOHBTLBillboardsPage from './pages/services/OOHBTLBillboardsPage';
import { CareersPage } from './pages/Careers';
import { ErrorBoundary } from './components/ErrorBoundary';
// Case Study Imports
import { YouMatsCase } from './pages/case-studies/YouMatsCase';
import { AlameedCoffeeCase } from './pages/case-studies/AlameedCoffeeCase';
import { BreemCase } from './pages/case-studies/BreemCase';
import { DreamCairoCase } from './pages/case-studies/DreamCairoCase';
import { EfficientVisionCase } from './pages/case-studies/EfficientVisionCase';
import { BakkarCase } from './pages/case-studies/BakkarCase';

// Root layout component
function RootLayout() {
  const location = useLocation();
  
  return (
    <NavigationProvider>
      <div className="relative min-h-screen bg-white dark:bg-[#000000] text-zinc-900 dark:text-white overflow-hidden transition-colors duration-500">
        <ParallaxBackground className="fixed inset-0 z-0" />
        
        <div className="relative z-10">
          <Navigation />
          <main className="relative scroll-container">
            {/* Page transitions with smart animate effect - smooth slide & fade */}
            <AnimatePresence mode="wait">
              <motion.div
                key={location.pathname}
                initial={{ opacity: 0, y: 20, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.98 }}
                transition={{ 
                  duration: 0.4,
                  ease: [0.22, 1, 0.36, 1]
                }}
              >
                <Outlet />
              </motion.div>
            </AnimatePresence>
          </main>
          <Footer />
        </div>
        <ScrollToTop />
        <FloatingContactButton />
      </div>
    </NavigationProvider>
  );
}

// Create router configuration
const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    ErrorBoundary: ErrorBoundary,
    children: [
      { index: true, Component: HomePage },
      { path: "services", Component: ServicesPage },
      { path: "about", Component: AboutPage },
      { path: "projects", Component: ProjectsPage },
      { path: "contact", Component: ContactPage },
      { path: "terms", Component: TermsPage },
      { path: "privacy", Component: PrivacyPage },
      { path: "services/product-engineering", Component: ProductEngineeringPage },
      { path: "services/experience-interface", Component: ExperienceInterfacePage },
      { path: "services/brand-marketing", Component: BrandMarketingPage },
      { path: "services/security-compliance", Component: SecurityCompliancePage },
      { path: "services/intelligence-data", Component: IntelligenceDataPage },
      { path: "services/experiential-spatial", Component: ExperientialSpatialPage },
      { path: "services/sales-growth", Component: SalesGrowthPage },
      { path: "services/ooh-btl-billboards", Component: OOHBTLBillboardsPage },
      { path: "career", Component: CareersPage },
      // Case Study Routes
      { path: "case-studies/youmats", Component: YouMatsCase },
      { path: "case-studies/alameed-coffee", Component: AlameedCoffeeCase },
      { path: "case-studies/breem", Component: BreemCase },
      { path: "case-studies/dream-cairo", Component: DreamCairoCase },
      { path: "case-studies/efficient-vision", Component: EfficientVisionCase },
      { path: "case-studies/bakkar", Component: BakkarCase },
      { path: "*", Component: NotFoundPage },
    ],
  },
]);

export default function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [hasSeenIntro, setHasSeenIntro] = useState(false);

  useEffect(() => {
    // Check if user has already seen the intro in this session
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
        {showIntro && !hasSeenIntro && <IntroAnimation onComplete={handleIntroComplete} />}
        <RouterProvider router={router} />
      </ThemeProvider>
    </HelmetProvider>
  );
}
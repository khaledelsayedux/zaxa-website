import { Helmet } from 'react-helmet-async';
import { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: string;
  keywords?: string;
}

export function SEO({
  title = 'Zaxa Studio | Zero Ambiguity. X-Scale Architecture.',
  description = 'Engineering the digital backbone for visionary enterprises in a partner-led 8-week sprint. Zaxa Studio delivers custom software solutions, mobile apps, UI/UX design, and scalable backend systems.',
  image = '/og-image.png',
  url = '',
  type = 'website',
  keywords = 'custom software development, mobile app development, UI/UX design, backend development, software agency, startup development, Cairo software studio, Zaxa Studio, scalable architecture, partner-led development, enterprise software, digital transformation, API development, cloud infrastructure',
}: SEOProps) {
  const fullTitle = title.includes('Zaxa Studio') ? title : `${title} | Zaxa Studio`;
  const fullUrl = url.startsWith('http') ? url : `https://zaxa.studio${url}`;
  const fullImage = image.startsWith('http') ? image : `https://zaxa.studio${image}`;

  // Add structured data to head using useEffect
  useEffect(() => {
    // Define schemas inside useEffect to avoid stale closures
    const orgSchema = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Zaxa Studio',
      alternateName: 'Zaxa',
      url: 'https://zaxa.studio',
      logo: 'https://zaxa.studio/logo.png',
      description: 'Professional software engineering studio specializing in custom software development, mobile apps, and enterprise solutions',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Cairo',
        addressCountry: 'EG'
      },
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'Business Inquiries',
        email: 'hello@zaxa.studio'
      },
      sameAs: [
        'https://www.linkedin.com/company/zaxa-studio',
        'https://twitter.com/ZaxaStudio',
        'https://www.instagram.com/zaxa.studio',
        'https://www.behance.net/zaxastudio'
      ]
    };

    const webSchema = {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'Zaxa Studio',
      url: 'https://zaxa.studio',
      description: description,
      publisher: {
        '@type': 'Organization',
        name: 'Zaxa Studio',
        logo: {
          '@type': 'ImageObject',
          url: 'https://zaxa.studio/logo.png'
        }
      },
      potentialAction: {
        '@type': 'SearchAction',
        target: 'https://zaxa.studio/search?q={search_term_string}',
        'query-input': 'required name=search_term_string'
      }
    };

    const breadSchema = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://zaxa.studio'
        }
      ]
    };

    const schemas = [
      { data: orgSchema, id: 'organization-schema' },
      { data: webSchema, id: 'website-schema' },
      { data: breadSchema, id: 'breadcrumb-schema' }
    ];

    schemas.forEach(({ data, id }) => {
      // Remove existing script if present
      const existing = document.getElementById(id);
      if (existing) {
        existing.remove();
      }

      // Create new script element
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.id = id;
      script.textContent = JSON.stringify(data);
      document.head.appendChild(script);
    });

    // Cleanup on unmount
    return () => {
      schemas.forEach(({ id }) => {
        const script = document.getElementById(id);
        if (script) {
          script.remove();
        }
      });
    };
  }, [description]);

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes" />
      <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Zaxa Studio" />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      <meta name="bingbot" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="rating" content="General" />
      <meta name="distribution" content="global" />
      
      <meta name="geo.region" content="EG" />
      <meta name="geo.placename" content="Cairo" />
      
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:image:secure_url" content={fullImage} />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={fullTitle} />
      <meta property="og:site_name" content="Zaxa Studio" />
      <meta property="og:locale" content="en_US" />
      
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImage} />
      <meta name="twitter:image:alt" content={fullTitle} />
      <meta name="twitter:creator" content="@ZaxaStudio" />
      <meta name="twitter:site" content="@ZaxaStudio" />
      
      <meta property="fb:app_id" content="your-facebook-app-id" />
      <meta name="pinterest-rich-pin" content="true" />
      
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="apple-mobile-web-app-title" content="Zaxa Studio" />
      <meta name="application-name" content="Zaxa Studio" />
      
      <meta name="theme-color" content="#000000" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="msapplication-TileImage" content="/mstile-144x144.png" />
      <meta name="msapplication-config" content="/browserconfig.xml" />
      
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
      <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
      
      <link rel="canonical" href={fullUrl} />
      
      <link rel="alternate" hrefLang="en" href={fullUrl} />
      <link rel="alternate" hrefLang="x-default" href={fullUrl} />
      
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="apple-touch-icon" sizes="152x152" href="/apple-touch-icon-152x152.png" />
      <link rel="apple-touch-icon" sizes="120x120" href="/apple-touch-icon-120x120.png" />
      <link rel="apple-touch-icon" sizes="76x76" href="/apple-touch-icon-76x76.png" />
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#1DCD9F" />
      
      <meta name="format-detection" content="telephone=yes" />
      <meta name="format-detection" content="email=yes" />
      <meta name="format-detection" content="address=yes" />
      
      <meta name="copyright" content="Zaxa Studio" />
      
      <meta name="referrer" content="strict-origin-when-cross-origin" />
    </Helmet>
  );
}

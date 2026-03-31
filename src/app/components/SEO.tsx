import { Helmet } from 'react-helmet-async';

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
  description = 'Engineering the digital backbone for visionary enterprises through strategy, design, technology, and scalable execution.',
  image = '/og-image.webp',
  url = '',
  type = 'website',
  keywords = 'Zaxa Studio, software development, UI UX design, branding, web development, mobile apps, digital products, scalable systems, Cairo agency',
}: SEOProps) {
  const siteUrl = 'https://zaxa.studio';
  const fullTitle = title.includes('Zaxa Studio') ? title : `${title} | Zaxa Studio`;
  const fullUrl = url.startsWith('http') ? url : `${siteUrl}${url}`;
  const fullImage = image.startsWith('http') ? image : `${siteUrl}${image}`;

  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        name: 'Zaxa Studio',
        url: siteUrl,
        logo: `${siteUrl}/logo.webp`,
        description,
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Cairo',
          addressCountry: 'EG',
        },
        contactPoint: {
          '@type': 'ContactPoint',
          contactType: 'Business Inquiries',
          email: 'hello@zaxa.studio',
        },
      },
      {
        '@type': 'WebSite',
        name: 'Zaxa Studio',
        url: siteUrl,
        description,
      },
    ],
  };

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Zaxa Studio" />
      <meta name="robots" content="index,follow" />
      <link rel="canonical" href={fullUrl} />

      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:site_name" content="Zaxa Studio" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImage} />

      <meta name="theme-color" content="#000000" />

      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.webp" />

      <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
    </Helmet>
  );
}
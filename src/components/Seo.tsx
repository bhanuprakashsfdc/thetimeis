import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { SITE_URL, APP_NAME, APP_NAME_TEXT } from '@/constants/constants';

type BreadcrumbItem = { name: string; item: string };

type SeoProps = {
  title: string;
  description: string;
  canonical?: string;
  robots?: 'index,follow' | 'noindex,follow' | 'noindex,nofollow' | 'index,nofollow';
  type?: 'website' | 'article';
  image?: string;
  breadcrumbs?: BreadcrumbItem[];
  schema?: Record<string, unknown>;
  themeColor?: string;
  twitterCard?: 'summary' | 'summary_large_image';
};

const Seo: React.FC<SeoProps> = ({
  title,
  description,
  canonical,
  robots = 'index,follow',
  type = 'website',
  image = `${SITE_URL}og-image.jpg`,
  breadcrumbs,
  schema,
  themeColor = '#0ea5e9',
  twitterCard = 'summary_large_image',
}) => {
  const location = useLocation();
  const path = location.pathname.replace(/\/+$/, '');
  const resolvedCanonical = canonical || `${SITE_URL}${path.startsWith('/') ? path.slice(1) : path || ''}`;
  const ogUrl = resolvedCanonical;
  const isHome = path === '' || path === '/' || path === '/index.html';

  const defaultWebPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: title,
    url: resolvedCanonical,
    isPartOf: {
      '@type': 'WebSite',
      name: APP_NAME_TEXT,
      url: SITE_URL,
    },
    ...(breadcrumbs
      ? {
          breadcrumb: {
            '@type': 'BreadcrumbList',
            itemListElement: breadcrumbs.map((b, i) => ({
              '@type': 'ListItem',
              position: i + 1,
              name: b.name,
              item: b.item,
            })),
          },
        }
      : {}),
  };

  const homeWebsiteSchema = isHome
    ? {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: APP_NAME_TEXT,
        url: SITE_URL,
        potentialAction: {
          '@type': 'SearchAction',
          target: `${SITE_URL}search?q={search_term_string}`,
          'query-input': 'required name=search_term_string',
        },
      }
    : null;

  const finalSchema = schema || homeWebsiteSchema || defaultWebPageSchema;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content={robots} />
      <link rel="canonical" href={resolvedCanonical} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={ogUrl} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content={APP_NAME_TEXT} />

      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      <meta name="theme-color" content={themeColor} />
      <link rel="alternate" hrefLang="en" href={resolvedCanonical} />
      <link rel="alternate" hrefLang="x-default" href={resolvedCanonical} />

      <script type="application/ld+json">{JSON.stringify(finalSchema)}</script>
    </Helmet>
  );
};

export default Seo;

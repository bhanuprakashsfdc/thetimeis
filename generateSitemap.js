import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { cities, cityToSlug } from './src/constants/cities.js';
import { TIMEIN, WHATISTHETIMERIGHTNOWIN, TIMENOW, LOCALTIME, WHATTIMEITISIN } from './src/constants/constants.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const websiteUrl = 'https://www.thetimeis.net/';
const MAX_URLS_PER_SITEMAP = 500;

const escapeXml = (string) => {
  return string
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
};

const createSitemapXml = (urls) => {
  const urlEntries = urls.map(url => `
    <url>
      <loc>${url.loc}</loc>
      <lastmod>${url.lastmod}</lastmod>
      <changefreq>${url.changefreq}</changefreq>
      <priority>${url.priority}</priority>
    </url>
  `).join('');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries}
</urlset>`;
};

const createSitemapIndexXml = (sitemapFiles) => {
  const sitemapEntries = sitemapFiles.map(file => `
    <sitemap>
      <loc>${websiteUrl}${file}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
    </sitemap>
  `).join('');

  return `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapEntries}
</sitemapindex>`;
};

const generateSitemap = () => {
  const pages = [
    { loc: `${websiteUrl}`, lastmod: new Date().toISOString(), changefreq: 'weekly', priority: 1.0 },
    { loc: `${websiteUrl}blog.html`, lastmod: new Date().toISOString(), changefreq: 'weekly', priority: 0.9 },
    { loc: `${websiteUrl}about.html`, lastmod: new Date().toISOString(), changefreq: 'weekly', priority: 0.9 },
    { loc: `${websiteUrl}terms.html`, lastmod: new Date().toISOString(), changefreq: 'weekly', priority: 0.9 },
    { loc: `${websiteUrl}privacy.html`, lastmod: new Date().toISOString(), changefreq: 'monthly', priority: 0.8 },
    { loc: `${websiteUrl}world-clock.html`, lastmod: new Date().toISOString(), changefreq: 'weekly', priority: 0.9 },
    { loc: `${websiteUrl}timezone.html`, lastmod: new Date().toISOString(), changefreq: 'weekly', priority: 0.9 },
    { loc: `${websiteUrl}calendar.html`, lastmod: new Date().toISOString(), changefreq: 'weekly', priority: 0.9 },
    { loc: `${websiteUrl}pomodoro.html`, lastmod: new Date().toISOString(), changefreq: 'weekly', priority: 0.9 },
    { loc: `${websiteUrl}spin-wheel.html`, lastmod: new Date().toISOString(), changefreq: 'weekly', priority: 0.9 },
    { loc: `${websiteUrl}world-time-map.html`, lastmod: new Date().toISOString(), changefreq: 'weekly', priority: 0.9 },
    { loc: `${websiteUrl}contact.html`, lastmod: new Date().toISOString(), changefreq: 'monthly', priority: 0.8 },
    { loc: `${websiteUrl}countdown-timer.html`, lastmod: new Date().toISOString(), changefreq: 'weekly', priority: 0.9 },
    { loc: `${websiteUrl}accessibility.html`, lastmod: new Date().toISOString(), changefreq: 'monthly', priority: 0.8 },
    { loc: `${websiteUrl}faq.html`, lastmod: new Date().toISOString(), changefreq: 'weekly', priority: 0.9 },
    { loc: `${websiteUrl}disclaimer.html`, lastmod: new Date().toISOString(), changefreq: 'monthly', priority: 0.8 },
    { loc: `${websiteUrl}cookies.html`, lastmod: new Date().toISOString(), changefreq: 'monthly', priority: 0.8 },
  ];


  const cityPaths = cities.flatMap(city => {
    const slug = escapeXml(cityToSlug(city.name));
    return [
      {
        keyword: city.name,
        loc: `${websiteUrl}${TIMEIN}${slug}.html`,
        lastmod: new Date().toISOString(),
        changefreq: 'weekly',
        priority: 0.8
      },
      {
        keyword: city.name,
        loc: `${websiteUrl}${TIMENOW}${slug}.html`,
        lastmod: new Date().toISOString(),
        changefreq: 'weekly',
        priority: 0.8
      },
      {
        keyword: city.name,
        loc: `${websiteUrl}${LOCALTIME}${slug}.html`,
        lastmod: new Date().toISOString(),
        changefreq: 'weekly',
        priority: 0.8
      },
      {
        keyword: city.name,
        loc: `${websiteUrl}${WHATISTHETIMERIGHTNOWIN}${slug}.html`,
        lastmod: new Date().toISOString(),
        changefreq: 'weekly',
        priority: 0.8
      },
      {
        keyword: city.name,
        loc: `${websiteUrl}${WHATTIMEITISIN}${slug}.html`,
        lastmod: new Date().toISOString(),
        changefreq: 'weekly',
        priority: 0.8
      }
    ];
  });

  const countriesSet = new Set();
  cities.forEach(city => {
    if (city.Country) {
      countriesSet.add(city.Country);
    }
  });

  const countryPaths = Array.from(countriesSet).flatMap(country => {
    const slug = escapeXml(country.toLowerCase().replace(/\s+/g, '-'));
    return [
      {
        keyword: country,
        loc: `${websiteUrl}country/${slug}.html`,
        lastmod: new Date().toISOString(),
        changefreq: 'weekly',
        priority: 0.8
      },
      {
        keyword: country,
        loc: `${websiteUrl}${TIMEIN}country/${slug}.html`,
        lastmod: new Date().toISOString(),
        changefreq: 'weekly',
        priority: 0.8
      },
      {
        keyword: country,
        loc: `${websiteUrl}${TIMENOW}country/${slug}.html`,
        lastmod: new Date().toISOString(),
        changefreq: 'weekly',
        priority: 0.8
      },
      {
        keyword: country,
        loc: `${websiteUrl}${LOCALTIME}country/${slug}.html`,
        lastmod: new Date().toISOString(),
        changefreq: 'weekly',
        priority: 0.8
      },
      {
        keyword: country,
        loc: `${websiteUrl}${WHATISTHETIMERIGHTNOWIN}country/${slug}.html`,
        lastmod: new Date().toISOString(),
        changefreq: 'weekly',
        priority: 0.8
      },
      {
        keyword: country,
        loc: `${websiteUrl}${WHATTIMEITISIN}country/${slug}.html`,
        lastmod: new Date().toISOString(),
        changefreq: 'weekly',
        priority: 0.8
      }
    ];
  });

  const allUrls = [...pages, ...cityPaths, ...countryPaths];

  const sitemapFiles = [];
  const totalChunks = Math.ceil(allUrls.length / MAX_URLS_PER_SITEMAP);

  const publicDir = path.join(__dirname, 'public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  for (let i = 0; i < totalChunks; i++) {
    const chunk = allUrls.slice(i * MAX_URLS_PER_SITEMAP, (i + 1) * MAX_URLS_PER_SITEMAP);
    const fileName = `sitemap${i + 1}.xml`;
    const filePath = path.join(publicDir, fileName);
    const xmlContent = createSitemapXml(chunk);
    fs.writeFileSync(filePath, xmlContent.trim());
    sitemapFiles.push(fileName);
  }

  const indexXml = createSitemapIndexXml(sitemapFiles);
  fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), indexXml.trim());

  console.log(`✅ Generated ${sitemapFiles.length} sitemap(s) and index sitemap.xml`);
};

generateSitemap();

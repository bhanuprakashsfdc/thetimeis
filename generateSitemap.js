
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
/* import blogPosts from './src/data/blog' assert { type: 'json' }; */
import { cities, cityToSlug } from './src/constants/cities.js';
import { TIMEIN } from './src/constants/constants.js';

// Get the directory name of the current module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const websiteUrl = 'https://www.thetimeis.net/';

const escapeXml = (string) => {
  return string
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
};

const generateSitemap = () => {
  const pages = [
    { loc: `${websiteUrl}/`, lastmod: new Date().toISOString(), changefreq: 'weekly', priority: 1.0 },
    { loc: `${websiteUrl}/blog.html`, lastmod: new Date().toISOString(), changefreq: 'weekly', priority: 0.9 },
    { loc: `${websiteUrl}/about.html`, lastmod: new Date().toISOString(), changefreq: 'weekly', priority: 0.9 },
    { loc: `${websiteUrl}/terms.html`, lastmod: new Date().toISOString(), changefreq: 'weekly', priority: 0.9 },
    { loc: `${websiteUrl}/privacy.html`, lastmod: new Date().toISOString(), changefreq: 'monthly', priority: 0.8 },
    { loc: `${websiteUrl}/world-clock.html`, lastmod: new Date().toISOString(), changefreq: 'weekly', priority: 0.9 },
    { loc: `${websiteUrl}/timezone.html`, lastmod: new Date().toISOString(), changefreq: 'weekly', priority: 0.9 },
    { loc: `${websiteUrl}/calendar.html`, lastmod: new Date().toISOString(), changefreq: 'weekly', priority: 0.9 },
    { loc: `${websiteUrl}/pomodoro.html`, lastmod: new Date().toISOString(), changefreq: 'weekly', priority: 0.9 },
    { loc: `${websiteUrl}/spin-wheel.html`, lastmod: new Date().toISOString(), changefreq: 'weekly', priority: 0.9 },
  ];
  /*
  const blogPostUrls = blogPosts.map(post => ({
    loc: `${websiteUrl}/blog/${post.slug}.html`,
    lastmod: new Date().toISOString(),
    changefreq: 'weekly',
    priority: 0.8
  }));
 */
  const cityPaths = cities.map(city => {
    const slug = escapeXml(cityToSlug(city.name));
    return {
      keyword: city.name, // keep this for keyword-based usage
      loc: `${websiteUrl}${TIMEIN}${slug}.html`,
      lastmod: new Date().toISOString(),
      changefreq: 'weekly',
      priority: 0.8
    };
  });

  // Create country paths for sitemap
  const countriesSet = new Set();
  cities.forEach(city => {
    if (city.Country) {
      countriesSet.add(city.Country);
    }
  });

  const countryPaths = Array.from(countriesSet).map(country => {
    const slug = escapeXml(country.toLowerCase().replace(/\s+/g, '-'));
    return {
      keyword: country,
      loc: `${websiteUrl}/country/${slug}.html`,
      lastmod: new Date().toISOString(),
      changefreq: 'weekly',
      priority: 0.8
    };
  });

  /* const urls = [...pages, ...blogPostUrls, ...paths];  */
  const urls = [...pages, ...cityPaths, ...countryPaths];
  const urlEntries = urls.map(url => `
    <url>
      <loc>${url.loc}</loc>
      <lastmod>${url.lastmod}</lastmod>
      <changefreq>${url.changefreq}</changefreq>
      <priority>${url.priority}</priority>
    </url>
  `).join('');

  const sitemap = `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${urlEntries}
    </urlset>
  `;

  fs.writeFileSync(path.join(__dirname, 'public', 'sitemap.xml'), sitemap.trim());
};

generateSitemap();

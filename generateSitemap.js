import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { cities, cityToSlug } from './src/constants/cities.js';
import { TIMEIN, WHATISTHETIMERIGHTNOWIN, TIMENOW, LOCALTIME, WHATTIMEITISIN, CURRENTTIME, CURRENTTIMEIN, LOCALTIMEIN, TIMEINIS, CURRENTTIMEINIS, LOCALTIMEINIS, TIMENOWINIS, EXACTTIMEIN, REALTIMEIN, RIGHTNOWINIS, WHATSTHETIMENOWINIS, WHATTIMEISIT, WHATTIMEISITNOW, WHATTIMEISITRIGHTNOW, WHATTIMEISITIN, WHATTIMEISITCURRENTLY, WHATTIMEISITRIGHTNOWING, WHATISTHECURRENTTIMEIN, WHATISTHELOCALTIME, WHATISTHELOCALTIMEIN, WHATISTHECURRENTTIME, WHATISTIMENOW, WHATISTHENOWTIME, WHATISTIMERIGHTNOW, WHATISTHETIMEIN, WHATISTHETIMECURRENTLY, WHATISTHETIMETODAY, CLOCKIN, CLOCKNOW, CLOCKTIMEIN, CURRENTCLOCKIN, LOCALCLOCKIN, CLOCKTIMEZONE, WORLDCLOCKIN, WORLDCLOCKFOR, WORLDCLOCK, NOWTIMEIN, NOWLOCALTIMEIN, TIMERIGHTNOWIN, TIMERIGHTNOW, TIMEATTHISMOMENT, TIMEATTHISMOMENTIN, CURRENTMOMENTTIME, TIMETODAYIN, TIMETODAY, TIMENOWAT, TIMEZONEIN, TIMEZONEFOR, TIMEZONEOF, TIMEZONECLOCK, TIMEZONECHECK, CHECKTIMEZONEIN, CURRENTTIMEZONE, LOCALTIMEZONE, LOCALTIMEZONEIN, TIMEBYTIMEZONE, TIMEFORTIMEZONE, TIMEFORCITY, TIMEFORCOUNTRY, TIMEINCOUNTRY, TIMEINCITY, LOCALTIMEFOR, CURRENTTIMEFOR, CURRENTTIMEAT, LOCALTIMEAT, TIMENOWFOR, CHECKTIMEIN, CHECKTIMENOW, FINDTIMEIN, FINDTIMENOW, GETTIMEIN, GETTIMENOW, GETLOCALTIME, GETLOCALTIMEIN, GETCURRENTTIME, GETCURRENTTIMEIN, VIEWTIMEIN, SHOWTIMEIN, SHOWTIMENOW, HOWLATEISIT, HOWLATEISITIN, HOWEARLYIN, ISITLATETHERE, ISITMORNINGIN, ISITNIGHTIN, ISITDAYIN, WHATHOURISIT, WHATHOURISITIN, EXACTTIMEZONE, PRECISETIMEIN, PRECISECURRENTTIME, ACTUALTIMEIN, ACTUALTIMEZONE, LIVETIME, LIVETIMEIN, LIVETIMEFOR } from './src/constants/constants.js';

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


  const cityPaths = cities.map(city => {
    const slug = escapeXml(cityToSlug(city.name));
    return [
      { keyword: city.name, loc: `${websiteUrl}${TIMEIN}${slug}.html`, lastmod: new Date().toISOString(), changefreq: 'weekly', priority: 0.8 },
      { keyword: city.name, loc: `${websiteUrl}${TIMENOW}${slug}.html`, lastmod: new Date().toISOString(), changefreq: 'weekly', priority: 0.8 },
      { keyword: city.name, loc: `${websiteUrl}${LOCALTIME}${slug}.html`, lastmod: new Date().toISOString(), changefreq: 'weekly', priority: 0.8 },
      { keyword: city.name, loc: `${websiteUrl}${CURRENTTIME}${slug}.html`, lastmod: new Date().toISOString(), changefreq: 'weekly', priority: 0.8 },
      { keyword: city.name, loc: `${websiteUrl}${CURRENTTIMEIN}${slug}.html`, lastmod: new Date().toISOString(), changefreq: 'weekly', priority: 0.8 },
      { keyword: city.name, loc: `${websiteUrl}${LOCALTIMEIN}${slug}.html`, lastmod: new Date().toISOString(), changefreq: 'weekly', priority: 0.8 },
      { keyword: city.name, loc: `${websiteUrl}${WHATISTHETIMERIGHTNOWIN}${slug}.html`, lastmod: new Date().toISOString(), changefreq: 'weekly', priority: 0.8 },
      { keyword: city.name, loc: `${websiteUrl}${WHATTIMEITISIN}${slug}.html`, lastmod: new Date().toISOString(), changefreq: 'weekly', priority: 0.8 },
      { keyword: city.name, loc: `${websiteUrl}${TIMEINIS}${slug}.html`, lastmod: new Date().toISOString(), changefreq: 'weekly', priority: 0.8 },
      { keyword: city.name, loc: `${websiteUrl}${CURRENTTIMEINIS}${slug}.html`, lastmod: new Date().toISOString(), changefreq: 'weekly', priority: 0.8 },
      { keyword: city.name, loc: `${websiteUrl}${LOCALTIMEINIS}${slug}.html`, lastmod: new Date().toISOString(), changefreq: 'weekly', priority: 0.8 },
      { keyword: city.name, loc: `${websiteUrl}${TIMENOWINIS}${slug}.html`, lastmod: new Date().toISOString(), changefreq: 'weekly', priority: 0.8 },
      { keyword: city.name, loc: `${websiteUrl}${EXACTTIMEIN}${slug}.html`, lastmod: new Date().toISOString(), changefreq: 'weekly', priority: 0.8 },
      { keyword: city.name, loc: `${websiteUrl}${REALTIMEIN}${slug}.html`, lastmod: new Date().toISOString(), changefreq: 'weekly', priority: 0.8 },
      { keyword: city.name, loc: `${websiteUrl}${RIGHTNOWINIS}${slug}.html`, lastmod: new Date().toISOString(), changefreq: 'weekly', priority: 0.8 },
      { keyword: city.name, loc: `${websiteUrl}${WHATSTHETIMENOWINIS}${slug}.html`, lastmod: new Date().toISOString(), changefreq: 'weekly', priority: 0.8 },
      { keyword: city.name, loc: `${websiteUrl}${WHATTIMEISIT}${slug}.html`, lastmod: new Date().toISOString(), changefreq: 'weekly', priority: 0.8 },
      { keyword: city.name, loc: `${websiteUrl}${WHATTIMEISITNOW}${slug}.html`, lastmod: new Date().toISOString(), changefreq: 'weekly', priority: 0.8 },
      { keyword: city.name, loc: `${websiteUrl}${WHATTIMEISITRIGHTNOW}${slug}.html`, lastmod: new Date().toISOString(), changefreq: 'weekly', priority: 0.8 },
      { keyword: city.name, loc: `${websiteUrl}${WHATTIMEISITIN}${slug}.html`, lastmod: new Date().toISOString(), changefreq: 'weekly', priority: 0.8 },
      { keyword: city.name, loc: `${websiteUrl}${WHATTIMEISITCURRENTLY}${slug}.html`, lastmod: new Date().toISOString(), changefreq: 'weekly', priority: 0.8 },
      { keyword: city.name, loc: `${websiteUrl}${WHATTIMEISITRIGHTNOWING}${slug}.html`, lastmod: new Date().toISOString(), changefreq: 'weekly', priority: 0.8 },
      { keyword: city.name, loc: `${websiteUrl}${WHATISTHECURRENTTIMEIN}${slug}.html`, lastmod: new Date().toISOString(), changefreq: 'weekly', priority: 0.8 },
      { keyword: city.name, loc: `${websiteUrl}${WHATISTHELOCALTIME}${slug}.html`, lastmod: new Date().toISOString(), changefreq: 'weekly', priority: 0.8 },
      { keyword: city.name, loc: `${websiteUrl}${WHATISTHELOCALTIMEIN}${slug}.html`, lastmod: new Date().toISOString(), changefreq: 'weekly', priority: 0.8 },
      { keyword: city.name, loc: `${websiteUrl}${WHATISTHECURRENTTIME}${slug}.html`, lastmod: new Date().toISOString(), changefreq: 'weekly', priority: 0.8 },
      { keyword: city.name, loc: `${websiteUrl}${WHATISTIMENOW}${slug}.html`, lastmod: new Date().toISOString(), changefreq: 'weekly', priority: 0.8 },
      { keyword: city.name, loc: `${websiteUrl}${WHATISTHENOWTIME}${slug}.html`, lastmod: new Date().toISOString(), changefreq: 'weekly', priority: 0.8 },
      { keyword: city.name, loc: `${websiteUrl}${WHATISTIMERIGHTNOW}${slug}.html`, lastmod: new Date().toISOString(), changefreq: 'weekly', priority: 0.8 },
      { keyword: city.name, loc: `${websiteUrl}${WHATISTHETIMEIN}${slug}.html`, lastmod: new Date().toISOString(), changefreq: 'weekly', priority: 0.8 },
      { keyword: city.name, loc: `${websiteUrl}${WHATISTHETIMECURRENTLY}${slug}.html`, lastmod: new Date().toISOString(), changefreq: 'weekly', priority: 0.8 },
      { keyword: city.name, loc: `${websiteUrl}${WHATISTHETIMETODAY}${slug}.html`, lastmod: new Date().toISOString(), changefreq: 'weekly', priority: 0.8 },
      { keyword: city.name, loc: `${websiteUrl}${CLOCKIN}${slug}.html`, lastmod: new Date().toISOString(), changefreq: 'weekly', priority: 0.8 },
      { keyword: city.name, loc: `${websiteUrl}${CLOCKNOW}${slug}.html`, lastmod: new Date().toISOString(), changefreq: 'weekly', priority: 0.8 },
      { keyword: city.name, loc: `${websiteUrl}${CLOCKTIMEIN}${slug}.html`, lastmod: new Date().toISOString(), changefreq: 'weekly', priority: 0.8 },
      { keyword: city.name, loc: `${websiteUrl}${CURRENTCLOCKIN}${slug}.html`, lastmod: new Date().toISOString(), changefreq: 'weekly', priority: 0.8 },
      { keyword: city.name, loc: `${websiteUrl}${LOCALCLOCKIN}${slug}.html`, lastmod: new Date().toISOString(), changefreq: 'weekly', priority: 0.8 },
      { keyword: city.name, loc: `${websiteUrl}${CLOCKTIMEZONE}${slug}.html`, lastmod: new Date().toISOString(), changefreq: 'weekly', priority: 0.8 },
      { keyword: city.name, loc: `${websiteUrl}${WORLDCLOCKIN}${slug}.html`, lastmod: new Date().toISOString(), changefreq: 'weekly', priority: 0.8 },
      { keyword: city.name, loc: `${websiteUrl}${WORLDCLOCKFOR}${slug}.html`, lastmod: new Date().toISOString(), changefreq: 'weekly', priority: 0.8 },
      { keyword: city.name, loc: `${websiteUrl}${WORLDCLOCK}${slug}.html`, lastmod: new Date().toISOString(), changefreq: 'weekly', priority: 0.8 },
      { keyword: city.name, loc: `${websiteUrl}${NOWTIMEIN}${slug}.html`, lastmod: new Date().toISOString(), changefreq: 'weekly', priority: 0.8 },
      { keyword: city.name, loc: `${websiteUrl}${NOWLOCALTIMEIN}${slug}.html`, lastmod: new Date().toISOString(), changefreq: 'weekly', priority: 0.8 },
      { keyword: city.name, loc: `${websiteUrl}${TIMERIGHTNOWIN}${slug}.html`, lastmod: new Date().toISOString(), changefreq: 'weekly', priority: 0.8 },
      { keyword: city.name, loc: `${websiteUrl}${TIMERIGHTNOW}${slug}.html`, lastmod: new Date().toISOString(), changefreq: 'weekly', priority: 0.8 },
      { keyword: city.name, loc: `${websiteUrl}${TIMEATTHISMOMENT}${slug}.html`, lastmod: new Date().toISOString(), changefreq: 'weekly', priority: 0.8 },
      { keyword: city.name, loc: `${websiteUrl}${TIMEATTHISMOMENTIN}${slug}.html`, lastmod: new Date().toISOString(), changefreq: 'weekly', priority: 0.8 },
      { keyword: city.name, loc: `${websiteUrl}${CURRENTMOMENTTIME}${slug}.html`, lastmod: new Date().toISOString(), changefreq: 'weekly', priority: 0.8 },
      { keyword: city.name, loc: `${websiteUrl}${TIMETODAYIN}${slug}.html`, lastmod: new Date().toISOString(), changefreq: 'weekly', priority: 0.8 },
      { keyword: city.name, loc: `${websiteUrl}${TIMETODAY}${slug}.html`, lastmod: new Date().toISOString(), changefreq: 'weekly', priority: 0.8 },
      { keyword: city.name, loc: `${websiteUrl}${TIMENOWAT}${slug}.html`, lastmod: new Date().toISOString(), changefreq: 'weekly', priority: 0.8 },
      { keyword: city.name, loc: `${websiteUrl}${TIMEZONEIN}${slug}.html`, lastmod: new Date().toISOString(), changefreq: 'weekly', priority: 0.8 },
      { keyword: city.name, loc: `${websiteUrl}${TIMEZONEFOR}${slug}.html`, lastmod: new Date().toISOString(), changefreq: 'weekly', priority: 0.8 },
      { keyword: city.name, loc: `${websiteUrl}${TIMEZONEOF}${slug}.html`, lastmod: new Date().toISOString(), changefreq: 'weekly', priority: 0.8 },
      { keyword: city.name, loc: `${websiteUrl}${TIMEZONECLOCK}${slug}.html`, lastmod: new Date().toISOString(), changefreq: 'weekly', priority: 0.8 },
      { keyword: city.name, loc: `${websiteUrl}${TIMEZONECHECK}${slug}.html`, lastmod: new Date().toISOString(), changefreq: 'weekly', priority: 0.8 },
      { keyword: city.name, loc: `${websiteUrl}${CHECKTIMEZONEIN}${slug}.html`, lastmod: new Date().toISOString(), changefreq: 'weekly', priority: 0.8 },
      { keyword: city.name, loc: `${websiteUrl}${CURRENTTIMEZONE}${slug}.html`, lastmod: new Date().toISOString(), changefreq: 'weekly', priority: 0.8 },
      { keyword: city.name, loc: `${websiteUrl}${LOCALTIMEZONE}${slug}.html`, lastmod: new Date().toISOString(), changefreq: 'weekly', priority: 0.8 },
      { keyword: city.name, loc: `${websiteUrl}${LOCALTIMEZONEIN}${slug}.html`, lastmod: new Date().toISOString(), changefreq: 'weekly', priority: 0.8 },
      { keyword: city.name, loc: `${websiteUrl}${TIMEBYTIMEZONE}${slug}.html`, lastmod: new Date().toISOString(), changefreq: 'weekly', priority: 0.8 },
      { keyword: city.name, loc: `${websiteUrl}${TIMEFORTIMEZONE}${slug}.html`, lastmod: new Date().toISOString(), changefreq: 'weekly', priority: 0.8 },
      { keyword: city.name, loc: `${websiteUrl}${TIMEFORCITY}${slug}.html`, lastmod: new Date().toISOString(), changefreq: 'weekly', priority: 0.8 },
      { keyword: city.name, loc: `${websiteUrl}${TIMEFORCOUNTRY}${slug}.html`, lastmod: new Date().toISOString(), changefreq: 'weekly', priority: 0.8 },
      { keyword: city.name, loc: `${websiteUrl}${TIMEINCOUNTRY}${slug}.html`, lastmod: new Date().toISOString(), changefreq: 'weekly', priority: 0.8 },
      { keyword: city.name, loc: `${websiteUrl}${TIMEINCITY}${slug}.html`, lastmod: new Date().toISOString(), changefreq: 'weekly', priority: 0.8 },
      { keyword: city.name, loc: `${websiteUrl}${LOCALTIMEFOR}${slug}.html`, lastmod: new Date().toISOString(), changefreq: 'weekly', priority: 0.8 },
      { keyword: city.name, loc: `${websiteUrl}${CURRENTTIMEFOR}${slug}.html`, lastmod: new Date().toISOString(), changefreq: 'weekly', priority: 0.8 },
      { keyword: city.name, loc: `${websiteUrl}${CURRENTTIMEAT}${slug}.html`, lastmod: new Date().toISOString(), changefreq: 'weekly', priority: 0.8 },
      { keyword: city.name, loc: `${websiteUrl}${LOCALTIMEAT}${slug}.html`, lastmod: new Date().toISOString(), changefreq: 'weekly', priority: 0.8 },
      { keyword: city.name, loc: `${websiteUrl}${TIMENOWFOR}${slug}.html`, lastmod: new Date().toISOString(), changefreq: 'weekly', priority: 0.8 },
      { keyword: city.name, loc: `${websiteUrl}${CHECKTIMEIN}${slug}.html`, lastmod: new Date().toISOString(), changefreq: 'weekly', priority: 0.8 },
      { keyword: city.name, loc: `${websiteUrl}${CHECKTIMENOW}${slug}.html`, lastmod: new Date().toISOString(), changefreq: 'weekly', priority: 0.8 },
      { keyword: city.name, loc: `${websiteUrl}${FINDTIMEIN}${slug}.html`, lastmod: new Date().toISOString(), changefreq: 'weekly', priority: 0.8 },
      { keyword: city.name, loc: `${websiteUrl}${FINDTIMENOW}${slug}.html`, lastmod: new Date().toISOString(), changefreq: 'weekly', priority: 0.8 },
      { keyword: city.name, loc: `${websiteUrl}${GETTIMEIN}${slug}.html`, lastmod: new Date().toISOString(), changefreq: 'weekly', priority: 0.8 },
      { keyword: city.name, loc: `${websiteUrl}${GETTIMENOW}${slug}.html`, lastmod: new Date().toISOString(), changefreq: 'weekly', priority: 0.8 },
      { keyword: city.name, loc: `${websiteUrl}${GETLOCALTIME}${slug}.html`, lastmod: new Date().toISOString(), changefreq: 'weekly', priority: 0.8 },
      { keyword: city.name, loc: `${websiteUrl}${GETLOCALTIMEIN}${slug}.html`, lastmod: new Date().toISOString(), changefreq: 'weekly', priority: 0.8 },
      { keyword: city.name, loc: `${websiteUrl}${GETCURRENTTIME}${slug}.html`, lastmod: new Date().toISOString(), changefreq: 'weekly', priority: 0.8 },
      { keyword: city.name, loc: `${websiteUrl}${GETCURRENTTIMEIN}${slug}.html`, lastmod: new Date().toISOString(), changefreq: 'weekly', priority: 0.8 },
      { keyword: city.name, loc: `${websiteUrl}${VIEWTIMEIN}${slug}.html`, lastmod: new Date().toISOString(), changefreq: 'weekly', priority: 0.8 },
      { keyword: city.name, loc: `${websiteUrl}${SHOWTIMEIN}${slug}.html`, lastmod: new Date().toISOString(), changefreq: 'weekly', priority: 0.8 },
      { keyword: city.name, loc: `${websiteUrl}${SHOWTIMENOW}${slug}.html`, lastmod: new Date().toISOString(), changefreq: 'weekly', priority: 0.8 },
      { keyword: city.name, loc: `${websiteUrl}${HOWLATEISIT}${slug}.html`, lastmod: new Date().toISOString(), changefreq: 'weekly', priority: 0.8 },
      { keyword: city.name, loc: `${websiteUrl}${HOWLATEISITIN}${slug}.html`, lastmod: new Date().toISOString(), changefreq: 'weekly', priority: 0.8 },
      { keyword: city.name, loc: `${websiteUrl}${HOWEARLYIN}${slug}.html`, lastmod: new Date().toISOString(), changefreq: 'weekly', priority: 0.8 },
      { keyword: city.name, loc: `${websiteUrl}${ISITLATETHERE}${slug}.html`, lastmod: new Date().toISOString(), changefreq: 'weekly', priority: 0.8 },
      { keyword: city.name, loc: `${websiteUrl}${ISITMORNINGIN}${slug}.html`, lastmod: new Date().toISOString(), changefreq: 'weekly', priority: 0.8 },
      { keyword: city.name, loc: `${websiteUrl}${ISITNIGHTIN}${slug}.html`, lastmod: new Date().toISOString(), changefreq: 'weekly', priority: 0.8 },
      { keyword: city.name, loc: `${websiteUrl}${ISITDAYIN}${slug}.html`, lastmod: new Date().toISOString(), changefreq: 'weekly', priority: 0.8 },
      { keyword: city.name, loc: `${websiteUrl}${WHATHOURISIT}${slug}.html`, lastmod: new Date().toISOString(), changefreq: 'weekly', priority: 0.8 },
      { keyword: city.name, loc: `${websiteUrl}${WHATHOURISITIN}${slug}.html`, lastmod: new Date().toISOString(), changefreq: 'weekly', priority: 0.8 },
      { keyword: city.name, loc: `${websiteUrl}${EXACTTIMEZONE}${slug}.html`, lastmod: new Date().toISOString(), changefreq: 'weekly', priority: 0.8 },
      { keyword: city.name, loc: `${websiteUrl}${PRECISETIMEIN}${slug}.html`, lastmod: new Date().toISOString(), changefreq: 'weekly', priority: 0.8 },
      { keyword: city.name, loc: `${websiteUrl}${PRECISECURRENTTIME}${slug}.html`, lastmod: new Date().toISOString(), changefreq: 'weekly', priority: 0.8 },
      { keyword: city.name, loc: `${websiteUrl}${ACTUALTIMEIN}${slug}.html`, lastmod: new Date().toISOString(), changefreq: 'weekly', priority: 0.8 },
      { keyword: city.name, loc: `${websiteUrl}${ACTUALTIMEZONE}${slug}.html`, lastmod: new Date().toISOString(), changefreq: 'weekly', priority: 0.8 },
      { keyword: city.name, loc: `${websiteUrl}${LIVETIME}${slug}.html`, lastmod: new Date().toISOString(), changefreq: 'weekly', priority: 0.8 },
      { keyword: city.name, loc: `${websiteUrl}${LIVETIMEIN}${slug}.html`, lastmod: new Date().toISOString(), changefreq: 'weekly', priority: 0.8 },
      { keyword: city.name, loc: `${websiteUrl}${LIVETIMEFOR}${slug}.html`, lastmod: new Date().toISOString(), changefreq: 'weekly', priority: 0.8 },
    ];
  }).flat();

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
      loc: `${websiteUrl}country/${slug}.html`,
      lastmod: new Date().toISOString(),
      changefreq: 'weekly',
      priority: 0.8
    };
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

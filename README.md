<div align="center">

  <h1>🕐 TheTimeIs.net</h1>

  <p><b>Accurate World Clock & Timezone Tool</b><br/>
  Know the exact local time anywhere in the world — with timezone info, weather, and sunrise/sunset times.</p>

  ![Website](https://img.shields.io/badge/Website-Live-brightgreen?style=flat-square&logo=google-chrome&logoColor=white)
  ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
  ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
  ![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
  ![License](https://img.shields.io/badge/license-MIT-blue?style=flat-square)
  ![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen?style=flat-square)

</div>

---

> 🌐 **Live Site:** [www.thetimeis.net](https://www.thetimeis.net)  
> 🌍 **Coverage:** Worldwide — India, USA, UK, and every major timezone  
> ⚡ **Zero install required** — works instantly in any browser

---

## 📋 Table of Contents

- [About](#-about)
- [Features](#-features)
- [Supported Regions](#-supported-regions)
- [Tech Stack](#️-tech-stack)
- [Project Structure](#-project-structure)
- [Local Development](#-local-development)
- [Deployment](#-deployment)
- [URL Routing](#-url-routing)
- [SEO & Performance](#-seo--performance)
- [Roadmap](#️-roadmap)
- [Contributing](#-contributing)
- [License](#-license)

---

## 🌟 About

**TheTimeIs.net** is a fast, lightweight world clock web app that shows the exact current local time for any city or timezone worldwide — no signup, no app, no clutter.

Each city page provides:
- 🕐 A live, ticking clock (12h / 24h toggle)
- 🌐 Full timezone name and UTC offset
- ☁️ Current weather conditions and temperature
- 🌅 Sunrise and sunset times for that location
- 🗺️ Related world timezone clocks at a glance

Built and maintained by **[Bhanu Prakash Kollireddy](https://bhanuprakashsfdc.com)** as a lean, SEO-first alternative to bloated world clock platforms.

---

## ✨ Features

- 🕐 **Live Ticking Clock** — real-time seconds ticker, updates every second
- 🔁 **12h / 24h Toggle** — switch clock format with one click
- 🌍 **City-Specific Pages** — every city has its own clean URL (e.g. `/time-in/london.html`)
- 🌡️ **Weather Integration** — current conditions, temperature, and description per city
- 🌅 **Sunrise & Sunset Times** — calculated and displayed per location
- 🗺️ **Related Timezones Panel** — see other major cities' current times at a glance
- 📱 **Mobile Responsive** — works cleanly on phones, tablets, and desktops
- ⚡ **Lightweight & Fast** — no heavy frameworks, loads in under 2 seconds
- 🔍 **SEO Optimised** — city-level meta tags, structured data, descriptive URLs

---

## 🌍 Supported Regions

The site generates city-level time pages across all major regions:

| Region | Example Cities |
|---|---|
| 🌏 **Asia** | Hyderabad, Mumbai, Delhi, Bengaluru, Tokyo, Singapore, Dubai, Tbilisi |
| 🌍 **Europe** | London, Paris, Berlin, Rome, Madrid, Warsaw, Bucharest, Helsinki |
| 🌎 **Americas** | New York, Los Angeles, Chicago, Toronto, São Paulo, Mexico City |
| 🌏 **Oceania** | Sydney, Melbourne, Auckland, Perth |
| 🌍 **Africa & Middle East** | Cairo, Johannesburg, Nairobi, Riyadh, Tel Aviv |

> Every page follows the pattern: `https://www.thetimeis.net/time-in/{city-name}.html`

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Markup | HTML5 |
| Styling | CSS3 (custom, mobile-first) |
| Clock Logic | Vanilla JavaScript (Date / Intl API) |
| Timezone Engine | `Intl.DateTimeFormat` + IANA timezone database |
| Weather Data | OpenWeatherMap API (or similar) |
| Sunrise/Sunset | Astronomy / formula-based calculation |
| Hosting | cPanel / Static web hosting |
| Analytics | Google Analytics 4 |
| Monetization | Google AdSense |

---

## 📁 Project Structure

```
thetimeis.net/
├── index.html                   # Homepage — current local time (auto-detected)
├── time-in/
│   ├── london.html              # City-specific time pages
│   ├── new-york.html
│   ├── tokyo.html
│   ├── hyderabad.html
│   ├── dubai.html
│   └── ...                      # 100s of city pages
├── assets/
│   ├── css/
│   │   └── style.css            # Core stylesheet
│   ├── js/
│   │   ├── clock.js             # Live clock tick logic
│   │   ├── timezone.js          # Timezone detection & display
│   │   ├── weather.js           # Weather API integration
│   │   └── sunrise.js           # Sunrise/sunset computation
│   └── images/
│       └── og-image.png         # Open Graph preview image
├── sitemap.xml                  # XML sitemap for all city pages
├── robots.txt
└── .htaccess                    # URL rewrite rules (Apache)
```

---

## 💻 Local Development

Since this is a static site with no build step:

```bash
# Clone the repository
git clone https://github.com/bhanuprakashkollireddy/thetimeis.net.git
cd thetimeis.net

# Open directly in browser
open index.html

# Or serve locally to avoid CORS issues with weather API
npx serve .
# → Available at http://localhost:3000
```

### Setting up the Weather API

1. Get a free API key from [OpenWeatherMap](https://openweathermap.org/api)
2. Create a config file:

```js
// assets/js/config.js
const CONFIG = {
  WEATHER_API_KEY: 'your_api_key_here',
  WEATHER_BASE_URL: 'https://api.openweathermap.org/data/2.5/weather'
};
```

3. Reference it in your HTML before `weather.js`:

```html
<script src="/assets/js/config.js"></script>
<script src="/assets/js/weather.js"></script>
```

> ⚠️ Never commit your API key. Add `config.js` to `.gitignore`.

---

## 🚀 Deployment

### Static Hosting via cPanel / FTP

```bash
# Upload via SFTP using rsync
rsync -avz --delete ./ user@thetimeis.net:/public_html/

# Or use FileZilla
Host:     ftp.thetimeis.net
Username: your-cpanel-user
Password: your-cpanel-password
Port:     21
```

### Pre-Deployment Checklist

- [ ] Verify clock ticks accurately in multiple browser tabs
- [ ] Test 12h / 24h toggle on mobile
- [ ] Confirm weather data loads for at least 5 cities
- [ ] Check sunrise/sunset times against a reference source
- [ ] Run Google Lighthouse audit (target Performance > 90)
- [ ] Validate `sitemap.xml` includes all city pages
- [ ] Test AdSense slots render without layout shift

---

## 🔗 URL Routing

City pages follow a consistent slug pattern:

| City | URL |
|---|---|
| London | `/time-in/london.html` |
| New York | `/time-in/new-york.html` |
| Hyderabad | `/time-in/hyderabad.html` |
| Borjomi (Georgia) | `/time-in/borjomi.html` |
| São Paulo | `/time-in/sao-paulo.html` |

For Apache hosting, `.htaccess` handles clean URL rewriting:

```apache
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^time-in/([a-z-]+)$ /time-in/$1.html [L]
```

---

## 🔍 SEO & Performance

Each city page includes:

```html
<!-- City-specific meta tags -->
<title>Current Time in London | TheTimeIs.net</title>
<meta name="description" content="See the exact current time in London, UK. Live clock with timezone info, weather, and sunrise/sunset times.">

<!-- Open Graph -->
<meta property="og:title" content="Current Time in London">
<meta property="og:url" content="https://www.thetimeis.net/time-in/london.html">

<!-- Structured Data -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Current Time in London",
  "url": "https://www.thetimeis.net/time-in/london.html"
}
</script>
```

---

## 🗺️ Roadmap

- [x] Live ticking clock with 12h/24h toggle
- [x] City-specific pages with timezone info
- [x] Weather integration per city
- [x] Sunrise & sunset display
- [x] Related timezones panel
- [ ] Search bar — find any city instantly
- [ ] DST change countdown alert
- [ ] Time zone converter tool (`/convert`)
- [ ] Embeddable clock widget (iframe / `<script>` snippet)
- [ ] Dark mode toggle
- [ ] PWA support (offline + installable)
- [ ] Multi-language support (Hindi, Telugu, Spanish...)

---

## 🤝 Contributing

Found a bug? Want to add a new city or feature?

1. Fork the repository
2. Create your branch
   ```bash
   git checkout -b feature/add-search-bar
   ```
3. Make your changes and commit
   ```bash
   git commit -m 'feat: add city search bar with autocomplete'
   ```
4. Push and open a Pull Request
   ```bash
   git push origin feature/add-search-bar
   ```

### Adding a New City Page

Copy an existing city page and update:
- `<title>` and `<meta>` tags
- The `data-timezone` attribute (use IANA format, e.g. `Europe/London`)
- The `data-city` and `data-country` attributes
- The page filename to match the city slug

---

## 📝 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

---

<div align="center">
  <p>Built with ☕ and JavaScript by <a href="https://bhanuprakashsfdc.com">Bhanu Prakash Kollireddy</a></p>
  <p>
    <a href="https://www.thetimeis.net">🌐 Live Site</a> &nbsp;·&nbsp;
    <a href="https://www.linkedin.com/in/bhanuprakashsfdc">💼 LinkedIn</a> &nbsp;·&nbsp;
    <a href="https://github.com/bhanuprakashkollireddy">🐙 GitHub</a>
  </p>
  <sub>⭐ Star this repo if you find it useful!</sub>
</div>

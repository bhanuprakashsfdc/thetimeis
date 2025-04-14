import React, { useState } from 'react';
import Layout from '@/components/Layout';
import ClockDisplay from '@/components/ClockDisplay';
import TimezoneInfo from '@/components/TimezoneInfo';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import CityCard from '@/components/CityCard';
import { getPopularCities } from '@/constants/cities';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { APP_NAME, TIMEIN } from '@/constants/constants';
import Weather from '@/components/Weather';

const Index = () => {
  const [format24h, setFormat24h] = useState(false);
  const [showSeconds, setShowSeconds] = useState(true);
  const popularCities = getPopularCities();
  const currentTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const currentCity = popularCities.find(city => city.timeZone === currentTimezone) || popularCities[0];
  
  return (
    <Layout>
      <Helmet>
        <title>Current Time - Exact Time for Any Time Zone | {APP_NAME}</title>
        <meta name="description" content="Get the exact current time for any location worldwide. View accurate atomic clock time, time zones, and local times for cities across the globe." />
        <meta property="og:title" content={`Current Time - Exact Time for Any Time Zone | ${APP_NAME}`} />
        <meta property="og:description" content="Get the exact current time for any location worldwide. View accurate atomic clock time, time zones, and local times for cities across the globe." />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": APP_NAME,
            "url": "https://www.thetimeis.net/",
            "description": "Get the exact current time for any location worldwide",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://www.thetimeis.net//search?q={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          })}
        </script>
      </Helmet>
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center justify-center mb-16">
          <h1 className="text-4xl font-bold text-center mb-8">Current Time</h1>
          <p className="text-xl text-muted-foreground text-center mb-8 max-w-2xl">
            Displaying exact time for {currentCity.name}, {currentCity.Country}. 
            <Link to={`/${TIMEIN}${currentCity.name.toLowerCase().replace(/ /g, '-')}.html`} className="text-primary hover:underline">View details</Link>
          </p>
          <div className="flex justify-center w-full">
            <div className="bg-card rounded-xl shadow-xl p-8 text-center elevation-shadow w-full max-w-md border border-border/50">
              <div className="flex justify-center mb-4">
                <Weather city={currentCity.name} />
              </div>
              
              <Tabs defaultValue="12h" className="w-full mb-6">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="12h" onClick={() => setFormat24h(false)}>12-hour</TabsTrigger>
                  <TabsTrigger value="24h" onClick={() => setFormat24h(true)}>24-hour</TabsTrigger>
                </TabsList>
              </Tabs>
              
              <ClockDisplay 
                format24h={format24h}
                showSeconds={showSeconds}
                className="mb-4 scale-110"
              />
              
              <div className="flex justify-center mt-6">
                <label className="inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={showSeconds}
                    onChange={() => setShowSeconds(!showSeconds)}
                    className="sr-only peer"
                  />
                  <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/20 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                  <span className="ms-3 text-sm font-medium">Show Seconds</span>
                </label>
              </div>
            </div>
          </div>
        </div>
        <nav className="mb-8" aria-label="breadcrumb">
          <ol className="flex items-center space-x-2 text-sm">
            <li><Link to="/" className="text-primary hover:underline">Home</Link></li>
            <li>/</li>
            <li>Current Time</li>
          </ol>
        </nav>

        <div className="mb-16">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Popular Cities</h2>
            <Link to="/world-clock.html" className="text-primary flex items-center gap-2 hover:underline">
              View All <span>→</span>
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {popularCities.slice(0, 8).map((city) => (
              <CityCard 
                key={city.name}
                name={city.name}
                timezone={city.timeZone}
                country={city.Country}
              />
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Related Time Zones</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-card rounded-lg border border-border/50">
              <h3 className="text-xl font-semibold mb-4">Popular Time Zones</h3>
              <ul className="space-y-2">
                <li><Link to="/timezone/UTC.html" className="text-primary hover:underline">UTC (Coordinated Universal Time)</Link></li>
                <li><Link to="/timezone/EST.html" className="text-primary hover:underline">EST (Eastern Standard Time)</Link></li>
                <li><Link to="/timezone/PST.html" className="text-primary hover:underline">PST (Pacific Standard Time)</Link></li>
              </ul>
            </div>
            <div className="p-6 bg-card rounded-lg border border-border/50">
              <h3 className="text-xl font-semibold mb-4">Tools & Resources</h3>
              <ul className="space-y-2">
                <li><Link to="/world-clock.html" className="text-primary hover:underline">World Clock</Link></li>
                <li><Link to="/calendar.html" className="text-primary hover:underline">Calendar</Link></li>
                <li><Link to="/timezone.html" className="text-primary hover:underline">Time Zone Converter</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;

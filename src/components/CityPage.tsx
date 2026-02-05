import React, { useState, useEffect } from 'react';
import { useParams, Navigate, useLocation } from 'react-router-dom';
import ClockDisplay from '@/components/ClockDisplay';
import CityCard from '@/components/CityCard';
import { getCityBySlug } from '@/constants/cities';
import { Card, CardContent } from '@/components/ui/card';
import { Helmet } from 'react-helmet-async';
import { useToast } from '@/hooks/use-toast';
import { APP_NAME, SITE_URL, TIMEIN } from '@/constants/constants';

import { getPopularCities } from '@/constants/cities';
import { Button } from '@/components/ui/button';
import { ArrowRight, Globe, Clock, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import Weather from '@/components/Weather';
import SunriseSunset from '@/components/SunriseSunset';

type CityInfo = {
  name: string;
  country?: string;
  timeZone: string;
  region?: string;
  Country?: string;
  Continent?: string;
};

const CityPage = () => {
  const { citySlug } = useParams<{ citySlug: string }>();
  const location = useLocation();
  const [time, setTime] = useState(new Date());
  const [cityInfo, setCityInfo] = useState<CityInfo | null>(null);
  const { toast } = useToast();
  const [format24h, setFormat24h] = useState(false);
  const [loading, setLoading] = useState(true);
  const popularCities = getPopularCities();

  useEffect(() => {
    if (citySlug) {
      const cleanSlug = citySlug.replace('.html', '');
      const city = getCityBySlug(cleanSlug);

      if (city) {
        setCityInfo(city);
        document.title = `Current Time in ${city.name} | ${APP_NAME}`;
      }
      setLoading(false);
    }
  }, [citySlug]);

  useEffect(() => {
    if (!cityInfo) return;
    
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    
    return () => clearInterval(timer);
  }, [cityInfo]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!citySlug || !cityInfo) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-8 text-center">
          <h1 className="text-3xl font-bold mb-4">City Not Found</h1>
          <p className="text-lg mb-8">Sorry, we couldn't find information for the requested city.</p>
        </div>
      </Layout>
    );
  }

  const toggleTimeFormat = () => {
    setFormat24h(!format24h);
    toast({
      title: format24h ? "12-hour format enabled" : "24-hour format enabled",
      duration: 1500,
    });
  };

  const cleanSlug = citySlug?.replace('.html', '') || '';
  const canonicalUrl = `${SITE_URL}${TIMEIN}${cleanSlug}.html`;
  const isCanonicalPath = location.pathname.startsWith(`/${TIMEIN}`);
  const robotsContent = isCanonicalPath ? "index,follow" : "noindex,follow";

  return (
    <Layout>
      <Helmet>
        <title>Current Time in {cityInfo.name} | {APP_NAME}</title>
        <meta name="description" content={`Current accurate time in ${cityInfo.name}, ${cityInfo.country}. Local time, time zone, DST, GMT/UTC offset.`} />
        <meta property="og:title" content={`Time in ${cityInfo.name} | ${APP_NAME}`} />
        <meta property="og:description" content={`Exact current time in ${cityInfo.name}, ${cityInfo.country} with time zone information`} />
        <link rel="canonical" href={canonicalUrl} />
        <meta name="robots" content={robotsContent} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": `Current Time in ${cityInfo.name}`,
            "url": canonicalUrl,
            "isPartOf": {
              "@type": "WebSite",
              "name": APP_NAME,
              "url": SITE_URL
            },
            "breadcrumb": {
              "@type": "BreadcrumbList",
              "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": SITE_URL },
                { "@type": "ListItem", "position": 2, "name": "Time in City", "item": canonicalUrl }
              ]
            }
          })}
        </script>
      </Helmet>
      <div className="city-page-container">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center mb-10">
            <h1 className="text-4xl font-bold mb-4">Current Time in {cityInfo.name}</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {cityInfo?.country || cityInfo?.Continent || 'Unknown Country'}, {cityInfo?.region || cityInfo?.Country || 'Unknown Region'} • {cityInfo?.timeZone?.replace('/', ': ').replace(/_/g, ' ') || 'Unknown Timezone'}
            </p>
            <div className="flex justify-center mt-4">
              <Weather city={cityInfo.name} />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="md:col-span-2 rounded-xl overflow-hidden elevation-shadow bg-gradient-to-r from-background to-background/70">
              <CardContent className="p-8">
                <div className="mb-6 flex justify-center">
                  <button 
                    onClick={toggleTimeFormat}
                    className="bg-primary text-primary-foreground rounded-full px-4 py-2 text-sm font-medium transition-colors"
                  >
                    {format24h ? 'Switch to 12h' : 'Switch to 24h'}
                  </button>
                </div>
                
                <div className="clock-container flex justify-center">
                  <ClockDisplay 
                    format24h={format24h}
                    showSeconds={true}
                    timezone={cityInfo.timeZone}
                    className="scale-125 mb-8"
                  />
                </div>
                
                <div className="city-info mt-8 text-center">
                  <div className="text-lg">
                    <strong>Time Zone:</strong> {cityInfo.timeZone}
                  </div>
                  <div className="text-muted-foreground">
                    {new Intl.DateTimeFormat('en-US', {
                      weekday: 'long',
                      year: 'numeric',
                      month: 'long', 
                      day: 'numeric',
                      timeZone: cityInfo.timeZone
                    }).format(time)}
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <div className="md:col-span-1 space-y-4">
              <SunriseSunset city={cityInfo.name} />
            </div>
          </div>
        </div>
        <div className="container mx-auto px-4 mb-16">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Popular Cities</h2>
            <Button asChild variant="ghost" size="sm">
              <Link to="/world-clock.html" className="flex items-center gap-2">
                View All <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {popularCities.map((city) => (
              <CityCard 
                key={city.name}
                name={city.name}
                timezone={city.timeZone}
                country={city.Country}
              />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CityPage;


import React, { useState, useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import ClockDisplay from '@/components/ClockDisplay';
import { getCityBySlug } from '@/lib/cities';
import { Card, CardContent } from '@/components/ui/card';
import { Helmet } from 'react-helmet-async';
import { useToast } from '@/hooks/use-toast';

const CityPage = () => {
  const { citySlug } = useParams<{ citySlug: string }>();
  const [time, setTime] = useState(new Date());
  const [cityInfo, setCityInfo] = useState<any>(null);
  const { toast } = useToast();
  const [format24h, setFormat24h] = useState(false);

  useEffect(() => {
    if (citySlug) {
      const city = getCityBySlug(citySlug);
      if (city) {
        setCityInfo(city);
        document.title = `Current Time in ${city.name} | TimeSync`;
      }
    }
  }, [citySlug]);

  useEffect(() => {
    if (!cityInfo) return;
    
    // Update the time every second
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    
    return () => clearInterval(timer);
  }, [cityInfo]);

  if (!citySlug || !cityInfo) {
    return <Navigate to="/not-found" replace />;
  }

  const toggleTimeFormat = () => {
    setFormat24h(!format24h);
    toast({
      title: format24h ? "12-hour format enabled" : "24-hour format enabled",
      duration: 1500,
    });
  };

  return (
    <>
      <Helmet>
        <title>Current Time in {cityInfo.name} | TimeSync</title>
        <meta name="description" content={`Current accurate time in ${cityInfo.name}, ${cityInfo.country}. Local time, time zone, DST, GMT/UTC offset.`} />
        <meta property="og:title" content={`Time in ${cityInfo.name} | TimeSync`} />
        <meta property="og:description" content={`Exact current time in ${cityInfo.name}, ${cityInfo.country} with time zone information`} />
      </Helmet>
      <div className="city-page-container">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center mb-10">
            <h1 className="text-4xl font-bold mb-4">Current Time in {cityInfo.name}</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {cityInfo.country}, {cityInfo.region} • {cityInfo.timezone.replace('_', ' ')}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8">
            <Card className="rounded-xl overflow-hidden elevation-shadow bg-gradient-to-r from-background to-background/70">
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
                    timezone={cityInfo.timezone}
                    className="scale-125 mb-8"
                  />
                </div>
                
                <div className="city-info mt-8 text-center">
                  <div className="text-lg">
                    <strong>Time Zone:</strong> {cityInfo.timezone}
                  </div>
                  <div className="text-muted-foreground">
                    {new Intl.DateTimeFormat('en-US', {
                      weekday: 'long',
                      year: 'numeric',
                      month: 'long', 
                      day: 'numeric',
                      timeZone: cityInfo.timezone
                    }).format(time)}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default CityPage;

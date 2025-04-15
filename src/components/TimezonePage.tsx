
import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Layout from '@/components/Layout';
import { timezones } from '@/constants/timebascizones';
import { APP_NAME } from '@/constants/constants';
import ClockDisplay from '@/components/ClockDisplay';
import TimezoneInfo from '@/components/TimezoneInfo';
import SunriseSunset from '@/components/SunriseSunset';
import { Card, CardContent } from '@/components/ui/card';
import { Globe, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

const TimezonePage = () => {
  const { timezoneSlug } = useParams<{ timezoneSlug: string }>();
  const [format24h, setFormat24h] = React.useState(false);
  
  // Find the timezone from the slug
  const cleanSlug = timezoneSlug?.replace('.html', '') || '';
  const timezone = timezones.find(
    tz => tz.path === `/${cleanSlug}.html` || tz.name.toLowerCase().replace(/\s+/g, '-') === cleanSlug.toLowerCase()
  );
  
  // If timezone not found, show not found message
  if (!timezone) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-8 text-center">
          <h1 className="text-3xl font-bold mb-4">Timezone Not Found</h1>
          <p className="text-lg mb-8">Sorry, we couldn't find information for the requested timezone.</p>
          <Button asChild>
            <Link to="/">Back to Home</Link>
          </Button>
        </div>
      </Layout>
    );
  }
  
  // Find a representative city for this timezone to get sunrise/sunset data
  const representativeCity = timezone.name.split('/').pop()?.replace(/_/g, ' ') || '';
  
  return (
    <Layout>
      <Helmet>
        <title>{timezone.name} Time - Current Time in {timezone.name} | {APP_NAME}</title>
        <meta name="description" content={`Current accurate time for ${timezone.name} timezone (${timezone.timeZone}). View local time, DST and GMT/UTC offset.`} />
      </Helmet>
      <div className="container mx-auto px-4 py-8">
        <nav className="mb-8" aria-label="breadcrumb">
          <ol className="flex items-center space-x-2 text-sm">
            <li><Link to="/" className="text-primary hover:underline">Home</Link></li>
            <li>/</li>
            <li>{timezone.name}</li>
          </ol>
        </nav>
        
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold mb-4">Current Time in {timezone.name}</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {timezone.timeZone.replace('/', ': ').replace(/_/g, ' ')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="md:col-span-2 rounded-xl overflow-hidden elevation-shadow">
            <CardContent className="p-8">
              <div className="mb-6 flex justify-center">
                <button 
                  onClick={() => setFormat24h(!format24h)}
                  className="bg-primary text-primary-foreground rounded-full px-4 py-2 text-sm font-medium transition-colors"
                >
                  {format24h ? 'Switch to 12h' : 'Switch to 24h'}
                </button>
              </div>
              
              <div className="clock-container flex justify-center">
                <ClockDisplay 
                  format24h={format24h}
                  showSeconds={true}
                  timezone={timezone.timeZone}
                  className="scale-125 mb-8"
                />
              </div>
            </CardContent>
          </Card>
          
          <div className="md:col-span-1 space-y-4">
            <TimezoneInfo timezone={timezone.timeZone} />
            {representativeCity && (
              <SunriseSunset city={representativeCity} />
            )}
          </div>
        </div>
        
        <div className="mt-10">
          <Button asChild variant="outline">
            <Link to="/" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default TimezonePage;

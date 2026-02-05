
import React from 'react';
import Layout from '@/components/Layout';
import WorldClock from '@/components/WorldClock';
import { Globe } from 'lucide-react';
import { APP_NAME, SITE_URL } from '@/constants/constants';
import Seo from '@/components/Seo';

const WorldClockPage = () => {
  return (
    <Layout>
      <Seo
        title={`World Clock - ${APP_NAME}`}
        description="Track time across multiple cities and timezones around the world with our easy-to-use world clock."
        type="website"
        canonical={`${SITE_URL}world-clock.html`}
        breadcrumbs={[
          { name: 'Home', item: SITE_URL },
          { name: 'World Clock', item: `${SITE_URL}world-clock.html` }
        ]}
      />
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-center mb-8">
          <Globe className="h-8 w-8 text-primary mr-3" />
          <h1 className="text-4xl font-bold">World Clock</h1>
        </div>
        
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-center mb-10">
          Track time in multiple locations around the world.
          Add and customize your preferred timezones. Explore our <a href="/timezone.html" className="text-primary hover:underline">Timezone Converter</a> or learn about <a href="/blog/understanding-time-zones.html" className="text-primary hover:underline">time zones</a>.
        </p>
        
        <WorldClock />
      </div>
    </Layout>
  );
};

export default WorldClockPage;

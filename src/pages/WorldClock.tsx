
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
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="bg-muted/30 rounded-lg p-6">
              <h2 className="text-2xl font-semibold mb-4">How To Use</h2>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center">1</span>
                  <span>Add cities or time zones you want to monitor.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center">2</span>
                  <span>Reorder items to keep important locations at the top.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center">3</span>
                  <span>Use the converter to plan meetings across time zones.</span>
                </li>
              </ul>
            </div>
            <div className="rounded-lg p-6 border">
              <h3 className="text-lg font-medium mb-3">Features</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Live local time for each selected city</li>
                <li>Supports daylight saving time changes automatically</li>
                <li>Works on mobile and desktop</li>
                <li>Fast navigation to converters and popular zones</li>
              </ul>
            </div>
          </div>
          <div className="space-y-6">
            <div className="rounded-lg p-6 border">
              <h3 className="text-lg font-medium mb-3">Understanding Time Zones</h3>
              <p className="text-muted-foreground mb-3">
                Coordinated Universal Time (UTC) is the baseline used to calculate local times worldwide. Regions may offset
                from UTC and observe daylight saving time (DST), which shifts clocks during specific periods to extend evening daylight.
              </p>
              <p className="text-muted-foreground">
                When planning across countries, always check whether DST is active. Our tools account for these rules automatically.
              </p>
            </div>
            <div className="bg-muted/30 rounded-lg p-6">
              <h3 className="text-lg font-medium mb-3">FAQ</h3>
              <dl className="space-y-3">
                <div>
                  <dt className="font-medium">Why does the time change?</dt>
                  <dd className="text-muted-foreground">Some regions observe DST. Start and end dates vary by country or state.</dd>
                </div>
                <div>
                  <dt className="font-medium">Is the clock accurate?</dt>
                  <dd className="text-muted-foreground">Times are based on your device and IANA time zone data for each location.</dd>
                </div>
                <div>
                  <dt className="font-medium">Can I add more cities?</dt>
                  <dd className="text-muted-foreground">Yes. Use the search or add controls to include any city or time zone.</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default WorldClockPage;

import React from 'react';
import Layout from '@/components/Layout';
import WorldTimeMap from '@/components/WorldTimeMap';
import TimezonesComponent from '@/components/TimezonesComponent';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Globe } from 'lucide-react';
import { APP_NAME, SITE_URL } from '@/constants/constants';
import Seo from '@/components/Seo';

const WorldTimePage = () => {
  return (
    <Layout>
      <Seo
        title={`World Time Map - ${APP_NAME}`}
        description="Explore current times across different time zones using our interactive World Time Map. Stay on track globally!"
        type="website"
        canonical={`${SITE_URL}world-time-map.html`}
        breadcrumbs={[
          { name: 'Home', item: SITE_URL },
          { name: 'World Time Map', item: `${SITE_URL}world-time-map.html` }
        ]}
      />

      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-center mb-8">
          <Globe className="h-8 w-8 text-primary mr-3" />
          <h1 className="text-4xl font-bold">World Time Map</h1>
        </div>

        <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-center mb-10">
          Discover current times around the world using our interactive map. Perfect for scheduling across time zones!
        </p>

        <Card className="mb-8 border border-border/50 shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl">Live Global Clock</CardTitle>
          </CardHeader>
          <CardContent>
            <WorldTimeMap />
            <TimezonesComponent />
          </CardContent>
        </Card>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <div className="space-y-6">
            <div className="rounded-lg p-6 border">
              <h2 className="text-2xl font-semibold mb-4">Understanding Global Time</h2>
              <p className="text-muted-foreground mb-3">
                The map visualizes local times using IANA time zone data. Each region offsets from UTC and may observe daylight saving time.
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>UTC is the reference baseline for global coordination</li>
                <li>Offsets are shown as UTC± hours and minutes</li>
                <li>DST rules vary by country and can change over time</li>
              </ul>
            </div>
            <div className="bg-muted/30 rounded-lg p-6">
              <h3 className="text-lg font-medium mb-3">Scheduling Tips</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Confirm DST status for all participants</li>
                <li>Use converters for exact meeting times</li>
                <li>Share time zone aware calendar invites</li>
              </ul>
            </div>
          </div>
          <div className="space-y-6">
            <div className="rounded-lg p-6 border">
              <h3 className="text-lg font-medium mb-3">FAQ</h3>
              <dl className="space-y-3">
                <div>
                  <dt className="font-medium">Why do nearby cities show different times?</dt>
                  <dd className="text-muted-foreground">Political boundaries define time zones; neighboring regions may use different offsets.</dd>
                </div>
                <div>
                  <dt className="font-medium">Does the map auto-update?</dt>
                  <dd className="text-muted-foreground">Yes, times update continuously based on your device clock and zone rules.</dd>
                </div>
                <div>
                  <dt className="font-medium">What happens during DST transitions?</dt>
                  <dd className="text-muted-foreground">Clocks shift forward or back. The map reflects the current official time for each region.</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default WorldTimePage;

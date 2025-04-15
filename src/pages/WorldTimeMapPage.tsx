import React from 'react';
import Layout from '@/components/Layout';
import WorldTimeMap from '@/components/WorldTimeMap';
import TimezonesComponent from '@/components/TimezonesComponent';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Globe } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { APP_NAME } from '@/constants/constants';

const WorldTimePage = () => {
  return (
    <Layout>
      <Helmet>
        <title>World Time Map - {APP_NAME}</title>
        <meta name="description" content="Explore current times across different time zones using our interactive World Time Map. Stay on track globally!" />
      </Helmet>

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
      </div>
    </Layout>
  );
};

export default WorldTimePage;


import React from 'react';
import Layout from '@/components/Layout';
import WorldClock from '@/components/WorldClock';
import { Globe } from 'lucide-react';

const WorldClockPage = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-center mb-8">
          <Globe className="h-8 w-8 text-primary mr-3" />
          <h1 className="text-4xl font-bold">World Clock</h1>
        </div>
        
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-center mb-10">
          Track time in multiple locations around the world.
          Add and customize your preferred timezones.
        </p>
        
        <WorldClock />
      </div>
    </Layout>
  );
};

export default WorldClockPage;


import React from 'react';
import Layout from '@/components/Layout';
import WorldClock from '@/components/WorldClock';

const WorldClockPage = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold mb-4">World Clock</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Track time in multiple locations around the world.
            Add and customize your preferred timezones.
          </p>
        </div>
        
        <WorldClock />
      </div>
    </Layout>
  );
};

export default WorldClockPage;

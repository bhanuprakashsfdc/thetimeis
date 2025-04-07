
import React, { useState } from 'react';
import Layout from '@/components/Layout';
import ClockDisplay from '@/components/ClockDisplay';
import TimezoneInfo from '@/components/TimezoneInfo';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Index = () => {
  const [format24h, setFormat24h] = useState(false);
  const [showSeconds, setShowSeconds] = useState(true);
  
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-6">Precise Time, Anywhere</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get accurate time synchronized with atomic clocks around the world.
            The most reliable time service for your needs.
          </p>
        </div>
        
        <div className="mb-8 flex justify-center">
          <Tabs defaultValue="12h" className="w-full max-w-md">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="12h" onClick={() => setFormat24h(false)}>12-hour</TabsTrigger>
              <TabsTrigger value="24h" onClick={() => setFormat24h(true)}>24-hour</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
        
        <div className="bg-card rounded-lg shadow-md p-8 text-center mb-12 elevation-shadow">
          <ClockDisplay 
            format24h={format24h}
            showSeconds={showSeconds}
            className="mb-4"
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <TimezoneInfo />
          </div>
          
          <div className="bg-card shadow-md rounded-lg p-6 elevation-shadow">
            <h2 className="text-xl font-semibold mb-4">Why Use TimeSync?</h2>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="bg-primary text-primary-foreground rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5">✓</span>
                <span>Atomic clock precision synchronized across the globe</span>
              </li>
              <li className="flex items-start">
                <span className="bg-primary text-primary-foreground rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5">✓</span>
                <span>Multiple time formats and timezone support</span>
              </li>
              <li className="flex items-start">
                <span className="bg-primary text-primary-foreground rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5">✓</span>
                <span>World clock with customizable locations</span>
              </li>
              <li className="flex items-start">
                <span className="bg-primary text-primary-foreground rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5">✓</span>
                <span>Calendar integration with date calculations</span>
              </li>
              <li className="flex items-start">
                <span className="bg-primary text-primary-foreground rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5">✓</span>
                <span>Free to use with no ads or subscriptions</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;

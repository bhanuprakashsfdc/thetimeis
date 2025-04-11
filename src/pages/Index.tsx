
import React, { useState } from 'react';
import Layout from '@/components/Layout';
import ClockDisplay from '@/components/ClockDisplay';
import TimezoneInfo from '@/components/TimezoneInfo';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import CityCard from '@/components/CityCard';
import { getPopularCities } from '@/lib/cities';

const Index = () => {
  const [format24h, setFormat24h] = useState(false);
  const [showSeconds, setShowSeconds] = useState(true);
  const popularCities = getPopularCities();
  
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center justify-center mb-16">
          <div className="bg-card rounded-xl shadow-xl p-8 text-center elevation-shadow w-full max-w-md border border-border/50">
            <Tabs defaultValue="12h" className="w-full mb-6">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="12h" onClick={() => setFormat24h(false)}>12-hour</TabsTrigger>
                <TabsTrigger value="24h" onClick={() => setFormat24h(true)}>24-hour</TabsTrigger>
              </TabsList>
            </Tabs>
            
            <ClockDisplay 
              format24h={format24h}
              showSeconds={showSeconds}
              className="mb-4 scale-110"
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
        </div>
        
        <div className="mb-16">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Popular Cities</h2>
            <a href="/world-clock.html" className="text-primary flex items-center gap-2 hover:underline">
              View All <span>→</span>
            </a>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {popularCities.slice(0, 8).map((city) => (
              <CityCard 
                key={city.name}
                name={city.name}
                timezone={city.timezone}
                country={city.country}
              />
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <TimezoneInfo />
          </div>
          
          <div className="bg-card shadow-md rounded-xl p-6 elevation-shadow border border-border/50">
            <h2 className="text-xl font-semibold mb-4">About Our Time Service</h2>
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

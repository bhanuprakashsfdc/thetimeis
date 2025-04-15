
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Timer, Clock, AlarmClock } from 'lucide-react';
import { APP_NAME } from '@/constants/constants';
import Layout from '@/components/Layout';
import CountdownTimer from '@/components/CountdownTimer';
import { Card, CardContent } from '@/components/ui/card';

const CountdownTimerPage = () => {
  return (
    <Layout>
      <Helmet>
        <title>Countdown Timer - {APP_NAME}</title>
        <meta name="description" content="Use our countdown timer to keep track of time for cooking, workouts, presentations or any other timed activity." />
      </Helmet>
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-center mb-8">
          <Timer className="h-10 w-10 text-primary mr-3" />
          <h1 className="text-4xl font-bold">Countdown Timer</h1>
        </div>
        
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-center mb-10">
          Set custom countdowns for any occasion. Perfect for cooking, workouts, breaks, presentations, and more.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <Card className="bg-card">
              <CardContent className="p-0">
                <CountdownTimer 
                  initialTime={300} 
                  title="Quick Timer" 
                />
              </CardContent>
            </Card>
            
            <div className="mt-6 space-y-4 bg-muted/30 p-4 rounded-lg">
              <h3 className="text-lg font-medium flex items-center gap-2">
                <AlarmClock className="h-5 w-5 text-primary" />
                Quick Presets
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  { name: '1 minute', time: 60 },
                  { name: '2 minutes', time: 120 },
                  { name: '5 minutes', time: 300 },
                  { name: '10 minutes', time: 600 },
                  { name: '15 minutes', time: 900 },
                  { name: '30 minutes', time: 1800 },
                  { name: '1 hour', time: 3600 },
                ].map((preset) => (
                  <Card key={preset.name} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-4">
                      <CountdownTimer 
                        initialTime={preset.time} 
                        title={preset.name}
                        compact={true}
                        className="font-medium"
                      />
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <Card className="bg-card">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4">How To Use</h2>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center mr-2 mt-0.5">1</span>
                    <span>Set your desired time using the input field (e.g., "5m" for 5 minutes)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center mr-2 mt-0.5">2</span>
                    <span>Click "Set" to apply your time to the timer</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center mr-2 mt-0.5">3</span>
                    <span>Press "Start" to begin the countdown</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center mr-2 mt-0.5">4</span>
                    <span>Save timers for quick access in the future</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="bg-card">
              <CardContent className="p-6">
                <h3 className="text-lg font-medium mb-3 flex items-center gap-2">
                  <Clock className="h-5 w-5 text-primary" />
                  Timer Features
                </h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Customize with hours, minutes and seconds</li>
                  <li>Save multiple timers for quick access</li>
                  <li>Page title updates while timer is running</li>
                  <li>Receive notifications when time's up</li>
                  <li>Works on mobile and desktop devices</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CountdownTimerPage;

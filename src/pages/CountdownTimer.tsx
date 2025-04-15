
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Timer, Clock, AlarmClock, Globe, Calendar, MapPin } from 'lucide-react';
import { APP_NAME } from '@/constants/constants';
import Layout from '@/components/Layout';
import CountdownTimer from '@/components/CountdownTimer';
import WorldTimeMap from '@/components/WorldTimeMap';
import PublicHolidays from '@/components/PublicHolidays';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';

const CountdownTimerPage = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [userCountry, setUserCountry] = useState('United States');
  const [userTimezone, setUserTimezone] = useState<string>('');
  
  // Get user's timezone and country on component mount
  useEffect(() => {
    // Update time every minute
    const interval = setInterval(() => {
      setCurrentDate(new Date());
    }, 60000);
    
    // Try to detect user's timezone
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    setUserTimezone(timezone);
    
    // In a real app, we'd use geolocation or IP-based detection for the country
    // For this demo, we'll use a simplified approach based on timezone
    if (timezone.startsWith('America')) {
      setUserCountry('United States');
    } else if (timezone.startsWith('Europe')) {
      setUserCountry('United Kingdom');
    } else if (timezone.startsWith('Asia')) {
      setUserCountry('India');
    } else if (timezone.startsWith('Australia')) {
      setUserCountry('Australia');
    }
    
    return () => clearInterval(interval);
  }, []);
  
  // Format date with day of week
  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }).format(date);
  };
  
  // Calculate day of year and week number
  const getDayInfo = (date: Date) => {
    // Day of year
    const startOfYear = new Date(date.getFullYear(), 0, 0);
    const diff = date.getTime() - startOfYear.getTime();
    const oneDay = 1000 * 60 * 60 * 24;
    const dayOfYear = Math.floor(diff / oneDay);
    
    // Week number
    const weekNum = Math.ceil(dayOfYear / 7);
    
    // Days left in year
    const endOfYear = new Date(date.getFullYear(), 11, 31);
    const daysLeft = Math.floor((endOfYear.getTime() - date.getTime()) / oneDay);
    
    return { dayOfYear, weekNum, daysLeft };
  };
  
  const dayInfo = getDayInfo(currentDate);
  
  return (
    <Layout>
      <Helmet>
        <title>Countdown Timer - {APP_NAME}</title>
        <meta name="description" content="Use our countdown timer to keep track of time for cooking, workouts, presentations or any other timed activity." />
      </Helmet>
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-center mb-4">
          <Timer className="h-10 w-10 text-primary mr-3" />
          <h1 className="text-4xl font-bold">Countdown Timer</h1>
        </div>
        
        <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
          <Badge variant="outline" className="text-base px-3 py-1 flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            {formatDate(currentDate)}
          </Badge>
          <Badge variant="outline" className="text-base px-3 py-1 flex items-center gap-1">
            <Clock className="h-4 w-4" />
            Week {dayInfo.weekNum}
          </Badge>
          <Badge variant="secondary" className="text-base px-3 py-1 flex items-center gap-1">
            <MapPin className="h-4 w-4" />
            {userTimezone.replace('_', ' ')}
          </Badge>
        </div>
        
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-center mb-10">
          Set custom countdowns for any occasion. Perfect for cooking, workouts, breaks, presentations, and more.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
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
            
            <div className="mt-6">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg font-medium">Date Information</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    <div className="bg-secondary/30 p-3 rounded-md">
                      <div className="text-sm text-muted-foreground">Day of Year</div>
                      <div className="text-2xl font-bold">{dayInfo.dayOfYear}</div>
                    </div>
                    <div className="bg-secondary/30 p-3 rounded-md">
                      <div className="text-sm text-muted-foreground">Week Number</div>
                      <div className="text-2xl font-bold">{dayInfo.weekNum}</div>
                    </div>
                    <div className="bg-secondary/30 p-3 rounded-md">
                      <div className="text-sm text-muted-foreground">Days Left in Year</div>
                      <div className="text-2xl font-bold">{dayInfo.daysLeft}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
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
            
            <PublicHolidays country={userCountry} />
          </div>
        </div>
        
        <Tabs defaultValue="map" className="mb-10">
          <TabsList className="mb-4 w-full justify-start">
            <TabsTrigger value="map" className="flex items-center gap-1">
              <Globe className="h-4 w-4" /> World Map
            </TabsTrigger>
            <TabsTrigger value="holidays" className="flex items-center gap-1">
              <Calendar className="h-4 w-4" /> Holidays
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="map">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-medium flex items-center gap-2">
                  <Globe className="h-5 w-5 text-primary" />
                  World Time Map
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4">
                <div className="h-[450px] md:h-[550px] rounded-lg">
                  <WorldTimeMap />
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="holidays">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <PublicHolidays country="United States" />
              <PublicHolidays country="United Kingdom" />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default CountdownTimerPage;


import React, { useState } from 'react';
import Layout from '@/components/Layout';
import ClockDisplay from '@/components/ClockDisplay';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { timezones } from '@/constants/timezones';

const TimezonePage = () => {
  const [selectedTimezone, setSelectedTimezone] = useState<string>(
    Intl.DateTimeFormat().resolvedOptions().timeZone
  );
  const [searchQuery, setSearchQuery] = useState('');
  
  const { toast } = useToast();
  
  // Group timezones by region
  const groupedTimezones = React.useMemo(() => {
    const groups: Record<string, string[]> = {};
    
    timezones.forEach(tz => {
      const region = tz.split('/')[0];
      if (!groups[region]) {
        groups[region] = [];
      }
      groups[region].push(tz);
    });
    
    return groups;
  }, []);
  
  // Filter timezones based on search query
  const filteredTimezones = React.useMemo(() => {
    if (!searchQuery) return groupedTimezones;
    
    const query = searchQuery.toLowerCase();
    const result: Record<string, string[]> = {};
    
    Object.entries(groupedTimezones).forEach(([region, zones]) => {
      const filteredZones = zones.filter(zone => {
        return zone.toLowerCase().includes(query) || 
          zone.replace(/_/g, ' ').toLowerCase().includes(query);
      });
      
      if (filteredZones.length > 0) {
        result[region] = filteredZones;
      }
    });
    
    return result;
  }, [groupedTimezones, searchQuery]);
  
  // Calculate time difference between local timezone and selected timezone
  const calculateTimeDifference = () => {
    const now = new Date();
    
    // Local timezone offset in minutes
    const localOffset = now.getTimezoneOffset();
    
    // Selected timezone offset
    const selectedTZDate = new Date(now.toLocaleString('en-US', { timeZone: selectedTimezone }));
    const selectedOffset = (selectedTZDate.getTime() - now.getTime()) / (60 * 1000);
    
    // Calculate difference in hours
    const diffInHours = (selectedOffset + localOffset) / 60;
    
    return {
      hours: Math.floor(Math.abs(diffInHours)),
      minutes: Math.floor((Math.abs(diffInHours) % 1) * 60),
      ahead: diffInHours >= 0,
    };
  };
  
  const timeDiff = calculateTimeDifference();
  const diffText = timeDiff.ahead 
    ? `${timeDiff.hours}h ${timeDiff.minutes}m ahead` 
    : `${timeDiff.hours}h ${timeDiff.minutes}m behind`;

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold mb-4">Timezone Converter</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            View accurate time in any timezone around the world. Learn more about <a href="/blog/understanding-time-zones.html" className="text-primary hover:underline">time zones</a> or check our <a href="/world-clock.html" className="text-primary hover:underline">World Clock</a>.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <Input
                  type="text"
                  placeholder="Search timezones..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full"
                />
              </div>
              <div className="flex-1">
                <Select
                  value={selectedTimezone}
                  onValueChange={(value) => {
                    setSelectedTimezone(value);
                    toast({
                      title: "Timezone changed",
                      description: `Viewing time in ${value.replace('/', ': ').replace(/_/g, ' ')}`,
                    });
                  }}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select timezone" />
                  </SelectTrigger>
                  <SelectContent className="max-h-[300px]">
                    {Object.entries(filteredTimezones).map(([region, zonelist]) => (
                      <SelectGroup key={region}>
                        <SelectLabel>{region}</SelectLabel>
                        {zonelist.map(tz => (
                          <SelectItem key={tz} value={tz}>
                            {tz.split('/').pop()?.replace(/_/g, ' ') || tz}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <Button 
                onClick={() => {
                  const localTZ = Intl.DateTimeFormat().resolvedOptions().timeZone;
                  setSelectedTimezone(localTZ);
                  toast({
                    title: "Using local timezone",
                    description: `Viewing time in ${localTZ.replace('/', ': ').replace(/_/g, ' ')}`,
                  });
                }}
              >
                Use Local
              </Button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-card rounded-lg shadow-md p-6 elevation-shadow">
              <h2 className="text-xl font-semibold mb-6 text-center">
                {selectedTimezone.replace('/', ': ').replace(/_/g, ' ')}
              </h2>
              <ClockDisplay 
                timezone={selectedTimezone} 
                showSeconds={true}
                format24h={false}
                className="mb-4 text-center"
              />
              
              <div className="mt-6 text-center">
                <p className="text-muted-foreground">
                  {selectedTimezone !== Intl.DateTimeFormat().resolvedOptions().timeZone ? (
                    <>
                      <span className="font-medium">Time difference: </span> 
                      <span>{diffText} your local time</span>
                    </>
                  ) : (
                    <span className="font-medium">Your local timezone</span>
                  )}
                </p>
              </div>
            </div>
            
            <div className="bg-card rounded-lg shadow-md p-6 elevation-shadow">
              <h2 className="text-xl font-semibold mb-4">Timezone Information</h2>
              
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-muted-foreground">Region</label>
                  <p className="text-foreground">{selectedTimezone.split('/')[0]}</p>
                </div>
                
                <div>
                  <label className="text-sm font-medium text-muted-foreground">City/Location</label>
                  <p className="text-foreground">{selectedTimezone.split('/').pop()?.replace(/_/g, ' ')}</p>
                </div>
                
                <div>
                  <label className="text-sm font-medium text-muted-foreground">UTC Offset</label>
                  <p className="text-foreground">
                    UTC{getUTCOffset(selectedTimezone)}
                  </p>
                </div>
                
                <div>
                  <label className="text-sm font-medium text-muted-foreground">Daylight Saving</label>
                  <p className="text-foreground">
                    {isDaylightSavingTime(selectedTimezone) ? 'Currently in effect' : 'Not currently in effect'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

// Helper function to check if daylight saving time is in effect for a given timezone
function isDaylightSavingTime(timezone: string): boolean {
  const january = new Date(new Date().getFullYear(), 0, 1);
  const july = new Date(new Date().getFullYear(), 6, 1);
  
  const januaryOffset = getTimezoneOffset(january, timezone);
  const julyOffset = getTimezoneOffset(july, timezone);
  
  return januaryOffset !== julyOffset;
}

// Helper function to get timezone offset for a specific date
function getTimezoneOffset(date: Date, timezone: string): number {
  const utcDate = new Date(date.toLocaleString('en-US', { timeZone: 'UTC' }));
  const tzDate = new Date(date.toLocaleString('en-US', { timeZone: timezone }));
  return (utcDate.getTime() - tzDate.getTime()) / 60000;
}

// Helper function to get UTC offset for a timezone
function getUTCOffset(timezone: string): string {
  const now = new Date();
  const utcDate = new Date(now.toLocaleString('en-US', { timeZone: 'UTC' }));
  const tzDate = new Date(now.toLocaleString('en-US', { timeZone: timezone }));
  
  // Offset in minutes
  const offsetInMinutes = (tzDate.getTime() - utcDate.getTime()) / 60000;
  
  // Convert to hours and minutes
  const hours = Math.floor(Math.abs(offsetInMinutes) / 60);
  const minutes = Math.abs(offsetInMinutes) % 60;
  
  const sign = offsetInMinutes >= 0 ? '+' : '-';
  return `${sign}${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
}

export default TimezonePage;

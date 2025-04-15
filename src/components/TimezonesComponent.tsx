import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Globe, Clock } from 'lucide-react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { timezones } from '@/constants/timebascizones.js';

interface TimezonesComponentProps {
  className?: string;
}

const TimezonesComponent: React.FC<TimezonesComponentProps> = ({ className }) => {
  const [times, setTimes] = useState<Record<string, string>>({});

  useEffect(() => {
    const updateTimes = () => {
      const newTimes: Record<string, string> = {};
      timezones.forEach((zone) => {
        newTimes[zone.id] = new Date().toLocaleTimeString('en-US', {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true,
          timeZone: zone.timeZone,
        });
      });
      setTimes(newTimes);
    };

    updateTimes();
    const timer = setInterval(updateTimes, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className={className}>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold flex items-center gap-2">
          <Globe className="h-5 w-5 text-primary" />
          Common Time Zones
        </h2>
        <Link to="/timezone.html" className="text-primary flex items-center gap-2 hover:underline">
          Time Zone Converter <span>→</span>
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {timezones.map((zone) => (
          <Link to={zone.path} key={zone.id} className="block hover:no-underline">
            <Card className="h-full transition-all duration-300 hover:shadow-lg hover:scale-[1.02] border-2 border-transparent hover:border-primary/30">
              <CardContent className="pt-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-semibold">{zone.name}</h3>
                  <div className="flex items-center">
                    <span className="text-xs text-muted-foreground mr-2 hover:text-primary">
                      <Link to="/timezone.html" className="hover:underline">View timezone</Link>
                    </span>
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                </div>
                <p className="text-muted-foreground">{zone.timeZone}</p>
              </CardContent>
              <CardFooter>
                <div className="text-2xl font-mono">
                  {times[zone.id] || 'Loading...'}
                </div>
              </CardFooter>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TimezonesComponent;

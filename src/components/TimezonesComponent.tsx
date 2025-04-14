
import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, Clock } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { timezones } from '@/constants/timebascizones.js';

interface TimezonesComponentProps {
  className?: string;
}

const TimezonesComponent: React.FC<TimezonesComponentProps> = ({ className }) => {
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
          <Card key={zone.id} className="elevation-shadow overflow-hidden">
            <Link to={zone.path}>
              <CardContent className="p-4 hover:bg-accent/50 transition-colors">
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-primary" />
                  <div>
                    <h3 className="font-medium">{zone.name}</h3>
                    <p className="text-sm text-muted-foreground">{zone.timeZone}</p>
                  </div>
                </div>
                <div className="mt-2 text-sm font-mono">
                  {new Date().toLocaleTimeString([], { 
                    timeZone: zone.timeZone,
                    hour: '2-digit',
                    minute: '2-digit'
                  })}
                </div>
              </CardContent>
            </Link>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default TimezonesComponent;

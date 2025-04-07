
import React from 'react';
import { Globe } from 'lucide-react';

interface TimezoneInfoProps {
  timezone?: string;
}

const TimezoneInfo: React.FC<TimezoneInfoProps> = ({
  timezone = Intl.DateTimeFormat().resolvedOptions().timeZone
}) => {
  const [localOffset, setLocalOffset] = React.useState<number>(0);
  const [offsetString, setOffsetString] = React.useState<string>('');
  
  React.useEffect(() => {
    // Calculate the timezone offset
    const date = new Date();
    
    // Get minutes offset and convert to hours
    const timezoneOffsetInMinutes = -date.getTimezoneOffset();
    const hours = Math.floor(Math.abs(timezoneOffsetInMinutes) / 60);
    const minutes = Math.abs(timezoneOffsetInMinutes) % 60;
    
    setLocalOffset(timezoneOffsetInMinutes);
    
    // Format the offset string like +03:00 or -05:30
    const sign = timezoneOffsetInMinutes >= 0 ? '+' : '-';
    const formattedHours = hours.toString().padStart(2, '0');
    const formattedMinutes = minutes.toString().padStart(2, '0');
    
    setOffsetString(`${sign}${formattedHours}:${formattedMinutes}`);
  }, [timezone]);
  
  // Parse the timezone region and city
  const parseTimezone = (tz: string) => {
    // Replace underscores with spaces and split by /
    const parts = tz.replace(/_/g, ' ').split('/');
    if (parts.length < 2) return { region: tz, city: '' };
    
    return {
      region: parts[0],
      city: parts[parts.length - 1]
    };
  };
  
  const { region, city } = parseTimezone(timezone);
  
  return (
    <div className="bg-card shadow-md rounded-lg p-6 elevation-shadow">
      <div className="flex items-center mb-4">
        <Globe className="h-6 w-6 text-primary mr-2" />
        <h2 className="text-xl font-semibold">Timezone Information</h2>
      </div>
      
      <div className="space-y-3">
        <div>
          <span className="font-medium text-muted-foreground">Current Timezone:</span>
          <p className="text-foreground">{timezone}</p>
        </div>
        
        <div>
          <span className="font-medium text-muted-foreground">Region:</span>
          <p className="text-foreground">{region}</p>
        </div>
        
        <div>
          <span className="font-medium text-muted-foreground">City:</span>
          <p className="text-foreground">{city}</p>
        </div>
        
        <div>
          <span className="font-medium text-muted-foreground">UTC Offset:</span>
          <p className="text-foreground">UTC {offsetString}</p>
        </div>
        
        <div>
          <span className="font-medium text-muted-foreground">Daylight Saving:</span>
          <p className="text-foreground">{isDaylightSavingTime() ? 'Active' : 'Not Active'}</p>
        </div>
      </div>
    </div>
  );
};

// Helper function to check if daylight saving time is in effect
function isDaylightSavingTime(): boolean {
  const date = new Date();
  const jan = new Date(date.getFullYear(), 0, 1);
  const jul = new Date(date.getFullYear(), 6, 1);
  
  return date.getTimezoneOffset() < Math.max(jan.getTimezoneOffset(), jul.getTimezoneOffset());
}

export default TimezoneInfo;

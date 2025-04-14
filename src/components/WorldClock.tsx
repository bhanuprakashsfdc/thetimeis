import React, { useState } from 'react';
import { Clock, Plus, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { TIMEIN } from '@/constants/constants';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/constants/utils';
import { timezones } from '@/constants/timezones';
import { Link } from 'react-router-dom';
import { cityToSlug } from '@/constants/cities';

interface WorldClockProps {
  className?: string;
}

interface ClockItem {
  timezone: string;
  id: string;
}

const WorldClock: React.FC<WorldClockProps> = ({ className }) => {
  // Load saved clocks from localStorage or use defaults
  const [clocks, setClocks] = useState<ClockItem[]>(() => {
    const saved = localStorage.getItem('world-clocks');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error('Failed to parse saved clocks:', e);
      }
    }
    // Default clocks
    return [
      { timezone: 'America/New_York', id: 'nyc' },
      { timezone: 'Europe/London', id: 'london' },
      { timezone: 'Asia/Tokyo', id: 'tokyo' },
    ];
  });
  
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedTimezone, setSelectedTimezone] = useState('');
  
  const { toast } = useToast();
  
  // Save clocks to localStorage whenever they change
  React.useEffect(() => {
    localStorage.setItem('world-clocks', JSON.stringify(clocks));
  }, [clocks]);
  
  const addClock = () => {
    if (!selectedTimezone) {
      toast({
        title: "Please select a timezone",
        variant: "destructive",
      });
      return;
    }
    
    // Check if timezone already exists
    if (clocks.some(clock => clock.timezone === selectedTimezone)) {
      toast({
        title: "This timezone already exists",
        description: "Please select a different timezone",
        variant: "destructive",
      });
      return;
    }
    
    const newClock = {
      timezone: selectedTimezone,
      id: `clock-${Date.now()}`,
    };
    
    setClocks([...clocks, newClock]);
    setDialogOpen(false);
    
    toast({
      title: "Clock added",
      description: `Added clock for ${selectedTimezone.replace('/', ': ').replace(/_/g, ' ')}`,
    });
  };
  
  const removeClock = (id: string) => {
    setClocks(clocks.filter(clock => clock.id !== id));
    toast({
      title: "Clock removed",
    });
  };
  
  const formatTime = (timezone: string) => {
    const now = new Date();
    return new Intl.DateTimeFormat('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      timeZone: timezone,
      hour12: true,
    }).format(now);
  };
  
  const formatDate = (timezone: string) => {
    const now = new Date();
    return new Intl.DateTimeFormat('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
      timeZone: timezone,
    }).format(now);
  };

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
  
  // Clock component that updates every second
  const LiveClock: React.FC<{ timezone: string, onRemove: () => void }> = ({ timezone, onRemove }) => {
    const [time, setTime] = useState(formatTime(timezone));
    const [date, setDate] = useState(formatDate(timezone));
    
    React.useEffect(() => {
      const timer = setInterval(() => {
        setTime(formatTime(timezone));
        setDate(formatDate(timezone));
      }, 1000);
      
      return () => clearInterval(timer);
    }, [timezone]);
    
    const cityName = timezone.split('/').pop()?.replace(/_/g, ' ') || timezone;
    const citySlug = cityToSlug(cityName);
    
    return (
      <Card className="elevation-shadow">
        <CardHeader className="flex flex-row items-center justify-between py-4">
          <CardTitle className="text-lg font-medium">
            <Link to={`/${TIMEIN}${citySlug}.html`} className="hover:text-primary">
              {cityName}
            </Link>
          </CardTitle>
          <Button variant="ghost" size="icon" onClick={onRemove}>
            <Trash2 className="h-4 w-4" />
          </Button>
        </CardHeader>
        <CardContent>
          <Link to={`/${TIMEIN}${citySlug}.html`} className="block hover:no-underline">
            <div className="text-3xl font-bold text-center">{time}</div>
            <div className="text-sm text-muted-foreground text-center mt-2">{date}</div>
          </Link>
        </CardContent>
      </Card>
    );
  };
  
  return (
    <div className={cn('space-y-4', className)}>
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">World Clock</h2>
        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogTrigger asChild>
            <Button variant="outline" className="flex items-center gap-2">
              <Plus className="h-4 w-4" />
              <span>Add Clock</span>
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add a new clock</DialogTitle>
              <DialogDescription>
                Select a timezone to add to your world clock collection.
              </DialogDescription>
            </DialogHeader>
            
            <div className="grid gap-4 py-4">
              <Select onValueChange={setSelectedTimezone}>
                <SelectTrigger>
                  <SelectValue placeholder="Select timezone" />
                </SelectTrigger>
                <SelectContent className="max-h-[300px]">
                  {Object.entries(groupedTimezones).map(([region, zonelist]) => (
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
              
              <Button onClick={addClock}>Add Clock</Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {clocks.map(clock => (
          <LiveClock 
            key={clock.id} 
            timezone={clock.timezone} 
            onRemove={() => removeClock(clock.id)} 
          />
        ))}
      </div>
    </div>
  );
};

export default WorldClock;

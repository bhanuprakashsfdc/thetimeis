
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { cityToSlug } from '@/lib/cities';
import { Clock } from 'lucide-react';

interface CityCardProps {
  name: string;
  timezone: string;
  country: string;
}

const CityCard: React.FC<CityCardProps> = ({ name, timezone, country }) => {
  const [time, setTime] = useState(new Date());
  
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);
  
  const formattedTime = new Intl.DateTimeFormat('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true,
    timeZone: timezone
  }).format(time);

  const citySlug = cityToSlug(name);
  
  return (
    <Link to={`/city/${citySlug}.html`} className="block hover:no-underline">
      <Card className="h-full transition-all duration-300 hover:shadow-lg hover:scale-[1.02] border-2 border-transparent hover:border-primary/30">
        <CardContent className="pt-6">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-xl font-semibold">{name}</h3>
            <Clock className="h-5 w-5 text-primary" />
          </div>
          <p className="text-muted-foreground">{country}</p>
        </CardContent>
        <CardFooter>
          <div className="text-2xl font-mono">{formattedTime}</div>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default CityCard;

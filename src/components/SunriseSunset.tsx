
import React, { useState, useEffect } from 'react';
import { Sunrise, Sunset } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface SunriseSunsetProps {
  city: string;
  className?: string;
}

interface WeatherData {
  weather?: {
    astronomy?: {
      sunrise: string;
      sunset: string;
      moonrise: string;
      moonset: string;
      moon_phase: string;
      moon_illumination: string;
    }[];
  }[];
  error?: string;
}

const SunriseSunset: React.FC<SunriseSunsetProps> = ({ city, className }) => {
  const [sunData, setSunData] = useState<{ sunrise: string; sunset: string } | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSunriseSunset = async () => {
      if (!city) return;
      
      try {
        setLoading(true);
        // First get coordinates for the city
        const geoResponse = await fetch(`https://wttr.in/~${encodeURIComponent(city)}?format=j1`);
        
        if (!geoResponse.ok) {
          throw new Error(`Failed to fetch location data: ${geoResponse.status}`);
        }
        
        const geoData = await geoResponse.json();
        const nearest_area = geoData?.nearest_area?.[0];
        
        if (!nearest_area?.latitude || !nearest_area?.longitude) {
          throw new Error('Could not determine location coordinates');
        }
        
        // Now get weather data using coordinates for more accurate results
        const weatherResponse = await fetch(`https://wttr.in/${nearest_area.latitude},${nearest_area.longitude}?format=j1`);
        
        if (!weatherResponse.ok) {
          throw new Error(`Failed to fetch weather data: ${weatherResponse.status}`);
        }
        
        const data: WeatherData = await weatherResponse.json();
        
        if (data.weather && data.weather[0]?.astronomy && data.weather[0].astronomy[0]) {
          const { sunrise, sunset } = data.weather[0].astronomy[0];
          setSunData({ sunrise, sunset });
        } else {
          throw new Error('No sunrise/sunset data available');
        }
      } catch (err) {
        console.error('Error fetching sunrise/sunset data:', err);
        setError('Unable to load sunrise and sunset times');
      } finally {
        setLoading(false);
      }
    };

    fetchSunriseSunset();
    
    // Refresh data every 30 minutes
    const interval = setInterval(fetchSunriseSunset, 30 * 60 * 1000);
    
    return () => clearInterval(interval);
  }, [city]);

  if (loading) {
    return (
      <Card className={`${className} bg-card`}>
        <CardContent className="p-4">
          <div className="flex justify-center items-center h-20">
            <p>Loading sunrise and sunset times...</p>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (error) {
    return (
      <Card className={`${className} bg-card`}>
        <CardContent className="p-4">
          <div className="flex justify-center items-center h-20">
            <p className="text-muted-foreground">{error}</p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className={`${className} bg-card`}>
      <CardContent className="p-4">
        <h3 className="text-lg font-medium mb-3">Daylight Hours</h3>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col items-center bg-accent/30 rounded-lg p-3">
            <div className="flex items-center gap-2 mb-2">
              <Sunrise className="h-5 w-5 text-amber-500" />
              <span className="font-medium">Sunrise</span>
            </div>
            <span className="text-xl">{sunData?.sunrise}</span>
          </div>
          <div className="flex flex-col items-center bg-accent/30 rounded-lg p-3">
            <div className="flex items-center gap-2 mb-2">
              <Sunset className="h-5 w-5 text-orange-500" />
              <span className="font-medium">Sunset</span>
            </div>
            <span className="text-xl">{sunData?.sunset}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SunriseSunset;


import React, { useState, useEffect } from 'react';
import { Cloud, CloudRain, Sun, CloudLightning, Snowflake, CloudFog, Loader2 } from 'lucide-react';

interface WeatherProps {
  city?: string;
  className?: string;
}

type WeatherData = {
  temp: string;
  condition: string;
  icon: React.ReactNode;
  loading: boolean;
  error: string | null;
};

const Weather: React.FC<WeatherProps> = ({ city, className = "" }) => {
  const [weather, setWeather] = useState<WeatherData>({
    temp: "",
    condition: "",
    icon: <Sun />,
    loading: true,
    error: null
  });

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        // Using wttr.in which is a free weather service with no API key required
        const response = await fetch(`https://wttr.in/${city || ''}?format=j1`);
        
        if (!response.ok) {
          throw new Error('Weather data not available');
        }
        
        const data = await response.json();
        
        const temp = data.current_condition[0].temp_C;
        const condition = data.current_condition[0].weatherDesc[0].value;
        
        // Determine icon based on condition
        let icon = <Sun />;
        
        const conditionLower = condition.toLowerCase();
        
        if (conditionLower.includes('cloud') || conditionLower.includes('overcast')) {
          icon = <Cloud />;
        } else if (conditionLower.includes('rain') || conditionLower.includes('drizzle')) {
          icon = <CloudRain />;
        } else if (conditionLower.includes('thunder') || conditionLower.includes('lightning')) {
          icon = <CloudLightning />;
        } else if (conditionLower.includes('snow') || conditionLower.includes('sleet')) {
          icon = <Snowflake />;
        } else if (conditionLower.includes('fog') || conditionLower.includes('mist')) {
          icon = <CloudFog />;
        }
        
        setWeather({
          temp: `${temp}°C`,
          condition,
          icon,
          loading: false,
          error: null
        });
        
      } catch (error) {
        console.error('Error fetching weather:', error);
        setWeather(prev => ({
          ...prev,
          loading: false,
          error: 'Unable to load weather'
        }));
      }
    };

    fetchWeather();
    
    // Refresh weather every 30 minutes
    const interval = setInterval(fetchWeather, 30 * 60 * 1000);
    
    return () => clearInterval(interval);
  }, [city]);

  if (weather.loading) {
    return (
      <div className={`flex items-center justify-center p-2 ${className}`}>
        <Loader2 className="w-5 h-5 animate-spin text-muted-foreground" />
      </div>
    );
  }

  if (weather.error) {
    return (
      <div className={`text-sm text-muted-foreground ${className}`}>
        {weather.error}
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="text-primary">
        {weather.icon}
      </div>
      <div>
        <div className="font-medium">{weather.temp}</div>
        <div className="text-xs text-muted-foreground">{weather.condition}</div>
      </div>
    </div>
  );
};

export default Weather;

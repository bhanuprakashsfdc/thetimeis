
import React, { useEffect, useState, useRef } from 'react';
import { Card } from '@/components/ui/card';
import { timezones } from '@/constants/timebascizones';
import { Link } from 'react-router-dom';
import { Clock, Calendar, Globe } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import * as L from 'leaflet';

const WorldTimeMap = () => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [dayInfo, setDayInfo] = useState({
    day: 0,
    weekNumber: 0,
    dayOfYear: 0,
    daysLeftInYear: 0
  });
  
  // Calculate day information
  useEffect(() => {
    const updateDayInfo = () => {
      const now = new Date();
      
      // Day of year calculation
      const start = new Date(now.getFullYear(), 0, 0);
      const diff = now.getTime() - start.getTime();
      const oneDay = 1000 * 60 * 60 * 24;
      const dayOfYear = Math.floor(diff / oneDay);
      
      // Week number
      const weekNum = Math.ceil(dayOfYear / 7);
      
      // Days left in year
      const endOfYear = new Date(now.getFullYear(), 11, 31);
      const daysLeft = Math.floor((endOfYear.getTime() - now.getTime()) / oneDay);
      
      setDayInfo({
        day: now.getDate(),
        weekNumber: weekNum,
        dayOfYear: dayOfYear,
        daysLeftInYear: daysLeft
      });
      
      setCurrentDate(now);
    };
    
    updateDayInfo();
    const interval = setInterval(updateDayInfo, 60000); // Update every minute
    
    return () => clearInterval(interval);
  }, []);
  
  // Initialize OpenStreetMap
  useEffect(() => {
    if (!mapContainerRef.current) return;
    
    // Load OpenStreetMap script
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/leaflet@1.9.4/dist/leaflet.js';
    script.integrity = 'sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo=';
    script.crossOrigin = '';
    document.head.appendChild(script);
    
    // Load Leaflet CSS
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://cdn.jsdelivr.net/npm/leaflet@1.9.4/dist/leaflet.css';
    link.integrity = 'sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=';
    link.crossOrigin = '';
    document.head.appendChild(link);
    
    let map: L.Map | null = null;
    
    // Initialize map after script loads
    script.onload = () => {
      if (!L || map) return;
      
      // Create map
      map = L.map(mapContainerRef.current!).setView([20, 0], 2);
      
      // Add OpenStreetMap tiles
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '© OpenStreetMap contributors'
      }).addTo(map);
      
      // Add markers for timezone locations
      timezones.forEach(tz => {
        // Approximate coordinates for each timezone
        const coordinates = getCoordinatesForTimezone(tz.timeZone);
        if (coordinates) {
          // Get current time for this timezone
          const options = { 
            hour: '2-digit', 
            minute: '2-digit', 
            hour12: false,
            timeZone: tz.timeZone 
          } as Intl.DateTimeFormatOptions;
          
          const timeString = currentDate.toLocaleTimeString([], options);
          
          // Add marker with popup
          const marker = L.marker([coordinates.lat, coordinates.lng]).addTo(map);
          marker.bindPopup(`
            <strong>${tz.name}</strong><br>
            Current time: ${timeString}
            <br><a href="${tz.path}">View details</a>
          `);
        }
      });
      
      // Adjust map on container resize
      const resizeObserver = new ResizeObserver(() => {
        if (map) {
          setTimeout(() => map.invalidateSize(), 100);
        }
      });
      
      if (mapContainerRef.current) {
        resizeObserver.observe(mapContainerRef.current);
      }
      
      // Update time every minute
      const timeInterval = setInterval(() => {
        setCurrentDate(new Date());
      }, 60000);
      
      return () => {
        clearInterval(timeInterval);
        resizeObserver.disconnect();
        if (map) {
          map.remove();
          map = null;
        }
      };
    };
    
    return () => {
      if (script && script.parentNode) {
        script.parentNode.removeChild(script);
      }
      if (link && link.parentNode) {
        link.parentNode.removeChild(link);
      }
    };
  }, [currentDate]);
  
  // Helper function to get approximate coordinates for timezones
  const getCoordinatesForTimezone = (timezone: string) => {
    // This is a simplified mapping - in a real app you'd use a more complete database
    const timezoneCoordinates: { [key: string]: { lat: number, lng: number } } = {
      'UTC': { lat: 51.4825766, lng: -0.0076589 }, // Greenwich, London
      'GMT': { lat: 51.5073509, lng: -0.1277583 }, // London
      'Europe/Berlin': { lat: 52.5200066, lng: 13.404954 }, // Berlin (CET)
      'America/Los_Angeles': { lat: 34.0522342, lng: -118.2436849 }, // Los Angeles (Pacific Time)
      'America/Denver': { lat: 39.7392358, lng: -104.990251 }, // Denver (Mountain Time)
      'America/Chicago': { lat: 41.8781136, lng: -87.6297982 }, // Chicago (Central Time)
      'America/New_York': { lat: 40.7127753, lng: -74.0059728 }, // New York (Eastern Time)
      'Asia/Kolkata': { lat: 28.6139391, lng: 77.2090212 } // New Delhi (India Standard Time)
    };
    
    return timezoneCoordinates[timezone];
  };
  
  return (
    <div className="flex flex-col h-full">
      <div className="mb-4 flex flex-wrap justify-between items-center gap-2">
        <div className="flex gap-1 flex-wrap">
          <Badge variant="outline" className="flex items-center gap-1">
            <Calendar className="h-3 w-3" />
            Day: {dayInfo.day}
          </Badge>
          <Badge variant="outline" className="flex items-center gap-1">
            <Calendar className="h-3 w-3" />
            Week: {dayInfo.weekNumber}
          </Badge>
          <Badge variant="outline" className="flex items-center gap-1">
            <Calendar className="h-3 w-3" />
            Day of Year: {dayInfo.dayOfYear}
          </Badge>
          <Badge variant="outline" className="flex items-center gap-1">
            <Calendar className="h-3 w-3" />
            Days Left: {dayInfo.daysLeftInYear}
          </Badge>
        </div>
        <div>
          <Badge variant="secondary" className="flex items-center gap-1">
            <Clock className="h-3 w-3" />
            {currentDate.toLocaleTimeString()}
          </Badge>
        </div>
      </div>
      
      <div ref={mapContainerRef} className="w-full h-[300px] rounded-lg border mb-2" />
      
      <div className="mt-2 flex flex-wrap gap-2 justify-center">
        {timezones.map((timezone) => (
          <Link 
            key={timezone.id}
            to={timezone.path}
            className="bg-background/80 backdrop-blur-sm px-3 py-1 rounded-md text-sm font-medium hover:bg-background transition-colors"
          >
            {timezone.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default WorldTimeMap;

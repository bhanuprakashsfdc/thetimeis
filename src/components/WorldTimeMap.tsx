
import React, { useEffect, useRef } from 'react';
import { Card } from '@/components/ui/card';
import { timezones } from '@/constants/timebascizones';
import { Link } from 'react-router-dom';

const WorldTimeMap = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas size to match parent
    const resizeCanvas = () => {
      const parent = canvas.parentElement;
      if (parent) {
        canvas.width = parent.clientWidth;
        canvas.height = parent.clientHeight;
        drawWorldMap();
      }
    };
    
    // Draw the world map
    const drawWorldMap = () => {
      if (!ctx) return;
      
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw background
      ctx.fillStyle = 'rgba(240, 240, 240, 0.4)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Draw continents (simplified shapes)
      ctx.fillStyle = 'rgba(200, 220, 240, 0.6)';
      ctx.strokeStyle = 'rgba(100, 140, 200, 0.8)';
      ctx.lineWidth = 1;
      
      // North America (simplified)
      ctx.beginPath();
      ctx.moveTo(canvas.width * 0.05, canvas.height * 0.3);
      ctx.lineTo(canvas.width * 0.25, canvas.height * 0.2);
      ctx.lineTo(canvas.width * 0.3, canvas.height * 0.45);
      ctx.lineTo(canvas.width * 0.15, canvas.height * 0.55);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
      
      // South America (simplified)
      ctx.beginPath();
      ctx.moveTo(canvas.width * 0.25, canvas.height * 0.55);
      ctx.lineTo(canvas.width * 0.3, canvas.height * 0.8);
      ctx.lineTo(canvas.width * 0.2, canvas.height * 0.9);
      ctx.lineTo(canvas.width * 0.15, canvas.height * 0.7);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
      
      // Europe (simplified)
      ctx.beginPath();
      ctx.moveTo(canvas.width * 0.45, canvas.height * 0.2);
      ctx.lineTo(canvas.width * 0.55, canvas.height * 0.15);
      ctx.lineTo(canvas.width * 0.6, canvas.height * 0.3);
      ctx.lineTo(canvas.width * 0.5, canvas.height * 0.35);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
      
      // Africa (simplified)
      ctx.beginPath();
      ctx.moveTo(canvas.width * 0.5, canvas.height * 0.4);
      ctx.lineTo(canvas.width * 0.6, canvas.height * 0.35);
      ctx.lineTo(canvas.width * 0.65, canvas.height * 0.7);
      ctx.lineTo(canvas.width * 0.55, canvas.height * 0.8);
      ctx.lineTo(canvas.width * 0.45, canvas.height * 0.7);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
      
      // Asia (simplified)
      ctx.beginPath();
      ctx.moveTo(canvas.width * 0.6, canvas.height * 0.25);
      ctx.lineTo(canvas.width * 0.85, canvas.height * 0.2);
      ctx.lineTo(canvas.width * 0.9, canvas.height * 0.5);
      ctx.lineTo(canvas.width * 0.7, canvas.height * 0.6);
      ctx.lineTo(canvas.width * 0.6, canvas.height * 0.35);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
      
      // Australia (simplified)
      ctx.beginPath();
      ctx.moveTo(canvas.width * 0.8, canvas.height * 0.65);
      ctx.lineTo(canvas.width * 0.9, canvas.height * 0.6);
      ctx.lineTo(canvas.width * 0.95, canvas.height * 0.75);
      ctx.lineTo(canvas.width * 0.85, canvas.height * 0.8);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
      
      // Draw time zone lines (simplified)
      ctx.strokeStyle = 'rgba(120, 120, 120, 0.3)';
      ctx.lineWidth = 1;
      
      for (let i = 0; i <= 24; i++) {
        const x = canvas.width * (i / 24);
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      
      // Add time zone markers
      addTimeZoneMarkers();
    };
    
    // Add time zone markers
    const addTimeZoneMarkers = () => {
      if (!ctx) return;
      
      const currentDate = new Date();
      
      // Map timezone positions (approximate)
      const positions = [
        { name: 'UTC', x: 0.5, y: 0.1 },
        { name: 'GMT', x: 0.45, y: 0.25 },
        { name: 'CET', x: 0.52, y: 0.25 },
        { name: 'Pacific Time', x: 0.15, y: 0.35 },
        { name: 'Mountain Time', x: 0.2, y: 0.35 },
        { name: 'Central Time', x: 0.25, y: 0.35 },
        { name: 'Eastern Time', x: 0.3, y: 0.35 },
        { name: 'India Standard Time', x: 0.65, y: 0.45 }
      ];
      
      // Draw time zone markers
      positions.forEach(pos => {
        const x = canvas.width * pos.x;
        const y = canvas.height * pos.y;
        
        const timezone = timezones.find(tz => tz.name === pos.name);
        if (!timezone) return;
        
        // Get current time for this timezone
        const options = { 
          hour: '2-digit', 
          minute: '2-digit', 
          hour12: false,
          timeZone: timezone.timeZone 
        } as Intl.DateTimeFormatOptions;
        
        const timeString = currentDate.toLocaleTimeString([], options);
        
        // Draw marker
        ctx.fillStyle = 'rgba(80, 80, 200, 0.9)';
        ctx.beginPath();
        ctx.arc(x, y, 8, 0, Math.PI * 2);
        ctx.fill();
        
        // Draw text
        ctx.fillStyle = '#000';
        ctx.font = '12px Arial';
        ctx.textAlign = 'center';
        ctx.fillText(pos.name, x, y - 15);
        
        // Draw time
        ctx.font = 'bold 12px Arial';
        ctx.fillText(timeString, x, y + 20);
      });
    };
    
    // Initial draw
    resizeCanvas();
    
    // Update clock every minute
    const intervalId = setInterval(() => {
      drawWorldMap();
    }, 60000);
    
    // Handle window resize
    window.addEventListener('resize', resizeCanvas);
    
    // Cleanup
    return () => {
      clearInterval(intervalId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);
  
  return (
    <div className="relative w-full h-full">
      <canvas 
        ref={canvasRef}
        className="w-full h-full"
      />
      <div className="absolute inset-0 pointer-events-none flex flex-col justify-end p-4">
        <div className="flex flex-wrap gap-2 justify-center">
          {timezones.map((timezone) => (
            <Link 
              key={timezone.id}
              to={timezone.path}
              className="bg-background/80 backdrop-blur-sm px-3 py-1 rounded-md text-sm font-medium hover:bg-background transition-colors pointer-events-auto"
            >
              {timezone.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorldTimeMap;

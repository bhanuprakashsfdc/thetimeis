
import React, { useState, useEffect } from 'react';
import { cn } from '@/constants/utils';

interface ClockDisplayProps {
  timezone?: string;
  className?: string;
  showSeconds?: boolean;
  format24h?: boolean;
}
const WEBSITE_NAME = 'The Time Is';
const ClockDisplay: React.FC<ClockDisplayProps> = ({
  timezone = Intl.DateTimeFormat().resolvedOptions().timeZone,
  className,
  showSeconds = true,
  format24h = false,
}) => {
  const [time, setTime] = useState(new Date());
  const [isColonVisible, setIsColonVisible] = useState(true);
  
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now);

      // Format for document title
      const options: Intl.DateTimeFormatOptions = {
        hour: '2-digit',
        minute: '2-digit',
        second: showSeconds ? '2-digit' : undefined,
        hour12: !format24h,
        timeZone: timezone,
      };
      const formattedTime = new Intl.DateTimeFormat('en-US', options).format(now);
      document.title = `Time is ${formattedTime} - ${WEBSITE_NAME}`;
    };

    updateTime(); // initial call
    // Update time every 100ms for smooth transitions
    const timeInterval = setInterval(() => {
      setTime(new Date());
    }, 100);
    
    // Blink colon every 500ms
    const colonInterval = setInterval(() => {
      setIsColonVisible(prev => !prev);
    }, 500);
    
    return () => {
      clearInterval(timeInterval);
      clearInterval(colonInterval);
    };
  }, [format24h, showSeconds, timezone]);
  
  // Format the time for the specified timezone
  const formatTimeForDisplay = () => {
    const options: Intl.DateTimeFormatOptions = {
      hour: 'numeric',
      minute: 'numeric',
      second: showSeconds ? 'numeric' : undefined,
      hour12: !format24h,
      timeZone: timezone
    };
    
    const formattedTime = new Intl.DateTimeFormat('en-US', options).format(time);
    
    // Extract hours, minutes, seconds, and AM/PM
    const [timePart, ampm] = formattedTime.split(' ');
    
    // Handle 24-hour format which doesn't have AM/PM part
    let newAmpm = ampm;
    if (!newAmpm) {
      newAmpm = '';
    }
    
    const [hours, minutes, seconds] = (timePart || '').split(':');
    
    // Sometimes seconds are not included in the formatted time
    let newSeconds = seconds;
    if (!showSeconds) {
      newSeconds = undefined;
    }
    
    return { hours, minutes, seconds: newSeconds, ampm: newAmpm };
  };
  
  // Format the date for the specified timezone
  const formatDateForDisplay = () => {
    const options: Intl.DateTimeFormatOptions = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      timeZone: timezone
    };
    
    return new Intl.DateTimeFormat('en-US', options).format(time);
  };
  
  const { hours, minutes, seconds, ampm } = formatTimeForDisplay();
  const dateStr = formatDateForDisplay();

  return (
    <div className={cn('flex flex-col items-center', className)}>
      <div className="clock-container flex items-center justify-center">
        <span className="clock-digit">{hours}</span>
        <span className={`time-colon ${isColonVisible ? 'opacity-100' : 'opacity-30'}`}>:</span>
        <span className="clock-digit">{minutes}</span>
        {showSeconds && (
          <>
            <span className={`time-colon ${isColonVisible ? 'opacity-100' : 'opacity-30'}`}>:</span>
            <span className="clock-digit">{seconds}</span>
          </>
        )}
        {!format24h && ampm && <span className="time-ampm ml-2">{ampm}</span>}
      </div>
      
      <div className="date-display mt-4">
        {dateStr}
      </div>
      
      <div className="timezone-display mt-2">
        {timezone.replace(/_/g, ' ')}
      </div>
    </div>
  );
};

export default ClockDisplay;

import React, { useState, useEffect } from 'react';

function CityTime({ timeZone }) {
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    // Function to fetch and format time for the specific time zone
    const updateTime = () => {
      const options : Intl.DateTimeFormatOptions = {
        timeZone,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      };
     const time = new Intl.DateTimeFormat('en-US', options).format(new Date()); 
      setCurrentTime(time);
    };

    updateTime(); // Set initial time

    const timer = setInterval(() => {
      updateTime(); // Update time every second
    }, 1000);

    return () => clearInterval(timer); // Cleanup on unmount
  }, [timeZone]); // Re-run if the timeZone changes

  return (
    <div>
      <h2>Current Time in {timeZone}</h2>
      <div className="citytimeval">
          <h1>{currentTime}</h1>
      </div>
    </div>

  );
}

export default CityTime;
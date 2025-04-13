import React, { useState, useEffect } from 'react';
import { cities } from '@/constants/cities';

const TimeZoneDisplay = () => {
  const [times, setTimes] = useState({});
  const [displayCities, setDisplayCities] = useState([]);

  // Function to get the current time for a specific time zone
  const getTimeForZone = (timeZone) => {
    return new Date().toLocaleTimeString('en-US', { timeZone });
  };

  // Function to shuffle the cities array and limit to 8
  const shuffleCities = () => {
    const shuffled = [...cities]
      .sort(() => Math.random() - 0.5) // Shuffle the cities array
      .slice(0, 8); // Get the first 8 cities
    setDisplayCities(shuffled);
  };

  // Update the times every second
  useEffect(() => {
    const interval = setInterval(() => {
      const updatedTimes = {};
      displayCities.forEach((city) => {
        updatedTimes[city.name] = getTimeForZone(city.timeZone);
      });
      setTimes(updatedTimes);
    }, 1000);

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [displayCities]);

  // Shuffle cities when the component mounts
  useEffect(() => {
    shuffleCities();
  }, []); // Empty dependency array ensures it runs only once on mount

  return (
    <div className="timezone-grid">
      {displayCities.map((city) => (
        <div key={city.id} className="timezone-card">
          <h3 className="city-name">
            <a href={`/${city.name.toLowerCase().replace(/\s+/g, '-')}.html`} className="city-link">
              {city.name}
            </a>
          </h3>
          <p className="city-time">{times[city.name] || 'Loading...'}</p>
        </div>
      ))}
    </div>
  );
};

export default TimeZoneDisplay;
import React from 'react';
import { APP_NAME } from "@/constants/constants";
import { Link } from 'react-router-dom';
import { timezones } from '@/constants/timebascizones.js';

interface PopularTimezonesProps {
  limit?: number; // optionally limit the number of timezones shown
}

const PopularTimezones: React.FC<PopularTimezonesProps> = ({ limit = 5 }) => {
  const popularZones = timezones.slice(0, limit);

  return (
    <div className="p-6 bg-card rounded-lg border border-border/50">
      <h3 className="text-xl font-semibold mb-4">Popular Time Zones</h3>
      <ul className="space-y-2">
        {popularZones.map((zone) => (
          <li key={zone.id}>
            <Link to={zone.path} className="text-primary hover:underline">
              {zone.name} ({zone.timeZone})
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PopularTimezones;

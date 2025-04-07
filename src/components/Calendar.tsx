
import React, { useState } from 'react';
import { Calendar as CalendarIcon } from 'lucide-react';
import { Calendar as CalendarComponent } from '@/components/ui/calendar';

interface CalendarViewProps {
  className?: string;
}

const CalendarView: React.FC<CalendarViewProps> = ({ className }) => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  
  // Format a date for display
  const formatDate = (date: Date | undefined) => {
    if (!date) return '';
    return new Intl.DateTimeFormat('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }).format(date);
  };
  
  // Get information about the selected date
  const getDateInfo = (date: Date | undefined) => {
    if (!date) return { dayOfYear: 0, daysLeft: 0, weekNumber: 0 };
    
    // Day of year calculation
    const start = new Date(date.getFullYear(), 0, 0);
    const diff = date.getTime() - start.getTime();
    const oneDay = 1000 * 60 * 60 * 24;
    const dayOfYear = Math.floor(diff / oneDay);
    
    // Days left in the year
    const endOfYear = new Date(date.getFullYear(), 11, 31);
    const daysLeft = Math.floor((endOfYear.getTime() - date.getTime()) / oneDay);
    
    // Week number calculation
    const weekNumber = Math.ceil(dayOfYear / 7);
    
    return { dayOfYear, daysLeft, weekNumber };
  };
  
  const dateInfo = getDateInfo(date);
  
  return (
    <div className={className}>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2">
          <div className="bg-card rounded-lg shadow-md p-6 elevation-shadow">
            <div className="flex items-center mb-4">
              <CalendarIcon className="h-6 w-6 text-primary mr-2" />
              <h2 className="text-xl font-semibold">Calendar</h2>
            </div>
            
            <CalendarComponent
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-md border pointer-events-auto"
            />
          </div>
        </div>
        
        <div className="md:w-1/2">
          <div className="bg-card rounded-lg shadow-md p-6 elevation-shadow">
            <h2 className="text-xl font-semibold mb-4">Selected Date Info</h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium">{formatDate(date)}</h3>
                <p className="text-muted-foreground">
                  {date && isToday(date) && <span className="text-primary font-semibold">(Today)</span>}
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-secondary/30 p-4 rounded-md">
                  <div className="text-sm text-muted-foreground">Day of year</div>
                  <div className="text-2xl font-bold">{dateInfo.dayOfYear}</div>
                </div>
                
                <div className="bg-secondary/30 p-4 rounded-md">
                  <div className="text-sm text-muted-foreground">Week number</div>
                  <div className="text-2xl font-bold">{dateInfo.weekNumber}</div>
                </div>
                
                <div className="bg-secondary/30 p-4 rounded-md">
                  <div className="text-sm text-muted-foreground">Days left in year</div>
                  <div className="text-2xl font-bold">{dateInfo.daysLeft}</div>
                </div>
              </div>
              
              <div className="pt-4 border-t">
                <h3 className="text-lg font-medium mb-2">Holidays</h3>
                <div className="text-muted-foreground">
                  {/* This would ideally connect to a holiday API */}
                  Click on specific dates to see related holidays and events.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Helper function to check if a date is today
function isToday(date: Date): boolean {
  const today = new Date();
  return date.getDate() === today.getDate() &&
    date.getMonth() === today.getMonth() &&
    date.getFullYear() === today.getFullYear();
}

export default CalendarView;

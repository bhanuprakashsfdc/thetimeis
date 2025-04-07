
import React from 'react';
import Layout from '@/components/Layout';
import CalendarView from '@/components/Calendar';

const CalendarPage = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold mb-4">Calendar</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            View the calendar and get detailed information about dates.
          </p>
        </div>
        
        <CalendarView />
      </div>
    </Layout>
  );
};

export default CalendarPage;

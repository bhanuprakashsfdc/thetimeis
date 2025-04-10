
import React from 'react';
import Layout from '@/components/Layout';
import CalendarView from '@/components/Calendar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Globe, Calendar as CalendarIcon } from 'lucide-react';

const CalendarPage = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-center mb-8">
          <CalendarIcon className="h-8 w-8 text-primary mr-3" />
          <h1 className="text-4xl font-bold">Calendar</h1>
        </div>
        
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-center mb-10">
          View the calendar and get detailed information about dates.
        </p>
        
        <Card className="mb-8 border border-border/50 shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl">Interactive Calendar</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-center">
              <CalendarView />
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default CalendarPage;

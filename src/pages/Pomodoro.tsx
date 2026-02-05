
import React from 'react';
import Layout from '@/components/Layout';
import PomodoroTimer from '@/components/PomodoroTimer';
import { Timer, CheckCircle } from 'lucide-react';
import { APP_NAME, SITE_URL } from '@/constants/constants';
import Seo from '@/components/Seo';

const PomodoroPage = () => {
  return (
    <Layout>
      <Seo
        title={`Pomodoro Timer - ${APP_NAME}`}
        description="Use our Pomodoro Timer to boost your productivity with focused work sessions and regular breaks."
        type="website"
        canonical={`${SITE_URL}pomodoro.html`}
        breadcrumbs={[
          { name: 'Home', item: SITE_URL },
          { name: 'Pomodoro', item: `${SITE_URL}pomodoro.html` }
        ]}
      />
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-center mb-8">
          <Timer className="h-10 w-10 text-primary mr-3" />
          <h1 className="text-4xl font-bold">Pomodoro Timer</h1>
        </div>
        
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-center mb-10">
          Use the Pomodoro Technique to improve your productivity and focus.
          Work for 25 minutes, then take a 5-minute break.
        </p>
        
        <div className="max-w-xl mx-auto mb-12">
          <PomodoroTimer />
        </div>
        
        <div className="mt-12 max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">How to Use the Pomodoro Technique</h2>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center mr-2 mt-0.5">1</span>
              <span>Choose a task to work on</span>
            </li>
            <li className="flex items-start">
              <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center mr-2 mt-0.5">2</span>
              <span>Set the timer for 25 minutes and focus solely on that task</span>
            </li>
            <li className="flex items-start">
              <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center mr-2 mt-0.5">3</span>
              <span>When the timer rings, take a short 5-minute break</span>
            </li>
            <li className="flex items-start">
              <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center mr-2 mt-0.5">4</span>
              <span>After 4 pomodoros, take a longer 15-30 minute break</span>
            </li>
          </ul>
          
          <div className="mt-8 p-4 bg-muted/50 rounded-lg">
            <h3 className="flex items-center text-lg font-medium mb-2">
              <CheckCircle className="h-5 w-5 mr-2 text-primary" />
              Benefits
            </h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Reduces distractions and improves focus</li>
              <li>Creates a sense of urgency that boosts productivity</li>
              <li>Helps maintain mental freshness with regular breaks</li>
              <li>Makes large tasks more manageable by breaking them into intervals</li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PomodoroPage;

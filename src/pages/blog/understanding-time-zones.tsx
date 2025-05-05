import React from 'react';
import Layout from '@/components/Layout';
import { Helmet } from 'react-helmet-async';
import { Globe, Clock, Sun, Moon } from 'lucide-react';

const UnderstandingTimeZones = () => {
  return (
    <Layout>
      <Helmet>
        <title>Understanding Time Zones - A Comprehensive Guide | TheTimeIs.net</title>
        <meta name="description" content="Learn about time zones, their history, importance, and how they affect global communications and daily life. A comprehensive guide by TheTimeIs.net." />
      </Helmet>
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold mb-4">Understanding Time Zones</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive guide to time zones and their impact on our global world
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="bg-card rounded-lg shadow-md p-8 elevation-shadow">
            <div className="flex items-center mb-6">
              <Clock className="h-8 w-8 text-primary mr-4" />
              <h2 className="text-2xl font-bold">What Are Time Zones?</h2>
            </div>
            <p className="mb-4">
              Time zones are regions of the globe that observe a uniform standard time for legal, commercial, and social purposes. They are divided into approximately 24 primary zones, each roughly 15 degrees of longitude in width, corresponding to one hour of solar time.
            </p>
            <p>
              The concept of time zones was developed in the late 19th century to address the challenges that arose with the advent of railroad travel and the need for standardized time keeping across large distances.
            </p>
          </div>

          <div className="bg-card rounded-lg shadow-md p-8 elevation-shadow">
            <div className="flex items-center mb-6">
              <Globe className="h-8 w-8 text-primary mr-4" />
              <h2 className="text-2xl font-bold">The International Date Line</h2>
            </div>
            <p className="mb-4">
              The International Date Line (IDL) is an imaginary line that runs from the North Pole to the South Pole through the Pacific Ocean. When you cross the IDL:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Traveling westward: You gain a day</li>
              <li>Traveling eastward: You lose a day</li>
            </ul>
            <p className="mt-4">
              The IDL is not a straight line but zigzags to avoid splitting countries and territories across different dates.
            </p>
          </div>

          <div className="bg-card rounded-lg shadow-md p-8 elevation-shadow">
            <div className="flex items-center mb-6">
              <Sun className="h-8 w-8 text-primary mr-4" />
              <h2 className="text-2xl font-bold">Daylight Saving Time (DST)</h2>
            </div>
            <p className="mb-4">
              Daylight Saving Time is the practice of advancing clocks during warmer months, typically by one hour. This practice aims to make better use of natural daylight and conserve energy.
            </p>
            <p className="mb-4">
              Key points about DST:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Not all countries observe DST</li>
              <li>Start and end dates vary by region</li>
              <li>Some regions are considering abolishing DST</li>
              <li>Can affect sleep patterns and daily routines</li>
            </ul>
          </div>

          <div className="bg-card rounded-lg shadow-md p-8 elevation-shadow">
            <div className="flex items-center mb-6">
              <Moon className="h-8 w-8 text-primary mr-4" />
              <h2 className="text-2xl font-bold">Impact on Global Business</h2>
            </div>
            <p className="mb-4">
              Time zones significantly impact global business operations:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Scheduling international meetings and conferences</li>
              <li>Coordinating with remote teams</li>
              <li>Managing global customer support</li>
              <li>Planning international travel</li>
              <li>Conducting financial transactions across markets</li>
            </ul>
          </div>

          <div className="bg-card rounded-lg shadow-md p-8 elevation-shadow">
            <h2 className="text-2xl font-bold mb-4">Time Zone Best Practices</h2>
            <p className="mb-4">
              Tips for managing time zones effectively:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Always specify the time zone when scheduling meetings</li>
              <li>Use 24-hour format to avoid AM/PM confusion</li>
              <li>Consider using UTC for technical operations</li>
              <li>Be mindful of daylight saving time changes</li>
              <li>Use world clock tools for quick reference</li>
            </ul>
          </div>

          <div className="bg-card rounded-lg shadow-md p-8 elevation-shadow">
            <h2 className="text-2xl font-bold mb-4">Interesting Time Zone Facts</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>China uses a single time zone despite spanning five geographical time zones</li>
              <li>Russia has 11 time zones, the most of any country</li>
              <li>Nepal is 5 hours and 45 minutes ahead of UTC, one of the few time zones offset by 45 minutes</li>
              <li>Some Pacific islands are the first to experience each new day</li>
              <li>Antarctica has multiple time zones, with research stations generally using the time of their supply base</li>
            </ul>
          </div>

          <div className="bg-card rounded-lg shadow-md p-8 elevation-shadow">
            <h2 className="text-2xl font-bold mb-4">Tools and Resources</h2>
            <p className="mb-4">
              TheTimeIs.net provides several tools to help you manage time zones:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><a href="/world-clock.html" className="text-primary hover:underline">World Clock</a> - Check current time worldwide</li>
              <li><a href="/timezone.html" className="text-primary hover:underline">Time Zone Converter</a> - Convert times between zones</li>
              <li><a href="/calendar.html" className="text-primary hover:underline">Calendar</a> - Plan events across time zones</li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default UnderstandingTimeZones;
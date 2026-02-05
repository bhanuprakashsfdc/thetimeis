import React from 'react';
import Layout from '@/components/Layout';
import Seo from '@/components/Seo';
import { APP_NAME } from '@/constants/constants';
import { HelpCircle, Clock, Globe, Calendar as CalendarIcon, Timer, Focus } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const FAQ = () => {
  return (
    <Layout>
      <Seo
        title={`Frequently Asked Questions - ${APP_NAME}`}
        description="Find answers to common questions about using our time services, world clock, timezone converter, and other features."
        type="website"
        breadcrumbs={[
          { name: 'Home', item: 'https://www.thetimeis.net/' },
          { name: 'FAQ', item: 'https://www.thetimeis.net/faq.html' }
        ]}
      />
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-center mb-8">
          <HelpCircle className="h-10 w-10 text-primary mr-3" />
          <h1 className="text-4xl font-bold">Frequently Asked Questions</h1>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <p className="text-xl text-muted-foreground mb-8 text-center">
            Find answers to common questions about {APP_NAME}'s features and services.
          </p>
          
          <div className="space-y-6">
            <section className="mb-8">
              <div className="flex items-center mb-4">
                <Clock className="h-6 w-6 text-primary mr-2" />
                <h2 className="text-2xl font-semibold">Time and Accuracy</h2>
              </div>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>How accurate is your time display?</AccordionTrigger>
                  <AccordionContent>
                    Our time display is synchronized with atomic clocks and updated regularly to maintain accuracy
                    within milliseconds. We use Network Time Protocol (NTP) to ensure precise timekeeping.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Why might the time be slightly different from my device?</AccordionTrigger>
                  <AccordionContent>
                    Small differences can occur due to your device's clock settings, internet latency, or local
                    system time configuration. Our displayed time is based on authoritative time servers.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </section>

            <section className="mb-8">
              <div className="flex items-center mb-4">
                <Globe className="h-6 w-6 text-primary mr-2" />
                <h2 className="text-2xl font-semibold">Time Zones</h2>
              </div>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-3">
                  <AccordionTrigger>How do you handle daylight saving time (DST)?</AccordionTrigger>
                  <AccordionContent>
                    Our system automatically adjusts for DST based on the specific rules of each time zone.
                    The displayed times always reflect the current local time, including any DST changes.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>Can I compare multiple time zones?</AccordionTrigger>
                  <AccordionContent>
                    Yes! Use our World Clock feature to view and compare times across different cities and time zones
                    simultaneously. You can also use our Time Zone Converter for specific time comparisons.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </section>

            <section className="mb-8">
              <div className="flex items-center mb-4">
                <CalendarIcon className="h-6 w-6 text-primary mr-2" />
                <h2 className="text-2xl font-semibold">Calendar and Events</h2>
              </div>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-5">
                  <AccordionTrigger>How can I use the calendar feature?</AccordionTrigger>
                  <AccordionContent>
                    Our calendar feature allows you to view dates, plan events, and check holidays across different
                    time zones. You can also use it alongside our time zone converter for event planning.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-6">
                  <AccordionTrigger>Are holidays and special events included?</AccordionTrigger>
                  <AccordionContent>
                    Yes, our calendar includes major international holidays and observances. You can view these
                    events in your local time zone or any other time zone you select.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </section>

            <section className="mb-8">
              <div className="flex items-center mb-4">
                <Timer className="h-6 w-6 text-primary mr-2" />
                <h2 className="text-2xl font-semibold">Tools and Features</h2>
              </div>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-7">
                  <AccordionTrigger>What tools are available besides the world clock?</AccordionTrigger>
                  <AccordionContent>
                    We offer several tools including a Countdown Timer, Pomodoro Timer, Calendar, and Time Zone
                    Converter. Each tool is designed to help you manage time effectively across different scenarios.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-8">
                  <AccordionTrigger>How do I use the Pomodoro Timer?</AccordionTrigger>
                  <AccordionContent>
                    The Pomodoro Timer helps you work efficiently using focused 25-minute work sessions followed by
                    short breaks. Simply start the timer, work until it rings, then take a short break. After four
                    sessions, take a longer break.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </section>

            <section className="mb-8">
              <div className="flex items-center mb-4">
                <Focus className="h-6 w-6 text-primary mr-2" />
                <h2 className="text-2xl font-semibold">Technical Questions</h2>
              </div>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-9">
                  <AccordionTrigger>Does the website work offline?</AccordionTrigger>
                  <AccordionContent>
                    While basic time functions may work offline, an internet connection is recommended for the most
                    accurate time synchronization and access to all features.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-10">
                  <AccordionTrigger>Is the website accessible on mobile devices?</AccordionTrigger>
                  <AccordionContent>
                    Yes, our website is fully responsive and works on all devices including smartphones and tablets.
                    All features are optimized for both desktop and mobile use.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </section>
          </div>

          <div className="mt-12 p-6 bg-muted rounded-lg text-center">
            <p className="mb-4">Still have questions?</p>
            <p>
              Contact us through our{' '}
              <a href="/contact.html" className="text-primary hover:underline">
                contact page
              </a>
              {' '}for additional support.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default FAQ;

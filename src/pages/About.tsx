
import React from 'react';
import Layout from '@/components/Layout';
import { Clock, Globe, Calendar, Github } from 'lucide-react';

const AboutPage = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold mb-4">About <a href="https://www.thetimeis.net/">TheTimeIs.net</a></h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Your trusted source for accurate time information worldwide.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-lg shadow-md p-8 mb-8 elevation-shadow">
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-lg mb-4">
            <a href="https://www.thetimeis.net/">TheTimeIs.net</a> was created to provide users with accurate, reliable time information 
              across different timezones around the world. Our mission is to make global time 
              synchronization easy to access and understand for everyone.
            </p>
            <p className="text-lg">
              Whether you're scheduling international meetings, coordinating with remote teams, 
              or simply curious about the time in different parts of the world, <a href="https://www.thetimeis.net/">TheTimeIs.net</a>.net 
              is designed to be your go-to resource for all time-related information.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-card rounded-lg shadow-md p-6 text-center elevation-shadow">
              <div className="flex justify-center mb-4">
                <Clock className="h-12 w-12 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Precision Timing</h3>
              <p className="text-muted-foreground">
                Our <a href="/world-clock.html" className="text-primary hover:underline">clocks</a> are synchronized with atomic time servers to ensure accuracy within milliseconds.
              </p>
            </div>
            
            <div className="bg-card rounded-lg shadow-md p-6 text-center elevation-shadow">
              <div className="flex justify-center mb-4">
                <Globe className="h-12 w-12 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Global Coverage</h3>
              <p className="text-muted-foreground">
                Support for all major timezones with <a href="/timezone.html" className="text-primary hover:underline">detailed regional information</a>.
              </p>
            </div>
            
            <div className="bg-card rounded-lg shadow-md p-6 text-center elevation-shadow">
              <div className="flex justify-center mb-4">
                <Calendar className="h-12 w-12 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Calendar Integration</h3>
              <p className="text-muted-foreground">
                Comprehensive <a href="/calendar.html" className="text-primary hover:underline">calendar functions</a> with day tracking and date calculations.
              </p>
            </div>
          </div>
          
          <div className="bg-card rounded-lg shadow-md p-8 mb-8 elevation-shadow">
            <h2 className="text-2xl font-bold mb-4">Technical Information</h2>
            <p className="mb-4">
            <a href="https://www.thetimeis.net/">TheTimeIs.net</a> is built using modern web technologies to ensure reliability,
              performance, and accuracy:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>React framework for responsive user interface</li>
              <li>JavaScript's Date API with timezone support</li>
              <li>Intl.DateTimeFormat for locale-aware time formatting</li>
              <li>Support for all IANA timezone database entries</li>
              <li>Client-side processing for minimal latency</li>
              <li>Responsive design that works on all devices</li>
            </ul>
          </div>
          
          <div className="bg-card rounded-lg shadow-md p-8 elevation-shadow">
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <p className="mb-4">
              Have questions, suggestions, or feedback about TheTimeIs.net? We'd love to hear from you.
            </p>
            <div className="flex flex-col md:flex-row justify-between">
              <div>
                <h3 className="font-semibold mb-2">Email</h3>
                <p className="text-muted-foreground">support@thetimeis.net.example</p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="text-primary hover:text-primary/80">
                    <Github className="h-6 w-6" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Appended static content block for AdSense policy compliance */}
      <section aria-labelledby="about-title-appended" className="prose prose-lg max-w-4xl mx-auto mt-12 px-4">
        <h1 id="about-title-appended">About thetimeis.net</h1>
        <p>
          thetimeis.net is a minimalist, fast, and reliable world clock designed to make it effortless to check
          the current local time in any city or country. We focus on clarity, speed, and accuracy, so you can quickly
          find time information without distractions.
        </p>
        <h2>Our Mission</h2>
        <p>
          We aim to provide a clean, trustworthy tool for global timekeeping. Whether you are coordinating
          international meetings, planning travel, or tracking markets, thetimeis.net helps you confirm the
          correct time wherever you need it.
        </p>
        <h2>What We Offer</h2>
        <ul>
          <li>Accurate local times based on UTC and official time zone rules</li>
          <li>Simple, fast interface optimized for mobile and desktop</li>
          <li>Location search and quick access to major cities and countries</li>
          <li>No clutter—just the time and essential context</li>
        </ul>
        <h2>How Accuracy Works</h2>
        <p>
          Local times are derived from Coordinated Universal Time (UTC) using authoritative time zone definitions,
          including daylight saving policies where applicable. We monitor updates to time zone rules to keep
          displayed times current.
        </p>
        <h2>Who Uses thetimeis.net</h2>
        <p>
          Remote workers, travelers, students, and global teams use thetimeis.net daily for reliable time checks.
          Professionals rely on accurate local times to schedule meetings, coordinate operations, and serve
          customers across multiple regions.
        </p>
        <h2>Contact</h2>
        <p>
          For general inquiries, partnership opportunities, or feedback, please reach out via our contact page.
        </p>
      </section>
    </Layout>
  );
};

export default AboutPage;

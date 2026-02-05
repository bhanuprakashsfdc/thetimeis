
import React, { useState } from 'react';
import Layout from '@/components/Layout';
import ClockDisplay from '@/components/ClockDisplay';
import TimezoneInfo from '@/components/TimezoneInfo';
import WhatIsComponent from '@/components/WhatIsComponent';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import CityCard from '@/components/CityCard';
import { getPopularCities } from '@/constants/cities';
import Seo from '@/components/Seo';
import { Link } from 'react-router-dom';
import { APP_NAME, TIMEIN } from '@/constants/constants';
import Weather from '@/components/Weather';
import TimezonesComponent from '@/components/TimezonesComponent';
import PopularTimezones from '@/components/PopularTimezones';
import ToolsAndResources from '@/components/ToolsAndResources';
import './index.css'
const Index = () => {
  const [format24h, setFormat24h] = useState(false);
  const [showSeconds, setShowSeconds] = useState(true);
  const popularCities = getPopularCities();
  const currentTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const currentCity = popularCities.find(city => city.timeZone === currentTimezone) || popularCities[0];
  
  return (
    <Layout>
      <Seo
        title={`Current Time - Exact Time for Any Time Zone | ${APP_NAME}`}
        description="Get the exact current time for any location worldwide. View accurate atomic clock time, time zones, and local times for cities across the globe."
        type="website"
      />
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center justify-center mb-16">
          <h1 className="text-4xl font-bold text-center mb-8">Current Time</h1>
          <p className="text-xl text-muted-foreground text-center mb-8 max-w-2xl">
            Displaying exact time for {currentCity.name}, {currentCity.Country}. 
            <Link to={`/${TIMEIN}${currentCity.name.toLowerCase().replace(/ /g, '-')}.html`} className="text-primary hover:underline">View details</Link>
          </p>
          <div className="flex justify-center w-full">
            <div className="bg-card  rounded-xl shadow-xl p-8 text-center elevation-shadow w-full max-w-md border border-border/50">
              <div className="flex justify-center mb-4">
                <Weather city={currentCity.name} />
              </div>
              
              <Tabs defaultValue="12h" className="w-full mb-6">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="12h" onClick={() => setFormat24h(false)}>12-hour</TabsTrigger>
                  <TabsTrigger value="24h" onClick={() => setFormat24h(true)}>24-hour</TabsTrigger>
                </TabsList>
              </Tabs>
              
              <ClockDisplay 
                format24h={format24h}
                showSeconds={showSeconds}
                className="mb-4 scale-110"
              />
              
              <div className="flex justify-center mt-6">
                <label className="inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={showSeconds}
                    onChange={() => setShowSeconds(!showSeconds)}
                    className="sr-only peer"
                  />
                  <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/20 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                  <span className="ms-3 text-sm font-medium">Show Seconds</span>
                </label>
              </div>
            </div>
          </div>
        </div>
        <nav className="mb-8" aria-label="breadcrumb">
          <ol className="flex items-center space-x-2 text-sm">
            <li><Link to="/" className="text-primary hover:underline">Home</Link></li>
            <li>/</li>
            <li>Current Time</li>
          </ol>
        </nav>

        {/* Add WhatIsComponent */}
        <div className="mb-16">
          <WhatIsComponent />
        </div>

        {/* Add TimezonesComponent before Popular Cities section */}
        <div className="mb-16">
          <TimezonesComponent />
        </div>

        <div className="mb-16">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Popular Cities</h2>
            <Link to="/world-clock.html" className="text-primary flex items-center gap-2 hover:underline">
              View All <span>→</span>
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {popularCities.slice(0, 8).map((city) => (
              <CityCard 
                key={city.name}
                name={city.name}
                timezone={city.timeZone}
                country={city.Country}
              />
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Related Time Zones</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <PopularTimezones />
            <ToolsAndResources />
          </div>
        </div>

        {/* Publisher Content Section: appended below the tool container */}
        <section id="publisher-content" aria-labelledby="publisher-content-title" className="prose prose-lg max-w-4xl mx-auto mt-16">
          <h1 id="publisher-content-title">Current Time & World Clock – Accurate Global Time Tool</h1>
          <p>
            Timekeeping is a foundational part of modern life. From coordinating global conference calls and
            planning international travel to managing online events and streaming schedules, accurate time
            helps people stay aligned across regions and platforms. thetimeis.net focuses on delivering a
            clean, fast, and reliable experience so you can confirm the current local time anywhere in the
            world. Below, we explain universal time standards, how time zones work, why accuracy matters, and
            the principles that make thetimeis.net dependable for everyday use and professional workflows.
          </p>

          <h2>What Is Coordinated Universal Time (UTC)?</h2>
          <p>
            Coordinated Universal Time (UTC) is the global time standard used to synchronize clocks worldwide.
            It is maintained using networks of highly precise atomic clocks and does not change with seasons or
            regional policies. UTC serves as a constant reference for every local time zone, which is expressed
            as a fixed offset relative to UTC (for example, UTC−05:00 or UTC+09:00). Because UTC is stable and
            universally recognized, it underpins international aviation schedules, broadcast timings, satellite
            navigation, digital networks, and secure timestamping in computing and finance.
          </p>
          <p>
            In rare instances, a leap second may be added to UTC to keep civil time aligned with Earth’s
            rotation. This adjustment ensures that the universal standard remains in sync with astronomical
            observations. When you check a local time, the calculation is performed relative to UTC by applying
            the region’s official time zone rules, producing the correct result regardless of device settings or
            seasonal changes.
          </p>

          <h2>How World Time Zones Work</h2>
          <p>
            World time zones are legally defined regions that specify a standard offset from UTC. Many countries
            observe daylight saving time, shifting clocks forward or backward during certain months to better
            match daylight hours. Other countries do not observe daylight saving, and some regions use half-hour
            or quarter-hour offsets, making global timekeeping nuanced. Political decisions can change a region’s
            time rules, and authoritative data must be consulted to reflect those updates.
          </p>
          <p>
            Accurate tools reference these official definitions and apply them consistently. When you select a
            location on thetimeis.net, the site maps the city or country to its legal time zone, applies the
            correct UTC offset, and accounts for daylight saving policies where applicable. This approach ensures
            that local times are displayed correctly even when rules vary by jurisdiction or change over time.
          </p>

          <h2>Difference Between UTC, GMT, and Local Time</h2>
          <p>
            UTC and GMT (Greenwich Mean Time) are related but not interchangeable. GMT originated as mean solar
            time measured at Greenwich, London, and is still used as a time zone in the United Kingdom during
            winter months. UTC is the modern atomic time standard used for synchronization across industries and
            regions. In everyday conversation people may refer to GMT when they mean UTC, but in technical
            contexts UTC is the preferred and precise term.
          </p>
          <p>
            Local time is what you see on clocks in your city or region. It is defined by your jurisdiction’s
            rules relative to UTC and may shift during daylight saving periods where observed. When comparing
            cities across the world, local times differ due to their various offsets from UTC. thetimeis.net
            calculates local times by applying each region’s rules to UTC, producing consistent results even when
            settings differ across devices or when daylight saving transitions occur.
          </p>

          <h2>Why Accurate Time Matters in Daily Life and Business</h2>
          <p>
            Precision is essential for both personal and professional coordination. Individuals rely on correct
            time to join calls, attend livestreams, catch trains and flights, and plan across continents. Small
            discrepancies can cause missed connections or unnecessary confusion. For remote teams and global
            organizations, accurate time simplifies scheduling, prevents errors, and improves customer service
            across regions.
          </p>
          <p>
            In technology and operations, accuracy is even more critical. Financial markets, cloud platforms,
            logistics networks, and auditing systems use synchronized timestamps to ensure integrity. Developers
            and analysts depend on UTC for consistent comparisons, tracing events across services, and maintaining
            reliable records. Whether you work with distributed systems or simply collaborate across time zones,
            trustworthy clocks reduce friction and help keep commitments on track.
          </p>
          <p>
            Accurate, accessible time also supports personal organization. When planning an international meeting
            or checking a destination’s local time before traveling, a focused tool helps eliminate guesswork.
            A clear layout and fast loading ensure that the information you need is available instantly without
            distractions or delays.
          </p>

          <h2>How thetimeis.net Delivers Accurate Time</h2>
          <p>
            thetimeis.net is designed to be minimalist and dependable. It uses authoritative time zone data and
            applies regional rules to UTC, producing precise local times for cities and countries worldwide. The
            interface emphasizes clarity, with quick search and direct access to commonly viewed locations so you
            can confirm the current time in seconds.
          </p>
          <p>
            Reliability depends on tracking official time definitions and daylight saving policies. When
            governments or standards organizations update rules—such as changing offsets or adjusting seasonal
            transitions—accurate tools incorporate those changes. By anchoring calculations to UTC and mapping
            locations to their legal definitions, thetimeis.net keeps results aligned with current regional
            practices.
          </p>
          <p>
            Usability matters as much as precision. thetimeis.net focuses on the core task—showing the time—without
            clutter. The streamlined experience reduces cognitive load while serving power users who compare
            multiple locations. Whether you are coordinating with colleagues, planning a trip, or simply curious
            about a city’s local time, the site makes global time checks straightforward and fast.
          </p>
          <p>
            Together, these principles—UTC as a universal anchor, authoritative time zone rules, and a
            performance-first design—ensure that thetimeis.net remains a trustworthy resource for global
            timekeeping. With precise calculations and a focused interface, you can rely on the site for
            everyday checks and business coordination alike.
          </p>
        </section>
      </div>
    </Layout>
  );
};

export default Index;

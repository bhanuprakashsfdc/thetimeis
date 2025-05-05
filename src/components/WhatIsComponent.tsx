import React from 'react';
import { APP_NAME_TEXT } from "@/constants/constants";
const WhatIsComponent = () => {
  return (
    <div className="bg-card rounded-xl shadow-xl p-8 border border-border/50">
      <h2 className="text-2xl font-bold mb-6">What is {APP_NAME_TEXT}?</h2>
      <p className="text-muted-foreground mb-8">
      {APP_NAME_TEXT} is a minimalist and reliable online clock that instantly shows the current local time for any city or country. Whether you're scheduling meetings across time zones, tracking international stock markets, or just want to know what time it is somewhere else—The Time Is gives you the answer with precision and speed.
      </p>

      <h3 className="text-xl font-semibold mb-4">Why Use {APP_NAME_TEXT}?</h3>
      <p className="text-muted-foreground mb-8">
        We created {APP_NAME_TEXT} for people who value simplicity, accuracy, and speed. There are no popups, no distractions—just the time you need, exactly when you need it.
      </p>

      <h3 className="text-xl font-semibold mb-4">How to Use The Time Is</h3>
      <ol className="list-decimal list-inside text-muted-foreground mb-8 space-y-2">
        <li>Visit {APP_NAME_TEXT}</li>
        <li>The site automatically detects your local time and shows it on screen</li>
        <li>Click on the country or city dropdown to check the current time anywhere else in the world</li>
        <li>Use the search to quickly find time for global locations</li>
        <li>Bookmark {APP_NAME_TEXT} is fast, lightweight, and works on any device</li>
      </ol>

      <h3 className="text-xl font-semibold mb-4">Core Features</h3>
      <ul className="list-disc list-inside text-muted-foreground mb-8 space-y-2">
        <li>Real-Time Clock: Instantly shows the accurate local time, updated every second</li>
        <li>Global Time Zone Converter: Check the time in any major city or country with one click</li>
        <li>Mobile & Desktop Friendly: Optimized for all devices—fast loading, clean layout, zero clutter</li>
        <li>Privacy-First: No logins, no cookies, no tracking—just the time</li>
        <li>Minimalist Design: No ads, no unnecessary widgets—just what you came for</li>
      </ul>

      <h3 className="text-xl font-semibold mb-4">✅ Perfect For:</h3>
      <ul className="list-disc list-inside text-muted-foreground space-y-2">
        <li>Remote workers scheduling across time zones</li>
        <li>Frequent travelers or digital nomads</li>
        <li>Traders and investors watching international markets</li>
        <li>Students in global study programs</li>
        <li>Anyone who needs an accurate, no-fuss world clock</li>
      </ul>
    </div>
  );
};

export default WhatIsComponent;
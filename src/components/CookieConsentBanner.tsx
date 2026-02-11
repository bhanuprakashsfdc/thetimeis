import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/constants/utils';

declare global {
  interface Window {
    gtag: (
      command: 'consent',
      action: 'update',
      params: {
        ad_storage?: 'granted' | 'denied';
        analytics_storage?: 'granted' | 'denied';
        ad_user_data?: 'granted' | 'denied';
        ad_personalization?: 'granted' | 'denied';
        functionality_storage?: 'granted' | 'denied';
        personalization_storage?: 'granted' | 'denied';
        wait_for_update?: number;
      }
    ) => void;
  }
}

const CookieConsentBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie_consent');
    if (consent === null) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie_consent', 'accepted');
    setIsVisible(false);
    // Update Google Consent Mode
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('consent', 'update', {
        ad_storage: 'granted',
        analytics_storage: 'granted',
        ad_user_data: 'granted',
        ad_personalization: 'granted',
        functionality_storage: 'granted',
        personalization_storage: 'granted',
      });
    }
  };

  const handleDecline = () => {
    localStorage.setItem('cookie_consent', 'declined');
    setIsVisible(false);
    // Google Consent Mode is already 'denied' by default in index.html
    // No need to explicitly update to 'denied' here unless specific categories were granted
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className={cn(
      "fixed bottom-0 left-0 right-0 z-50 p-4 bg-background/80 backdrop-blur-sm border-t shadow-lg",
      "flex flex-col md:flex-row items-center justify-between gap-4"
    )}>
      <Card className="w-full md:w-auto flex-grow border-none shadow-none bg-transparent">
        <CardContent className="p-0 text-sm text-muted-foreground">
          We use cookies to ensure you get the best experience on our website. For more details, please read our{' '}
          <a href="/cookies.html" className="text-primary hover:underline">Cookie Policy</a>.
        </CardContent>
      </Card>
      <div className="flex gap-2 w-full md:w-auto">
        <Button onClick={handleDecline} variant="outline" size="sm" className="w-full md:w-auto">
          Decline
        </Button>
        <Button onClick={handleAccept} size="sm" className="w-full md:w-auto">
          Accept
        </Button>
      </div>
    </div>
  );
};

export default CookieConsentBanner;

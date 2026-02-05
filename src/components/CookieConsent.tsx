import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const CookieConsent: React.FC = () => {
  const [visible, setVisible] = React.useState(false);
  type GtagFn = (...args: unknown[]) => void;

  React.useEffect(() => {
    const stored = localStorage.getItem('cookie-consent');
    if (!stored) {
      setVisible(true);
      if (typeof window !== 'undefined' && 'gtag' in window) {
        (window as unknown as { gtag: GtagFn }).gtag('consent', 'default', {
          ad_storage: 'denied',
          analytics_storage: 'denied',
        });
      }
    }
  }, []);

  const updateConsent = (granted: boolean) => {
    localStorage.setItem('cookie-consent', granted ? 'accepted' : 'declined');
    setVisible(false);
    if (typeof window !== 'undefined' && 'gtag' in window) {
      (window as unknown as { gtag: GtagFn }).gtag('consent', 'update', {
        ad_storage: granted ? 'granted' : 'denied',
        analytics_storage: granted ? 'granted' : 'denied',
      });
    }
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50">
      <div className="mx-auto max-w-5xl rounded-t-xl border border-border bg-card p-4 shadow-lg">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <p className="text-sm text-muted-foreground">
            We use cookies for essential functionality and, with your consent, to measure usage and improve the site. Read our{' '}
            <Link to="/privacy.html" className="text-primary underline">Privacy Policy</Link> and{' '}
            <Link to="/cookies.html" className="text-primary underline">Cookie Policy</Link>.
          </p>
          <div className="flex gap-2 justify-end">
            <Button variant="outline" onClick={() => updateConsent(false)}>Decline</Button>
            <Button onClick={() => updateConsent(true)}>Accept</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;

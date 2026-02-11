import React from 'react';
import Layout from '@/components/Layout';
import Seo from '@/components/Seo';
import { APP_NAME } from '@/constants/constants';
import { Accessibility as AccessibilityIcon, Check, MousePointer2, Keyboard, Monitor, Users } from 'lucide-react';

const Accessibility = () => {
  return (
    <Layout>
      <Seo
        title={`Accessibility Statement - ${APP_NAME}`}
        description="Learn about our commitment to accessibility and the features we've implemented to ensure our website is usable by everyone."
        type="website"
        breadcrumbs={[
          { name: 'Home', item: 'https://www.thetimeis.net/' },
          { name: 'Accessibility', item: 'https://www.thetimeis.net/accessibility.html' }
        ]}
      />
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-center mb-8">
          <AccessibilityIcon className="h-10 w-10 text-primary mr-3" />
          <h1 className="text-4xl font-bold">Accessibility Statement</h1>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <p className="text-xl text-muted-foreground mb-8 text-center">
            We are committed to ensuring digital accessibility for people of all abilities.
          </p>
          
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">Our Commitment</h2>
            <p className="mb-4">
              {APP_NAME} is committed to providing a website that is accessible to the widest possible audience,
              regardless of technology or ability. We aim to comply with all applicable standards, including WCAG 2.1
              guidelines.
            </p>
          </section>
          
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">Accessibility Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 bg-card rounded-lg border border-border">
                <div className="flex items-center mb-4">
                  <Keyboard className="h-6 w-6 text-primary mr-2" />
                  <h3 className="text-lg font-medium">Keyboard Navigation</h3>
                </div>
                <p>Full keyboard accessibility for all features and functions.</p>
              </div>
              
              <div className="p-6 bg-card rounded-lg border border-border">
                <div className="flex items-center mb-4">
                  <Monitor className="h-6 w-6 text-primary mr-2" />
                  <h3 className="text-lg font-medium">Screen Reader Support</h3>
                </div>
                <p>Compatible with popular screen readers and assistive technologies.</p>
              </div>
              
              <div className="p-6 bg-card rounded-lg border border-border">
                <div className="flex items-center mb-4">
                  <MousePointer2 className="h-6 w-6 text-primary mr-2" />
                  <h3 className="text-lg font-medium">Easy Navigation</h3>
                </div>
                <p>Clear navigation structure and consistent layout across pages.</p>
              </div>
              
              <div className="p-6 bg-card rounded-lg border border-border">
                <div className="flex items-center mb-4">
                  <Users className="h-6 w-6 text-primary mr-2" />
                  <h3 className="text-lg font-medium">Text Customization</h3>
                </div>
                <p>Adjustable text sizes and high contrast color options.</p>
              </div>
            </div>
          </section>
          
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">Standards Compliance</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Check className="h-6 w-6 text-primary mr-2 mt-1 flex-shrink-0" />
                <span>WCAG 2.1 Level AA compliant</span>
              </li>
              <li className="flex items-start">
                <Check className="h-6 w-6 text-primary mr-2 mt-1 flex-shrink-0" />
                <span>Regular accessibility audits and updates</span>
              </li>
              <li className="flex items-start">
                <Check className="h-6 w-6 text-primary mr-2 mt-1 flex-shrink-0" />
                <span>Ongoing commitment to accessibility improvements</span>
              </li>
            </ul>
          </section>
          
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">Contact Us</h2>
            <p className="mb-4">
              We welcome your feedback on the accessibility of {APP_NAME}. If you encounter accessibility barriers
              or have suggestions for improvement, please contact us through our{' '}
              <a href="/contact.html" className="text-primary hover:underline">contact page</a>.
            </p>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default Accessibility;

import React from 'react';
import Layout from '@/components/Layout';
import { Helmet } from 'react-helmet-async';

const Disclaimer = () => {
  return (
    <Layout>
      <Helmet>
        <title>Disclaimer - TheTimeIs.net</title>
        <meta name="description" content="Legal disclaimer and limitations of liability for TheTimeIs.net" />
      </Helmet>
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold mb-4">Disclaimer</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Important information about the use of our services
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="bg-card rounded-lg shadow-md p-8 elevation-shadow">
            <h2 className="text-2xl font-bold mb-4">Time Accuracy</h2>
            <p className="mb-4">
              While TheTimeIs.net strives to provide accurate time information, we cannot guarantee absolute precision. Factors that may affect time accuracy include:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Internet connection latency</li>
              <li>Device clock synchronization</li>
              <li>Browser performance</li>
              <li>Local system settings</li>
            </ul>
            <p className="mt-4">
              For critical timing applications, we recommend verifying with multiple authoritative time sources.
            </p>
          </div>

          <div className="bg-card rounded-lg shadow-md p-8 elevation-shadow">
            <h2 className="text-2xl font-bold mb-4">No Professional Advice</h2>
            <p className="mb-4">
              The information provided on TheTimeIs.net is for general informational purposes only. It should not be relied upon for:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Legal timing requirements</li>
              <li>Official time certification</li>
              <li>Mission-critical operations</li>
              <li>Scientific measurements</li>
            </ul>
          </div>

          <div className="bg-card rounded-lg shadow-md p-8 elevation-shadow">
            <h2 className="text-2xl font-bold mb-4">Third-Party Content</h2>
            <p className="mb-4">
              Our website may include links to third-party websites, advertisements, or content. We are not responsible for:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>The accuracy of third-party information</li>
              <li>Content of linked websites</li>
              <li>Privacy practices of other websites</li>
              <li>Changes in third-party services</li>
            </ul>
          </div>

          <div className="bg-card rounded-lg shadow-md p-8 elevation-shadow">
            <h2 className="text-2xl font-bold mb-4">Service Availability</h2>
            <p className="mb-4">
              We strive to maintain continuous service availability, but we do not guarantee uninterrupted access to TheTimeIs.net. Service may be affected by:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Technical maintenance</li>
              <li>System updates</li>
              <li>Network issues</li>
              <li>Force majeure events</li>
            </ul>
          </div>

          <div className="bg-card rounded-lg shadow-md p-8 elevation-shadow">
            <h2 className="text-2xl font-bold mb-4">User Responsibilities</h2>
            <p className="mb-4">
              Users of TheTimeIs.net are responsible for:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Verifying time information for critical purposes</li>
              <li>Maintaining accurate device settings</li>
              <li>Using the service in compliance with local laws</li>
              <li>Reporting any discrepancies or issues</li>
            </ul>
          </div>

          <div className="bg-card rounded-lg shadow-md p-8 elevation-shadow">
            <h2 className="text-2xl font-bold mb-4">Changes to Service</h2>
            <p className="mb-4">
              We reserve the right to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Modify or discontinue any feature</li>
              <li>Update time calculation methods</li>
              <li>Change service providers</li>
              <li>Alter the user interface</li>
            </ul>
          </div>

          <div className="bg-card rounded-lg shadow-md p-8 elevation-shadow">
            <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
            <p className="mb-4">
              For questions about this disclaimer or to report issues, please contact us at:
            </p>
            <p className="text-muted-foreground">
              Email: disclaimer@thetimeis.net
            </p>
            <p className="text-muted-foreground mt-4">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Disclaimer;
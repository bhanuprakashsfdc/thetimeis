
import React from 'react';
import Layout from '@/components/Layout';

const Terms = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground mb-4">Last Updated: April 7, 2025</p>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
              <p>
                Welcome to TimeSync. These Terms of Service govern your use of the TimeSync website
                and all related services. By accessing or using TimeSync, you agree to be bound by
                these Terms and our Privacy Policy.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">2. Using TimeSync</h2>
              <p className="mb-4">
                TimeSync provides accurate time and date information across different timezones.
                While we strive for accuracy, we cannot guarantee that the information provided is
                error-free or will be available at all times.
              </p>
              <p>
                You may use TimeSync for personal or commercial purposes, but you may not:
              </p>
              <ul className="list-disc pl-6 my-4 space-y-2">
                <li>Attempt to bypass, disable, or interfere with any security features of the service</li>
                <li>Use the service in any way that could damage, disable, or impair the service</li>
                <li>Use any automated systems or software to extract data from the website (screen scraping)</li>
                <li>Use the service for any illegal purpose or in violation of any local, state, national, or international law</li>
              </ul>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">3. Accuracy of Information</h2>
              <p>
                TimeSync makes every effort to ensure that the time and date information provided
                is accurate and reliable. However, we do not warrant that the information will be
                error-free or uninterrupted. For critical timing applications, we recommend verifying
                with multiple sources.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">4. Intellectual Property</h2>
              <p>
                All content on TimeSync, including but not limited to text, graphics, logos, icons,
                images, and software, is the property of TimeSync or its content suppliers and is
                protected by international copyright laws.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">5. Limitation of Liability</h2>
              <p>
                In no event shall TimeSync be liable for any indirect, incidental, special,
                consequential, or punitive damages, including without limitation, loss of profits,
                data, or use, arising out of or in any way connected with the use or performance of
                our services.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">6. Changes to Terms</h2>
              <p>
                We reserve the right to modify these Terms at any time. If we make changes,
                we will provide notice by updating the date at the top of these Terms. Your
                continued use of TimeSync after any changes indicates your acceptance of the
                new Terms.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4">7. Contact Information</h2>
              <p>
                If you have any questions about these Terms, please contact us at support@timesync.example.
              </p>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Terms;

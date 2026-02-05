
import React from 'react';
import Layout from '@/components/Layout';
import Seo from '@/components/Seo';
import { APP_NAME, SITE_URL } from '@/constants/constants';

const Privacy = () => {
  return (
    <Layout>
      <Seo
        title={`Privacy Policy - ${APP_NAME}`}
        description="Read how we collect, use, and protect information, including advertising disclosures and cookie practices."
        type="website"
        canonical={`${SITE_URL}privacy.html`}
        breadcrumbs={[
          { name: 'Home', item: SITE_URL },
          { name: 'Privacy Policy', item: `${SITE_URL}privacy.html` }
        ]}
      />
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground mb-4">Last Updated: April 7, 2025</p>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
              <p>
                At <a href="https://www.thetimeis.net/">TheTimeIs.net</a>, we respect your privacy and are committed to protecting your personal data.
                This Privacy Policy explains how we collect, use, and safeguard your information when
                you visit our website.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">2. Information We Collect</h2>
              <p className="mb-4">
                When you use <a href="https://www.thetimeis.net/">TheTimeIs.net</a>, we may collect the following types of information:
              </p>
              
              <h3 className="text-xl font-semibold mb-2">2.1 Technical Data</h3>
              <p className="mb-4">
                We automatically collect certain information when you visit our website, including:
              </p>
              <ul className="list-disc pl-6 my-4 space-y-2">
                <li>Browser type and version</li>
                <li>Operating system</li>
                <li>IP address</li>
                <li>Time zone setting</li>
                <li>Browser plug-in types and versions</li>
              </ul>
              
              <h3 className="text-xl font-semibold mb-2">2.2 Usage Data</h3>
              <p>
                We may collect information about how you use our website, including which pages you visit,
                features you use, and preferences you set (such as saved timezones).
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">3. How We Use Your Information</h2>
              <p className="mb-4">
                We use the information we collect for the following purposes:
              </p>
              <ul className="list-disc pl-6 my-4 space-y-2">
                <li>To provide and maintain our service</li>
                <li>To personalize your experience (e.g., remembering your preferred timezones)</li>
                <li>To improve our website based on how visitors use it</li>
                <li>To monitor and analyze usage patterns</li>
                <li>To detect, prevent, and address technical issues</li>
              </ul>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">4. Local Storage</h2>
              <p className="mb-4">
              <a href="https://www.thetimeis.net/">TheTimeIs.net</a> uses local storage to store certain preferences and settings on your device,
                such as your preferred timezones and display format. This information is stored locally
                on your device and is not transmitted to our servers.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">5. Data Security</h2>
              <p>
                We implement appropriate security measures to protect your information. However, no
                method of transmission over the Internet or electronic storage is 100% secure, and
                we cannot guarantee absolute security.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">6. Third-Party Links</h2>
              <p>
                Our website may contain links to third-party websites. We are not responsible for the
                privacy practices or content of these websites. We encourage you to read the privacy
                policies of any website you visit.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">7. Children's Privacy</h2>
              <p>
              <a href="https://www.thetimeis.net/">TheTimeIs.net</a>is not intended for children under the age of 13. We do not knowingly collect
                personal information from children under 13. If you believe we have collected information
                from a child under 13, please contact us immediately.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">8. Changes to This Privacy Policy</h2>
              <p>
                We may update our Privacy Policy from time to time. We will notify you of any changes by
                posting the new Privacy Policy on this page and updating the "Last Updated" date.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4">9. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at privacy@TheTimeIs.net.example.
              </p>
            </section>
          </div>
        </div>
      </div>
      {/* Appended static privacy content for AdSense compliance */}
      <section aria-labelledby="privacy-title-appended" className="prose prose-lg max-w-4xl mx-auto mt-12 px-4">
        <h1 id="privacy-title-appended">Privacy Policy — thetimeis.net</h1>
        <p>
          At thetimeis.net, we respect your privacy and are committed to handling information responsibly. This
          section explains what information may be processed, how it is used, and your choices regarding that
          information.
        </p>
        <h2>Information We Collect</h2>
        <p>
          thetimeis.net is a utility site that displays current local time for selected locations. We do not require
          account registration. Limited technical information may be processed to operate the site efficiently,
          such as IP address, device or browser type, referring URLs, and aggregate analytics signals for
          performance and reliability.
        </p>
        <h2>Cookies and Similar Technologies</h2>
        <p>
          We aim to minimize cookie use. Some strictly necessary cookies may support core functionality and
          performance. If advertising is shown, third-party vendors (including Google) may use cookies or local
          storage to serve and measure ads. You can manage preferences in your browser settings.
        </p>
        <h2>Advertising</h2>
        <p>
          thetimeis.net may display ads from Google and other partners. Google uses cookies to serve ads based on
          visits to this and other sites. Learn more at
          <a href="https://policies.google.com/technologies/ads" rel="noopener" target="_blank">policies.google.com/technologies/ads</a>.
          Ads will not be placed inside or above the primary time tool on our homepage.
        </p>
        <h2>Use of Information</h2>
        <p>
          We use limited technical and aggregate data to keep the site secure, improve performance, understand
          usage at a high level, and maintain accurate time presentation. We do not sell personal information.
        </p>
        <h2>Data Sharing</h2>
        <p>
          We may share aggregated, non-identifying information for analytics and service reliability. If ads are
          displayed, data may be shared with advertising partners to deliver and measure ad performance, subject
          to applicable laws and vendor policies.
        </p>
        <h2>International Visitors</h2>
        <p>
          By using the site, you understand that your data may be processed in the country where our hosting and
          service providers operate. We take steps to handle data consistently with relevant laws.
        </p>
        <h2>Your Choices</h2>
        <ul>
          <li>Manage cookies through browser settings</li>
          <li>Use privacy modes or content blockers if desired</li>
          <li>Contact us with questions about this policy</li>
        </ul>
        <h2>Security</h2>
        <p>
          We implement reasonable security measures to protect information. However, no method of transmission or
          storage is completely secure. Please use best practices to protect your devices and accounts.
        </p>
        <h2>Children’s Privacy</h2>
        <p>
          thetimeis.net is a general audience site and is not directed to children. We do not knowingly collect
          personal information from children.
        </p>
        <h2>Updates</h2>
        <p>
          We may update this policy to reflect changes in practices or legal requirements. The revised policy will
          be posted here with an updated effective date.
        </p>
        <h2>Contact</h2>
        <p>
          For privacy-related questions, email <a href="mailto:privacy@thetimeis.net">privacy@thetimeis.net</a>.
        </p>
      </section>
    </Layout>
  );
};

export default Privacy;

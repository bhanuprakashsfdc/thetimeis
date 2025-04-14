
import React from 'react';
import Layout from '@/components/Layout';

const Privacy = () => {
  return (
    <Layout>
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
    </Layout>
  );
};

export default Privacy;

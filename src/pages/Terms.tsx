
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
                Welcome to <a href="https://www.thetimeis.net/">TheTimeIs.net</a>. These Terms of Service govern your use of the TheTimeIs.net website
                and all related services. By accessing or using <a href="https://www.thetimeis.net/">TheTimeIs.net</a>TheTimeIs.net, you agree to be bound by
                these Terms and our Privacy Policy.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">2. Using <a href="https://www.thetimeis.net/">TheTimeIs.net</a></h2>
              <p className="mb-4">
              <a href="https://www.thetimeis.net/">TheTimeIs.net</a> provides accurate time and date information across different timezones.
                While we strive for accuracy, we cannot guarantee that the information provided is
                error-free or will be available at all times.
              </p>
              <p>
                You may use <a href="https://www.thetimeis.net/">TheTimeIs.net</a> for personal or commercial purposes, but you may not:
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
              <a href="https://www.thetimeis.net/">TheTimeIs.net</a> makes every effort to ensure that the time and date information provided
                is accurate and reliable. However, we do not warrant that the information will be
                error-free or uninterrupted. For critical timing applications, we recommend verifying
                with multiple sources.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">4. Intellectual Property</h2>
              <p>
                All content on <a href="https://www.thetimeis.net/">TheTimeIs.net</a>, including but not limited to text, graphics, logos, icons,
                images, and software, is the property of <a href="https://www.thetimeis.net/">TheTimeIs.net</a> or its content suppliers and is
                protected by international copyright laws.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">5. Limitation of Liability</h2>
              <p>
                In no event shall <a href="https://www.thetimeis.net/">TheTimeIs.net</a> be liable for any indirect, incidental, special,
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
                continued use of TheTimeIs.net after any changes indicates your acceptance of the
                new Terms.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4">7. Contact Information</h2>
              <p>
                If you have any questions about these Terms, please contact us at support@TheTimeIs.net.example.
              </p>
            </section>
          </div>
        </div>
      </div>
      {/* Appended static terms content for AdSense compliance */}
      <section aria-labelledby="terms-title-appended" className="prose prose-lg max-w-4xl mx-auto mt-12 px-4">
        <h1 id="terms-title-appended">Terms of Service — thetimeis.net</h1>
        <p>
          These Terms govern your use of thetimeis.net. By accessing or using the site, you agree to these
          Terms.
        </p>
        <h2>Service Description</h2>
        <p>
          thetimeis.net is a utility that displays the current local time for selected locations based on UTC and
          official time zone rules. We strive for accuracy but cannot guarantee that all information will be
          error-free or updated instantly for every jurisdiction.
        </p>
        <h2>Acceptable Use</h2>
        <p>
          You agree not to misuse the site, interfere with its operation, attempt unauthorized access, or use it
          in violation of applicable laws. You may use the site for personal or professional time-checking
          purposes.
        </p>
        <h2>Accuracy and Updates</h2>
        <p>
          We work to keep time zone data and rules current. Changes to regional policies or technical limitations
          may affect displayed times. Confirm critical timing requirements independently when needed.
        </p>
        <h2>Intellectual Property</h2>
        <p>
          Content on the site, including text, design, and branding, is owned by or licensed to thetimeis.net.
          You may not copy, redistribute, or create derivative works without permission, except for fair use or
          as permitted by law.
        </p>
        <h2>Third-Party Links and Services</h2>
        <p>
          thetimeis.net may include links to third-party resources. We are not responsible for the content,
          policies, or practices of third-party sites or services.
        </p>
        <h2>Disclaimer of Warranties</h2>
        <p>
          The site is provided “as is” and “as available.” We disclaim all warranties, express or implied,
          including merchantability, fitness for a particular purpose, and non-infringement.
        </p>
        <h2>Limitation of Liability</h2>
        <p>
          To the maximum extent permitted by law, thetimeis.net is not liable for indirect, incidental,
          consequential, special, or punitive damages arising from your use of the site.
        </p>
        <h2>Indemnification</h2>
        <p>
          You agree to indemnify and hold thetimeis.net harmless from claims arising out of your use of the site
          or violation of these Terms.
        </p>
        <h2>Changes to Terms</h2>
        <p>
          We may update these Terms from time to time. Your continued use of the site following changes
          constitutes acceptance of the updated Terms.
        </p>
        <h2>Contact</h2>
        <p>
          Questions about these Terms may be sent to <a href="mailto:legal@thetimeis.net">legal@thetimeis.net</a>.
        </p>
      </section>
    </Layout>
  );
};

export default Terms;

import React from 'react';
import Layout from '@/components/Layout';
import { Helmet } from 'react-helmet-async';
import { APP_NAME } from '@/constants/constants';
import { Link } from 'react-router-dom';
import { Shield, Cookie, Info } from 'lucide-react';

const CookiesPage = () => {
  return (
    <Layout>
      <Helmet>
        <title>Cookie Policy - {APP_NAME}</title>
        <meta name="description" content="Learn about how we use cookies and similar technologies to improve your experience on our website." />
      </Helmet>
      
      <div className="container mx-auto px-4 py-8">
        <nav className="mb-8" aria-label="breadcrumb">
          <ol className="flex items-center space-x-2 text-sm">
            <li><Link to="/" className="text-primary hover:underline">Home</Link></li>
            <li>/</li>
            <li>Cookie Policy</li>
          </ol>
        </nav>

        <div className="flex items-center justify-center mb-8">
          <Cookie className="h-10 w-10 text-primary mr-3" />
          <h1 className="text-4xl font-bold">Cookie Policy</h1>
        </div>

        <div className="prose prose-lg max-w-4xl mx-auto">
          <p className="text-xl text-muted-foreground text-center mb-10">
            This Cookie Policy explains how {APP_NAME} uses cookies and similar technologies to provide, customize, evaluate, improve, promote and protect our services.
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Info className="h-6 w-6" />
              What Are Cookies?
            </h2>
            <p>
              Cookies are small text files that are stored on your device when you visit a website. They serve various purposes, including helping websites remember your preferences and providing a better user experience.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Shield className="h-6 w-6" />
              How We Use Cookies
            </h2>
            <p className="mb-4">We use cookies for the following purposes:</p>
            <ul className="space-y-3">
              <li>
                <strong>Essential Cookies:</strong> These cookies are necessary for the website to function properly. They enable basic functions like page navigation and access to secure areas of the website.
              </li>
              <li>
                <strong>Preference Cookies:</strong> These cookies remember your preferences (like 12/24-hour time format) to provide a more personalized experience.
              </li>
              <li>
                <strong>Analytics Cookies:</strong> We use these cookies to understand how visitors interact with our website, helping us improve our services and user experience.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Types of Cookies We Use</h2>
            <div className="space-y-4">
              <div className="p-4 bg-muted rounded-lg">
                <h3 className="font-bold mb-2">Session Cookies</h3>
                <p>Temporary cookies that expire when you close your browser. They help us track your interactions during a single browsing session.</p>
              </div>
              <div className="p-4 bg-muted rounded-lg">
                <h3 className="font-bold mb-2">Persistent Cookies</h3>
                <p>Cookies that remain on your device for a set period. They help us remember your preferences and provide a more convenient experience on return visits.</p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Managing Cookies</h2>
            <p className="mb-4">
              Most web browsers allow you to control cookies through their settings preferences. However, limiting cookies may impact your experience of our website.
            </p>
            <p>
              To learn more about cookies and how to manage them, visit:
            </p>
            <ul className="space-y-2 mt-2">
              <li>
                <a href="https://www.aboutcookies.org" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  AboutCookies.org
                </a>
              </li>
              <li>
                <a href="https://www.allaboutcookies.org" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  AllAboutCookies.org
                </a>
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Changes to This Policy</h2>
            <p>
              We may update our Cookie Policy from time to time. We will notify you of any changes by posting the new Cookie Policy on this page and updating the effective date.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <p>
              If you have any questions about our Cookie Policy, please contact us through our{' '}
              <Link to="/contact.html" className="text-primary hover:underline">contact page</Link>.
            </p>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default CookiesPage;
import React from 'react';
import Layout from '@/components/Layout';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Clock, Globe, Calendar, ArrowRight } from 'lucide-react';

const BlogIndex = () => {
  const articles = [
    {
      title: 'Understanding Time Zones',
      description: 'A comprehensive guide to time zones and their impact on our global world. Learn about the history, importance, and practical applications of time zones.',
      icon: Globe,
      link: '/blog/understanding-time-zones.html',
      date: 'April 7, 2025',
      readTime: '10 min read'
    },
    // More articles will be added here as they are created
  ];

  return (
    <Layout>
      <Helmet>
        <title>Time Zone Blog - Articles About Time | TheTimeIs.net</title>
        <meta name="description" content="Explore articles about time zones, world clocks, and time management. Learn about different time systems and how they affect our daily lives." />
      </Helmet>
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold mb-4">Time Zone Blog</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore articles about time zones, world clocks, and time management
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid gap-6">
            {articles.map((article, index) => (
              <article key={index} className="bg-card rounded-lg shadow-md p-6 elevation-shadow hover:shadow-lg transition-shadow">
                <Link to={article.link} className="block">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <article.icon className="h-8 w-8 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-2xl font-bold mb-2 hover:text-primary transition-colors">
                        {article.title}
                      </h2>
                      <p className="text-muted-foreground mb-4">
                        {article.description}
                      </p>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <span>{article.date}</span>
                        <span className="mx-2">•</span>
                        <span>{article.readTime}</span>
                      </div>
                    </div>
                    <div className="flex-shrink-0">
                      <ArrowRight className="h-6 w-6 text-muted-foreground" />
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg text-muted-foreground">
              More articles coming soon! Subscribe to our newsletter to stay updated.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BlogIndex;
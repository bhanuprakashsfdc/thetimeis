
import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Layout from '@/components/Layout';
import { getBlogPostBySlug, getRelatedPosts, BlogPost } from '@/constants/blog';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Calendar, Clock, User } from 'lucide-react';
import Seo from '@/components/Seo';
import { SITE_URL, APP_NAME } from '@/constants/constants';
import BlogCard from '@/components/BlogCard';

const BlogPostPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  // Remove .html from slug if present
  const cleanSlug = slug?.replace(/\.html$/, '');

  const post = getBlogPostBySlug(cleanSlug || '');
  const relatedPosts = post ? getRelatedPosts(post.id, 3) : [];
  if (!post) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-3xl font-bold mb-6">Blog Post Not Found</h1>
          <p className="mb-8">The blog post you're looking for doesn't exist or has been removed.</p>
          <Button onClick={() => navigate('/blog.html')}>
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
          </Button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <Seo
        title={`${post.title} | ${APP_NAME}`}
        description={post.excerpt}
        type="article"
        image={post.coverImage || `${SITE_URL}og-image.jpg`}
        canonical={`${SITE_URL}blog/${post.slug}.html`}
        breadcrumbs={[
          { name: 'Home', item: `${SITE_URL}` },
          { name: 'Blog', item: `${SITE_URL}blog.html` },
          { name: post.title, item: `${SITE_URL}blog/${post.slug}.html` }
        ]}
        schema={{
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: post.title,
          description: post.excerpt,
          image: post.coverImage || `${SITE_URL}og-image.jpg`,
          author: {
            '@type': 'Person',
            name: post.author
          },
          datePublished: post.date,
          mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': `${SITE_URL}blog/${post.slug}.html`
          }
        }}
      />

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <Link 
            to="/blog.html" 
            className="inline-flex items-center text-muted-foreground hover:text-primary mb-6"
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>
          <div className="flex flex-wrap items-center gap-4 text-muted-foreground mb-6">
            <div className="flex items-center gap-1">
              <User className="h-4 w-4" aria-hidden="true" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" aria-hidden="true" />
              <span>{new Date(post.date).toLocaleDateString()}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" aria-hidden="true" />
              <span>{post.readTime} min read</span>
            </div>
            <Badge variant="secondary">{post.category}</Badge>
          </div>
        </div>
        <div className="max-w-3xl mx-auto">
          <Card className="p-6 md:p-8 mb-12">
            <div 
              className="prose dark:prose-invert max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
            <div className="flex flex-wrap gap-2 mt-8 pt-4 border-t">
              {post.tags.map(tag => (
                <Badge key={tag} variant="outline">#{tag}</Badge>
              ))}
            </div>
          </Card>
          {relatedPosts.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedPosts.map(relatedPost => (
                  <BlogCard key={relatedPost.id} post={relatedPost} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default BlogPostPage;

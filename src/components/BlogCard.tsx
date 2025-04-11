import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar } from 'lucide-react';
import { BlogPost } from '@/lib/blog';

interface BlogCardProps {
  post: BlogPost;
}

const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  return (
    <Card className="h-full flex flex-col hover:shadow-lg transition-shadow duration-300">
      <CardHeader className="pb-3">
        <Link to={`/blog/${post.slug}.html`}>
          <h3 className="text-lg font-semibold line-clamp-2 hover:text-primary transition-colors">
            {post.title}
          </h3>
        </Link>
      </CardHeader>
      <CardContent className="pb-4 flex-1">
        <p className="text-muted-foreground line-clamp-3 mb-4">
          {post.excerpt}
        </p>
        <div className="flex flex-wrap gap-2 mb-2">
          <Badge variant="secondary">
            {post.category}
          </Badge>
          {post.tags.includes('time zones') && (
            <Badge variant="outline" className="hover:bg-primary/10">
              <a href="/timezone.html" className="hover:text-primary">Timezone Tool</a>
            </Badge>
          )}
          {post.tags.includes('clocks') && (
            <Badge variant="outline" className="hover:bg-primary/10">
              <a href="/world-clock.html" className="hover:text-primary">World Clock</a>
            </Badge>
          )}
        </div>
      </CardContent>
      <CardFooter className="pt-0 flex items-center justify-between text-sm text-muted-foreground border-t pt-3">
        <div className="flex items-center gap-1">
          <Calendar className="h-3 w-3" />
          <span>{new Date(post.date).toLocaleDateString()}</span>
        </div>
        <span>{post.readTime} min read</span>
      </CardFooter>
    </Card>
  );
};

export default BlogCard;


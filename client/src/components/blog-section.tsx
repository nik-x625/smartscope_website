import { Link } from "wouter";
import { blogPosts } from "@/data/blog-posts";
import { Calendar, Clock } from "lucide-react";

export default function BlogSection() {
  return (
    <section id="blog" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4">
            Latest Insights
          </h2>
          <p className="text-xl text-muted-foreground">
            Expert tips on proposal writing, AI automation, and project management
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.slice(0, 5).map((post, index) => (
            <Link 
              key={index} 
              href={`/blog/${post.slug}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <article 
                className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg transition-all cursor-pointer group"
                data-testid={`card-blog-${index}`}
              >
                <img 
                  src={post.image}
                  alt={post.imageAlt}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  data-testid={`img-blog-${index}`}
                />
                <div className="p-6">
                  <div className="text-sm text-primary font-medium mb-2">
                    {post.category}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center text-sm text-muted-foreground space-x-4">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

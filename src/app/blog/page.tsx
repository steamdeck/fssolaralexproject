
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { blogPosts } from '@/lib/blog-data';
import { ScrollReveal } from '@/components/ui/scroll-reveal';

export default function BlogPage() {
  return (
    <div className="bg-background">
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <ScrollReveal className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Surya Solar Blog
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Your source for the latest news, tips, and insights in the world
              of solar energy in India.
            </p>
          </ScrollReveal>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post, i) => (
              <ScrollReveal key={post.slug} delay={i * 150}>
                <Card className="flex flex-col transition-transform duration-300 hover:scale-105 hover:shadow-xl h-full">
                  {post.imageUrl && (
                    <div className="relative aspect-video w-full overflow-hidden rounded-t-lg">
                      <Image
                        src={post.imageUrl}
                        alt={`Thumbnail for ${post.title}`}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        data-ai-hint={post.imageHint}
                      />
                    </div>
                  )}
                  <CardHeader>
                    <p className="text-sm text-muted-foreground">
                      {post.date} &bull; {post.author}
                    </p>
                    <CardTitle className="leading-tight">{post.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-muted-foreground line-clamp-4">
                      {post.excerpt}
                    </p>
                  </CardContent>
                  <div className="p-6 pt-0">
                    <Button asChild variant="link" className="p-0 h-auto group">
                      <Link href={`/blog/${post.slug}`}>
                        Read More <ArrowRight className="ml-2 size-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </Link>
                    </Button>
                  </div>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

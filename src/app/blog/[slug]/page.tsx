import { notFound } from 'next/navigation';
import Image from 'next/image';
import { blogPosts } from '@/lib/blog-data';
import { Calendar, User } from 'lucide-react';

type BlogPostPageProps = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="bg-background">
      <article className="container mx-auto max-w-4xl px-4 py-16 md:py-24">
        <div className="mx-auto">
          <header className="mb-12 text-center">
            <h1 className="mb-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              {post.title}
            </h1>
            <div className="flex items-center justify-center space-x-4 text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Calendar className="size-4" />
                <time dateTime={post.date}>{post.date}</time>
              </div>
              <div className="flex items-center space-x-2">
                <User className="size-4" />
                <span>{post.author}</span>
              </div>
            </div>
          </header>

          {post.imageUrl && (
            <div className="relative mb-12 aspect-video w-full overflow-hidden rounded-xl">
              <Image
                src={post.imageUrl}
                alt={`Featured image for ${post.title}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 66vw"
                priority
                data-ai-hint={post.imageHint}
              />
            </div>
          )}

          <div
            className="prose prose-lg dark:prose-invert mx-auto max-w-none 
                       prose-p:text-foreground/80 prose-headings:text-foreground
                       prose-strong:text-foreground prose-a:text-primary hover:prose-a:text-primary/80"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </article>
    </div>
  );
}

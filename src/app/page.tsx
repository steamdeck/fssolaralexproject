import { ArrowRight, Leaf, Zap, Sun } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { blogPosts } from '@/lib/blog-data';

const benefits = [
  {
    icon: <Zap className="size-8 text-primary" />,
    title: 'Reduce Your Energy Bills',
    description:
      'Harness the power of the sun to significantly lower or even eliminate your monthly electricity costs.',
  },
  {
    icon: <Leaf className="size-8 text-primary" />,
    title: 'Sustainable & Eco-Friendly',
    description:
      'Decrease your carbon footprint and contribute to a healthier planet by using clean, renewable energy.',
  },
  {
    icon: <Sun className="size-8 text-primary" />,
    title: 'Energy Independence',
    description:
      'Gain independence from the grid and fluctuating energy prices with your own reliable power source.',
  },
];

const portfolioHighlights = PlaceHolderImages.filter(
  (img) => img.id.startsWith('portfolio-project-') && ['1', '2', '3'].includes(img.id.slice(-1))
);

const latestPosts = blogPosts.slice(0, 3);

export default function Home() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-home');

  return (
    <div className="flex flex-col">
      <section className="relative w-full py-20 md:py-32 lg:py-40">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            <div className="space-y-6">
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
                Power Your Future with Solaris Hub
              </h1>
              <p className="text-lg text-muted-foreground">
                Your trusted partner in harnessing the power of the sun. We provide
                end-to-end solar solutions for a brighter, cleaner, and more
                sustainable tomorrow.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button asChild size="lg">
                  <Link href="/services">
                    Explore Our Services <ArrowRight className="ml-2 size-5" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="secondary">
                  <Link href="/contact">Get a Free Quote</Link>
                </Button>
              </div>
            </div>
            <div className="relative h-64 w-full overflow-hidden rounded-xl shadow-2xl md:h-auto md:aspect-video">
              {heroImage && (
                <Image
                  src={heroImage.imageUrl}
                  alt={heroImage.description}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                  priority
                  data-ai-hint={heroImage.imageHint}
                />
              )}
            </div>
          </div>
        </div>
      </section>

      <section id="benefits" className="w-full bg-card py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Why Go Solar?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Discover the incredible advantages of switching to solar energy for
              your home or business.
            </p>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit) => (
              <Card key={benefit.title} className="text-center">
                <CardHeader>
                  <div className="mx-auto flex size-16 items-center justify-center rounded-full bg-background">
                    {benefit.icon}
                  </div>
                  <CardTitle className="mt-4">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-primary text-primary-foreground py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            See Your Potential Savings
          </h2>
          <p className="mt-4 mx-auto max-w-2xl text-lg text-primary-foreground/80">
            Use our AI-powered calculator to estimate how much you could save by switching to solar and your positive environmental impact.
          </p>
          <Button asChild size="lg" variant="secondary" className="mt-8 bg-accent text-accent-foreground hover:bg-accent/90">
            <Link href="/calculator">
              Calculate Your Savings <ArrowRight className="ml-2 size-5" />
            </Link>
          </Button>
        </div>
      </section>
      
      <section id="portfolio" className="w-full py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Our Recent Work
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              We take pride in every installation. Here are a few of our successful projects.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {portfolioHighlights.map((project) => (
              <Card key={project.id} className="overflow-hidden">
                <div className="relative aspect-video w-full">
                  <Image
                    src={project.imageUrl}
                    alt={project.description}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    data-ai-hint={project.imageHint}
                  />
                </div>
                <CardHeader>
                  <CardTitle>{project.description}</CardTitle>
                </CardHeader>
              </Card>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button asChild>
              <Link href="/portfolio">
                View Full Portfolio <ArrowRight className="ml-2 size-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section id="blog" className="w-full bg-card py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              From Our Blog
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Stay updated with the latest in solar energy news, tips, and company updates.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {latestPosts.map((post) => (
              <Card key={post.slug} className="flex flex-col">
                <div className="relative aspect-video w-full overflow-hidden rounded-t-lg">
                  {post.imageUrl && (
                     <Image
                      src={post.imageUrl}
                      alt={`Thumbnail for ${post.title}`}
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      data-ai-hint={post.imageHint}
                    />
                  )}
                </div>
                <CardHeader>
                  <CardTitle className="leading-tight">{post.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground line-clamp-3">{post.excerpt}</p>
                </CardContent>
                <div className="p-6 pt-0">
                  <Button asChild variant="link" className="p-0 h-auto">
                    <Link href={`/blog/${post.slug}`}>
                      Read More <ArrowRight className="ml-2 size-4" />
                    </Link>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
           <div className="mt-12 text-center">
            <Button asChild>
              <Link href="/blog">
                Visit Our Blog <ArrowRight className="ml-2 size-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

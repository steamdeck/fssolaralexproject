
import { ArrowRight, Leaf, Zap, Sun, Star } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { blogPosts } from '@/lib/blog-data';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ScrollReveal } from '@/components/ui/scroll-reveal';

const benefits = [
  {
    icon: <Zap className="size-8 text-primary" />,
    title: 'Reduce Your Energy Bills',
    description:
      'Harness the power of the sun to significantly lower or even eliminate your monthly electricity costs. Our high-efficiency panels ensure you get the most out of every ray of sunlight, leading to immediate and long-term savings.',
  },
  {
    icon: <Leaf className="size-8 text-primary" />,
    title: 'Sustainable & Eco-Friendly',
    description:
      'Decrease your carbon footprint and contribute to a healthier planet by using clean, renewable energy. By choosing solar, you are actively participating in the global movement towards a sustainable future.',
  },
  {
    icon: <Sun className="size-8 text-primary" />,
    title: 'Energy Independence',
    description:
      'Gain independence from the grid and fluctuating energy prices with your own reliable power source. With optional battery storage, you can have power even during outages, ensuring peace of mind.',
  },
];

const testimonials = [
  {
    name: 'The Johnson Family',
    avatar: 'https://picsum.photos/seed/avatar-1/100/100',
    avatarHint: 'family photo',
    rating: 5,
    comment: '"The entire process with Solaris Hub was seamless. From the initial consultation to the final installation, the team was professional and communicative. Our energy bills have never been lower!"'
  },
  {
    name: 'Main St. Bakery',
    avatar: 'https://picsum.photos/seed/avatar-2/100/100',
    avatarHint: 'bakery storefront',
    rating: 5,
    comment: '"As a small business, cutting operational costs is crucial. Solaris Hub provided a commercial solution that has drastically reduced our electricity expenses, allowing us to invest more back into our business."'
  },
  {
    name: 'Sarah L.',
    avatar: 'https://picsum.photos/seed/avatar-3/100/100',
    avatarHint: 'woman smiling',
    rating: 5,
    comment: '"I was so impressed with the team\'s knowledge and passion for renewable energy. They helped me understand all the incentives and made going solar an easy and affordable decision. I couldn\'t be happier!"'
  }
];


const portfolioHighlights = PlaceHolderImages.filter(
  (img) => img.id.startsWith('portfolio-project-') && ['1', '2', '3'].includes(img.id.slice(-1))
);

const latestPosts = blogPosts.slice(0, 3);

const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
        if (i < rating) {
            stars.push(<Star key={i} className="text-accent fill-accent size-5" />);
        } else {
            stars.push(<Star key={i} className="text-accent/30 fill-accent/30 size-5" />);
        }
    }
    return <div className="flex">{stars}</div>
}

export default function Home() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-home');

  return (
    <div className="flex flex-col">
      <section className="relative w-full py-20 md:py-32 lg:py-40">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <ScrollReveal>
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
                  <Button asChild size="lg" className="group">
                    <Link href="/services">
                      Explore Our Services <ArrowRight className="ml-2 size-5 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="secondary">
                    <Link href="/contact">Get a Free Quote</Link>
                  </Button>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div className="relative h-64 w-full overflow-hidden rounded-xl shadow-2xl md:h-auto md:aspect-[16/10] transition-transform duration-300 hover:scale-105">
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
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section id="benefits" className="w-full bg-card py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <ScrollReveal className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">The Solaris Advantage</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
              Why Go Solar?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Discover the incredible advantages of switching to solar energy for
              your home or business. It's more than just panels; it's a lifestyle change.
            </p>
          </ScrollReveal>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit, i) => (
              <ScrollReveal key={benefit.title} delay={i * 150}>
                <Card className="text-center transition-transform duration-300 hover:scale-105 hover:shadow-xl h-full">
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
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-primary text-primary-foreground py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <ScrollReveal>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              See Your Potential Savings
            </h2>
            <p className="mt-4 mx-auto max-w-2xl text-lg text-primary-foreground/80">
              Use our AI-powered calculator to get a personalized estimate of how much you could save by switching to solar and see your positive environmental impact.
            </p>
            <Button asChild size="lg" variant="secondary" className="mt-8 bg-accent text-accent-foreground hover:bg-accent/90 group">
              <Link href="/calculator">
                Calculate Your Savings <ArrowRight className="ml-2 size-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Button>
          </ScrollReveal>
        </div>
      </section>
      
      <section id="portfolio" className="w-full py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <ScrollReveal className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Our Recent Work
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              We take pride in every installation. Here are a few of our successful projects that are now powering homes and businesses with clean energy.
            </p>
          </ScrollReveal>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {portfolioHighlights.map((project, i) => (
              <ScrollReveal key={project.id} delay={i * 150}>
                <Card className="overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-xl group h-full">
                  <div className="relative aspect-video w-full">
                    <Image
                      src={project.imageUrl}
                      alt={project.description}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      data-ai-hint={project.imageHint}
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>{project.description}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      A successful residential solar installation, delivering clean energy and significant savings.
                    </p>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal className="mt-12 text-center">
            <Button asChild className="group">
              <Link href="/portfolio">
                View Full Portfolio <ArrowRight className="ml-2 size-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Button>
          </ScrollReveal>
        </div>
      </section>

      <section id="testimonials" className="w-full bg-card py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
            <ScrollReveal className="mx-auto max-w-3xl text-center">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">What Our Customers Say</h2>
                <p className="mt-4 text-lg text-muted-foreground">We're proud to have helped thousands of clients embrace solar energy. Here's what some of them have to say.</p>
            </ScrollReveal>
            <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {testimonials.map((testimonial, i) => (
                    <ScrollReveal key={testimonial.name} delay={i * 150}>
                      <Card className="flex flex-col justify-between transition-transform duration-300 hover:scale-105 hover:shadow-xl h-full">
                          <CardHeader className="flex-row gap-4 items-center">
                              <Avatar className="transition-transform duration-300 hover:scale-110" data-ai-hint={testimonial.avatarHint}>
                                  <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                                  <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                              </Avatar>
                              <div>
                                  <CardTitle>{testimonial.name}</CardTitle>
                                  {renderStars(testimonial.rating)}
                              </div>
                          </CardHeader>
                          <CardContent>
                              <blockquote className="text-muted-foreground italic border-l-4 border-accent pl-4">
                                  {testimonial.comment}
                              </blockquote>
                          </CardContent>
                      </Card>
                    </ScrollReveal>
                ))}
            </div>
        </div>
      </section>

      <section id="blog" className="w-full bg-background py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <ScrollReveal className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              From Our Blog
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Stay updated with the latest in solar energy news, tips, and company updates.
            </p>
          </ScrollReveal>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {latestPosts.map((post, i) => (
              <ScrollReveal key={post.slug} delay={i * 150}>
                <Card className="flex flex-col transition-transform duration-300 hover:scale-105 hover:shadow-xl group h-full">
                  <Link href={`/blog/${post.slug}`} className="block">
                    <div className="relative aspect-video w-full overflow-hidden rounded-t-lg">
                      {post.imageUrl && (
                        <Image
                          src={post.imageUrl}
                          alt={`Thumbnail for ${post.title}`}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          data-ai-hint={post.imageHint}
                        />
                      )}
                    </div>
                  </Link>
                  <CardHeader>
                    <CardTitle className="leading-tight group-hover:text-primary transition-colors duration-300">
                      <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-muted-foreground line-clamp-3">{post.excerpt}</p>
                  </CardContent>
                  <div className="p-6 pt-0">
                    <Button asChild variant="link" className="p-0 h-auto group/link">
                      <Link href={`/blog/${post.slug}`}>
                        Read More <ArrowRight className="ml-2 size-4 transition-transform duration-300 group-hover/link:translate-x-1" />
                      </Link>
                    </Button>
                  </div>
                </Card>
              </ScrollReveal>
            ))}
          </div>
           <ScrollReveal className="mt-12 text-center">
            <Button asChild className="group">
              <Link href="/blog">
                Visit Our Blog <ArrowRight className="ml-2 size-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Button>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}

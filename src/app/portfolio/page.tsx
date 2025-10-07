import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Star, StarHalf } from 'lucide-react';

const projects = [
  {
    id: 'portfolio-project-1',
    title: 'Suburban Family Home',
    location: 'Maplewood, NJ',
    testimonial:
      '"Solaris Hub made the entire process so easy. Our energy bills have been cut in half, and we feel great about reducing our carbon footprint!"',
    rating: 5,
  },
  {
    id: 'portfolio-project-2',
    title: 'Downtown Commercial Building',
    location: 'Brooklyn, NY',
    testimonial:
      '"The rooftop installation was professional and fast. The energy savings for our business have been substantial. Highly recommend their commercial services."',
    rating: 5,
  },
  {
    id: 'portfolio-project-3',
    title: 'Rural Farm & Barn',
    location: 'Lancaster, PA',
    testimonial:
      '"Powering our farm with solar has been a game-changer. The team understood our unique energy needs and delivered a robust system that powers all our operations."',
    rating: 5,
  },
  {
    id: 'portfolio-project-4',
    title: 'Modern Urban Residence',
    location: 'Austin, TX',
    testimonial:
      '"The sleek, low-profile panels look amazing on our modern home. We are now energy independent and couldn\'t be happier with the result."',
    rating: 4.5,
  },
  {
    id: 'portfolio-project-5',
    title: 'Community Center',
    location: 'Boulder, CO',
    testimonial:
      '"Solaris Hub helped our non-profit community center go green. Their guidance on grants and financing was invaluable. A true community partner."',
    rating: 5,
  },
  {
    id: 'portfolio-project-6',
    title: 'Industrial Warehouse',
    location: 'Columbus, OH',
    testimonial:
      '"The scale of our warehouse roof was a challenge, but Solaris Hub designed a massive system that has drastically reduced our operating costs. Exceptional work!"',
    rating: 5,
  },
];

const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const stars = [];
    for (let i = 0; i < fullStars; i++) {
        stars.push(<Star key={`full-${i}`} className="text-accent fill-accent size-5" />);
    }
    if (halfStar) {
        stars.push(<StarHalf key="half" className="text-accent fill-accent size-5" />);
    }
    return <div className="flex">{stars}</div>
}

export default function PortfolioPage() {
  return (
    <div className="bg-background">
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Our Work
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              We take pride in every project we complete. Explore a selection
              of our residential and commercial solar installations.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => {
              const projectImage = PlaceHolderImages.find(
                (img) => img.id === project.id
              );
              return (
                <Card key={project.id} className="flex flex-col overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-xl group">
                  {projectImage && (
                    <div className="relative aspect-video w-full">
                      <Image
                        src={projectImage.imageUrl}
                        alt={projectImage.description}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        data-ai-hint={projectImage.imageHint}
                      />
                    </div>
                  )}
                  <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
                    <CardDescription>{project.location}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex flex-grow flex-col">
                    <blockquote className="flex-grow border-l-4 border-accent pl-4 italic text-muted-foreground">
                      {project.testimonial}
                    </blockquote>
                    <div className="mt-4 flex items-center">
                        {renderStars(project.rating)}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

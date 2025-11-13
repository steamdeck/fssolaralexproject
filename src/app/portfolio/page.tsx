
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Star, StarHalf, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ScrollReveal } from '@/components/ui/scroll-reveal';

const projects = [
  {
    id: 'portfolio-project-1',
    category: 'rohini-sector-8',
    title: 'Suburban Family Home',
    location: 'Rohini Sector 8, New Delhi',
    testimonial:
      '"GH Solar made the entire process so easy. Our energy bills have been cut in half, and we feel great about reducing our carbon footprint!"',
    rating: 5,
  },
  {
    id: 'portfolio-project-2',
    category: 'rohini-sector-8',
    title: 'Suburban Family Home',
    location: 'Rohini Sector 8, New Delhi',
    testimonial:
      '"GH Solar made the entire process so easy. Our energy bills have been cut in half, and we feel great about reducing our carbon footprint!"',
    rating: 5,
  },
  {
    id: 'portfolio-project-3',
    category: 'rohini-sector-8',
    title: 'Rural Farm & Barn',
    location: 'Rohini Sector 8, New Delhi',
    testimonial:
      '"Powering our farm with solar has been a game-changer. The team understood our unique energy needs and delivered a robust system that powers all our operations."',
    rating: 5,
  },
  {
    id: 'portfolio-project-4',
    category: 'rohini-sector-8',
    title: 'Modern Urban Residence',
    location: 'Rohini Sector 8, New Delhi',
    testimonial:
      '"The sleek, low-profile panels look amazing on our modern home. We are now energy independent and couldn\'t be happier with the result."',
    rating: 4.5,
  },
  {
    id: 'portfolio-project-5',
    category: 'rohini-sector-8',
    title: 'Community Center',
    location: 'Rohini Sector 8, New Delhi',
    testimonial:
      '"GH Solar helped our non-profit community center go green. Their guidance on grants and financing was invaluable. A true community partner."',
    rating: 5,
  },
  {
    id: 'portfolio-project-6',
    category: 'rohini-sector-8',
    title: 'Industrial Warehouse',
    location: 'Rohini Sector 8, New Delhi',
    testimonial:
      '"The scale of our warehouse roof was a challenge, but GH Solar designed a massive system that has drastically reduced our operating costs. Exceptional work!"',
    rating: 5,
  },
   {
    id: 'portfolio-project-7',
    category: 'rohini-sector-8',
    title: 'Lakefront Vacation Home',
    location: 'Rohini Sector 8, New Delhi',
    testimonial:
      '"We wanted to make our vacation home eco-friendly. GH Solar installed a fantastic system with battery backup. Now we can enjoy the lake knowing we\'re powered by the sun."',
    rating: 5,
  },
  {
    id: 'portfolio-project-8',
    category: 'rohini-sector-8',
    title: 'Boutique Hotel',
    location: 'Rohini Sector 8, New Delhi',
    testimonial:
      '"Our guests love that we\'re a green hotel. The solar installation was smooth and the aesthetic integration with our building is perfect. A great investment."',
    rating: 5,
  },
  {
    id: 'portfolio-project-9',
    category: 'rohini-sector-8',
    title: 'Factory Rooftop',
    location: 'Rohini Sector 8, New Delhi',
    testimonial:
      '"Exceptional service and a top-quality installation. Our factory is now running on clean energy, and we are seeing the benefits on our bottom line."',
    rating: 5,
  },
  {
    id: 'portfolio-project-10',
    category: 'rohini-sector-8',
    title: 'Apartment Complex',
    location: 'Rohini Sector 8, New Delhi',
    testimonial:
      '"GH Solar provided a solution for our entire apartment complex. The residents are happy with the lower bills, and we\'re proud to be a green community."',
    rating: 5,
  },
];

const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
    const stars = [];
    for (let i = 0; i < fullStars; i++) {
        stars.push(<Star key={`full-${i}`} className="text-accent fill-accent size-5" />);
    }
    if (halfStar) {
        stars.push(<StarHalf key="half" className="text-accent fill-accent size-5" />);
    }
    for (let i = 0; i < emptyStars; i++) {
        stars.push(<Star key={`empty-${i}`} className="text-accent/30 fill-accent/30 size-5" />);
    }
    return <div className="flex">{stars}</div>
}

const ProjectGrid = ({ filter }: { filter: string }) => {
  const filteredProjects = filter === 'all' ? projects : projects.filter(p => p.category === filter);
  
  if (filteredProjects.length === 0) {
    return (
        <div className="text-center text-muted-foreground py-16">
            <p className="text-lg">No projects to display in this category yet.</p>
            <p>Check back soon for updates!</p>
        </div>
    )
  }


  return (
     <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {filteredProjects.map((project, i) => {
        const projectImage = PlaceHolderImages.find(
          (img) => img.id === project.id
        );
        return (
          <ScrollReveal key={project.id} delay={i * 100}>
            <Card className="flex flex-col overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-xl group h-full">
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
                <CardDescription className="flex items-center gap-2 pt-1">
                  <MapPin className="size-4 text-muted-foreground" />
                  {project.location}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-grow flex-col">
                <blockquote className="flex-grow border-l-4 border-accent pl-4 italic text-muted-foreground">
                  {project.testimonial}
                </blockquote>
              </CardContent>
               <CardFooter className="mt-4 flex items-center">
                  {renderStars(project.rating)}
                </CardFooter>
            </Card>
          </ScrollReveal>
        );
      })}
    </div>
  );
};

export default function PortfolioPage() {
  const categories = [
    { value: 'all', label: 'All' },
    { value: 'rohini-sector-8', label: 'Rohini Sector 8' },
    { value: 'karol-bagh', label: 'Karol Bagh' },
  ];
  
  return (
    <div className="bg-background">
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <ScrollReveal className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Our Work
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              We take pride in every project we complete. Explore a selection
              of our residential, commercial, and industrial solar installations across India.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <Tabs defaultValue="all" className="mt-12 md:mt-16 w-full">
              <TabsList className="grid w-full grid-cols-3 mx-auto max-w-lg h-auto flex-wrap">
                {categories.map(category => (
                  <TabsTrigger key={category.value} value={category.value} className="capitalize py-2">
                    {category.label}
                  </TabsTrigger>
                ))}
              </TabsList>
              
              <div className="mt-8">
                {categories.map(category => (
                  <TabsContent key={category.value} value={category.value}>
                    <ProjectGrid filter={category.value} />
                  </TabsContent>
                ))}
              </div>
            </Tabs>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-card py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 text-center">
            <ScrollReveal>
              <h2 className="text-3xl font-bold tracking-tight">Inspired by Our Work?</h2>
              <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">Let's discuss how we can bring the power of solar to your home or business. Get a personalized, no-obligation quote from our experts today.</p>
               <Button asChild size="lg" className="mt-8">
                <Link href="/contact">
                  Start Your Solar Project
                </Link>
              </Button>
            </ScrollReveal>
        </div>
      </section>
    </div>
  );
}

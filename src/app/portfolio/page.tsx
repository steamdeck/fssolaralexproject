
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ScrollReveal } from '@/components/ui/scroll-reveal';

const projects = PlaceHolderImages.filter(p => p.id.startsWith('portfolio-project-')).map(p => {
    if (['portfolio-project-11', 'portfolio-project-12', 'portfolio-project-13'].includes(p.id)) {
        return {...p, category: 'naharpur'};
    }
    if (p.id.startsWith('portfolio-project-')) {
        return {...p, category: 'rohini-sector-8'};
    }
    return p;
});

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
    { value: 'naharpur', label: 'Naharpur' },
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
              <TabsList className="grid w-full grid-cols-4 mx-auto max-w-lg h-auto flex-wrap">
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

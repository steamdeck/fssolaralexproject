
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Award, Target, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ScrollReveal } from '@/components/ui/scroll-reveal';

const teamMembers = [
  {
    name: 'Priya Sharma',
    title: 'Founder & CEO',
    bio: 'With over 20 years in renewable energy, Priya founded GH Solar to make sustainable power accessible to all.',
    imageId: 'team-member-1',
  },
  {
    name: 'Rohan Mehta',
    title: 'Lead Engineer',
    bio: 'Rohan is the mastermind behind our innovative solar solutions, ensuring every system is efficient and reliable.',
    imageId: 'team-member-2',
  },
  {
    name: 'Ananya Gupta',
    title: 'Head of Operations',
    bio: 'Ananya ensures that every project, from consultation to installation, runs smoothly and exceeds client expectations.',
    imageId: 'team-member-3',
  },
  {
    name: 'Vikram Singh',
    title: 'Director of Sales',
    bio: 'Vikram and his team are dedicated to helping clients find the perfect solar solution for their needs and budget.',
    imageId: 'team-member-4',
  },
];

const companyValues = [
    { icon: <Target className="size-8 text-primary" />, value: "Sustainability" },
    { icon: <Award className="size-8 text-primary" />, value: "Innovation" },
    { icon: <Users className="size-8 text-primary" />, value: "Customer-Centricity" },
    { icon: <CheckCircle className="size-8 text-primary" />, value: "Integrity" },
];

export default function AboutPage() {
  const mainImage = PlaceHolderImages.find((img) => img.id === 'about-us-main');
  const missionImage = PlaceHolderImages.find((img) => img.id === 'about-us-mission');

  return (
    <div className="bg-background">
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <ScrollReveal className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              About GH Solar
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              We are a passionate team of experts dedicated to accelerating
              India&apos;s transition to sustainable energy, one solar panel at a time.
            </p>
          </ScrollReveal>
        </div>
      </section>
      
      {mainImage && (
        <section className="container mx-auto px-4 md:px-6">
             <ScrollReveal>
              <div className="relative h-64 w-full overflow-hidden rounded-xl shadow-lg md:h-[500px]">
                  <Image
                    src={mainImage.imageUrl}
                    alt={mainImage.description}
                    fill
                    sizes="100vw"
                    className="object-cover transition-transform duration-300 hover:scale-105"
                    data-ai-hint={mainImage.imageHint}
                  />
                </div>
             </ScrollReveal>
        </section>
      )}

      <section className="py-16 md:py-24">
        <div className="container mx-auto grid grid-cols-1 gap-12 px-4 md:grid-cols-2 md:gap-16 md:items-center md:px-6">
          <ScrollReveal>
            <div>
              <h2 className="text-3xl font-bold tracking-tight">Our Story</h2>
              <p className="mt-4 text-muted-foreground">
                GH Solar was founded in 2010 with a simple yet powerful
                mission: to make clean, renewable solar energy an easy and
                affordable choice for every Indian household and business. We saw the potential of the sun not just
                as a power source, but as a way to build a more sustainable future for
                our communities and our nation. 
              </p>
               <p className="mt-4 text-muted-foreground">
                Starting with a small team of passionate
                engineers in a small workshop in Bengaluru, we&apos;ve grown into a leading provider of solar solutions,
                having helped thousands of homeowners and businesses across the country make the switch to
                solar. Our journey has been one of innovation, dedication, and an unwavering commitment to our founding principles.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <div>
               <div className="relative h-64 w-full overflow-hidden rounded-xl shadow-lg md:h-80">
                  {missionImage && (
                    <Image
                      src={missionImage.imageUrl}
                      alt={missionImage.description}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-300 hover:scale-105"
                      data-ai-hint={missionImage.imageHint}
                    />
                  )}
                </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

       <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto grid grid-cols-1 gap-12 px-4 md:grid-cols-2 md:gap-16 md:items-center md:px-6">
           <ScrollReveal className="order-2 md:order-1">
             <div className="relative h-64 w-full overflow-hidden rounded-xl shadow-lg md:h-80">
                <Image
                    src="https://picsum.photos/seed/about-vision/800/600"
                    alt="A vision of a futuristic city in India powered by solar energy"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-300 hover:scale-105"
                    data-ai-hint="futuristic city solar"
                  />
              </div>
          </ScrollReveal>
          <ScrollReveal className="order-1 md:order-2" delay={200}>
            <div>
              <h2 className="text-3xl font-bold tracking-tight">Our Mission & Vision</h2>
              <p className="mt-4 text-muted-foreground">
                Our mission is to empower individuals and organizations to achieve
                energy independence through high-quality, reliable, and affordable
                solar technology. We are committed to delivering exceptional service,
                from initial consultation to long-term maintenance, ensuring our clients
                reap the full benefits of their investment.
              </p>
               <p className="mt-4 text-muted-foreground">
                Our vision is a world powered by clean energy, where sustainable practices are the norm. We strive to innovate
                continuously, push the boundaries of what's possible in solar technology, and to lead the charge towards a brighter, more sustainable future for generations to come.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-background py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
            <ScrollReveal className="mx-auto max-w-3xl text-center">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our Core Values</h2>
                <p className="mt-4 text-lg text-muted-foreground">The principles that guide every decision we make and action we take.</p>
            </ScrollReveal>
            <div className="mt-12 grid grid-cols-2 gap-8 sm:grid-cols-4 lg:grid-cols-4">
                {companyValues.map((item, i) => (
                    <ScrollReveal key={item.value} delay={i * 150}>
                      <div className="flex flex-col items-center text-center transition-transform duration-300 hover:scale-105">
                          <div className="flex size-16 items-center justify-center rounded-full bg-card shadow-md">
                              {item.icon}
                          </div>
                          <h3 className="mt-4 text-lg font-semibold">{item.value}</h3>
                      </div>
                    </ScrollReveal>
                ))}
            </div>
        </div>
      </section>

      <section id="team" className="bg-card py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <ScrollReveal className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Meet Our Team
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              The dedicated professionals powering our mission. We are a group of engineers, designers, and visionaries united by a passion for a sustainable future.
            </p>
          </ScrollReveal>
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {teamMembers.map((member, i) => {
              const memberImage = PlaceHolderImages.find(
                (img) => img.id === member.imageId
              );
              return (
                <ScrollReveal key={member.name} delay={i * 150}>
                  <Card className="text-center transition-transform duration-300 hover:scale-105 hover:shadow-xl bg-background h-full">
                    <CardHeader className="items-center pt-8">
                      {memberImage && (
                        <div className="relative h-32 w-32 rounded-full overflow-hidden">
                          <Image
                            src={memberImage.imageUrl}
                            alt={`Headshot of ${member.name}`}
                            fill
                            sizes="128px"
                            className="object-cover"
                            data-ai-hint={memberImage.imageHint}
                          />
                        </div>
                      )}
                      <CardTitle className="mt-4">{member.name}</CardTitle>
                      <p className="text-sm font-medium text-primary">{member.title}</p>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{member.bio}</p>
                    </CardContent>
                  </Card>
                </ScrollReveal>
              );
            })}
          </div>
           <ScrollReveal className="mt-16 text-center">
            <Button asChild size="lg">
              <Link href="/contact">Join Our Team</Link>
            </Button>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}

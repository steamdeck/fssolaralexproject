import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';

const teamMembers = [
  {
    name: 'Jane Doe',
    title: 'Founder & CEO',
    bio: 'With over 20 years in renewable energy, Jane founded Solaris Hub to make sustainable power accessible to all.',
    imageId: 'team-member-1',
  },
  {
    name: 'John Smith',
    title: 'Lead Engineer',
    bio: 'John is the mastermind behind our innovative solar solutions, ensuring every system is efficient and reliable.',
    imageId: 'team-member-2',
  },
  {
    name: 'Emily White',
    title: 'Head of Operations',
    bio: 'Emily ensures that every project, from consultation to installation, runs smoothly and exceeds client expectations.',
    imageId: 'team-member-3',
  },
  {
    name: 'Michael Brown',
    title: 'Director of Sales',
    bio: 'Michael and his team are dedicated to helping clients find the perfect solar solution for their needs and budget.',
    imageId: 'team-member-4',
  },
];

const companyValues = [
    "Sustainability", "Innovation", "Customer-Centricity", "Integrity", "Excellence"
];

export default function AboutPage() {
  const mainImage = PlaceHolderImages.find((img) => img.id === 'about-us-main');

  return (
    <div className="bg-background">
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              About Solaris Hub
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              We are a passionate team of experts dedicated to accelerating the
              world&apos;s transition to sustainable energy.
            </p>
          </div>
        </div>
      </section>
      
      {mainImage && (
        <section className="container mx-auto px-4 md:px-6">
             <div className="relative h-64 w-full overflow-hidden rounded-xl shadow-lg md:h-96">
                <Image
                  src={mainImage.imageUrl}
                  alt={mainImage.description}
                  fill
                  sizes="100vw"
                  className="object-cover"
                  data-ai-hint={mainImage.imageHint}
                />
              </div>
        </section>
      )}

      <section className="py-16 md:py-24">
        <div className="container mx-auto grid grid-cols-1 gap-12 px-4 md:grid-cols-2 md:px-6">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Our Story</h2>
            <p className="mt-4 text-muted-foreground">
              Solaris Hub was founded in 2010 with a simple yet powerful
              mission: to make clean, renewable solar energy an easy and
              affordable choice for everyone. We saw the potential of the sun not just
              as a power source, but as a way to build a more sustainable future for
              our communities and our planet. Starting with a small team of passionate
              engineers, we&apos;ve grown into a leading provider of solar solutions,
              having helped thousands of homeowners and businesses make the switch to
              solar.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Our Mission</h2>
            <p className="mt-4 text-muted-foreground">
              Our mission is to empower individuals and organizations to achieve
              energy independence through high-quality, reliable, and affordable
              solar technology. We are committed to delivering exceptional service,
              from initial consultation to long-term maintenance, ensuring our clients
              reap the full benefits of their investment. We strive to innovate
              continuously and to lead the charge towards a world powered by clean energy.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-card py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our Core Values</h2>
                <p className="mt-4 text-lg text-muted-foreground">The principles that guide every decision we make.</p>
            </div>
            <div className="mt-12 grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-5">
                {companyValues.map((value) => (
                    <div key={value} className="flex flex-col items-center text-center">
                        <div className="flex size-16 items-center justify-center rounded-full bg-background">
                            <CheckCircle className="size-8 text-primary" />
                        </div>
                        <h3 className="mt-4 font-semibold">{value}</h3>
                    </div>
                ))}
            </div>
        </div>
      </section>

      <section id="team" className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Meet Our Team
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              The dedicated professionals powering our mission.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {teamMembers.map((member) => {
              const memberImage = PlaceHolderImages.find(
                (img) => img.id === member.imageId
              );
              return (
                <Card key={member.name} className="text-center">
                  <CardHeader className="items-center">
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
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

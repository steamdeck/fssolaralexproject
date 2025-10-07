import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import {
  FileText,
  HardHat,
  Wrench,
  CircleDollarSign,
  ArrowRight,
} from 'lucide-react';

const services = [
  {
    icon: <FileText className="size-10 text-primary" />,
    title: 'Solar Consultation & Design',
    description:
      'Our experts provide a comprehensive analysis of your energy needs, property, and budget to design a custom solar panel system that maximizes your savings and efficiency. We handle all the planning and paperwork for you.',
  },
  {
    icon: <HardHat className="size-10 text-primary" />,
    title: 'Professional Installation',
    description:
      'Our certified and experienced technicians ensure a seamless, safe, and efficient installation process. We use only the highest quality materials and equipment, getting your system up and running with minimal disruption.',
  },
  {
    icon: <Wrench className="size-10 text-primary" />,
    title: 'Maintenance & Support',
    description:
      "We offer ongoing support and maintenance plans to keep your solar system operating at peak performance for its entire lifespan. Our team provides monitoring, cleaning, and prompt repairs if ever needed.",
  },
  {
    icon: <CircleDollarSign className="size-10 text-primary" />,
    title: 'Financing & Incentives',
    description:
      "Going solar is an investment. We'll help you navigate all available financing options, loans, leases, and government incentives to make your transition to clean energy as affordable as possible.",
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-background">
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Our Services
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              We offer a complete range of solar solutions to guide you every
              step of the way on your journey to energy independence.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2">
            {services.map((service) => (
              <Card key={service.title} className="flex flex-col">
                <CardHeader className="flex flex-row items-start gap-4 space-y-0">
                  <div className="flex-shrink-0">{service.icon}</div>
                  <div className="flex-1">
                    <CardTitle className="text-2xl">{service.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-card py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-4xl rounded-xl bg-primary p-8 text-center text-primary-foreground shadow-lg md:p-12">
            <h2 className="text-3xl font-bold">Ready to Go Solar?</h2>
            <p className="mt-4 text-lg text-primary-foreground/80">
              Let&apos;s start with a free, no-obligation consultation. Our team is
              ready to answer your questions and design the perfect system for you.
            </p>
            <Button asChild size="lg" variant="secondary" className="mt-8 bg-accent text-accent-foreground hover:bg-accent/90">
              <Link href="/contact">
                Get Your Free Quote <ArrowRight className="ml-2 size-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

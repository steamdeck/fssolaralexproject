
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import {
  FileText,
  HardHat,
  Wrench,
  CircleDollarSign,
  ArrowRight,
  BatteryCharging,
  BarChart
} from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const services = [
  {
    icon: <FileText className="size-10 text-primary" />,
    title: 'Solar Consultation & Design',
    description:
      'Our journey together begins with a comprehensive analysis of your energy needs, property, and financial goals. Our experts design a custom solar panel system using state-of-the-art software to maximize your savings and energy output. We handle all the complex planning and paperwork, ensuring a hassle-free start to your solar journey.',
    imageId: 'service-consultation'
  },
  {
    icon: <HardHat className="size-10 text-primary" />,
    title: 'Professional Installation',
    description:
      'Our certified and experienced technicians ensure a seamless, safe, and efficient installation process. We use only the highest quality Tier-1 panels and equipment. Our team works diligently to get your system up and running with minimal disruption to your daily life, adhering to the strictest safety standards.',
    imageId: 'service-installation'
  },
  {
    icon: <Wrench className="size-10 text-primary" />,
    title: 'Maintenance & Support',
    description:
      "We offer ongoing support and robust maintenance plans to keep your solar system operating at peak performance for its entire 25+ year lifespan. Our team provides remote system monitoring, professional cleaning, and prompt repairs, ensuring your investment is always protected.",
    imageId: 'service-maintenance'
  },
  {
    icon: <CircleDollarSign className="size-10 text-primary" />,
    title: 'Financing & Incentives',
    description:
      "Going solar is a significant investment in your future. We'll help you navigate all available financing options, including loans and leases. Our specialists are experts in finding and applying for federal, state, and local government incentives to make your transition to clean energy as affordable as possible.",
    imageId: 'service-financing'
  },
  {
    icon: <BatteryCharging className="size-10 text-primary" />,
    title: 'Battery Storage Solutions',
    description:
      "Take control of your energy with a solar battery storage system. Store excess energy generated during the day to power your home at night or during a power outage. We offer top brands like the Tesla Powerwall to provide you with true energy independence and peace of mind.",
    imageId: 'service-battery'
  },
  {
    icon: <BarChart className="size-10 text-primary" />,
    title: 'Energy-Efficiency Audits',
    description:
      "To maximize your solar savings, we can conduct a full energy-efficiency audit of your home or business. We'll identify areas where you can reduce consumption, making your solar investment even more impactful and cost-effective. Small changes can lead to big savings.",
    imageId: 'service-audit'
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
              We offer a complete, end-to-end range of solar solutions to guide you every
              step of the way on your journey to energy independence and sustainability.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const serviceImage = PlaceHolderImages.find(img => img.id === service.imageId);
              return (
                <Card key={service.title} className="flex flex-col overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-xl group">
                  {serviceImage && (
                     <div className="relative aspect-video w-full">
                       <Image
                         src={serviceImage.imageUrl}
                         alt={serviceImage.description}
                         fill
                         sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                         className="object-cover transition-transform duration-300 group-hover:scale-105"
                         data-ai-hint={serviceImage.imageHint}
                       />
                     </div>
                  )}
                  <CardHeader className="flex flex-row items-start gap-4 space-y-0 pt-6">
                    <div className="flex-shrink-0 mt-1">{service.icon}</div>
                    <div className="flex-1">
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-card py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-4xl rounded-xl bg-primary p-8 text-center text-primary-foreground shadow-lg md:p-12 transition-transform duration-300 hover:scale-105">
            <h2 className="text-3xl font-bold">Ready to Go Solar?</h2>
            <p className="mt-4 text-lg text-primary-foreground/80">
              Let&apos;s start with a free, no-obligation consultation. Our team is
              ready to answer your questions and design the perfect system for you.
            </p>
            <Button asChild size="lg" variant="secondary" className="mt-8 bg-accent text-accent-foreground hover:bg-accent/90 group">
              <Link href="/contact">
                Get Your Free Quote <ArrowRight className="ml-2 size-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

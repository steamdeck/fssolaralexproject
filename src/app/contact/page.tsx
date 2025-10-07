import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Mail, MapPin, Phone } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ScrollReveal } from '@/components/ui/scroll-reveal';

export default function ContactPage() {
  const mapImage = PlaceHolderImages.find((img) => img.id === 'contact-map');

  return (
    <div className="bg-background">
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <ScrollReveal className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Contact Us
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Have questions or ready to start your solar journey? We&apos;d love
              to hear from you.
            </p>
          </ScrollReveal>

          <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
            <ScrollReveal>
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold">Get a Free Quote</h2>
                  <p className="mt-2 text-muted-foreground">
                    Fill out the form, and one of our solar experts will get back to
                    you shortly to discuss your project.
                  </p>
                </div>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="first-name">First Name</Label>
                      <Input id="first-name" placeholder="John" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="last-name">Last Name</Label>
                      <Input id="last-name" placeholder="Doe" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john.doe@example.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" placeholder="(123) 456-7890" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your project or ask any questions..."
                      rows={5}
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full sm:w-auto">
                    Send Message
                  </Button>
                </form>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div className="space-y-8">
                  <div>
                      <h2 className="text-2xl font-bold">Our Office</h2>
                      <p className="mt-2 text-muted-foreground">
                      Visit us or get in touch directly through phone or email.
                      </p>
                  </div>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 pt-1">
                      <MapPin className="size-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Address</h3>
                      <p className="text-muted-foreground">
                        123 Solar Way, Sunville, CA 90210
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 pt-1">
                      <Phone className="size-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Phone</h3>
                      <a href="tel:+1800555SOLAR" className="text-muted-foreground transition-colors duration-300 hover:text-primary">
                        +1 (800) 555-SOLAR
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 pt-1">
                      <Mail className="size-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Email</h3>
                      <a href="mailto:contact@solarishub.com" className="text-muted-foreground transition-colors duration-300 hover:text-primary">
                        contact@solarishub.com
                      </a>
                    </div>
                  </div>
                </div>
                {mapImage && (
                  <div className="relative mt-8 h-64 w-full overflow-hidden rounded-lg shadow-md md:h-80">
                    <Image
                      src={mapImage.imageUrl}
                      alt={mapImage.description}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover transition-transform duration-300 hover:scale-105"
                      data-ai-hint={mapImage.imageHint}
                    />
                  </div>
                )}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}

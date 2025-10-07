import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { SiteHeader } from '@/components/layout/header';
import { SiteFooter } from '@/components/layout/footer';
import { Toaster } from '@/components/ui/toaster';
import { cn } from '@/lib/utils';
import { Preloader } from '@/components/layout/preloader';
import { ScrollGradientBackground } from '@/components/layout/scroll-gradient-background';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'Solaris Hub - Powering a Brighter Future',
  description:
    'Solaris Hub offers top-tier solar panel solutions, from consultation and installation to maintenance and financing. Switch to clean, renewable energy today.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          inter.variable
        )}
      >
        <Preloader />
        <ScrollGradientBackground>
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </ScrollGradientBackground>
        <Toaster />
      </body>
    </html>
  );
}

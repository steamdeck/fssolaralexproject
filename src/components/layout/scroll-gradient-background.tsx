'use client';

import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

export function ScrollGradientBackground({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Avoid division by zero on pages with no scroll
      const scrollMax = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollMax <= 0) {
        setScrollY(0);
        return;
      }
      const scrollPercent = Math.min(window.scrollY / scrollMax, 1);
      setScrollY(scrollPercent * 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Initial call to set position
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={cn(
        'relative flex min-h-dvh flex-col bg-gradient-to-b from-primary/5 via-transparent to-accent/10',
        className
      )}
      style={{
        backgroundPosition: `50% ${scrollY}%`,
        backgroundSize: '100% 400%',
        transition: 'background-position 0.5s ease-out',
      }}
    >
      {children}
    </div>
  );
}

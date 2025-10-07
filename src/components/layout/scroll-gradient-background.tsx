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
      const scrollMax = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = Math.min(window.scrollY / scrollMax, 1);
      setScrollY(scrollPercent * 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={cn(
        'relative flex min-h-dvh flex-col bg-gradient-to-br from-background via-primary/5 to-background',
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

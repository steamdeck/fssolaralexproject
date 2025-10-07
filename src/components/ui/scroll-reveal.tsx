'use client';

import { useRef } from 'react';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';
import { cn } from '@/lib/utils';

type ScrollRevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
};

export function ScrollReveal({ children, className, delay = 0 }: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useScrollReveal(ref, { threshold: 0.1 });

  return (
    <div
      ref={ref}
      className={cn(
        'scroll-reveal',
        isVisible && 'visible',
        className
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

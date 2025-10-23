'use client';

import { cn } from '@/lib/utils';

export function ScrollGradientBackground({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {

  return (
    <div
      className={cn(
        'relative flex min-h-dvh flex-col animated-gradient',
        className
      )}
    >
      {children}
    </div>
  );
}

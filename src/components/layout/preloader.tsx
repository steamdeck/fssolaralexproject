
'use client';

import { useState, useEffect } from 'react';
import { Logo } from '@/components/icons/logo';
import { cn } from '@/lib/utils';

export function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // Simulate loading time

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={cn(
        'fixed inset-0 z-[100] flex items-center justify-center bg-background transition-opacity duration-500',
        loading ? 'opacity-100' : 'opacity-0 pointer-events-none'
      )}
    >
      <div className="animate-pulse">
        <Logo width={200} />
      </div>
    </div>
  );
}

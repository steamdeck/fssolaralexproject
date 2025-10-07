'use client';

import { useState, useEffect, RefObject } from 'react';

type IntersectionObserverOptions = {
  threshold?: number | number[];
  root?: Element | null;
  rootMargin?: string;
};

export function useScrollReveal(
  ref: RefObject<Element>,
  options: IntersectionObserverOptions = {}
): boolean {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entry.target);
      }
    }, options);

    const currentElement = ref.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [ref, options]);

  return isVisible;
}

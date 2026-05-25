'use client';

import { useEffect } from 'react';

export function useScrollReveal() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Handle staggered animation if siblings exist
          const element = entry.target as HTMLElement;
          const siblings = Array.from(element.parentElement?.children || []) as HTMLElement[];
          const index = siblings.indexOf(element);
          
          setTimeout(() => {
            element.classList.add('visible');
          }, index * 100);
          
          observer.unobserve(element);
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.reveal');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return {};
}

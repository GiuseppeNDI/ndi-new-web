'use client';

import { useScrollProgress } from '@/hooks/useScrollProgress';

export default function ScrollProgress() {
  const progress = useScrollProgress();

  return (
    <div 
      className="fixed top-0 left-0 right-0 h-[2px] z-[100] pointer-events-none"
      style={{ 
        background: 'linear-gradient(to right, var(--ds-primary), color-mix(in srgb, var(--ds-primary) 60%, #c0c1ff))',
        transform: `scaleX(${progress / 100})`,
        transformOrigin: 'left'
      }}
    />
  );
}

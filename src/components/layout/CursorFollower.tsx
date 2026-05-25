'use client';

import { useEffect, useRef } from 'react';

export default function CursorFollower() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    let mouseX = 0;
    let mouseY = 0;
    let ringX = 0;
    let ringY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove);

    const animate = () => {
      if (dotRef.current) {
        dotRef.current.style.left = `${mouseX}px`;
        dotRef.current.style.top = `${mouseY}px`;
      }

      // Lerp for ring
      ringX += (mouseX - ringX) * 0.12;
      ringY += (mouseY - ringY) * 0.12;

      if (ringRef.current) {
        ringRef.current.style.left = `${ringX}px`;
        ringRef.current.style.top = `${ringY}px`;
      }

      requestAnimationFrame(animate);
    };

    const animationId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <>
      <div 
        ref={dotRef}
        className="fixed w-[6px] h-[6px] rounded-full pointer-events-none z-[10001] -translate-x-1/2 -translate-y-1/2"
        style={{ backgroundColor: 'var(--ds-primary)' }}
      />
      <div 
        ref={ringRef}
        className="fixed w-[28px] h-[28px] rounded-full pointer-events-none z-[10000] -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300"
        style={{ border: '1.5px solid var(--ds-primary)', opacity: 0.5 }}
      />
    </>
  );
}

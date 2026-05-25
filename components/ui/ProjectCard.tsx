'use client';

import React from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  gradient: string;
  icon: string;
  badge: string;
  className?: string;
  isCTA?: boolean;
  ctaText?: string;
  ctaSubText?: string;
  ctaHref?: string;
}

export default function ProjectCard({
  title,
  description,
  gradient,
  icon,
  badge,
  className = '',
  isCTA = false,
  ctaText,
  ctaSubText,
  ctaHref = '#'
}: ProjectCardProps) {
  if (isCTA) {
    return (
      <a 
        href={ctaHref}
        className={`relative group overflow-hidden rounded-xl border-2 border-dashed border-primary/25 bg-surface p-6 flex flex-col items-center justify-center text-center transition-all hover:scale-[1.01] ${className}`}
      >
        <span className="material-symbols-outlined text-primary text-4xl mb-3">chat</span>
        <h3 className="text-xl font-bold text-on-surface mb-1">{ctaText}</h3>
        <p className="text-on-surface-variant text-sm">{ctaSubText}</p>
      </a>
    );
  }

  return (
    <div className={`relative group overflow-hidden rounded-xl transition-all hover:scale-[1.01] ${className}`} style={{ background: gradient }}>
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
      
      {/* Icon Background */}
      <div className="absolute inset-0 flex items-center justify-center opacity-15">
        <span className="material-symbols-outlined text-[80px]">{icon}</span>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-ds-bg via-ds-bg/40 to-transparent" />

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-8 z-10">
        <div className="flex items-center gap-2 mb-3">
          <span className="px-2 py-0.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold uppercase">
            {badge}
          </span>
        </div>
        <h3 className="text-2xl font-bold text-on-surface mb-2">{title}</h3>
        <p className="text-on-surface-variant text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

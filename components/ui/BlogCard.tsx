'use client';

import React from 'react';

interface BlogCardProps {
  category: string;
  categoryColor: string;
  date: string;
  readTime: string;
  title: string;
  excerpt: string;
  gradient: string;
  icon: string;
  readMoreText: string;
}

export default function BlogCard({
  category,
  categoryColor,
  date,
  readTime,
  title,
  excerpt,
  gradient,
  icon,
  readMoreText
}: BlogCardProps) {
  return (
    <div className="group rounded-xl overflow-hidden bg-surface-container border border-primary/15 transition-all hover:-translate-y-1 reveal">
      {/* Cover */}
      <div 
        className="aspect-video relative flex items-center justify-center overflow-hidden"
        style={{ background: gradient }}
      >
        <span className="material-symbols-outlined text-white opacity-20 text-6xl">
          {icon}
        </span>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <span 
            className="px-2 py-0.5 rounded-full text-[10px] font-bold uppercase text-white"
            style={{ backgroundColor: categoryColor }}
          >
            {category}
          </span>
          <span className="text-on-surface-variant text-[10px] font-medium">{date} · {readTime}</span>
        </div>
        <h3 className="text-xl font-bold text-on-surface mb-3 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-on-surface-variant text-sm leading-relaxed mb-4 line-clamp-3">
          {excerpt}
        </p>
        <div 
          className="text-xs font-bold uppercase tracking-wider inline-flex items-center gap-1 cursor-pointer transition-opacity group-hover:opacity-80"
          style={{ color: categoryColor }}
        >
          {readMoreText}
        </div>
      </div>
    </div>
  );
}

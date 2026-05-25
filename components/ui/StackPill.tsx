'use client';

import React from 'react';

interface StackPillProps {
  name: string;
  icon?: React.ReactNode;
  delay?: string;
}

export default function StackPill({ name, icon, delay = '0s' }: StackPillProps) {
  return (
    <div 
      className="px-4 py-2 rounded-full bg-surface-container border border-outline-variant text-on-surface-variant text-sm font-medium flex items-center gap-2 animate-float-y"
      style={{ animationDelay: delay }}
    >
      {icon && <span className="w-4 h-4">{icon}</span>}
      {name}
      <style jsx>{`
        @keyframes float-y {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-float-y {
          animation: float-y 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}

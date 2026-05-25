'use client';

export default function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block px-3 py-1 rounded-full bg-surface-container border border-outline-variant text-on-surface-variant text-xs font-medium uppercase tracking-wider mb-4 reveal">
      {children}
    </span>
  );
}

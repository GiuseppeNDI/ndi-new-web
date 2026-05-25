'use client';

import { useTranslations } from 'next-intl';
import SectionLabel from '@/components/ui/SectionLabel';
import StackPill from '@/components/ui/StackPill';

export default function About() {
  const t = useTranslations('About');

  const techStack = {
    main: [
      { name: 'Next.js', icon: <svg viewBox="0 0 128 128" width="16" height="16" fill="currentColor"><path d="M64 0C28.7 0 0 28.7 0 64s28.7 64 64 64 64-28.7 64-64S99.3 0 64 0zm0 114.5C37.4 114.5 14.5 91.6 14.5 65s22.9-49.5 49.5-49.5 49.5 22.9 49.5 49.5-22.9 49.5-49.5 49.5zM64 18.5C48.8 18.5 35.5 31.8 35.5 47 35.5 62.2 48.8 75.5 64 75.5s28.5-13.3 28.5-28.5C92.5 31.8 79.2 18.5 64 18.5z"/></svg> },
      { name: 'React', icon: <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22c-5.523 0-10-4.477-10-10S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/></svg> },
      { name: 'TypeScript', icon: <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22c-5.523 0-10-4.477-10-10S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/></svg> },
      { name: 'Node.js', icon: <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22c-5.523 0-10-4.477-10-10S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/></svg> },
      { name: 'Python', icon: <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22c-5.523 0-10-4.477-10-10S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/></svg> },
      { name: 'PostgreSQL', icon: <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22c-5.523 0-10-4.477-10-10S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/></svg> },
      { name: 'Tailwind', icon: <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22c-5.523 0-10-4.477-10-10S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/></svg> },
      { name: 'Docker', icon: <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22c-5.523 0-10-4.477-10-10S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/></svg> },
    ],
    ai: ['Claude AI', 'OpenAI', 'n8n', 'WhatsApp API', 'Langchain'],
    tools: ['Figma', 'Git', 'Supabase', 'Vercel', 'Linux'],
  };

  return (
    <section id="nosotros" className="py-24 px-4 max-w-7xl mx-auto scroll-mt-20">
      <div className="grid lg:grid-cols-2 gap-16">
        {/* Left Column */}
        <div className="space-y-8">
          <div>
            <SectionLabel>{t('label')}</SectionLabel>
            <h2 className="text-4xl md:text-5xl font-black mb-6 reveal">
              {t('titlePart1')} <em className="text-primary not-italic">{t('titlePart2')}</em>
            </h2>
          </div>
          
          <div className="space-y-6 text-on-surface-variant leading-relaxed text-lg">
            <p className="reveal">{t('p1')}</p>
            <p className="reveal" style={{ transitionDelay: '100ms' }}>{t('p2')}</p>
            <p className="reveal" style={{ transitionDelay: '200ms' }}>{t('p3')}</p>
          </div>

          <div className="grid grid-cols-3 gap-4 reveal" style={{ transitionDelay: '300ms' }}>
            {[
              { value: '5+', label: t('stats.years') },
              { value: '20+', label: t('stats.projects') },
              { value: '3', label: t('stats.saas') },
            ].map((stat, i) => (
              <div key={i} className="p-4 rounded-2xl bg-surface-container border border-outline-variant text-center">
                <div className="text-3xl font-black text-primary mb-1">{stat.value}</div>
                <div className="text-xs font-medium text-on-surface-variant uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="relative py-8 overflow-hidden reveal" style={{ transitionDelay: '400ms' }}>
            <div className="flex gap-3 animate-marquee whitespace-nowrap">
              {['Retail', 'Restaurantes', 'Servicios', 'SUNAT', 'WhatsApp API', 'IA', 'Multi-sucursal', 'Facturación Electrónica'].map((item) => (
                <span key={item} className="px-4 py-1 rounded-full bg-surface-container border border-outline-variant text-xs font-medium text-on-surface-variant">
                  {item}
                </span>
              ))}
              {/* Duplicate for loop */}
              {['Retail', 'Restaurantes', 'Servicios', 'SUNAT', 'WhatsApp API', 'IA', 'Multi-sucursal', 'Facturación Electrónica'].map((item) => (
                <span key={`dup-${item}`} className="px-4 py-1 rounded-full bg-surface-container border border-outline-variant text-xs font-medium text-on-surface-variant">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-surface-container border-l-4 border-primary reveal" style={{ transitionDelay: '500ms' }}>
            <p className="text-xl font-medium italic text-on-surface mb-4">"{t('quote')}"</p>
            <p className="text-sm font-bold text-primary">{t('quoteAuthor')}</p>
          </div>
        </div>

        {/* Right Column */}
        <div className="relative flex flex-col justify-center space-y-12 reveal" style={{ transitionDelay: '300ms' }}>
          <div>
            <SectionLabel>{t('stackLabel')}</SectionLabel>
            <div className="flex flex-wrap gap-3 mt-6">
              {techStack.main.map((tech, i) => (
                <StackPill key={tech.name} name={tech.name} icon={tech.icon} delay={`${i * 0.2}s`} />
              ))}
            </div>
          </div>

          <div>
            <SectionLabel>{t('aiLabel')}</SectionLabel>
            <div className="flex flex-wrap gap-3 mt-6">
              {techStack.ai.map((tech, i) => (
                <StackPill key={tech} name={tech} delay={`${i * 0.2 + 0.5}s`} />
              ))}
            </div>
          </div>

          <div>
            <SectionLabel>{t('toolsLabel')}</SectionLabel>
            <div className="flex flex-wrap gap-3 mt-6">
              {techStack.tools.map((tech, i) => (
                <StackPill key={tech} name={tech} delay={`${i * 0.2 + 1}s`} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </section>
  );
}

'use client';

import { useTranslations } from 'next-intl';
import ProjectCard from '@/components/ui/ProjectCard';
import SectionLabel from '@/components/ui/SectionLabel';
import { useTranslations as useT } from 'next-intl';

export default function Projects() {
  const t = useTranslations('Projects');
  const tCommon = useTranslations('Common');

  const projects = [
    {
      id: 'pos',
      col: 'md:col-span-8 md:row-span-2',
      gradient: 'linear-gradient(135deg, #0f1f3d, #1a3a6b)',
      icon: 'point_of_sale',
      badge: 'Informativo',
    },
    {
      id: 'erp',
      col: 'md:col-span-4 md:row-span-3',
      gradient: 'linear-gradient(135deg, #0d2618, #1a4d30)',
      icon: 'account_tree',
      badge: 'Informativo',
    },
    {
      id: 'whatsapp',
      col: 'md:col-span-4 md:row-span-1',
      gradient: 'linear-gradient(135deg, #1a0d3d, #3d1a6b)',
      icon: 'smart_toy',
      badge: 'Informativo',
    },
    {
      id: 'web',
      col: 'md:col-span-4 md:row-span-1',
      gradient: 'linear-gradient(135deg, #2d1500, #5c3000)',
      icon: 'web',
      badge: 'Informativo',
    },
    {
      id: 'ai',
      col: 'md:col-span-8 md:row-span-1',
      gradient: 'linear-gradient(135deg, #001f2d, #003d5c)',
      icon: 'psychology',
      badge: 'Informativo',
    },
  ];

  return (
    <section id="proyectos" className="py-24 px-4 max-w-7xl mx-auto scroll-mt-20">
      <SectionLabel>{t('label')}</SectionLabel>
      <h2 className="text-4xl md:text-5xl font-black mb-4 reveal">
        {t('titlePart1')} <span className="text-primary">{t('titlePart2')}</span>
      </h2>
      <div className="mb-12 reveal" style={{ transitionDelay: '100ms' }}>
        <span className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">
          {t('subtag')}
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-min">
        {projects.map((p) => (
          <ProjectCard 
            key={p.id}
            className={p.col}
            title={t(`projects.${p.id}.title`)}
            description={t(`projects.${p.id}.desc`)}
            gradient={p.gradient}
            icon={p.icon}
            badge={p.badge}
          />
        ))}
        <ProjectCard 
          isCTA
          className="md:col-span-4"
          ctaText={t('ctaTitle')}
          ctaSubText={t('ctaSub')}
          ctaHref={tCommon('whatsappLink')}
        />
      </div>
    </section>
  );
}

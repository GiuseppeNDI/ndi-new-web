'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import SectionLabel from '@/components/ui/SectionLabel';

export default function FeaturedProduct() {
  const t = useTranslations('FeaturedProduct');
  const tCommon = useTranslations('Common');

  return (
    <section id="product" data-track-section="product" className="py-24 px-4 max-w-7xl mx-auto">
      <SectionLabel>{t('label')}</SectionLabel>
      <h2 className="text-4xl md:text-5xl font-black mb-12 reveal">
        {t('titlePart1')} <span className="text-primary">{t('titlePart2')}</span>
      </h2>

      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Content Card */}
        <div className="rounded-2xl border border-primary/15 bg-surface p-8 md:p-12 reveal">
          <div className="flex items-center gap-3 mb-6">
            <span className="px-2 py-0.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold uppercase">
              {t('badge')}
            </span>
            <h3 className="text-2xl font-bold text-on-surface">{t('productName')}</h3>
          </div>
          
          <p className="text-on-surface-variant leading-relaxed mb-8 text-lg">
            {t('description')}
          </p>
          
          <div className="p-4 rounded-xl bg-surface-container border-l-4 border-primary mb-8">
            <p className="text-sm font-medium text-on-surface">{t('impact')}</p>
          </div>
          
          <div className="flex flex-wrap gap-4">
            <Link 
              href={tCommon('whatsappLink')}
              className="px-6 py-3 bg-primary text-on-primary rounded-full font-bold hover:scale-105 transition-transform"
            >
              {t('cta')}
            </Link>
            <Link 
              href="#proyectos"
              className="px-6 py-3 rounded-full border border-outline-variant text-on-surface font-bold hover:bg-surface-container transition-colors"
            >
              {t('subCta')}
            </Link>
          </div>
        </div>

        {/* Visual Mockup */}
        <div className="relative reveal" style={{ transitionDelay: '200ms' }}>
          <div 
            className="rounded-xl bg-surface-high border border-primary/20 p-4 shadow-2xl"
            style={{ 
              transform: 'perspective(1000px) rotateY(-4deg) rotateX(2deg)',
              minHeight: '400px'
            }}
          >
            {/* Mockup Window Header */}
            <div className="flex items-center gap-2 mb-6">
              <div className="w-3 h-3 rounded-full bg-red-500/50" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
              <div className="w-3 h-3 rounded-full bg-green-500/50" />
              <div className="ml-4 h-4 w-32 rounded bg-surface-container opacity-50" />
            </div>

            {/* Mockup Dashboard Content */}
            <div className="space-y-6">
              <div className="grid grid-cols-3 gap-4">
                <div className="h-20 rounded-lg bg-surface-container border border-primary/10 p-3">
                  <div className="h-2 w-1/2 bg-primary/20 rounded mb-2" />
                  <div className="h-4 w-3/4 bg-primary/40 rounded" />
                </div>
                <div className="h-20 rounded-lg bg-surface-container border border-primary/10 p-3">
                  <div className="h-2 w-1/2 bg-primary/20 rounded mb-2" />
                  <div className="h-4 w-3/4 bg-primary/40 rounded" />
                </div>
                <div className="h-20 rounded-lg bg-surface-container border border-primary/10 p-3">
                  <div className="h-2 w-1/2 bg-primary/20 rounded mb-2" />
                  <div className="h-4 w-3/4 bg-primary/40 rounded" />
                </div>
              </div>

              <div className="h-48 rounded-lg bg-surface-container border border-primary/10 p-6">
                <div className="flex items-end gap-2 h-full">
                  <div className="flex-1 bg-primary/20 rounded-t h-[40%]" />
                  <div className="flex-1 bg-primary/40 rounded-t h-[70%]" />
                  <div className="flex-1 bg-primary/60 rounded-t h-[50%]" />
                  <div className="flex-1 bg-primary/30 rounded-t h-[90%]" />
                  <div className="flex-1 bg-primary/50 rounded-t h-[60%]" />
                </div>
              </div>

              <div className="space-y-3">
                <div className="h-3 w-full bg-surface-container rounded" />
                <div className="h-3 w-5/6 bg-surface-container rounded" />
                <div className="h-3 w-4/6 bg-surface-container rounded" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';

export default function Hero() {
  const t = useTranslations('Hero');
  const tCommon = useTranslations('Common');

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-24 overflow-hidden">
      {/* Ticker Background */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden opacity-[0.05] flex items-center">
        <div className="whitespace-nowrap animate-ticker text-[12rem] font-black uppercase leading-none text-on-surface">
          {t('ticker')} • {t('ticker')} • {t('ticker')} • {t('ticker')}
        </div>
      </div>

      {/* Decorative Blob */}
      <div className="absolute -top-48 -right-48 w-[600px] h-[600px] rounded-full bg-primary/10 blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <h1 className="text-6xl md:text-8xl font-black leading-[1.1] mb-8 reveal">
          {t('headlinePart1')}<br/>
          <span className="text-primary italic">{t('headlinePart2')}</span><br/>
          {t('headlinePart3')}
        </h1>
        
        <p className="text-lg md:text-xl text-on-surface-variant max-w-2xl mx-auto mb-10 reveal" style={{ transitionDelay: '100ms' }}>
          {t('subtitle')}
        </p>
        
        <div className="flex flex-col items-center gap-4 reveal" style={{ transitionDelay: '200ms' }}>
          <Link 
            href={tCommon('whatsappLink')}
            className="px-8 py-4 bg-primary text-on-primary rounded-full font-bold text-lg hover:scale-105 transition-transform flex items-center gap-2"
          >
            {t('cta')}
          </Link>
          <div className="text-xs text-on-surface-variant font-medium opacity-60">
            {t('badge')}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes ticker {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-ticker {
          animation: ticker 30s linear infinite;
        }
      `}</style>
    </section>
  );
}

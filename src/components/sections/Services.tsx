'use client';

import { useTranslations } from 'next-intl';
import SectionLabel from '@/components/ui/SectionLabel';
import Link from 'next/link';

export default function Services() {
  const t = useTranslations('Services');
  const tCommon = useTranslations('Common');

  const services = [
    { id: 'whatsapp', icon: 'smart_toy' },
    { id: 'erp', icon: 'account_tree' },
    { id: 'web', icon: 'web' },
    { id: 'saas', icon: 'inventory_2' },
    { id: 'pos', icon: 'point_of_sale' },
    { id: 'ai', icon: 'psychology' },
  ];

  const processSteps = [
    { id: 'step1', icon: 'search' },
    { id: 'step2', icon: 'terminal' },
    { id: 'step3', icon: 'rocket_launch' },
  ];

  return (
    <section id="servicios" className="py-24 px-4 bg-surface scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <SectionLabel>{t('label')}</SectionLabel>
          <h2 className="text-4xl md:text-5xl font-black reveal">
            {t('titlePart1')} <span className="text-primary">{t('titlePart2')}</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
          {services.map((s, i) => (
            <div 
              key={s.id} 
              className="p-8 rounded-2xl bg-surface-container border border-outline-variant hover:border-primary/40 transition-colors reveal group"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <span className="material-symbols-outlined text-primary text-4xl mb-4 group-hover:scale-110 transition-transform">
                {s.icon}
              </span>
              <h3 className="text-xl font-bold text-on-surface mb-2">{t(`items.${s.id}.title`)}</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                {t(`items.${s.id}.desc`)}
              </p>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative flex flex-col md:flex-row items-center justify-between gap-12 py-12">
            {/* Connector Line (Desktop) */}
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-outline-variant hidden md:block -translate-y-1/2 overflow-hidden">
              <div className="h-full w-full animate-conveyor" style={{ 
                backgroundImage: 'repeating-linear-gradient(to right, var(--ds-primary) 0, var(--ds-primary) 10px, transparent 10px, transparent 20px)' 
              }} />
            </div>

            {processSteps.map((step, i) => (
              <div key={step.id} className="relative z-10 flex flex-col items-center text-center reveal" style={{ transitionDelay: `${i * 200}ms` }}>
                <div className="w-16 h-16 rounded-full bg-surface border-2 border-primary text-primary flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(192,193,255,0.3)]">
                  <span className="material-symbols-outlined text-3xl">{step.icon}</span>
                </div>
                <div className="text-sm font-bold text-primary uppercase mb-2">0{i+1}</div>
                <h3 className="text-xl font-bold text-on-surface mb-2">{t(`process.${step.id}.title`)}</h3>
                <p className="text-on-surface-variant text-sm max-w-xs">
                  {t(`process.${step.id}.desc`)}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-24 reveal">
          <Link 
            href={tCommon('whatsappLink')}
            className="inline-block px-10 py-4 bg-primary text-on-primary rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-lg"
          >
            {t('cta')}
          </Link>
        </div>
      </div>

      <style jsx>{`
        @keyframes conveyor {
          0% { transform: translateX(-20px); }
          100% { transform: translateX(0); }
        }
        .animate-conveyor {
          animation: conveyor 1s linear infinite;
          width: 200%;
        }
      `}</style>
    </section>
  );
}

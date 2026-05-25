'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';

export default function Footer() {
  const t = useTranslations('Footer');
  const tCommon = useTranslations('Common');

  return (
    <footer className="py-12 px-4 border-t border-outline-variant bg-surface">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col items-center md:items-start gap-2">
          <div className="flex items-center gap-3">
            <Logo size={32} />
            <span className="font-manrope font-extrabold text-xl text-on-surface">NDI</span>
          </div>
          <p className="text-on-surface-variant text-sm">{t('available')}</p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 text-sm font-medium text-on-surface-variant">
          <a href={`mailto:${tCommon('email')}`} className="hover:text-primary transition-colors">Email</a>
          <a href={tCommon('whatsappLink')} className="hover:text-primary transition-colors">WhatsApp</a>
          <a href="#" className="hover:text-primary transition-colors">LinkedIn</a>
          <a href={`tel:${tCommon('phone')}`} className="hover:text-primary transition-colors">Teléfono</a>
        </div>

        <div className="flex flex-col items-center md:items-end gap-2 text-right">
          <p className="text-sm text-on-surface-variant">{t('copyright')}</p>
          <div className="flex gap-4 text-xs text-on-surface-variant">
            <a href="#" className="hover:text-primary transition-colors">{t('privacy')}</a>
            <span>{t('location')}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

function Logo({ size }: { size: number }) {
  const [logoError, setLogoError] = React.useState(false);
  return (
    <>
      {logoError ? (
        <span className="font-manrope font-extrabold text-primary" style={{ fontSize: '1.5rem' }}>NDI</span>
      ) : (
        <img 
          src="/logo-ndi.png" 
          alt="NDI" 
          width={size * 3} 
          height={size} 
          onError={() => setLogoError(true)} 
          className="object-contain"
        />
      )}
    </>
  );
}

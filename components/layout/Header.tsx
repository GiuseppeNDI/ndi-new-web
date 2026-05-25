'use client';
import { useState } from 'react';

import { useState } from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations('Navigation');
  const pathname = usePathname();
  const router = useRouter();

  const navItems = [
    { id: 'home', icon: 'home', href: '/' },
    { id: 'services', icon: 'design_services', href: '#servicios' },
    { id: 'projects', icon: 'grid_view', href: '#proyectos' },
    { id: 'about', icon: 'groups', href: '#nosotros' },
    { id: 'blog', icon: 'edit_note', href: '#blog' },
    { id: 'contact', icon: 'mail', href: '#contacto' },
  ];

  const currentLocale = pathname.split('/')[1];
  const nextLocale = currentLocale === 'es' ? 'en' : 'es';

  const handleLanguageChange = () => {
    const newPath = pathname.replace(`/${currentLocale}`, `/${nextLocale}`);
    router.push(newPath);
  };

  return (
    <header className="xl:hidden fixed top-0 left-0 right-0 z-50 bg-surface border-b border-outline-variant">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Logo size={32} />
          <span className="font-manrope font-extrabold text-lg text-on-surface">NDI</span>
        </div>

        <div className="flex items-center gap-2">
          <button 
            onClick={handleLanguageChange}
            className="flex items-center gap-2 p-2 rounded-full bg-surface-container border border-outline-variant text-xs font-bold text-on-surface hover:text-primary transition-colors"
          >
            <span className="material-symbols-outlined text-sm">translate</span>
            <span className="uppercase">{currentLocale}</span>
          </button>
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-lg bg-surface-container border border-outline-variant text-on-surface hover:text-primary transition-colors"
          >
            <span className="material-symbols-outlined">
              {isOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`absolute top-16 left-0 right-0 bg-surface border-b border-outline-variant transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
        <nav className="p-4 space-y-2">
          {navItems.map((item) => (
            <Link 
              key={item.id} 
              href={item.href} 
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-3 p-3 rounded-xl text-on-surface-variant hover:bg-surface-container hover:text-primary transition-colors"
            >
              <span className="material-symbols-outlined">{item.icon}</span>
              <span className="font-medium">{t(item.id)}</span>
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

function Logo({ size }: { size: number }) {
  const [logoError, setLogoError] = useState(false);
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

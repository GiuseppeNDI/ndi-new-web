'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';

export default function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const t = useTranslations('Navigation');
  const tCommon = useTranslations('Common');
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
    <aside 
      className={`fixed left-0 top-0 h-screen transition-all duration-300 z-50 hidden xl:flex flex-col border-r border-outline-variant bg-surface`}
      style={{ width: isCollapsed ? 'var(--sidebar-w-collapsed, 4rem)' : 'var(--sidebar-w)' }}
    >
      <style jsx>{`
        :root { --sidebar-w-collapsed: 4rem; }
      `}</style>

      {/* Header / Logo */}
      <div className={`p-6 flex items-center ${isCollapsed ? 'justify-center' : 'justify-between'}`}>
        <div className="flex items-center gap-3 overflow-hidden">
          <Logo size={isCollapsed ? 28 : 36} />
          {!isCollapsed && (
            <span className="font-manrope font-extrabold text-sm leading-tight text-on-surface whitespace-nowrap">
              Negocios Digitales<br/>Inteligentes
            </span>
          )}
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 py-4 space-y-2">
        {navItems.map((item) => (
          <Link 
            key={item.id} 
            href={item.href} 
            className={`flex items-center gap-3 p-3 rounded-xl transition-colors hover:bg-surface-container group ${
              pathname.includes(item.id) ? 'bg-surface-container text-primary' : 'text-on-surface-variant'
            }`}
          >
            <span className="material-symbols-outlined group-hover:text-primary transition-colors">
              {item.icon}
            </span>
            {!isCollapsed && <span className="text-sm font-medium">{t(item.id)}</span>}
          </Link>
        ))}
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-outline-variant space-y-4">
        <div className={`flex items-center gap-3 ${isCollapsed ? 'justify-center' : ''}`}>
          <button 
            onClick={handleLanguageChange}
            className="flex items-center gap-2 p-2 rounded-full bg-surface-container border border-outline-variant text-xs font-bold text-on-surface hover:text-primary transition-colors"
          >
            <span className="material-symbols-outlined text-sm">translate</span>
            {!isCollapsed && <span className="uppercase">{currentLocale}</span>}
          </button>
        </div>
        
        {!isCollapsed && (
          <div className="flex justify-center gap-4 text-on-surface-variant">
             <a href="#" className="hover:text-primary transition-colors"><span className="material-symbols-outlined text-xl">public</span></a>
             <a href="#" className="hover:text-primary transition-colors"><span className="material-symbols-outlined text-xl">branding_corporate</span></a>
          </div>
        )}
      </div>

      {/* Collapse Toggle */}
      <button 
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="absolute -right-3 top-12 w-6 h-6 bg-primary text-on-primary rounded-full flex items-center justify-center shadow-md hover:scale-110 transition-transform"
      >
        <span className={`material-symbols-outlined text-xs transition-transform duration-300 ${isCollapsed ? 'rotate-180' : ''}`}>
          chevron_left
        </span>
      </button>
    </aside>
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

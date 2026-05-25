import { Inter, Manrope } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import './globals.css';
import Sidebar from '@/components/layout/Sidebar';
import Header from '@/components/layout/Header';
import ScrollProgress from '@/components/layout/ScrollProgress';
import CursorFollower from '@/components/layout/CursorFollower';
import WhatsAppFloat from '@/components/layout/WhatsAppFloat';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const manrope = Manrope({ subsets: ['latin'], variable: '--font-manrope' });

export async function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'es' }];
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  
  if (locale === 'es') {
    return {
      title: "NDI — Automatización, ERP y SaaS para empresas en Lima",
      description: "Automatizamos procesos con WhatsApp API oficial, desarrollamos ERP a medida y plataformas SaaS. Lima, Perú.",
      keywords: "automatización whatsapp, ERP peru, SaaS inventario, POS inteligente, desarrollo web lima",
    };
  } else {
    return {
      title: "NDI — Automation, ERP and SaaS for businesses in Lima",
      description: "We automate processes with official WhatsApp API, develop custom ERP and SaaS platforms. Lima, Peru.",
    };
  }
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  
  // Validate that the incoming `locale` parameter is valid
  const locales = ['en', 'es'];
  if (!locales.includes(locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale} className={`${inter.variable} ${manrope.variable}`}>
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
      </head>
      <body className="bg-ds-bg text-on-surface">
        <NextIntlClientProvider messages={messages}>
          <ScrollProgress />
          <CursorFollower />
          <WhatsAppFloat />
          <Header />
          <Sidebar />
          <main className="transition-all duration-300 xl:pl-[var(--sidebar-w)]">
            {children}
          </main>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

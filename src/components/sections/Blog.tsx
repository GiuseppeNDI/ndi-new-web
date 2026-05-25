'use client';

import { useTranslations } from 'next-intl';
import BlogCard from '@/components/ui/BlogCard';
import SectionLabel from '@/components/ui/SectionLabel';

export default function Blog() {
  const t = useTranslations('Blog');

  const posts = [
    {
      id: 'erp',
      category: t('posts.erp.category'),
      categoryColor: 'var(--ds-primary)',
      date: t('posts.erp.date'),
      readTime: t('posts.erp.readTime'),
      title: t('posts.erp.title'),
      excerpt: t('posts.erp.excerpt'),
      gradient: 'linear-gradient(135deg, #0f1f3d, #1a3a6b)',
      icon: 'account_tree',
      readMoreText: t('posts.erp.readMore'),
    },
    {
      id: 'whatsapp',
      category: t('posts.whatsapp.category'),
      categoryColor: '#10b981',
      date: t('posts.whatsapp.date'),
      readTime: t('posts.whatsapp.readTime'),
      title: t('posts.whatsapp.title'),
      excerpt: t('posts.whatsapp.excerpt'),
      gradient: 'linear-gradient(135deg, #0d2618, #1a4d30)',
      icon: 'smart_toy',
      readMoreText: t('posts.whatsapp.readMore'),
    },
    {
      id: 'saas',
      category: t('posts.saas.category'),
      categoryColor: '#f59e0b',
      date: t('posts.saas.date'),
      readTime: t('posts.saas.readTime'),
      title: t('posts.saas.title'),
      excerpt: t('posts.saas.excerpt'),
      gradient: 'linear-gradient(135deg, #2d1500, #5c3000)',
      icon: 'inventory_2',
      readMoreText: t('posts.saas.readMore'),
    },
  ];

  return (
    <section id="blog" className="py-24 px-4 bg-surface scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <SectionLabel>{t('label')}</SectionLabel>
            <h2 className="text-4xl md:text-5xl font-black reveal">
              {t('titlePart1')} <span className="text-primary">{t('titlePart2')}</span>
            </h2>
          </div>
          <a 
            href="#blog" 
            className="text-sm font-bold text-primary hover:underline reveal" 
            style={{ transitionDelay: '100ms' }}
          >
            {t('viewAll')} →
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <BlogCard key={post.id} {...post} />
          ))}
        </div>
      </div>
    </section>
  );
}

'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import SectionLabel from '@/components/ui/SectionLabel';

export default function Contact() {
  const t = useTranslations('Contact');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    empresa: '',
    servicio: '',
    mensaje: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ nombre: '', email: '', empresa: '', servicio: '', mensaje: '' });
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <section id="contacto" className="py-24 px-4 max-w-3xl mx-auto scroll-mt-20">
      <div className="text-center mb-12">
        <SectionLabel>{t('label') || 'Contacto'}</SectionLabel>
        <h2 className="text-4xl md:text-5xl font-black reveal">{t('title')}</h2>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6 reveal">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-2">
            <label className="text-xs font-bold text-on-surface-variant uppercase ml-1">{t('fields.name')}</label>
            <input 
              required
              type="text"
              className="p-4 rounded-xl bg-surface-container border border-outline-variant text-on-surface focus:border-primary outline-none transition-colors"
              value={formData.nombre}
              onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-xs font-bold text-on-surface-variant uppercase ml-1">{t('fields.email')}</label>
            <input 
              required
              type="email"
              className="p-4 rounded-xl bg-surface-container border border-outline-variant text-on-surface focus:border-primary outline-none transition-colors"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-xs font-bold text-on-surface-variant uppercase ml-1">{t('fields.company')}</label>
          <input 
            type="text"
            className="p-4 rounded-xl bg-surface-container border border-outline-variant text-on-surface focus:border-primary outline-none transition-colors"
            value={formData.empresa}
            onChange={(e) => setFormData({ ...formData, empresa: e.target.value })}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-xs font-bold text-on-surface-variant uppercase ml-1">{t('fields.service')}</label>
          <select 
            required
            className="p-4 rounded-xl bg-surface-container border border-outline-variant text-on-surface focus:border-primary outline-none transition-colors appearance-none"
            value={formData.servicio}
            onChange={(e) => setFormData({ ...formData, servicio: e.target.value })}
          >
            <option value="">Seleccione un servicio</option>
            {t('fields.servicesList').map((s: string) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-xs font-bold text-on-surface-variant uppercase ml-1">{t('fields.message')}</label>
          <textarea 
            required
            rows={6}
            className="p-4 rounded-xl bg-surface-container border border-outline-variant text-on-surface focus:border-primary outline-none transition-colors resize-none"
            value={formData.mensaje}
            onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
          />
        </div>

        <button 
          disabled={status === 'loading'}
          className={`w-full py-4 rounded-full font-bold text-lg transition-all flex items-center justify-center gap-2 ${
            status === 'success' ? 'bg-green-500 text-white' : 
            status === 'error' ? 'bg-red-500 text-white' : 
            'bg-primary text-on-primary hover:scale-[1.02]'
          }`}
        >
          {status === 'loading' && <span className="animate-spin material-symbols-outlined">sync</span>}
          {status === 'idle' && t('submit')}
          {status === 'loading' && t('sending')}
          {status === 'success' && t('success')}
          {status === 'error' && t('error')}
        </button>
      </form>
    </section>
  );
}

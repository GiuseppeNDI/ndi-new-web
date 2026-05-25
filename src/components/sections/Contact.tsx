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
        <SectionLabel>{t('label')}</SectionLabel>
        <h2

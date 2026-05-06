'use client';

import Image from 'next/image';
import { useState } from 'react';
import { CheckCircle, Clock, Mail, MapPin, Phone, Send } from 'lucide-react';
import { useLocale, useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import { getLocalizedPageContent } from '@/content/page-content';

export async function generateMetadata(props: { params: Promise<{ locale: string }> }) {
  const params = await props.params;
  const t = await getTranslations({ locale: params.locale, namespace: 'Contact' });
  return { title: t('title') };
}

export default function ContactPage() {
  const locale = useLocale();
  const t = useTranslations('Contact');
  const copy = getLocalizedPageContent(locale).contact;
  const [form, setForm] = useState({ name: '', email: '', company: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [event.target.name]: event.target.value });
    if (error) setError(null);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          company: form.company,
          message: form.message,
          // subject is not in the schema, but we can include it or just name/email/message
        }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error?.[0]?.message || data.error || 'Failed to send message');
      }

      setSubmitted(true);
    } catch (err: any) {
      console.error('Submission error:', err);
      setError(err.message || 'Something went wrong. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full pt-20">
      <section className="relative h-72 md:h-80 flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-contact.jpg"
            alt={copy.heroAlt}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-[#0d2e10]/80" />
        </div>
        <div className="relative z-10 container mx-auto px-4 md:px-8 max-w-7xl">
          <p className="text-accent text-sm font-bold tracking-widest uppercase mb-3">{t('tag')}</p>
          <h1 className="text-4xl md:text-6xl font-bold text-white">{t('title')}</h1>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            <div className="lg:col-span-2 space-y-10">
              <div>
                <p className="text-accent font-bold tracking-widest uppercase text-sm mb-3">{copy.infoTag}</p>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  {copy.infoTitleLines[0]}
                  <br />
                  {copy.infoTitleLines[1]}
                </h2>
                <p className="text-muted-foreground leading-relaxed">{copy.infoDesc}</p>
              </div>

              {copy.offices.map((office, index) => (
                <div key={office.type} className={`rounded-2xl p-6 border space-y-4 ${index === 0 ? 'bg-primary text-white border-transparent' : 'bg-[#F5F5F5] border-border/40'}`}>
                  <h3 className={`font-bold text-lg ${index === 0 ? 'text-white' : 'text-foreground'}`}>{office.type}</h3>
                  <div className="space-y-3">
                    <div className={`flex items-start gap-3 text-sm ${index === 0 ? 'text-white/80' : 'text-muted-foreground'}`}>
                      <MapPin className={`w-4 h-4 shrink-0 mt-0.5 ${index === 0 ? 'text-accent' : 'text-primary'}`} />
                      <span className="whitespace-pre-line">{office.address}</span>
                    </div>
                    <div className={`flex items-center gap-3 text-sm ${index === 0 ? 'text-white/80' : 'text-muted-foreground'}`}>
                      <Phone className={`w-4 h-4 shrink-0 ${index === 0 ? 'text-accent' : 'text-primary'}`} />
                      {office.phone}
                    </div>
                    <div className={`flex items-center gap-3 text-sm ${index === 0 ? 'text-white/80' : 'text-muted-foreground'}`}>
                      <Mail className={`w-4 h-4 shrink-0 ${index === 0 ? 'text-accent' : 'text-primary'}`} />
                      {office.email}
                    </div>
                    <div className={`flex items-center gap-3 text-sm ${index === 0 ? 'text-white/80' : 'text-muted-foreground'}`}>
                      <Clock className={`w-4 h-4 shrink-0 ${index === 0 ? 'text-accent' : 'text-primary'}`} />
                      {office.hours}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="lg:col-span-3">
              {submitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-20 bg-[#F5F5F5] rounded-2xl px-8">
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">{copy.successTitle}</h3>
                  <p className="text-muted-foreground max-w-sm">{copy.successDesc}</p>
                </div>
              ) : (
                <div className="bg-[#F5F5F5] rounded-2xl p-8 md:p-10">
                  <h3 className="text-2xl font-bold text-foreground mb-8">{copy.formTitle}</h3>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-foreground mb-2">
                          {t('form_name')} <span className="text-red-500">*</span>
                        </label>
                        <input
                          name="name"
                          type="text"
                          required
                          value={form.name}
                          onChange={handleChange}
                          placeholder="John Doe"
                          className="w-full h-12 px-4 bg-white border border-border rounded-xl text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-foreground mb-2">
                          {copy.emailLabel} <span className="text-red-500">*</span>
                        </label>
                        <input
                          name="email"
                          type="email"
                          required
                          value={form.email}
                          onChange={handleChange}
                          placeholder="john@company.com"
                          className="w-full h-12 px-4 bg-white border border-border rounded-xl text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">{copy.companyLabel}</label>
                      <input
                        name="company"
                        type="text"
                        value={form.company}
                        onChange={handleChange}
                        placeholder={copy.companyPlaceholder}
                        className="w-full h-12 px-4 bg-white border border-border rounded-xl text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">
                        {t('form_subject')} <span className="text-red-500">*</span>
                      </label>
                      <select
                        name="subject"
                        required
                        value={form.subject}
                        onChange={handleChange}
                        className="w-full h-12 px-4 bg-white border border-border rounded-xl text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all appearance-none"
                      >
                        <option value="">{copy.subjectPlaceholder}</option>
                        {copy.subjects.map((subject) => (
                          <option key={subject} value={subject}>
                            {subject}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">
                        {copy.messageLabel} <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        name="message"
                        required
                        rows={5}
                        value={form.message}
                        onChange={handleChange}
                        placeholder={copy.messagePlaceholder}
                        className="w-full px-4 py-3 bg-white border border-border rounded-xl text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                      />
                    </div>

                    {error && (
                      <div className="p-4 bg-red-50 border border-red-100 rounded-xl flex items-start gap-3">
                        <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                          <span className="text-white text-xs font-bold">!</span>
                        </div>
                        <p className="text-sm text-red-600 font-medium leading-tight">{error}</p>
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full h-12 bg-primary hover:bg-primary/90 disabled:bg-primary/60 text-white font-bold rounded-xl flex items-center justify-center gap-2 transition-colors text-base"
                    >
                      {loading ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          {copy.loadingText}
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          {copy.submitText}
                        </>
                      )}
                    </button>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F5F5F5] py-16">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="w-full h-72 rounded-2xl overflow-hidden bg-primary/10 flex items-center justify-center border border-border/40">
            <div className="text-center">
              <MapPin className="w-12 h-12 text-primary mx-auto mb-3" />
              <p className="text-foreground font-bold text-lg">{copy.mapTitle}</p>
              <p className="text-muted-foreground text-sm">{copy.mapAddress}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

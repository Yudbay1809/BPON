'use client';

import { useState } from 'react';
import { CheckCircle, Send } from 'lucide-react';
import { useTranslations } from 'next-intl';

type ContactFormProps = {
  copy: {
    successTitle: string;
    successDesc: string;
    formTitle: string;
    emailLabel: string;
    companyLabel: string;
    companyPlaceholder: string;
    subjectPlaceholder: string;
    subjects: readonly string[];
    messageLabel: string;
    messagePlaceholder: string;
    loadingText: string;
    submitText: string;
  };
};

export function ContactForm({ copy }: ContactFormProps) {
  const t = useTranslations('Contact');
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

  if (submitted) {
    return (
      <div className="h-full flex flex-col items-center justify-center text-center py-20 bg-[#F5F5F5] rounded-2xl px-8">
        <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-6">
          <CheckCircle className="w-10 h-10 text-primary" />
        </div>
        <h3 className="text-2xl font-bold text-foreground mb-3">{copy.successTitle}</h3>
        <p className="text-muted-foreground max-w-sm">{copy.successDesc}</p>
      </div>
    );
  }

  return (
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
  );
}

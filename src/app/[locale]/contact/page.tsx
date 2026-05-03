'use client';

import Image from 'next/image';
import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react';

export default function ContactPage() {
  const t = useTranslations('Contact');
  const [form, setForm] = useState({ name: '', email: '', company: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    await new Promise(res => setTimeout(res, 1500));
    setSubmitted(true);
    setLoading(false);
  };

  const offices = [
    {
      type: 'Kantor Pusat',
      address: 'Gedung BPON Tower Lt. 15\nJl. Jend. Sudirman Kav. 1\nJakarta Pusat 10220',
      phone: '+62 21 1234 5678',
      email: 'info@bpon.co.id',
      hours: 'Sen–Jum: 08:00–17:00 WIB',
    },
    {
      type: 'Kantor Regional Sumatera',
      address: 'Jl. Sudirman No. 88\nPalembang 30113\nSumatera Selatan',
      phone: '+62 711 123 4567',
      email: 'sumatra@bpon.co.id',
      hours: 'Sen–Jum: 08:00–17:00 WIB',
    },
    {
      type: 'Kantor Regional Kalimantan',
      address: 'Jl. Ahmad Yani Km. 5\nBalikpapan 76114\nKalimantan Timur',
      phone: '+62 542 123 456',
      email: 'kaltim@bpon.co.id',
      hours: 'Sen–Jum: 08:00–17:00 WITA',
    },
  ];

  const subjects = [
    'Pertanyaan Umum',
    'Penawaran Produk & Harga',
    'Kerjasama & Kemitraan',
    'Investor Relations',
    'Media & Press',
    'Sustainability & ESG',
    'Karir & Rekrutmen',
    'Lainnya',
  ];

  return (
    <div className="w-full pt-20">

      {/* PAGE HERO */}
      <section className="relative h-72 md:h-80 flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000"
            alt="Contact BPON"
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

      {/* MAIN CONTENT */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">

            {/* CONTACT INFO */}
            <div className="lg:col-span-2 space-y-10">
              <div>
                <p className="text-accent font-bold tracking-widest uppercase text-sm mb-3">Info Kontak</p>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Kami Siap
                  <br />Membantu Anda
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Apakah Anda memiliki pertanyaan tentang produk, ingin bermitra, atau sekadar ingin tahu lebih banyak tentang BPON? Tim kami siap membantu.
                </p>
              </div>

              {offices.map((office, i) => (
                <div key={i} className={`rounded-2xl p-6 border space-y-4 ${i === 0 ? 'bg-primary text-white border-transparent' : 'bg-[#F5F5F5] border-border/40'}`}>
                  <h3 className={`font-bold text-lg ${i === 0 ? 'text-white' : 'text-foreground'}`}>{office.type}</h3>
                  <div className="space-y-3">
                    <div className={`flex items-start gap-3 text-sm ${i === 0 ? 'text-white/80' : 'text-muted-foreground'}`}>
                      <MapPin className={`w-4 h-4 shrink-0 mt-0.5 ${i === 0 ? 'text-accent' : 'text-primary'}`} />
                      <span className="whitespace-pre-line">{office.address}</span>
                    </div>
                    <div className={`flex items-center gap-3 text-sm ${i === 0 ? 'text-white/80' : 'text-muted-foreground'}`}>
                      <Phone className={`w-4 h-4 shrink-0 ${i === 0 ? 'text-accent' : 'text-primary'}`} />
                      {office.phone}
                    </div>
                    <div className={`flex items-center gap-3 text-sm ${i === 0 ? 'text-white/80' : 'text-muted-foreground'}`}>
                      <Mail className={`w-4 h-4 shrink-0 ${i === 0 ? 'text-accent' : 'text-primary'}`} />
                      {office.email}
                    </div>
                    <div className={`flex items-center gap-3 text-sm ${i === 0 ? 'text-white/80' : 'text-muted-foreground'}`}>
                      <Clock className={`w-4 h-4 shrink-0 ${i === 0 ? 'text-accent' : 'text-primary'}`} />
                      {office.hours}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CONTACT FORM */}
            <div className="lg:col-span-3">
              {submitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-20 bg-[#F5F5F5] rounded-2xl px-8">
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">Pesan Terkirim!</h3>
                  <p className="text-muted-foreground max-w-sm">
                    Terima kasih telah menghubungi kami. Tim BPON akan merespons pesan Anda dalam 1–2 hari kerja.
                  </p>
                </div>
              ) : (
                <div className="bg-[#F5F5F5] rounded-2xl p-8 md:p-10">
                  <h3 className="text-2xl font-bold text-foreground mb-8">Kirim Pesan</h3>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-foreground mb-2">
                          Nama Lengkap <span className="text-red-500">*</span>
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
                          Email <span className="text-red-500">*</span>
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
                      <label className="block text-sm font-semibold text-foreground mb-2">Perusahaan</label>
                      <input
                        name="company"
                        type="text"
                        value={form.company}
                        onChange={handleChange}
                        placeholder="Nama perusahaan Anda"
                        className="w-full h-12 px-4 bg-white border border-border rounded-xl text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">
                        Subjek <span className="text-red-500">*</span>
                      </label>
                      <select
                        name="subject"
                        required
                        value={form.subject}
                        onChange={handleChange}
                        className="w-full h-12 px-4 bg-white border border-border rounded-xl text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all appearance-none"
                      >
                        <option value="">Pilih topik pesan...</option>
                        {subjects.map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">
                        Pesan <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        name="message"
                        required
                        rows={5}
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Tuliskan pesan Anda di sini..."
                        className="w-full px-4 py-3 bg-white border border-border rounded-xl text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full h-12 bg-primary hover:bg-primary/90 disabled:bg-primary/60 text-white font-bold rounded-xl flex items-center justify-center gap-2 transition-colors text-base"
                    >
                      {loading ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Mengirim...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          Kirim Pesan
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

      {/* MAP PLACEHOLDER */}
      <section className="bg-[#F5F5F5] py-16">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="w-full h-72 rounded-2xl overflow-hidden bg-primary/10 flex items-center justify-center border border-border/40">
            <div className="text-center">
              <MapPin className="w-12 h-12 text-primary mx-auto mb-3" />
              <p className="text-foreground font-bold text-lg">Gedung BPON Tower</p>
              <p className="text-muted-foreground text-sm">Jl. Jend. Sudirman Kav. 1, Jakarta Pusat</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

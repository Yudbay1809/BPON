import Image from 'next/image';
import { Link } from '@/i18n/routing';
import { getTranslations } from 'next-intl/server';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { ArrowRight, Leaf, Factory, Truck, TrendingUp } from 'lucide-react';

export default async function BusinessPage(props: { params: Promise<{ locale: string }> }) {
  const params = await props.params;
  const t = await getTranslations({ locale: params.locale, namespace: 'Business' });
  const businesses = [
    {
      icon: Leaf,
      title: 'Divisi Perkebunan',
      areas: ['Sumatera Selatan', 'Kalimantan Tengah', 'Kalimantan Timur', 'Riau', 'Papua Barat'],
      area: '120.000 ha',
      output: '2,8 juta ton TBS/tahun',
      highlights: [
        'Sertifikasi RSPO & ISPO di seluruh unit kebun',
        'Program peremajaan sawit rakyat (PSR) bermitra dengan 12.000 petani',
        'Sistem irigasi modern berbasis IoT untuk optimasi produksi',
        'Pembibitan bersertifikat dengan produktivitas 30-35 ton TBS/ha/tahun',
      ],
      imgSrc: 'https://images.unsplash.com/photo-1542845876-0bf84b80b067?auto=format&fit=crop&q=80&w=1000',
    },
    {
      icon: Factory,
      title: 'Divisi Pengolahan',
      areas: ['8 Pabrik PKS', '2 Refinery', '1 Oleochemical Plant'],
      area: '2,5 juta ton/tahun',
      output: 'CPO, PKO, Olein, Stearin',
      highlights: [
        'Teknologi pengolahan modern dengan efisiensi ekstrasi OER 23-25%',
        'Sistem IPAL (pengolahan limbah cair) berstandar internasional',
        'Fasilitas laboratorium QC terakreditasi ISO/IEC 17025',
        'Kapasitas refinery 1 juta ton per tahun untuk produk hilir',
      ],
      imgSrc: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1000',
    },
    {
      icon: Truck,
      title: 'Divisi Distribusi',
      areas: ['40+ negara tujuan ekspor', '15 terminal tangki'],
      area: '40+ Negara',
      output: 'Ekspor & Domestik',
      highlights: [
        'Jaringan distribusi terintegrasi dari lahan hingga pelabuhan',
        'Armada tanker khusus CPO berkapasitas total 500.000 DWT',
        'Fasilitas tangki penyimpanan 300.000 ton di 4 pelabuhan utama',
        'Sistem manajemen rantai pasok (SCM) real-time berbasis digital',
      ],
      imgSrc: 'https://images.unsplash.com/photo-1494412519320-aa613dfb7738?auto=format&fit=crop&q=80&w=1000',
    },
  ];

  const financials = [
    { label: 'Total Pendapatan 2024', value: 'Rp 28,5 T' },
    { label: 'EBITDA Margin', value: '24,8%' },
    { label: 'Total Aset', value: 'Rp 65,2 T' },
    { label: 'Pertumbuhan YoY', value: '12,3%' },
  ];

  return (
    <div className="w-full pt-20">

      {/* PAGE HERO */}
      <section className="relative h-72 md:h-96 flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=2000"
            alt="BPON Operations"
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

      {/* FINANCIAL HIGHLIGHTS */}
      <section className="bg-primary">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {financials.map((f, i) => (
              <div key={i} className="py-6 px-6 text-center border-r border-white/20 last:border-0">
                <p className="text-2xl md:text-3xl font-bold text-accent">{f.value}</p>
                <p className="text-white/70 text-sm mt-1">{f.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BUSINESS UNITS */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <p className="text-accent font-bold tracking-widest uppercase text-sm mb-3">Unit Bisnis</p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">Tiga Pilar Bisnis Utama</h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-lg">
              Operasional kami yang terintegrasi dari hulu ke hilir memastikan kontrol kualitas dan efisiensi di setiap tahap.
            </p>
          </div>

          <div className="space-y-16">
            {businesses.map((biz, i) => (
              <div key={i} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${i % 2 !== 0 ? 'lg:direction-rtl' : ''}`}>
                <div className={`relative h-[400px] rounded-2xl overflow-hidden shadow-xl ${i % 2 !== 0 ? 'lg:order-last' : ''}`}>
                  <Image src={biz.imgSrc} alt={biz.title} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 flex gap-4">
                    <div className="bg-white/90 backdrop-blur-sm rounded-xl px-4 py-3 text-center">
                      <p className="text-primary font-bold text-lg">{biz.area}</p>
                      <p className="text-xs text-muted-foreground">Kapasitas</p>
                    </div>
                    <div className="bg-white/90 backdrop-blur-sm rounded-xl px-4 py-3 flex-1 text-center">
                      <p className="text-primary font-bold text-sm leading-tight">{biz.output}</p>
                      <p className="text-xs text-muted-foreground">Output</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center">
                    <biz.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-3xl font-bold text-foreground">{biz.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {biz.areas.map((area, j) => (
                      <span key={j} className="text-xs font-semibold bg-primary/8 text-primary px-3 py-1.5 rounded-full border border-primary/20">
                        {area}
                      </span>
                    ))}
                  </div>
                  <ul className="space-y-3">
                    {biz.highlights.map((h, j) => (
                      <li key={j} className="flex items-start gap-3 text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full shrink-0 mt-2" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INTEGRATION MODEL */}
      <section className="py-24 bg-[#F5F5F5]">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl text-center">
          <p className="text-accent font-bold tracking-widest uppercase text-sm mb-3">Model Bisnis</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Integrasi Vertikal</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-12">
            Kontrol penuh atas rantai nilai memungkinkan kami menjamin kualitas, efisiensi biaya, dan ketertelusuran produk.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-0 max-w-4xl mx-auto">
            {[
              { icon: Leaf, step: '01', label: 'Perkebunan', desc: 'Benih → TBS' },
              { icon: Factory, step: '02', label: 'Pengolahan', desc: 'TBS → CPO/PKO' },
              { icon: TrendingUp, step: '03', label: 'Refinery', desc: 'CPO → Olein/Stearin' },
              { icon: Truck, step: '04', label: 'Distribusi', desc: 'Pelabuhan → Global' },
            ].map((step, i) => (
              <div key={i} className="flex flex-col md:flex-row items-center">
                <div className="bg-white rounded-2xl p-6 text-center border border-border/40 min-w-[150px]">
                  <div className="text-xs font-bold text-accent mb-2">{step.step}</div>
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <step.icon className="w-6 h-6 text-primary" />
                  </div>
                  <p className="font-bold text-foreground">{step.label}</p>
                  <p className="text-xs text-muted-foreground mt-1">{step.desc}</p>
                </div>
                {i < 3 && <div className="w-8 h-0.5 bg-primary/30 hidden md:block shrink-0" />}
                {i < 3 && <div className="w-0.5 h-6 bg-primary/30 md:hidden" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Tertarik Bermitra dengan BPON?</h2>
          <p className="text-white/70 mb-8 text-lg">Hubungi tim bisnis kami untuk eksplorasi peluang kerjasama di sektor agribisnis kelapa sawit.</p>
          <Link href="/contact" className={cn(buttonVariants({ size: 'lg' }), 'bg-accent hover:bg-accent/90 text-white font-bold px-10 h-12')}>
            Diskusikan Kerjasama <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}

import { Link } from '@/i18n/routing';
import { getTranslations } from 'next-intl/server';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { ArrowRight, Leaf, Factory, Truck, CheckCircle2, TrendingUp, Users, Globe, Award } from 'lucide-react';
import Image from 'next/image';

export default async function HomePage(props: { params: Promise<{ locale: string }> }) {
  const params = await props.params;
  const isEn = params.locale === 'en';
  const t = await getTranslations({ locale: params.locale, namespace: 'HomePage' });
  
  const stats = [
    { value: '35+', label: 'Tahun Pengalaman' },
    { value: '120K', label: 'Hektar Lahan' },
    { value: '2.5M', label: 'Ton CPO/Tahun' },
    { value: '40+', label: 'Negara Mitra' },
  ];

  const coreBusinesses = [
    {
      icon: Leaf,
      title: 'Perkebunan',
      subtitle: 'Agrikultur Berkelanjutan',
      desc: 'Pengelolaan 120.000 hektar lahan sawit secara profesional dengan standar Good Agricultural Practices (GAP) dan sertifikasi RSPO.',
    },
    {
      icon: Factory,
      title: 'Produksi CPO',
      subtitle: 'Pengolahan Berteknologi Modern',
      desc: 'Fasilitas pabrik pengolahan modern berkapasitas 2,5 juta ton per tahun untuk menghasilkan Crude Palm Oil dan Palm Kernel berkualitas premium.',
    },
    {
      icon: Truck,
      title: 'Distribusi',
      subtitle: 'Jaringan Logistik Global',
      desc: 'Jaringan distribusi yang menjangkau 40+ negara dengan armada logistik modern dan sistem rantai pasok terintegrasi.',
    },
  ];

  const products = [
    { name: 'Crude Palm Oil (CPO)', desc: 'Minyak sawit mentah berkualitas tinggi untuk industri pangan dan non-pangan.' },
    { name: 'Palm Kernel Oil (PKO)', desc: 'Minyak inti sawit premium untuk industri kosmetik dan oleokimia.' },
    { name: 'Palm Olein', desc: 'Fraksi cair minyak sawit untuk minyak goreng konsumsi berkualitas tinggi.' },
    { name: 'Palm Stearin', desc: 'Fraksi padat minyak sawit untuk industri margarin dan shortening.' },
  ];

  const sustainability = [
    { icon: Globe, title: 'Zero Deforestasi', desc: 'Kebijakan NDPE ketat tanpa ekspansi ke hutan primer.' },
    { icon: Users, title: 'Pemberdayaan Komunitas', desc: 'Program CSR aktif untuk 50+ komunitas di sekitar lahan operasional.' },
    { icon: TrendingUp, title: 'Reduksi Emisi', desc: 'Target net-zero emisi karbon sebelum tahun 2040.' },
    { icon: Award, title: 'Sertifikasi Internasional', desc: 'Tersertifikasi RSPO, ISPO, dan ISO 14001 untuk semua operasional.' },
  ];

  const news = [
    {
      date: 'April 2025',
      category: 'Korporat',
      title: 'BPON Raih Penghargaan RSPO Excellence in Sustainable Palm Oil 2025',
      excerpt: 'Penghargaan ini menegaskan komitmen BPON dalam menjalankan praktik perkebunan sawit yang bertanggung jawab dan berkelanjutan.',
    },
    {
      date: 'Maret 2025',
      category: 'Operasional',
      title: 'Ekspansi Fasilitas Pengolahan CPO di Kalimantan Timur Resmi Beroperasi',
      excerpt: 'Pabrik pengolahan terbaru dengan kapasitas 500.000 ton per tahun mulai beroperasi, meningkatkan total kapasitas produksi BPON.',
    },
    {
      date: 'Februari 2025',
      category: 'Sustainability',
      title: 'BPON Luncurkan Program Replanting Sawit Ramah Lingkungan',
      excerpt: 'Program peremajaan kebun seluas 15.000 hektar menggunakan bibit unggul rendah karbon untuk mendukung target net-zero 2040.',
    },
  ];

  return (
    <div className="w-full">

      {/* ─── 1. HERO SECTION ─── */}
      <section className="relative h-screen min-h-[700px] w-full flex items-end justify-start overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1542845876-0bf84b80b067?auto=format&fit=crop&q=80&w=2000"
            alt="Palm Oil Plantation Aerial View"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </div>

        <div className="relative z-10 w-full pb-24 md:pb-32">
          <div className="container mx-auto px-4 md:px-8 max-w-7xl">
            <div className="max-w-3xl">
              <p className="text-accent font-semibold tracking-widest uppercase text-sm mb-4">
                {t('hero_subtitle')}
              </p>
              <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
                {t('hero_title_1')}
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C9A227] to-[#F0D060]">
                  {t('hero_title_highlight')}
                </span>
                <br />
                {t('hero_title_2')}
              </h1>
              <p className="text-lg md:text-xl text-gray-300 max-w-xl mb-10 font-light leading-relaxed">
                {t('hero_desc')}
              </p>
              <div className="flex flex-col sm:flex-row items-start gap-4">
                <Link href="/about" className={cn(buttonVariants({ size: 'lg' }), 'bg-primary hover:bg-primary/90 text-white font-semibold px-8 h-12 text-base')}>
                  {t('hero_btn_about')}
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
                <Link href="/contact" className={cn(buttonVariants({ size: 'lg', variant: 'outline' }), '!bg-transparent border-white/50 !text-white hover:!bg-white/10 hover:border-white font-semibold px-8 h-12 text-base')}>
                  {t('hero_btn_contact')}
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="absolute bottom-0 left-0 right-0 z-20">
          <div className="bg-primary/95 backdrop-blur-sm">
            <div className="container mx-auto px-4 md:px-8 max-w-7xl">
              <div className="grid grid-cols-2 md:grid-cols-4">
                {stats.map((stat, i) => (
                  <div key={i} className="py-5 px-6 text-center border-r border-white/20 last:border-0">
                    <p className="text-3xl font-bold text-accent">{stat.value}</p>
                    <p className="text-white/70 text-sm mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 2. CORE BUSINESS ─── */}
      <section className="py-28 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="mb-16 max-w-2xl">
            <p className="text-accent font-bold tracking-widest uppercase text-sm mb-3">Bisnis Inti</p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
              Terintegrasi
              <br />Dari Hulu ke Hilir
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coreBusinesses.map((biz, i) => (
              <div
                key={i}
                className="group relative border border-border/40 rounded-2xl p-8 hover:border-primary/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-white overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-1 h-0 bg-primary group-hover:h-full transition-all duration-500 rounded-l-2xl" />
                <div className="w-16 h-16 bg-primary/8 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
                  <biz.icon className="w-8 h-8 text-primary group-hover:text-white transition-colors duration-300" />
                </div>
                <p className="text-xs text-accent font-bold tracking-widest uppercase mb-2">{biz.subtitle}</p>
                <h3 className="text-2xl font-bold text-foreground mb-4">{biz.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{biz.desc}</p>
                <Link href="/business" className="inline-flex items-center gap-2 mt-6 text-primary font-semibold text-sm group-hover:gap-3 transition-all">
                  Selengkapnya <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 3. ABOUT PREVIEW ─── */}
      <section className="py-28 bg-[#F5F5F5]">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="relative h-[560px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1000"
                  alt="BPON Corporate Headquarters"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Floating card */}
              <div className="absolute -bottom-6 -right-6 bg-primary text-white rounded-2xl p-6 shadow-xl max-w-[220px]">
                <p className="text-5xl font-bold">35+</p>
                <p className="text-white/80 text-sm mt-1">Tahun memimpin industri perkebunan sawit Indonesia</p>
              </div>
            </div>

            <div className="space-y-6">
              <p className="text-accent font-bold tracking-widest uppercase text-sm">Tentang Kami</p>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
                Dedikasi untuk
                <br />Kualitas &amp; Keberlanjutan
                <br /><span className="text-primary">Sejak 1990</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                PT Berlian Palm Oil Nusantara merupakan pionir dalam industri kelapa sawit di Indonesia. Kami tidak hanya berfokus pada hasil produksi, tetapi juga pelestarian lingkungan dan pemberdayaan masyarakat.
              </p>
              <ul className="space-y-3 py-2">
                {[
                  'Standar Internasional RSPO & ISPO',
                  'Fasilitas Produksi Berteknologi Modern',
                  'Komitmen Tanpa Deforestasi (NDPE Policy)',
                  'Program CSR untuk 50+ Komunitas Lokal',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    <span className="font-medium text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="/about" className={cn(buttonVariants({ size: 'lg' }), 'bg-primary hover:bg-primary/90 text-white mt-4 group')}>
                Pelajari Lebih Lanjut
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 4. PRODUCTS ─── */}
      <section className="py-28 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <p className="text-accent font-bold tracking-widest uppercase text-sm mb-3">Produk Kami</p>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">Produk Unggulan</h2>
            </div>
            <Link href="/products" className={cn(buttonVariants({ variant: 'outline' }), 'border-primary text-primary hover:bg-primary hover:text-white')}>
              Lihat Semua Produk
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, i) => (
              <div key={i} className="group bg-[#F5F5F5] rounded-2xl p-6 hover:bg-primary transition-colors duration-300">
                <div className="w-12 h-12 bg-primary/10 group-hover:bg-white/20 rounded-xl flex items-center justify-center mb-5 transition-colors">
                  <Leaf className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-lg font-bold text-foreground group-hover:text-white mb-2 transition-colors">{product.name}</h3>
                <p className="text-muted-foreground group-hover:text-white/80 text-sm leading-relaxed transition-colors">{product.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 5. SUSTAINABILITY ─── */}
      <section className="py-28 relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&q=80&w=2000"
            alt="Green Forest"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[#1A0505]/90" />
        </div>
        <div className="relative z-10 container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <p className="text-accent font-bold tracking-widest uppercase text-sm mb-3">Keberlanjutan</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Masa Depan Hijau Bersama BPON</h2>
            <p className="text-white/70 max-w-2xl mx-auto text-lg">
              Keberlanjutan bukan sekadar tujuan — ini adalah cara kami berbisnis setiap harinya.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {sustainability.map((item, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center hover:bg-white/20 transition-colors">
                <div className="w-14 h-14 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-white font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-white/65 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link href="/sustainability" className={cn(buttonVariants({ size: 'lg' }), 'bg-accent hover:bg-accent/90 text-white font-semibold px-10 h-12')}>
              Laporan Keberlanjutan 2024
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── 6. NEWS ─── */}
      <section className="py-28 bg-[#F5F5F5]">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <p className="text-accent font-bold tracking-widest uppercase text-sm mb-3">Berita Terkini</p>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">Update Terbaru</h2>
            </div>
            <Link href="/news" className={cn(buttonVariants({ variant: 'outline' }), 'border-primary text-primary hover:bg-primary hover:text-white')}>
              Semua Berita
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {news.map((item, i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden group hover:shadow-xl transition-shadow duration-300">
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs font-bold bg-primary/10 text-primary px-3 py-1 rounded-full">{item.category}</span>
                    <span className="text-xs text-muted-foreground">{item.date}</span>
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors leading-snug">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.excerpt}</p>
                  <div className="mt-6 pt-6 border-t border-border/50">
                    <Link href="/news" className="inline-flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all">
                      Baca Selengkapnya <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 7. CTA SECTION ─── */}
      <section className="py-28 bg-primary">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl text-center">
          <p className="text-accent font-bold tracking-widest uppercase text-sm mb-4">{t('cta_tag')}</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 max-w-3xl mx-auto leading-tight">
            {t('cta_title')}
          </h2>
          <p className="text-white/70 text-lg mb-10 max-w-2xl mx-auto">
            {t('cta_desc')}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className={cn(buttonVariants({ size: 'lg' }), 'bg-accent hover:bg-accent/90 text-white font-bold px-10 h-12 text-base')}>
              {t('cta_btn_contact')}
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
            <Link href="/products" className={cn(buttonVariants({ size: 'lg', variant: 'outline' }), '!bg-transparent border-white/50 !text-white hover:!bg-white/10 font-semibold px-10 h-12 text-base')}>
              {t('cta_btn_products')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

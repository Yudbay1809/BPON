import Image from 'next/image';
import { Link } from '@/i18n/routing';
import { getTranslations } from 'next-intl/server';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { ArrowRight, Calendar, Tag } from 'lucide-react';

export default async function NewsPage(props: { params: Promise<{ locale: string }> }) {
  const params = await props.params;
  const t = await getTranslations({ locale: params.locale, namespace: 'News' });
  const featured = {
    date: 'April 28, 2025',
    category: 'Korporat',
    title: 'BPON Raih Penghargaan RSPO Excellence in Sustainable Palm Oil 2025',
    excerpt: 'PT Berlian Palm Oil Nusantara kembali meraih penghargaan bergengsi dari Roundtable on Sustainable Palm Oil (RSPO) untuk kategori Excellence in Sustainable Palm Oil Production. Penghargaan ini diberikan atas komitmen BPON dalam menjalankan praktik perkebunan yang bertanggung jawab selama lebih dari satu dekade.',
    imgSrc: '/images/news-featured.jpg',
  };

  const articles = [
    {
      date: 'April 15, 2025',
      category: 'Operasional',
      title: 'Ekspansi Fasilitas Pengolahan CPO di Kalimantan Timur Resmi Beroperasi',
      excerpt: 'Pabrik pengolahan terbaru dengan kapasitas 500.000 ton per tahun mulai beroperasi, meningkatkan total kapasitas produksi BPON menjadi 2,5 juta ton per tahun.',
      imgSrc: '/images/news-expansion.jpg',
    },
    {
      date: 'Maret 20, 2025',
      category: 'Sustainability',
      title: 'BPON Luncurkan Program Replanting Sawit Ramah Lingkungan 15.000 Ha',
      excerpt: 'Program peremajaan kebun seluas 15.000 hektar menggunakan bibit unggul rendah karbon untuk mendukung target net-zero 2040 sesuai Paris Agreement.',
      imgSrc: '/images/news-sustainability.jpg',
    },
    {
      date: 'Maret 5, 2025',
      category: 'Finansial',
      title: 'BPON Catat Pertumbuhan Pendapatan 12,3% di Tahun 2024',
      excerpt: 'Perusahaan mencatat pendapatan Rp 28,5 triliun pada FY2024, ditopang oleh peningkatan volume produksi dan kenaikan harga CPO di pasar global.',
      imgSrc: '/images/news-finance.jpg',
    },
    {
      date: 'Februari 18, 2025',
      category: 'CSR',
      title: 'Program Beasiswa BPON 2025 Buka Pendaftaran untuk 500 Mahasiswa',
      excerpt: 'BPON membuka pendaftaran beasiswa penuh untuk mahasiswa berprestasi di jurusan pertanian, teknik kimia, dan manajemen lingkungan dari 10 universitas mitra.',
      imgSrc: '/images/news-scholarship.jpg',
    },
    {
      date: 'Januari 30, 2025',
      category: 'Korporat',
      title: 'BPON Tandatangani MoU Ekspor CPO dengan Konsorsium Eropa Senilai USD 500 Juta',
      excerpt: 'Perjanjian kerjasama multitahun ini membuktikan kepercayaan pasar global terhadap kualitas dan sertifikasi produk sawit berkelanjutan dari BPON.',
      imgSrc: '/images/news-mou.jpg',
    },
    {
      date: 'Januari 12, 2025',
      category: 'Inovasi',
      title: 'BPON Investasi Rp 500 Miliar untuk Digitalisasi Operasional Kebun',
      excerpt: 'Transformasi digital mencakup implementasi IoT sensor, drone monitoring, dan platform AI untuk optimasi yield perkebunan di semua unit kebun BPON.',
      imgSrc: '/images/news-digital.jpg',
    },
  ];

  const categoryColors: Record<string, string> = {
    'Korporat': 'bg-blue-100 text-blue-700',
    'Operasional': 'bg-orange-100 text-orange-700',
    'Sustainability': 'bg-green-100 text-green-700',
    'Finansial': 'bg-purple-100 text-purple-700',
    'CSR': 'bg-pink-100 text-pink-700',
    'Inovasi': 'bg-cyan-100 text-cyan-700',
  };

  return (
    <div className="w-full pt-20">

      {/* PAGE HERO */}
      <section className="relative h-72 md:h-80 flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-news.jpg"
            alt="BPON News"
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

      {/* FEATURED NEWS */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <p className="text-accent font-bold tracking-widest uppercase text-sm mb-6">Berita Utama</p>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
            <div className="lg:col-span-3 relative h-[380px] rounded-2xl overflow-hidden shadow-xl">
              <Image src={featured.imgSrc} alt={featured.title} fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute top-4 left-4">
                <span className={cn('text-xs font-bold px-3 py-1.5 rounded-full', categoryColors[featured.category] ?? 'bg-gray-100 text-gray-700')}>
                  {featured.category}
                </span>
              </div>
            </div>
            <div className="lg:col-span-2 space-y-4">
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Calendar className="w-4 h-4" />
                {featured.date}
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground leading-snug">{featured.title}</h2>
              <p className="text-muted-foreground leading-relaxed">{featured.excerpt}</p>
              <Link href="/news" className={cn(buttonVariants(), 'bg-primary hover:bg-primary/90 text-white group mt-2')}>
                Baca Selengkapnya
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ARTICLE GRID */}
      <section className="py-16 bg-[#F5F5F5]">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <p className="text-accent font-bold tracking-widest uppercase text-sm mb-8">Semua Berita</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden group hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={article.imgSrc}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className={cn('text-xs font-bold px-3 py-1.5 rounded-full', categoryColors[article.category] ?? 'bg-gray-100 text-gray-700')}>
                      {article.category}
                    </span>
                  </div>
                </div>
                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Calendar className="w-3.5 h-3.5" />
                    {article.date}
                  </div>
                  <h3 className="font-bold text-foreground text-lg leading-snug group-hover:text-primary transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">{article.excerpt}</p>
                  <Link href="/news" className="inline-flex items-center gap-2 text-primary font-semibold text-sm pt-2 group-hover:gap-3 transition-all">
                    Baca Selengkapnya <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

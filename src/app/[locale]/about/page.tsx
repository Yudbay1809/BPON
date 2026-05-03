import Image from 'next/image';
import { Link } from '@/i18n/routing';
import { getTranslations } from 'next-intl/server';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { ArrowRight, CheckCircle2, Users, Target, Eye } from 'lucide-react';

export default async function AboutPage(props: { params: Promise<{ locale: string }> }) {
  const params = await props.params;
  const t = await getTranslations({ locale: params.locale, namespace: 'About' });
  const milestones = [
    { year: '1990', event: 'BPON didirikan dengan lahan pertama seluas 500 hektar di Sumatera Selatan.' },
    { year: '2000', event: 'Ekspansi ke Kalimantan Tengah, total lahan mencapai 30.000 hektar.' },
    { year: '2008', event: 'Meraih sertifikasi RSPO pertama di Indonesia untuk operasional sawit berkelanjutan.' },
    { year: '2015', event: 'Kapasitas produksi CPO melampaui 1 juta ton per tahun.' },
    { year: '2020', event: 'Peluncuran kebijakan NDPE (No Deforestation, No Peat, No Exploitation).' },
    { year: '2025', event: 'Total lahan mencapai 120.000 hektar, beroperasi di 5 provinsi Indonesia.' },
  ];

  const leadership = [
    { name: 'Ir. Bambang Hartono', role: 'Direktur Utama', tenure: 'Sejak 2015' },
    { name: 'Dr. Siti Rahayu', role: 'Direktur Operasional', tenure: 'Sejak 2018' },
    { name: 'Agus Setiawan, MBA', role: 'Direktur Keuangan', tenure: 'Sejak 2016' },
    { name: 'Ir. Dewi Marlina', role: 'Direktur Keberlanjutan', tenure: 'Sejak 2020' },
  ];

  return (
    <div className="w-full pt-20">

      {/* PAGE HERO */}
      <section className="relative h-72 md:h-96 flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-about.jpg"
            alt="BPON Headquarters"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-[#0d2e10]/80" />
        </div>
        <div className="relative z-10 container mx-auto px-4 md:px-8 max-w-7xl">
          <p className="text-accent text-sm font-bold tracking-widest uppercase mb-3">{t('hero_tag')}</p>
          <h1 className="text-4xl md:text-6xl font-bold text-white">{t('hero_title')}</h1>
        </div>
      </section>

      {/* VISION MISSION */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-primary rounded-2xl p-8 text-white">
              <Eye className="w-10 h-10 text-accent mb-5" />
              <h2 className="text-2xl font-bold mb-4">Visi</h2>
              <p className="text-white/80 leading-relaxed">
                Menjadi perusahaan agribisnis kelapa sawit terkemuka di Asia Tenggara yang berkelanjutan, inovatif, dan memberikan nilai tambah bagi seluruh pemangku kepentingan.
              </p>
            </div>
            <div className="bg-[#F5F5F5] rounded-2xl p-8 md:col-span-2">
              <Target className="w-10 h-10 text-primary mb-5" />
              <h2 className="text-2xl font-bold text-foreground mb-4">Misi</h2>
              <ul className="space-y-3">
                {[
                  'Mengelola perkebunan kelapa sawit dengan praktik pertanian terbaik dan berkelanjutan',
                  'Menghasilkan produk CPO dan turunannya berkualitas premium untuk pasar global',
                  'Memberdayakan komunitas lokal dan menciptakan lapangan kerja yang berkualitas',
                  'Menjaga kelestarian lingkungan melalui kebijakan NDPE yang ketat',
                  'Memberikan return yang optimal bagi pemegang saham dengan tata kelola yang baik',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* COMPANY PROFILE */}
      <section className="py-24 bg-[#F5F5F5]">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <p className="text-accent font-bold tracking-widest uppercase text-sm">Profil Singkat</p>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
                35 Tahun Membangun
                <br /><span className="text-primary">Industri Sawit</span>
                <br />Indonesia
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                PT Berlian Palm Oil Nusantara (BPON) berdiri pada tahun 1990 dan telah berkembang menjadi salah satu perusahaan perkebunan kelapa sawit terbesar di Indonesia. Dengan total lahan 120.000 hektar yang tersebar di lima provinsi, kami mengelola operasi yang terintegrasi dari perkebunan hingga distribusi global.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Beroperasi dengan lisensi dan sertifikasi internasional, BPON berkomitmen untuk membuktikan bahwa bisnis sawit yang menguntungkan dan praktik lingkungan yang bertanggung jawab dapat berjalan berdampingan.
              </p>
              <div className="grid grid-cols-2 gap-6 pt-4">
                {[
                  { value: '120K ha', label: 'Total Lahan' },
                  { value: '5 Provinsi', label: 'Area Operasional' },
                  { value: '18.000+', label: 'Karyawan' },
                  { value: 'A+', label: 'Rating ESG Fitch' },
                ].map((s, i) => (
                  <div key={i} className="bg-white rounded-xl p-5 border border-border/40">
                    <p className="text-3xl font-bold text-primary">{s.value}</p>
                    <p className="text-sm text-muted-foreground mt-1">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-[540px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/hero-sustainability.jpg"
                alt="BPON Plantation"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <p className="text-accent font-bold tracking-widest uppercase text-sm mb-3">Perjalanan Kami</p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">Tonggak Sejarah</h2>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-border hidden md:block" />
            <div className="space-y-12">
              {milestones.map((m, i) => (
                <div key={i} className={`flex flex-col md:flex-row items-center gap-8 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className="flex-1 md:text-right">
                    {i % 2 === 0 ? (
                      <div className="bg-[#F5F5F5] rounded-2xl p-6 md:ml-auto md:max-w-sm">
                        <p className="text-primary font-bold text-2xl mb-2">{m.year}</p>
                        <p className="text-muted-foreground">{m.event}</p>
                      </div>
                    ) : <div />}
                  </div>
                  <div className="w-5 h-5 bg-primary rounded-full border-4 border-white shadow-md shrink-0 hidden md:block" />
                  <div className="flex-1">
                    {i % 2 !== 0 ? (
                      <div className="bg-[#F5F5F5] rounded-2xl p-6 md:max-w-sm">
                        <p className="text-primary font-bold text-2xl mb-2">{m.year}</p>
                        <p className="text-muted-foreground">{m.event}</p>
                      </div>
                    ) : <div />}
                    {/* Mobile always show */}
                    <div className="md:hidden bg-[#F5F5F5] rounded-2xl p-6">
                      <p className="text-primary font-bold text-2xl mb-2">{m.year}</p>
                      <p className="text-muted-foreground">{m.event}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* LEADERSHIP */}
      <section className="py-24 bg-[#F5F5F5]">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <p className="text-accent font-bold tracking-widest uppercase text-sm mb-3">Manajemen</p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">Tim Kepemimpinan</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {leadership.map((person, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 text-center border border-border/40 hover:border-primary/30 hover:shadow-lg transition-all">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-10 h-10 text-primary" />
                </div>
                <h3 className="font-bold text-foreground text-lg">{person.name}</h3>
                <p className="text-primary font-semibold text-sm mt-1">{person.role}</p>
                <p className="text-muted-foreground text-xs mt-2">{person.tenure}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Bergabunglah Bersama Kami</h2>
          <p className="text-white/70 mb-8 text-lg">Kami selalu membuka peluang kemitraan dan kolaborasi yang saling menguntungkan.</p>
          <Link href="/contact" className={cn(buttonVariants({ size: 'lg' }), 'bg-accent hover:bg-accent/90 text-white font-bold px-10 h-12')}>
            Hubungi Kami <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}

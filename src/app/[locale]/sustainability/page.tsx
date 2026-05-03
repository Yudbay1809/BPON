import Image from 'next/image';
import { Link } from '@/i18n/routing';
import { getTranslations } from 'next-intl/server';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { ArrowRight, TreePine, Users, Zap, Droplets, Globe, Award } from 'lucide-react';

export default async function SustainabilityPage(props: { params: Promise<{ locale: string }> }) {
  const params = await props.params;
  const t = await getTranslations({ locale: params.locale, namespace: 'Sustainability' });
  const pillars = [
    {
      icon: TreePine,
      title: 'Tanpa Deforestasi',
      target: '0 ha hutan dibuka 2024',
      desc: 'Kebijakan NDPE (No Deforestation, No Peat, No Exploitation) kami melarang ekspansi ke kawasan hutan primer, gambut, dan area konservasi tinggi (HCV/HCS).',
      progress: 100,
    },
    {
      icon: Zap,
      title: 'Energi Terbarukan',
      target: '65% energi dari biomassa',
      desc: 'Fasilitas pengolahan kami menggunakan biogas dari POME (Palm Oil Mill Effluent) dan cangkang kelapa sawit sebagai sumber energi terbarukan.',
      progress: 65,
    },
    {
      icon: Droplets,
      title: 'Manajemen Air',
      target: 'Reduksi 40% air tawar',
      desc: 'Sistem daur ulang air POME dan pemantauan sungai real-time untuk memastikan operasional kami tidak berdampak negatif pada sumber daya air sekitar.',
      progress: 72,
    },
    {
      icon: Users,
      title: 'Pemberdayaan Komunitas',
      target: '50+ komunitas dampingan',
      desc: 'Program CSR mencakup pendidikan, kesehatan, infrastruktur, dan pengembangan ekonomi bagi masyarakat di sekitar area operasional BPON.',
      progress: 85,
    },
    {
      icon: Globe,
      title: 'Emisi Karbon',
      target: 'Net-zero sebelum 2040',
      desc: 'Roadmap dekarbonisasi kami mencakup reduksi emisi Scope 1, 2, dan 3 melalui efisiensi energi, penangkapan metana, dan program reforestasi.',
      progress: 38,
    },
    {
      icon: Award,
      title: 'Sertifikasi & Transparansi',
      target: '100% unit bersertifikasi RSPO',
      desc: 'Seluruh unit kebun dan pabrik kami bersertifikasi RSPO dan ISPO. Kami mempublikasikan Laporan Keberlanjutan tahunan sesuai standar GRI.',
      progress: 100,
    },
  ];

  const reports = [
    { year: '2024', title: 'Sustainability Report 2024', size: '8.2 MB' },
    { year: '2023', title: 'Sustainability Report 2023', size: '7.8 MB' },
    { year: '2022', title: 'Sustainability Report 2022', size: '6.5 MB' },
  ];

  const sdgs = [
    { no: '2', label: 'Zero Hunger' },
    { no: '6', label: 'Clean Water' },
    { no: '7', label: 'Clean Energy' },
    { no: '8', label: 'Decent Work' },
    { no: '12', label: 'Responsible Consumption' },
    { no: '13', label: 'Climate Action' },
    { no: '15', label: 'Life on Land' },
    { no: '17', label: 'Partnerships' },
  ];

  return (
    <div className="w-full pt-20">

      {/* PAGE HERO */}
      <section className="relative h-72 md:h-96 flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-sustainability.jpg"
            alt="Green Forest Sustainability"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-[#0a2e0e]/85" />
        </div>
        <div className="relative z-10 container mx-auto px-4 md:px-8 max-w-7xl">
          <p className="text-accent text-sm font-bold tracking-widest uppercase mb-3">{t('tag')}</p>
          <h1 className="text-4xl md:text-6xl font-bold text-white">{t('title')}</h1>
        </div>
      </section>

      {/* COMMITMENT STATEMENT */}
      <section className="py-20 bg-[#0F2914] text-white">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl text-center">
          <p className="text-accent font-bold tracking-widest uppercase text-sm mb-4">Komitmen Kami</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
            "Keberlanjutan adalah fondasi bisnis kami, bukan sekadar kewajiban."
          </h2>
          <p className="text-white/70 text-lg leading-relaxed">
            BPON percaya bahwa pertumbuhan bisnis yang kuat dan praktik lingkungan yang bertanggung jawab dapat berjalan beriringan. Strategi keberlanjutan kami terintegrasi penuh dalam setiap keputusan bisnis.
          </p>
        </div>
      </section>

      {/* 6 PILLARS */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <p className="text-accent font-bold tracking-widest uppercase text-sm mb-3">6 Pilar</p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">Strategi Keberlanjutan</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pillars.map((pillar, i) => (
              <div key={i} className="border border-border/40 rounded-2xl p-7 hover:border-primary/30 hover:shadow-lg transition-all">
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <pillar.icon className="w-6 h-6 text-primary" />
                  </div>
                  <span className="text-xs font-bold text-accent bg-accent/10 px-3 py-1 rounded-full">{pillar.target}</span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{pillar.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-5">{pillar.desc}</p>
                {/* Progress Bar */}
                <div>
                  <div className="flex justify-between text-xs mb-1.5">
                    <span className="text-muted-foreground">Progress</span>
                    <span className="font-bold text-primary">{pillar.progress}%</span>
                  </div>
                  <div className="h-2 bg-border rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary rounded-full transition-all duration-500"
                      style={{ width: `${pillar.progress}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SDG ALIGNMENT */}
      <section className="py-24 bg-[#F5F5F5]">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="text-center mb-12">
            <p className="text-accent font-bold tracking-widest uppercase text-sm mb-3">PBB</p>
            <h2 className="text-4xl font-bold text-foreground mb-4">Aligned dengan SDGs PBB</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Program keberlanjutan kami berkontribusi langsung pada pencapaian 8 dari 17 Tujuan Pembangunan Berkelanjutan PBB.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {sdgs.map((sdg, i) => (
              <div key={i} className="bg-primary text-white rounded-xl px-5 py-4 text-center min-w-[120px]">
                <p className="text-2xl font-bold text-accent">SDG {sdg.no}</p>
                <p className="text-xs text-white/80 mt-1">{sdg.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REPORTS */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="text-center mb-12">
            <p className="text-accent font-bold tracking-widest uppercase text-sm mb-3">Transparansi</p>
            <h2 className="text-4xl font-bold text-foreground">Laporan Keberlanjutan</h2>
          </div>
          <div className="max-w-2xl mx-auto space-y-4">
            {reports.map((report, i) => (
              <div key={i} className="flex items-center justify-between p-5 border border-border/40 rounded-xl hover:border-primary/30 hover:bg-primary/3 transition-all group">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <span className="text-primary font-bold text-sm">{report.year}</span>
                  </div>
                  <div>
                    <p className="font-bold text-foreground">{report.title}</p>
                    <p className="text-xs text-muted-foreground">{report.size} · PDF</p>
                  </div>
                </div>
                <button className="text-primary font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                  Unduh <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Bersama Membangun Masa Depan Hijau</h2>
          <p className="text-white/70 mb-8 text-lg">Pelajari lebih lanjut tentang program ESG kami atau hubungi tim sustainability BPON.</p>
          <Link href="/contact" className={cn(buttonVariants({ size: 'lg' }), 'bg-accent hover:bg-accent/90 text-white font-bold px-10 h-12')}>
            Hubungi Tim ESG <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}

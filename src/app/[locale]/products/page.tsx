import Image from 'next/image';
import { Link } from '@/i18n/routing';
import { getTranslations } from 'next-intl/server';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { ArrowRight, Leaf, Droplets, Beaker, Package } from 'lucide-react';

export default async function ProductsPage(props: { params: Promise<{ locale: string }> }) {
  const params = await props.params;
  const t = await getTranslations({ locale: params.locale, namespace: 'Products' });
  const categories = [
    {
      id: 'cpo',
      icon: Droplets,
      name: 'Crude Palm Oil (CPO)',
      tag: 'Produk Utama',
      desc: 'Minyak sawit mentah berkualitas tinggi yang dihasilkan dari proses ekstraksi buah sawit segar. CPO BPON memenuhi standar internasional untuk industri pangan dan non-pangan.',
      specs: [
        { label: 'FFA (Free Fatty Acid)', value: '≤ 3,5%' },
        { label: 'Kadar Air', value: '≤ 0,15%' },
        { label: 'Kotoran', value: '≤ 0,05%' },
        { label: 'Iodine Value', value: '50–55 g I₂/100g' },
        { label: 'Melting Point', value: '33–39°C' },
      ],
      applications: ['Industri Pangan & Minyak Goreng', 'Industri Biodiesel', 'Industri Oleokimia', 'Sabun & Deterjen'],
      imgSrc: 'https://images.unsplash.com/photo-1509483894043-c68e1f15e875?auto=format&fit=crop&q=80&w=800',
    },
    {
      id: 'pko',
      icon: Beaker,
      name: 'Palm Kernel Oil (PKO)',
      tag: 'Produk Premium',
      desc: 'Minyak inti sawit yang diekstraksi dari inti biji buah sawit. PKO memiliki sifat fisika-kimia unik yang sangat diminati untuk industri kosmetik dan oleokimia khusus.',
      specs: [
        { label: 'FFA', value: '≤ 1,0%' },
        { label: 'Kadar Air', value: '≤ 0,1%' },
        { label: 'Iodine Value', value: '14–22 g I₂/100g' },
        { label: 'Saponification Value', value: '230–254 mg KOH/g' },
        { label: 'Melting Point', value: '24–26°C' },
      ],
      applications: ['Industri Kosmetik & Perawatan', 'Produk Bayi & Susu Formula', 'Oleokimia Khusus', 'Industri Farmasi'],
      imgSrc: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&q=80&w=800',
    },
    {
      id: 'olein',
      icon: Leaf,
      name: 'Refined Palm Olein (RPO)',
      tag: 'Produk Hilir',
      desc: 'Fraksi cair dari minyak sawit yang diproses melalui tahapan refined, bleached, dan deodorized. Produk utama untuk segmen minyak goreng konsumsi retail dan industrial.',
      specs: [
        { label: 'FFA', value: '≤ 0,1%' },
        { label: 'Iodine Value', value: '≥ 56 g I₂/100g' },
        { label: 'Cloud Point', value: '≤ 10°C' },
        { label: 'Color (5¼" Lovibond)', value: '≤ 3R' },
        { label: 'Peroxide Value', value: '≤ 1 meq/kg' },
      ],
      applications: ['Minyak Goreng Retail & Curah', 'Industri Snack & Makanan', 'Margarin & Shortening', 'Industri Roti & Kue'],
      imgSrc: 'https://images.unsplash.com/photo-1473183609-7fc1ee3da18a?auto=format&fit=crop&q=80&w=800',
    },
    {
      id: 'stearin',
      icon: Package,
      name: 'Refined Palm Stearin (RPS)',
      tag: 'Produk Hilir',
      desc: 'Fraksi padat dari proses fraksinasi minyak sawit. Digunakan luas dalam industri margarin, shortening, dan oleokimia untuk menghasilkan produk dengan titik lebur yang lebih tinggi.',
      specs: [
        { label: 'FFA', value: '≤ 0,1%' },
        { label: 'Iodine Value', value: '≤ 48 g I₂/100g' },
        { label: 'Melting Point', value: '44–56°C' },
        { label: 'Color (5¼" Lovibond)', value: '≤ 3R' },
        { label: 'Peroxide Value', value: '≤ 1 meq/kg' },
      ],
      applications: ['Margarin & Shortening', 'Cokelat & Confectionery', 'Sabun Batang', 'Biodiesel Campuran'],
      imgSrc: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&q=80&w=800',
    },
  ];

  const certifications = ['RSPO Mass Balance', 'ISPO', 'ISCC', 'Halal MUI', 'ISO 22000 FSSC', 'Kosher Certified'];

  return (
    <div className="w-full pt-20">

      {/* PAGE HERO */}
      <section className="relative h-72 md:h-96 flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1509483894043-c68e1f15e875?auto=format&fit=crop&q=80&w=2000"
            alt="Palm Oil Products"
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

      {/* PRODUCT QUALITY INTRO */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl text-center">
          <p className="text-white/80 text-lg max-w-3xl mx-auto">
            Semua produk BPON diproduksi dengan standar kualitas ketat, tersertifikasi internasional, dan dapat ditelusuri dari kebun hingga ke tangan pelanggan.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            {certifications.map((cert, i) => (
              <span key={i} className="bg-white/10 border border-white/30 text-white text-sm font-semibold px-4 py-2 rounded-full">
                ✓ {cert}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCT CARDS */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <p className="text-accent font-bold tracking-widest uppercase text-sm mb-3">Portfolio</p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">Katalog Produk</h2>
          </div>
          <div className="space-y-16">
            {categories.map((product, i) => (
              <div key={product.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-start ${i % 2 !== 0 ? '' : ''}`}>
                <div className={`${i % 2 !== 0 ? 'lg:order-last' : ''} relative h-[360px] rounded-2xl overflow-hidden shadow-xl`}>
                  <Image src={product.imgSrc} alt={product.name} fill className="object-cover" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-accent text-white text-xs font-bold px-3 py-1.5 rounded-full">{product.tag}</span>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <product.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-3xl font-bold text-foreground">{product.name}</h3>
                  <p className="text-muted-foreground leading-relaxed">{product.desc}</p>

                  <div>
                    <h4 className="font-bold text-foreground mb-3">Spesifikasi Produk</h4>
                    <div className="space-y-2">
                      {product.specs.map((spec, j) => (
                        <div key={j} className="flex justify-between items-center py-2 border-b border-border/40 last:border-0">
                          <span className="text-sm text-muted-foreground">{spec.label}</span>
                          <span className="text-sm font-bold text-foreground">{spec.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-bold text-foreground mb-3">Aplikasi Industri</h4>
                    <div className="flex flex-wrap gap-2">
                      {product.applications.map((app, j) => (
                        <span key={j} className="text-xs bg-primary/8 text-primary px-3 py-1.5 rounded-full border border-primary/20 font-semibold">
                          {app}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Butuh Penawaran Harga atau Spesifikasi?</h2>
          <p className="text-white/70 mb-8 text-lg">Tim sales kami siap memberikan quotation dan spesifikasi lengkap sesuai kebutuhan industri Anda.</p>
          <Link href="/contact" className={cn(buttonVariants({ size: 'lg' }), 'bg-accent hover:bg-accent/90 text-white font-bold px-10 h-12')}>
            Minta Penawaran <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}

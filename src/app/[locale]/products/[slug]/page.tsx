import Image from 'next/image';
import { client } from '@/sanity/lib/client';
import { productBySlugQuery } from '@/sanity/lib/queries';
import { urlForImage } from '@/sanity/lib/image';
import { PageHero } from '@/components/ui/PageHero';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { fadeUp, fadeLeft, fadeRight, staggerContainer, staggerItem } from '@/hooks/use-scroll-animation';
import { PortableText } from '@portabletext/react';
import { FileDown, ArrowLeft, CheckCircle2 } from 'lucide-react';
import { Link } from '@/i18n/routing';
import { notFound } from 'next/navigation';
import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';

export default async function ProductDetailPage(props: { params: Promise<{ locale: string, slug: string }> }) {
  const { locale, slug } = await props.params;

  const product = await client.fetch(productBySlugQuery, { locale, slug });

  if (!product) {
    notFound();
  }

  return (
    <div className="w-full pt-20 pb-20">
      <PageHero
        imageSrc={product.mainImage ? urlForImage(product.mainImage).url() : '/images/hero-products.jpg'}
        imageAlt={product.name}
        tag={product.categories?.[0]?.title || 'Products'}
        title={product.name}
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left: Images */}
            <div className="space-y-6">
              <AnimatedSection variants={fadeLeft} className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl border border-border/40">
                {product.mainImage && (
                  <Image src={urlForImage(product.mainImage).url() || ''} alt={product.name} fill className="object-cover" />
                )}
              </AnimatedSection>
              
              {product.gallery && product.gallery.length > 0 && (
                <AnimatedSection variants={staggerContainer} className="grid grid-cols-4 gap-4">
                  {product.gallery.map((img: any, idx: number) => (
                    <AnimatedSection key={idx} variants={staggerItem} className="relative h-24 rounded-xl overflow-hidden border border-border/40">
                      <Image src={urlForImage(img).url() || ''} alt={`${product.name} gallery ${idx}`} fill className="object-cover" />
                    </AnimatedSection>
                  ))}
                </AnimatedSection>
              )}
            </div>

            {/* Right: Info */}
            <div className="space-y-8">
              <AnimatedSection variants={fadeRight}>
                <h2 className="text-3xl font-bold text-foreground mb-4">Product Overview</h2>
                <p className="text-muted-foreground text-lg leading-relaxed">{product.description}</p>
              </AnimatedSection>

              <AnimatedSection variants={fadeRight} className="bg-[#F8F9F8] p-8 rounded-3xl border border-primary/10">
                <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                  <CheckCircle2 className="w-6 h-6 text-primary" /> Technical Specifications
                </h3>
                <div className="prose prose-sm prose-slate max-w-none">
                  <PortableText value={product.specifications} />
                </div>
              </AnimatedSection>

              {product.pdfCatalog && (
                <AnimatedSection variants={fadeRight}>
                  <a 
                    href={product.pdfCatalog} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={cn(buttonVariants({ size: 'lg' }), 'w-full bg-primary hover:bg-primary/90 text-white font-bold h-14 rounded-2xl gap-3')}
                  >
                    <FileDown className="w-5 h-5" /> Download Product Catalog (PDF)
                  </a>
                </AnimatedSection>
              )}
            </div>
          </div>

          <AnimatedSection variants={fadeUp} className="mt-20 pt-8 border-t border-border/40">
            <Link href="/products" className="inline-flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all">
              <ArrowLeft className="w-5 h-5" /> Back to Products
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}

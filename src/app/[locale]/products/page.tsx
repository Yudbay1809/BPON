import Image from 'next/image';
import { ArrowRight, Beaker, Droplets, Leaf, Package } from 'lucide-react';
import { getTranslations } from 'next-intl/server';
import { getLocalizedPageContent } from '@/content/page-content';
import { Link } from '@/i18n/routing';
import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';
import { PageHero } from '@/components/ui/PageHero';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { staggerContainer, staggerItem, fadeLeft, fadeRight, fadeUp } from '@/hooks/use-scroll-animation';
import { motion } from 'framer-motion';

export default async function ProductsPage(props: { params: Promise<{ locale: string }> }) {
  const params = await props.params;
  const t = await getTranslations({ locale: params.locale, namespace: 'Products' });
  const copy = getLocalizedPageContent(params.locale).products;
  const categoryIcons = [Droplets, Beaker, Leaf, Package];

  return (
    <div className="w-full pt-20">
      <PageHero
        imageSrc="/images/hero-products.jpg"
        imageAlt={copy.heroAlt}
        tag={t('tag')}
        title={t('title')}
      />

      {/* Intro + Certifications */}
      <section className="py-16 bg-primary">
        <AnimatedSection variants={fadeUp} className="container mx-auto px-4 md:px-8 max-w-7xl text-center">
          <p className="text-white/80 text-lg max-w-3xl mx-auto">{copy.intro}</p>
          <motion.div
            className="flex flex-wrap justify-center gap-3 mt-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {copy.certifications.map((certification) => (
              <motion.span
                key={certification}
                variants={staggerItem}
                className="bg-white/10 border border-white/30 text-white text-sm font-semibold px-4 py-2 rounded-full"
              >
                {certification}
              </motion.span>
            ))}
          </motion.div>
        </AnimatedSection>
      </section>

      {/* Product Catalog */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <AnimatedSection variants={fadeUp} className="text-center mb-16">
            <p className="text-accent font-bold tracking-widest uppercase text-sm mb-3">{copy.catalog.tag}</p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">{copy.catalog.title}</h2>
          </AnimatedSection>
          <div className="space-y-24">
            {copy.catalog.items.map((product, index) => {
              const Icon = categoryIcons[index];
              const isEven = index % 2 === 0;

              return (
                <div key={product.id} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                  <AnimatedSection
                    variants={isEven ? fadeLeft : fadeRight}
                    className={`${!isEven ? 'lg:order-last' : ''} relative h-[360px] rounded-2xl overflow-hidden shadow-xl`}
                  >
                    <Image src={product.imgSrc} alt={product.name} fill className="object-cover" />
                    <div className="absolute top-4 left-4">
                      <span className="bg-accent text-white text-xs font-bold px-3 py-1.5 rounded-full">{product.tag}</span>
                    </div>
                  </AnimatedSection>

                  <AnimatedSection
                    variants={isEven ? fadeRight : fadeLeft}
                    className="space-y-6"
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-3xl font-bold text-foreground">{product.name}</h3>
                    <p className="text-muted-foreground leading-relaxed">{product.desc}</p>

                    <div>
                      <h4 className="font-bold text-foreground mb-3">{copy.catalog.specTitle}</h4>
                      <div className="space-y-2">
                        {product.specs.map((spec) => (
                          <div key={spec.label} className="flex justify-between items-center py-2 border-b border-border/40 last:border-0">
                            <span className="text-sm text-muted-foreground">{spec.label}</span>
                            <span className="text-sm font-bold text-foreground">{spec.value}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-bold text-foreground mb-3">{copy.catalog.applicationTitle}</h4>
                      <motion.div
                        className="flex flex-wrap gap-2"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                      >
                        {product.applications.map((application) => (
                          <motion.span
                            key={application}
                            variants={staggerItem}
                            className="text-xs bg-primary/8 text-primary px-3 py-1.5 rounded-full border border-primary/20 font-semibold"
                          >
                            {application}
                          </motion.span>
                        ))}
                      </motion.div>
                    </div>
                  </AnimatedSection>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary">
        <AnimatedSection variants={fadeUp} className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">{copy.cta.title}</h2>
          <p className="text-white/70 mb-8 text-lg">{copy.cta.desc}</p>
          <Link href="/contact" className={cn(buttonVariants({ size: 'lg' }), 'bg-accent hover:bg-accent/90 text-white font-bold px-10 h-12')}>
            {copy.cta.button} <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </AnimatedSection>
      </section>
    </div>
  );
}

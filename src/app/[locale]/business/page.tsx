import Image from 'next/image';
import { ArrowRight, Factory, Leaf, TrendingUp, Truck } from 'lucide-react';
import { getTranslations } from 'next-intl/server';
import { getLocalizedPageContent } from '@/content/page-content';
import { Link } from '@/i18n/routing';
import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';
import { PageHero } from '@/components/ui/PageHero';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { 
  staggerContainer, 
  staggerItem, 
  fadeLeft, 
  fadeRight, 
  fadeUp, 
  scaleIn 
} from '@/hooks/use-scroll-animation';

export default async function BusinessPage(props: { params: Promise<{ locale: string }> }) {
  const params = await props.params;
  const t = await getTranslations({ locale: params.locale, namespace: 'Business' });
  const copy = getLocalizedPageContent(params.locale).business;
  const businessIcons = [Leaf, Factory, Truck];
  const integrationIcons = [Leaf, Factory, TrendingUp, Truck];

  return (
    <div className="w-full pt-20">
      <PageHero
        imageSrc="/images/hero-business.jpg"
        imageAlt={copy.heroAlt}
        tag={t('tag')}
        title={t('title')}
      />

      <section className="bg-primary">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <AnimatedSection 
            className="grid grid-cols-2 md:grid-cols-4"
            variants={staggerContainer}
          >
            {copy.financials.map((item) => (
              <AnimatedSection 
                key={item.label} 
                className="py-6 px-6 text-center border-r border-white/20 last:border-0"
                variants={staggerItem}
              >
                <p className="text-2xl md:text-3xl font-bold text-accent">{item.value}</p>
                <p className="text-white/70 text-sm mt-1">{item.label}</p>
              </AnimatedSection>
            ))}
          </AnimatedSection>
        </div>
      </section>

      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <AnimatedSection variants={fadeUp} className="text-center mb-16">
            <p className="text-accent font-bold tracking-widest uppercase text-sm mb-3">{copy.units.tag}</p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">{copy.units.title}</h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-lg">{copy.units.desc}</p>
          </AnimatedSection>

          <div className="space-y-16">
            {copy.units.items.map((business, index) => {
              const Icon = businessIcons[index];
              const isEven = index % 2 === 0;

              return (
                <div key={business.title} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <AnimatedSection 
                    variants={isEven ? fadeLeft : fadeRight}
                    className={`relative h-[400px] rounded-2xl overflow-hidden shadow-xl ${!isEven ? 'lg:order-last' : ''}`}
                  >
                    <Image src={business.imgSrc} alt={business.title} fill className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6 flex gap-4">
                      <AnimatedSection 
                        variants={scaleIn}
                        className="bg-white/90 backdrop-blur-sm rounded-xl px-4 py-3 text-center"
                      >
                        <p className="text-primary font-bold text-lg">{business.area}</p>
                        <p className="text-xs text-muted-foreground">{copy.units.capacityLabel}</p>
                      </AnimatedSection>
                      <AnimatedSection 
                        variants={scaleIn}
                        className="bg-white/90 backdrop-blur-sm rounded-xl px-4 py-3 flex-1 text-center"
                      >
                        <p className="text-primary font-bold text-sm leading-tight">{business.output}</p>
                        <p className="text-xs text-muted-foreground">{copy.units.outputLabel}</p>
                      </AnimatedSection>
                    </div>
                  </AnimatedSection>

                  <AnimatedSection 
                    variants={isEven ? fadeRight : fadeLeft}
                    className="space-y-6"
                  >
                    <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-3xl font-bold text-foreground">{business.title}</h3>
                    <div className="flex flex-wrap gap-2">
                      {business.areas.map((area) => (
                        <span key={area} className="text-xs font-semibold bg-primary/8 text-primary px-3 py-1.5 rounded-full border border-primary/20">
                          {area}
                        </span>
                      ))}
                    </div>
                    <ul className="space-y-3">
                      {business.highlights.map((highlight, hIndex) => (
                        <AnimatedSection 
                          key={highlight} 
                          variants={fadeUp}
                          customDelay={0.1 * hIndex}
                          className="flex items-start gap-3 text-muted-foreground"
                        >
                          <div className="w-1.5 h-1.5 bg-accent rounded-full shrink-0 mt-2" />
                          {highlight}
                        </AnimatedSection>
                      ))}
                    </ul>
                  </AnimatedSection>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#F5F5F5]">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl text-center">
          <AnimatedSection variants={fadeUp}>
            <p className="text-accent font-bold tracking-widest uppercase text-sm mb-3">{copy.integration.tag}</p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">{copy.integration.title}</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-12">{copy.integration.desc}</p>
          </AnimatedSection>
          
          <AnimatedSection 
            className="flex flex-col md:flex-row items-center justify-center gap-0 max-w-5xl mx-auto"
            variants={staggerContainer}
          >
            {copy.integration.steps.map((step, index) => {
              const Icon = integrationIcons[index];

              return (
                <div key={step.step} className="flex flex-col md:flex-row items-center group">
                  <AnimatedSection 
                    variants={scaleIn}
                    customDelay={index * 0.1}
                    className="bg-white rounded-3xl p-8 text-center border border-border/40 min-w-[180px] shadow-sm group-hover:shadow-xl group-hover:border-primary/30 group-hover:-translate-y-2 transition-all duration-300"
                  >
                    <div className="text-xs font-bold text-accent mb-3 tracking-widest uppercase">{step.step}</div>
                    <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                      <Icon className="w-7 h-7" />
                    </div>
                    <p className="font-bold text-foreground text-lg mb-1">{step.label}</p>
                    <p className="text-xs text-muted-foreground leading-relaxed">{step.desc}</p>
                  </AnimatedSection>
                  {index < copy.integration.steps.length - 1 && (
                    <div className="relative w-12 h-0.5 bg-primary/20 hidden md:block shrink-0 overflow-hidden">
                      <AnimatedSection 
                        variants={fadeLeft}
                        className="absolute inset-0 bg-primary"
                        customDelay={index * 0.1 + 0.3}
                      />
                    </div>
                  )}
                  {index < copy.integration.steps.length - 1 && (
                    <div className="relative w-0.5 h-10 bg-primary/20 md:hidden overflow-hidden">
                      <AnimatedSection 
                        variants={fadeUp}
                        className="absolute inset-0 bg-primary"
                        customDelay={index * 0.1 + 0.3}
                      />
                    </div>
                  )}
                </div>
              );
            })}
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 bg-primary overflow-hidden">
        <AnimatedSection variants={fadeUp} className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">{copy.cta.title}</h2>
          <p className="text-white/70 mb-10 text-lg">{copy.cta.desc}</p>
          <Link href="/contact" className={cn(buttonVariants({ size: 'lg' }), 'bg-accent hover:bg-accent/90 text-white font-bold px-12 h-14 text-lg transition-all hover:scale-105 active:scale-95 shadow-lg hover:shadow-accent/20')}>
            {copy.cta.button} <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </AnimatedSection>
      </section>
    </div>
  );
}

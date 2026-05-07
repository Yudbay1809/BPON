import { ArrowRight, Factory, Leaf, Truck } from 'lucide-react';
import { getTranslations } from 'next-intl/server';
import { getLocalizedPageContent } from '@/content/page-content';
import { Link } from '@/i18n/routing';
import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';
import { PageHero } from '@/components/ui/PageHero';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { fadeUp } from '@/hooks/use-scroll-animation';
import { BusinessMetricsBand } from '@/components/business/BusinessMetricsBand';
import { BusinessUnitCard } from '@/components/business/BusinessUnitCard';
import { BusinessIntegrationFlow } from '@/components/business/BusinessIntegrationFlow';

export default async function BusinessPage(props: { params: Promise<{ locale: string }> }) {
  const params = await props.params;
  const t = await getTranslations({ locale: params.locale, namespace: 'Business' });
  const copy = getLocalizedPageContent(params.locale).business;
  const businessIcons = [Leaf, Factory, Truck];

  return (
    <div className="w-full pt-20">
      <PageHero
        imageSrc="/images/hero-business.jpg"
        imageAlt={copy.heroAlt}
        tag={t('tag')}
        title={t('title')}
      />

      <BusinessMetricsBand items={copy.financials} />

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

              return (
                <BusinessUnitCard
                  key={business.title}
                  title={business.title}
                  areas={business.areas}
                  area={business.area}
                  output={business.output}
                  highlights={business.highlights}
                  imgSrc={business.imgSrc}
                  icon={Icon}
                  reverse={index % 2 !== 0}
                />
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#F5F5F5]">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl text-center">
          <BusinessIntegrationFlow
            tag={copy.integration.tag}
            title={copy.integration.title}
            desc={copy.integration.desc}
            steps={copy.integration.steps}
          />
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

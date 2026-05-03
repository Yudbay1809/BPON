import Image from 'next/image';
import { ArrowRight, Factory, Leaf, TrendingUp, Truck } from 'lucide-react';
import { getTranslations } from 'next-intl/server';
import { getLocalizedPageContent } from '@/content/page-content';
import { Link } from '@/i18n/routing';
import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';

export default async function BusinessPage(props: { params: Promise<{ locale: string }> }) {
  const params = await props.params;
  const t = await getTranslations({ locale: params.locale, namespace: 'Business' });
  const copy = getLocalizedPageContent(params.locale).business;
  const businessIcons = [Leaf, Factory, Truck];
  const integrationIcons = [Leaf, Factory, TrendingUp, Truck];

  return (
    <div className="w-full pt-20">
      <section className="relative h-72 md:h-96 flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-business.jpg"
            alt={copy.heroAlt}
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

      <section className="bg-primary">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {copy.financials.map((item) => (
              <div key={item.label} className="py-6 px-6 text-center border-r border-white/20 last:border-0">
                <p className="text-2xl md:text-3xl font-bold text-accent">{item.value}</p>
                <p className="text-white/70 text-sm mt-1">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <p className="text-accent font-bold tracking-widest uppercase text-sm mb-3">{copy.units.tag}</p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">{copy.units.title}</h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-lg">{copy.units.desc}</p>
          </div>

          <div className="space-y-16">
            {copy.units.items.map((business, index) => {
              const Icon = businessIcons[index];

              return (
                <div key={business.title} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className={`relative h-[400px] rounded-2xl overflow-hidden shadow-xl ${index % 2 !== 0 ? 'lg:order-last' : ''}`}>
                    <Image src={business.imgSrc} alt={business.title} fill className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6 flex gap-4">
                      <div className="bg-white/90 backdrop-blur-sm rounded-xl px-4 py-3 text-center">
                        <p className="text-primary font-bold text-lg">{business.area}</p>
                        <p className="text-xs text-muted-foreground">{copy.units.capacityLabel}</p>
                      </div>
                      <div className="bg-white/90 backdrop-blur-sm rounded-xl px-4 py-3 flex-1 text-center">
                        <p className="text-primary font-bold text-sm leading-tight">{business.output}</p>
                        <p className="text-xs text-muted-foreground">{copy.units.outputLabel}</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
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
                      {business.highlights.map((highlight) => (
                        <li key={highlight} className="flex items-start gap-3 text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-accent rounded-full shrink-0 mt-2" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#F5F5F5]">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl text-center">
          <p className="text-accent font-bold tracking-widest uppercase text-sm mb-3">{copy.integration.tag}</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">{copy.integration.title}</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-12">{copy.integration.desc}</p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-0 max-w-4xl mx-auto">
            {copy.integration.steps.map((step, index) => {
              const Icon = integrationIcons[index];

              return (
                <div key={step.step} className="flex flex-col md:flex-row items-center">
                  <div className="bg-white rounded-2xl p-6 text-center border border-border/40 min-w-[150px]">
                    <div className="text-xs font-bold text-accent mb-2">{step.step}</div>
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <p className="font-bold text-foreground">{step.label}</p>
                    <p className="text-xs text-muted-foreground mt-1">{step.desc}</p>
                  </div>
                  {index < copy.integration.steps.length - 1 && <div className="w-8 h-0.5 bg-primary/30 hidden md:block shrink-0" />}
                  {index < copy.integration.steps.length - 1 && <div className="w-0.5 h-6 bg-primary/30 md:hidden" />}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">{copy.cta.title}</h2>
          <p className="text-white/70 mb-8 text-lg">{copy.cta.desc}</p>
          <Link href="/contact" className={cn(buttonVariants({ size: 'lg' }), 'bg-accent hover:bg-accent/90 text-white font-bold px-10 h-12')}>
            {copy.cta.button} <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}

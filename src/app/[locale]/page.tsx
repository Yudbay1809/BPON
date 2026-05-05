import Image from 'next/image';
import {
  ArrowRight,
  Award,
  CheckCircle2,
  Factory,
  Globe,
  Leaf,
  TrendingUp,
  Truck,
  Users,
} from 'lucide-react';
import { getTranslations } from 'next-intl/server';
import { getLocalizedPageContent } from '@/content/page-content';
import { Link } from '@/i18n/routing';
import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';

export default async function HomePage(props: { params: Promise<{ locale: string }> }) {
  const params = await props.params;
  const t = await getTranslations({ locale: params.locale, namespace: 'HomePage' });
  const copy = getLocalizedPageContent(params.locale).home;
  const coreBusinessIcons = [Leaf, Factory, Truck];
  const sustainabilityIcons = [Globe, Users, TrendingUp, Award];

  return (
    <div className="w-full overflow-x-hidden">
      <section className="relative h-screen min-h-[700px] w-full flex items-end justify-start overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-plantation.jpg"
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
              <p className="text-accent font-semibold tracking-widest uppercase text-xs sm:text-sm mb-4">
                {t('hero_subtitle')}
              </p>
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
                {t('hero_title_1')}
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C9A227] to-[#F0D060]">
                  {t('hero_title_highlight')}
                </span>
                <br />
                {t('hero_title_2')}
              </h1>
              <p className="text-base md:text-xl text-gray-300 max-w-xl mb-10 font-light leading-relaxed">
                {t('hero_desc')}
              </p>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-start gap-4">
                <Link
                  href="/about"
                  className={cn(
                    buttonVariants({ size: 'lg' }),
                    'bg-primary hover:bg-primary/90 text-white font-semibold px-8 h-12 text-base',
                  )}
                >
                  {t('hero_btn_about')}
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
                <Link
                  href="/contact"
                  className={cn(
                    buttonVariants({ size: 'lg', variant: 'outline' }),
                    '!bg-transparent border-white/50 !text-white hover:!bg-white/10 hover:border-white font-semibold px-8 h-12 text-base',
                  )}
                >
                  {t('hero_btn_contact')}
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 z-20">
          <div className="bg-primary/95 backdrop-blur-sm">
            <div className="container mx-auto px-4 md:px-8 max-w-7xl">
              <div className="grid grid-cols-2 md:grid-cols-4">
                {copy.stats.map((stat, index) => (
                  <div key={index} className="py-4 px-2 sm:py-5 sm:px-6 text-center border-r border-white/20 last:border-0">
                    <p className="text-2xl sm:text-3xl font-bold text-accent">{stat.value}</p>
                    <p className="text-white/70 text-[10px] sm:text-sm mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-28 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="mb-12 md:mb-16 max-w-2xl">
            <p className="text-accent font-bold tracking-widest uppercase text-xs sm:text-sm mb-3">{copy.coreBusiness.tag}</p>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground leading-tight">
              {copy.coreBusiness.titleLines[0]}
              <br />
              {copy.coreBusiness.titleLines[1]}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {copy.coreBusiness.items.map((biz, index) => {
              const Icon = coreBusinessIcons[index];

              return (
                <div
                  key={biz.title}
                  className="group relative border border-border/40 rounded-2xl p-8 hover:border-primary/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-white overflow-hidden"
                >
                  <div className="absolute top-0 left-0 w-1 h-0 bg-primary group-hover:h-full transition-all duration-500 rounded-l-2xl" />
                  <div className="w-16 h-16 bg-primary/8 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
                    <Icon className="w-8 h-8 text-primary group-hover:text-white transition-colors duration-300" />
                  </div>
                  <p className="text-xs text-accent font-bold tracking-widest uppercase mb-2">{biz.subtitle}</p>
                  <h3 className="text-2xl font-bold text-foreground mb-4">{biz.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{biz.desc}</p>
                  <Link href="/business" className="inline-flex items-center gap-2 mt-6 text-primary font-semibold text-sm group-hover:gap-3 transition-all">
                    {copy.coreBusiness.more} <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-28 bg-[#F5F5F5]">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="relative">
              <div className="relative h-[400px] md:h-[560px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/about-building.jpg"
                  alt={copy.about.imageAlt}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute bottom-4 right-4 md:-bottom-6 md:-right-6 bg-primary text-white rounded-2xl p-4 md:p-6 shadow-xl max-w-[160px] md:max-w-[220px]">
                <p className="text-3xl md:text-5xl font-bold">35+</p>
                <p className="text-white/80 text-[10px] md:text-sm mt-1">{copy.about.floatingStat}</p>
              </div>
            </div>

            <div className="space-y-6">
              <p className="text-accent font-bold tracking-widest uppercase text-sm">{copy.about.tag}</p>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
                {copy.about.titleLines[0]}
                <br />
                {copy.about.titleLines[1]}
                <br />
                <span className="text-primary">{copy.about.titleLines[2]}</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">{copy.about.desc}</p>
              <ul className="space-y-3 py-2">
                {copy.about.checklist.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    <span className="font-medium text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="/about" className={cn(buttonVariants({ size: 'lg' }), 'bg-primary hover:bg-primary/90 text-white mt-4 group')}>
                {copy.about.cta}
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-28 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <p className="text-accent font-bold tracking-widest uppercase text-xs sm:text-sm mb-3">{copy.products.tag}</p>
              <h2 className="text-3xl md:text-5xl font-bold text-foreground">{copy.products.title}</h2>
            </div>
            <Link href="/products" className={cn(buttonVariants({ variant: 'outline' }), 'border-primary text-primary hover:bg-primary hover:text-white')}>
              {copy.products.more}
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {copy.products.items.map((product) => (
              <div key={product.name} className="group bg-[#F5F5F5] rounded-2xl p-6 hover:bg-primary transition-colors duration-300">
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

      <section className="py-28 relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-sustainability.jpg"
            alt="Green Forest"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[#1A0505]/90" />
        </div>
        <div className="relative z-10 container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="text-center mb-12 md:mb-16">
            <p className="text-accent font-bold tracking-widest uppercase text-xs sm:text-sm mb-3">{copy.sustainability.tag}</p>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">{copy.sustainability.title}</h2>
            <p className="text-white/70 max-w-2xl mx-auto text-base md:text-lg px-4">{copy.sustainability.desc}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {copy.sustainability.items.map((item, index) => {
              const Icon = sustainabilityIcons[index];

              return (
                <div key={item.title} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center hover:bg-white/20 transition-colors">
                  <div className="w-14 h-14 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-7 h-7 text-accent" />
                  </div>
                  <h3 className="text-white font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-white/65 text-sm leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
          <div className="text-center">
            <Link href="/sustainability" className={cn(buttonVariants({ size: 'lg' }), 'bg-accent hover:bg-accent/90 text-white font-semibold px-10 h-12')}>
              {copy.sustainability.cta}
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-28 bg-[#F5F5F5]">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <p className="text-accent font-bold tracking-widest uppercase text-sm mb-3">{copy.news.tag}</p>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">{copy.news.title}</h2>
            </div>
            <Link href="/news" className={cn(buttonVariants({ variant: 'outline' }), 'border-primary text-primary hover:bg-primary hover:text-white')}>
              {copy.news.more}
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {copy.news.items.map((item) => (
              <div key={item.title} className="bg-white rounded-2xl overflow-hidden group hover:shadow-xl transition-shadow duration-300">
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs font-bold bg-primary/10 text-primary px-3 py-1 rounded-full">{item.category}</span>
                    <span className="text-xs text-muted-foreground">{item.date}</span>
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors leading-snug">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.excerpt}</p>
                  <div className="mt-6 pt-6 border-t border-border/50">
                    <Link href="/news" className="inline-flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all">
                      {copy.news.readMore} <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-primary">
        <div className="container mx-auto px-6 md:px-8 max-w-7xl text-center">
          <p className="text-accent font-bold tracking-widest uppercase text-xs sm:text-sm mb-4">{t('cta_tag')}</p>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 max-w-3xl mx-auto leading-tight">
            {t('cta_title')}
          </h2>
          <p className="text-white/70 text-base md:text-lg mb-10 max-w-2xl mx-auto">{t('cta_desc')}</p>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 px-4 sm:px-0">
            <Link href="/contact" className={cn(buttonVariants({ size: 'lg' }), 'bg-accent hover:bg-accent/90 text-white font-bold px-10 h-12 text-base')}>
              {t('cta_btn_contact')}
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
            <Link
              href="/products"
              className={cn(
                buttonVariants({ size: 'lg', variant: 'outline' }),
                '!bg-transparent border-white/50 !text-white hover:!bg-white/10 font-semibold px-10 h-12 text-base',
              )}
            >
              {t('cta_btn_products')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

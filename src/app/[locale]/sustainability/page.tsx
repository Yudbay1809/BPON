import { ArrowRight, Award, Droplets, Globe, TreePine, Users, Zap } from 'lucide-react';
import { getTranslations } from 'next-intl/server';
import { getLocalizedPageContent } from '@/content/page-content';
import { Link } from '@/i18n/routing';
import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';
import { PageHero } from '@/components/ui/PageHero';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { staggerContainer, staggerItem, fadeUp } from '@/hooks/use-scroll-animation';

export default async function SustainabilityPage(props: { params: Promise<{ locale: string }> }) {
  const params = await props.params;
  const t = await getTranslations({ locale: params.locale, namespace: 'Sustainability' });
  const copy = getLocalizedPageContent(params.locale).sustainability;
  const pillarIcons = [TreePine, Zap, Droplets, Users, Globe, Award];

  return (
    <div className="w-full pt-20">
      <PageHero
        imageSrc="/images/hero-sustainability.jpg"
        imageAlt={copy.heroAlt}
        overlayColor="bg-[#0a2e0e]/85"
        tag={t('tag')}
        title={t('title')}
      />

      {/* Commitment Quote */}
      <section className="py-20 bg-[#0F2914] text-white">
        <AnimatedSection variants={fadeUp} className="container mx-auto px-4 md:px-8 max-w-4xl text-center">
          <p className="text-accent font-bold tracking-widest uppercase text-sm mb-4">{copy.commitment.tag}</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">{copy.commitment.quote}</h2>
          <p className="text-white/70 text-lg leading-relaxed">{copy.commitment.desc}</p>
        </AnimatedSection>
      </section>

      {/* Pillars with animated progress bars */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <AnimatedSection variants={fadeUp} className="text-center mb-16">
            <p className="text-accent font-bold tracking-widest uppercase text-sm mb-3">{copy.pillars.tag}</p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">{copy.pillars.title}</h2>
          </AnimatedSection>
          <AnimatedSection
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
          >
            {copy.pillars.items.map((pillar, index) => {
              const Icon = pillarIcons[index];
              return (
                <div
                  key={pillar.title}
                  className="border border-border/40 rounded-2xl p-7 hover:border-primary/30 hover:shadow-lg transition-all"
                >
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <span className="text-xs font-bold text-accent bg-accent/10 px-3 py-1 rounded-full">{pillar.target}</span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{pillar.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-5">{pillar.desc}</p>
                  {/* Animated progress bar */}
                  <div>
                    <div className="flex justify-between text-xs mb-1.5">
                      <span className="text-muted-foreground">{copy.pillars.progressLabel}</span>
                      <span className="font-bold text-primary">{pillar.progress}%</span>
                    </div>
                    <div className="h-2 bg-border rounded-full overflow-hidden">
                      <div
                        className="h-full bg-primary rounded-full"
                        style={{ width: `${pillar.progress}%` }}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </AnimatedSection>
        </div>
      </section>

      {/* SDGs */}
      <section className="py-24 bg-[#F5F5F5]">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <AnimatedSection variants={fadeUp} className="text-center mb-12">
            <p className="text-accent font-bold tracking-widest uppercase text-sm mb-3">{copy.sdgs.tag}</p>
            <h2 className="text-4xl font-bold text-foreground mb-4">{copy.sdgs.title}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">{copy.sdgs.desc}</p>
          </AnimatedSection>
          <AnimatedSection
            className="flex flex-wrap justify-center gap-4"
            variants={staggerContainer}
          >
            {copy.sdgs.items.map((sdg) => (
              <div
                key={sdg.no}
                className="bg-primary text-white rounded-xl px-5 py-4 text-center min-w-[120px]"
              >
                <p className="text-2xl font-bold text-accent">SDG {sdg.no}</p>
                <p className="text-xs text-white/80 mt-1">{sdg.label}</p>
              </div>
            ))}
          </AnimatedSection>
        </div>
      </section>

      {/* Reports */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <AnimatedSection variants={fadeUp} className="text-center mb-12">
            <p className="text-accent font-bold tracking-widest uppercase text-sm mb-3">{copy.reports.tag}</p>
            <h2 className="text-4xl font-bold text-foreground">{copy.reports.title}</h2>
          </AnimatedSection>
          <AnimatedSection
            className="max-w-2xl mx-auto space-y-4"
            variants={staggerContainer}
          >
            {copy.reports.items.map((report) => (
              <div
                key={report.year}
                className="flex items-center justify-between p-5 border border-border/40 rounded-xl hover:border-primary/30 hover:bg-primary/3 transition-all group"
              >
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
                  {copy.reports.button} <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </AnimatedSection>
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

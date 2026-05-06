import Image from 'next/image';
import { ArrowRight, CheckCircle2, Eye, Target, Users } from 'lucide-react';
import { getTranslations } from 'next-intl/server';
import { getLocalizedPageContent } from '@/content/page-content';
import { Link } from '@/i18n/routing';
import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';
import { PageHero } from '@/components/ui/PageHero';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { staggerContainer, staggerItem, fadeLeft, fadeRight, fadeUp } from '@/hooks/use-scroll-animation';
import { motion } from 'framer-motion';

export default async function AboutPage(props: { params: Promise<{ locale: string }> }) {
  const params = await props.params;
  const t = await getTranslations({ locale: params.locale, namespace: 'About' });
  const copy = getLocalizedPageContent(params.locale).about;

  return (
    <div className="w-full pt-20">
      <PageHero
        imageSrc="/images/hero-about.jpg"
        imageAlt={copy.heroAlt}
        tag={t('hero_tag')}
        title={t('hero_title')}
      />

      {/* Vision & Mission */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={staggerContainer}
          >
            <motion.div variants={staggerItem} className="bg-primary rounded-2xl p-8 text-white">
              <Eye className="w-10 h-10 text-accent mb-5" />
              <h2 className="text-2xl font-bold mb-4">{copy.visionTitle}</h2>
              <p className="text-white/80 leading-relaxed">{copy.visionDesc}</p>
            </motion.div>
            <motion.div variants={staggerItem} className="bg-[#F5F5F5] rounded-2xl p-8 md:col-span-2">
              <Target className="w-10 h-10 text-primary mb-5" />
              <h2 className="text-2xl font-bold text-foreground mb-4">{copy.missionTitle}</h2>
              <ul className="space-y-3">
                {copy.missionItems.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Company Profile */}
      <section className="py-24 bg-[#F5F5F5]">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection variants={fadeLeft} className="space-y-6">
              <p className="text-accent font-bold tracking-widest uppercase text-sm">{copy.profile.tag}</p>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
                {copy.profile.titleLines[0]}
                <br />
                <span className="text-primary">{copy.profile.titleLines[1]}</span>
                <br />
                {copy.profile.titleLines[2]}
              </h2>
              {copy.profile.paragraphs.map((paragraph) => (
                <p key={paragraph} className="text-lg text-muted-foreground leading-relaxed">
                  {paragraph}
                </p>
              ))}
              <motion.div
                className="grid grid-cols-2 gap-6 pt-4"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
              >
                {copy.profile.stats.map((stat) => (
                  <motion.div key={stat.label} variants={staggerItem} className="bg-white rounded-xl p-5 border border-border/40">
                    <p className="text-3xl font-bold text-primary">{stat.value}</p>
                    <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatedSection>

            <AnimatedSection variants={fadeRight} className="relative h-[540px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/hero-sustainability.jpg"
                alt={copy.profile.imageAlt}
                fill
                className="object-cover"
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <AnimatedSection variants={fadeUp} className="text-center mb-16">
            <p className="text-accent font-bold tracking-widest uppercase text-sm mb-3">{copy.timeline.tag}</p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">{copy.timeline.title}</h2>
          </AnimatedSection>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-border hidden md:block" />
            <div className="space-y-12">
              {copy.timeline.items.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.55, delay: index * 0.07 }}
                >
                  <div className="flex-1 md:text-right">
                    {index % 2 === 0 ? (
                      <div className="bg-[#F5F5F5] rounded-2xl p-6 md:ml-auto md:max-w-sm">
                        <p className="text-primary font-bold text-2xl mb-2">{milestone.year}</p>
                        <p className="text-muted-foreground">{milestone.event}</p>
                      </div>
                    ) : (
                      <div />
                    )}
                  </div>
                  <motion.div
                    className="w-5 h-5 bg-primary rounded-full border-4 border-white shadow-md shrink-0 hidden md:block"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.07 + 0.2, type: 'spring', stiffness: 400 }}
                  />
                  <div className="flex-1">
                    {index % 2 !== 0 ? (
                      <div className="bg-[#F5F5F5] rounded-2xl p-6 md:max-w-sm">
                        <p className="text-primary font-bold text-2xl mb-2">{milestone.year}</p>
                        <p className="text-muted-foreground">{milestone.event}</p>
                      </div>
                    ) : (
                      <div />
                    )}
                    <div className="md:hidden bg-[#F5F5F5] rounded-2xl p-6">
                      <p className="text-primary font-bold text-2xl mb-2">{milestone.year}</p>
                      <p className="text-muted-foreground">{milestone.event}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-24 bg-[#F5F5F5]">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <AnimatedSection variants={fadeUp} className="text-center mb-16">
            <p className="text-accent font-bold tracking-widest uppercase text-sm mb-3">{copy.leadership.tag}</p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">{copy.leadership.title}</h2>
          </AnimatedSection>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
          >
            {copy.leadership.members.map((person) => (
              <motion.div
                key={person.name}
                variants={staggerItem}
                className="bg-white rounded-2xl p-6 text-center border border-border/40 hover:border-primary/30 hover:shadow-lg transition-all"
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
              >
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-10 h-10 text-primary" />
                </div>
                <h3 className="font-bold text-foreground text-lg">{person.name}</h3>
                <p className="text-primary font-semibold text-sm mt-1">{person.role}</p>
                <p className="text-muted-foreground text-xs mt-2">{person.tenure}</p>
              </motion.div>
            ))}
          </motion.div>
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

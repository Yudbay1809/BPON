'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowRight, Award, Globe, TrendingUp, Users, type LucideIcon } from 'lucide-react';
import { Link } from '@/i18n/routing';
import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';
import { fadeUp, scaleIn, staggerContainer, staggerItem } from '@/hooks/use-scroll-animation';

type SustainabilitySectionProps = {
  content: {
    tag: string;
    title: string;
    desc: string;
    items: Array<{ title: string; desc: string }>;
    cta: string;
  };
};

const sustainabilityIcons: LucideIcon[] = [Globe, Users, TrendingUp, Award];

export function SustainabilitySection({ content }: SustainabilitySectionProps) {
  return (
    <section className="py-28 relative overflow-hidden">
      {/* Parallax-like background */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.05 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
      >
        <Image
          src="/images/hero-sustainability.jpg"
          alt="Green Forest"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#1A0505]/90" />
      </motion.div>

      <div className="relative z-10 container mx-auto px-4 md:px-8 max-w-7xl">
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          transition={{ duration: 0.7 }}
        >
          <p className="text-accent font-bold tracking-widest uppercase text-xs sm:text-sm mb-3">{content.tag}</p>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">{content.title}</h2>
          <p className="text-white/70 max-w-2xl mx-auto text-base md:text-lg px-4">{content.desc}</p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
        >
          {content.items.map((item, index) => {
            const Icon = sustainabilityIcons[index];
            return (
              <motion.div
                key={item.title}
                variants={staggerItem}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center hover:bg-white/20 transition-colors"
                whileHover={{ scale: 1.04, transition: { duration: 0.2 } }}
              >
                <motion.div
                  className="w-14 h-14 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4"
                  variants={scaleIn}
                >
                  <Icon className="w-7 h-7 text-accent" />
                </motion.div>
                <h3 className="text-white font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-white/65 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          className="text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeUp}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Link href="/sustainability" className={cn(buttonVariants({ size: 'lg' }), 'bg-accent hover:bg-accent/90 text-white font-semibold px-10 h-12')}>
            {content.cta}
            <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

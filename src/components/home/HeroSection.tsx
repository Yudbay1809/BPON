'use client';

import { motion } from 'framer-motion';
import { Link } from '@/i18n/routing';
import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

type HeroSectionProps = {
  t: (key: string) => string;
  stats: ReadonlyArray<{ readonly label: string; readonly value: string }>;
};

const heroContentVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const heroItemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const statVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: 0.8 + i * 0.1, ease: 'easeOut' },
  }),
};

export function HeroSection({ t, stats }: HeroSectionProps) {
  return (
    <section className="relative h-screen min-h-[650px] sm:min-h-[700px] w-full flex items-center sm:items-end justify-start overflow-hidden">
      {/* Background image with subtle zoom animation */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.5, ease: 'easeOut' }}
      >
        <Image
          src="/images/hero-plantation.jpg"
          alt="Palm Oil Plantation Aerial View"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      </motion.div>

      <div className="relative z-10 w-full pb-48 sm:pb-32">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <motion.div
            className="max-w-3xl"
            variants={heroContentVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.p
              className="text-accent font-semibold tracking-widest uppercase text-xs sm:text-sm mb-4"
              variants={heroItemVariants}
            >
              {t('hero_subtitle')}
            </motion.p>
            <motion.h1
              className="text-4xl sm:text-5xl md:text-7xl font-bold text-white leading-tight mb-6"
              variants={heroItemVariants}
            >
              {t('hero_title_1')}
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C9A227] to-[#F0D060]">
                {t('hero_title_highlight')}
              </span>
              <br />
              {t('hero_title_2')}
            </motion.h1>
            <motion.p
              className="text-base md:text-xl text-gray-300 max-w-xl mb-10 font-light leading-relaxed"
              variants={heroItemVariants}
            >
              {t('hero_desc')}
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row items-stretch sm:items-start gap-4"
              variants={heroItemVariants}
            >
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
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Stats bar */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <div className="bg-primary/95 backdrop-blur-sm">
          <div className="container mx-auto px-4 md:px-8 max-w-7xl">
            <div className="grid grid-cols-2 md:grid-cols-4 border-white/30">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  custom={index}
                  variants={statVariants}
                  initial="hidden"
                  animate="visible"
                  className={cn(
                    'py-4 px-2 sm:py-5 sm:px-6 text-center border-white/30',
                    index % 2 === 0 ? 'border-r' : '',
                    index < 2 ? 'border-b' : '',
                    'md:border-b-0 md:border-r md:last:border-r-0',
                  )}
                >
                  <p className="text-2xl sm:text-3xl font-bold text-accent">{stat.value}</p>
                  <p className="text-white/70 text-[10px] sm:text-sm mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

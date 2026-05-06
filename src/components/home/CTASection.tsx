'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from '@/i18n/routing';
import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';
import { fadeUp, staggerContainer, staggerItem } from '@/hooks/use-scroll-animation';

type CTASectionProps = {
  t: (key: string) => string;
};

export function CTASection({ t }: CTASectionProps) {
  return (
    <section className="py-20 md:py-28 bg-primary overflow-hidden relative">
      {/* Decorative animated background circles */}
      <motion.div
        className="absolute -top-32 -right-32 w-96 h-96 bg-white/5 rounded-full"
        animate={{ scale: [1, 1.15, 1], rotate: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute -bottom-24 -left-24 w-72 h-72 bg-accent/10 rounded-full"
        animate={{ scale: [1, 1.2, 1], rotate: [0, -15, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      />

      <div className="relative z-10 container mx-auto px-6 md:px-8 max-w-7xl text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          <motion.p
            className="text-accent font-bold tracking-widest uppercase text-xs sm:text-sm mb-4"
            variants={staggerItem}
          >
            {t('cta_tag')}
          </motion.p>
          <motion.h2
            className="text-3xl md:text-5xl font-bold text-white mb-6 max-w-3xl mx-auto leading-tight"
            variants={staggerItem}
          >
            {t('cta_title')}
          </motion.h2>
          <motion.p
            className="text-white/70 text-base md:text-lg mb-10 max-w-2xl mx-auto"
            variants={staggerItem}
          >
            {t('cta_desc')}
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 px-4 sm:px-0"
            variants={staggerItem}
          >
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
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

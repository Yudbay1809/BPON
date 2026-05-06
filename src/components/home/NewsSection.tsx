'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from '@/i18n/routing';
import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';
import { fadeUp, staggerContainer, staggerItem } from '@/hooks/use-scroll-animation';

type NewsSectionProps = {
  content: {
    readonly tag: string;
    readonly title: string;
    readonly more: string;
    readonly items: ReadonlyArray<{ readonly title: string; readonly category: string; readonly date: string; readonly excerpt: string }>;
    readonly readMore: string;
  };
};

export function NewsSection({ content }: NewsSectionProps) {
  return (
    <section className="py-28 bg-[#F5F5F5]">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <motion.div
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          transition={{ duration: 0.65 }}
        >
          <div>
            <p className="text-accent font-bold tracking-widest uppercase text-sm mb-3">{content.tag}</p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">{content.title}</h2>
          </div>
          <Link href="/news" className={cn(buttonVariants({ variant: 'outline' }), 'border-primary text-primary hover:bg-primary hover:text-white')}>
            {content.more}
          </Link>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
        >
          {content.items.map((item) => (
            <motion.div
              key={item.title}
              variants={staggerItem}
              className="bg-white rounded-2xl overflow-hidden group hover:shadow-xl transition-shadow duration-300"
              whileHover={{ y: -8, transition: { duration: 0.25, ease: 'easeOut' as any } }}
            >
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-bold bg-primary/10 text-primary px-3 py-1 rounded-full">{item.category}</span>
                  <span className="text-xs text-muted-foreground">{item.date}</span>
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors leading-snug">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.excerpt}</p>
                <div className="mt-6 pt-6 border-t border-border/50">
                  <Link href="/news" className="inline-flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all">
                    {content.readMore} <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

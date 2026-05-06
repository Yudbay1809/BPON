'use client';

import { motion } from 'framer-motion';
import { Leaf } from 'lucide-react';
import { Link } from '@/i18n/routing';
import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';
import { fadeUp, staggerContainer, staggerItem } from '@/hooks/use-scroll-animation';

type ProductsSectionProps = {
  content: {
    readonly tag: string;
    readonly title: string;
    readonly more: string;
    readonly items: ReadonlyArray<{ readonly name: string; readonly desc: string }>;
  };
};

export function ProductsSection({ content }: ProductsSectionProps) {
  return (
    <section className="py-28 bg-white">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <motion.div
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          transition={{ duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] as any }}
        >
          <div>
            <p className="text-accent font-bold tracking-widest uppercase text-xs sm:text-sm mb-3">{content.tag}</p>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground">{content.title}</h2>
          </div>
          <Link href="/products" className={cn(buttonVariants({ variant: 'outline' }), 'border-primary text-primary hover:bg-primary hover:text-white')}>
            {content.more}
          </Link>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
        >
          {content.items.map((product) => (
            <motion.div
              key={product.name}
              variants={staggerItem}
              className="group bg-[#F5F5F5] rounded-2xl p-6 hover:bg-primary transition-colors duration-300 cursor-default"
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
            >
              <div className="w-12 h-12 bg-primary/10 group-hover:bg-white/20 rounded-xl flex items-center justify-center mb-5 transition-colors">
                <Leaf className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-lg font-bold text-foreground group-hover:text-white mb-2 transition-colors">{product.name}</h3>
              <p className="text-muted-foreground group-hover:text-white/80 text-sm leading-relaxed transition-colors">{product.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

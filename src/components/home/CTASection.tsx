import { ArrowRight } from 'lucide-react';
import { Link } from '@/i18n/routing';
import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';

type CTASectionProps = {
  t: (key: string) => string;
};

export function CTASection({ t }: CTASectionProps) {
  return (
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
  );
}

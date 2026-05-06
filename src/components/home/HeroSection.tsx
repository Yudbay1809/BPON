import Image from 'next/image';
import { Link } from '@/i18n/routing';
import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

type HeroSectionProps = {
  t: (key: string) => string;
  stats: Array<{ label: string; value: string }>;
};

export function HeroSection({ t, stats }: HeroSectionProps) {
  return (
    <section className="relative h-screen min-h-[650px] sm:min-h-[700px] w-full flex items-center sm:items-end justify-start overflow-hidden">
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

      <div className="relative z-10 w-full pb-48 sm:pb-32">
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
            <div className="grid grid-cols-2 md:grid-cols-4 border-white/30">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className={cn(
                    "py-4 px-2 sm:py-5 sm:px-6 text-center border-white/30",
                    index % 2 === 0 ? "border-r" : "",
                    index < 2 ? "border-b" : "",
                    "md:border-b-0 md:border-r md:last:border-r-0"
                  )}
                >
                  <p className="text-2xl sm:text-3xl font-bold text-accent">{stat.value}</p>
                  <p className="text-white/70 text-[10px] sm:text-sm mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

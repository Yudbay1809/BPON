import Image from 'next/image';
import { ArrowRight, Award, Globe, TrendingUp, Users, type LucideIcon } from 'lucide-react';
import { Link } from '@/i18n/routing';
import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';

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
          <p className="text-accent font-bold tracking-widest uppercase text-xs sm:text-sm mb-3">{content.tag}</p>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">{content.title}</h2>
          <p className="text-white/70 max-w-2xl mx-auto text-base md:text-lg px-4">{content.desc}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {content.items.map((item, index) => {
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
            {content.cta}
            <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

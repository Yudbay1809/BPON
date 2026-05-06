import Image from 'next/image';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from '@/i18n/routing';
import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';

type AboutSectionProps = {
  content: {
    tag: string;
    titleLines: string[];
    desc: string;
    checklist: string[];
    cta: string;
    imageAlt: string;
    floatingStat: string;
  };
};

export function AboutSection({ content }: AboutSectionProps) {
  return (
    <section className="py-28 bg-[#F5F5F5]">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="relative">
            <div className="relative h-[400px] md:h-[560px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/about-building.jpg"
                alt={content.imageAlt}
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute bottom-4 right-4 md:-bottom-6 md:-right-6 bg-primary text-white rounded-2xl p-4 md:p-6 shadow-xl max-w-[160px] md:max-w-[220px]">
              <p className="text-3xl md:text-5xl font-bold">35+</p>
              <p className="text-white/80 text-[10px] md:text-sm mt-1">{content.floatingStat}</p>
            </div>
          </div>

          <div className="space-y-6">
            <p className="text-accent font-bold tracking-widest uppercase text-sm">{content.tag}</p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
              {content.titleLines[0]}
              <br />
              {content.titleLines[1]}
              <br />
              <span className="text-primary">{content.titleLines[2]}</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">{content.desc}</p>
            <ul className="space-y-3 py-2">
              {content.checklist.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                  <span className="font-medium text-foreground">{item}</span>
                </li>
              ))}
            </ul>
            <Link href="/about" className={cn(buttonVariants({ size: 'lg' }), 'bg-primary hover:bg-primary/90 text-white mt-4 group')}>
              {content.cta}
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

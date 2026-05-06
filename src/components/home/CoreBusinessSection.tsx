import { ArrowRight, Factory, Leaf, Truck } from 'lucide-react';
import { Link } from '@/i18n/routing';

type CoreBusinessSectionProps = {
  content: {
    tag: string;
    titleLines: string[];
    items: Array<{ title: string; subtitle: string; desc: string }>;
    more: string;
  };
};

export function CoreBusinessSection({ content }: CoreBusinessSectionProps) {
  const coreBusinessIcons = [Leaf, Factory, Truck];

  return (
    <section className="py-28 bg-white">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="mb-12 md:mb-16 max-w-2xl">
          <p className="text-accent font-bold tracking-widest uppercase text-xs sm:text-sm mb-3">{content.tag}</p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground leading-tight">
            {content.titleLines[0]}
            <br />
            {content.titleLines[1]}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {content.items.map((biz, index) => {
            const Icon = coreBusinessIcons[index];

            return (
              <div
                key={biz.title}
                className="group relative border border-border/40 rounded-2xl p-8 hover:border-primary/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-white overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-1 h-0 bg-primary group-hover:h-full transition-all duration-500 rounded-l-2xl" />
                <div className="w-16 h-16 bg-primary/8 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
                  <Icon className="w-8 h-8 text-primary group-hover:text-white transition-colors duration-300" />
                </div>
                <p className="text-xs text-accent font-bold tracking-widest uppercase mb-2">{biz.subtitle}</p>
                <h3 className="text-2xl font-bold text-foreground mb-4">{biz.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{biz.desc}</p>
                <Link href="/business" className="inline-flex items-center gap-2 mt-6 text-primary font-semibold text-sm group-hover:gap-3 transition-all">
                  {content.more} <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

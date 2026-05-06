import { ArrowRight } from 'lucide-react';
import { Link } from '@/i18n/routing';
import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';

type NewsSectionProps = {
  content: {
    tag: string;
    title: string;
    more: string;
    items: Array<{ title: string; category: string; date: string; excerpt: string }>;
    readMore: string;
  };
};

export function NewsSection({ content }: NewsSectionProps) {
  return (
    <section className="py-28 bg-[#F5F5F5]">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <p className="text-accent font-bold tracking-widest uppercase text-sm mb-3">{content.tag}</p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">{content.title}</h2>
          </div>
          <Link href="/news" className={cn(buttonVariants({ variant: 'outline' }), 'border-primary text-primary hover:bg-primary hover:text-white')}>
            {content.more}
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {content.items.map((item) => (
            <div key={item.title} className="bg-white rounded-2xl overflow-hidden group hover:shadow-xl transition-shadow duration-300">
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

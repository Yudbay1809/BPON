import { Leaf } from 'lucide-react';
import { Link } from '@/i18n/routing';
import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';

type ProductsSectionProps = {
  content: {
    tag: string;
    title: string;
    more: string;
    items: ReadonlyArray<{ readonly name: string; readonly desc: string }>;
  };
};

export function ProductsSection({ content }: ProductsSectionProps) {
  return (
    <section className="py-28 bg-white">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <p className="text-accent font-bold tracking-widest uppercase text-xs sm:text-sm mb-3">{content.tag}</p>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground">{content.title}</h2>
          </div>
          <Link href="/products" className={cn(buttonVariants({ variant: 'outline' }), 'border-primary text-primary hover:bg-primary hover:text-white')}>
            {content.more}
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {content.items.map((product) => (
            <div key={product.name} className="group bg-[#F5F5F5] rounded-2xl p-6 hover:bg-primary transition-colors duration-300">
              <div className="w-12 h-12 bg-primary/10 group-hover:bg-white/20 rounded-xl flex items-center justify-center mb-5 transition-colors">
                <Leaf className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-lg font-bold text-foreground group-hover:text-white mb-2 transition-colors">{product.name}</h3>
              <p className="text-muted-foreground group-hover:text-white/80 text-sm leading-relaxed transition-colors">{product.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

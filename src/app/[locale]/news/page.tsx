import Image from 'next/image';
import { ArrowRight, Calendar } from 'lucide-react';
import { getTranslations } from 'next-intl/server';
import { getLocalizedPageContent } from '@/content/page-content';
import { Link } from '@/i18n/routing';
import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';

export default async function NewsPage(props: { params: Promise<{ locale: string }> }) {
  const params = await props.params;
  const t = await getTranslations({ locale: params.locale, namespace: 'News' });
  const copy = getLocalizedPageContent(params.locale).news;

  return (
    <div className="w-full pt-20">
      <section className="relative h-72 md:h-80 flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-news.jpg"
            alt={copy.heroAlt}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-[#0d2e10]/80" />
        </div>
        <div className="relative z-10 container mx-auto px-4 md:px-8 max-w-7xl">
          <p className="text-accent text-sm font-bold tracking-widest uppercase mb-3">{t('tag')}</p>
          <h1 className="text-4xl md:text-6xl font-bold text-white">{t('title')}</h1>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <p className="text-accent font-bold tracking-widest uppercase text-sm mb-6">{copy.featuredTag}</p>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
            <div className="lg:col-span-3 relative h-[380px] rounded-2xl overflow-hidden shadow-xl">
              <Image src={copy.featured.imgSrc} alt={copy.featured.title} fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute top-4 left-4">
                <span className={cn('text-xs font-bold px-3 py-1.5 rounded-full', copy.categoryColors[copy.featured.category as keyof typeof copy.categoryColors] ?? 'bg-gray-100 text-gray-700')}>
                  {copy.featured.category}
                </span>
              </div>
            </div>
            <div className="lg:col-span-2 space-y-4">
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Calendar className="w-4 h-4" />
                {copy.featured.date}
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground leading-snug">{copy.featured.title}</h2>
              <p className="text-muted-foreground leading-relaxed">{copy.featured.excerpt}</p>
              <Link href="/news" className={cn(buttonVariants(), 'bg-primary hover:bg-primary/90 text-white group mt-2')}>
                {t('read_more')}
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#F5F5F5]">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <p className="text-accent font-bold tracking-widest uppercase text-sm mb-8">{copy.allNewsTag}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {copy.articles.map((article) => (
              <div key={article.title} className="bg-white rounded-2xl overflow-hidden group hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={article.imgSrc}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className={cn('text-xs font-bold px-3 py-1.5 rounded-full', copy.categoryColors[article.category as keyof typeof copy.categoryColors] ?? 'bg-gray-100 text-gray-700')}>
                      {article.category}
                    </span>
                  </div>
                </div>
                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Calendar className="w-3.5 h-3.5" />
                    {article.date}
                  </div>
                  <h3 className="font-bold text-foreground text-lg leading-snug group-hover:text-primary transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">{article.excerpt}</p>
                  <Link href="/news" className="inline-flex items-center gap-2 text-primary font-semibold text-sm pt-2 group-hover:gap-3 transition-all">
                    {t('read_more')} <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

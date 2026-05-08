import Image from 'next/image';
import { ArrowRight, Calendar } from 'lucide-react';
import { getTranslations } from 'next-intl/server';
import { getLocalizedPageContent } from '@/content/page-content';
import { Link } from '@/i18n/routing';
import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';
import { PageHero } from '@/components/ui/PageHero';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { 
  staggerContainer, 
  staggerItem, 
  fadeLeft, 
  fadeRight, 
  fadeUp, 
  scaleIn 
} from '@/hooks/use-scroll-animation';
import { client } from '@/sanity/lib/client';
import { articlesQuery } from '@/sanity/lib/queries';
import { urlForImage } from '@/sanity/lib/image';

export default async function NewsPage(props: { params: Promise<{ locale: string }> }) {
  const params = await props.params;
  const locale = params.locale;
  const t = await getTranslations({ locale, namespace: 'News' });
  const copy = getLocalizedPageContent(locale).news;

  // Fetch articles from Sanity
  const sanityArticles = await client.fetch(articlesQuery, { locale }).catch(() => []);
  
  // Use Sanity articles if available, otherwise fallback to static copy
  const hasSanityData = sanityArticles && sanityArticles.length > 0;
  
  const featuredArticle = hasSanityData ? sanityArticles[0] : null;
  const otherArticles = hasSanityData ? sanityArticles.slice(1) : copy.articles;

  return (
    <div className="w-full pt-20">
      <PageHero
        imageSrc="/images/hero-news.jpg"
        imageAlt={copy.heroAlt}
        tag={t('tag')}
        title={t('title')}
      />

      <section className="py-16 bg-white overflow-hidden">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <AnimatedSection variants={fadeUp}>
            <p className="text-accent font-bold tracking-widest uppercase text-sm mb-6">{copy.featuredTag}</p>
          </AnimatedSection>
          
          {hasSanityData && featuredArticle ? (
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
              <AnimatedSection 
                variants={fadeLeft}
                className="lg:col-span-3 relative h-[420px] rounded-3xl overflow-hidden shadow-2xl"
              >
                {featuredArticle.mainImage && (
                  <Image 
                    src={urlForImage(featuredArticle.mainImage).url() || ''} 
                    alt={featuredArticle.title} 
                    fill 
                    className="object-cover" 
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute top-6 left-6">
                  <AnimatedSection 
                    variants={scaleIn}
                    className={cn('text-xs font-bold px-4 py-2 rounded-full shadow-lg bg-primary text-white')}
                  >
                    {featuredArticle.categories?.[0]?.title || 'News'}
                  </AnimatedSection>
                </div>
              </AnimatedSection>
              
              <AnimatedSection 
                variants={fadeRight}
                className="lg:col-span-2 space-y-6"
              >
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4 text-primary" />
                  {new Date(featuredArticle.publishedAt).toLocaleDateString(locale, { dateStyle: 'long' })}
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">{featuredArticle.title}</h2>
                <p className="text-muted-foreground text-lg leading-relaxed">{featuredArticle.excerpt}</p>
                <Link href={`/news/${featuredArticle.slug}`} className={cn(buttonVariants({ size: 'lg' }), 'bg-primary hover:bg-primary/90 text-white group mt-4 px-8')}>
                  {t('read_more')}
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </AnimatedSection>
            </div>
          ) : (
            // Fallback Featured Static
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
              <AnimatedSection 
                variants={fadeLeft}
                className="lg:col-span-3 relative h-[420px] rounded-3xl overflow-hidden shadow-2xl"
              >
                <Image src={copy.featured.imgSrc} alt={copy.featured.title} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute top-6 left-6">
                  <AnimatedSection 
                    variants={scaleIn}
                    className={cn('text-xs font-bold px-4 py-2 rounded-full shadow-lg', copy.categoryColors[copy.featured.category as keyof typeof copy.categoryColors] ?? 'bg-gray-100 text-gray-700')}
                  >
                    {copy.featured.category}
                  </AnimatedSection>
                </div>
              </AnimatedSection>
              
              <AnimatedSection 
                variants={fadeRight}
                className="lg:col-span-2 space-y-6"
              >
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4 text-primary" />
                  {copy.featured.date}
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">{copy.featured.title}</h2>
                <p className="text-muted-foreground text-lg leading-relaxed">{copy.featured.excerpt}</p>
                <Link href="/news" className={cn(buttonVariants({ size: 'lg' }), 'bg-primary hover:bg-primary/90 text-white group mt-4 px-8')}>
                  {t('read_more')}
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </AnimatedSection>
            </div>
          )}
        </div>
      </section>

      <section className="py-24 bg-[#F5F5F5] overflow-hidden">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <AnimatedSection variants={fadeUp}>
            <p className="text-accent font-bold tracking-widest uppercase text-sm mb-8">{copy.allNewsTag}</p>
          </AnimatedSection>
          
          <AnimatedSection 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
          >
            {hasSanityData ? (
              sanityArticles.map((article: any) => (
                <AnimatedSection 
                  key={article._id} 
                  variants={staggerItem}
                  className="bg-white rounded-3xl overflow-hidden group hover:shadow-2xl transition-all duration-500 border border-border/40 hover:border-primary/20"
                >
                  <div className="relative h-56 overflow-hidden">
                    {article.mainImage && (
                      <Image
                        src={urlForImage(article.mainImage).url() || ''}
                        alt={article.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                    )}
                    <div className="absolute top-4 left-4">
                      <span className="text-xs font-bold px-4 py-1.5 rounded-full shadow-md backdrop-blur-sm bg-primary text-white">
                        {article.categories?.[0]?.title || 'News'}
                      </span>
                    </div>
                  </div>
                  <div className="p-8 space-y-4">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground font-medium">
                      <Calendar className="w-4 h-4 text-primary/60" />
                      {new Date(article.publishedAt).toLocaleDateString(locale, { dateStyle: 'medium' })}
                    </div>
                    <h3 className="font-bold text-foreground text-xl leading-snug group-hover:text-primary transition-colors duration-300">
                      {article.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">{article.excerpt}</p>
                    <Link href={`/news/${article.slug}`} className="inline-flex items-center gap-2 text-primary font-bold text-sm pt-4 group-hover:gap-4 transition-all">
                      {t('read_more')} <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </AnimatedSection>
              ))
            ) : (
              // Fallback All News Static
              copy.articles.map((article, index) => (
                <AnimatedSection 
                  key={article.title} 
                  variants={staggerItem}
                  className="bg-white rounded-3xl overflow-hidden group hover:shadow-2xl transition-all duration-500 border border-border/40 hover:border-primary/20"
                >
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={article.imgSrc}
                      alt={article.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4">
                      <span className={cn('text-xs font-bold px-4 py-1.5 rounded-full shadow-md backdrop-blur-sm', copy.categoryColors[article.category as keyof typeof copy.categoryColors] ?? 'bg-gray-100 text-gray-700')}>
                        {article.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-8 space-y-4">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground font-medium">
                      <Calendar className="w-4 h-4 text-primary/60" />
                      {article.date}
                    </div>
                    <h3 className="font-bold text-foreground text-xl leading-snug group-hover:text-primary transition-colors duration-300">
                      {article.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">{article.excerpt}</p>
                    <Link href="/news" className="inline-flex items-center gap-2 text-primary font-bold text-sm pt-4 group-hover:gap-4 transition-all">
                      {t('read_more')} <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </AnimatedSection>
              ))
            )}
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}

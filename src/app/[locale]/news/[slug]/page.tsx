import Image from 'next/image';
import { client } from '@/sanity/lib/client';
import { articleBySlugQuery } from '@/sanity/lib/queries';
import { urlForImage } from '@/sanity/lib/image';
import { PageHero } from '@/components/ui/PageHero';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { fadeUp } from '@/hooks/use-scroll-animation';
import { PortableText } from '@portabletext/react';
import { Calendar, User, ArrowLeft } from 'lucide-react';
import { Link } from '@/i18n/routing';
import { notFound } from 'next/navigation';

export default async function ArticleDetailPage(props: { params: Promise<{ locale: string, slug: string }> }) {
  const { locale, slug } = await props.params;

  const article = await client.fetch(articleBySlugQuery, { locale, slug });

  if (!article) {
    notFound();
  }

  return (
    <div className="w-full pt-20 pb-20">
      <PageHero
        imageSrc={article.mainImage ? urlForImage(article.mainImage).url() : '/images/hero-news.jpg'}
        imageAlt={article.title}
        tag={article.categories?.[0]?.title || 'News'}
        title={article.title}
      />

      <article className="container mx-auto px-4 md:px-8 max-w-4xl py-16">
        <AnimatedSection variants={fadeUp} className="flex flex-wrap items-center gap-6 text-muted-foreground mb-12 pb-8 border-b border-border/40">
          <div className="flex items-center gap-2">
            <Calendar className="w-5 h-5 text-primary" />
            <span className="font-medium">
              {new Date(article.publishedAt).toLocaleDateString(locale, { dateStyle: 'long' })}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <User className="w-5 h-5 text-primary" />
            <span className="font-medium">{article.author || 'BPON Team'}</span>
          </div>
        </AnimatedSection>

        <AnimatedSection variants={fadeUp} className="prose prose-lg prose-slate max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-a:text-primary">
          <PortableText value={article.body} />
        </AnimatedSection>

        <AnimatedSection variants={fadeUp} className="mt-16 pt-8 border-t border-border/40">
          <Link href="/news" className="inline-flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all">
            <ArrowLeft className="w-5 h-5" /> Back to News
          </Link>
        </AnimatedSection>
      </article>
    </div>
  );
}

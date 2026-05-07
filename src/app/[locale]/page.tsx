import { getTranslations } from 'next-intl/server';
import { getLocalizedPageContent } from '@/content/page-content';
import { HeroSection } from '@/components/home/HeroSection';
import { CoreBusinessSection } from '@/components/home/CoreBusinessSection';
import { AboutSection } from '@/components/home/AboutSection';
import { ProductsSection } from '@/components/home/ProductsSection';
import { SustainabilitySection } from '@/components/home/SustainabilitySection';
import { NewsSection } from '@/components/home/NewsSection';
import { CTASection } from '@/components/home/CTASection';

export default async function HomePage(props: { params: Promise<{ locale: string }> }) {
  const params = await props.params;
  const t = await getTranslations({ locale: params.locale, namespace: 'HomePage' });
  const copy = getLocalizedPageContent(params.locale).home;

  return (
    <div className="w-full overflow-x-hidden">
      <HeroSection stats={copy.stats} />
      <CoreBusinessSection content={copy.coreBusiness} />
      <AboutSection content={copy.about} />
      <ProductsSection content={copy.products} />
      <SustainabilitySection content={copy.sustainability} />
      <NewsSection content={copy.news} />
      <CTASection />
    </div>
  );
}

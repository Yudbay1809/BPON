
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { Lexend, Source_Sans_3 } from 'next/font/google';
import { Footer } from '@/components/layout/Footer';
import { Navbar } from '@/components/layout/Navbar';
import { routing } from '@/i18n/routing';
import { Analytics } from '@vercel/analytics/react';
import { getSiteShellContent } from '@/lib/site-content';
import { OrganizationJsonLd } from '@/components/layout/JsonLd';
import '../globals.css';

const lexend = Lexend({
  subsets: ['latin'],
  variable: '--font-heading',
  weight: ['300', '400', '500', '600', '700'],
});

const sourceSans = Source_Sans_3({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['300', '400', '500', '600', '700'],
});

import { client } from '@/sanity/lib/client';
import { siteSettingsQuery } from '@/sanity/lib/queries';

export async function generateMetadata(props: { params: Promise<{ locale: string }> }) {
  const params = await props.params;
  const locale = params.locale;
  
  // Try to fetch from Sanity, fallback to local content
  const [sanitySettings, content] = await Promise.all([
    client.fetch(siteSettingsQuery, { locale }).catch(() => null),
    getSiteShellContent(locale),
  ]);

  const siteTitle = sanitySettings?.title || content.metadata.title;
  const siteDescription = sanitySettings?.description || content.metadata.description;
  const ogImage = sanitySettings?.ogImage || '/og-image.jpg';

  return {
    title: {
      template: `%s | ${siteTitle}`,
      default: siteTitle,
    },
    description: siteDescription,
    keywords: sanitySettings?.keywords || ['palm oil', 'sustainable', 'indonesia'],
    openGraph: {
      title: siteTitle,
      description: siteDescription,
      url: 'https://bpon.co.id',
      siteName: siteTitle,
      locale: locale,
      type: 'website',
      images: [{ url: ogImage }],
    },
    twitter: {
      card: 'summary_large_image',
      title: siteTitle,
      description: siteDescription,
      images: [ogImage],
    },
  };
}

export default async function LocaleLayout(props: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const params = await props.params;
  const locale = params.locale;
  const children = props.children;
  // Ensure that the incoming `locale` is valid
  if (!(routing.locales as readonly string[]).includes(locale)) {
    notFound();
  }

  const [messages, shellContent] = await Promise.all([
    getMessages(),
    getSiteShellContent(locale),
  ]);

  return (
    <html lang={locale}>
      <head>
        <OrganizationJsonLd />
      </head>
      <body className={`${lexend.variable} ${sourceSans.variable} font-body min-h-screen flex flex-col bg-background text-foreground antialiased`}>
        <NextIntlClientProvider messages={messages}>
          <Navbar content={shellContent.navbar} />
          <main className="flex-1">
            {children}
          </main>
          <Footer content={shellContent.footer} />
          <Analytics />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

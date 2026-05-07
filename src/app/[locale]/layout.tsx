
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { Lexend, Source_Sans_3 } from 'next/font/google';
import { Footer } from '@/components/layout/Footer';
import { Navbar } from '@/components/layout/Navbar';
import { routing } from '@/i18n/routing';
import { Analytics } from '@vercel/analytics/react';
import { getSiteShellContent } from '@/lib/site-content';
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

export async function generateMetadata(props: { params: Promise<{ locale: string }> }) {
  const params = await props.params;
  const content = await getSiteShellContent(params.locale);

  return {
    title: {
      template: `%s | PT Berlian Palm Oil Nusantara`,
      default: content.metadata.title,
    },
    description: content.metadata.description,
    viewport: 'width=device-width, initial-scale=1',
    openGraph: {
      title: content.metadata.title,
      description: content.metadata.description,
      url: 'https://bpon-crv7wf2r4-yudbay1809s-projects.vercel.app',
      siteName: 'PT Berlian Palm Oil Nusantara',
      locale: params.locale,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: content.metadata.title,
      description: content.metadata.description,
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

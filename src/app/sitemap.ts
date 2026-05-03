import type { MetadataRoute } from 'next';

const baseUrl = 'https://www.bpon.co.id';
const locales = ['id', 'en'] as const;
const routes = ['', '/about', '/business', '/products', '/sustainability', '/news', '/contact', '/privacy', '/terms'] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return locales.flatMap((locale) =>
    routes.map((route) => ({
      url: `${baseUrl}/${locale}${route}`,
      lastModified: new Date(),
      changeFrequency: route === '' ? 'weekly' : 'monthly',
      priority: route === '' ? 1 : 0.8,
    })),
  );
}

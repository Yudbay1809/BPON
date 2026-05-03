import { cache } from 'react';
import { pickLocalizedValue, siteContent, type SiteLocale } from '@/content/site-content';

function normalizeLocale(locale: string): SiteLocale {
  return locale === 'en' ? 'en' : 'id';
}

export const getSiteShellContent = cache(async (locale: string) => {
  const normalizedLocale = normalizeLocale(locale);

  return {
    metadata: siteContent.metadata[normalizedLocale],
    navbar: {
      links: siteContent.navbar.links.map((link) => ({
        label: pickLocalizedValue(normalizedLocale, link),
        href: link.href,
      })),
      contactCta: {
        label: pickLocalizedValue(normalizedLocale, siteContent.navbar.contactCta),
        href: siteContent.navbar.contactCta.href,
      },
      localeLabels: siteContent.navbar.localeLabels,
    },
    footer: {
      companyDescription: pickLocalizedValue(normalizedLocale, siteContent.footer.companyDescription),
      groups: siteContent.footer.groups.map((group) => ({
        title: pickLocalizedValue(normalizedLocale, group.title),
        links: group.links.map((link) => ({
          label: pickLocalizedValue(normalizedLocale, link),
          href: link.href,
          external: 'external' in link ? Boolean(link.external) : false,
        })),
      })),
      certificationsLabel: pickLocalizedValue(normalizedLocale, siteContent.footer.certificationsLabel),
      certifications: [...siteContent.footer.certifications],
      socials: siteContent.footer.socials.map((social) => ({ ...social })),
      contact: {
        headquartersLabel: pickLocalizedValue(normalizedLocale, siteContent.footer.contact.headquartersLabel),
        address: pickLocalizedValue(normalizedLocale, siteContent.footer.contact.address),
        phoneLabel: pickLocalizedValue(normalizedLocale, siteContent.footer.contact.phoneLabel),
        phoneNumber: siteContent.footer.contact.phoneNumber,
        officeHours: pickLocalizedValue(normalizedLocale, siteContent.footer.contact.officeHours),
        emailLabel: pickLocalizedValue(normalizedLocale, siteContent.footer.contact.emailLabel),
        emails: [...siteContent.footer.contact.emails],
      },
      legal: {
        rights: pickLocalizedValue(normalizedLocale, siteContent.footer.legal.rights),
        links: siteContent.footer.legal.links.map((link) => ({
          label: pickLocalizedValue(normalizedLocale, link),
          href: link.href,
          external: 'external' in link ? Boolean(link.external) : false,
        })),
      },
    },
  };
});

export const getAllSiteContent = cache(async () => {
  const [id, en] = await Promise.all([getSiteShellContent('id'), getSiteShellContent('en')]);
  return { id, en };
});

export const getLegalPageContent = cache(async (locale: string, page: 'privacy' | 'terms') => {
  const normalizedLocale = normalizeLocale(locale);
  const content = siteContent.legalPages[page];

  return {
    hero: pickLocalizedValue(normalizedLocale, content.hero),
    intro: pickLocalizedValue(normalizedLocale, content.intro),
    sections: content.sections.map((section) => ({
      heading: pickLocalizedValue(normalizedLocale, section.heading),
      body: pickLocalizedValue(normalizedLocale, section.body),
    })),
  };
});

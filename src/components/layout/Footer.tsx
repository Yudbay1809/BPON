import { ExternalLink, Globe2, Mail, MapPin, Phone, Share2 } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { BPONWordmark } from '@/components/ui/logo';

export function Footer() {
  const t = useTranslations('Footer');

  const navGroups = [
    {
      title: t('company'),
      links: [
        { label: t('about'), href: '/about' },
        { label: t('business'), href: '/business' },
        { label: t('leadership'), href: '/about' },
        { label: t('career'), href: '/contact' },
      ],
    },
    {
      title: t('products'),
      links: [
        { label: t('cpo'), href: '/products' },
        { label: t('pko'), href: '/products' },
        { label: t('olein'), href: '/products' },
        { label: t('stearin'), href: '/products' },
      ],
    },
    {
      title: t('sustainability'),
      links: [
        { label: t('esg'), href: '/sustainability' },
        { label: t('annual_report'), href: '/sustainability' },
        { label: t('certifications'), href: '/sustainability' },
        { label: t('csr'), href: '/sustainability' },
      ],
    },
  ];

  const certBadges = ['RSPO', 'ISPO', 'ISCC', 'ISO 14001', 'Halal'];
  const socials = [
    { icon: Share2, label: 'LinkedIn', href: '#' },
    { icon: Globe2, label: 'Website', href: '#' },
    { icon: ExternalLink, label: 'YouTube', href: '#' },
  ];

  return (
    <footer className="bg-[#1A0505] text-white">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2 space-y-6">
            <BPONWordmark iconSize={40} textClass="text-white" subTextClass="text-white/50" showTagline />
            <p className="text-white/60 text-sm leading-relaxed max-w-xs">{t('company_desc')}</p>

            <div>
              <p className="text-xs font-bold text-white/40 uppercase tracking-widest mb-3">{t('certifications')}</p>
              <div className="flex flex-wrap gap-2">
                {certBadges.map((cert) => (
                  <span key={cert} className="text-xs font-bold bg-white/10 border border-white/20 text-white/80 px-3 py-1 rounded-md">
                    {cert}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-3">
              {socials.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 bg-white/10 hover:bg-primary border border-white/10 hover:border-primary rounded-lg flex items-center justify-center transition-all duration-200 cursor-pointer"
                >
                  <Icon className="w-4 h-4 text-white" />
                </a>
              ))}
            </div>
          </div>

          {navGroups.map((group) => (
            <div key={group.title}>
              <h3 className="text-sm font-bold text-white uppercase tracking-widest mb-5">{group.title}</h3>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href as never} className="text-sm text-white/55 hover:text-white transition-colors cursor-pointer">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 pt-10 border-t border-white/10 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-start gap-3">
            <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
            <div>
              <p className="text-xs text-white/40 font-bold uppercase tracking-wide mb-0.5">{t('headquarters')}</p>
              <p className="text-sm text-white/70">{t('address')}</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Phone className="w-4 h-4 text-primary shrink-0 mt-0.5" />
            <div>
              <p className="text-xs text-white/40 font-bold uppercase tracking-wide mb-0.5">{t('phone')}</p>
              <p className="text-sm text-white/70">+62 21 1234 5678</p>
              <p className="text-xs text-white/40">{t('office_hours')}</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Mail className="w-4 h-4 text-primary shrink-0 mt-0.5" />
            <div>
              <p className="text-xs text-white/40 font-bold uppercase tracking-wide mb-0.5">{t('email')}</p>
              <p className="text-sm text-white/70">info@bpon.co.id</p>
              <p className="text-xs text-white/40">investor@bpon.co.id</p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/8 bg-black/20">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/35">{t('rights')}</p>
          <div className="flex items-center gap-5 text-xs text-white/35">
            <Link href="/privacy" className="hover:text-white/70 transition-colors cursor-pointer">{t('privacy')}</Link>
            <span>|</span>
            <Link href="/terms" className="hover:text-white/70 transition-colors cursor-pointer">{t('terms')}</Link>
            <span>|</span>
            <Link href="/sitemap.xml" className="hover:text-white/70 transition-colors cursor-pointer">{t('sitemap')}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

import { Link, usePathname } from '@/i18n/routing';
import { cn } from '@/lib/utils';
import { LanguageSwitcher } from './LanguageSwitcher';

type DesktopNavProps = {
  content: {
    links: Array<{ label: string; href: string }>;
    contactCta: { label: string; href: string };
    localeLabels: {
      idShort: string;
      enShort: string;
    };
  };
  isScrolled: boolean;
};

export function DesktopNav({ content, isScrolled }: DesktopNavProps) {
  const pathname = usePathname();

  return (
    <>
      {/* Desktop Nav */}
      <nav className="hidden lg:flex items-center gap-1">
        {content.links.map((link) => (
          <Link
            key={link.label}
            href={link.href as never}
            className={cn(
              'px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 cursor-pointer',
              isScrolled
                ? 'text-gray-800 hover:bg-primary/8 hover:text-primary'
                : 'text-white/95 hover:text-white hover:bg-white/10',
              pathname === link.href && (isScrolled
                ? 'bg-primary/10 text-primary'
                : 'bg-white/15 text-white')
            )}
          >
            {link.label}
          </Link>
        ))}
      </nav>

      {/* Right Side: Language + CTA */}
      <div className="hidden lg:flex items-center gap-4">
        <LanguageSwitcher localeLabels={content.localeLabels} isScrolled={isScrolled} />
        <Link
          href={content.contactCta.href as never}
          className="px-5 py-2.5 bg-primary hover:bg-primary/90 text-white text-sm font-bold rounded-lg transition-colors cursor-pointer shadow-sm"
        >
          {content.contactCta.label}
        </Link>
      </div>
    </>
  );
}

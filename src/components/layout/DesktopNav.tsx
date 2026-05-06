import { Link, usePathname } from '@/i18n/routing';
import { Globe } from 'lucide-react';
import { cn } from '@/lib/utils';

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
        <div className={cn('flex items-center gap-1 text-sm font-semibold', isScrolled ? 'text-gray-800' : 'text-white')}>
          <Globe className="w-4 h-4 opacity-60" />
          <Link href={pathname as never} locale="id" className="hover:text-primary transition-colors cursor-pointer">{content.localeLabels.idShort}</Link>
          <span className="opacity-30">|</span>
          <Link href={pathname as never} locale="en" className="hover:text-primary transition-colors cursor-pointer">{content.localeLabels.enShort}</Link>
        </div>
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

'use client';

import { useState, useEffect } from 'react';
import { Link, usePathname } from '@/i18n/routing';
import { Menu, X, Globe } from 'lucide-react';
import { cn } from '@/lib/utils';
import { BPONWordmark } from '@/components/ui/logo';

type NavbarProps = {
  content: {
    links: Array<{ label: string; href: string }>;
    contactCta: { label: string; href: string };
    localeLabels: {
      idShort: string;
      enShort: string;
      idLong: string;
      enLong: string;
    };
  };
};

export function Navbar({ content }: NavbarProps) {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = content.links;

  return (
    <header
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300 ease-in-out',
        isScrolled
          ? 'bg-white/97 backdrop-blur-md shadow-md border-b border-gray-100 py-3'
          /* Transparent: always add dark gradient so text is readable against any background */
          : 'bg-gradient-to-b from-black/55 to-transparent py-5'
      )}
    >
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center z-50 cursor-pointer">
            <BPONWordmark
              iconSize={36}
              textClass={isScrolled ? 'text-gray-900' : 'text-white'}
              subTextClass={isScrolled ? 'text-gray-500' : 'text-white/70'}
              showTagline
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
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
            {/* Language */}
            <div className={cn('flex items-center gap-1 text-sm font-semibold', isScrolled ? 'text-gray-800' : 'text-white')}>
              <Globe className="w-4 h-4 opacity-60" />
              <Link href={pathname as never} locale="id" className="hover:text-primary transition-colors cursor-pointer">{content.localeLabels.idShort}</Link>
              <span className="opacity-30">|</span>
              <Link href={pathname as never} locale="en" className="hover:text-primary transition-colors cursor-pointer">{content.localeLabels.enShort}</Link>
            </div>
            {/* CTA Button */}
            <Link
              href={content.contactCta.href as never}
              className="px-5 py-2.5 bg-primary hover:bg-primary/90 text-white text-sm font-bold rounded-lg transition-colors cursor-pointer shadow-sm"
            >
              {content.contactCta.label}
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            className={cn('lg:hidden z-50 cursor-pointer p-2 rounded-lg', isMobileMenuOpen ? 'text-foreground' : isScrolled ? 'text-foreground' : 'text-white')}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={cn(
          'fixed inset-0 bg-white z-40 transition-transform duration-300 ease-in-out flex flex-col pt-20 px-6 pb-8 lg:hidden',
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <nav className="flex flex-col gap-1 mt-4">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href as never}
              onClick={() => setIsMobileMenuOpen(false)}
              className={cn(
                'px-4 py-3.5 rounded-xl text-base font-semibold transition-colors cursor-pointer',
                pathname === link.href
                  ? 'bg-primary/10 text-primary'
                  : 'text-gray-800 hover:bg-gray-50'
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="mt-8 pt-6 border-t border-gray-100 space-y-4">
          <div className="flex items-center gap-3 text-sm font-semibold text-gray-500">
            <Globe className="w-4 h-4" />
            <Link href={pathname as never} locale="id" className="text-gray-900 font-bold cursor-pointer" onClick={() => setIsMobileMenuOpen(false)}>{content.localeLabels.idLong}</Link>
            <span className="text-gray-300">|</span>
            <Link href={pathname as never} locale="en" className="hover:text-primary cursor-pointer" onClick={() => setIsMobileMenuOpen(false)}>{content.localeLabels.enLong}</Link>
          </div>
          <Link
            href={content.contactCta.href as never}
            onClick={() => setIsMobileMenuOpen(false)}
            className="block w-full text-center px-5 py-3.5 bg-primary text-white font-bold rounded-xl cursor-pointer"
          >
            {content.contactCta.label}
          </Link>
        </div>
      </div>
    </header>
  );
}

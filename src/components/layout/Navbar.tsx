'use client';

import { useState } from 'react';
import { Link } from '@/i18n/routing';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { BPONWordmark } from '@/components/ui/logo';
import { useScroll } from '@/hooks/use-scroll';
import { DesktopNav } from './DesktopNav';
import { MobileDrawer } from './MobileDrawer';

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
  const isScrolled = useScroll(30);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300 ease-in-out',
        isScrolled
          ? 'bg-white/97 backdrop-blur-md shadow-md border-b border-gray-100 py-3'
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

          <DesktopNav content={content} isScrolled={isScrolled} />

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

      <MobileDrawer 
        content={content} 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)} 
      />
    </header>
  );
}

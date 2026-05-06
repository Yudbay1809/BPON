'use client';

import { motion } from 'framer-motion';
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
    <motion.header
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300 ease-in-out',
        isScrolled
          ? 'bg-white/97 backdrop-blur-md shadow-md border-b border-gray-100 py-3'
          : 'bg-gradient-to-b from-black/55 to-transparent py-5',
      )}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
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
          <motion.button
            className={cn('lg:hidden z-50 cursor-pointer p-2 rounded-lg', isMobileMenuOpen ? 'text-foreground' : isScrolled ? 'text-foreground' : 'text-white')}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
            whileTap={{ scale: 0.9 }}
          >
            <motion.div
              animate={{ rotate: isMobileMenuOpen ? 90 : 0 }}
              transition={{ duration: 0.2 }}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.div>
          </motion.button>
        </div>
      </div>

      <MobileDrawer
        content={content}
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </motion.header>
  );
}

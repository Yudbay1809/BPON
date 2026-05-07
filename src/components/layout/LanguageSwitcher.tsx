'use client';

import { Link, usePathname } from '@/i18n/routing';
import { Globe } from 'lucide-react';
import { cn } from '@/lib/utils';

type LanguageSwitcherProps = {
  localeLabels: {
    idShort: string;
    enShort: string;
  };
  isScrolled: boolean;
  className?: string;
};

export function LanguageSwitcher({ localeLabels, isScrolled, className }: LanguageSwitcherProps) {
  const pathname = usePathname();

  return (
    <div className={cn('flex items-center gap-1 text-sm font-semibold transition-colors', isScrolled ? 'text-gray-800' : 'text-white', className)}>
      <Globe className="w-4 h-4 opacity-60" />
      <Link 
        href={pathname as never} 
        locale="id" 
        className="hover:text-primary transition-colors cursor-pointer"
      >
        {localeLabels.idShort}
      </Link>
      <span className="opacity-30">|</span>
      <Link 
        href={pathname as never} 
        locale="en" 
        className="hover:text-primary transition-colors cursor-pointer"
      >
        {localeLabels.enShort}
      </Link>
    </div>
  );
}

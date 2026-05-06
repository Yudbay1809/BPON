'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Link, usePathname } from '@/i18n/routing';
import { Globe } from 'lucide-react';
import { cn } from '@/lib/utils';

type MobileDrawerProps = {
  content: {
    links: Array<{ label: string; href: string }>;
    contactCta: { label: string; href: string };
    localeLabels: {
      idLong: string;
      enLong: string;
    };
  };
  isOpen: boolean;
  onClose: () => void;
};

export function MobileDrawer({ content, isOpen, onClose }: MobileDrawerProps) {
  const pathname = usePathname();

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-white z-40 flex flex-col pt-20 px-6 pb-8 lg:hidden"
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'spring', stiffness: 320, damping: 32 }}
        >
          <nav className="flex flex-col gap-1 mt-4">
            {content.links.map((link, i) => (
              <motion.div
                key={link.label}
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.05 + i * 0.07, duration: 0.3 }}
              >
                <Link
                  href={link.href as never}
                  onClick={onClose}
                  className={cn(
                    'block px-4 py-3.5 rounded-xl text-base font-semibold transition-colors cursor-pointer',
                    pathname === link.href
                      ? 'bg-primary/10 text-primary'
                      : 'text-gray-800 hover:bg-gray-50',
                  )}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </nav>

          <motion.div
            className="mt-8 pt-6 border-t border-gray-100 space-y-4"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.3 }}
          >
            <div className="flex items-center gap-3 text-sm font-semibold text-gray-500">
              <Globe className="w-4 h-4" />
              <Link href={pathname as never} locale="id" className="text-gray-900 font-bold cursor-pointer" onClick={onClose}>{content.localeLabels.idLong}</Link>
              <span className="text-gray-300">|</span>
              <Link href={pathname as never} locale="en" className="hover:text-primary cursor-pointer" onClick={onClose}>{content.localeLabels.enLong}</Link>
            </div>
            <Link
              href={content.contactCta.href as never}
              onClick={onClose}
              className="block w-full text-center px-5 py-3.5 bg-primary text-white font-bold rounded-xl cursor-pointer"
            >
              {content.contactCta.label}
            </Link>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

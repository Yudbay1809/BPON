import { Link } from '@/i18n/routing';

type FooterLegalProps = {
  legal: {
    rights: string;
    links: Array<{ label: string; href: string; external: boolean }>;
  };
};

export function FooterLegal({ legal }: FooterLegalProps) {
  return (
    <div className="border-t border-white/8 bg-black/20">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl py-5 flex flex-col md:flex-row items-center justify-between gap-3">
        <p className="text-xs text-white/35">{legal.rights}</p>
        <div className="flex items-center gap-5 text-xs text-white/35">
          {legal.links.map((link, index) => (
            <div key={link.href} className="flex items-center gap-5">
              {index > 0 && <span>|</span>}
              {link.external ? (
                <a href={link.href} className="hover:text-white/70 transition-colors cursor-pointer">
                  {link.label}
                </a>
              ) : (
                <Link href={link.href as never} className="hover:text-white/70 transition-colors cursor-pointer">
                  {link.label}
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

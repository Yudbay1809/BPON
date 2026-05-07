import { BPONWordmark } from '@/components/ui/logo';
import { Link } from '@/i18n/routing';
import { ExternalLink, Globe2, Share2 } from 'lucide-react';

const socialIcons = {
  LinkedIn: Share2,
  Website: Globe2,
  YouTube: ExternalLink,
} as const;

type FooterBrandProps = {
  description: string;
  certificationsLabel: string;
  certifications: readonly string[];
  socials: Array<{ label: string; href: string | null }>;
};

export function FooterBrand({ description, certificationsLabel, certifications, socials }: FooterBrandProps) {
  return (
    <div className="lg:col-span-2 space-y-6">
      <BPONWordmark iconSize={40} textClass="text-white" subTextClass="text-white/50" showTagline />
      <p className="text-white/60 text-sm leading-relaxed max-w-xs">{description}</p>

      <div>
        <p className="text-xs font-bold text-white/40 uppercase tracking-widest mb-3">{certificationsLabel}</p>
        <div className="flex flex-wrap gap-2">
          {certifications.map((cert) => (
            <span key={cert} className="text-xs font-bold bg-white/10 border border-white/20 text-white/80 px-3 py-1 rounded-md">
              {cert}
            </span>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-3">
        {socials.map(({ label, href }) => {
          const Icon = socialIcons[label as keyof typeof socialIcons];

          if (!href) {
            return (
              <span
                key={label}
                aria-label={`${label} unavailable`}
                className="w-9 h-9 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center opacity-50 cursor-not-allowed"
              >
                <Icon className="w-4 h-4 text-white" />
              </span>
            );
          }

          return (
            <Link
              key={label}
              href={href as never}
              aria-label={label}
              className="w-9 h-9 bg-white/10 hover:bg-primary border border-white/10 hover:border-primary rounded-lg flex items-center justify-center transition-all duration-200 cursor-pointer"
            >
              <Icon className="w-4 h-4 text-white" />
            </Link>
          );
        })}
      </div>
    </div>
  );
}

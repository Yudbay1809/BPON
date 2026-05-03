import { ExternalLink, Globe2, Mail, MapPin, Phone, Share2 } from 'lucide-react';
import { Link } from '@/i18n/routing';
import { BPONWordmark } from '@/components/ui/logo';

type FooterProps = {
  content: {
    companyDescription: string;
    groups: Array<{
      title: string;
      links: Array<{ label: string; href: string; external: boolean }>;
    }>;
    certificationsLabel: string;
    certifications: string[];
    socials: Array<{ label: string; href: string | null }>;
    contact: {
      headquartersLabel: string;
      address: string;
      phoneLabel: string;
      phoneNumber: string;
      officeHours: string;
      emailLabel: string;
      emails: string[];
    };
    legal: {
      rights: string;
      links: Array<{ label: string; href: string; external: boolean }>;
    };
  };
};

const socialIcons = {
  LinkedIn: Share2,
  Website: Globe2,
  YouTube: ExternalLink,
} as const;

export function Footer({ content }: FooterProps) {

  return (
    <footer className="bg-[#1A0505] text-white">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2 space-y-6">
            <BPONWordmark iconSize={40} textClass="text-white" subTextClass="text-white/50" showTagline />
            <p className="text-white/60 text-sm leading-relaxed max-w-xs">{content.companyDescription}</p>

            <div>
              <p className="text-xs font-bold text-white/40 uppercase tracking-widest mb-3">{content.certificationsLabel}</p>
              <div className="flex flex-wrap gap-2">
                {content.certifications.map((cert) => (
                  <span key={cert} className="text-xs font-bold bg-white/10 border border-white/20 text-white/80 px-3 py-1 rounded-md">
                    {cert}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-3">
              {content.socials.map(({ label, href }) => {
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

          {content.groups.map((group) => (
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
              <p className="text-xs text-white/40 font-bold uppercase tracking-wide mb-0.5">{content.contact.headquartersLabel}</p>
              <p className="text-sm text-white/70">{content.contact.address}</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Phone className="w-4 h-4 text-primary shrink-0 mt-0.5" />
            <div>
              <p className="text-xs text-white/40 font-bold uppercase tracking-wide mb-0.5">{content.contact.phoneLabel}</p>
              <p className="text-sm text-white/70">{content.contact.phoneNumber}</p>
              <p className="text-xs text-white/40">{content.contact.officeHours}</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Mail className="w-4 h-4 text-primary shrink-0 mt-0.5" />
            <div>
              <p className="text-xs text-white/40 font-bold uppercase tracking-wide mb-0.5">{content.contact.emailLabel}</p>
              {content.contact.emails.map((email) => (
                <p key={email} className="text-sm text-white/70">{email}</p>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/8 bg-black/20">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/35">{content.legal.rights}</p>
          <div className="flex items-center gap-5 text-xs text-white/35">
            {content.legal.links.map((link, index) => (
              <div key={link.href} className="flex items-center gap-5">
                {index > 0 && <span>|</span>}
                <Link href={link.href as never} className="hover:text-white/70 transition-colors cursor-pointer">
                  {link.label}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

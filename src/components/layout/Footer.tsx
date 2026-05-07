import { FooterBrand } from './FooterBrand';
import { FooterNav } from './FooterNav';
import { FooterContact } from './FooterContact';
import { FooterLegal } from './FooterLegal';

type FooterProps = {
  content: {
    companyDescription: string;
    groups: Array<{
      title: string;
      links: Array<{ label: string; href: string; external: boolean }>;
    }>;
    certificationsLabel: string;
    certifications: readonly string[];
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

export function Footer({ content }: FooterProps) {
  return (
    <footer className="bg-[#1A0505] text-white">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <FooterBrand 
            description={content.companyDescription}
            certificationsLabel={content.certificationsLabel}
            certifications={content.certifications}
            socials={content.socials}
          />
          <FooterNav groups={content.groups} />
        </div>

        <FooterContact contact={content.contact} />
      </div>

      <FooterLegal legal={content.legal} />
    </footer>
  );
}

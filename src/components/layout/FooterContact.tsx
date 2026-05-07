import { Mail, MapPin, Phone } from 'lucide-react';

type FooterContactProps = {
  contact: {
    headquartersLabel: string;
    address: string;
    phoneLabel: string;
    phoneNumber: string;
    officeHours: string;
    emailLabel: string;
    emails: string[];
  };
};

export function FooterContact({ contact }: FooterContactProps) {
  return (
    <div className="mt-14 pt-10 border-t border-white/10 grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="flex items-start gap-3">
        <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
        <div>
          <p className="text-xs text-white/40 font-bold uppercase tracking-wide mb-0.5">{contact.headquartersLabel}</p>
          <p className="text-sm text-white/70">{contact.address}</p>
        </div>
      </div>
      <div className="flex items-start gap-3">
        <Phone className="w-4 h-4 text-primary shrink-0 mt-0.5" />
        <div>
          <p className="text-xs text-white/40 font-bold uppercase tracking-wide mb-0.5">{contact.phoneLabel}</p>
          <p className="text-sm text-white/70">{contact.phoneNumber}</p>
          <p className="text-xs text-white/40">{contact.officeHours}</p>
        </div>
      </div>
      <div className="flex items-start gap-3">
        <Mail className="w-4 h-4 text-primary shrink-0 mt-0.5" />
        <div>
          <p className="text-xs text-white/40 font-bold uppercase tracking-wide mb-0.5">{contact.emailLabel}</p>
          {contact.emails.map((email) => (
            <p key={email} className="text-sm text-white/70">{email}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

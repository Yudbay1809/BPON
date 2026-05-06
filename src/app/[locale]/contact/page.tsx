import Image from 'next/image';
import { Clock, Mail, MapPin, Phone } from 'lucide-react';
import { getTranslations } from 'next-intl/server';
import { getLocalizedPageContent } from '@/content/page-content';
import { ContactForm } from '@/components/contact/ContactForm';

export async function generateMetadata(props: { params: Promise<{ locale: string }> }) {
  const params = await props.params;
  const t = await getTranslations({ locale: params.locale, namespace: 'Contact' });
  return { title: t('title') };
}

export default async function ContactPage(props: { params: Promise<{ locale: string }> }) {
  const params = await props.params;
  const locale = params.locale;
  const t = await getTranslations({ locale, namespace: 'Contact' });
  const copy = getLocalizedPageContent(locale).contact;

  return (
    <div className="w-full pt-20">
      <section className="relative h-72 md:h-80 flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-contact.jpg"
            alt={copy.heroAlt}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-[#0d2e10]/80" />
        </div>
        <div className="relative z-10 container mx-auto px-4 md:px-8 max-w-7xl">
          <p className="text-accent text-sm font-bold tracking-widest uppercase mb-3">{t('tag')}</p>
          <h1 className="text-4xl md:text-6xl font-bold text-white">{t('title')}</h1>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            <div className="lg:col-span-2 space-y-10">
              <div>
                <p className="text-accent font-bold tracking-widest uppercase text-sm mb-3">{copy.infoTag}</p>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  {copy.infoTitleLines[0]}
                  <br />
                  {copy.infoTitleLines[1]}
                </h2>
                <p className="text-muted-foreground leading-relaxed">{copy.infoDesc}</p>
              </div>

              {copy.offices.map((office, index) => (
                <div key={office.type} className={`rounded-2xl p-6 border space-y-4 ${index === 0 ? 'bg-primary text-white border-transparent' : 'bg-[#F5F5F5] border-border/40'}`}>
                  <h3 className={`font-bold text-lg ${index === 0 ? 'text-white' : 'text-foreground'}`}>{office.type}</h3>
                  <div className="space-y-3">
                    <div className={`flex items-start gap-3 text-sm ${index === 0 ? 'text-white/80' : 'text-muted-foreground'}`}>
                      <MapPin className={`w-4 h-4 shrink-0 mt-0.5 ${index === 0 ? 'text-accent' : 'text-primary'}`} />
                      <span className="whitespace-pre-line">{office.address}</span>
                    </div>
                    <div className={`flex items-center gap-3 text-sm ${index === 0 ? 'text-white/80' : 'text-muted-foreground'}`}>
                      <Phone className={`w-4 h-4 shrink-0 ${index === 0 ? 'text-accent' : 'text-primary'}`} />
                      {office.phone}
                    </div>
                    <div className={`flex items-center gap-3 text-sm ${index === 0 ? 'text-white/80' : 'text-muted-foreground'}`}>
                      <Mail className={`w-4 h-4 shrink-0 ${index === 0 ? 'text-accent' : 'text-primary'}`} />
                      {office.email}
                    </div>
                    <div className={`flex items-center gap-3 text-sm ${index === 0 ? 'text-white/80' : 'text-muted-foreground'}`}>
                      <Clock className={`w-4 h-4 shrink-0 ${index === 0 ? 'text-accent' : 'text-primary'}`} />
                      {office.hours}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="lg:col-span-3">
              <ContactForm copy={copy} />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F5F5F5] py-16">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="w-full h-72 rounded-2xl overflow-hidden bg-primary/10 flex items-center justify-center border border-border/40">
            <div className="text-center">
              <MapPin className="w-12 h-12 text-primary mx-auto mb-3" />
              <p className="text-foreground font-bold text-lg">{copy.mapTitle}</p>
              <p className="text-muted-foreground text-sm">{copy.mapAddress}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

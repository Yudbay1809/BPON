import { getLegalPageContent } from '@/lib/site-content';

export default async function PrivacyPage(props: { params: Promise<{ locale: string }> }) {
  const params = await props.params;
  const content = await getLegalPageContent(params.locale, 'privacy');

  return (
    <div className="w-full pt-20">
      <section className="bg-[#F5F5F5] border-b border-border/40">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl py-20">
          <p className="text-accent font-bold tracking-widest uppercase text-sm mb-4">BPON</p>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">{content.hero}</h1>
          <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed">{content.intro}</p>
        </div>
      </section>

      <section className="bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl py-16 space-y-10">
          {content.sections.map((section) => (
            <article key={section.heading} className="border border-border/40 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">{section.heading}</h2>
              <p className="text-muted-foreground leading-relaxed">{section.body}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

import { Link } from '@/i18n/routing';

type FooterNavProps = {
  groups: Array<{
    title: string;
    links: Array<{ label: string; href: string; external: boolean }>;
  }>;
};

export function FooterNav({ groups }: FooterNavProps) {
  return (
    <>
      {groups.map((group) => (
        <div key={group.title}>
          <h3 className="text-sm font-bold text-white uppercase tracking-widest mb-5">{group.title}</h3>
          <ul className="space-y-3">
            {group.links.map((link) => (
              <li key={link.label}>
                {link.external ? (
                  <a href={link.href} className="text-sm text-white/55 hover:text-white transition-colors cursor-pointer">
                    {link.label}
                  </a>
                ) : (
                  <Link href={link.href as never} className="text-sm text-white/55 hover:text-white transition-colors cursor-pointer">
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
}

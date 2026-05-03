import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

// Since we have a `[locale]` dynamic segment, the root layout 
// should just render the children. The specialized layout in 
// `[locale]/layout.tsx` handles the HTML, Body and i18n provider.
export default function RootLayout({ children }: Props) {
  return children;
}

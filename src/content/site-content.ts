export type SiteLocale = 'id' | 'en';

type LocalizedText = {
  id: string;
  en: string;
};

type SharedLink = {
  href: string;
  external?: boolean;
};

type LocalizedLink = LocalizedText & SharedLink;

export const siteContent = {
  metadata: {
    id: {
      title: 'PT BERLIAN PALM OIL NUSANTARA',
      description: 'Situs korporat BPON untuk profil perusahaan, lini bisnis, produk unggulan, dan komitmen keberlanjutan.',
    },
    en: {
      title: 'PT BERLIAN PALM OIL NUSANTARA',
      description: 'BPON corporate website covering the company profile, business lines, flagship products, and sustainability commitments.',
    },
  },
  navbar: {
    links: [
      { id: 'Beranda', en: 'Home', href: '/' },
      { id: 'Tentang Kami', en: 'About Us', href: '/about' },
      { id: 'Bisnis', en: 'Business', href: '/business' },
      { id: 'Produk', en: 'Products', href: '/products' },
      { id: 'Keberlanjutan', en: 'Sustainability', href: '/sustainability' },
      { id: 'Berita', en: 'News', href: '/news' },
    ] satisfies LocalizedLink[],
    contactCta: {
      id: 'Hubungi Kami',
      en: 'Contact Us',
      href: '/contact',
    } satisfies LocalizedLink,
    localeLabels: {
      idShort: 'ID',
      enShort: 'EN',
      idLong: 'Indonesia',
      enLong: 'English',
    },
  },
  footer: {
    companyDescription: {
      id: 'Perusahaan agribisnis kelapa sawit terkemuka di Indonesia dengan standar internasional dan komitmen nyata terhadap keberlanjutan lingkungan.',
      en: 'A leading Indonesian palm oil agribusiness company with international standards and a real commitment to environmental sustainability.',
    },
    groups: [
      {
        title: { id: 'Perusahaan', en: 'Company' },
        links: [
          { id: 'Tentang Kami', en: 'About Us', href: '/about' },
          { id: 'Bisnis Kami', en: 'Our Business', href: '/business' },
          { id: 'Kepemimpinan', en: 'Leadership', href: '/about' },
          { id: 'Karir', en: 'Careers', href: '/contact' },
        ] satisfies LocalizedLink[],
      },
      {
        title: { id: 'Produk', en: 'Products' },
        links: [
          { id: 'Crude Palm Oil (CPO)', en: 'Crude Palm Oil (CPO)', href: '/products' },
          { id: 'Palm Kernel Oil (PKO)', en: 'Palm Kernel Oil (PKO)', href: '/products' },
          { id: 'Refined Palm Olein', en: 'Refined Palm Olein', href: '/products' },
          { id: 'Palm Stearin', en: 'Palm Stearin', href: '/products' },
        ] satisfies LocalizedLink[],
      },
      {
        title: { id: 'Keberlanjutan', en: 'Sustainability' },
        links: [
          { id: 'Komitmen ESG', en: 'ESG Commitment', href: '/sustainability' },
          { id: 'Laporan Tahunan', en: 'Annual Report', href: '/sustainability' },
          { id: 'Sertifikasi', en: 'Certifications', href: '/sustainability' },
          { id: 'Program CSR', en: 'CSR Programs', href: '/sustainability' },
        ] satisfies LocalizedLink[],
      },
    ],
    certificationsLabel: {
      id: 'Sertifikasi',
      en: 'Certifications',
    },
    certifications: ['RSPO', 'ISPO', 'ISCC', 'ISO 14001', 'Halal'],
    socials: [
      {
        label: 'LinkedIn',
        href: null,
      },
      {
        label: 'Website',
        href: '/',
      },
      {
        label: 'YouTube',
        href: null,
      },
    ] as Array<{ label: string; href: string | null }>,
    contact: {
      headquartersLabel: {
        id: 'Kantor Pusat',
        en: 'Headquarters',
      },
      address: {
        id: 'Gedung BPON Tower Lt. 15, Jl. Jend. Sudirman Kav. 1, Jakarta Pusat 10220',
        en: 'BPON Tower 15th Floor, Jl. Jend. Sudirman Kav. 1, Central Jakarta 10220',
      },
      phoneLabel: {
        id: 'Telepon',
        en: 'Phone',
      },
      phoneNumber: '+62 21 1234 5678',
      officeHours: {
        id: 'Senin-Jumat, 08:00-17:00 WIB',
        en: 'Monday-Friday, 08:00-17:00 WIB',
      },
      emailLabel: {
        id: 'Email',
        en: 'Email',
      },
      emails: ['info@bpon.co.id', 'investor@bpon.co.id'],
    },
    legal: {
      rights: {
        id: 'Copyright 2026 PT Berlian Palm Oil Nusantara. Hak Cipta Dilindungi.',
        en: 'Copyright 2026 PT Berlian Palm Oil Nusantara. All Rights Reserved.',
      },
      links: [
        { id: 'Kebijakan Privasi', en: 'Privacy Policy', href: '/privacy' },
        { id: 'Syarat & Ketentuan', en: 'Terms & Conditions', href: '/terms' },
        { id: 'Sitemap', en: 'Sitemap', href: '/sitemap.xml' },
      ] satisfies LocalizedLink[],
    },
  },
  legalPages: {
    privacy: {
      hero: {
        id: 'Kebijakan Privasi',
        en: 'Privacy Policy',
      },
      intro: {
        id: 'Halaman ini menjelaskan bagaimana BPON mengelola data yang dikirimkan pengunjung melalui situs perusahaan ini.',
        en: 'This page explains how BPON handles visitor data submitted through this corporate website.',
      },
      sections: [
        {
          heading: {
            id: 'Data yang Kami Kumpulkan',
            en: 'Data We Collect',
          },
          body: {
            id: 'Kami dapat mengumpulkan nama, alamat email, nama perusahaan, dan isi pesan saat Anda menghubungi kami melalui formulir kontak.',
            en: 'We may collect your name, email address, company name, and message content when you contact us through the contact form.',
          },
        },
        {
          heading: {
            id: 'Tujuan Penggunaan',
            en: 'How We Use It',
          },
          body: {
            id: 'Data digunakan untuk merespons pertanyaan, menindaklanjuti peluang kemitraan, dan meningkatkan pengalaman pengguna situs.',
            en: 'We use this data to respond to inquiries, follow up on partnership opportunities, and improve the website experience.',
          },
        },
        {
          heading: {
            id: 'Retensi & Keamanan',
            en: 'Retention & Security',
          },
          body: {
            id: 'Data disimpan selama diperlukan untuk tujuan operasional yang sah dan seharusnya dilindungi dengan kontrol akses yang memadai.',
            en: 'Data is retained only as long as needed for legitimate operational purposes and should be protected with appropriate access controls.',
          },
        },
      ],
    },
    terms: {
      hero: {
        id: 'Syarat & Ketentuan',
        en: 'Terms & Conditions',
      },
      intro: {
        id: 'Dengan mengakses situs ini, Anda setuju menggunakan kontennya hanya untuk tujuan informasi dan komunikasi bisnis yang sah.',
        en: 'By accessing this site, you agree to use its content only for legitimate informational and business communication purposes.',
      },
      sections: [
        {
          heading: {
            id: 'Penggunaan Konten',
            en: 'Use of Content',
          },
          body: {
            id: 'Seluruh materi di situs ini disediakan untuk informasi umum dan tidak boleh disalin atau dipublikasikan ulang tanpa izin yang sesuai.',
            en: 'All materials on this site are provided for general information and may not be copied or republished without appropriate permission.',
          },
        },
        {
          heading: {
            id: 'Akurasi Informasi',
            en: 'Accuracy of Information',
          },
          body: {
            id: 'BPON berupaya menjaga informasi tetap akurat, namun dapat memperbarui atau mengubah konten sewaktu-waktu tanpa pemberitahuan sebelumnya.',
            en: 'BPON aims to keep information accurate, but may update or change content at any time without prior notice.',
          },
        },
        {
          heading: {
            id: 'Kontak',
            en: 'Contact',
          },
          body: {
            id: 'Jika Anda memiliki pertanyaan mengenai penggunaan situs ini, silakan hubungi BPON melalui halaman kontak.',
            en: 'If you have questions about using this site, please contact BPON through the contact page.',
          },
        },
      ],
    },
  },
} as const;

export function pickLocalizedValue<T extends LocalizedText>(locale: SiteLocale, value: T) {
  return value[locale];
}

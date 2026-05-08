import React from 'react';

export function JsonLd({ data }: { data: any }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function OrganizationJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "PT Berlian Palm Oil Nusantara",
    "url": "https://bpon.co.id",
    "logo": "https://bpon.co.id/logo.png",
    "sameAs": [
      "https://linkedin.com/company/bpon",
      "https://instagram.com/bpon"
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Jl. Jendral Sudirman",
      "addressLocality": "Pekanbaru",
      "addressRegion": "Riau",
      "addressCountry": "ID"
    }
  };

  return <JsonLd data={data} />;
}

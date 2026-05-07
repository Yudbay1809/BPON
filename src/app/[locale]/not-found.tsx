import { Link } from '@/i18n/routing';
import { Home, ArrowLeft, Search } from 'lucide-react';

export default async function NotFound(props?: { params?: Promise<{ locale: string }> }) {
  const params = props?.params ? await props.params : null;
  const locale = params?.locale ?? 'id';

  return (
    <div className="min-h-screen bg-[#0d0505] flex items-center justify-center px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#B91C1C]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#B91C1C]/5 rounded-full blur-2xl" />
      </div>

      <div className="relative z-10 text-center max-w-2xl mx-auto">
        {/* 404 Big Number */}
        <div className="relative mb-8">
          <p
            className="text-[180px] md:text-[240px] font-black leading-none select-none"
            style={{
              background: 'linear-gradient(135deg, #B91C1C 0%, #7f1d1d 50%, #1a0000 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            404
          </p>
          <div className="absolute inset-0 flex items-center justify-center">
            <Search className="w-16 h-16 text-white/10" />
          </div>
        </div>

        {/* Message */}
        <div className="mb-10 space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold text-white">
            Halaman Tidak Ditemukan
          </h1>
          <p className="text-white/50 text-lg leading-relaxed max-w-md mx-auto">
            Halaman yang Anda cari tidak tersedia, telah dipindahkan, atau mungkin URL yang Anda masukkan salah.
          </p>
        </div>

        {/* BPON Brand */}
        <div className="mb-10">
          <span className="inline-block text-xs font-bold tracking-[0.3em] uppercase text-[#B91C1C]/70 border border-[#B91C1C]/20 px-4 py-2 rounded-full">
            PT Berlian Palm Oil Nusantara
          </span>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href={`/${locale}` as never}
            className="inline-flex items-center gap-2 bg-[#B91C1C] hover:bg-[#991B1B] text-white font-bold px-8 py-3.5 rounded-xl transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg shadow-[#B91C1C]/20"
          >
            <Home className="w-4 h-4" />
            Kembali ke Beranda
          </Link>
          <Link
            href={`/${locale}/contact` as never}
            className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white/70 hover:text-white font-semibold px-8 py-3.5 rounded-xl transition-all duration-200"
          >
            <ArrowLeft className="w-4 h-4" />
            Hubungi Kami
          </Link>
        </div>

        {/* Quick links */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <p className="text-white/30 text-sm mb-4">Halaman Populer</p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { label: 'Tentang Kami', href: `/${locale}/about` as never },
              { label: 'Produk', href: `/${locale}/products` as never },
              { label: 'Bisnis', href: `/${locale}/business` as never },
              { label: 'Keberlanjutan', href: `/${locale}/sustainability` as never },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href as never}
                className="text-sm text-white/40 hover:text-[#B91C1C] transition-colors px-3 py-1.5 rounded-lg hover:bg-white/5"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

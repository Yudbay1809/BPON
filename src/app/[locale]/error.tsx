'use client';

import { useEffect } from 'react';
import { Link } from '@/i18n/routing';
import { RefreshCw, Home, AlertTriangle } from 'lucide-react';

export default function Error({
  error,
  unstable_retry,
}: {
  error: Error & { digest?: string };
  unstable_retry: () => void;
}) {
  useEffect(() => {
    console.error('[BPON Error Boundary]', error);
  }, [error]);

  return (
    <div className="min-h-screen bg-[#0d0505] flex items-center justify-center px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/3 w-80 h-80 bg-amber-900/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-[#B91C1C]/8 rounded-full blur-2xl" />
      </div>

      <div className="relative z-10 text-center max-w-xl mx-auto">
        {/* Icon */}
        <div className="w-24 h-24 bg-amber-500/10 border border-amber-500/20 rounded-3xl flex items-center justify-center mx-auto mb-8">
          <AlertTriangle className="w-12 h-12 text-amber-400" />
        </div>

        {/* BPON Brand */}
        <div className="mb-6">
          <span className="inline-block text-xs font-bold tracking-[0.3em] uppercase text-[#B91C1C]/70 border border-[#B91C1C]/20 px-4 py-2 rounded-full">
            PT Berlian Palm Oil Nusantara
          </span>
        </div>

        {/* Message */}
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Terjadi Kesalahan
        </h1>
        <p className="text-white/50 text-lg leading-relaxed mb-4">
          Maaf, terjadi kesalahan yang tidak terduga. Tim kami telah diberitahu dan sedang menangani masalah ini.
        </p>

        {/* Error digest for debugging */}
        {error.digest && (
          <p className="text-white/20 text-xs font-mono mb-8 bg-white/5 rounded-lg px-4 py-2 inline-block">
            Error ID: {error.digest}
          </p>
        )}

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
          <button
            onClick={() => unstable_retry()}
            className="inline-flex items-center gap-2 bg-[#B91C1C] hover:bg-[#991B1B] text-white font-bold px-8 py-3.5 rounded-xl transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg shadow-[#B91C1C]/20"
          >
            <RefreshCw className="w-4 h-4" />
            Coba Lagi
          </button>
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white/70 hover:text-white font-semibold px-8 py-3.5 rounded-xl transition-all duration-200"
          >
            <Home className="w-4 h-4" />
            Kembali ke Beranda
          </Link>
        </div>
      </div>
    </div>
  );
}

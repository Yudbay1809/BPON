'use client';

import { RefreshCw, Home } from 'lucide-react';

export default function GlobalError({
  error,
  unstable_retry,
}: {
  error: Error & { digest?: string };
  unstable_retry: () => void;
}) {
  return (
    <html lang="id">
      <head>
        <title>Terjadi Kesalahan — BPON</title>
        <meta name="robots" content="noindex" />
        <style>{`
          * { box-sizing: border-box; margin: 0; padding: 0; }
          body {
            background: #0d0505;
            color: #fff;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
            display: flex;
            align-items: center;
            justify-content: center;
            min-height: 100vh;
            padding: 2rem;
          }
          .container { text-align: center; max-width: 520px; }
          .icon {
            width: 80px; height: 80px;
            background: rgba(185,28,28,0.15);
            border: 1px solid rgba(185,28,28,0.3);
            border-radius: 20px;
            display: flex; align-items: center; justify-content: center;
            margin: 0 auto 2rem;
            font-size: 2rem;
          }
          .badge {
            display: inline-block;
            font-size: 10px; font-weight: 700;
            letter-spacing: 0.3em; text-transform: uppercase;
            color: rgba(185,28,28,0.7);
            border: 1px solid rgba(185,28,28,0.2);
            padding: 6px 16px; border-radius: 999px;
            margin-bottom: 1.5rem;
          }
          h1 { font-size: 2rem; font-weight: 800; margin-bottom: 1rem; }
          p { color: rgba(255,255,255,0.5); line-height: 1.7; margin-bottom: 0.5rem; }
          .digest {
            font-family: monospace; font-size: 11px;
            color: rgba(255,255,255,0.2);
            background: rgba(255,255,255,0.05);
            padding: 6px 12px; border-radius: 8px;
            display: inline-block; margin: 1rem 0 2rem;
          }
          .actions { display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; margin-top: 1.5rem; }
          .btn-primary {
            display: inline-flex; align-items: center; gap: 8px;
            background: #B91C1C; color: #fff;
            font-weight: 700; padding: 12px 28px;
            border-radius: 12px; border: none; cursor: pointer;
            transition: background 0.2s; font-size: 15px;
            text-decoration: none;
          }
          .btn-primary:hover { background: #991B1B; }
          .btn-secondary {
            display: inline-flex; align-items: center; gap: 8px;
            background: rgba(255,255,255,0.05);
            border: 1px solid rgba(255,255,255,0.1);
            color: rgba(255,255,255,0.7);
            font-weight: 600; padding: 12px 28px;
            border-radius: 12px; cursor: pointer;
            transition: background 0.2s; font-size: 15px;
            text-decoration: none;
          }
          .btn-secondary:hover { background: rgba(255,255,255,0.1); color: #fff; }
        `}</style>
      </head>
      <body>
        <div className="container">
          <div className="icon">🔥</div>
          <div className="badge">PT Berlian Palm Oil Nusantara</div>
          <h1>Aplikasi Mengalami Masalah</h1>
          <p>Terjadi kesalahan kritis pada sistem. Tim teknis kami sedang menangani masalah ini.</p>
          {error.digest && (
            <p className="digest">Error ID: {error.digest}</p>
          )}
          <div className="actions">
            <button onClick={() => unstable_retry()} className="btn-primary">
              🔄 Coba Lagi
            </button>
            <a href="/" className="btn-secondary">
              🏠 Beranda
            </a>
          </div>
        </div>
      </body>
    </html>
  );
}

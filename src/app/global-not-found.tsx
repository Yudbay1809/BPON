import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '404 - Halaman Tidak Ditemukan | BPON',
  description: 'Halaman yang Anda cari tidak ditemukan.',
};

export default function GlobalNotFound() {
  return (
    <html lang="id">
      <head>
        <meta name="robots" content="noindex" />
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Lexend:wght@400;700;900&display=swap');
          * { box-sizing: border-box; margin: 0; padding: 0; }
          body {
            background: #0d0505;
            color: #fff;
            font-family: 'Lexend', -apple-system, sans-serif;
            display: flex;
            align-items: center;
            justify-content: center;
            min-height: 100vh;
            padding: 2rem;
            overflow: hidden;
          }
          .bg-glow {
            position: fixed; inset: 0; pointer-events: none;
          }
          .glow-1 {
            position: absolute; top: 25%; left: 25%;
            width: 400px; height: 400px;
            background: rgba(185,28,28,0.08);
            border-radius: 50%; filter: blur(80px);
          }
          .glow-2 {
            position: absolute; bottom: 25%; right: 25%;
            width: 300px; height: 300px;
            background: rgba(185,28,28,0.04);
            border-radius: 50%; filter: blur(60px);
          }
          .container { text-align: center; max-width: 580px; position: relative; z-index: 1; }
          .num-404 {
            font-size: clamp(120px, 25vw, 220px);
            font-weight: 900; line-height: 1;
            background: linear-gradient(135deg, #B91C1C 0%, #7f1d1d 50%, #1a0000 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            user-select: none;
            margin-bottom: 1.5rem;
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
          h1 { font-size: 2rem; font-weight: 700; margin-bottom: 1rem; }
          p { color: rgba(255,255,255,0.5); line-height: 1.7; max-width: 400px; margin: 0 auto 2.5rem; }
          .actions { display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; }
          .btn-primary {
            display: inline-flex; align-items: center; gap: 8px;
            background: #B91C1C; color: #fff;
            font-weight: 700; padding: 13px 30px;
            border-radius: 12px; text-decoration: none;
            font-size: 15px; transition: background 0.2s, transform 0.1s;
          }
          .btn-primary:hover { background: #991B1B; transform: scale(1.03); }
          .divider {
            height: 1px; background: rgba(255,255,255,0.08);
            margin: 3rem auto; max-width: 300px;
          }
          .quick-links { display: flex; gap: 8px; justify-content: center; flex-wrap: wrap; }
          .quick-link {
            font-size: 13px; color: rgba(255,255,255,0.35);
            text-decoration: none; padding: 6px 14px;
            border-radius: 8px; transition: all 0.2s;
          }
          .quick-link:hover { color: #B91C1C; background: rgba(255,255,255,0.04); }
        `}</style>
      </head>
      <body>
        <div className="bg-glow">
          <div className="glow-1" />
          <div className="glow-2" />
        </div>
        <div className="container">
          <div className="num-404">404</div>
          <div className="badge">PT Berlian Palm Oil Nusantara</div>
          <h1>Halaman Tidak Ditemukan</h1>
          <p>Halaman yang Anda cari tidak tersedia atau telah dipindahkan. Silakan kembali ke beranda.</p>
          <div className="actions">
            <Link href="/id" className="btn-primary">
              Kembali ke Beranda
            </Link>
          </div>
          <div className="divider" />
          <div className="quick-links">
            <Link href="/id/about" className="quick-link">Tentang Kami</Link>
            <Link href="/id/products" className="quick-link">Produk</Link>
            <Link href="/id/business" className="quick-link">Bisnis</Link>
            <Link href="/id/contact" className="quick-link">Kontak</Link>
          </div>
        </div>
      </body>
    </html>
  );
}

# PT Berlian Palm Oil Nusantara (BPON) - Corporate Website

Welcome to the official corporate website repository for **PT Berlian Palm Oil Nusantara (BPON)**. This application is a high-performance, multilingual, and modern web platform built to showcase BPON's integrated palm oil business, premium products, and commitment to sustainability.

## Tech Stack

This project is built using modern web technologies to ensure optimal performance, SEO, and developer experience:

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router & Turbopack)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Internationalization (i18n)**: [next-intl](https://next-intl-docs.vercel.app/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Animations**: Framer Motion
- **Database / ORM** (Future CMS Integration): [Prisma](https://www.prisma.io/)

## Features

- **Full Multilingual Support**: English (en) and Indonesian (id) routing and translation out of the box.
- **Dynamic Routing & SEO**: Optimized for search engines with server-side rendering and dynamic locale parameters.
- **Modern UI/UX**: Premium and vibrant design with smooth transitions and responsive layouts.
- **Vercel Ready**: Pre-configured for seamless deployment on Vercel Edge/Serverless environments.

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or pnpm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Yudbay1809/BPON.git
   ```
2. Navigate to the project directory:
   ```bash
   cd BPON
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Running the Development Server

To start the development server with Turbopack, run:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result. The application will automatically route you to the default locale (e.g., `/id`).

## Deployment on Vercel

This project is fully optimized for Vercel deployment.

1. Push your code to GitHub.
2. Log in to [Vercel](https://vercel.com/) and click **Add New Project**.
3. Import this repository from your GitHub account.
4. **Build Settings**: Vercel will automatically detect that this is a Next.js project. The default build command (`next build`) and output directory (`.next`) are correct.
5. **Environment Variables**: Add any necessary environment variables (e.g., `DATABASE_URL` for Prisma) in the Vercel dashboard.
6. Click **Deploy**.

## Project Structure

- `/src/app/[locale]`: Contains the multilingual pages (Home, About, Business, Products, Sustainability, News, Contact).
- `/src/components`: Reusable UI components (Layouts, Navbar, Footer, Buttons).
- `/src/i18n`: Internationalization routing configuration.
- `/messages`: JSON dictionary files (`id.json`, `en.json`) for translations.
- `src/proxy.ts`: Next.js 16 Proxy configuration for i18n routing.

## License

© 2026 PT Berlian Palm Oil Nusantara. All Rights Reserved.

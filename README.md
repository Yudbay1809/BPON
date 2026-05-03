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
- **Database / ORM**: [Prisma](https://www.prisma.io/)

## Key Improvements & Features

- **Full Multilingual Support**: Dynamic routing and translation for English (en) and Indonesian (id) using `next-intl`.
- **Localized Assets**: All images are stored locally in `/public/images/`, removing external dependencies and ensuring 100% availability and faster load times.
- **Premium Error Handling**: 
  - Custom **404 (Not Found)** pages integrated within the locale layout.
  - **Global Error Boundaries** for critical system failures with a premium, brand-consistent design.
  - Experimental **Global 404** handling for unmatched routes at the root level.
- **Optimized for Next.js 16**: Fully compatible with the latest file conventions, including `proxy.ts` (formerly middleware).
- **Responsive & Modern UI**: A premium dark-themed design with vibrant corporate red accents, optimized for all device sizes.

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm, pnpm, or yarn

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

Open [http://localhost:3000](http://localhost:3000) with your browser. The application will automatically route you to the default locale (e.g., `/id`).

## Deployment on Vercel

This project is optimized for Vercel:

1. Push your code to GitHub.
2. Import the repository in [Vercel](https://vercel.com/).
3. Vercel will auto-detect Next.js settings.
4. Click **Deploy**.

## Project Structure

- `/src/app/[locale]`: Multilingual page routes.
- `/src/components`: Reusable UI components.
- `/messages`: Translation dictionaries (JSON).
- `/public/images`: Localized high-quality assets.
- `src/proxy.ts`: Next.js 16 routing proxy.

## License

© 2026 PT Berlian Palm Oil Nusantara. All Rights Reserved.

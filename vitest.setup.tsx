import '@testing-library/jest-dom';
import { vi } from 'vitest';

// Mock next/navigation and next-intl
vi.mock('next/navigation', () => ({
  useRouter: () => ({
    push: vi.fn(),
    replace: vi.fn(),
    prefetch: vi.fn(),
  }),
  usePathname: () => '',
  useSearchParams: () => new URLSearchParams(),
}));

vi.mock('@/i18n/routing', () => ({
  Link: ({ children, href }: any) => <a href={href}>{children}</a>,
  usePathname: () => '/',
  useRouter: () => ({
    push: vi.fn(),
  }),
}));

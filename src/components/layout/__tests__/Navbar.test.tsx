import { render, screen } from '@testing-library/react';
import { Navbar } from '../Navbar';
import { describe, it, expect } from 'vitest';

const mockContent = {
  links: [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
  ],
  contactCta: { label: 'Contact Us', href: '/contact' },
  localeLabels: {
    idShort: 'ID',
    enShort: 'EN',
    idLong: 'Indonesia',
    enLong: 'English',
  },
};

describe('Navbar', () => {
  it('renders the logo correctly', () => {
    render(<Navbar content={mockContent} />);
    expect(screen.getByText('BPON')).toBeInTheDocument();
  });

  it('renders navigation links on desktop', () => {
    render(<Navbar content={mockContent} />);
    expect(screen.getAllByText('Home').length).toBeGreaterThan(0);
    expect(screen.getAllByText('About').length).toBeGreaterThan(0);
  });

  it('renders the contact CTA', () => {
    render(<Navbar content={mockContent} />);
    // The CTA appears twice (desktop and mobile drawer), so we get all and assert length or just check if it exists
    const ctaButtons = screen.getAllByText('Contact Us');
    expect(ctaButtons.length).toBeGreaterThan(0);
  });
});

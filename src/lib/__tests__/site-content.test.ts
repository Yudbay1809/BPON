import { describe, it, expect } from 'vitest';
import { getSiteShellContent, getAllSiteContent } from '../site-content';

describe('site-content', () => {
  describe('getSiteShellContent', () => {
    it('should return Indonesian content by default', async () => {
      const content = await getSiteShellContent('id');
      expect(content.navbar).toBeDefined();
      expect(content.footer).toBeDefined();
    });

    it('should fallback to ID if an invalid locale is provided', async () => {
      const content = await getSiteShellContent('invalid-locale');
      expect(content.navbar).toBeDefined();
    });
  });

  describe('getAllSiteContent', () => {
    it('should return complete site content structure', async () => {
      const content = await getAllSiteContent();
      expect(content).toHaveProperty('id');
      expect(content).toHaveProperty('en');
      expect(content.id.navbar).toBeDefined();
    });
  });
});


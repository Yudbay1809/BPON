import { getAllSiteContent } from '@/lib/site-content';

export const dynamic = 'force-static';

export async function GET() {
  const content = await getAllSiteContent();
  return Response.json(content);
}

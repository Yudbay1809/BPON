import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { z } from 'zod';

const articleSchema = z.object({
  slug: z.string().min(2),
  title: z.string().min(2),
  content: z.string().min(10),
  imageUrl: z.string().url().optional(),
  published: z.boolean().optional().default(false),
});

export async function GET() {
  try {
    const articles = await prisma.article.findMany({
      orderBy: { createdAt: 'desc' },
    });
    return NextResponse.json({ success: true, data: articles });
  } catch (error) {
    console.error('Articles GET Error:', error);
    return NextResponse.json({ success: false, error: 'Failed to fetch articles' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validatedData = articleSchema.parse(body);

    const article = await prisma.article.create({
      data: validatedData,
    });

    return NextResponse.json({ success: true, data: article }, { status: 201 });
  } catch (error) {
    console.error('Articles POST Error:', error);

    if (error instanceof z.ZodError) {
      return NextResponse.json({ success: false, error: error.issues }, { status: 400 });
    }

    return NextResponse.json({ success: false, error: 'Internal Server Error' }, { status: 500 });
  }
}

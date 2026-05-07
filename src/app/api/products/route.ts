import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { z } from 'zod';

const productSchema = z.object({
  name: z.string().min(2),
  description: z.string().min(5),
  imageUrl: z.string().url().optional(),
});

export async function GET() {
  try {
    const products = await prisma.product.findMany({
      orderBy: { createdAt: 'desc' },
    });
    return NextResponse.json({ success: true, data: products });
  } catch (error) {
    console.error('Products GET Error:', error);
    return NextResponse.json({ success: false, error: 'Failed to fetch products' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validatedData = productSchema.parse(body);

    const product = await prisma.product.create({
      data: validatedData,
    });

    return NextResponse.json({ success: true, data: product }, { status: 201 });
  } catch (error) {
    console.error('Products POST Error:', error);

    if (error instanceof z.ZodError) {
      return NextResponse.json({ success: false, error: error.issues }, { status: 400 });
    }

    return NextResponse.json({ success: false, error: 'Internal Server Error' }, { status: 500 });
  }
}

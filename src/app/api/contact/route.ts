import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  company: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Validate the request body
    const validatedData = contactSchema.parse(body);

    // Save to database
    const contact = await prisma.contactMessage.create({
      data: {
        name: validatedData.name,
        email: validatedData.email,
        company: validatedData.company,
        message: validatedData.message,
      },
    });

    return NextResponse.json({ 
      success: true, 
      message: 'Message sent successfully',
      data: contact 
    }, { status: 201 });

  } catch (error) {
    console.error('Contact API Error:', error);

    if (error instanceof z.ZodError) {
      return NextResponse.json({ 
        success: false, 
        error: error.issues 
      }, { status: 400 });
    }

    return NextResponse.json({ 
      success: false, 
      error: 'Internal Server Error' 
    }, { status: 500 });
  }
}

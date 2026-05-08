import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { z } from 'zod';
import { resend } from '@/lib/resend';
import { AdminNotificationEmail } from '@/emails/AdminNotification';
import { UserAutoReplyEmail } from '@/emails/UserAutoReply';

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

    // Rate Limiting: Check if email has sent a message in the last 10 minutes
    const tenMinutesAgo = new Date(Date.now() - 10 * 60 * 1000);
    const existingMessage = await prisma.contactMessage.findFirst({
      where: {
        email: validatedData.email,
        createdAt: {
          gt: tenMinutesAgo
        }
      }
    });

    if (existingMessage) {
      return NextResponse.json({ 
        success: false, 
        error: 'Please wait 10 minutes before sending another message.' 
      }, { status: 429 });
    }

    // Save to database
    const contact = await prisma.contactMessage.create({
      data: {
        name: validatedData.name,
        email: validatedData.email,
        company: validatedData.company,
        message: validatedData.message,
      },
    });

    // Send Emails asynchronously (don't block the response)
    try {
      // 1. Send Notification to Admin
      await resend.emails.send({
        from: 'BPON Notifications <notifications@bpon.co.id>',
        to: process.env.ADMIN_EMAIL || 'admin@bpon.co.id',
        subject: `New Inquiry from ${validatedData.name}`,
        react: AdminNotificationEmail({
          name: validatedData.name,
          email: validatedData.email,
          company: validatedData.company,
          message: validatedData.message,
        }),
      });

      // 2. Send Auto-reply to User
      await resend.emails.send({
        from: 'BPON Support <support@bpon.co.id>',
        to: validatedData.email,
        subject: 'We have received your message - BPON',
        react: UserAutoReplyEmail({
          name: validatedData.name,
        }),
      });
    } catch (emailError) {
      // Log email error but don't fail the contact submission
      console.error('Email sending error:', emailError);
    }

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

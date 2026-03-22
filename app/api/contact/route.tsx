import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  if (!process.env.RESEND_API_KEY) {
    console.error('Contact API error: Missing RESEND_API_KEY')
    return NextResponse.json(
      { success: false, error: 'Missing RESEND_API_KEY in environment' },
      { status: 500 },
    )
  }

  try {
    const { name, email, subject, message } = await req.json()

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: 'Name, email, and message are required' },
        { status: 400 },
      )
    }

    const { Resend } = await import('resend')
    const resend = new Resend(process.env.RESEND_API_KEY)

    const fromEmail = process.env.CONTACT_FROM_EMAIL || 'Portfolio <onboarding@resend.dev>'
    const toEmail = process.env.CONTACT_TO_EMAIL || 'alihamzazubair@gmail.com'

    const response = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      subject: subject || 'New Contact Message',
      html: `
        <h2>New Message from Portfolio</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject || 'No subject'}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    })

    if (!response || (response as any).error) {
      console.error('Contact API error: Resend response error', response)
      return NextResponse.json(
        { success: false, error: 'Resend failed to send email', details: (response as any).error },
        { status: 502 },
      )
    }

    console.log('Contact email sent successfully:', response)
    return NextResponse.json({ success: true, messageId: (response as any).data?.id || null })
  } catch (error) {
    console.error('Contact API error:', error)
    return NextResponse.json(
      { success: false, error: (error as Error).message || 'Unexpected error' },
      { status: 500 },
    )
  }
}
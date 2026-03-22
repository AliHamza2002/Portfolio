import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const { name, email, subject, message } = await req.json()

    const { Resend } = await import('resend')
    const resend = new Resend(process.env.RESEND_API_KEY)

    const response = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: ["alihamzazubair@gmail.com"], // 👈 YOUR EMAIL
      subject: subject || "New Contact Message",
      html: `
        <h2>New Message from Portfolio</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Contact API error:', error)
    return NextResponse.json({ success: false, error: (error as Error).message })
  }
}
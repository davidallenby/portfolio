import { NextRequest, NextResponse } from 'next/server'
import { ResendEmailService } from '../../../services/email/EmailService'
import type { ContactFormData } from '../../../services/email/interfaces'

// Lazy-initialize email service to avoid crashing at module load
let emailService: ResendEmailService
function getEmailService() {
  if (!emailService) {
    emailService = new ResendEmailService(process.env.RESEND_API_KEY || '')
  }
  return emailService
}

// Validation function
function validateContactData(data: any): data is ContactFormData {
  return (
    typeof data === 'object' &&
    data !== null &&
    typeof data.name === 'string' &&
    data.name.trim().length > 0 &&
    typeof data.email === 'string' &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email) &&
    typeof data.message === 'string' &&
    data.message.trim().length > 0
  )
}

export async function POST(request: NextRequest) {
  try {
    // Parse request body
    const body = await request.json()

    // Validate request data
    if (!validateContactData(body)) {
      return NextResponse.json(
        {
          error:
            'Invalid request data. Please provide name, email, and message.'
        },
        { status: 400 }
      )
    }

    // Sanitize input data
    const contactData: ContactFormData = {
      name: body.name.trim(),
      email: body.email.trim().toLowerCase(),
      message: body.message.trim()
    }

    // Send email
    await getEmailService().sendContactEmail(contactData)

    // Return success response
    return NextResponse.json(
      { success: true, message: 'Contact request sent successfully!' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact API error:', error)

    return NextResponse.json(
      { error: 'Failed to send email. Please try again later.' },
      { status: 500 }
    )
  }
}

// Handle unsupported methods
export async function GET() {
  return NextResponse.json({ error: 'Method not allowed' }, { status: 405 })
}

export async function PUT() {
  return NextResponse.json({ error: 'Method not allowed' }, { status: 405 })
}

export async function DELETE() {
  return NextResponse.json({ error: 'Method not allowed' }, { status: 405 })
}

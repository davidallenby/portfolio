import { NextRequest, NextResponse } from 'next/server'
import { NodemailerEmailService } from '../../../services/email/EmailService'
import type { ContactFormData } from '../../../services/email/interfaces'

// Email service configuration
const emailConfig = {
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: process.env.SMTP_SECURE === 'true',
  auth: {
    user: process.env.SMTP_USER || '',
    pass: process.env.SMTP_PASS || ''
  }
}

// Debug: Log email config (without password)
console.log('Email config:', {
  host: emailConfig.host,
  port: emailConfig.port,
  secure: emailConfig.secure,
  user: emailConfig.auth.user,
  hasPassword: !!emailConfig.auth.pass
})

// Initialize email service
const emailService = new NodemailerEmailService(emailConfig)

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

    // Verify email service connection
    console.log('Attempting to verify email service connection...')
    const isConnected = await emailService.verifyConnection()
    console.log('Connection verification result:', isConnected)

    if (!isConnected) {
      console.error(
        'Email service connection failed - check SMTP credentials and settings'
      )
      return NextResponse.json(
        {
          error:
            'Email service temporarily unavailable. Please try again later.'
        },
        { status: 503 }
      )
    }

    // Send email
    console.log('Sending contact email...')
    await emailService.sendContactEmail(contactData)
    console.log('Email sent successfully')

    // Return success response
    return NextResponse.json(
      { success: true, message: 'Contact request sent successfully!' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact API error:', error)

    // Return appropriate error response
    if (error instanceof Error) {
      if (error.message.includes('Failed to send email')) {
        return NextResponse.json(
          { error: 'Failed to send email. Please try again later.' },
          { status: 500 }
        )
      }
    }

    return NextResponse.json(
      { error: 'Internal server error. Please try again later.' },
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

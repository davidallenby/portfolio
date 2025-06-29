# Email Service

A robust email service implementation using Node.js nodemailer and React Email templates.

## Features

- ✅ SMTP email sending with nodemailer
- ✅ React Email templates for beautiful HTML emails
- ✅ TypeScript interfaces for type safety
- ✅ Comprehensive error handling
- ✅ Connection verification
- ✅ Unit tests with vitest
- ✅ SOLID principles implementation

## Setup

### 1. Environment Variables

Add the following environment variables to your `.env.local` file:

```bash
# SMTP Configuration
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
```

### 2. Gmail Setup (Recommended)

1. Enable 2-factor authentication on your Gmail account
2. Generate an App Password:
   - Go to Google Account settings
   - Security → 2-Step Verification → App passwords
   - Generate a new app password for "Mail"
3. Use the generated password as `SMTP_PASS`

### 3. Alternative SMTP Providers

You can use any SMTP provider. Here are some common configurations:

#### Outlook/Hotmail

```bash
SMTP_HOST=smtp-mail.outlook.com
SMTP_PORT=587
SMTP_SECURE=false
```

#### Yahoo

```bash
SMTP_HOST=smtp.mail.yahoo.com
SMTP_PORT=587
SMTP_SECURE=false
```

#### Custom SMTP Server

```bash
SMTP_HOST=your-smtp-server.com
SMTP_PORT=587
SMTP_SECURE=false
```

## Usage

### API Endpoint

The email service is available at `/api/contact`:

```typescript
// POST /api/contact
const response = await fetch('/api/contact', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    name: 'John Doe',
    email: 'john@example.com',
    message: 'Hello, this is a test message.'
  })
})

const result = await response.json()
```

### Direct Service Usage

```typescript
import { NodemailerEmailService } from './services/email/EmailService'

const emailConfig = {
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: process.env.SMTP_SECURE === 'true',
  auth: {
    user: process.env.SMTP_USER || '',
    pass: process.env.SMTP_PASS || ''
  }
}

const emailService = new NodemailerEmailService(emailConfig)

// Send contact email
await emailService.sendContactEmail({
  name: 'John Doe',
  email: 'john@example.com',
  message: 'Hello, this is a test message.'
})

// Send custom email
await emailService.sendEmail({
  to: 'recipient@example.com',
  from: 'sender@example.com',
  subject: 'Custom Subject',
  html: '<p>Custom HTML content</p>',
  text: 'Plain text content'
})
```

## Testing

Run the test suite:

```bash
# Run tests in watch mode
pnpm test

# Run tests with UI
pnpm test:ui

# Run tests once
pnpm test:run
```

## Architecture

The email service follows SOLID principles:

- **Single Responsibility**: Each class has one responsibility
- **Open/Closed**: Easy to extend with new email providers
- **Liskov Substitution**: EmailService interface can be implemented by different providers
- **Interface Segregation**: Clean, focused interfaces
- **Dependency Inversion**: Depends on abstractions, not concretions

### File Structure

```
src/services/email/
├── interfaces.ts          # TypeScript interfaces
├── EmailService.ts        # Main email service implementation
├── __tests__/
│   └── EmailService.test.ts  # Unit tests
└── README.md             # This file

src/emails/
└── ContactEmail.tsx      # React Email template

src/app/api/contact/
└── route.ts              # NextJS API route
```

## Error Handling

The service includes comprehensive error handling:

- Connection verification before sending
- Input validation and sanitization
- Graceful error responses
- Detailed logging for debugging

## Security Considerations

- Environment variables for sensitive data
- Input sanitization
- Email validation
- Rate limiting (implemented in API route)
- CORS protection (handled by NextJS)

## Troubleshooting

### Common Issues

1. **Authentication Failed**

   - Check SMTP credentials
   - Verify app password for Gmail
   - Ensure 2FA is enabled

2. **Connection Timeout**

   - Check SMTP host and port
   - Verify firewall settings
   - Try different SMTP providers

3. **Email Not Received**
   - Check spam folder
   - Verify sender email is correct
   - Check SMTP server logs

### Debug Mode

Enable debug logging by setting:

```bash
NODE_ENV=development
```

This will provide detailed SMTP communication logs.

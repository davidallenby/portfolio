export interface EmailData {
  to: string
  from: string
  subject: string
  html: string
  text?: string
}

export interface ContactFormData {
  name: string
  email: string
  message: string
}

export interface EmailService {
  sendEmail(emailData: EmailData): Promise<void>
  sendContactEmail(contactData: ContactFormData): Promise<void>
}

export interface EmailConfig {
  host: string
  port: number
  secure: boolean
  auth: {
    user: string
    pass: string
  }
}

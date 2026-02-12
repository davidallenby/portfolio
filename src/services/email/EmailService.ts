import { Resend } from 'resend'
import ContactEmail from '../../emails/ContactEmail'
import type {
  ContactFormData,
  EmailData,
  EmailService
} from './interfaces'

export class ResendEmailService implements EmailService {
  private resend: Resend

  constructor(apiKey: string) {
    this.resend = new Resend(apiKey)
  }

  async sendEmail(emailData: EmailData): Promise<void> {
    try {
      const { error } = await this.resend.emails.send({
        from: emailData.from,
        to: emailData.to,
        subject: emailData.subject,
        html: emailData.html,
        text: emailData.text
      })

      if (error) {
        console.error('Failed to send email:', error)
        throw new Error('Failed to send email')
      }
    } catch (error) {
      console.error('Failed to send email:', error)
      throw new Error('Failed to send email')
    }
  }

  async sendContactEmail(contactData: ContactFormData): Promise<void> {
    try {
      const { error } = await this.resend.emails.send({
        from: 'hello@davidallenby.com',
        to: 'hello@davidallenby.com',
        subject: 'New Contact Request | davidallenby.com',
        react: ContactEmail({
          name: contactData.name,
          email: contactData.email,
          message: contactData.message
        })
      })

      if (error) {
        console.error('Failed to send contact email:', error)
        throw new Error('Failed to send contact email')
      }
    } catch (error) {
      console.error('Failed to send contact email:', error)
      throw new Error('Failed to send contact email')
    }
  }
}

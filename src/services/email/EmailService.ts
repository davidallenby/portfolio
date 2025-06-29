import { render } from '@react-email/components'
import nodemailer from 'nodemailer'
import ContactEmail from '../../emails/ContactEmail'
import type {
  ContactFormData,
  EmailConfig,
  EmailData,
  EmailService
} from './interfaces'

export class NodemailerEmailService implements EmailService {
  private transporter: nodemailer.Transporter
  private config: EmailConfig

  constructor(config: EmailConfig) {
    this.config = config
    this.transporter = nodemailer.createTransport({
      host: config.host,
      port: config.port,
      secure: config.secure,
      auth: {
        user: config.auth.user,
        pass: config.auth.pass
      }
    })
  }

  async sendEmail(emailData: EmailData): Promise<void> {
    try {
      const mailOptions = {
        from: emailData.from,
        to: emailData.to,
        subject: emailData.subject,
        html: emailData.html,
        text: emailData.text
      }

      await this.transporter.sendMail(mailOptions)
    } catch (error) {
      console.error('Failed to send email:', error)
      throw new Error('Failed to send email')
    }
  }

  async sendContactEmail(contactData: ContactFormData): Promise<void> {
    try {
      const htmlContent = await render(
        ContactEmail({
          name: contactData.name,
          email: contactData.email,
          message: contactData.message
        })
      )

      const emailData: EmailData = {
        to: 'hello@davidallenby.com',
        from: 'hello@davidallenby.com',
        subject: 'New Contact Request | davidallenby.com',
        html: htmlContent,
        text: `New contact request from ${contactData.name} (${contactData.email}): ${contactData.message}`
      }

      await this.sendEmail(emailData)
    } catch (error) {
      console.error('Failed to send contact email:', error)
      throw new Error('Failed to send contact email')
    }
  }

  async verifyConnection(): Promise<boolean> {
    try {
      console.log(
        'Verifying SMTP connection to:',
        this.config.host,
        'port:',
        this.config.port
      )
      await this.transporter.verify()
      console.log('SMTP connection verified successfully')
      return true
    } catch (error) {
      console.error('SMTP connection verification failed:', {
        host: this.config.host,
        port: this.config.port,
        secure: this.config.secure,
        user: this.config.auth.user,
        error: error instanceof Error ? error.message : String(error)
      })
      return false
    }
  }
}

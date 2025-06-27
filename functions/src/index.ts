import * as sendgrid from '@sendgrid/mail'
import { logger, runWith } from 'firebase-functions'
import type { ContactRequestPayload } from './interfaces/contact'

sendgrid.setApiKey(process.env.SENDGRID as string)

/**
 * Verifies the recaptcha request. If it returns false, we'll throw an error.
 *
 * @param {string} token
 * @return {*}
 */
const verifyRecaptcha = async (token: string): Promise<boolean> => {
  try {
    const key = process.env.RECAPTCHA
    const url = `https://www.google.com/recaptcha/api/siteverify?secret=${key}&response=${token}`
    const response = await fetch(url, { method: 'POST' }).then((res) =>
      res.json()
    )
    return response.success
  } catch (err) {
    logger.error(err)
    throw err
  }
}

/**
 * Contact Us API
 */
export const postContactRequest = runWith({
  secrets: ['SENDGRID', 'RECAPTCHA']
}).https.onCall(async (payload: ContactRequestPayload, context) => {
  try {
    // For now, just return success to test deployment
    logger.info('Contact request received', { payload })
    return { success: true, message: 'Contact request received' }
  } catch (err) {
    logger.error(err)
    throw err
  }
})

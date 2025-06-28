import * as sendgrid from '@sendgrid/mail';
import { logger, runWith } from 'firebase-functions';
import type { ContactRequestPayload } from './interfaces/contact';

/**
 * Verifies the recaptcha request. If it returns false, we'll throw an error.
 *
 * @param {string} token
 * @return {*}
 */
const verifyRecaptcha = async (token: string): Promise<boolean> => {
	try {
		const key = process.env.RECAPTCHA;
		const url = `https://www.google.com/recaptcha/api/siteverify?secret=${key}&response=${token}`;
		const response = await fetch(url, { method: 'POST' }).then((res) => res.json());
		return response.success;
	} catch (err) {
		logger.error(err);
		throw err;
	}
};

/**
 * Contact Us API
 */
export const postContactRequest = runWith({ secrets: ['SENDGRID', 'RECAPTCHA'] }).https.onCall(
	async (payload: ContactRequestPayload, context) => {
		// If no recaptcha token is sent, abort.
		if (!payload.recaptchaToken) {
			throw new Error('Error processing request. Try again later.');
		}
		// Validate the recaptcha
		const valid = await verifyRecaptcha(payload.recaptchaToken);
		if (!valid) {
			throw new Error('Failed to verify request');
		}
		// Send the email
		try {
			// Create the email content
			const email = {
				to: 'hello@davidallenby.com',
				from: 'hello@davidallenby.com', // Verified SendGrid Sender
				subject: 'New contat request | davidallenby.com',
				html: `
        <p>You have received a new contact request:</p>
        <ul>
          <li>Name: ${payload.name}</li>
          <li>Email: ${payload.email}</li>
          <li>Message: ${payload.message}</li>
        </ul>
      `
			};
			// Send the email
			await sendgrid.send(email);
			// Return success
			return { success: true };
		} catch (err) {
			logger.error(err);
			throw err;
		}
	}
);

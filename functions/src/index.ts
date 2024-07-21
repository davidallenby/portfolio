/**
 * Import function triggers from their respective submodules:
 *
 * import {onCall} from "firebase-functions/v2/https";
 * import {onDocumentWritten} from "firebase-functions/v2/firestore";
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

// import * as logger from "firebase-functions/logger";
import { ContactRequestPayload } from "./interfaces/contact";
import { runWith } from "firebase-functions/v1";
import sendgrid = require('@sendgrid/mail');

/**
 * Contact Us API
 */
export const postContactRequest = runWith({ secrets: ['SENDGRID'] })
.https.onCall(async (payload: ContactRequestPayload, context) => {

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
    }
    // Send the email
    await sendgrid.send(email);
    // Return success
    return { success: true }
  } catch (err) {
    throw err;
  }
})

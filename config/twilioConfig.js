require('dotenv').config();
const twilio = require('twilio');

const accountSid = process.env.TWILIO_ACCOUNT_SID; // Your Twilio Account SID
const authToken = process.env.TWILIO_AUTH_TOKEN;   // Your Twilio Auth Token
const phoneNumber = process.env.TWILIO_PHONE_NUMBER; // Your Twilio phone number

// Initialize the Twilio client
const client = twilio(accountSid, authToken);

module.exports = { client, phoneNumber };

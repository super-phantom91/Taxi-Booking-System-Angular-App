const twilio = require('twilio');

const accountSid = process.env.accountSid;
const authToken = process.env.authToken;
const twilioPhoneNumber = process.env.twilioPhoneNumber;

const client = (accountSid && authToken)
  ? twilio(accountSid, authToken)
  : null;

if (!client) {
  console.warn('Twilio credentials not set; SMS features are disabled.');
}

function sendWelcomeSMS(toPhoneNumber) {
  if (!client) {
    console.warn('Skipping welcome SMS: Twilio not configured.');
    return;
  }

  const welcomeMessage = `Welcome to Eber Ride! \n Your Account has been Successfully Created.`;

  client.messages.create({
    to: toPhoneNumber,
    from: twilioPhoneNumber,
    body: welcomeMessage
  })
    .then(() => console.log(`Welcome SMS sent to ${toPhoneNumber}`))
    .catch(error => console.error(`Failed to send welcome SMS: ${error.message}`));
}

function sendRideSMS(toPhoneNumber, status) {
  if (!client) {
    console.warn('Skipping ride SMS: Twilio not configured.');
    return;
  }

  let smsBody = "";
  switch (status) {
    case 4:
      smsBody = "Driver has accepted your ride request.";
      break;
    case 5:
      smsBody = "Driver has started your ride.";
      break;
    case 7:
      smsBody = "Driver has completed your ride.";
      break;
    case 8:
      smsBody = "Your payment has been processed.";
      break;
    default:
      smsBody = "Invalid event code";
      break;
  }

  client.messages.create({
    to: toPhoneNumber,
    from: twilioPhoneNumber,
    body: smsBody
  })
    .then(() => console.log(`SMS sent to ${toPhoneNumber} for Ride Status: ${status}`))
    .catch(error => console.error(`Failed to send SMS: ${error.message}`));
}

module.exports = {
  client,
  sendRideSMS,
  sendWelcomeSMS
};

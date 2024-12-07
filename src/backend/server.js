const express = require('express');
const sgMail = require('@sendgrid/mail');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

// Configure SendGrid API Key
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// Middleware
app.use(bodyParser.json());

// Endpoint to handle form submission
app.post('/send-email', async (req, res) => {
  const { name, email, message } = req.body;

  const msg = {
    to: 'mourad.bh09@gmail.com', // The recipient's email address
    from: `${email}`, // Your email address (SendGrid verified sender)
    subject: `New message from ${name}`,
    text: `You have a new message from ${name} (${email}):\n\n${message}`,
  };

  try {
    await sgMail.send(msg);
    res.status(200).send({ success: true, message: 'Email sent successfully!' });
  } catch (error) {
    console.error(error);
    res.status(500).send({ success: false, message: 'Failed to send email.' });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

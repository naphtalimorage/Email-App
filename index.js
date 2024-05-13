const express = require('express');
const app = express();
const port = 3000;
const nodemailer = require('nodemailer');

async function sendEmail() {
  // Create a transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    secure: true, // enforcing secure transfer
    auth: { 
      user: 'kevinheart@gmail.com',
      pass: '12345678'
    }
  });

  // Set up email data
  let mailOptions = {
    from: 'kevinheart@gmail.com',
    to: 'jonsonderulo@gmail.com',
    subject: 'Hello, World!',
    text: 'This is a plain text email'
  };

  // Send email
  let info = await transporter.sendMail(mailOptions);

  console.log('Message sent: %s', info.messageId);
}

// Execute the function
sendEmail().catch(console.error);


app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`)
});
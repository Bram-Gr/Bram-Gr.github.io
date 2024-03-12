

const { createTransport } = require('nodemailer');

const headers = {
  'Access-Control-Allow-Origin': 'https://bram-gr.netlify.app',
  'Access-Control-Allow-Headers': 'Content-Type',
};

// Use CommonJS syntax for exporting the handler function
module.exports.handler = async function (event) {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method Not Allowed' }),
      headers,
    };
  }

  try {
    const { subject, body } = JSON.parse(event.body);

    const transporter = createTransport({
      service: 'gmail',
      auth: {
        user: 'bramzachgroen@gmail.com',
        pass: process.env.EMAP,
      },
    });

    const mailOptions = {
      from: 'bramzachgroen@gmail.com',
      to: 'bramzachgroen@gmail.com',
      subject,
      text: body,
    };

    const info = await transporter.sendMail(mailOptions);

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ message: 'Email sent successfully', info }),
    };
  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: 'Error sending email' }),
    };
  }
};

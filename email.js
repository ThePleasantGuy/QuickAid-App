// email.js
const nodemailer = require('nodemailer');

// Create a transporter object using SMTP settings
const transporter = nodemailer.createTransport({
    host: 'smtp.example.com', // Replace with your email provider's SMTP server
    port: 587, // Usually 587 for TLS
    secure: false, // Use true for port 465, false for other ports
    auth: {
        user: 'your-email@example.com', // Your email
        pass: 'your-email-password', // Your email password
    },
});

// Function to send an email
const sendEmail = (recipient, subject, message) => {
    const mailOptions = {
        from: 'your-email@example.com', // Sender address
        to: recipient, // List of recipients
        subject: subject, // Subject line
        text: message, // Plain text body
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log('Error occurred: ', error);
        } else {
            console.log('Email sent: ', info.response);
        }
    });
};

// Export the sendEmail function
module.exports = sendEmail;

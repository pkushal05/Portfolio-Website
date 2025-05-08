// Import nodemailer 
const nodemailer = require('nodemailer');

// Renders the Contact Me page
const getContactMePage = (req, res) => {
    res.render('contactMe');
};

// Handles sending email from the contact form
const sendMail = async (req, res) => {
    const { name, email, message } = req.body;

    // Configure nodemailer with Gmail and env credentials
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL_USERNAME,
            pass: process.env.EMAIL_PASSWORD
        }
    });

    // Email details
    const mailOptions = {
        from: process.env.EMAIL_USERNAME,
        to: process.env.EMAIL_USERNAME,
        subject: `Message from ${name}`,
        text: message,
        replyTo: email
    };

    try { 
        // Sending mail with all the details
        await transporter.sendMail(mailOptions);
        // Sending response message with status - 200
        res.status(200).json({ success: true, message: "Email sent successully!" });
    } catch (error) {
        // Printing the error in console
        console.error(error);
        // Sending error messgae with status - 500
        res.status(500).json({ success: false, message: "Email failed to send" });
    }
};

// Export controller functions
module.exports = { getContactMePage, sendMail };

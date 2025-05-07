const nodemailer = require('nodemailer');
const getContactMePage = (req, res) => {
    res.render('contactMe');
};

const sendMail = async (req, res) => {

    const {name, email, message} = req.body;

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL_USERNAME,
            pass: process.env.EMAIL_PASSWORD
        }
    });

    const mailOptions = {
        from: process.env.EMAIL_USERNAME,
        to: process.env.EMAIL_USERNAME,
        subject: `Message from ${name}`,
        text: message,
        replyTo: email
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({success: true, message: "Email sent successully!"});
    } catch (error) {
        console.error(error);
        res.status(500).json({success: false, message: "Email failed to send"});
    }
};

module.exports = { getContactMePage, sendMail };
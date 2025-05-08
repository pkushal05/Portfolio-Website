// Import express to create the router
const express = require('express');
const router = express.Router(); // Create a new router instance

// Import multer for handling form-data (without file uploads)
const multer = require('multer');
const upload = multer(); // Configure multer to handle text-only form data

// Import controller functions
const { getContactMePage, sendMail } = require('../controllers/contactMeControllers');

// Route to serve the Contact Me page
router.get('/contactme', getContactMePage);

// Route to handle contact form submission (POST request)
router.post('/sendmail', upload.none(), sendMail); // upload.none() parses form fields

// Export the router to be used in the main app
module.exports = router;

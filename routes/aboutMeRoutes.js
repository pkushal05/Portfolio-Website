// Import express to create the router
const express = require('express');
const router = express.Router(); // Create a new router instance

// Import the controller function
const { getAboutMePage } = require('../controllers/aboutMeControllers');

// Route to get the About Me page
router.get('/aboutme', getAboutMePage);

// Export the router to be used in the main app
module.exports = router;

// Import express to create the router
const express = require('express');
const router = express.Router(); // Create a new router instance

// Import the controller function
const { getHomepage } = require('../controllers/homecontrollers');

// Route to get the Home page
router.get('/', getHomepage);

// Export the router to be used in the main app
module.exports = router;
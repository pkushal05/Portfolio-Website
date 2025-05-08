// Import express to create the router
const express = require('express');
const router = express.Router(); // Create a new router instance

// Import the controller function
const { getProjectsPage } = require('../controllers/projectsControllers');

// Route to get the Projects page
router.get('/projects', getProjectsPage);

// Export the router to be used in the main app
module.exports = router;
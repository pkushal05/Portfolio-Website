// Import express to create the router
const express = require('express');
const router = express.Router(); // Create a new router instance

// Import the controller function
const { getSkillsPage } = require('../controllers/skillsControllers');

// Route to get the Skills page
router.get('/skills', getSkillsPage);

// Export the router to be used in the main app
module.exports = router;
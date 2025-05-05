const express = require('express');
const router = express.Router();
const { getProjectsPage } = require('../controllers/projectsControllers');

router.get('/projects', getProjectsPage);

module.exports = router;
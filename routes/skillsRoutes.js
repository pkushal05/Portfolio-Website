const express = require('express');
const router = express.Router();
const { getSkillsPage } = require('../controllers/skillsControllers');

router.get('/skills', getSkillsPage);

module.exports = router;
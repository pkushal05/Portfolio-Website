const express = require('express');
const router = express.Router();
const { getAboutMePage } = require('../controllers/aboutMeControllers');

router.get('/aboutme', getAboutMePage);

module.exports = router;
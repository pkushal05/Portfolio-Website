const express = require('express');
const router = express.Router();
const { getHomepage } = require('../controllers/homecontrollers');

router.get('/', getHomepage);

module.exports = router;
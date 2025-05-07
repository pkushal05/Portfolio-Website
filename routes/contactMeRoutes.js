const express = require('express');
const router = express.Router();
const { getContactMePage } = require('../controllers/contactMeControllers') 

router.get('/contactme', getContactMePage);

module.exports = router;
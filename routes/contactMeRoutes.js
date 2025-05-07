const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer();
const { getContactMePage, sendMail } = require('../controllers/contactMeControllers');

router.get('/contactme', getContactMePage);

router.post('/sendmail', upload.none() ,sendMail);

module.exports = router;
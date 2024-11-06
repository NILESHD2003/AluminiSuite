const express = require('express');
const router = express.Router();

const {sendOTP, loginInstitute, registerInstitute} = require('../Controller/Authentication.Controller');

router.post('/sendOTP', sendOTP);
router.post('/institute/login', loginInstitute);
router.post('/institute/signup', registerInstitute);

module.exports = router;
const express = require('express');
const router = express.Router();

const {sendOTP, loginHost, registerHost, loginMember} = require('../Controller/Authentication.Controller');

router.post('/sendOTP', sendOTP);
router.post('/host/login', loginHost);
router.post('/host/signup', registerHost);
router.post('/member/login', loginMember);

module.exports = router;
const express = require('express');
const router = express.Router();

const { onboardMember, getProfile, updateProfile} = require('../Controller/Member.Controller');

router.post('/onboard', onboardMember);

router.put('/:memberId/profile/update', updateProfile);

router.get('/:memberId/profile', getProfile);

module.exports = router;
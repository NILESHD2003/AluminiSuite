const express = require('express');
const router = express.Router();

const { inviteMember, createCommunity, getAllCommunities, getProfile, updateProfile } = require('../Controller/Host.Controller');

router.post('/invite', inviteMember);
router.put('/:hostId/profile/update', updateProfile);

router.get('/:hostId/profile', getProfile);

module.exports = router;
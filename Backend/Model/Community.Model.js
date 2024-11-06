const mongoose = require('mongoose');
const { post } = require('../Routes/Authentication.Route');

const CommunitySchema = new mongoose.Schema({
    communityId: {
        type: String,
        required: true
    },
    hostId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Host',
        required: true
    },
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    posts: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Post'
        }
    ],
    activeMembers: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Member'
        }
    ],
    invitedMembers: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Invite'
        }
    ],
});

module.exports = mongoose.model('Community', CommunitySchema);
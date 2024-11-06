const e = require('express');
const mongoose = require('mongoose');

const InviteSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    host: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Host',
        required: true
    },
    role: {
        type: String,
        required: true,
        enum: ['Alumni', 'Student']
    },
    token: {
        type: String,
        required: true
    },
    community: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Community'
        }
    ],
    createdAt: {
        type: Date,
        default: Date.now,
        expires: 60 * 60 * 24 * 7, // The document will be automatically deleted after 7 days of its creation time
    },
});

module.exports = mongoose.model('Invite', InviteSchema);
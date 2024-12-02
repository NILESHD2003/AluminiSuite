const mongoose = require('mongoose');

const HostSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    address: {
        type: String
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    logo: {
        type: String
    },
    description: {
        type: String
    },
    status: {
        type: Boolean,
        default: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    },
    contactInfo: {
        email: {
            type: String,
        },
        phNo: {
            type: String,
        },
        website: {
            type: String,
        },
    },
    socials: {
        facebook: {
            type: String,
        },
        twitter: {
            type: String,
        },
        linkedIn: {
            type: String,
        },
        instagram: {
            type: String,
        },
    },
}, {
    timestamps: true
});

const Host = mongoose.model('Host', HostSchema);

module.exports = Host;
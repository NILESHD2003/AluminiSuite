const mongoose = require('mongoose');

const InstituteSchema = new mongoose.Schema({
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
    website: {
        type: String
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
    created: {
        type: Date,
        default: Date.now
    },
    contactInfo :{
        email :{
            type: String,
        },
        phNo: {
            type: String,
        },
        website: {
            type: String,
        },
    }
});

const Institute = mongoose.model('Institute', InstituteSchema);

module.exports = Institute;
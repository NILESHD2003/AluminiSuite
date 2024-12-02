const mongoose = require('mongoose');

const MemberSchema = new mongoose.Schema({
    role: {
        type: String,
        required: true,
        enum: ['Student', 'Alumni'],
    },
    name: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        required: true,
        enum: ['Male', 'Female', 'Other']
    },
    email: {
        type: String,
        required: true,
        match: [/^\S+@\S+\.\S+$/, 'Please use a valid email address.'],
        unique: true,
    },
    dob: {
        type: Date,
    },
    location: {
        type: String,
    },
    bio: {
        type: String,
        trim: true
    },
    profileImage: {
        type: String,
    },
    phone: {
        type: String,
        match: [/^\d{10}$/, 'Please enter a valid 10-digit phone number.']
    },
    password: {
        type: String,
        required: true,
    },
    // additional details for posts
    posts: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Post'
        }
    ],
}, { timestamps: true });

module.exports = mongoose.model('Member', MemberSchema);
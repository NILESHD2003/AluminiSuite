const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Member',
        required: true
    },
    host: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Host',
        required: true
    },
    content: {
        type: String,
        trim: true
    },
    media: [
        {
            type: String
        }
    ],
    likes: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Member'
        }
    ],
    comments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Comment'
        }
    ],
    createdAt: {
        type: Date,
        default: Date.now
    },
}, {
    timestamps: true
});

module.exports = mongoose.model('Post', PostSchema);
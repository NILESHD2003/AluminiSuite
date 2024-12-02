const express = require('express');
const router = express.Router();

const {createPosts, getAllPostsByHost, getPostById} = require('../Controller/Post.Controller');

router.post('/create', createPosts);

router.get('/post/:postId', getPostById);
router.get('/all/:hostId', getAllPostsByHost);

module.exports = router;
const Post = require('../Model/Post.Model');
const Host = require('../Model/Host.Model')
const Member = require('../Model/Member.Model');

exports.createPosts = async (req, res) => {
    try{
        const {owner, hostId, content, media} = req.body;

        if(!owner || !hostId || !content) {
            return res.status(400).json({
                success: false,
                message: "Please fill in all the fields"
            })
        }

        const ownerAcc = await Member.findById({_id: owner})
        if(!ownerAcc) {
            return res.status(400).json({
                success: false,
                message: 'Unable to find Member details'
            })
        }

        const host = await Host.findById({_id: hostId});
        if(!host) {
            return res.status(400).json({
                success: false,
                message: 'Unable to find Host details'
            })
        }

        const newPost = await Post.create({
            owner,
            host: hostId,
            content
        });
        
        return res.status(201).json({
            success: true,
            data: newPost._id,
            message: "Post Created Successfully"
        })
    }catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        })
    }
};

exports.getAllPostsByHost = async (req, res) => {
    try {    
        const { hostId } = req.params;
        const posts = await Post.find({host: hostId}).populate("owner").populate("host")

        return res.status(200).json({
            success: true,
            data: posts,
            message: "Posts fetched Successfully"
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            data: [],
            message: "Something Went wront while fetching all posts in host"
        })
    }
}

exports.getPostById = async (req, res) => {
    try{
        const { postId } = req.params;
        const post = await Post.findById(postId).populate("owner").populate("host")

        return res.status(200).json({
            success: true,
            data: post,
            message: "Posts fetched Successfully"
        })
    }catch(error){
        console.log(error);
        return res.status(500).json({
            success: false,
            data: null,
            message: "Something went wrong while fetching post"
        })
    }
}

const Host = require('../Model/Host.Model');
const Invite = require('../Model/Invite.Model');
const Community = require('../Model/Community.Model');
const generateSlug = require('../Utils/SlugGenerator');
const generator = require('generate-password');

const mailSender = require('../Utils/MailSender');
const inviteMail = require('../Mails/inviteMail');

exports.inviteMember = async (req, res) => {
    try {
        const { email, role, communities, hostId } = req.body;

        // validation
        if (!email || !role || !communities || !hostId) {
            return res.status(400).json({
                success: false,
                message: 'Please fill in all the fields'
            })
        }

        // check if the institute exists
        const host = await Host.findById(hostId);

        if (!host) {
            return res.status(400).json({
                success: false,
                message: 'Host not found'
            })
        }

        // check if the role is valid
        if (role !== 'Student' && role !== 'Alumni') {
            return res.status(400).json({
                success: false,
                message: 'Invalid role'
            })
        }

        // check if the community exists
        if (!communities.length) {
            return res.status(400).json({
                success: false,
                message: 'Please select a community'
            })
        }

        // check if the community is valid for the host
        const validCommunities = await Community.find({ communityId: { $in: communities }, hostId });

        if (validCommunities.length !== communities.length) {
            return res.status(400).json({
                success: false,
                message: 'Invalid community'
            })
        }

        // if community is valid add the _id to the communities array
        const invitedToCommunity = validCommunities.map(community => community._id);

        // check if the email is already invited
        const invite = await Invite.findOne({ email, host: hostId });

        if (invite) {
            return res.status(400).json({
                success: false,
                message: 'Email already invited'
            })
        }

        // send invitation email
        const invitationToken = generator.generate({
            length: 32,
            numbers: true,
            symbols: false,
            uppercase: true,
            lowercase: true
        });

        console.log(invitationToken);

        // save the invitation in the database
        const invitation = await Invite.create({
            email,
            host: hostId,
            role,
            community: invitedToCommunity,
            token: invitationToken
        });

        // Add the invite_id to the communities individually
        // for (const communityId of invitedToCommunity) {
        //     // Fetch the full Community document by ID
        //     const community = await Community.findById(communityId);

        //     if (community) { // Check if the community was found
        //         // Ensure invitedMembers is an array
        //         if (!community.invitedMembers) {
        //             community.invitedMembers = [];
        //         }

        //         // Add the invitation ID to invitedMembers
        //         community.invitedMembers.push(invitation._id);

        //         // Save the updated community
        //         await community.save();
        //     } else {
        //         console.log(`Community with ID ${communityId} not found`);
        //     }
        // }

        // TODO : Add email sending logic
        const webUrl = process.env.WEB_URL || 'http://localhost:5173';

        // Send the invitation email
        const mailResponse = await mailSender(
            email,
            'Invitation to join AlumniSuite',
            inviteMail(email, host.name, invitationToken, webUrl, host.email)
        );

        console.log('Email sent successfully:', mailResponse.response);

        return res.status(200).json({
            success: true,
            message: 'Invitation sent successfully'
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success: false,
            message: 'Internal Server Error'
        })
    }
};

exports.createCommunity = async (req, res) => {
    try {
        const { name, description, hostId } = req.body;

        // validation
        if (!name || !description || !hostId) {
            return res.status(400).json({
                success: false,
                message: 'Please fill in all the fields'
            })
        };

        // check if the community already exists for the host
        const host = await Host.findById(hostId);
        // find community matching the name and hostId
        const existingCommunity = await Community.findOne({ name, hostId });

        if (existingCommunity) {
            return res.status(400).json({
                success: false,
                message: 'Community already exists'
            })
        };

        // generate the communityId
        const communityId = await generateSlug(name);

        // create the community
        const newCommunity = await Community.create({
            communityId,
            hostId,
            name,
            description
        });

        // add the community to the host
        host.communities.push(newCommunity._id);
        await host.save();

        return res.status(201).json({
            success: true,
            message: 'Community created successfully',
            id: newCommunity.communityId
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: 'Internal Server Error'
        })
    };
};

exports.getAllCommunities = async (req, res) => {
    try {
        const { hostId } = req.params;

        console.log(hostId);

        // Validation
        if (!hostId) {
            return res.status(400).json({
                success: false,
                message: 'Please provide the host ID'
            });
        }

        // Check if the host exists
        const host = await Host.findById(hostId);
        if (!host) {
            return res.status(404).json({
                success: false,
                message: 'Host not found'
            });
        }

        // Get all the communities for the specified host
        const communities = await Community.find({ hostId: hostId }, { name: 1, communityId: 1, description: 1, _id: 0 });

        return res.status(200).json({
            success: true,
            communities
        });
    } catch (error) {
        console.error('Error fetching communities:', error); // Log the error for debugging
        return res.status(500).json({
            success: false,
            message: 'Internal Server Error'
        });
    }
};

exports.getProfile = async (req, res) => {
    try{
        const {hostId} = req.params;

        if(!hostId){
            return res.status(400).json({
                success: false,
                message: 'Please provide the host ID'
            });
        }

        const host = await Host.findById(hostId, {name: 1, email: 1, communities: 1, _id: 0, phone: 1, createdAt: 1, updatedAt: 1, socials: 1, contactInfo: 1, description: 1, logo: 1, address: 1}).populate('communities', {name: 1, communityId: 1, description: 1, _id: 0});

        if(!host){
            return res.status(404).json({
                success: false,
                message: 'Host not found'
            });
        }

        return res.status(200).json({
            success: true,
            data: host
        });
    }catch(error){
        console.log(error);
        return res.status(500).json({
            success: false,
            message: 'Internal Server Error'
        })
    }
};

exports.updateProfile = async (req, res) => {
    try{
        const {hostId} = req.params;
        const {name, phone, address, description, contactEmail, contactPhone, contactWebsite, faceBook, twitter, linkedIn, instagram} = req.body;

        if(!hostId){
            return res.status(400).json({
                success: false,
                message: 'Please provide the host ID'
            });
        }

        const host = await Host.findById(hostId);

        if(!host){
            return res.status(404).json({
                success: false,
                message: 'Host not found'
            });
        }

        if(name){
            host.name = name;
        }

        if(phone){
            host.phone = phone;
        }

        if(address){
            host.address = address;
        }

        if(description){
            host.description = description;
        }

        if(contactEmail || contactPhone || contactWebsite){
            host.contactInfo = {
                email: contactEmail,
                phNo: contactPhone,
                website: contactWebsite
            }
        }

        if(faceBook || twitter || linkedIn || instagram){
            host.socials = {
                facebook: faceBook,
                twitter: twitter,
                linkedIn: linkedIn,
                instagram: instagram
            }
        }

        await host.save();

        return res.status(200).json({
            success: true,
            message: 'Profile updated successfully. It may take a few minutes to reflect the changes.'
        });
    }catch(error){
        console.log(error);
        return res.status(500).json({
            success: false,
            message: 'Internal Server Error'
        })
    }
};


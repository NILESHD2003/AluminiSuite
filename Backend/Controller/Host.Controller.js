const Host = require('../Model/Host.Model');
const Invite = require('../Model/Invite.Model');
const generateSlug = require('../Utils/SlugGenerator');
const generator = require('generate-password');

const mailSender = require('../Utils/MailSender');
const inviteMail = require('../Mails/inviteMail');

exports.inviteMember = async (req, res) => {
    try {
        const { email, role, hostId } = req.body;

        // validation
        if (!email || !role || !hostId) {
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
            token: invitationToken
        });

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


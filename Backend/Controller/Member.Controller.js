const Member = require('../Model/Member.Model');
const Invite = require('../Model/Invite.Model');
const bcrypt = require('bcrypt');

exports.onboardMember = async (req, res) => {
    try{
        const { name, gender, dob, location, phone, password, confirmPassword } = req.body;

        const inviteToken  = req.query.invite;
        
        // validation
        if(!inviteToken || !name || !gender || !dob || !location || !phone || !password || !confirmPassword){
            return res.status(400).json({
                success: false,
                message: 'Please fill in all the fields'
            });
        }

        // check if the invite exists
        const invite = await Invite.findOne({ token: inviteToken });

        if(!invite){
            return res.status(400).json({
                success: false,
                message: 'Invite May be expired or invalid. Please contact the Host'
            });
        }

        // check if the member already exists
        const member = await Member.findOne({ email: invite.email });

        if(member){
            return res.status(400).json({
                success: false,
                message: 'Member already exists'
            });
        }

        // check if the password matches
        if(password !== confirmPassword){
            return res.status(400).json({
                success: false,
                message: 'Passwords do not match'
            });
        }

        // hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // create the member
        await Member.create({
            name,
            email: invite.email,
            gender,
            dob,
            location,
            phone,
            password: hashedPassword,
            role: invite.role,
            community: invite.community
        });

        // delete the invite
        await Invite.deleteOne({ token: inviteToken });

        // send confirmation response
        // TODO: Send Onboarding confirmation email

        return res.status(201).json({
            success: true,
            message: 'Member Onboarding successful'
            // TODO: send token as cookie for auto login
        });

    }catch(error){
        console.log(error);
        return res.status(500).json({
            success: false,
            message: 'Internal server error'
        });
    }
};

exports.getProfile = async (req, res) => {
    try{
        const {memberId} = req.params;

        if(!memberId){
            return res.status(400).json({
                success: false,
                message: 'Please fill in all the fields'
            });
        }

        const member = await Member.findById(memberId, { password: 0, __v: 0, _id: 0 });

        if(!member){
            return res.status(404).json({
                success: false,
                message: 'Member not found'
            });
        }

        return res.status(200).json({
            success: true,
            data: member
        });
    }catch(error){
        console.log(error);
        return res.status(500).json({
            success: false,
            message: 'Internal server error'
        });
    }
};

exports.updateProfile = async (req, res) => {
    try{
        const {memberId} = req.params;
        const { name, gender, dob, location, phone, bio } = req.body;

        if(!memberId){
            return res.status(400).json({
                success: false,
                message: 'Please fill in all the fields'
            });
        }

        const member = await Member.findById(memberId);

        if(!member){
            return res.status(404).json({
                success: false,
                message: 'Member not found'
            });
        }

        // update the member
        if(name) member.name = name;
        if(gender) member.gender = gender;
        if(dob) member.dob = dob;
        if(location) member.location = location;
        if(phone) member.phone = phone;
        if(bio) member.bio = bio;

        await member.save();

        return res.status(200).json({
            success: true,
            message: 'Profile updated successfully. It may take few minutes to reflect the changes.'
        });
    }catch(error){
        console.log(error);
        return res.status(500).json({
            success: false,
            message: 'Internal server error'
        });
    }
};
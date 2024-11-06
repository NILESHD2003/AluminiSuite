const Host = require('../Model/Host.Model');
const OTP = require('../Model/OTP.Model');
const Member = require('../Model/Member.Model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.registerHost = async (req, res) => {
    try {
        const { name, email, password, confirmPassword, phone, otp } = req.body;

        // validation
        if (!name || !email || !password || !confirmPassword || !otp || !phone) {
            return res.status(400).json({
                success: false,
                message: 'Please fill in all the fields'
            })
        }

        if (password !== confirmPassword) {
            return res.status(400).json({
                success: false,
                message: 'Passwords do not match'
            })
        }

        // check if the institute already exists
        const host = await Host.findOne({ email });

        if (host) {
            return res.status(400).json({
                success: false,
                message: 'Host already exists'
            })
        }

        // hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // check if the OTP is correct
        const otpCheck = await OTP.findOne({ email, otp });

        if (!otpCheck) {
            return res.status(400).json({
                success: false,
                message: 'Invalid OTP'
            })
        }

        // create the institute
        const newHost = await Host.create({
            name,
            email,
            password: hashedPassword,
            phone,
        });

        // send confirmation response
        return res.status(201).json({
            success: true,
            message: 'Host registered successfully. Continue to login.'
            // TODO: send token as cookie for auto login.
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: 'Internal Server Error'
        })
    }
};

exports.loginHost = async (req, res) => {
    try {
        const { email, password } = req.body;

        // validation
        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: 'Please fill all the fields'
            })
        }

        // check if the institute exists
        const host = await Host.findOne({ email });

        if (!host) {
            return res.status(400).json({
                success: false,
                message: 'Email not found'
            })
        }

        // check if password is correct using hashed password
        if (!bcrypt.compareSync(password, host.password)) {
            return res.status(401).json({
                success: false,
                message: 'Invalid password'
            })
        }
        // generate token and send as cookie
        const token = jwt.sign({ id: host._id }, process.env.JWT_SECRET, {
            expiresIn: '7d'
        });

        return res.cookie('token', token, { httpOnly: true }).status(200).json({
            success: true,
            message: 'Host logged in successfully',
            id: host._id
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: 'Internal Server Error'
        })
    }
};

exports.sendOTP = async (req, res) => {
    try {
        const { email, hostName } = req.body;

        // validate email and host name
        if (!email || !hostName) {
            return res.status(400).json({
                success: false,
                message: `Please provide email and host name`,
            })
        }

        var otp = otpGenerator.generate(4, {
            upperCaseAlphabets: true,
            lowerCaseAlphabets: false,
            specialChars: false,
            digits: true,
        });

        const result = await OTP.findOne({ otp: otp });

        while (result) {
            otp = otpGenerator.generate(4, {
                upperCaseAlphabets: true,
                lowerCaseAlphabets: false,
                specialChars: false,
                digits: true,
            })
        }
        console.log("OTP", otp);
        const otpPayload = { email, otp, hostName };
        const otpBody = await OTP.create(otpPayload);

        return res.status(200).json({
            success: true,
            message: `OTP Sent Successfully`,
            otp,
        })
    } catch (error) {
        console.log("Ithe ", error)
        return res.status(500).json({ success: false, error: error.message })
    }
};

exports.loginMember = async (req, res) => {
    try{
        const { email, password } = req.body;

        // validation
        if(!email || !password){
            return res.status(400).json({
                success: false,
                message: 'Please fill all the fields'
            })
        }

        // check if the member exists
        const member = await Member.findOne({ email });

        if(!member){
            return res.status(400).json({
                success: false,
                message: 'Email not found'
            })
        }

        // check if password is correct using hashed password
        if(!bcrypt.compare(password, member.password)){
            return res.status(401).json({
                success: false,
                message: 'Invalid password'
            })
        }

        // generate token and send as cookie
        const token = jwt.sign({ id: member._id }, process.env.JWT_SECRET, {
            expiresIn: '15d'
        });

        return res.cookie('token', token, { httpOnly: true }).status(200).json({
            success: true,
            message: 'Member logged in successfully',
            id: member._id
        })
    }catch(error){
        console.log(error);
        return res.status(500).json({
            success: false,
            message: 'Internal server error'
        })
    }
};

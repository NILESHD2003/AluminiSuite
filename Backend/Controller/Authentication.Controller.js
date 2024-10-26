const mongoose = require('mongoose');
const Institute = require('../Model/Institute.Model');
const OTP = require('../Model/OTP.Model');
const otpGenerator = require('otp-generator');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.registerInstitute = async (req, res) => {
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
        const institute = await Institute.findOne({ email });

        if (institute) {
            return res.status(400).json({
                success: false,
                message: 'Institute already exists'
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
        const newInstitute = await Institute.create({
            name,
            email,
            password: hashedPassword,
            phone,
        });

        // send confirmation response
        return res.status(201).json({
            success: true,
            message: 'Institute registered successfully. Continue to login.'
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: 'Internal Server Error'
        })
    }
};

exports.loginInstitute = async (req, res) => {
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
        const institute = await Institute.findOne({ email });

        if (!institute) {
            return res.status(400).json({
                success: false,
                message: 'Email not found'
            })
        }

        // check if password is correct using hashed password
        if (!bcrypt.compareSync(password, institute.password)) {
            return res.status(401).json({
                success: false,
                message: 'Invalid password'
            })
        }
        // generate token and send as cookie
        const token = jwt.sign({ id: institute._id }, process.env.JWT_SECRET, {
            expiresIn: '7d'
        });

        return res.cookie('token', token, { httpOnly: true }).status(200).json({
            success: true,
            message: 'Institute logged in successfully'
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
        const { email, instituteName } = req.body;

        // validate email
        if (!email || !instituteName) {
            return res.status(400).json({
                success: false,
                message: `Please provide email and institute name`,
            })
        }

        var otp = otpGenerator.generate(6, {
            upperCaseAlphabets: true,
            lowerCaseAlphabets: false,
            specialChars: false,
            digits: true,
        })
        const result = await OTP.findOne({ otp: otp })
        while (result) {
            otp = otpGenerator.generate(4, {
                upperCaseAlphabets: true,
                lowerCaseAlphabets: false,
                specialChars: false,
                digits: true,
            })
        }
        console.log("OTP", otp);
        const otpPayload = { email, otp, instituteName }
        const otpBody = await OTP.create(otpPayload)

        return res.status(200).json({
            success: true,
            message: `OTP Sent Successfully`,
            otp,
        })
    } catch (error) {
        console.log("Ithe ", error)
        return res.status(500).json({ success: false, error: error.message })
    }
}

const userModel = require('../models/user.model');
const userService = require('../services/user.service');
const { validationResult } = require('express-validator');
const blackListTokenModel = require('../models/blacklistToken.model');

module.exports.registerUser = async (req, res, next) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        console.log(req.body);

        const { fullname, email, password } = req.body;

        if (!fullname || !fullname.firstname || !fullname.lastname) {
            return res.status(400).json({ error: 'Firstname and Lastname are required' });
        }

        const hashedPassword = await userModel.hashPassword(password);

        const user = await userService.createUser({
            firstname: fullname.firstname,
            lastname: fullname.lastname,
            email,
            password: hashedPassword
        });

        const token = user.generateAuthToken();

        res.status(201).json({ token, user });
    } catch (error) {
        next(error);
    }
};

module.exports.loginUser = async (req, res, next) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { email, password } = req.body;

        const user = await userService.findUserByEmail(email);
        if (!user) {
            return res.status(400).json({ error: 'Invalid email or password' });
        }

        const isValid = await user.isValidPassword(password);
        if (!isValid) {
            return res.status(400).json({ error: 'Invalid email or password' });
        }

        const token = user.generateAuthToken();

        res.cookie('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            maxAge: 3600000
        });

        res.status(200).json({ token, user });
    } catch (error) {
        next(error);
    }
};

module.exports.getUserProfile = async (req, res, next) => {
    try {
        res.status(200).json(req.user);
    } catch (error) {
        next(error);
    }
};


module.exports.logoutUser = async (req, res, next) => {
    try {
        res.clearCookie('token');
        const token = req.cookies.token || req.headers.authorization.split(' ')[1];
        await blackListTokenModel.create({token});
        res.status(200).json({ message: 'Logged out' });
    } catch (error) {
        next(error);
    }
};
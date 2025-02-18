const captainModel = require('../models/captain.model');
const captainService = require('../services/captain.service');
const { validationResult } = require('express-validator');
const blackListTokenModel = require('../models/blacklistToken.model');

module.exports.registerCaptain = async (req, res, next) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { fullname, email, password, vehicle } = req.body;

        const isCaptainAlready = await captainModel.findOne({ email });

        if (isCaptainAlready) {
            return res.status(400).json({ message: 'Captain already exists' });
        }

        if (!fullname || !fullname.firstname || !fullname.lastname) {
            return res.status(400).json({ error: 'Firstname and Lastname are required' });
        }

        const hashedPassword = await captainModel.hashPassword(password);

        const captain = await captainService.createCaptain({
            firstname: fullname.firstname,
            lastname: fullname.lastname,
            email,
            password: hashedPassword,
            vehicle
        });

        const token = captain.generateAuthToken();

        res.status(201).json({ token, captain });
    } catch (error) {
        next(error);
    }
};

module.exports.loginCaptain = async (req, res, next) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { email, password } = req.body;

        const captain = await captainService.findCaptainByEmail(email);
        if (!captain) {
            return res.status(400).json({ error: 'Invalid email or password' });
        }

        const isValid = await captain.isValidPassword(password);
        if (!isValid) {
            return res.status(400).json({ error: 'Invalid email or password' });
        }

        const token = captain.generateAuthToken();

        res.cookie('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            maxAge: 3600000
        });

        res.status(200).json({ token, captain });
    } catch (error) {
        next(error);
    }
};

module.exports.getCaptainProfile = async (req, res, next) => {
    try {
        res.status(200).json(req.captain);
    } catch (error) {
        next(error);
    }
};

module.exports.logoutCaptain = async (req, res, next) => {
    try {
        res.clearCookie('token');
        const token = req.cookies.token || req.headers.authorization.split(' ')[1];

        await blackListTokenModel.create({ token });

        res.status(200).json({ message: 'Logged out' });
    } catch (error) {
        next(error);
    }
};

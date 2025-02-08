const captainModel = require('../models/captain.model');
const captainService = require('../services/captain.service');

module.exports.registerCaptain = async (req, res, next) => {
    try {
        const { firstname, lastname, email, password, color, plate, capacity, vehicleType } = req.body;

        if (!firstname || !lastname || !email || !password || !color || !plate || !capacity || !vehicleType) {
            return res.status(400).json({ error: 'All fields are required' });
        }

        const hashedPassword = await captainModel.hashPassword(password);

        const captain = await captainService.createCaption({
            firstname,
            lastname,
            email,
            password: hashedPassword,
            color,
            plate,
            capacity,
            vehicleType
        });

        const token = captain.generateAuthToken();

        res.status(201).json({ token, captain });
    } catch (error) {
        next(error);
    }
};